# LUMORA — Mettre en ligne le site avec des actualités automatiques

Ce guide met LUMORA en ligne sur **GitHub Pages**. La rubrique Actualités se renouvelle ensuite toute seule **deux fois par heure** grâce à **GitHub Actions**. Tout est gratuit pour un dépôt public. Compte 15 à 20 minutes pour la première fois.

## Ce qui se passe automatiquement

1. Toutes les 30 minutes, GitHub lance `scripts/fetch_news.py`.
2. Le script lit les flux RSS listés dans `news/sources.json`. Pour chaque article, il garde :
   - le titre, la date, le résumé fourni par la source et le lien vers l'original ;
   - l'image, seulement si la source l'autorise ;
   - un univers LUMORA (Cosmos, Vivant…), trouvé grâce à des mots-clés ;
   - une découverte LUMORA liée, si un mot-clé correspond (exemple : « black hole » → *Les trous noirs*).
3. S'il y a du nouveau, `data/news.json` est enregistré dans le dépôt et le site est republié.
4. Sur le site, la rubrique Actualités lit `data/news.json` et affiche les cartes, avec un filtre par univers.

## Étape 1 — Créer le dépôt

1. Connecte-toi sur https://github.com et clique sur **New repository** (le bouton **+** en haut à droite).
2. Nom : `lumora` (ou ce que tu veux). Choisis **Public** : GitHub Pages et les minutes d'Actions sont gratuits pour un dépôt public.
3. Ne coche rien d'autre, puis clique sur **Create repository**.

## Étape 2 — Envoyer les fichiers

Le plus simple, avec GitHub Desktop ou en ligne de commande, depuis le dossier `LUMORA-prototype` dézippé :

```bash
cd LUMORA-prototype
git init
git add .
git commit -m "LUMORA : première mise en ligne"
git branch -M main
git remote add origin https://github.com/TON-PSEUDO/lumora.git
git push -u origin main
```

> ⚠️ Le dossier caché `.github` doit bien être envoyé : c'est lui qui contient la tâche automatique. N'utilise pas le glisser-déposer du site GitHub, il oublie souvent les dossiers cachés.

## Étape 3 — Activer GitHub Pages

1. Dans ton dépôt : **Settings** → **Pages**.
2. Dans **Build and deployment** → **Source**, choisis **GitHub Actions**. N'utilise pas « Deploy from a branch ».

## Étape 4 — Autoriser la tâche à enregistrer les actualités

1. **Settings** → **Actions** → **General**.
2. Tout en bas, dans **Workflow permissions**, coche **Read and write permissions**, puis clique sur **Save**.

## Étape 5 — Premier lancement

1. Onglet **Actions** → dans la liste de gauche, choisis **LUMORA - actualités et site**.
2. Clique sur **Run workflow** → **Run workflow**.
3. Attends 1 à 2 minutes. Les deux étapes `build` et `deploy` doivent passer au vert ✅.
4. L'adresse du site s'affiche dans l'étape `deploy`, par exemple `https://ton-pseudo.github.io/lumora/`.

Ensuite, tout est automatique : la tâche repart deux fois par heure, aux minutes 7 et 37.

## Vérifier que tout marche

- **Actions** → clique sur une exécution → **build** → **Récupérer les actualités**. Tu verras par exemple :
  ```
  ✓ nasa                  10 articles, 2 nouveaux
  ✓ sciencedaily          40 articles, 0 nouveaux
  ✗ who                   403 Client Error …
  → 96 actualités (modifiées), 8/9 sources lues
  ```
- Si une source échoue, les autres continuent et ses anciennes actualités sont gardées.
- Sur le site, la ligne sous les actualités indique la dernière mise à jour.

## Régler les sources (`news/sources.json`)

| Champ | Rôle |
|---|---|
| `url` | adresse du flux RSS ou Atom |
| `image` | `true` seulement si la source autorise la réutilisation de ses images |
| `image_credit` | crédit affiché sur l'image (exemple : `NASA`) |
| `summary` | `as_is` = résumé tel que fourni, `trim` = coupé à environ 280 caractères, `none` = titre et lien seulement |
| `default_universe` | univers utilisé quand aucun mot-clé ne correspond |
| `enabled` | mettre `false` pour désactiver une source sans la supprimer |

- **Ajouter une source** : copie un bloc, change `id`, `name` et `url`.
- **Mieux classer** : ajoute des mots dans la liste `universes`.
- **Relier à une découverte** : ajoute une ligne dans `related` (`"mot": "id-de-la-découverte"`).

## Droits : ce qui est réglé par défaut

| Source | Réglage | Pourquoi |
|---|---|---|
| NASA | images ✅ (crédit NASA) | images généralement libres sauf mention contraire ; à surveiller pour les images de partenaires |
| ESA | images ❌ | beaucoup sont sous Creative Commons avec crédit, mais pas toutes |
| ScienceDaily | résumé tel quel, images ❌ | autorisé sans le texte intégral, sans modifier le texte, avec un lien vers ScienceDaily |
| OMS / WHO | titre et lien seulement | l'OMS demande une autorisation pour réutiliser ses actualités sur un site : écrire à permissions@who.int |
| Smithsonian, Mongabay | images ❌ | images souvent protégées ou de photographes tiers |

LUMORA ne recopie jamais l'article entier : on affiche le titre, la date, le court résumé fourni par la source, puis un lien vers l'original. Je ne suis pas juriste : relis les conditions d'utilisation de chaque source avant une mise en ligne publique.

## Tester sur ton ordinateur (facultatif)

```bash
pip install -r scripts/requirements.txt
python scripts/fetch_news.py
```

Ouvre ensuite `index.html`. Le fichier `data/news.js` permet d'afficher les actualités même sans serveur.

## Bon à savoir

- GitHub ne garantit pas l'heure exacte des tâches planifiées : un retard de quelques minutes est normal.
- GitHub met en pause les tâches planifiées d'un dépôt public resté **60 jours sans activité**. Les enregistrements automatiques d'actualités devraient compter comme de l'activité, mais si tu vois la tâche désactivée dans l'onglet Actions, il suffit de cliquer sur **Enable workflow**.
- Tu peux toujours lancer une mise à jour à la main avec **Run workflow**.
