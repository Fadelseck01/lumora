#!/usr/bin/env python3
"""LUMORA — « Aujourd'hui dans l'histoire ».

Récupère, pour chaque jour de l'année, les événements « Ce jour-là » de Wikipédia
(en français et en anglais) via l'API REST de Wikimedia, les nettoie et écrit un petit
fichier par jour : data/onthisday/MM-DD.js (chargé à la demande par le site, y compris
quand on l'ouvre en local sans serveur).

Contenu : texte de l'événement, année, articles Wikipédia liés (liens https uniquement),
image d'illustration avec lien vers sa page de crédits. Les événements les plus violents
(attentats, massacres…) sont écartés de la mise en avant.

Utilisation :
  python scripts/fetch_onthisday.py                 # les 366 jours
  python scripts/fetch_onthisday.py --days 11-25,11-26
  python scripts/fetch_onthisday.py --missing       # seulement les jours absents
"""
import argparse, json, re, sys, time
from pathlib import Path
from urllib.parse import quote, unquote, urlsplit

import requests

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "data" / "onthisday"
UA = "LUMORA/1.0 (https://fadelseck01.github.io/lumora/; site de découverte éducatif) python-requests"
API = "https://{lang}.wikipedia.org/api/rest_v1/feed/onthisday/{kind}/{mm}/{dd}"
LANGS = ("fr", "en")
MAX_SELECTED, MAX_EVENTS = 8, 14
MAX_BYTES = 3_000_000

# sujets écartés (on reste un site de découverte, ouvert à tous les âges)
VIOLENT = re.compile(r"(attentat|terroris|massacre|génocide|genocid|fusillade|tuerie|shooting|"
                     r"lynch|décapit|behead|suicide|\bviols?\b|\brape\b|torture|pogrom|prise d'otages|hostage)", re.I)


def https(u):
    if not isinstance(u, str): return None
    u = u.strip()
    try: p = urlsplit(u)
    except ValueError: return None
    return u if p.scheme == "https" and p.netloc.endswith(("wikipedia.org", "wikimedia.org")) else None


def clean_text(s, n):
    s = re.sub(r"<[^>]+>", "", s or "")            # le flux est en texte, mais on ne prend aucun risque
    s = re.sub(r"\s+", " ", s).strip()
    return s[:n]


def image_of(pages, lang):
    """Première image disponible parmi les articles liés, avec sa page de crédits."""
    for pg in pages:
        th, orig = pg.get("thumbnail") or {}, pg.get("originalimage") or {}
        src = https(th.get("source")) or https(orig.get("source"))
        if not src: continue
        w, h = th.get("width") or 0, th.get("height") or 0
        ow, oh = orig.get("width") or 0, orig.get("height") or 0
        if "/thumb/" in src and ow > 960:
            src = re.sub(r"/\d+px-", "/960px-", src); w, h = 960, round(oh * 960 / ow) if ow else 0
        elif https(orig.get("source")) and ow and ow <= 1600:
            src, w, h = orig["source"], ow, oh
        m = re.search(r"/wikipedia/([a-z]+)/(?:thumb/)?[0-9a-f]/[0-9a-f]{2}/([^/]+)", src)
        if not m: continue
        repo, fname = m.group(1), unquote(m.group(2))
        free = repo == "commons"
        if free: page = "https://commons.wikimedia.org/wiki/File:" + quote(fname)
        else: page = f"https://{repo}.wikipedia.org/wiki/" + ("Fichier:" if repo == "fr" else "File:") + quote(fname)
        return {"src": src, "w": w, "h": h, "file": fname[:160], "page": page, "free": free}
    return None


def event(e, lang):
    text = clean_text(e.get("text"), 400)
    year = e.get("year")
    if not text or not isinstance(year, int): return None
    pages = [p for p in (e.get("pages") or []) if isinstance(p, dict)]
    links = []
    for p in pages[:4]:
        url = https(((p.get("content_urls") or {}).get("desktop") or {}).get("page"))
        title = clean_text(((p.get("titles") or {}).get("normalized")) or p.get("normalizedtitle") or p.get("title", "").replace("_", " "), 120)
        if url and title: links.append({"t": title, "u": url})
    return {"y": year, "t": text, "links": links, "img": image_of(pages, lang),
            "soft": not VIOLENT.search(text + " " + " ".join(l["t"] for l in links))}


def fetch(lang, kind, mm, dd, s):
    url = API.format(lang=lang, kind=kind, mm=mm, dd=dd)
    for attempt in range(4):
        try:
            r = s.get(url, timeout=25, stream=True)
            if r.status_code == 404: return []
            if r.status_code in (429, 500, 502, 503, 504):
                time.sleep(3 * (attempt + 1)); continue
            r.raise_for_status()
            data = r.raw.read(MAX_BYTES + 1, decode_content=True)
            if len(data) > MAX_BYTES: raise ValueError("réponse trop volumineuse")
            return (json.loads(data) or {}).get(kind) or []
        except (requests.RequestException, ValueError) as ex:
            if attempt == 3: print(f"  ! {lang} {kind} {mm}/{dd} : {ex}", file=sys.stderr); return None
            time.sleep(2 * (attempt + 1))
    return None


def day(mm, dd, s):
    out = {"d": f"{mm}-{dd}"}
    for lang in LANGS:
        sel = fetch(lang, "selected", mm, dd, s); time.sleep(0.15)
        evs = fetch(lang, "events", mm, dd, s); time.sleep(0.15)
        if sel is None and evs is None: return None
        selected = [x for x in (event(e, lang) for e in (sel or [])) if x][:MAX_SELECTED]
        seen = {(x["y"], x["t"][:40]) for x in selected}
        others = [x for x in (event(e, lang) for e in (evs or [])) if x and (x["y"], x["t"][:40]) not in seen]
        # on garde de préférence les événements illustrés et non violents, du plus ancien au plus récent
        others.sort(key=lambda x: (not x["soft"], x["img"] is None))
        others = sorted(others[:MAX_EVENTS], key=lambda x: x["y"])
        out[lang] = {"selected": selected, "events": others}
    return out


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--days", default="")
    ap.add_argument("--missing", action="store_true")
    a = ap.parse_args()
    OUT.mkdir(parents=True, exist_ok=True)
    if a.days:
        days = [tuple(d.split("-")) for d in a.days.split(",")]
    else:
        lengths = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
        days = [(f"{m:02d}", f"{d:02d}") for m in range(1, 13) for d in range(1, lengths[m - 1] + 1)]
    s = requests.Session(); s.headers.update({"User-Agent": UA, "Accept": "application/json"})
    changed, failed = 0, 0
    for mm, dd in days:
        f = OUT / f"{mm}-{dd}.js"
        if a.missing and f.exists(): continue
        d = day(mm, dd, s)
        if not d: failed += 1; continue
        body = ("/* LUMORA — Ce jour-là (" + f"{mm}-{dd}" + "). Source : Wikipédia (CC BY-SA 4.0). Fichier généré par scripts/fetch_onthisday.py */\n"
                "(window.LUMORA_OTD = window.LUMORA_OTD || {})[" + json.dumps(f"{mm}-{dd}") + "] = "
                + json.dumps(d, ensure_ascii=False, separators=(",", ":")).replace("</", "<\\/") + ";\n")
        if not f.exists() or f.read_text(encoding="utf-8") != body:
            f.write_text(body, encoding="utf-8"); changed += 1
    print(f"{len(days)} jours traités, {changed} modifiés, {failed} en échec")
    gh = __import__("os").environ.get("GITHUB_OUTPUT")
    if gh:
        with open(gh, "a") as fh: fh.write(f"changed={'true' if changed else 'false'}\n")
    sys.exit(1 if failed > len(days) // 4 else 0)


if __name__ == "__main__":
    main()
