"""Outil Wikimedia Commons pour LUMORA (exécuté dans GitHub Actions).
  search "mots clés" ...           -> liste des fichiers trouvés (titre, licence)
  get chemin=File:Nom.jpg ...      -> télécharge une version de 1400 px et enregistre licence/auteur dans assets/credits.json
"""
import sys, json, os, re, urllib.request, urllib.parse
API = "https://commons.wikimedia.org/w/api.php"
UA = {"User-Agent": "LUMORA-site/1.0 (https://github.com/Fadelseck01/lumora)"}
def api(**params):
    params.update(format="json", formatversion="2")
    req = urllib.request.Request(API + "?" + urllib.parse.urlencode(params), headers=UA)
    return json.load(urllib.request.urlopen(req, timeout=60))
def strip(html): return re.sub(r"<[^>]+>", "", html or "").strip()
def meta(title):
    d = api(action="query", titles=title, prop="imageinfo", iiprop="url|extmetadata|size", iiurlwidth=1400)
    p = d["query"]["pages"][0]
    if "imageinfo" not in p: return None
    ii = p["imageinfo"][0]; em = ii.get("extmetadata", {})
    g = lambda k: strip(em.get(k, {}).get("value", ""))
    return {"title": title, "url": ii.get("thumburl") or ii["url"], "w": ii.get("width"), "h": ii.get("height"),
            "license": g("LicenseShortName"), "artist": g("Artist"), "credit": g("Credit")[:120], "desc": g("ImageDescription")[:200]}
mode, args = sys.argv[1], sys.argv[2:]
if mode == "search":
    for q in args:
        print(f"=== {q}")
        d = api(action="query", list="search", srsearch=q, srnamespace=6, srlimit=8)
        for r in d["query"]["search"]:
            m = meta(r["title"])
            if m: print(f"  {m['title']} | {m['license']} | {m['artist'][:50]} | {m['w']}x{m['h']} | {m['desc'][:90]}")
elif mode == "get":
    cred_path = "assets/credits.json"
    credits = json.load(open(cred_path)) if os.path.exists(cred_path) else {}
    for pair in args:
        path, title = pair.split("=", 1)
        assert path.startswith("assets/")
        m = meta(title)
        if not m: print("INTROUVABLE", title); continue
        os.makedirs(os.path.dirname(path), exist_ok=True)
        req = urllib.request.Request(m["url"], headers=UA)
        open(path, "wb").write(urllib.request.urlopen(req, timeout=120).read())
        credits[path] = {k: m[k] for k in ("title", "license", "artist", "credit")}
        print("OK", path, "|", m["license"], "|", m["artist"][:60])
    json.dump(credits, open(cred_path, "w"), ensure_ascii=False, indent=1)
