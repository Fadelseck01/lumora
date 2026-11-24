# LUMORA — prototype V6 (frontend)

Prototype responsive autonome (HTML, CSS, JavaScript). Ouvrir `index.html` dans un navigateur,
ou lancer `python -m http.server 8000` dans ce dossier puis ouvrir http://localhost:8000.

## V6.2
- Signature retirée de la photo du mont Pico (photo incluse dans l'accord avec les auteurs).

## V6.1
- Logos retirés des 8 photos de lieux (autorisation obtenue des auteurs). Crédit à ajouter dans app.js (clé discoveryCredits) selon la forme convenue.

## Nouveautés de la V6
- Photos pour les lieux à couper le souffle (nuit polaire, Diksam, Vestrahorn, Corvo, Tian Shan, Preikestolen,
  Bokty, Kalsoy, Federa), dans assets/photos/decouvertes/.
- Galerie de photos dans les articles (vignettes cliquables) : Vestrahorn (5 photos), aurores (3), nuit polaire (2), Diksam (2).
- Nouvelles découvertes : les aurores boréales, le mont Pico (Açores), Goðafoss (Islande). 104 découvertes au total.
- Nuit polaire recentrée sur Longyearbyen (Svalbard), le lieu de la photo.

## Nouveautés de la V5
- 101 découvertes : toutes les catégories de ChatGPT (galaxies, Big Bang, exploration spatiale, volcans et séismes,
  records, empires africains, civilisations disparues, mémoire, génétique, relativité, paradoxes, robotique,
  nanotechnologies, conscience, temps, etc.) et de nouvelles découvertes pour chaque univers, dont le mont Bokty.
- Chaque univers compte au moins 5 découvertes.

## Nouveautés de la V4
- 50 découvertes (au lieu de 18), dont toutes les idées de départ : lieux insolites (nuit polaire, Diksam, Vestrahorn,
  Caldeirão de Corvo, Tian Shan, Kalsoy, lac de Federa, Preikestolen), plantes (carnivores, belle-de-nuit, lycoris),
  animaux disparus et menacés, étoiles et planètes, peintures, statues et monuments, mythologies grecque, maya, nordique,
  égyptienne et créatures folkloriques, peuples (Sentinelles, Tsimanes), gastronomie de plusieurs pays, traditions
  vivantes et disparues, épidémies, maladies, guerres et catastrophes.
- V4.1 : Vivant = champignons bleus ; nouvelle découverte « Les champignons bioluminescents » avec la photo violette (51 découvertes).
- Bouton « Voir plus de découvertes » (12 à la fois).
- Arts et merveilles : photo de la Sagrada Família. Les 13 univers ont maintenant une photo.
- Les découvertes sans photo affichent la couleur et le symbole de leur univers en attendant.

## Nouveautés de la V3
- Couverture : une vraie Terre en 3D (Three.js). On la fait tourner en glissant (souris ou doigt),
  elle tourne seule lentement, les nuages dérivent, les villes s'allument sur la face de nuit.
  Le bouton « Voir la Terre entière » passe de la vue horizon (comme une photo prise depuis l'orbite) à la planète complète.
  Les textures sont incluses (assets/earth-textures.js) : fonctionne en double-cliquant sur index.html, sans serveur.
- Photos pour 8 univers (Cosmos, Terre, Histoire, Inexpliqué, Corps et médecine, Sciences, Futur, Grandes questions),
  chargées depuis Wikimedia Commons (connexion Internet nécessaire). Sans connexion, la carte garde son dégradé.
- Crédits photos dans le pied de page. Les licences marquées « à confirmer » doivent être vérifiées sur Commons avant publication.
- Photos fournies (dans assets/photos/, fonctionnent sans Internet) : Vivant (méduse), Peuples et traditions (lanternes),
  Bouleversements (volcan Calbuco), Corps et médecine (ADN) et Sciences (atome). Ces deux dernières remplacent les photos Commons.
  Leurs droits doivent être obtenus ou vérifiés avant la mise en ligne (voir Crédits photos).
- V3.2 : Mythes et légendes = statue d'Anubis ; la méduse illustre maintenant la découverte « Les abysses »
  (carte et article ouvert). Vivant garde la méduse en attendant le fichier de la photo des champignons.
- Tous les univers ont une photo depuis la V4.
  Pour en ajouter une : mettre le fichier dans assets/ et ajouter `photo:{...}` à l'univers dans app.js.

## Nouveautés de la V2
- 13 univers (au lieu de 6), avec leurs domaines, générés à partir des données (`universes` dans app.js)
- 18 découvertes de démonstration, au moins une par univers
- Contenu entièrement bilingue : textes des articles, étiquettes, menus, libellés d'accessibilité,
  titre de la page. Langue mémorisée et partageable par l'URL (`?lang=en`)
- Section Actualités : six sources prévues pour un flux RSS automatique (emplacements de démonstration)
- Recherche dans tout le texte des articles, sans tenir compte des accents (« kheops » trouve « Khéops »)

## Corrections
- Les illustrations des articles ouverts s'affichaient toutes pareilles : corrigé
- Débordement horizontal (page plus large que l'écran) : corrigé sur ordinateur, tablette et mobile
- Textes restés en français en mode anglais (et inversement) : corrigés
- Lien « Actualités » qui pointait vers l'article à la une : il mène maintenant à la vraie section,
  et l'article à la une a son propre lien « À la une »
- Citation de fin remplacée par une citation dont l'attribution à Carl Sagan est sûre (Cosmos, 1980)
- Accessibilité : le focus va sur le bouton Fermer à l'ouverture d'un article et revient ensuite

## Limites
Toujours un prototype frontend : pas de base de données, de CMS, de comptes ni de flux RSS réels.
Les contenus sont des exemples rédigés pour la démonstration ; ils doivent être sourcés et relus avant publication.
