#!/usr/bin/env python3
"""
LUMORA — tests de mutation des protections de sécurité.

Principe : on « sabote » volontairement une protection à la fois (un mutant), puis on
relance la batterie d'attaques. Si les attaques détectent le sabotage, le mutant est
« tué » : la protection est bien couverte par les tests. Si un mutant « survit », cela
veut dire qu'une faille pourrait être réintroduite sans que personne ne s'en aperçoive.

Usage : python3 tests/security/mutation_test.py [--only id1,id2]
Code de sortie 0 = tous les mutants tués.
"""
import argparse, os, shutil, subprocess, sys, tempfile, time
from pathlib import Path

ROOT = Path(__file__).resolve().parents[2]
SUITE = ROOT / "tests" / "security" / "attack_suite.py"

# (id, fichier, texte d'origine, texte saboté, parties de la batterie à lancer, description)
# Remarque : safeUrl a deux barrières (préfixe http(s) puis analyse de l'URL). Saboter une seule
# des deux est un mutant « équivalent » (l'autre bloque encore) : on sabote donc les deux à la fois.
MUTANTS = [
    ("esc-off", "app.js",
     '''const esc = s => String(s ?? "").replace(/[&<>"'`]/g,''',
     '''const esc = s => String(s ?? "").replace(/(?!)/g,''',
     "news", "l'échappement HTML ne fait plus rien"),
    ("esc-no-quote", "app.js",
     '''.replace(/[&<>"'`]/g,''', '''.replace(/[&<>]/g,''',
     "news", "les guillemets ne sont plus échappés (évasion d'attribut)"),
    ("safeurl-any-scheme", "app.js",
     '''if(!/^https?:\\/\\//i.test(v)) return ""; try{ const p = new URL(v); return (p.protocol==="https:"||p.protocol==="http:") ? p.href : ""; }catch(e){ return ""; }''',
     '''return v;''',
     "news", "toutes les adresses sont acceptées telles quelles"),
    ("news-shape-off", "pages.js",
     '''(Array.isArray(newsData.items) ? newsData.items : [])''', '''(newsData.items||[])''',
     "news", "plus de contrôle de forme du flux d'actualités"),
    ("news-null-items", "pages.js",
     '''.filter(n=>n && typeof n==="object" && typeof n.universe==="string" && ''', '''.filter(n=>''',
     "news", "les entrées nulles/étranges du flux ne sont plus écartées"),
    ("noopener-off", "pages.js",
     '''target="_blank" rel="noopener noreferrer"''', '''target="_blank"''',
     "static", "liens externes sans protection noopener (tabnabbing)"),
    ("csp-off", "index.html",
     '''<meta http-equiv="Content-Security-Policy"''', '''<meta name="x-csp-disabled"''',
     "static", "plus de Content-Security-Policy"),
    ("csp-object", "index.html",
     ''' object-src 'none';''', '''''',
     "static", "la CSP autorise à nouveau <object>/<embed>"),
    ("csp-eval", "index.html",
     '''script-src 'self';''', '''script-src 'self' 'unsafe-eval';''',
     "static", "la CSP autorise eval()"),
    ("otd-links-unfiltered", "onthisday.js",
     '''.filter(l=>l && typeof l.t==="string" && safeUrl(l.u)).slice(0,3).map(l=>({t:l.t.slice(0,120), u:safeUrl(l.u)}))''',
     '''.filter(l=>l && typeof l.t==="string").slice(0,3).map(l=>({t:l.t.slice(0,120), u:l.u}))''',
     "otd", "les liens des événements Wikipédia ne sont plus filtrés"),
    ("otd-img-unfiltered", "onthisday.js",
     '''{src:safeUrl(e.img.src), page:safeUrl(e.img.page), free:e.img.free===true}''', '''{src:safeUrl(e.img.src), page:e.img.page, free:e.img.free===true}''',
     "otd", "le lien de crédit des images n'est plus filtré"),
    ("otd-shape-off", "onthisday.js",
     '''if(!e || typeof e!=="object" || !Number.isFinite(e.y) || typeof e.t!=="string" || !e.t.trim() || e.soft===false) return null;''',
     '''if(!e || e.soft===false) return null;''',
     "otd", "plus de contrôle de forme des événements"),
    ("otd-day-unchecked", "onthisday.js",
     '''function otdValid(k){ if(typeof k!=="string" || !/^\\d\\d-\\d\\d$/.test(k)) return false;''',
     '''function otdValid(k){ if(typeof k!=="string") return false; return true;''',
     "url", "la date de l'adresse n'est plus vérifiée (chargement de fichier détourné)"),
    ("decode-crash", "pages.js",
     '''try{ h = decodeURIComponent(h); }catch(e){ /* adresse mal encodée : on la garde telle quelle */ }''',
     '''h = decodeURIComponent(h);''',
     "url", "une adresse mal encodée fait planter le routeur"),
    ("lang-unchecked", "app.js",
     '''const isLang = v => v==="fr" || v==="en";''', '''const isLang = v => true;''',
     "storage", "la langue n'est plus vérifiée"),
    ("store-unchecked", "app.js",
     '''return (!ok || ok(d)) ? d : fallback;''', '''return d;''',
     "storage", "le stockage local n'est plus contrôlé"),
    ("history-unchecked", "pages.js",
     '''.filter(h=>h && typeof h==="object" && typeof h.id==="string" && Number.isFinite(h.at))''', '''''',
     "storage", "l'historique empoisonné n'est plus filtré"),
    ("quizbest-unchecked", "pages.js",
     '''if(typeof b[k]==="string" && /^\\d+\\/\\d+$/.test(b[k])) o[k]=b[k];''', '''o[k]=b[k];''',
     "storage", "les meilleurs scores empoisonnés ne sont plus filtrés"),
]

def make_copy(fname, old, new):
    d = Path(tempfile.mkdtemp(prefix="lumora-mutant-"))
    for e in ROOT.iterdir():
        if e.name in (".git", "tests"): continue
        if e.name == fname: continue
        os.symlink(e, d / e.name)
    src = (ROOT / fname).read_text(encoding="utf-8")
    if old not in src:
        shutil.rmtree(d); raise SystemExit(f"Mutant introuvable dans {fname} : {old[:60]!r} (le code a changé ?)")
    (d / fname).write_text(src.replace(old, new, 1), encoding="utf-8")
    return d

def main():
    ap = argparse.ArgumentParser(); ap.add_argument("--only", default=""); a = ap.parse_args()
    todo = [m for m in MUTANTS if not a.only or m[0] in a.only.split(",")]
    killed, survived = [], []
    for mid, fname, old, new, part, desc in todo:
        d = make_copy(fname, old, new); t = time.time()
        r = subprocess.run([sys.executable, str(SUITE), "--root", str(d), "--quick", "--only", part],
                           capture_output=True, text=True)
        shutil.rmtree(d)
        first = next((l.strip() for l in r.stdout.splitlines() if l.strip().startswith("✗")), "")
        if r.returncode == 1:
            killed.append(mid); print(f"  ✓ tué      {mid:20s} ({desc}) — {time.time()-t:.0f}s\n               {first[:110]}")
        else:
            survived.append(mid); print(f"  ✗ SURVIVANT {mid:20s} ({desc}) — {r.stdout.strip().splitlines()[-1] if r.stdout.strip() else r.stderr[-200:]}")
    total = len(todo)
    print(f"\nScore de mutation : {len(killed)}/{total} mutants tués ({100*len(killed)//max(total,1)} %)")
    sys.exit(0 if not survived else 1)

if __name__ == "__main__":
    main()
