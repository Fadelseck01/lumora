# Tests de sécurité de LUMORA

Deux outils, lancés automatiquement par GitHub Actions (`.github/workflows/security.yml`).

## 1. Batterie d'attaques — `attack_suite.py`

Le site est servi en local puis « bombardé » comme le ferait un attaquant extérieur, sur chaque
point d'entrée qu'il peut contrôler :

| Point d'entrée | Ce qui est tenté |
|---|---|
| Flux d'actualités (`data/news.json`, `data/news.js`) | injection HTML/JS dans chaque champ, liens `javascript:` / `data:` / `vbscript:` (y compris camouflés), évasion d'attributs, types inattendus, flux corrompu |
| Adresse | `?lang=` piégé, routes `#/d/…`, `#/u/…`, `#/quiz/…`, `#/atlas/…`, ancres, encodage invalide, adresses géantes, `__proto__` |
| Stockage local (`localStorage`) | langue, favoris, historique, scores et voix empoisonnés |
| Recherche | charges XSS, expressions régulières piégées, textes géants |
| Configuration | Content-Security-Policy présente et complète, liens externes protégés (`noopener`), aucune ressource légitime bloquée par la CSP |

Une faille est signalée si du code injecté s'exécute, si un lien/iframe dangereux apparaît dans la
page, si une erreur JavaScript survient ou si le site se retrouve vide.

```
pip install playwright && python -m playwright install chromium
python tests/security/attack_suite.py           # batterie complète (~10 min)
python tests/security/attack_suite.py --quick   # version courte
```

## 2. Tests de mutation — `mutation_test.py`

Chaque protection est volontairement sabotée, une à la fois (un « mutant »), puis la batterie
d'attaques est relancée. Elle doit détecter chaque sabotage (« mutant tué »). Un mutant qui
« survit » signifie qu'une faille pourrait être réintroduite sans que personne ne le voie.

```
python tests/security/mutation_test.py
```
