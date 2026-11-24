#!/usr/bin/env python3
"""LUMORA — récupération automatique des actualités.

Lit les flux RSS/Atom listés dans news/sources.json, garde pour chaque article :
titre, date, résumé fourni par la source, lien vers l'original, image (seulement si la
source l'autorise), univers LUMORA et découverte liée. Fusionne avec les actualités déjà
connues (data/news.json), retire les doublons et les articles trop anciens, puis écrit :
  - data/news.json  (lu par le site)
  - data/news.js    (même contenu, pour ouvrir le site en local sans serveur)

Utilisation :
  python scripts/fetch_news.py               # télécharge les flux
  python scripts/fetch_news.py --offline DIR # lit DIR/<id>.xml (tests sans réseau)
"""
import argparse, calendar, hashlib, html, json, re, sys, time
from datetime import datetime, timezone, timedelta
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import urlsplit, urlunsplit, parse_qsl, urlencode

import feedparser

ROOT = Path(__file__).resolve().parent.parent
CONFIG = ROOT / "news" / "sources.json"
OUT_JSON = ROOT / "data" / "news.json"
OUT_JS = ROOT / "data" / "news.js"
USER_AGENT = "Mozilla/5.0 (compatible; LUMORA-RSS/1.0; +https://fadelseck01.github.io/lumora/)"
TIMEOUT = 20


# ---------- texte ----------
class _Text(HTMLParser):
    def __init__(self):
        super().__init__(); self.parts = []; self.imgs = []
    def handle_data(self, d): self.parts.append(d)
    def handle_starttag(self, tag, attrs):
        if tag == "img":
            src = dict(attrs).get("src")
            if src: self.imgs.append(src)
        if tag in ("p", "br", "li"): self.parts.append(" ")

def strip_html(s):
    p = _Text(); p.feed(s or ""); p.close()
    txt = html.unescape("".join(p.parts))
    txt = re.sub(r"The post .{0,300}? appeared first on .{0,120}?\.?\s*$", "", txt.strip(), flags=re.S)
    return re.sub(r"\s+", " ", txt).strip(), p.imgs

def trim(s, n=280):
    if len(s) <= n: return s
    cut = s[:n].rsplit(" ", 1)[0].rstrip(",;:—-")
    return cut + "…"

def clean_link(url):
    """Retire les paramètres de suivi (utm_…) pour reconnaître les doublons."""
    try:
        p = urlsplit(url.strip())
        q = [(k, v) for k, v in parse_qsl(p.query) if not k.lower().startswith(("utm_", "fbclid", "gclid"))]
        return urlunsplit((p.scheme, p.netloc, p.path, urlencode(q), ""))
    except Exception:
        return url.strip()

def is_http(url): return isinstance(url, str) and url.startswith(("https://", "http://"))


# ---------- classement ----------
def compile_keywords(mapping):
    out = {}
    for key, words in mapping.items():
        out[key] = [re.compile(r"(?<![\w-])" + re.escape(w.lower()) + r"s?(?![\w-])") for w in words]
    return out

def classify(text, uni_rx, default):
    """Univers qui a le plus de mots-clés ; en cas d'égalité, l'univers par défaut de la source l'emporte."""
    t = text.lower()
    scores = {uni: sum(1 for rx in rxs if rx.search(t)) for uni, rxs in uni_rx.items()}
    top = max(scores.values()) if scores else 0
    if top == 0: return default
    best = [u for u, s in scores.items() if s == top]
    return default if default in best else best[0]

def related_of(text, rel_rx):
    t = text.lower()
    for word, (rx, target) in rel_rx.items():
        if rx.search(t): return target
    return None


# ---------- images ----------
def find_image(entry, extra_imgs):
    for m in entry.get("media_content", []) or []:
        if is_http(m.get("url")) and (m.get("medium") == "image" or "image" in (m.get("type") or "") or re.search(r"\.(jpe?g|png|webp)(\?|$)", m["url"], re.I)):
            return m["url"]
    for m in entry.get("media_thumbnail", []) or []:
        if is_http(m.get("url")): return m["url"]
    for l in entry.get("links", []) or []:
        if l.get("rel") == "enclosure" and "image" in (l.get("type") or "") and is_http(l.get("href")):
            return l["href"]
    for src in extra_imgs:
        if is_http(src): return src
    return None


# ---------- lecture d'un flux ----------
def load_feed(src, offline_dir):
    if offline_dir:
        return feedparser.parse((Path(offline_dir) / f"{src['id']}.xml").read_bytes())
    import requests
    r = requests.get(src["url"], headers={"User-Agent": USER_AGENT, "Accept": "application/rss+xml, application/atom+xml, application/xml;q=0.9, */*;q=0.5"}, timeout=TIMEOUT)
    r.raise_for_status()
    return feedparser.parse(r.content)

def entry_date(e):
    for k in ("published_parsed", "updated_parsed"):
        if e.get(k): return datetime.fromtimestamp(calendar.timegm(e[k]), tz=timezone.utc)
    return None

def parse_source(src, feed, uni_rx, rel_rx, now):
    items = []
    for e in feed.entries:
        link = e.get("link") or ""
        title, _ = strip_html(e.get("title") or "")
        if not title or not is_http(link): continue
        raw = e.get("summary") or e.get("description") or ""
        if not raw and e.get("content"): raw = e["content"][0].get("value", "")
        summary, imgs = strip_html(raw)
        if e.get("content") and not imgs:
            _, imgs = strip_html(e["content"][0].get("value", ""))
        mode = src.get("summary", "trim")
        if mode == "none": summary = ""
        elif mode == "trim": summary = trim(summary)
        else: summary = summary[:1200]
        if summary.lower() == title.lower(): summary = ""
        pub = entry_date(e) or now
        if pub > now + timedelta(hours=6): pub = now        # dates futures improbables
        text = f"{title} {summary}"
        link = clean_link(link)
        items.append({
            "id": hashlib.sha1(link.encode()).hexdigest()[:16],
            "source": src["id"], "sourceName": src["name"], "lang": src.get("lang", "en"),
            "title": title, "summary": summary, "link": link,
            "published": pub.strftime("%Y-%m-%dT%H:%M:%SZ"),
            "image": find_image(e, imgs) if src.get("image") else None,
            "imageCredit": src.get("image_credit") if src.get("image") else None,
            "universe": classify(text, uni_rx, src.get("default_universe", "science")),
            "related": related_of(text, rel_rx),
        })
    return items


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--offline", help="dossier contenant <id>.xml pour tester sans réseau")
    args = ap.parse_args()

    cfg = json.loads(CONFIG.read_text(encoding="utf-8"))
    uni_rx = compile_keywords(cfg["universes"])
    rel_rx = {w: (re.compile(r"(?<![\w-])" + re.escape(w.lower()) + r"s?(?![\w-])"), t) for w, t in cfg["related"].items()}
    now = datetime.now(timezone.utc).replace(microsecond=0)

    old = {}
    if OUT_JSON.exists():
        try: old = json.loads(OUT_JSON.read_text(encoding="utf-8"))
        except Exception: old = {}
    known = {it["id"]: it for it in old.get("items", [])}

    status, ok_count = [], 0
    active_ids = set()
    for src in cfg["sources"]:
        if src.get("enabled", True) is False: continue
        active_ids.add(src["id"])
        try:
            feed = load_feed(src, args.offline)
            if feed.bozo and not feed.entries:
                raise ValueError(f"flux illisible : {feed.bozo_exception}")
            got = parse_source(src, feed, uni_rx, rel_rx, now)
            new = 0
            for it in got:
                if it["id"] not in known: new += 1; it["firstSeen"] = now.strftime("%Y-%m-%dT%H:%M:%SZ")
                else: it["firstSeen"] = known[it["id"]].get("firstSeen", it["published"])
                known[it["id"]] = it
            status.append({"id": src["id"], "name": src["name"], "home": src.get("home"), "ok": True, "found": len(got), "new": new})
            ok_count += 1
            print(f"✓ {src['id']:<20} {len(got):>3} articles, {new} nouveaux")
        except Exception as ex:
            status.append({"id": src["id"], "name": src["name"], "home": src.get("home"), "ok": False, "error": str(ex)[:200]})
            print(f"✗ {src['id']:<20} {ex}", file=sys.stderr)
        if not args.offline: time.sleep(1)   # politesse entre deux sources

    # tri, âge maximum, plafond par source et total
    limit = now - timedelta(days=cfg.get("max_age_days", 45))
    items = [it for it in known.values() if it["source"] in active_ids and datetime.strptime(it["published"], "%Y-%m-%dT%H:%M:%SZ").replace(tzinfo=timezone.utc) >= limit]
    items.sort(key=lambda it: it["published"], reverse=True)
    per, final = {}, []
    for it in items:
        per[it["source"]] = per.get(it["source"], 0) + 1
        if per[it["source"]] <= cfg.get("max_per_source", 20): final.append(it)
    final = final[: cfg.get("max_items", 120)]

    changed = [i["id"] for i in final] != [i["id"] for i in old.get("items", [])] or any(
        a != b for a, b in zip(final, old.get("items", [])))
    data = {"updated": now.strftime("%Y-%m-%dT%H:%M:%SZ") if changed else old.get("updated", now.strftime("%Y-%m-%dT%H:%M:%SZ")),
            "checked": now.strftime("%Y-%m-%dT%H:%M:%SZ"),
            "sources": status, "items": final}
    OUT_JSON.parent.mkdir(parents=True, exist_ok=True)
    OUT_JSON.write_text(json.dumps(data, ensure_ascii=False, indent=1), encoding="utf-8")
    OUT_JS.write_text("/* généré par scripts/fetch_news.py — ne pas modifier à la main */\nwindow.LUMORA_NEWS = " + json.dumps(data, ensure_ascii=False) + ";\n", encoding="utf-8")
    print(f"→ {len(final)} actualités ({'modifiées' if changed else 'inchangées'}), {ok_count}/{len(active_ids)} sources lues")
    import os
    if os.environ.get("GITHUB_OUTPUT"):
        with open(os.environ["GITHUB_OUTPUT"], "a") as f: f.write(f"changed={'true' if changed else 'false'}\n")
    if ok_count == 0:
        sys.exit("Aucune source n'a pu être lue.")

if __name__ == "__main__":
    main()
