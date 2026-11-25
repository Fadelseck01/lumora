/* LUMORA — articles complets : Sciences (2) — GPS et relativité, problème de Monty Hall. */
Object.assign(longArticles, {

gps: {
 sources: [
  {t:"GPS.gov — Space Segment et Control Segment (gouvernement des États-Unis)", u:"https://www.gps.gov/systems/gps/"},
  {t:"Ashby, N. — Relativity in the Global Positioning System, Living Reviews in Relativity (2003)", u:"https://doi.org/10.12942/lrr-2003-1"},
  {t:"Johns Hopkins APL — The Transit satellite navigation system (Guier & Weiffenbach, 1957)", u:"https://www.jhuapl.edu/"},
  {t:"Agence de l'Union européenne pour le programme spatial — Galileo", u:"https://www.euspa.europa.eu/"},
  {t:"National Academy of Engineering — Draper Prize 2003 (Getting & Parkinson)", u:"https://www.nae.edu/"}
 ],
 fr: {
  key: [
   "Le GPS fonctionne grâce à une trentaine de satellites équipés d'horloges atomiques, qui tournent à environ 20 200 kilomètres d'altitude.",
   "Ton téléphone calcule sa position en mesurant le temps mis par les signaux de plusieurs satellites pour lui parvenir.",
   "À cause de la relativité d'Einstein, les horloges des satellites avancent d'environ 38 microsecondes par jour par rapport à celles du sol.",
   "Sans correction, cette petite différence suffirait à fausser la position de plusieurs kilomètres en une seule journée."
  ],
  sections: [
   {h:"Tout a commencé avec Spoutnik", p:[
    "Le 4 octobre 1957, l'Union soviétique lance Spoutnik 1, le premier satellite artificiel. Dans le monde entier, des radioamateurs captent ses « bips ». À l'université Johns Hopkins, aux États-Unis, deux jeunes physiciens, William Guier et George Weiffenbach, enregistrent ses signaux par curiosité.",
    "Ils remarquent que la fréquence du signal change légèrement selon que le satellite s'approche ou s'éloigne, comme la sirène d'une ambulance qui passe : c'est l'effet Doppler. En analysant ces variations, ils parviennent à calculer l'orbite exacte de Spoutnik depuis le sol.",
    "Leur chef, Frank McClure, a alors une idée de génie : si l'on peut trouver la position d'un satellite à partir du sol, on doit pouvoir faire l'inverse, et trouver sa position sur Terre à partir de satellites dont l'orbite est connue. Le principe de la navigation par satellite était né.",
    "Cette idée donne naissance au système Transit, mis en service par la marine américaine dans les années 1960 pour guider ses sous-marins. Il ne donnait une position que toutes les heures environ, mais c'était déjà une révolution."
   ]},
   {h:"Naissance du GPS", p:[
    "Au début des années 1970, l'armée américaine décide de créer un système bien plus précis et disponible en permanence. Le projet, appelé NAVSTAR GPS, pour Global Positioning System, est dirigé par le colonel Bradford Parkinson, souvent considéré comme l'un des « pères » du GPS avec l'ingénieur Ivan Getting.",
    "La mathématicienne afro-américaine Gladys West a aussi joué un rôle essentiel. Elle a programmé des modèles très précis de la forme réelle de la Terre, qui n'est pas une sphère parfaite. Ses calculs sont indispensables pour que le GPS donne des positions exactes.",
    "Le premier satellite GPS est lancé en 1978. Il faut ensuite plus de quinze ans pour compléter la constellation : le système est déclaré pleinement opérationnel en 1995. Il est géré par la Force spatiale des États-Unis.",
    "En 1983, un avion de ligne coréen, le vol 007, s'égare dans l'espace aérien soviétique et est abattu, faisant 269 morts. Après ce drame, le président Ronald Reagan annonce que le GPS sera ouvert aux usages civils une fois terminé, pour éviter de telles erreurs de navigation."
   ]},
   {h:"Une constellation en orbite", p:[
    "Le GPS repose aujourd'hui sur une trentaine de satellites en fonctionnement, répartis sur six orbites différentes autour de la Terre. Ils tournent à environ 20 200 kilomètres d'altitude, plus de cinquante fois plus haut que la Station spatiale internationale.",
    "Chaque satellite fait le tour de la Terre en environ 12 heures, à une vitesse d'environ 14 000 kilomètres à l'heure. Leur disposition est calculée pour qu'à tout moment, depuis presque n'importe quel point du globe, au moins quatre satellites soient visibles dans le ciel.",
    "Chaque satellite transporte plusieurs horloges atomiques, extrêmement précises, et émet en permanence un signal radio indiquant l'heure exacte à laquelle il a été envoyé et la position du satellite. Ce signal est très faible quand il arrive au sol, plus faible que le bruit de fond radio.",
    "Au sol, un réseau de stations surveille en permanence les satellites, corrige leurs orbites et ajuste leurs horloges. La station de contrôle principale se trouve dans le Colorado, aux États-Unis."
   ]},
   {h:"Comment ton téléphone sait où il est", p:[
    "Le récepteur GPS de ton téléphone n'envoie aucun signal aux satellites : il se contente d'écouter. Il reçoit les messages de plusieurs satellites et calcule, pour chacun, combien de temps le signal a mis pour arriver, en comparant l'heure d'envoi et l'heure de réception.",
    "Comme les ondes radio voyagent à la vitesse de la lumière, environ 300 000 kilomètres par seconde, ce temps permet de calculer la distance qui sépare le téléphone de chaque satellite. Avec la distance d'un seul satellite, on sait seulement qu'on se trouve quelque part sur une immense sphère.",
    "Avec trois satellites, les sphères se croisent en un seul point à la surface de la Terre : c'est le principe de la trilatération. Un quatrième satellite est nécessaire pour corriger l'horloge du téléphone, qui est beaucoup moins précise que les horloges atomiques des satellites.",
    "Tout repose donc sur la mesure du temps. Une erreur d'un millionième de seconde sur l'heure correspond à une erreur d'environ 300 mètres sur la position. C'est pourquoi la précision des horloges est absolument cruciale."
   ]},
   {h:"Le temps ralenti par la vitesse", p:[
    "Selon la relativité restreinte d'Einstein, publiée en 1905, le temps s'écoule plus lentement pour un objet en mouvement que pour un objet immobile, vu par un observateur au sol. Ce n'est pas une illusion : les horloges en mouvement battent réellement moins vite.",
    "À la vitesse des satellites GPS, environ 3,9 kilomètres par seconde, cet effet est minuscule, mais mesurable. Leurs horloges retardent d'environ 7 microsecondes par jour par rapport à des horloges identiques restées au sol. Une microseconde, c'est un millionième de seconde.",
    "Cet effet avait déjà été démontré en 1971 par deux physiciens américains, Joseph Hafele et Richard Keating. Ils avaient embarqué des horloges atomiques à bord d'avions de ligne faisant le tour du monde, et constaté qu'elles n'indiquaient plus exactement la même heure que celles restées au sol."
   ]},
   {h:"Le temps accéléré en altitude", p:[
    "Mais la relativité générale, publiée par Einstein en 1915, prévoit un second effet : plus on est loin d'une grande masse comme la Terre, plus le temps s'écoule vite. En haute altitude, là où la gravité est plus faible, les horloges avancent donc plus vite qu'au sol.",
    "À 20 200 kilomètres d'altitude, cet effet fait avancer les horloges des satellites d'environ 45 microsecondes par jour. Il est plus fort que le ralentissement dû à la vitesse. Au total, les horloges des satellites avancent donc d'environ 38 microsecondes par jour par rapport à celles du sol.",
    "Cela paraît infime, mais en multipliant par la vitesse de la lumière, on obtient une erreur de plus de 10 kilomètres par jour. Au bout d'une seule journée, sans correction, ton téléphone pourrait te placer dans une autre ville.",
    "Ce même effet a été mesuré sur Terre : des horloges atomiques ultra-précises peuvent aujourd'hui détecter la différence d'écoulement du temps entre deux tables séparées de quelques dizaines de centimètres de hauteur."
   ]},
   {h:"Einstein dans ta poche", p:[
    "Les ingénieurs du GPS ont donc dû tenir compte de la relativité dès la conception du système. Avant le lancement, les horloges des satellites sont réglées pour battre légèrement plus lentement que des horloges normales, de façon à compenser exactement l'avance prévue une fois en orbite.",
    "Lors du lancement du premier satellite GPS équipé d'une horloge atomique au césium, en 1977, certains ingénieurs doutaient encore de la nécessité de cette correction. Le satellite avait été conçu pour pouvoir l'activer ou non. Les mesures ont montré que l'horloge avançait exactement comme Einstein l'avait prévu.",
    "Le récepteur doit aussi appliquer d'autres petites corrections, liées par exemple à la forme légèrement elliptique de l'orbite de chaque satellite. Le GPS est ainsi l'un des rares objets du quotidien qui ne pourrait pas fonctionner sans la relativité.",
    "Chaque fois que tu utilises une application de navigation, tu profites donc, sans le savoir, d'une théorie qu'Einstein avait imaginée plus d'un siècle plus tôt, en réfléchissant à la lumière et à la gravité."
   ]},
   {h:"Une précision volontairement dégradée", p:[
    "Pendant ses premières années civiles, le GPS n'était pas aussi précis qu'aujourd'hui. L'armée américaine ajoutait volontairement des erreurs au signal destiné aux civils, une option appelée « disponibilité sélective ». La position était alors juste à environ 100 mètres près.",
    "Le but était d'empêcher des armées ennemies d'utiliser le GPS pour guider des missiles avec précision. Mais cette dégradation gênait de plus en plus les utilisateurs civils, comme les pilotes, les marins ou les géomètres.",
    "Le 1er mai 2000, le président Bill Clinton annonce la suppression de la disponibilité sélective. Du jour au lendemain, la précision civile devient environ dix fois meilleure. Cette décision a ouvert la voie aux GPS de voiture, puis aux smartphones.",
    "Aujourd'hui, un téléphone ordinaire localise son propriétaire à quelques mètres près en plein air. Des récepteurs professionnels, qui combinent plusieurs fréquences et des stations de correction au sol, atteignent une précision de l'ordre du centimètre."
   ]},
   {h:"Pas seulement pour se repérer", p:[
    "Le GPS ne sert pas seulement à trouver son chemin. Grâce à ses horloges atomiques, il fournit l'heure exacte au monde entier. Les réseaux de téléphonie mobile, les réseaux électriques, les banques et les bourses l'utilisent pour synchroniser leurs ordinateurs à la microseconde près.",
    "Les agriculteurs l'utilisent pour guider automatiquement leurs tracteurs avec une précision de quelques centimètres, et pour épandre juste la bonne quantité d'engrais. Les compagnies aériennes et maritimes s'en servent pour suivre leurs avions et leurs navires.",
    "Les géologues placent des récepteurs GPS fixes sur le sol pour mesurer le mouvement des plaques tectoniques, de quelques centimètres par an, et la déformation des volcans avant une éruption. Les scientifiques suivent aussi les migrations d'animaux équipés de balises.",
    "Les signaux GPS sont si faibles qu'ils peuvent être brouillés ou imités par de faux émetteurs. Ces dernières années, ces perturbations se sont multipliées dans certaines régions en conflit, gênant la navigation des avions et des navires."
   ]},
   {h:"Les autres systèmes", p:[
    "Le GPS américain n'est pas le seul système de navigation par satellite. La Russie a développé GLONASS, opérationnel depuis les années 1990. La Chine a construit BeiDou, du nom chinois de la Grande Ourse, complété en 2020.",
    "L'Union européenne a créé Galileo, un système civil dont les premiers services ont été ouverts en 2016. Ses satellites portent des horloges atomiques parmi les plus précises jamais envoyées dans l'espace. L'Inde et le Japon disposent aussi de systèmes régionaux.",
    "Les smartphones récents captent les signaux de plusieurs de ces systèmes en même temps. Avec davantage de satellites visibles, la position est plus précise et plus fiable, en particulier dans les villes, où les immeubles bloquent une partie du ciel.",
    "En 2003, Bradford Parkinson et Ivan Getting ont reçu le prix Charles Stark Draper, l'une des plus hautes distinctions en ingénierie, pour la création du GPS. Gladys West a été intronisée au temple de la renommée des pionniers de l'espace de l'US Air Force en 2018."
   ]}
  ],
  numbers: [
   ["≈ 20 200 km","altitude des satellites GPS"],
   ["≈ 38 µs","avance quotidienne des horloges des satellites"],
   ["> 10 km","erreur par jour sans correction relativiste"],
   ["1995","GPS déclaré pleinement opérationnel"]
  ],
  didyou: [
   "Ton téléphone n'envoie rien aux satellites GPS : il se contente d'écouter leurs signaux.",
   "Une erreur d'un millionième de seconde fausserait la position d'environ 300 mètres.",
   "Le premier satellite GPS équipé d'une horloge au césium pouvait activer ou non la correction d'Einstein, au cas où elle serait inutile."
  ],
  open: [
   "Comment protéger les signaux GPS contre le brouillage et les faux signaux ?",
   "Les futures horloges optiques permettront-elles une navigation au millimètre près ?"
  ]
 },
 en: {
  key: [
   "GPS works thanks to about thirty satellites carrying atomic clocks, orbiting at about 20,200 kilometres altitude.",
   "Your phone works out its position by measuring how long signals from several satellites take to reach it.",
   "Because of Einstein's relativity, the satellites' clocks gain about 38 microseconds a day compared with clocks on the ground.",
   "Without correction, this tiny difference would throw positions off by several kilometres in a single day."
  ],
  sections: [
   {h:"It all began with Sputnik", p:[
    "On 4 October 1957 the Soviet Union launched Sputnik 1, the first artificial satellite. Radio amateurs around the world picked up its \"beeps\". At Johns Hopkins University in the United States two young physicists, William Guier and George Weiffenbach, recorded its signals out of curiosity.",
    "They noticed that the signal's frequency changed slightly as the satellite approached or moved away, like a passing ambulance siren: the Doppler effect. By analysing these variations they managed to work out Sputnik's exact orbit from the ground.",
    "Their boss, Frank McClure, then had a brilliant idea: if you can find a satellite's position from the ground, you should be able to do the reverse and find your position on Earth from satellites whose orbits are known. The principle of satellite navigation was born.",
    "This idea gave rise to the Transit system, put into service by the US Navy in the 1960s to guide its submarines. It only gave a position roughly every hour, but it was already a revolution."
   ]},
   {h:"The birth of GPS", p:[
    "In the early 1970s the US military decided to create a far more precise system available at all times. The project, called NAVSTAR GPS, for Global Positioning System, was led by Colonel Bradford Parkinson, often considered one of the \"fathers\" of GPS along with engineer Ivan Getting.",
    "The African-American mathematician Gladys West also played an essential role. She programmed very precise models of the Earth's real shape, which is not a perfect sphere. Her calculations are vital for GPS to give accurate positions.",
    "The first GPS satellite was launched in 1978. It then took more than fifteen years to complete the constellation: the system was declared fully operational in 1995. It is run by the US Space Force.",
    "In 1983 a Korean airliner, Flight 007, strayed into Soviet airspace and was shot down, killing 269 people. After this tragedy President Ronald Reagan announced that GPS would be opened to civilian use once completed, to avoid such navigation errors."
   ]},
   {h:"A constellation in orbit", p:[
    "GPS today relies on about thirty working satellites spread over six different orbits around the Earth. They orbit at about 20,200 kilometres, more than fifty times higher than the International Space Station.",
    "Each satellite circles the Earth in about 12 hours at a speed of about 14,000 kilometres per hour. Their layout is designed so that at any moment, from almost anywhere on the globe, at least four satellites are visible in the sky.",
    "Each satellite carries several extremely precise atomic clocks and constantly broadcasts a radio signal giving the exact time it was sent and the satellite's position. This signal is very weak when it reaches the ground, weaker than the background radio noise.",
    "On the ground a network of stations constantly monitors the satellites, corrects their orbits and adjusts their clocks. The master control station is in Colorado, in the United States."
   ]},
   {h:"How your phone knows where it is", p:[
    "Your phone's GPS receiver sends no signal to the satellites: it just listens. It receives messages from several satellites and works out, for each one, how long the signal took to arrive by comparing the time it was sent with the time it was received.",
    "Since radio waves travel at the speed of light, about 300,000 kilometres per second, this time gives the distance between the phone and each satellite. With the distance to a single satellite, you only know you are somewhere on a huge sphere.",
    "With three satellites, the spheres intersect at a single point on the Earth's surface: this is the principle of trilateration. A fourth satellite is needed to correct the phone's own clock, which is far less precise than the satellites' atomic clocks.",
    "Everything therefore depends on measuring time. An error of a millionth of a second in the time corresponds to an error of about 300 metres in position. That is why the precision of the clocks is absolutely crucial."
   ]},
   {h:"Time slowed by speed", p:[
    "According to Einstein's special relativity, published in 1905, time passes more slowly for a moving object than for a stationary one, as seen by an observer on the ground. This is no illusion: moving clocks really do tick more slowly.",
    "At the speed of GPS satellites, about 3.9 kilometres per second, this effect is tiny but measurable. Their clocks fall behind by about 7 microseconds a day compared with identical clocks left on the ground. A microsecond is a millionth of a second.",
    "This effect had already been demonstrated in 1971 by two American physicists, Joseph Hafele and Richard Keating. They took atomic clocks aboard airliners flying around the world and found that they no longer showed exactly the same time as the clocks left on the ground."
   ]},
   {h:"Time sped up at altitude", p:[
    "But general relativity, published by Einstein in 1915, predicts a second effect: the farther you are from a large mass such as the Earth, the faster time passes. At high altitude, where gravity is weaker, clocks therefore run faster than on the ground.",
    "At 20,200 kilometres this effect makes the satellites' clocks gain about 45 microseconds a day. It is stronger than the slowing due to speed. Overall, the satellites' clocks therefore gain about 38 microseconds a day compared with those on the ground.",
    "That seems tiny, but multiplied by the speed of light it gives an error of more than 10 kilometres a day. After a single day, without correction, your phone could place you in another town.",
    "The same effect has been measured on Earth: ultra-precise atomic clocks can now detect the difference in the passage of time between two tables a few tens of centimetres apart in height."
   ]},
   {h:"Einstein in your pocket", p:[
    "GPS engineers therefore had to take relativity into account from the start. Before launch, the satellites' clocks are set to tick slightly slower than normal clocks, so as to cancel exactly the gain expected once in orbit.",
    "When the first GPS satellite with a caesium atomic clock was launched in 1977, some engineers still doubted this correction was needed. The satellite had been designed so that it could be switched on or off. Measurements showed the clock gained exactly as Einstein had predicted.",
    "The receiver must also apply other small corrections, linked for example to the slightly elliptical shape of each satellite's orbit. GPS is thus one of the few everyday objects that could not work without relativity.",
    "Every time you use a navigation app, you are therefore unknowingly benefiting from a theory Einstein dreamed up more than a century earlier while thinking about light and gravity."
   ]},
   {h:"Deliberately degraded precision", p:[
    "In its first civilian years GPS was not as precise as it is today. The US military deliberately added errors to the signal meant for civilians, an option called \"Selective Availability\". Positions were then accurate to only about 100 metres.",
    "The aim was to prevent enemy armies from using GPS to guide missiles precisely. But this degradation increasingly hampered civilian users such as pilots, sailors and surveyors.",
    "On 1 May 2000 President Bill Clinton announced the end of Selective Availability. Overnight, civilian precision became about ten times better. This decision paved the way for car satnavs and then smartphones.",
    "Today an ordinary phone locates its owner to within a few metres in the open air. Professional receivers, combining several frequencies with ground correction stations, achieve precision of around a centimetre."
   ]},
   {h:"Not just for finding your way", p:[
    "GPS is not only for finding your way. Thanks to its atomic clocks, it provides the exact time to the whole world. Mobile phone networks, power grids, banks and stock exchanges use it to synchronise their computers to the microsecond.",
    "Farmers use it to steer their tractors automatically to within a few centimetres and to spread just the right amount of fertiliser. Airlines and shipping companies use it to track their planes and vessels.",
    "Geologists place fixed GPS receivers on the ground to measure the movement of tectonic plates, a few centimetres a year, and the swelling of volcanoes before an eruption. Scientists also track the migrations of animals fitted with tags.",
    "GPS signals are so weak they can be jammed or imitated by fake transmitters. In recent years such interference has multiplied in some conflict regions, disrupting the navigation of planes and ships."
   ]},
   {h:"The other systems", p:[
    "American GPS is not the only satellite navigation system. Russia developed GLONASS, operational since the 1990s. China built BeiDou, named after the Chinese name for the Plough, completed in 2020.",
    "The European Union created Galileo, a civilian system whose first services opened in 2016. Its satellites carry some of the most precise atomic clocks ever sent into space. India and Japan also have regional systems.",
    "Recent smartphones pick up signals from several of these systems at once. With more satellites in view, the position is more precise and reliable, especially in cities where buildings block part of the sky.",
    "In 2003 Bradford Parkinson and Ivan Getting received the Charles Stark Draper Prize, one of the highest honours in engineering, for creating GPS. Gladys West was inducted into the US Air Force Space and Missile Pioneers Hall of Fame in 2018."
   ]}
  ],
  numbers: [
   ["≈ 20,200 km","altitude of GPS satellites"],
   ["≈ 38 µs","daily gain of the satellites' clocks"],
   ["> 10 km","daily error without relativistic correction"],
   ["1995","GPS declared fully operational"]
  ],
  didyou: [
   "Your phone sends nothing to GPS satellites: it only listens to their signals.",
   "An error of a millionth of a second would throw the position off by about 300 metres.",
   "The first GPS satellite with a caesium clock could switch Einstein's correction on or off, in case it proved unnecessary."
  ],
  open: [
   "How can GPS signals be protected against jamming and fake signals?",
   "Will future optical clocks allow navigation accurate to the millimetre?"
  ]
 }
},

montyhall: {
 sources: [
  {t:"vos Savant, M. — Ask Marilyn, Parade Magazine (1990-1991)", u:"https://web.archive.org/web/2013/http://marilynvossavant.com/game-show-problem/"},
  {t:"Selvin, S. — A problem in probability, The American Statistician (1975)", u:"https://www.jstor.org/stable/2683689"},
  {t:"Herbranson & Schroeder, Journal of Comparative Psychology (2010) — Are birds smarter than mathematicians? Pigeons and the Monty Hall dilemma", u:"https://doi.org/10.1037/a0017703"},
  {t:"Rosenhouse, J. — The Monty Hall Problem (Oxford University Press, 2009)", u:"https://global.oup.com/"},
  {t:"Tierney, J. — Behind Monty Hall's Doors: Puzzle, Debate and Answer?, The New York Times (1991)", u:"https://www.nytimes.com/1991/07/21/us/behind-monty-hall-s-doors-puzzle-debate-and-answer.html"}
 ],
 fr: {
  key: [
   "Trois portes, une voiture et deux chèvres : après qu'on a ouvert une porte cachant une chèvre, vaut-il mieux garder son choix ou changer ?",
   "La bonne réponse est de changer : on gagne alors la voiture 2 fois sur 3, contre 1 fois sur 3 en gardant son choix.",
   "En 1990, quand la chroniqueuse Marilyn vos Savant a donné cette réponse, des milliers de lecteurs, dont des mathématiciens, lui ont écrit qu'elle se trompait.",
   "Ce casse-tête montre à quel point notre intuition des probabilités peut nous tromper."
  ],
  sections: [
   {h:"Le jeu télévisé", p:[
    "Le problème porte le nom de Monty Hall, l'animateur d'un célèbre jeu télévisé américain, Let's Make a Deal, diffusé à partir de 1963. Dans ce jeu, les candidats, souvent déguisés de façon extravagante, devaient faire des choix entre des boîtes, des enveloppes ou des rideaux cachant des prix.",
    "Monty Hall, de son vrai nom Monte Halperin, était né au Canada, à Winnipeg, en 1921. Il est devenu l'un des animateurs les plus connus de la télévision américaine. Il a présenté son émission pendant des décennies, et elle existe encore aujourd'hui sous d'autres présentateurs.",
    "Le casse-tête mathématique qui porte son nom s'inspire de ce jeu, mais le simplifie. Dans la vraie émission, Monty Hall ne proposait pas toujours aux candidats de changer de choix, et il jouait volontiers avec leurs nerfs, en leur proposant de l'argent pour abandonner leur porte.",
    "Interrogé sur le problème en 1991, Monty Hall a d'ailleurs expliqué qu'il utilisait la psychologie pour pousser les candidats à prendre la mauvaise décision. Il a aussi fait la démonstration du jeu à un journaliste du New York Times, qui a perdu plusieurs fois de suite."
   ]},
   {h:"Les règles du problème", p:[
    "Voici le problème tel qu'on le présente habituellement. Devant toi se trouvent trois portes fermées. Derrière l'une d'elles se cache une voiture, et derrière chacune des deux autres, une chèvre. Tu choisis une porte, sans l'ouvrir.",
    "Le présentateur, qui sait exactement ce qui se trouve derrière chaque porte, ouvre alors l'une des deux autres portes, en choisissant toujours une porte qui cache une chèvre. Il ne révèle jamais la voiture. S'il a le choix entre deux chèvres, il en choisit une au hasard.",
    "Il te propose ensuite une alternative : garder ta porte de départ, ou changer pour la dernière porte encore fermée. La question est simple : as-tu intérêt à changer ? Ou bien cela ne fait-il aucune différence ?",
    "Ces règles sont très importantes. Le fait que le présentateur connaisse l'emplacement de la voiture, qu'il ouvre toujours une porte avec une chèvre et qu'il propose toujours l'échange change complètement les probabilités."
   ]},
   {h:"L'intuition piégée", p:[
    "Presque tout le monde répond la même chose : une fois qu'une porte est ouverte, il ne reste que deux portes, une avec la voiture et une avec une chèvre. Il y a donc une chance sur deux pour chacune, et changer ne sert à rien.",
    "Ce raisonnement semble évident, mais il est faux. Beaucoup de gens préfèrent aussi garder leur choix de départ, car ils craignent de regretter d'avoir abandonné une porte gagnante. Les psychologues ont montré que nous ressentons plus fortement le regret d'avoir agi que celui de ne pas avoir agi.",
    "En réalité, si tu changes de porte, tu gagnes la voiture deux fois sur trois. Si tu gardes ta porte, tu ne gagnes qu'une fois sur trois. Changer double donc tes chances de gagner.",
    "Même en connaissant la réponse, beaucoup de gens continuent à la trouver étrange. Le chercheur en sciences cognitives Massimo Piattelli-Palmarini a écrit qu'aucun autre casse-tête statistique ne trompe aussi bien tout le monde, même les plus grands experts."
   ]},
   {h:"Pourquoi changer est gagnant", p:[
    "Pour comprendre, il faut revenir au moment de ton premier choix. Il y a alors trois portes, et une seule voiture : tu as une chance sur trois de choisir la bonne porte, et deux chances sur trois de choisir une chèvre. Cette probabilité ne change pas quand le présentateur ouvre une porte.",
    "Imagine que tu as choisi une chèvre au départ, ce qui arrive deux fois sur trois. Le présentateur doit alors ouvrir la seule autre porte qui cache une chèvre. La porte qui reste fermée cache donc forcément la voiture. Si tu changes, tu gagnes.",
    "Imagine maintenant que tu as choisi la voiture au départ, ce qui n'arrive qu'une fois sur trois. Le présentateur ouvre l'une des deux chèvres, et la porte restante cache l'autre chèvre. Si tu changes, tu perds.",
    "En résumé, changer de porte fait gagner chaque fois que ton premier choix était mauvais, c'est-à-dire deux fois sur trois. Le présentateur, en ouvrant une porte, te donne une information précieuse, car il n'agit pas au hasard : il évite toujours la voiture."
   ]},
   {h:"Avec cent portes", p:[
    "Une autre façon de rendre la réponse plus évidente consiste à imaginer le même jeu avec cent portes. Derrière une seule se trouve la voiture, et derrière les 99 autres, des chèvres. Tu choisis une porte : tu as une chance sur cent d'avoir trouvé la voiture.",
    "Le présentateur, qui sait tout, ouvre alors 98 des 99 autres portes, toutes avec des chèvres, et laisse une seule porte fermée, en plus de la tienne. Il te demande si tu veux changer.",
    "Dans ce cas, presque tout le monde sent qu'il faut changer. La porte que le présentateur a soigneusement évitée d'ouvrir, parmi 99, est très suspecte. Ta porte de départ, elle, n'a toujours qu'une chance sur cent d'être la bonne.",
    "En changeant, tu gagnes donc 99 fois sur 100. Le problème à trois portes fonctionne exactement de la même manière, mais avec des chiffres plus petits, ce qui rend l'effet moins frappant pour notre intuition."
   ]},
   {h:"La tempête Marilyn vos Savant", p:[
    "Le problème devient célèbre en septembre 1990. Un lecteur pose la question dans la rubrique « Ask Marilyn » du magazine américain Parade, tenue par Marilyn vos Savant. Elle était alors connue pour avoir été inscrite au Livre Guinness des records pour son quotient intellectuel très élevé.",
    "Elle répond qu'il faut changer de porte, car on a alors deux chances sur trois de gagner. Sa réponse provoque une avalanche de courrier : environ 10 000 lettres, dont près d'un millier écrites par des personnes titulaires d'un doctorat, beaucoup en mathématiques ou en statistiques.",
    "La grande majorité affirment qu'elle s'est trompée. Certains correspondants se montrent très condescendants, lui reprochant de répandre l'ignorance, ou suggérant que les femmes voient les mathématiques autrement que les hommes. Un professeur lui écrit qu'il y a déjà assez d'analphabétisme mathématique dans le pays.",
    "Marilyn vos Savant maintient sa réponse et propose aux enseignants de faire l'expérience en classe avec des gobelets et une pièce. Peu à peu, des milliers d'élèves la réalisent, et les résultats lui donnent raison. Beaucoup de ses détracteurs finissent par reconnaître leur erreur."
   ]},
   {h:"Même les grands mathématiciens", p:[
    "Parmi les sceptiques figure l'un des plus grands mathématiciens du XXe siècle, le Hongrois Paul Erdős, auteur de plus de 1 500 articles scientifiques. Quand un collègue lui explique le problème, il refuse de croire qu'il faut changer de porte.",
    "Même après avoir entendu la démonstration, Erdős reste insatisfait. Il n'est finalement convaincu que lorsque son collègue lui montre une simulation sur ordinateur, qui joue des milliers de parties et montre que la stratégie du changement gagne environ deux fois sur trois.",
    "Le problème n'était pourtant pas nouveau. En 1975, le statisticien américain Steve Selvin l'avait déjà publié dans une revue scientifique, en citant explicitement Monty Hall. Et dès 1889, le mathématicien français Joseph Bertrand avait proposé un casse-tête très proche, le paradoxe des boîtes de Bertrand.",
    "Ce problème montre que, même pour des experts, les probabilités sont un domaine où l'intuition peut facilement conduire à l'erreur. Les mathématiciens eux-mêmes recommandent souvent de vérifier ce genre de raisonnement par l'expérience ou la simulation."
   ]},
   {h:"Les pigeons font mieux", p:[
    "En 2010, deux psychologues américains, Walter Herbranson et Julia Schroeder, ont proposé une version du problème à des pigeons. Les oiseaux devaient choisir une touche lumineuse parmi trois, puis, après qu'une touche « perdante » s'était éteinte, choisir de garder ou de changer.",
    "Au début, les pigeons choisissaient au hasard. Mais après quelques semaines d'entraînement, ils avaient appris à changer presque à chaque fois, ce qui leur permettait d'obtenir de la nourriture deux fois sur trois.",
    "Les chercheurs ont ensuite fait passer le même test à des étudiants. Même après de nombreuses parties, les humains continuaient souvent à garder leur premier choix, et n'adoptaient pas la meilleure stratégie aussi clairement que les oiseaux.",
    "Selon les chercheurs, les pigeons apprennent simplement à partir de leur expérience, sans se laisser influencer par un raisonnement erroné ou par la peur du regret. Les humains, eux, réfléchissent trop, et leur intuition les trompe."
   ]},
   {h:"Quand les règles changent", p:[
    "La réponse dépend beaucoup des règles exactes du jeu. Si le présentateur ne sait pas où se trouve la voiture et ouvre une porte au hasard, qui se révèle par chance cacher une chèvre, alors les deux portes restantes ont vraiment une chance sur deux chacune. Changer ne sert plus à rien.",
    "De même, si le présentateur est malicieux et ne propose l'échange que lorsque le candidat a choisi la voiture, alors changer ferait perdre à coup sûr. Dans le vrai jeu de Monty Hall, les candidats ne pouvaient pas savoir quelle stratégie il suivait.",
    "C'est pourquoi les mathématiciens insistent sur l'importance de bien préciser les règles. Une grande partie des disputes autour du problème de Monty Hall venait de différences dans la façon dont la question était posée et comprise.",
    "Ce problème est aujourd'hui utilisé dans les cours de mathématiques du monde entier pour introduire la notion de probabilité conditionnelle : la probabilité d'un événement change quand on apprend une nouvelle information."
   ]},
   {h:"D'autres pièges de l'intuition", p:[
    "Le problème de Monty Hall n'est pas le seul casse-tête qui défie l'intuition. Le paradoxe des anniversaires en est un autre exemple célèbre : dans une classe de 23 élèves, il y a plus d'une chance sur deux que deux d'entre eux soient nés le même jour de l'année.",
    "Cela semble incroyable, car il y a 365 jours dans l'année. Mais il faut compter toutes les paires d'élèves possibles : avec 23 élèves, il y a 253 paires différentes, et chacune a une petite chance de partager le même anniversaire. Avec 70 personnes, la probabilité dépasse même 99,9 %.",
    "Un autre piège fréquent est l'« erreur du joueur » : beaucoup de gens pensent qu'après une longue série de « pile », « face » a plus de chances de sortir. Or, une pièce n'a pas de mémoire : chaque lancer a toujours une chance sur deux.",
    "Ces paradoxes rappellent que les mathématiques permettent de corriger nos intuitions. Le problème de Monty Hall apparaît d'ailleurs dans des films, des séries et des livres, comme le roman Le Bizarre Incident du chien pendant la nuit, de Mark Haddon."
   ]}
  ],
  numbers: [
   ["2 sur 3","chances de gagner en changeant de porte"],
   ["≈ 10 000","lettres reçues par Marilyn vos Savant"],
   ["1975","première publication du problème par Steve Selvin"],
   ["23","élèves suffisent pour avoir plus d'une chance sur deux d'un anniversaire commun"]
  ],
  didyou: [
   "Le mathématicien Paul Erdős n'a été convaincu qu'après avoir vu une simulation sur ordinateur.",
   "Des pigeons entraînés apprennent à changer de porte plus clairement que des étudiants.",
   "Monty Hall, l'animateur qui a donné son nom au problème, était né au Canada."
  ],
  open: [
   "Pourquoi notre cerveau a-t-il autant de mal avec les probabilités ?",
   "Peut-on entraîner son intuition à mieux raisonner face au hasard ?"
  ]
 },
 en: {
  key: [
   "Three doors, a car and two goats: after a door hiding a goat is opened, is it better to stick or switch?",
   "The right answer is to switch: you then win the car 2 times out of 3, compared with 1 in 3 if you stick.",
   "In 1990, when columnist Marilyn vos Savant gave this answer, thousands of readers, including mathematicians, wrote to tell her she was wrong.",
   "This puzzle shows how easily our intuition about probability can mislead us."
  ],
  sections: [
   {h:"The game show", p:[
    "The problem is named after Monty Hall, host of a famous American game show, Let's Make a Deal, first broadcast in 1963. In this game contestants, often in outlandish costumes, had to choose between boxes, envelopes or curtains hiding prizes.",
    "Monty Hall, whose real name was Monte Halperin, was born in Winnipeg, Canada, in 1921. He became one of the best-known hosts on American television. He presented his show for decades, and it still exists today with other hosts.",
    "The mathematical puzzle that bears his name is inspired by this game but simplifies it. In the real show Monty Hall did not always offer contestants the chance to switch, and he liked to play with their nerves by offering them money to give up their door.",
    "Asked about the problem in 1991, Monty Hall explained that he used psychology to push contestants into making the wrong decision. He also demonstrated the game to a New York Times journalist, who lost several times in a row."
   ]},
   {h:"The rules of the problem", p:[
    "Here is the problem as it is usually presented. In front of you are three closed doors. Behind one is a car, and behind each of the other two, a goat. You choose a door without opening it.",
    "The host, who knows exactly what is behind each door, then opens one of the other two doors, always choosing one that hides a goat. He never reveals the car. If he can choose between two goats, he picks one at random.",
    "He then offers you a choice: keep your original door or switch to the last closed door. The question is simple: should you switch? Or does it make no difference?",
    "These rules are very important. The fact that the host knows where the car is, always opens a door with a goat and always offers the switch completely changes the probabilities."
   ]},
   {h:"Intuition trapped", p:[
    "Almost everyone gives the same answer: once a door is opened there are only two doors left, one with the car and one with a goat. So there is a fifty-fifty chance for each, and switching is pointless.",
    "This reasoning seems obvious, but it is wrong. Many people also prefer to keep their original choice because they fear regretting giving up a winning door. Psychologists have shown that we feel the regret of acting more strongly than the regret of not acting.",
    "In reality, if you switch doors you win the car two times out of three. If you stick, you win only one time in three. Switching therefore doubles your chances of winning.",
    "Even knowing the answer, many people still find it strange. The cognitive scientist Massimo Piattelli-Palmarini wrote that no other statistical puzzle fools everyone so thoroughly, even the greatest experts."
   ]},
   {h:"Why switching wins", p:[
    "To understand, go back to the moment of your first choice. There are three doors and one car: you have a one-in-three chance of choosing the right door and a two-in-three chance of choosing a goat. This probability does not change when the host opens a door.",
    "Imagine you chose a goat at the start, which happens two times out of three. The host must then open the only other door hiding a goat. The door left closed must therefore hide the car. If you switch, you win.",
    "Now imagine you chose the car at the start, which happens only one time in three. The host opens one of the two goats, and the remaining door hides the other goat. If you switch, you lose.",
    "In short, switching wins every time your first choice was wrong, that is, two times out of three. By opening a door, the host gives you valuable information, because he does not act at random: he always avoids the car."
   ]},
   {h:"With a hundred doors", p:[
    "Another way to make the answer more obvious is to imagine the same game with a hundred doors. Behind only one is the car, and behind the other 99, goats. You pick a door: you have a one-in-a-hundred chance of having found the car.",
    "The host, who knows everything, then opens 98 of the other 99 doors, all with goats, and leaves just one door closed besides yours. He asks if you want to switch.",
    "In this case almost everyone feels they should switch. The door the host carefully avoided opening, out of 99, is highly suspicious. Your original door still has only a one-in-a-hundred chance of being right.",
    "By switching you therefore win 99 times out of 100. The three-door problem works in exactly the same way, but with smaller numbers, which makes the effect less striking to our intuition."
   ]},
   {h:"The Marilyn vos Savant storm", p:[
    "The problem became famous in September 1990. A reader asked the question in the \"Ask Marilyn\" column of the American magazine Parade, written by Marilyn vos Savant. She was then known for having been listed in the Guinness Book of Records for her very high IQ.",
    "She replied that you should switch doors, because you then have a two-in-three chance of winning. Her answer triggered an avalanche of mail: about 10,000 letters, nearly a thousand of them from people with doctorates, many in mathematics or statistics.",
    "The vast majority said she was wrong. Some were very condescending, accusing her of spreading ignorance or suggesting that women see mathematics differently from men. One professor wrote that there was already enough mathematical illiteracy in the country.",
    "Marilyn vos Savant stood by her answer and suggested teachers try the experiment in class with cups and a coin. Gradually thousands of pupils did so, and the results proved her right. Many of her critics eventually admitted their mistake."
   ]},
   {h:"Even great mathematicians", p:[
    "Among the sceptics was one of the greatest mathematicians of the 20th century, the Hungarian Paul Erdős, author of more than 1,500 scientific papers. When a colleague explained the problem to him, he refused to believe you should switch doors.",
    "Even after hearing the proof, Erdős remained unconvinced. He was finally persuaded only when his colleague showed him a computer simulation that played thousands of games and showed that the switching strategy won about two times out of three.",
    "Yet the problem was not new. In 1975 the American statistician Steve Selvin had already published it in a scientific journal, explicitly mentioning Monty Hall. And as early as 1889 the French mathematician Joseph Bertrand had proposed a very similar puzzle, Bertrand's box paradox.",
    "This problem shows that, even for experts, probability is an area where intuition can easily lead to error. Mathematicians themselves often recommend checking this kind of reasoning by experiment or simulation."
   ]},
   {h:"Pigeons do better", p:[
    "In 2010 two American psychologists, Walter Herbranson and Julia Schroeder, gave a version of the problem to pigeons. The birds had to choose one of three lit keys, then, after a \"losing\" key went dark, choose whether to stick or switch.",
    "At first the pigeons chose at random. But after a few weeks of training they had learned to switch almost every time, which let them get food two times out of three.",
    "The researchers then gave the same test to students. Even after many games, the humans often kept their first choice and did not adopt the best strategy as clearly as the birds.",
    "According to the researchers, pigeons simply learn from experience, without being swayed by faulty reasoning or fear of regret. Humans, on the other hand, overthink, and their intuition misleads them."
   ]},
   {h:"When the rules change", p:[
    "The answer depends a great deal on the exact rules of the game. If the host does not know where the car is and opens a door at random which happens to hide a goat, then the two remaining doors really do have a fifty-fifty chance each. Switching no longer helps.",
    "Likewise, if the host is devious and offers the switch only when the contestant has chosen the car, then switching would always lose. In Monty Hall's real show, contestants could not know which strategy he was following.",
    "That is why mathematicians insist on stating the rules precisely. Much of the arguing over the Monty Hall problem came from differences in how the question was asked and understood.",
    "The problem is now used in mathematics classes around the world to introduce conditional probability: the probability of an event changes when we learn new information."
   ]},
   {h:"Other traps for intuition", p:[
    "The Monty Hall problem is not the only puzzle that defies intuition. The birthday paradox is another famous example: in a class of 23 pupils, there is more than a fifty-fifty chance that two of them share the same birthday.",
    "This seems incredible, since there are 365 days in a year. But you have to count all the possible pairs of pupils: with 23 pupils there are 253 different pairs, each with a small chance of sharing a birthday. With 70 people the probability even exceeds 99.9%.",
    "Another common trap is the \"gambler's fallacy\": many people think that after a long run of heads, tails is more likely to come up. But a coin has no memory: each toss always has a fifty-fifty chance.",
    "These paradoxes remind us that mathematics can correct our intuitions. The Monty Hall problem also appears in films, series and books, such as Mark Haddon's novel The Curious Incident of the Dog in the Night-Time."
   ]}
  ],
  numbers: [
   ["2 in 3","chance of winning by switching doors"],
   ["≈ 10,000","letters received by Marilyn vos Savant"],
   ["1975","problem first published by Steve Selvin"],
   ["23","people needed for a better-than-even chance of a shared birthday"]
  ],
  didyou: [
   "The mathematician Paul Erdős was only convinced after seeing a computer simulation.",
   "Trained pigeons learn to switch doors more clearly than students do.",
   "Monty Hall, the host who gave his name to the problem, was born in Canada."
  ],
  open: [
   "Why does our brain struggle so much with probability?",
   "Can we train our intuition to reason better about chance?"
  ]
 }
}

});
