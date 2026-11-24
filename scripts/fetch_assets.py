#!/usr/bin/env python3
"""LUMORA — télécharge les photos sous licence libre listées dans assets/remote-photos.json.
Une photo déjà présente n'est jamais retéléchargée. Les images sont réduites à 1600 px maximum."""
import io, json, os, sys
from pathlib import Path
import requests
from PIL import Image

ROOT = Path(__file__).resolve().parent.parent
LIST = ROOT / "assets" / "remote-photos.json"
UA = "Mozilla/5.0 (compatible; LUMORA-assets/1.0; +https://fadelseck01.github.io/lumora/)"

def main():
    photos = json.loads(LIST.read_text(encoding="utf-8")).get("photos", [])
    added = 0
    for p in photos:
        dest = ROOT / p["path"]
        if dest.exists(): continue
        try:
            r = requests.get(p["url"], headers={"User-Agent": UA}, timeout=60)
            r.raise_for_status()
            if not r.headers.get("content-type", "").startswith("image/"):
                raise ValueError(f"pas une image ({r.headers.get('content-type')})")
            im = Image.open(io.BytesIO(r.content)).convert("RGB")
            im.thumbnail((1600, 1600))
            dest.parent.mkdir(parents=True, exist_ok=True)
            im.save(dest, quality=86)
            added += 1
            print(f"✓ {p['path']} ({im.size[0]}×{im.size[1]})")
        except Exception as ex:
            print(f"✗ {p['path']} : {ex}", file=sys.stderr)
    print(f"→ {added} photo(s) ajoutée(s)")
    if os.environ.get("GITHUB_OUTPUT"):
        with open(os.environ["GITHUB_OUTPUT"], "a") as f: f.write(f"added={'true' if added else 'false'}\n")

if __name__ == "__main__":
    main()
