#!/usr/bin/env python3
"""
LUMORA — batterie d'attaques (point de vue d'un attaquant extérieur).

Lance le site en local et le « bombarde » de charges malveillantes sur chaque point
d'entrée contrôlable de l'extérieur :
  1. flux d'actualités (data/news.js / data/news.json) piégés : XSS, liens javascript:,
     évasion d'attributs, types inattendus ;
  2. adresse : paramètres ?lang= et routes #/d/…, #/u/…, #/quiz/…, #/atlas/…, ancres ;
  3. stockage local (localStorage) empoisonné ;
  4. champ de recherche ;
  5. robustesse : le site doit rester utilisable (aucune erreur JavaScript fatale).

Détection : toute exécution de code injecté met window.__pwned à 1 (ou ouvre une boîte
de dialogue) ; on scanne aussi le DOM pour des liens/iframes javascript: et des
attributs on* injectés.

Usage : python3 tests/security/attack_suite.py [--root DOSSIER] [--quick] [--json]
Code de sortie 0 = aucune faille, 1 = au moins une faille.
"""
import argparse, contextlib, functools, http.server, json, socket, sys, threading, urllib.parse
from pathlib import Path
from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parents[2]

# ---------------------------------------------------------------- charges utiles
JS = "window.__pwned=1"
XSS = [
    f'<img src=x onerror="{JS}">',
    f'"><img src=x onerror="{JS}">',
    f"'><img src=x onerror='{JS}'>",
    f'<svg onload="{JS}">',
    f'<script>{JS}</script>',
    f'</title><script>{JS}</script>',
    f'<iframe srcdoc="<script>parent.__pwned=1</script>"></iframe>',
    f'" onmouseover="{JS}" autofocus onfocus="{JS}" x="',
    f"' onfocus='{JS}' autofocus x='",
    f'<a href="javascript:{JS}">x</a>',
    f'<details open ontoggle="{JS}">',
    f'`;{JS};`',
    f'${{{JS}}}',
    f'<math><mtext><table><mglyph><style><img src=x onerror="{JS}">',
    "  <img src=x onerror=window.__pwned=1>",
]
BAD_URLS = [
    f"javascript:{JS}",
    f"JaVaScRiPt:{JS}",
    f" \tjavascript:{JS}",
    f"java\tscript:{JS}",
    f"javascript&colon;{JS}",
    f"data:text/html,<script>{JS}</script>",
    f"vbscript:{JS}",
    f'https://ok.example/" onmouseover="{JS}" x="',
    f"https://ok.example/'><img src=x onerror={JS}>",
]

# ---------------------------------------------------------------- serveur local
class Quiet(http.server.SimpleHTTPRequestHandler):
    def log_message(self, *a): pass

@contextlib.contextmanager
def serve(root):
    s = socket.socket(); s.bind(("127.0.0.1", 0)); port = s.getsockname()[1]; s.close()
    httpd = http.server.ThreadingHTTPServer(("127.0.0.1", port), functools.partial(Quiet, directory=str(root)))
    th = threading.Thread(target=httpd.serve_forever, daemon=True); th.start()
    try: yield f"http://127.0.0.1:{port}/"
    finally: httpd.shutdown()

# ---------------------------------------------------------------- détection
INIT = """
window.__pwned = 0; window.__csp = [];
document.addEventListener('securitypolicyviolation', e => window.__csp.push(e.violatedDirective + ' ' + (e.blockedURI||'') + ' ' + (e.sourceFile||'') + ':' + (e.lineNumber||'')));
for (const f of ['alert','confirm','prompt','print']) window[f] = () => { window.__pwned = 1; };
"""
SCAN = """() => {
  const bad = [];
  if (window.__pwned) bad.push('code injecté exécuté (window.__pwned)');
  for (const el of document.querySelectorAll('*')) {
    for (const a of el.attributes) {
      const n = a.name.toLowerCase(), v = (a.value||'');
      if (n.startsWith('on') && /__pwned/.test(v)) bad.push('attribut '+n+' injecté sur <'+el.tagName.toLowerCase()+'>');
      if (['href','src','action','formaction','srcdoc','data','xlink:href'].includes(n)) {
        let proto = ''; try { proto = new URL(v, document.baseURI).protocol; } catch (e) {}
        const norm = v.replace(/[\\u0000-\\u0020]/g,'').toLowerCase();
        if (['javascript:','vbscript:'].includes(proto) || (proto==='data:' && /^data:text\\/html/.test(norm)) || (n==='srcdoc' && /__pwned/.test(v)))
          bad.push(n+'="'+v.slice(0,60)+'" sur <'+el.tagName.toLowerCase()+'>');
      }
    }
    if (el.tagName==='SCRIPT' && /__pwned/.test(el.textContent)) bad.push('balise <script> injectée');
  }
  return bad;
}"""

class Run:
    def __init__(self, browser, base, quick):
        self.browser, self.base, self.quick = browser, base, quick
        self.findings, self.count = [], 0

    def page(self, storage=None, news=None):
        ctx = self.browser.new_context(viewport={"width": 1366, "height": 900}, service_workers="block")
        ctx.add_init_script(INIT)
        if storage:
            ctx.add_init_script("(()=>{const s=%s;for(const k in s){try{localStorage.setItem(k,s[k])}catch(e){}}})()" % json.dumps(storage))
        # aucun accès réseau externe pendant les tests
        ctx.route("**/*", lambda r: r.abort() if not r.request.url.startswith(self.base) else r.continue_())
        if news is not None:
            body = json.dumps(news)
            ctx.route("**/data/news.json*", lambda r: r.fulfill(status=200, content_type="application/json", body=body))
            ctx.route("**/data/news.js*", lambda r: r.fulfill(status=200, content_type="application/javascript", body="window.LUMORA_NEWS=" + body + ";"))
        p = ctx.new_page(); p._errors = []; p._seen = 0
        p.on("pageerror", lambda e: p._errors.append(str(e)))
        p.on("dialog", lambda d: d.dismiss())
        return ctx, p

    def check(self, label, p):
        self.count += 1
        try: bad = p.evaluate(SCAN)
        except Exception as e: bad = [f"page inutilisable ({e.__class__.__name__})"]
        errs = p._errors[p._seen:]; p._seen = len(p._errors)
        if errs: bad.append("erreur JavaScript : " + errs[0][:120])
        try:
            alive = p.evaluate("""()=>{const pg=document.querySelector('#page'),h=document.querySelector('#home');
              return !!document.querySelector('header.topbar') && ((pg && !pg.hidden && pg.innerText.trim().length>20) || (h && !h.hidden && h.innerText.trim().length>20));}""")
        except Exception: alive = False
        if not alive: bad.append("site cassé (contenu vide)")
        for b in dict.fromkeys(bad):
            self.findings.append({"vecteur": label, "probleme": b})
        with contextlib.suppress(Exception): p.evaluate("window.__pwned=0")

    def goto(self, p, url):
        p.goto(url, wait_until="load"); p.wait_for_timeout(300)

    def hash(self, p, h):
        p.evaluate("h=>{location.hash=h}", h); p.wait_for_timeout(120)

    # ------------------------------------------------ 1. flux d'actualités piégé
    BASE_ITEM = {"id": "x1", "source": "nasa", "sourceName": "NASA", "lang": "fr", "title": "T", "summary": "S",
                 "link": "https://ok.example/a", "published": "2026-11-20T10:00:00Z", "image": None,
                 "imageCredit": None, "universe": "cosmos", "related": "blackhole", "firstSeen": "2026-11-20T10:00:00Z"}

    def news_cases(self):
        B = self.BASE_ITEM; cases = []
        for f in ["title", "summary", "sourceName", "imageCredit", "published", "lang"]:
            for x in (XSS[:6] if self.quick else XSS):
                it = dict(B, **{f: x}); it["image"] = "https://ok.example/i.jpg" if f == "imageCredit" else None
                cases.append((f"news.{f} = {x[:40]}", [it]))
        for f in ["link", "image"]:
            for u in BAD_URLS:
                cases.append((f"news.{f} = {u[:40]}", [dict(B, **{f: u})]))
        for f, v in [("universe", XSS[0]), ("related", XSS[1]), ("universe", "__proto__"), ("related", "constructor"),
                     ("title", None), ("title", 12), ("lang", None), ("summary", {"a": 1}), ("published", "pas une date"), ("link", None)]:
            cases.append((f"news.{f} = {str(v)[:40]} (type inattendu)", [dict(B, **{f: v})]))
        cases.append(("news.items = chaîne", "boom"))
        cases.append(("news.items = null", None))
        cases.append(("news.items contient null", [None, 3, "x", B]))
        return cases

    def wrap(self, items, src_name="NASA"):
        return {"updated": "2099-01-01T00:00:00Z", "checked": "2099-01-01T00:00:00Z",
                "sources": [{"id": "nasa", "name": src_name, "home": "https://ok.example"}], "items": items}

    def attack_news(self):
        cases = self.news_cases()
        # a) chargement complet du site avec un flux piégé (chemin de démarrage réel)
        for label, items in cases[:: (8 if self.quick else 3)] + [("sources piégées", [self.BASE_ITEM])]:
            ctx, p = self.page(news=self.wrap(items, XSS[0] if label.startswith("sources") else "NASA"))
            self.goto(p, self.base + "?lang=fr#/")
            self.check("Actualités (démarrage) : " + label, p); ctx.close()
        # b) bombardement rapide : chaque cas réinjecté dans la page déjà chargée
        ctx, p = self.page(); self.goto(p, self.base + "?lang=fr#/")
        for label, items in cases:
            try:
                p.evaluate("d=>{newsData=d; newsShown=6; newsFilter='all'; renderNewsFeed();}", self.wrap(items))
            except Exception as e:
                p._errors.append(str(e).splitlines()[0])
                for a in p.query_selector_all("#newsGrid a")[:3]:
                    with contextlib.suppress(Exception): a.hover(timeout=200)
            self.check("Actualités : " + label, p)
            with contextlib.suppress(Exception): p.evaluate("d=>{newsData=d; renderNewsFeed();}", self.wrap([self.BASE_ITEM]))
        ctx.close()

    # ------------------------------------------------ 2. adresse
    def attack_url(self):
        payloads = XSS if not self.quick else XSS[:5]
        routes = []
        for x in payloads:
            q = urllib.parse.quote(x, safe="")
            routes += [f"#/d/{q}", f"#/u/{q}", f"#/u/cosmos/{q}", f"#/quiz/{q}", f"#/atlas/{q}", f"#{q}", f"#/{q}"]
        routes += ["#/u/cosmos/999999", "#/u/cosmos/-1", "#/u/__proto__", "#/d/__proto__", "#/d/constructor",
                   "#/quiz/__proto__", "#/quiz/toString", "#/atlas/__proto__", "#%E0%A4%A", "#/d/%", "#" + "A" * 20000,
                   "#/u/cosmos/1e999", "#/d/" + "../" * 50]
        ctx, p = self.page(); self.goto(p, self.base + "?lang=fr#/")
        for r in routes:
            with contextlib.suppress(Exception): self.hash(p, r)
            self.check("Adresse : " + urllib.parse.unquote(r, errors="replace")[:70], p)
            with contextlib.suppress(Exception): self.hash(p, "#/")
        ctx.close()
        # liens d'adresse ouverts directement (premier chargement)
        for r in routes[:: (10 if self.quick else 4)]:
            ctx, p = self.page(); self.goto(p, self.base + "?lang=fr" + r)
            self.check("Adresse (ouverture directe) : " + urllib.parse.unquote(r, errors="replace")[:60], p); ctx.close()
        for x in payloads[:: (2 if self.quick else 1)] + ["__proto__", "constructor", "", "x" * 5000]:
            ctx, p = self.page()
            self.goto(p, self.base + "?lang=" + urllib.parse.quote(x, safe="") + "#/d/blackhole")
            self.check("Paramètre ?lang= " + x[:50], p); ctx.close()

    # ------------------------------------------------ 3. stockage local empoisonné
    def attack_storage(self):
        X = XSS[0]
        cases = {
            "lumora-lang": [json.dumps(X), json.dumps("__proto__"), "12", "null", "{", json.dumps({"a": 1})],
            "lumora-saved": [json.dumps([X, "blackhole"]), "12", json.dumps({"a": 1}), "true", "{"],
            "lumora-history": [json.dumps([{"id": X, "at": X}, {"id": "blackhole", "at": X}]), "12", json.dumps([None, 3, "x"]), json.dumps({"a": 1}), "{"],
            "lumora-quiz-best": [json.dumps({"all": X, "cosmos": X}), json.dumps({"all": 5, "cosmos": None}), "12", json.dumps([1, 2]), "{"],
            "lumora-voice-fr": [json.dumps(X), "12", "{"],
        }
        routes = ["#/", "#/bibliotheque", "#/quiz", "#/quiz/all", "#/quiz/cosmos", "#/d/blackhole"]
        for k, vals in cases.items():
            for v in (vals if not self.quick else vals[:3]):
                ctx, p = self.page(storage={k: v})
                self.goto(p, self.base + "#/")
                self.check(f"Stockage {k}={v[:40]} sur #/", p)
                for r in routes[1:]:
                    with contextlib.suppress(Exception): self.hash(p, r)
                    self.check(f"Stockage {k}={v[:40]} sur {r}", p)
                if k == "lumora-quiz-best":
                    self.hash(p, "#/quiz/all"); self.play_quiz(p)
                    self.check(f"Stockage {k}={v[:40]} en terminant un quiz", p)
                ctx.close()

    def play_quiz(self, p):
        """Répond à toutes les questions d'un quiz jusqu'à l'écran des résultats."""
        for _ in range(30):
            with contextlib.suppress(Exception):
                if p.query_selector("#replay"): return
                b = p.query_selector("#page .quiz-options button:not([disabled])")
                if b: b.click(); p.wait_for_timeout(40)
                n = p.query_selector("#nextQ")
                if n: n.click(); p.wait_for_timeout(40)

    # ------------------------------------------------ 4. recherche
    def attack_search(self):
        ctx, p = self.page()
        self.goto(p, self.base + "?lang=fr#/")
        for x in (XSS if not self.quick else XSS[:5]) + ["(" * 300, "\\", "[", "*" * 1000, "%s%s%s%n", "a" * 50000]:
            with contextlib.suppress(Exception):
                p.fill("#searchInput", x)
                p.evaluate("()=>document.querySelector('#searchForm').requestSubmit()")
                p.wait_for_timeout(60)
            self.check("Recherche : " + x[:40], p)
        ctx.close()

    # ------------------------------------------------ 5. liens externes et en-têtes
    def audit_static(self):
        ctx, p = self.page()
        for r in ["#/", "#/d/blackhole", "#/d/gore"]:
            self.goto(p, self.base + "?lang=fr" + r)
            bad = p.evaluate("""()=>[...document.querySelectorAll('a[target=_blank]')]
                 .filter(a=>!/noopener|noreferrer/.test(a.rel||'')).map(a=>a.href.slice(0,80))""")
            for b in bad[:5]:
                self.findings.append({"vecteur": f"Lien externe sur {r}", "probleme": "target=_blank sans rel=noopener : " + b})
            self.count += 1
        # la politique de sécurité ne doit rien bloquer du fonctionnement normal du site
        for r in ["#/", "#/d/blackhole", "#/d/ww2", "#/u/cosmos", "#/atlas", "#/quiz/all", "#/chronologie", "#/bibliotheque"]:
            self.goto(p, self.base + "?lang=fr" + r)
            with contextlib.suppress(Exception):
                p.mouse.wheel(0, 4000); p.wait_for_timeout(200)
                f = p.query_selector(".yt-play")
                if f: f.click(); p.wait_for_timeout(200)
            v = p.evaluate("()=>window.__csp")
            self.count += 1
            for x in dict.fromkeys(v):
                self.findings.append({"vecteur": f"CSP sur {r}", "probleme": "fonctionnement normal bloqué : " + x[:120]})
            if p._errors[p._seen:]:
                self.findings.append({"vecteur": f"Fonctionnement {r}", "probleme": "erreur JavaScript : " + p._errors[p._seen][:120]})
            p._seen = len(p._errors)
        csp = p.evaluate("()=>{const m=document.querySelector('meta[http-equiv=Content-Security-Policy]');return m?m.content:''}")
        self.count += 1
        if not csp:
            self.findings.append({"vecteur": "En-têtes", "probleme": "aucune Content-Security-Policy"})
        else:
            for need in ["default-src", "object-src 'none'", "base-uri"]:
                if need not in csp:
                    self.findings.append({"vecteur": "En-têtes", "probleme": f"CSP incomplète : {need} manquant"})
            if "'unsafe-eval'" in csp:
                self.findings.append({"vecteur": "En-têtes", "probleme": "CSP autorise 'unsafe-eval'"})
        ctx.close()


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--root", default=str(ROOT))
    ap.add_argument("--quick", action="store_true", help="jeu réduit de charges (pour les tests de mutation)")
    ap.add_argument("--json", action="store_true")
    ap.add_argument("--only", default="")
    a = ap.parse_args()
    with serve(Path(a.root)) as base, sync_playwright() as pw:
        b = pw.chromium.launch()
        run = Run(b, base, a.quick)
        steps = {"news": run.attack_news, "url": run.attack_url, "storage": run.attack_storage,
                 "search": run.attack_search, "static": run.audit_static}
        for name, fn in steps.items():
            if a.only and name not in a.only.split(","): continue
            fn()
        b.close()
    if a.json:
        print(json.dumps({"tests": run.count, "failles": run.findings}, ensure_ascii=False, indent=1))
    else:
        print(f"{run.count} attaques lancées — {len(run.findings)} problème(s)")
        for f in run.findings: print(f"  ✗ [{f['vecteur']}] {f['probleme']}")
    sys.exit(1 if run.findings else 0)

if __name__ == "__main__":
    main()
