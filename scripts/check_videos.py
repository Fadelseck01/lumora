"""Vérifie les vidéos YouTube (chaîne + titre) via oEmbed. Usage: python check_videos.py ID [ID...]"""
import sys, json, requests
UA = {"User-Agent": "Mozilla/5.0 (compatible; LUMORA-check/1.0)"}
out = {}
for vid in sys.argv[1:]:
    try:
        r = requests.get("https://www.youtube.com/oembed", params={"url": f"https://www.youtube.com/watch?v={vid}", "format": "json"}, headers=UA, timeout=20)
        if r.ok:
            j = r.json(); out[vid] = {"channel": j.get("author_name"), "title": j.get("title")}
        else:
            out[vid] = {"error": r.status_code}
    except Exception as e:
        out[vid] = {"error": str(e)}
    print(vid, "|", out[vid])
print(json.dumps(out, ensure_ascii=False, indent=1))
