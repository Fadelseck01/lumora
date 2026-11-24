"""LUMORA — vérification des vidéos YouTube via oEmbed.

Deux modes :
  python check_videos.py ID [ID...]   -> affiche la chaîne et le titre de chaque vidéo (pour choisir une vidéo)
  python check_videos.py --site       -> vérifie toutes les vidéos des articles (articles*.js),
                                         écrit data/videos-status.js / .json et signale les vidéos disparues
"""
import sys, json, re, os, glob, datetime
import requests

UA = {"User-Agent": "Mozilla/5.0 (compatible; LUMORA-check/1.0; +https://fadelseck01.github.io/lumora/)"}
MAX_VIDEOS = 30          # limite fixée pour le site
DEAD_CODES = {401, 403, 404}   # supprimée, privée ou intégration interdite


def check(vid):
    try:
        r = requests.get("https://www.youtube.com/oembed",
                         params={"url": f"https://www.youtube.com/watch?v={vid}", "format": "json"},
                         headers=UA, timeout=20)
    except Exception as e:
        return {"status": "unknown", "error": str(e)}
    if r.ok:
        j = r.json()
        return {"status": "ok", "channel": j.get("author_name"), "title": j.get("title")}
    if r.status_code in DEAD_CODES:
        return {"status": "dead", "code": r.status_code}
    return {"status": "unknown", "code": r.status_code}


def site_mode():
    root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    videos = {}
    for f in sorted(glob.glob(os.path.join(root, "articles*.js"))):
        txt = open(f, encoding="utf-8").read()
        for m in re.finditer(r'^(\w+):\s*\{\s*\n\s*video:\s*\{id:"([^"]+)"', txt, re.M):
            videos[m.group(2)] = m.group(1)
    print(f"{len(videos)} vidéo(s) trouvée(s) (limite : {MAX_VIDEOS})")
    if len(videos) > MAX_VIDEOS:
        print(f"::warning::{len(videos)} vidéos, au-delà de la limite de {MAX_VIDEOS}")

    status_path = os.path.join(root, "data", "videos-status.json")
    old = {}
    if os.path.exists(status_path):
        old = json.load(open(status_path, encoding="utf-8"))
    old_dead = set(old.get("dead", []))

    results, dead = {}, []
    for vid, article in videos.items():
        res = check(vid)
        res["article"] = article
        results[vid] = res
        print(vid, "|", article, "|", res)
        if res["status"] == "dead":
            dead.append(vid)
        elif res["status"] == "unknown" and vid in old_dead:
            dead.append(vid)  # en cas de doute, on garde l'état précédent

    dead = sorted(set(dead))
    newly_dead = [v for v in dead if v not in old_dead]
    revived = [v for v in old_dead if v not in dead and v in videos]
    data = {"checked": datetime.datetime.utcnow().strftime("%Y-%m-%d"), "count": len(videos), "dead": dead,
            "videos": results}
    changed = dead != sorted(old_dead) or not os.path.exists(status_path)
    json.dump(data, open(status_path, "w", encoding="utf-8"), ensure_ascii=False, indent=1)
    with open(os.path.join(root, "data", "videos-status.js"), "w", encoding="utf-8") as fh:
        fh.write("/* Généré par scripts/check_videos.py — vidéos YouTube indisponibles, masquées sur le site. */\n")
        fh.write("window.LUMORA_DEAD_VIDEOS = " + json.dumps(dead) + ";\n")

    out = os.environ.get("GITHUB_OUTPUT")
    if out:
        with open(out, "a") as fh:
            fh.write(f"changed={'true' if changed else 'false'}\n")
            fh.write(f"newly_dead={' '.join(newly_dead)}\n")
            report = "\n".join(f"- `{v}` (découverte : **{results[v]['article']}**), code {results[v].get('code','?')}"
                               for v in newly_dead)
            fh.write("report<<EOF\n" + report + "\nEOF\n")
    print("Indisponibles :", dead or "aucune", "| nouvelles :", newly_dead or "aucune", "| revenues :", revived or "aucune")


if __name__ == "__main__":
    args = sys.argv[1:]
    if args == ["--site"] or not args:
        site_mode()
    else:
        out = {}
        for vid in args:
            out[vid] = check(vid)
            print(vid, "|", out[vid])
