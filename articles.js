/* LUMORA — articles complets (version longue des découvertes).
   Chaque article : essentiel, sections, chiffres clés, « le saviez-vous ? », questions ouvertes, sources.
   Les découvertes sans article long gardent leur texte court. */
const longArticles = {

/* ======================= LES TROUS NOIRS ======================= */
blackhole: {
 video: {id:"chhcwk4-esM", channel:"NASA Goddard", title:{fr:"Plongée dans un trou noir : la simulation de la NASA expliquée (en anglais)", en:"NASA Simulation's Plunge Into a Black Hole: Explained"}},
 sources: [
  {t:"ESO — Comparaison de M87* et Sagittarius A* (EHT, 2022)", u:"https://eso.org/public/images/eso2208-eht-mwe/"},
  {t:"Boston University — The First Black Hole Image from the Milky Way Is Here (2022)", u:"https://www.bu.edu/articles/2022/first-black-hole-image-from-milky-way"},
  {t:"CBS News — First image of the black hole at the center of the Milky Way (2022)", u:"https://www.cbsnews.com/news/black-hole-milky-way-first-photo-sagittarius-a"},
  {t:"NASA Goddard — Plunge Into a Black Hole (vidéo)", u:"https://www.youtube.com/watch?v=chhcwk4-esM"}
 ],
 fr: {
  key: [
   "Un trou noir est une région où la matière est si concentrée que rien, pas même la lumière, ne peut s'en échapper.",
   "La frontière de non-retour s'appelle l'horizon des événements.",
   "La première image d'un trou noir date de 2019 ; celle du trou noir au centre de notre galaxie, de 2022.",
   "Il en existe de toutes tailles : de quelques fois la masse du Soleil à plusieurs milliards de fois."
  ],
  sections: [
   {h:"Une idée née bien avant les télescopes", p:[
    "Dès la fin du XVIIIe siècle, le Britannique John Michell imagine des « étoiles sombres » si massives que la lumière ne pourrait pas les quitter. L'idée reste une curiosité jusqu'en 1916 : quelques mois après la publication de la relativité générale d'Einstein, l'astronome Karl Schwarzschild trouve une solution de ses équations qui décrit exactement un tel objet.",
    "Pendant des décennies, beaucoup de physiciens, Einstein compris, pensent que la nature ne fabrique pas vraiment ces monstres. Le nom de « trou noir » ne se popularise qu'à la fin des années 1960, et les premières preuves solides arrivent avec les télescopes à rayons X, qui repèrent des étoiles tournant autour d'un compagnon invisible et extrêmement massif."
   ]},
   {h:"Comment ça marche ?", p:[
    "Un trou noir de taille « stellaire » naît quand une étoile très massive arrive en fin de vie : son cœur s'effondre sur lui-même sans que rien ne puisse l'arrêter. Toute sa masse se retrouve concentrée dans un volume minuscule, et la gravité devient si forte qu'en deçà d'une certaine distance, l'horizon des événements, la vitesse nécessaire pour s'échapper dépasse celle de la lumière.",
    "Un trou noir n'est donc pas un « aspirateur » : à bonne distance, on peut tourner autour comme autour de n'importe quel astre. C'est en s'approchant trop près que tout bascule. Près de l'horizon, le temps s'écoule plus lentement pour celui qui tombe que pour un observateur lointain, et un objet assez petit est étiré comme un spaghetti par la différence de gravité entre ses deux extrémités.",
    "Au centre de presque toutes les grandes galaxies se trouve un trou noir « supermassif », des millions ou des milliards de fois plus lourd que le Soleil. Son origine exacte reste l'une des grandes énigmes de l'astrophysique."
   ]},
   {h:"Photographier l'invisible", p:[
    "Puisqu'un trou noir n'émet pas de lumière, on ne le voit pas directement. On voit en revanche le gaz brûlant qui tourbillonne autour de lui avant d'y tomber. Pour obtenir une image assez nette, le réseau Event Horizon Telescope (EHT) a relié des radiotélescopes répartis sur toute la planète, synchronisés par des horloges atomiques, pour former l'équivalent d'une antenne de la taille de la Terre.",
    "En 2019, l'EHT dévoile la première image d'un trou noir : M87*, au cœur de la galaxie Messier 87, à environ 55 millions d'années-lumière, avec une masse d'environ 6,5 milliards de Soleils. En 2022 vient le tour de Sagittarius A*, le trou noir de notre Voie lactée : environ 4 millions de fois la masse du Soleil, à quelque 27 000 années-lumière. Sur les deux images, on voit le même anneau lumineux autour d'une « ombre » sombre, exactement comme le prévoit la relativité générale."
   ]}
  ],
  numbers: [
   ["≈ 6,5 milliards", "masses solaires pour M87*, le premier trou noir photographié (2019)"],
   ["≈ 4 millions", "masses solaires pour Sagittarius A*, au centre de la Voie lactée"],
   ["≈ 27 000", "années-lumière nous séparent de Sagittarius A*"],
   ["1916", "Karl Schwarzschild décrit mathématiquement le premier trou noir"]
  ],
  didyou: [
   "Placé au centre du Système solaire, M87* serait plus grand que l'orbite de toutes les planètes ; Sagittarius A* tiendrait à l'intérieur de l'orbite de Mercure.",
   "En 2015, les détecteurs LIGO ont « entendu » pour la première fois deux trous noirs fusionner, grâce aux ondes gravitationnelles qui déforment l'espace lui-même.",
   "Stephen Hawking a montré en 1974 qu'un trou noir devrait s'évaporer très lentement en émettant un faible rayonnement, qui porte aujourd'hui son nom."
  ],
  open: [
   "Que devient l'information de ce qui tombe dans un trou noir ? Le « paradoxe de l'information » oppose encore la relativité et la physique quantique.",
   "Comment des trous noirs supermassifs ont-ils pu grandir aussi vite, alors que l'univers était encore très jeune ?"
  ]
 },
 en: {
  key: [
   "A black hole is a region where matter is so concentrated that nothing, not even light, can escape.",
   "The point of no return is called the event horizon.",
   "The first image of a black hole was released in 2019; the one at the centre of our galaxy followed in 2022.",
   "They come in all sizes: from a few times the Sun's mass to several billion times."
  ],
  sections: [
   {h:"An idea born long before telescopes", p:[
    "As early as the late 18th century, Englishman John Michell imagined \"dark stars\" so massive that light could not leave them. The idea remained a curiosity until 1916: a few months after Einstein published general relativity, astronomer Karl Schwarzschild found a solution to its equations that describes exactly such an object.",
    "For decades, many physicists, Einstein included, thought nature did not really make these monsters. The name \"black hole\" only caught on in the late 1960s, and the first solid evidence came from X-ray telescopes, which spotted stars orbiting an invisible and extremely massive companion."
   ]},
   {h:"How does it work?", p:[
    "A \"stellar\" black hole is born when a very massive star reaches the end of its life: its core collapses on itself with nothing to stop it. All its mass ends up packed into a tiny volume, and gravity becomes so strong that inside a certain distance, the event horizon, the speed needed to escape exceeds the speed of light.",
    "So a black hole is not a \"vacuum cleaner\": from a safe distance, you can orbit it like any other body. Things only go wrong if you get too close. Near the horizon, time passes more slowly for someone falling in than for a distant observer, and a small enough object is stretched like spaghetti by the difference in gravity between its two ends.",
    "At the centre of almost every large galaxy sits a \"supermassive\" black hole, millions or billions of times heavier than the Sun. Exactly how they formed is still one of astrophysics' great riddles."
   ]},
   {h:"Photographing the invisible", p:[
    "Since a black hole gives off no light, we cannot see it directly. What we can see is the scorching gas swirling around it before falling in. To get a sharp enough picture, the Event Horizon Telescope (EHT) linked radio telescopes across the globe, synchronised by atomic clocks, to act like a dish the size of the Earth.",
    "In 2019, the EHT unveiled the first image of a black hole: M87*, at the heart of the galaxy Messier 87, about 55 million light-years away, with a mass of about 6.5 billion Suns. In 2022 came Sagittarius A*, the black hole in our own Milky Way: about 4 million times the Sun's mass, some 27,000 light-years away. Both images show the same bright ring around a dark \"shadow\", exactly as general relativity predicts."
   ]}
  ],
  numbers: [
   ["≈ 6.5 billion", "solar masses for M87*, the first black hole ever imaged (2019)"],
   ["≈ 4 million", "solar masses for Sagittarius A*, at the centre of the Milky Way"],
   ["≈ 27,000", "light-years separate us from Sagittarius A*"],
   ["1916", "Karl Schwarzschild describes the first black hole mathematically"]
  ],
  didyou: [
   "Placed at the centre of the Solar System, M87* would be larger than the orbits of all the planets; Sagittarius A* would fit inside Mercury's orbit.",
   "In 2015, the LIGO detectors \"heard\" two black holes merging for the first time, through gravitational waves that stretch space itself.",
   "In 1974, Stephen Hawking showed that a black hole should very slowly evaporate by giving off faint radiation, now named after him."
  ],
  open: [
   "What happens to the information about whatever falls into a black hole? The \"information paradox\" still pits relativity against quantum physics.",
   "How did supermassive black holes grow so fast while the universe was still very young?"
  ]
 }
},

/* ======================= L'ÎLE DE GORÉE ======================= */
goree: {
 sources: [
  {t:"UNESCO — Île de Gorée (fiche du patrimoine mondial)", u:"https://whc.unesco.org/fr/list/26/"},
  {t:"Au Sénégal — La Maison des Esclaves", u:"https://au-senegal.com/maison-des-esclaves,2782.html"},
  {t:"Britannica — Gorée Island", u:"https://www.Britannica.Com/place/Goree-Island"},
  {t:"World History Edu — History of Gorée Island and the transatlantic slave trade", u:"https://worldhistoryedu.com/history-of-goree-island-and-the-role-it-played-in-the-transatlantic-slave-trade/"}
 ],
 fr: {
  key: [
   "Petite île sans voitures à environ 3 km de Dakar, Gorée est l'un des grands lieux de mémoire de la traite atlantique.",
   "Elle est inscrite au patrimoine mondial de l'UNESCO depuis 1978, parmi les tout premiers sites de la liste.",
   "Sa Maison des Esclaves et sa « porte du voyage sans retour » sont devenues des symboles mondiaux.",
   "Les historiens débattent de son rôle réel dans la traite, mais sa valeur de mémoire fait l'unanimité."
  ],
  sections: [
   {h:"Une île convoitée pendant quatre siècles", p:[
    "Les Portugais sont les premiers Européens à y accoster, au milieu du XVe siècle. Abritée des vents et proche du continent, l'île devient ensuite un comptoir que se disputent tour à tour les Portugais, les Hollandais, les Anglais et les Français. Chacun y laisse sa marque : fortifications sur le plateau rocheux du Castel, maisons de négociants aux balcons de bois, ruelles étroites bordées de bougainvillées.",
    "Selon l'UNESCO, l'architecture de Gorée se caractérise par le contraste entre les sombres quartiers où l'on enfermait les captifs et les élégantes maisons des marchands. On y croise aussi l'histoire des signares, ces femmes métisses qui tenaient une place importante dans le commerce et la vie sociale de l'île."
   ]},
   {h:"La Maison des Esclaves", p:[
    "Construite à la fin du XVIIIe siècle (les sources hésitent entre 1776 et les années 1780), la Maison des Esclaves est l'un des plus anciens bâtiments de l'île. Au rez-de-chaussée, de petites cellules sans fenêtre ; au bout d'un long couloir, une ouverture donne directement sur l'océan : la « porte du voyage sans retour ». À l'étage, un escalier à double volée mène aux pièces où vivaient les marchands.",
    "C'est surtout à partir des années 1960 que le lieu devient célèbre, grâce à son conservateur Boubacar Joseph Ndiaye, qui a consacré sa vie à raconter cette histoire aux visiteurs. Des personnalités du monde entier sont venues s'y recueillir, dont Nelson Mandela, le pape Jean-Paul II et Barack Obama en 2013."
   ]},
   {h:"Mémoire et débat historique", p:[
    "Le nombre de captifs réellement passés par Gorée fait débat. D'après les archives, d'autres lieux comme Saint-Louis ou la Gambie ont joué un rôle plus important dans la traite, et certains historiens doutent que la fameuse porte ait servi à embarquer des esclaves.",
    "Ce débat n'enlève rien à ce que Gorée représente. Pour l'UNESCO, l'île est le symbole de la traite négrière « avec son cortège de souffrance, de larmes et de mort », et aujourd'hui un lieu de recueillement et de réconciliation. Un lieu de mémoire n'est pas seulement l'endroit exact où les choses se sont passées : c'est l'endroit où l'on choisit de se souvenir."
   ]},
   {h:"Gorée aujourd'hui", p:[
    "On y accède en une vingtaine de minutes de chaloupe depuis le port de Dakar. Sans voitures, l'île se visite à pied : Maison des Esclaves, Fort d'Estrées transformé en musée historique, place du Gouvernement, ateliers d'artistes et plages. Ses ruelles colorées accueillent de nombreux peintres et créateurs, qui font de Gorée un lieu où l'histoire douloureuse côtoie une vie culturelle très vivante."
   ]}
  ],
  numbers: [
   ["≈ 3 km", "séparent Gorée du centre de Dakar"],
   ["1978", "inscription au patrimoine mondial de l'UNESCO"],
   ["XVe – XIXe s.", "période pendant laquelle l'île a servi de comptoir"],
   ["4", "puissances européennes s'y sont succédé : Portugal, Pays-Bas, Angleterre, France"]
  ],
  didyou: [
   "Il n'y a pas de voitures sur Gorée : on s'y déplace uniquement à pied.",
   "Le Fort d'Estrées, construit au milieu du XIXe siècle, abrite aujourd'hui le Musée historique du Sénégal.",
   "Gorée est l'une des 19 communes d'arrondissement de la ville de Dakar."
  ],
  open: [
   "Combien de captifs sont réellement passés par Gorée ? Les historiens n'ont pas fini de croiser les archives des différentes puissances européennes."
  ]
 },
 en: {
  key: [
   "A small car-free island about 3 km from Dakar, Gorée is one of the great places of memory of the Atlantic slave trade.",
   "It has been a UNESCO World Heritage Site since 1978, among the very first sites on the list.",
   "Its House of Slaves and its \"door of no return\" have become worldwide symbols.",
   "Historians debate its actual role in the trade, but its value as a place of memory is undisputed."
  ],
  sections: [
   {h:"An island fought over for four centuries", p:[
    "The Portuguese were the first Europeans to land there, in the mid-15th century. Sheltered from the wind and close to the mainland, the island then became a trading post fought over in turn by the Portuguese, Dutch, British and French. Each left their mark: fortifications on the rocky Castel plateau, merchants' houses with wooden balconies, narrow lanes lined with bougainvillea.",
    "According to UNESCO, Gorée's architecture is defined by the contrast between the grim quarters where captives were held and the elegant houses of the merchants. It is also the story of the signares, mixed-race women who held an important place in the island's trade and social life."
   ]},
   {h:"The House of Slaves", p:[
    "Built in the late 18th century (sources vary between 1776 and the 1780s), the House of Slaves is one of the oldest buildings on the island. On the ground floor are small windowless cells; at the end of a long corridor, an opening looks straight onto the ocean: the \"door of no return\". Upstairs, a double staircase leads to the rooms where the merchants lived.",
    "The site became famous mainly from the 1960s onwards, thanks to its curator Boubacar Joseph Ndiaye, who devoted his life to telling this story to visitors. Figures from around the world have come to pay their respects, including Nelson Mandela, Pope John Paul II and Barack Obama in 2013."
   ]},
   {h:"Memory and historical debate", p:[
    "How many captives actually passed through Gorée is debated. According to the archives, other places such as Saint-Louis or the Gambia played a larger role in the trade, and some historians doubt that the famous door was used to load enslaved people.",
    "This debate takes nothing away from what Gorée stands for. For UNESCO, the island is the symbol of the slave trade \"with its cortege of suffering, tears and death\", and today a place of remembrance and reconciliation. A place of memory is not only the exact spot where events happened: it is the place where we choose to remember."
   ]},
   {h:"Gorée today", p:[
    "It is about a twenty-minute ferry ride from the port of Dakar. With no cars, the island is explored on foot: the House of Slaves, the Fort d'Estrées now a history museum, the Government square, artists' studios and beaches. Its colourful lanes are home to many painters and craftspeople, making Gorée a place where a painful history sits alongside a lively cultural scene."
   ]}
  ],
  numbers: [
   ["≈ 3 km", "between Gorée and central Dakar"],
   ["1978", "inscribed on the UNESCO World Heritage List"],
   ["15th – 19th c.", "the period when the island served as a trading post"],
   ["4", "European powers held it in turn: Portugal, the Netherlands, England, France"]
  ],
  didyou: [
   "There are no cars on Gorée: everyone gets around on foot.",
   "The Fort d'Estrées, built in the mid-19th century, now houses Senegal's History Museum.",
   "Gorée is one of the 19 district communes of the city of Dakar."
  ],
  open: [
   "How many captives really passed through Gorée? Historians are still cross-checking the archives of the different European powers."
  ]
 }
},

/* ======================= LES KITSUNE ======================= */
kitsune: {
 sources: [
  {t:"Nippon.com — How Japan's kitsune bewitched the world", u:"https://www.nippon.com/en/japan-topics/b02508/foxy-lady-foxy-yokai-how-japan%E2%80%99s-kitsune-bewitched-the-world.html"},
  {t:"Wikipedia — Fushimi Inari-taisha", u:"https://en.wikipedia.com/wiki/Fushimi_Inari"},
  {t:"Japan Objects — 6 Things You Should Know About the Inari Fox", u:"https://japanobjects.com/features/kitsune"},
  {t:"Przekrój — A Very Bushy Tale (la pierre Sessho-seki, 2022)", u:"https://przekroj.org/en/world-people/a-very-bushy-tale"}
 ],
 fr: {
  key: [
   "Au Japon, le kitsune est un renard doté de pouvoirs surnaturels : il peut prendre forme humaine, créer des illusions… ou posséder les gens.",
   "Plus il vieillit, plus il gagne de queues, jusqu'à neuf.",
   "Il est le messager d'Inari, divinité du riz : des milliers de sanctuaires japonais sont gardés par des renards de pierre.",
   "Selon la légende, la célèbre pierre qui emprisonnait un renard maléfique s'est fendue en 2022."
  ],
  sections: [
   {h:"Un renard venu de Chine", p:[
    "L'idée d'un renard surnaturel n'est pas née au Japon. Les contes chinois parlent déjà de huli jing, des esprits renards pouvant avoir jusqu'à neuf queues. Ces récits traversent la mer avec les livres et le bouddhisme, et le Japon en fait l'une de ses créatures les plus aimées.",
    "Dans le folklore japonais, un renard qui vit assez longtemps devient kitsune. Certains contes disent qu'il gagne une queue tous les cent ans ; les plus courants parlent de une, cinq, sept ou neuf queues. Le kyūbi no kitsune, le renard à neuf queues, est le plus puissant de tous : on dit qu'il peut voir et entendre tout ce qui se passe dans le monde."
   ]},
   {h:"Messager du dieu du riz", p:[
    "Le kitsune est surtout associé à Inari, la divinité shintoïste du riz, de l'agriculture et, plus tard, du commerce. Les renards en sont les messagers : devant chaque sanctuaire d'Inari, deux statues de renards montent la garde, tenant souvent une clé ou un joyau dans la gueule. On compte environ 32 000 sanctuaires d'Inari au Japon, soit plus de 30 % de tous les sanctuaires du pays.",
    "Le plus célèbre est le Fushimi Inari-taisha, à Kyoto, sanctuaire principal d'Inari. Ses quelque 10 000 portiques torii vermillon, chacun offert par une entreprise ou un particulier, forment des tunnels qui serpentent jusqu'au sommet du mont Inari. C'est aussi pour les renards qu'on dépose en offrande de l'aburaage, du tofu frit, qui a donné son nom au kitsune udon, une soupe de nouilles très populaire."
   ]},
   {h:"Bon génie ou trompeur ?", p:[
    "Tous les renards ne se valent pas. Les zenko, liés à Inari, sont bienveillants et protecteurs. Les nogitsune, renards sauvages, sont des farceurs qui égarent les voyageurs, ou pire. Les contes parlent même de kitsune-tsuki, la possession d'une personne par un renard.",
    "La plus célèbre des kitsune est Tamamo-no-Mae. À la fin de l'époque Heian, cette courtisane d'une beauté et d'une intelligence extraordinaires devient la favorite de l'empereur Toba, qui tombe mystérieusement malade. Un devin, Abe no Yasunari, découvre qu'elle est en réalité un renard à neuf queues. Démasquée, elle s'enfuit et, une fois vaincue, se transforme en pierre : la Sesshō-seki, la « pierre qui tue », à Nasu."
   ]},
   {h:"Une légende toujours vivante", p:[
    "En mars 2022, la Sesshō-seki s'est fendue en deux, et la nouvelle a fait le tour du monde : l'esprit du renard allait-il se libérer ? Les scientifiques ont donné une explication plus terre à terre : de l'eau infiltrée dans une fissure existante a gelé. Des prêtres ont tout de même célébré un rite de purification sur place.",
    "Aujourd'hui, le kitsune est partout dans la culture populaire, des mangas aux jeux vidéo. La ville de Nasu a même choisi un renard à neuf queues comme mascotte touristique."
   ]}
  ],
  numbers: [
   ["9", "queues au maximum pour les kitsune les plus puissants"],
   ["≈ 32 000", "sanctuaires d'Inari au Japon, plus de 30 % de tous les sanctuaires"],
   ["≈ 10 000", "portiques torii au Fushimi Inari-taisha de Kyoto"],
   ["2022", "la pierre Sesshō-seki se fend en deux"]
  ],
  didyou: [
   "Le kitsune udon doit son nom au tofu frit posé sur les nouilles, une offrande que les renards sont censés adorer.",
   "Les inari-zushi, des sachets de tofu frit garnis de riz, sont eux aussi liés aux renards d'Inari.",
   "Selon une légende, le célèbre devin Abe no Seimei serait le fils d'une renarde, Kuzunoha."
  ],
  open: [
   "Comment exactement l'image du renard s'est-elle mêlée au culte d'Inari ? Les historiens des religions proposent plusieurs pistes, sans réponse définitive."
  ]
 },
 en: {
  key: [
   "In Japan, a kitsune is a fox with supernatural powers: it can take human form, create illusions… or possess people.",
   "The older it grows, the more tails it gains, up to nine.",
   "It is the messenger of Inari, the rice deity: thousands of Japanese shrines are guarded by stone foxes.",
   "According to legend, the famous stone that held an evil fox captive split open in 2022."
  ],
  sections: [
   {h:"A fox from China", p:[
    "The idea of a supernatural fox was not born in Japan. Chinese tales already speak of huli jing, fox spirits that can have up to nine tails. These stories crossed the sea with books and Buddhism, and Japan turned them into one of its best-loved creatures.",
    "In Japanese folklore, a fox that lives long enough becomes a kitsune. Some tales say it gains a tail every hundred years; the most common speak of one, five, seven or nine tails. The kyūbi no kitsune, the nine-tailed fox, is the most powerful of all: it is said to see and hear everything happening in the world."
   ]},
   {h:"Messenger of the rice god", p:[
    "The kitsune is mostly associated with Inari, the Shinto deity of rice, agriculture and, later, business. Foxes are Inari's messengers: in front of each Inari shrine, two fox statues stand guard, often holding a key or a jewel in their mouths. There are about 32,000 Inari shrines in Japan, more than 30% of all the country's shrines.",
    "The most famous is Fushimi Inari-taisha in Kyoto, Inari's head shrine. Its roughly 10,000 vermilion torii gates, each donated by a business or an individual, form tunnels winding up to the top of Mount Inari. It is also for the foxes that people leave offerings of aburaage, fried tofu, which gave its name to kitsune udon, a very popular noodle soup."
   ]},
   {h:"Guardian or trickster?", p:[
    "Not all foxes are alike. The zenko, linked to Inari, are kind and protective. The nogitsune, wild foxes, are tricksters who lead travellers astray, or worse. Tales even speak of kitsune-tsuki, a person being possessed by a fox.",
    "The most famous kitsune is Tamamo-no-Mae. At the end of the Heian period, this courtesan of extraordinary beauty and intelligence became the favourite of Emperor Toba, who mysteriously fell ill. A diviner, Abe no Yasunari, discovered she was really a nine-tailed fox. Unmasked, she fled and, once defeated, turned into stone: the Sesshō-seki, the \"killing stone\", in Nasu."
   ]},
   {h:"A legend that lives on", p:[
    "In March 2022, the Sesshō-seki split in two, and the news went around the world: would the fox's spirit break free? Scientists offered a more down-to-earth explanation: water had seeped into an existing crack and frozen. Priests still held a purification ritual on site.",
    "Today the kitsune is everywhere in popular culture, from manga to video games. The town of Nasu has even chosen a nine-tailed fox as its tourism mascot."
   ]}
  ],
  numbers: [
   ["9", "tails at most for the most powerful kitsune"],
   ["≈ 32,000", "Inari shrines in Japan, over 30% of all shrines"],
   ["≈ 10,000", "torii gates at Kyoto's Fushimi Inari-taisha"],
   ["2022", "the Sesshō-seki stone splits in two"]
  ],
  didyou: [
   "Kitsune udon is named after the fried tofu laid on the noodles, an offering foxes are said to love.",
   "Inari-zushi, pouches of fried tofu filled with rice, are also linked to Inari's foxes.",
   "According to legend, the famous diviner Abe no Seimei was the son of a fox, Kuzunoha."
  ],
  open: [
   "How exactly did the image of the fox become intertwined with the cult of Inari? Historians of religion offer several explanations, with no definitive answer."
  ]
 }
},

/* ======================= VIDÉOS SEULEMENT ======================= */
ingenuity: {
 video: {id:"wMnOo2zcjXA", channel:"NASA Jet Propulsion Laboratory", title:{fr:"Première vidéo du vol d'Ingenuity sur Mars, décollage et atterrissage", en:"First Video of NASA's Ingenuity Mars Helicopter in Flight"}}
}
};
