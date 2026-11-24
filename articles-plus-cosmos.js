/* LUMORA — sections supplémentaires (articles allongés) : univers Cosmos.
   addLong insère les nouvelles sections avant la dernière section existante et ajoute les sources. */
window.addLong = window.addLong || function(o){
  for(const id in o){
    const A = longArticles[id]; if(!A) continue;
    ["fr","en"].forEach(l=>{ const s=o[id][l]; if(!s||!A[l]) return; const S=A[l].sections; S.splice(Math.max(S.length-1,0),0,...s); });
    if(o[id].sources) A.sources.push(...o[id].sources);
  }
};

window.addParas = window.addParas || function(o){
  /* o = { id: { fr: { "Titre de section": "paragraphe" | ["p1","p2"] }, en: {...} } } — ajoute des paragraphes à une section */
  for(const id in o){ const A=longArticles[id]; if(!A) continue;
    ["fr","en"].forEach(l=>{ const m=o[id][l]; if(!m||!A[l]) return;
      for(const h in m){ const s=A[l].sections.find(x=>x.h===h); if(s) s.p.push(...[].concat(m[h])); } }); }
};
window.addFig = window.addFig || function(o){
  /* o = { id: { fr: { "Titre": {src,cap,credit} }, en: {...} } } — illustre une section par une photo */
  for(const id in o){ const A=longArticles[id]; if(!A) continue;
    ["fr","en"].forEach(l=>{ const m=o[id][l]; if(!m||!A[l]) return;
      for(const h in m){ const s=A[l].sections.find(x=>x.h===h); if(s) s.fig=m[h]; } }); }
};

addLong({

blackhole: {
 sources:[{t:"ESA — Gaia spots the most massive stellar black hole in our galaxy (Gaia BH3, 2024)", u:"https://www.esa.int/Science_Exploration/Space_Science/Gaia/Sleeping_giant_surprises_Gaia_scientists"}],
 fr:[
  {h:"Petits, moyens et géants", p:[
   "Tous les trous noirs ne se ressemblent pas. Les trous noirs « stellaires » naissent quand une étoile très massive, au moins une vingtaine de fois le Soleil, s'effondre sur elle-même à la fin de sa vie. Ils pèsent de quelques masses solaires à plusieurs dizaines. Le premier à avoir été identifié, Cygnus X-1, a été repéré dans les années 1960 et 1970 grâce aux rayons X émis par la matière qu'il arrache à une étoile voisine. En 2024, le satellite européen Gaia en a trouvé un de 33 masses solaires, Gaia BH3, à moins de 2 000 années-lumière de nous.",
   "À l'autre extrême, les trous noirs supermassifs, comme Sagittarius A* au centre de la Voie lactée, pèsent des millions, voire des milliards de fois le Soleil. Presque toutes les grandes galaxies en abritent un. Comment sont-ils devenus si énormes si vite ? Le télescope James Webb en observe déjà dans des galaxies très jeunes, ce qui intrigue les astronomes. Entre les deux, les trous noirs « intermédiaires » restent rares et difficiles à repérer."
  ]},
  {h:"Que se passerait-il si l'on tombait dedans ?", p:[
   "Près d'un trou noir de taille stellaire, la gravité change énormément entre la tête et les pieds d'un voyageur. Son corps serait étiré comme un spaghetti, d'où le nom amusant que les physiciens donnent à ce phénomène : la « spaghettification ». Près d'un trou noir supermassif, plus gros, cet étirement est plus doux, et l'on pourrait franchir l'horizon sans rien sentir de particulier… mais sans aucun retour possible.",
   "Le temps aussi se comporte étrangement. Selon la relativité d'Einstein, plus la gravité est forte, plus le temps s'écoule lentement. Vu de loin, un objet qui approche de l'horizon semble ralentir, rougir et se figer, sans jamais tout à fait le franchir. En 1974, Stephen Hawking a montré que les trous noirs devraient aussi émettre un très faible rayonnement et, au bout d'un temps immensément long, s'évaporer. Ce « rayonnement de Hawking » n'a encore jamais été observé."
  ]}
 ],
 en:[
  {h:"Small, medium and giant", p:[
   "Not all black holes are alike. \"Stellar\" black holes are born when a very massive star, at least about twenty times the Sun, collapses at the end of its life. They weigh from a few to several tens of solar masses. The first to be identified, Cygnus X-1, was spotted in the 1960s and 1970s thanks to the X-rays from matter it tears off a neighbouring star. In 2024 the European Gaia satellite found one of 33 solar masses, Gaia BH3, less than 2,000 light-years from us.",
   "At the other extreme, supermassive black holes, such as Sagittarius A* at the centre of the Milky Way, weigh millions or even billions of times the Sun. Almost every large galaxy has one. How did they grow so big so fast? The James Webb telescope already sees them in very young galaxies, which puzzles astronomers. In between, \"intermediate\" black holes remain rare and hard to find."
  ]},
  {h:"What would happen if you fell in?", p:[
   "Near a stellar-size black hole, gravity changes enormously between a traveller's head and feet. The body would be stretched like spaghetti, hence the playful name physicists give it: \"spaghettification\". Near a larger supermassive black hole the stretching is gentler, and you could cross the horizon without feeling anything special… but with no way back.",
   "Time behaves strangely too. According to Einstein's relativity, the stronger gravity is, the slower time passes. Seen from far away, an object approaching the horizon seems to slow down, redden and freeze, never quite crossing it. In 1974 Stephen Hawking showed that black holes should also emit a very faint radiation and, after an immensely long time, evaporate. This \"Hawking radiation\" has never yet been observed."
  ]}
 ]
},

oort: {
 sources:[{t:"NASA — Comet 3I/ATLAS, third known interstellar object (2025)", u:"https://science.nasa.gov/solar-system/comets/3i-atlas/"},{t:"Caltech — Planet Nine hypothesis (Batygin & Brown, 2016)", u:"https://www.caltech.edu/about/news/caltech-researchers-find-evidence-real-ninth-planet-49523"}],
 fr:[
  {h:"Des visiteurs venus d'autres étoiles", p:[
   "Si le Soleil possède un immense réservoir de comètes, d'autres étoiles en ont sans doute aussi. Et certaines de leurs comètes, éjectées dans l'espace, finissent par traverser notre système solaire. En 2017, les astronomes ont repéré pour la première fois un tel visiteur : ʻOumuamua, un objet allongé venu d'ailleurs, reparti aussitôt. En 2019, la comète 2I/Borisov a confirmé que ces voyageurs interstellaires existaient bien.",
   "En juillet 2025, un troisième objet, la comète 3I/ATLAS, a été découvert. Ces visiteurs sont précieux : ce sont des échantillons de la matière d'autres systèmes planétaires, que l'on peut observer sans quitter le nôtre. Les scientifiques comparent leur composition à celle de nos propres comètes pour comprendre si les planètes se forment partout de la même façon."
  ]},
  {h:"Une planète cachée aux confins ?", p:[
   "Entre Neptune et le nuage de Oort, quelques petits corps glacés suivent des orbites étonnantes. Sedna, découverte en 2003, met plus de 10 000 ans à faire le tour du Soleil et ne s'en approche jamais à moins de 76 fois la distance Terre-Soleil. En 2016, deux astronomes de Caltech, Konstantin Batygin et Michael Brown, ont remarqué que plusieurs de ces objets avaient des orbites curieusement alignées.",
   "Selon eux, une planète encore inconnue, plusieurs fois plus massive que la Terre, pourrait les « regrouper » par sa gravité : on l'a surnommée la Planète Neuf. Personne ne l'a encore vue, et d'autres chercheurs pensent que l'alignement est un hasard ou un biais d'observation. L'observatoire Vera Rubin, au Chili, qui a livré ses premières images en 2025, devrait aider à trancher en cartographiant des milliers de nouveaux objets lointains."
  ]}
 ],
 en:[
  {h:"Visitors from other stars", p:[
   "If the Sun has a vast reservoir of comets, other stars probably do too. And some of their comets, ejected into space, end up crossing our solar system. In 2017 astronomers spotted the first such visitor: ʻOumuamua, an elongated object from elsewhere that left again at once. In 2019 comet 2I/Borisov confirmed that these interstellar travellers really exist.",
   "In July 2025 a third object, comet 3I/ATLAS, was discovered. These visitors are precious: they are samples of material from other planetary systems that we can observe without leaving our own. Scientists compare their composition with that of our own comets to see whether planets form the same way everywhere."
  ]},
  {h:"A hidden planet at the edge?", p:[
   "Between Neptune and the Oort Cloud, a few small icy bodies follow surprising orbits. Sedna, discovered in 2003, takes more than 10,000 years to circle the Sun and never comes closer than 76 times the Earth–Sun distance. In 2016 two Caltech astronomers, Konstantin Batygin and Michael Brown, noticed that several of these objects had curiously aligned orbits.",
   "In their view, an as-yet-unknown planet, several times more massive than Earth, could be \"herding\" them with its gravity: it has been nicknamed Planet Nine. No one has seen it yet, and other researchers think the alignment is chance or an observational bias. The Vera Rubin Observatory in Chile, which released its first images in 2025, should help settle the question by mapping thousands of new distant objects."
  ]}
 ]
},

betelgeuse: {
 sources:[{t:"NASA — NASA scientist finds predicted companion star to Betelgeuse (2025)", u:"https://www.nasa.gov/science-research/astrophysics/nasa-scientist-finds-predicted-companion-star-to-betelgeuse/"},{t:"International Gemini Observatory — Gemini North discovers long-predicted stellar companion of Betelgeuse", u:"https://gemini.edu/news/press-releases/noirlab2523"}],
 fr:[
  {h:"Siwarha, la compagne enfin aperçue", p:[
   "Depuis plus d'un siècle, les astronomes remarquaient que l'éclat et le mouvement de Bételgeuse variaient selon un cycle d'environ six ans. Plusieurs études récentes ont attribué ce rythme à une petite étoile compagne, tournant très près de la géante. Mais l'éclat de Bételgeuse rendait toute observation directe presque impossible.",
   "En 2025, une équipe dirigée par Steve Howell, de la NASA, a utilisé le télescope Gemini Nord, à Hawaï, et une caméra spéciale qui prend des milliers de clichés ultrarapides pour corriger le flou de l'atmosphère. Elle a détecté un faible point lumineux à l'endroit prévu : une jeune étoile, peut-être 1,5 fois plus massive que le Soleil. Les chercheurs l'ont baptisée Siwarha, « son bracelet » en arabe. La détection reste à confirmer ; la prochaine bonne occasion de l'observer est attendue fin 2027."
  ]},
  {h:"La première étoile mesurée", p:[
   "Bételgeuse occupe aussi une place à part dans l'histoire de la science. En 1920, les astronomes américains Albert Michelson et Francis Pease ont réussi, grâce à un instrument appelé interféromètre, à mesurer son diamètre. C'était la première fois que l'on mesurait la taille d'une étoile autre que le Soleil. Plus tard, le télescope Hubble a été le premier à en photographier directement la surface, sous la forme d'un disque flou.",
   "Pour les observateurs du ciel, Bételgeuse est l'épaule d'Orion, le chasseur céleste. Sa couleur orangée, bien visible à l'œil nu, contraste avec le bleu de Rigel, l'autre étoile brillante de la constellation. Ce contraste raconte deux destins : Rigel est une jeune géante bleue très chaude, tandis que Bételgeuse est une supergéante rouge en fin de vie."
  ]}
 ],
 en:[
  {h:"Siwarha, the companion seen at last", p:[
   "For more than a century astronomers noticed that Betelgeuse's brightness and motion varied in a cycle of about six years. Several recent studies attributed this rhythm to a small companion star circling very close to the giant. But Betelgeuse's glare made any direct observation almost impossible.",
   "In 2025 a team led by NASA's Steve Howell used the Gemini North telescope in Hawaii and a special camera that takes thousands of ultra-fast snapshots to cancel the atmosphere's blurring. It detected a faint point of light at the predicted position: a young star, perhaps 1.5 times the Sun's mass. The researchers named it Siwarha, \"her bracelet\" in Arabic. The detection still needs confirming; the next good chance to observe it is expected in late 2027."
  ]},
  {h:"The first star ever measured", p:[
   "Betelgeuse also holds a special place in the history of science. In 1920 American astronomers Albert Michelson and Francis Pease managed, with an instrument called an interferometer, to measure its diameter. It was the first time the size of a star other than the Sun had been measured. Later the Hubble telescope was the first to photograph its surface directly, as a blurry disc.",
   "For skywatchers, Betelgeuse is the shoulder of Orion, the celestial hunter. Its orange colour, easily visible to the naked eye, contrasts with the blue of Rigel, the constellation's other bright star. The contrast tells of two destinies: Rigel is a young, very hot blue giant, while Betelgeuse is a red supergiant at the end of its life."
  ]}
 ]
},

saturn: {
 sources:[{t:"NASA Science — Saturn moons (274 confirmed, 2025)", u:"https://science.nasa.gov/saturn/moons"},{t:"ESA — Huygens landing on Titan (2005)", u:"https://www.esa.int/Science_Exploration/Space_Science/Cassini-Huygens"},{t:"NASA — Dragonfly mission to Titan", u:"https://science.nasa.gov/mission/dragonfly/"}],
 fr:[
  {h:"Titan et Encelade, deux mondes à part", p:[
   "Titan, la plus grande lune de Saturne, est plus grande que la planète Mercure. C'est la seule lune du système solaire à posséder une atmosphère épaisse, faite surtout d'azote. Il y pleut du méthane, qui remplit des lacs et des mers à sa surface. Le 14 janvier 2005, la sonde européenne Huygens, larguée par Cassini, s'y est posée : c'est encore aujourd'hui l'atterrissage le plus lointain jamais réalisé.",
   "Encelade, une petite lune blanche de 500 km de diamètre, a réservé une autre surprise. Cassini a découvert près de son pôle Sud des geysers qui projettent de la vapeur d'eau et des grains de glace dans l'espace. Ils proviennent d'un océan d'eau liquide caché sous la glace, qui contient des sels et des molécules organiques. Pour de nombreux scientifiques, c'est l'un des meilleurs endroits où chercher une forme de vie hors de la Terre. La NASA prévoit d'envoyer vers Titan Dragonfly, un drone volant, dans les années 2030."
  ]},
  {h:"274 lunes, un hexagone et des anneaux qui disparaissent", p:[
   "En mars 2025, l'Union astronomique internationale a confirmé la découverte de 128 nouvelles petites lunes autour de Saturne, portant son total à 274, presque deux fois plus que toutes les autres planètes réunies. La plupart sont de petits rochers de quelques kilomètres, sans doute les débris d'anciennes collisions, capturés par la gravité de la planète.",
   "Saturne a d'autres curiosités : au-dessus de son pôle Nord tourne un gigantesque tourbillon en forme d'hexagone, plus large que la Terre. Et tous les 13 à 16 ans environ, ses anneaux, vus de la Terre, se présentent par la tranche et semblent presque disparaître, tant ils sont fins. C'est ce qui s'est produit en mars 2025 : pendant quelques semaines, la planète a semblé presque « nue » dans les télescopes."
  ]}
 ],
 en:[
  {h:"Titan and Enceladus, two worlds apart", p:[
   "Titan, Saturn's largest moon, is bigger than the planet Mercury. It is the only moon in the solar system with a thick atmosphere, mostly nitrogen. It rains methane there, filling lakes and seas on its surface. On 14 January 2005 the European Huygens probe, released by Cassini, landed on it: still the most distant landing ever achieved.",
   "Enceladus, a small white moon 500 km across, had another surprise in store. Near its south pole Cassini found geysers shooting water vapour and ice grains into space. They come from an ocean of liquid water hidden beneath the ice, containing salts and organic molecules. For many scientists it is one of the best places to look for life beyond Earth. NASA plans to send Dragonfly, a flying drone, to Titan in the 2030s."
  ]},
  {h:"274 moons, a hexagon and vanishing rings", p:[
   "In March 2025 the International Astronomical Union confirmed 128 new small moons around Saturn, bringing its total to 274, almost twice as many as all the other planets combined. Most are small rocks a few kilometres across, probably debris from ancient collisions captured by the planet's gravity.",
   "Saturn has other curiosities: above its north pole spins a gigantic hexagon-shaped vortex wider than Earth. And roughly every 13 to 16 years its rings, seen from Earth, turn edge-on and almost vanish, so thin are they. That happened in March 2025: for a few weeks the planet looked almost \"bare\" in telescopes."
  ]}
 ]
},

bigbang: {
 sources:[{t:"NASA — Webb telescope finds the most distant known galaxies", u:"https://science.nasa.gov/mission/webb/"},{t:"DESI collaboration — Results on the expansion history of the universe (2024-2025)", u:"https://www.desi.lbl.gov/"}],
 fr:[
  {h:"Les premières galaxies vues par James Webb", p:[
   "Lancé le jour de Noël 2021, le télescope spatial James Webb observe la lumière infrarouge. C'est essentiel pour regarder très loin : à cause de l'expansion de l'univers, la lumière des galaxies les plus lointaines a été étirée vers l'infrarouge pendant son voyage. Webb peut ainsi voir des galaxies telles qu'elles étaient quelques centaines de millions d'années seulement après le Big Bang.",
   "Depuis 2024, il a battu plusieurs records, avec des galaxies vues moins de 300 millions d'années après la naissance de l'univers. Surprise : certaines sont plus brillantes et plus nombreuses que prévu, comme si les premières étoiles et galaxies s'étaient formées plus vite que ne le prédisaient les modèles. Les astronomes cherchent à comprendre si cela remet en cause certains détails de la théorie, sans contester le Big Bang lui-même."
  ]},
  {h:"Les grandes questions encore ouvertes", p:[
   "Plusieurs mystères demeurent. Le premier concerne la vitesse d'expansion de l'univers : selon la méthode utilisée, les mesures ne donnent pas tout à fait le même résultat. Les observations du rayonnement fossile indiquent environ 67 kilomètres par seconde et par mégaparsec, celles des étoiles et supernovas proches plutôt 73. Cet écart, appelé « tension de Hubble », pourrait cacher une nouvelle physique.",
   "Le second concerne les tout premiers instants. Beaucoup de physiciens pensent qu'une fraction de seconde après le début, l'univers a connu une phase d'expansion extrêmement rapide, l'inflation, qui expliquerait pourquoi il paraît si uniforme. Mais elle n'a pas encore été prouvée. Et la question de ce qu'il y avait « avant » le Big Bang, si cette question a même un sens, reste totalement ouverte."
  ]}
 ],
 en:[
  {h:"The first galaxies seen by James Webb", p:[
   "Launched on Christmas Day 2021, the James Webb Space Telescope observes infrared light. That is essential for looking very far: because the universe is expanding, the light of the most distant galaxies has been stretched into the infrared on its journey. Webb can thus see galaxies as they were only a few hundred million years after the Big Bang.",
   "Since 2024 it has broken several records, with galaxies seen less than 300 million years after the universe's birth. A surprise: some are brighter and more numerous than expected, as if the first stars and galaxies formed faster than models predicted. Astronomers are working out whether this challenges certain details of the theory, without disputing the Big Bang itself."
  ]},
  {h:"The big questions still open", p:[
   "Several mysteries remain. The first concerns how fast the universe is expanding: depending on the method, the measurements do not quite agree. Observations of the cosmic background radiation point to about 67 kilometres per second per megaparsec, those of nearby stars and supernovae to about 73. This gap, called the \"Hubble tension\", might hide new physics.",
   "The second concerns the very first instants. Many physicists think that a fraction of a second after the start, the universe went through an extremely rapid expansion phase, inflation, which would explain why it looks so uniform. But it has not yet been proven. And the question of what came \"before\" the Big Bang, if it even makes sense, remains completely open."
  ]}
 ]
},

andromeda: {
 sources:[{t:"Wikipedia — Andromeda Galaxy (history of observation)", u:"https://en.wikipedia.org/wiki/Andromeda_Galaxy"}],
 fr:[
  {h:"La galaxie qui a agrandi l'univers", p:[
   "Il y a à peine un siècle, beaucoup d'astronomes pensaient que la Voie lactée était tout l'univers, et qu'Andromède n'était qu'une « nébuleuse » de gaz parmi nos étoiles. En 1920, un célèbre débat a opposé deux astronomes américains, Harlow Shapley et Heber Curtis, sur cette question.",
   "La réponse est venue en 1923. À l'observatoire du mont Wilson, en Californie, Edwin Hubble a repéré dans Andromède une étoile variable d'un type particulier, une céphéide, dont la luminosité permet de calculer la distance. Résultat : Andromède se trouvait bien trop loin pour faire partie de notre galaxie. C'était une galaxie à part entière. D'un coup, l'univers est devenu immensément plus grand, peuplé de milliards de galaxies."
  ]},
  {h:"Le Groupe local, notre quartier cosmique", p:[
   "Andromède et la Voie lactée sont les deux plus grandes galaxies d'un petit ensemble appelé le Groupe local, qui compte plusieurs dizaines de galaxies, pour la plupart petites. La troisième grande, la galaxie du Triangle, est elle aussi visible dans de très bonnes conditions, depuis un endroit très sombre.",
   "Chacune des deux géantes est entourée de galaxies satellites. Autour de la Voie lactée tournent notamment les Grand et Petit Nuages de Magellan, visibles à l'œil nu depuis l'hémisphère Sud. Autour d'Andromède, on connaît notamment les petites galaxies M32 et M110. Andromède contiendrait environ mille milliards d'étoiles, peut-être deux fois plus que la Voie lactée, même si les deux galaxies ont des masses totales assez proches."
  ]}
 ],
 en:[
  {h:"The galaxy that made the universe bigger", p:[
   "Barely a century ago, many astronomers thought the Milky Way was the whole universe, and that Andromeda was just a gas \"nebula\" among our stars. In 1920 a famous debate pitted two American astronomers, Harlow Shapley and Heber Curtis, against each other on this question.",
   "The answer came in 1923. At Mount Wilson Observatory in California, Edwin Hubble spotted in Andromeda a particular kind of variable star, a Cepheid, whose brightness allows its distance to be calculated. The result: Andromeda was far too distant to be part of our galaxy. It was a galaxy in its own right. All at once the universe became immensely larger, filled with billions of galaxies."
  ]},
  {h:"The Local Group, our cosmic neighbourhood", p:[
   "Andromeda and the Milky Way are the two largest galaxies in a small cluster called the Local Group, which counts several dozen galaxies, mostly small. The third large one, the Triangulum Galaxy, can also be seen in very good conditions from a very dark site.",
   "Each of the two giants is surrounded by satellite galaxies. Around the Milky Way orbit notably the Large and Small Magellanic Clouds, visible to the naked eye from the southern hemisphere. Around Andromeda, the small galaxies M32 and M110 are among those known. Andromeda is thought to contain about a trillion stars, perhaps twice as many as the Milky Way, although the two galaxies have fairly similar total masses."
  ]}
 ]
},

voyager: {
 sources:[{t:"NASA — Voyager 1 makes history reaching one light-day from Earth (Nov. 2026)", u:"https://www.nasa.gov/?p=1066602"},{t:"NASA Science — Where are Voyager 1 and Voyager 2 now?", u:"https://science.nasa.gov/mission/voyager/where-are-voyager-1-and-voyager-2-now/"}],
 fr:[
  {h:"Un jour-lumière de la Terre", p:[
   "Le 18 novembre 2026, Voyager 1 a franchi un cap symbolique : elle se trouve désormais à environ 25,9 milliards de kilomètres de la Terre, soit la distance que la lumière parcourt en 24 heures. C'est le premier objet fabriqué par l'humanité à atteindre un « jour-lumière ». Concrètement, un ordre envoyé depuis la Terre met une journée entière à lui parvenir, et la réponse une autre journée à revenir.",
   "Ce cap est arrivé dans un moment délicat : juste avant, la sonde avait cessé de renvoyer ses données scientifiques et techniques, tout en continuant d'émettre un simple signal porteur. Les ingénieurs du JPL cherchent la cause du problème, ce qui prend du temps avec deux jours d'attente pour chaque échange. Voyager 1 a déjà surmonté plusieurs pannes de ce genre par le passé."
  ]},
  {h:"Réparer à distance un ordinateur de 1977", p:[
   "Les Voyager ont été conçues avec la technologie des années 1970. Leurs ordinateurs de bord disposent d'une mémoire minuscule, environ 70 kilooctets au total, des millions de fois moins qu'un téléphone actuel. Leur énergie vient de générateurs au plutonium, dont la puissance diminue d'environ 4 watts par an. Pour économiser l'électricité, la NASA éteint peu à peu les instruments : sur les dix de départ, seuls deux fonctionnaient encore sur Voyager 1 en 2026.",
   "Fin 2023, une puce de mémoire défaillante a brouillé les messages de Voyager 1 pendant des mois. Les ingénieurs, dont certains consultaient des documents vieux de près de 50 ans, ont réécrit une partie du logiciel pour contourner la zone abîmée, et la sonde a repris ses envois en 2024. Ces exploits de « réparation à distance » font partie de la légende des Voyager."
  ]}
 ],
 en:[
  {h:"One light-day from Earth", p:[
   "On 18 November 2026, Voyager 1 passed a symbolic milestone: it is now about 25.9 billion kilometres from Earth, the distance light travels in 24 hours. It is the first human-made object to reach one \"light-day\". In practice, a command sent from Earth takes a whole day to reach it, and the reply another day to come back.",
   "The milestone came at a delicate moment: just before, the probe had stopped returning its science and engineering data, while still sending a simple carrier signal. JPL engineers are looking for the cause, which takes time with two days of waiting for each exchange. Voyager 1 has already overcome several such failures in the past."
  ]},
  {h:"Remotely fixing a 1977 computer", p:[
   "The Voyagers were designed with 1970s technology. Their onboard computers have tiny memories, about 70 kilobytes in all, millions of times less than a modern phone. Their power comes from plutonium generators whose output drops by about 4 watts a year. To save electricity NASA is gradually switching off instruments: of the original ten, only two were still running on Voyager 1 in 2026.",
   "In late 2023 a failing memory chip scrambled Voyager 1's messages for months. Engineers, some of them consulting documents nearly 50 years old, rewrote part of the software to work around the damaged area, and the probe resumed sending data in 2024. These feats of \"remote repair\" are part of the Voyager legend."
  ]}
 ]
},

darkmatter: {
 sources:[{t:"LZ experiment — Dark matter search results (Sanford Underground Research Facility)", u:"https://lz.lbl.gov/"},{t:"ESA — Euclid, the dark Universe detective", u:"https://www.esa.int/Science_Exploration/Space_Science/Euclid"},{t:"NASA — Bullet Cluster: direct proof of dark matter (2006)", u:"https://chandra.harvard.edu/photo/2006/1e0657/"}],
 fr:[
  {h:"La chasse à la particule invisible", p:[
   "Si la matière noire est faite de particules, des milliards d'entre elles traversent chaque seconde notre corps sans laisser de trace. Pour les attraper, les physiciens ont construit des détecteurs enfouis à plus d'un kilomètre sous terre, à l'abri des rayons cosmiques. L'expérience LZ, dans une ancienne mine d'or du Dakota du Sud, utilise ainsi plusieurs tonnes de xénon liquide ultrapur, en espérant voir un noyau d'atome bouger sous le choc d'une particule de matière noire.",
   "Pour l'instant, aucun signal clair n'a été détecté, mais chaque résultat élimine des possibilités. Les candidats sont nombreux : des particules lourdes appelées WIMP, des particules extrêmement légères appelées axions, ou d'autres encore. Une minorité de chercheurs pense même qu'il faudrait plutôt modifier les lois de la gravité à grande échelle, une piste qui peine toutefois à expliquer toutes les observations."
  ]},
  {h:"Cartographier l'invisible", p:[
   "En 2006, l'observation d'une collision entre deux amas de galaxies, l'amas de la Balle, a fourni l'un des indices les plus frappants. Le gaz chaud des deux amas, ralenti par le choc, est resté au centre, tandis que la masse, mesurée grâce à la déviation de la lumière, est passée de part et d'autre. Comme si une matière invisible avait traversé la collision sans être freinée.",
   "Aujourd'hui, de nouveaux instruments cartographient la matière noire sur d'immenses régions du ciel. Le télescope spatial européen Euclid, lancé en juillet 2023, mesure les formes de milliards de galaxies, légèrement déformées par la matière noire située devant elles. Au Chili, l'observatoire Vera Rubin, qui a livré ses premières images en 2025, va photographier tout le ciel austral pendant dix ans. Ensemble, ils devraient dresser la carte en trois dimensions la plus précise jamais réalisée de cette matière invisible."
  ]}
 ],
 en:[
  {h:"Hunting the invisible particle", p:[
   "If dark matter is made of particles, billions of them pass through our bodies every second without a trace. To catch them, physicists have built detectors buried more than a kilometre underground, shielded from cosmic rays. The LZ experiment, in a former gold mine in South Dakota, uses several tonnes of ultra-pure liquid xenon, hoping to see an atomic nucleus jolted by the impact of a dark matter particle.",
   "So far no clear signal has been detected, but each result rules out possibilities. The candidates are many: heavy particles called WIMPs, extremely light particles called axions, and others. A minority of researchers even think the laws of gravity should be modified on large scales instead, an approach that nonetheless struggles to explain all the observations."
  ]},
  {h:"Mapping the invisible", p:[
   "In 2006, observations of a collision between two galaxy clusters, the Bullet Cluster, provided one of the most striking clues. The hot gas of the two clusters, slowed by the impact, stayed in the middle, while the mass, measured from the bending of light, passed through on either side. As if invisible matter had gone through the collision without being slowed down.",
   "Today new instruments are mapping dark matter across vast regions of sky. The European Euclid space telescope, launched in July 2023, measures the shapes of billions of galaxies, slightly distorted by the dark matter in front of them. In Chile the Vera Rubin Observatory, which released its first images in 2025, will photograph the whole southern sky for ten years. Together they should produce the most precise three-dimensional map ever made of this invisible matter."
  ]}
 ]
}

});

/* Troisièmes paragraphes des nouvelles sections (objectif ~1 200 mots) */
addParas({
 blackhole:{
  fr:{"Petits, moyens et géants":"Depuis 2015, les détecteurs d'ondes gravitationnelles LIGO et Virgo « entendent » régulièrement des trous noirs fusionner, à des milliards d'années-lumière. Plusieurs centaines de ces collisions ont déjà été enregistrées. Elles ont révélé des trous noirs de masses inattendues, parfois trop lourds pour être nés directement d'une seule étoile, ce qui suggère qu'ils se sont formés par fusions successives, comme des boules de neige qui grossissent.",
      "Que se passerait-il si l'on tombait dedans ?":"Ces effets ne sont pas que théoriques. Les satellites GPS doivent corriger en permanence leurs horloges, car le temps s'écoule un peu plus vite en altitude, où la gravité terrestre est plus faible, qu'au sol. Sans cette correction, inspirée directement de la relativité d'Einstein, la position indiquée par nos téléphones dériverait de plusieurs kilomètres par jour."},
  en:{"Small, medium and giant":"Since 2015 the LIGO and Virgo gravitational-wave detectors have regularly \"heard\" black holes merging billions of light-years away. Several hundred such collisions have already been recorded. They have revealed black holes of unexpected masses, sometimes too heavy to have formed directly from a single star, suggesting they grew through successive mergers, like snowballs getting bigger.",
      "What would happen if you fell in?":"These effects are not just theory. GPS satellites must constantly correct their clocks, because time runs slightly faster at altitude, where Earth's gravity is weaker, than on the ground. Without this correction, taken straight from Einstein's relativity, the position shown by our phones would drift by several kilometres a day."}
 },
 oort:{
  fr:{"Des visiteurs venus d'autres étoiles":"Leur vitesse les trahit. Une comète née autour du Soleil suit une orbite fermée, en forme d'ellipse. Un visiteur interstellaire, lui, arrive trop vite pour être retenu par la gravité solaire : sa trajectoire est ouverte, comme un boomerang qui ne reviendrait jamais. Avec les nouveaux grands relevés du ciel, les astronomes s'attendent à en découvrir plusieurs chaque année.",
      "Une planète cachée aux confins ?":"Ce ne serait pas la première fois qu'une planète est trouvée par le calcul avant d'être vue. En 1846, le mathématicien français Urbain Le Verrier avait prédit la position de Neptune en étudiant les irrégularités de l'orbite d'Uranus ; l'astronome allemand Johann Galle l'a observée la nuit même où il a reçu ses calculs. Les chercheurs de la Planète Neuf espèrent un succès comparable."},
  en:{"Visitors from other stars":"Their speed gives them away. A comet born around the Sun follows a closed, elliptical orbit. An interstellar visitor arrives too fast to be held by the Sun's gravity: its path is open, like a boomerang that never comes back. With the new large sky surveys, astronomers expect to discover several every year.",
      "A hidden planet at the edge?":"It would not be the first time a planet was found by calculation before being seen. In 1846 the French mathematician Urbain Le Verrier predicted Neptune's position by studying irregularities in Uranus's orbit; the German astronomer Johann Galle observed it the very night he received the calculations. Planet Nine hunters hope for a similar success."}
 },
 betelgeuse:{
  fr:{"Siwarha, la compagne enfin aperçue":"Cette compagne aurait un destin bref. Elle tourne si près de Bételgeuse qu'elle traverse presque son atmosphère extérieure, très étendue. Selon les chercheurs, elle pourrait être freinée peu à peu, puis avalée par la géante d'ici quelques milliers d'années, bien avant que Bételgeuse n'explose. La compagne expliquerait aussi certains mouvements de poussière observés autour de l'étoile.",
      "La première étoile mesurée":"Bételgeuse est si grande que, placée au centre du Système solaire, sa surface dépasserait l'orbite de Mars, voire celle de Jupiter selon les estimations. Pourtant, sa matière est extrêmement diluée : ses couches extérieures sont des milliers de fois moins denses que l'air que nous respirons. C'est un immense ballon de gaz chaud, qui « respire » en gonflant et en se contractant au fil des années."},
  en:{"Siwarha, the companion seen at last":"This companion may have a short future. It orbits so close to Betelgeuse that it almost passes through the giant's vast outer atmosphere. According to researchers, it could gradually be slowed down and then swallowed by the giant within a few thousand years, long before Betelgeuse explodes. The companion may also explain some movements of dust seen around the star.",
      "The first star ever measured":"Betelgeuse is so large that, placed at the centre of the Solar System, its surface would reach beyond the orbit of Mars, perhaps even Jupiter by some estimates. Yet its matter is extremely thin: its outer layers are thousands of times less dense than the air we breathe. It is a huge balloon of hot gas that \"breathes\", swelling and shrinking over the years."}
 },
 saturn:{
  fr:{"Titan et Encelade, deux mondes à part":"Titan est un laboratoire précieux pour comprendre la Terre primitive. Son atmosphère orangée est remplie de molécules organiques complexes, formées par la lumière du Soleil, qui tombent lentement vers le sol comme une neige brune. À –180 °C, l'eau y est dure comme de la roche : les montagnes sont faites de glace et les rivières de méthane liquide. Dragonfly devrait voler d'un site à l'autre pour analyser ces dunes et ces cratères.",
      "274 lunes, un hexagone et des anneaux qui disparaissent":"Ces passages par la tranche sont aussi une aubaine pour les astronomes : quand l'éclat des anneaux disparaît, les petites lunes proches de la planète deviennent plus faciles à repérer. C'est ainsi que la lune Janus a été découverte en 1966. Prochain rendez-vous : vers 2038-2039, les anneaux se présenteront de nouveau par la tranche vus de la Terre."},
  en:{"Titan and Enceladus, two worlds apart":"Titan is a precious laboratory for understanding the early Earth. Its orange atmosphere is full of complex organic molecules, made by sunlight, which slowly fall to the ground like brown snow. At –180 °C, water there is as hard as rock: the mountains are made of ice and the rivers of liquid methane. Dragonfly should fly from site to site to analyse its dunes and craters.",
      "274 moons, a hexagon and vanishing rings":"These edge-on passages are also a boon for astronomers: when the rings' glare vanishes, small moons close to the planet become easier to spot. That is how the moon Janus was discovered in 1966. Next appointment: around 2038–2039, the rings will again appear edge-on from Earth."}
 },
 bigbang:{
  fr:{"Les premières galaxies vues par James Webb":"Webb ne voit pas seulement des galaxies : il analyse aussi leur lumière, décomposée comme un arc-en-ciel, pour mesurer leur distance et leur composition. Il a ainsi détecté de l'oxygène dans des galaxies très anciennes, preuve que des générations d'étoiles y avaient déjà vécu et explosé. Chaque nouvelle image repousse un peu plus loin la frontière de ce que l'on sait des débuts de l'univers.",
      "Les grandes questions encore ouvertes":"Des indices récents ajoutent un nouveau suspense. En 2024 et 2025, la grande carte des galaxies réalisée par l'instrument DESI, en Arizona, a suggéré que l'énergie sombre, la mystérieuse force qui accélère l'expansion de l'univers, pourrait faiblir avec le temps. Si cela se confirme, notre vision de l'avenir lointain de l'univers pourrait changer. Les chercheurs restent prudents et attendent davantage de données."},
  en:{"The first galaxies seen by James Webb":"Webb does not just see galaxies: it also analyses their light, split like a rainbow, to measure their distance and composition. It has detected oxygen in very old galaxies, proof that generations of stars had already lived and exploded there. Each new image pushes the frontier of what we know about the universe's beginnings a little further.",
      "The big questions still open":"Recent clues add fresh suspense. In 2024 and 2025 the large galaxy map made by the DESI instrument in Arizona suggested that dark energy, the mysterious force speeding up the universe's expansion, might be weakening over time. If confirmed, our picture of the universe's distant future could change. Researchers remain cautious and are waiting for more data."}
 },
 andromeda:{
  fr:{"La galaxie qui a agrandi l'univers":"Hubble ne s'est pas arrêté là. En 1929, en comparant les distances et les vitesses de nombreuses galaxies, il a montré qu'elles s'éloignent toutes de nous, d'autant plus vite qu'elles sont loin. C'est la preuve que l'univers est en expansion. Andromède fait figure d'exception : elle est assez proche pour que la gravité l'emporte, et elle se rapproche de nous à environ 110 kilomètres par seconde.",
      "Le Groupe local, notre quartier cosmique":"Le Groupe local n'est lui-même qu'une petite partie d'une structure bien plus vaste. Il appartient au superamas de la Vierge et, à plus grande échelle encore, à un immense ensemble de galaxies baptisé Laniakea, « horizon céleste immense » en hawaïen, défini en 2014. Il contient environ 100 000 galaxies, qui semblent toutes s'écouler vers une même région du ciel."},
  en:{"The galaxy that made the universe bigger":"Hubble did not stop there. In 1929, comparing the distances and speeds of many galaxies, he showed they are all moving away from us, faster the farther they are. This is the proof that the universe is expanding. Andromeda is an exception: it is close enough for gravity to win, and it is approaching us at about 110 kilometres per second.",
      "The Local Group, our cosmic neighbourhood":"The Local Group itself is only a small part of a much larger structure. It belongs to the Virgo Supercluster and, on an even larger scale, to a vast collection of galaxies named Laniakea, \"immense heaven\" in Hawaiian, defined in 2014. It contains about 100,000 galaxies, which all seem to flow towards the same region of the sky."}
 },
 voyager:{
  fr:{"Un jour-lumière de la Terre":"Pour mesurer l'exploit, il faut se rappeler les distances : il faudrait encore environ 4,2 années-lumière pour atteindre l'étoile la plus proche, Proxima du Centaure. À la vitesse de Voyager 1, environ 17 kilomètres par seconde, le voyage durerait plus de 70 000 ans. Dans environ 40 000 ans, la sonde passera à 1,6 année-lumière d'une petite étoile de la constellation de la Girafe, Gliese 445.",
      "Réparer à distance un ordinateur de 1977":"Pour communiquer avec les Voyager, la NASA utilise le réseau Deep Space Network, de grandes antennes réparties en Californie, en Espagne et en Australie, afin de toujours avoir une sonde « en vue ». Le signal de Voyager 1 arrive sur Terre avec une puissance infime, des milliards de fois plus faible que celle d'une montre à pile. Il faut des antennes de 70 mètres de diamètre pour le capter."},
  en:{"One light-day from Earth":"To grasp the feat, remember the distances: it would still take about 4.2 light-years to reach the nearest star, Proxima Centauri. At Voyager 1's speed, about 17 kilometres per second, the journey would take more than 70,000 years. In about 40,000 years the probe will pass within 1.6 light-years of a small star in the constellation Camelopardalis, Gliese 445.",
      "Remotely fixing a 1977 computer":"To talk to the Voyagers, NASA uses the Deep Space Network, large antennas spread across California, Spain and Australia so that a probe is always \"in view\". Voyager 1's signal reaches Earth with a tiny power, billions of times weaker than a watch battery. Antennas 70 metres across are needed to catch it."}
 },
 darkmatter:{
  fr:{"La chasse à la particule invisible":"D'autres chercheurs tentent de fabriquer de la matière noire. Au grand collisionneur de particules du CERN, près de Genève, les physiciens font se percuter des protons à des vitesses proches de celle de la lumière, en espérant que certaines collisions produisent des particules invisibles. Elles se trahiraient par de l'énergie « manquante » dans le bilan de la collision. Là encore, aucun signe convaincant n'a encore été trouvé.",
      "Cartographier l'invisible":"Cette déformation de la lumière s'appelle l'effet de lentille gravitationnelle. Prédite par Einstein, elle fonctionne comme une loupe cosmique : une grande masse courbe l'espace autour d'elle et dévie la lumière des galaxies situées derrière. Plus la déformation est forte, plus il y a de masse. C'est en mesurant ces distorsions sur des millions de galaxies que l'on peut « peser » la matière noire, sans jamais la voir directement."},
  en:{"Hunting the invisible particle":"Other researchers are trying to make dark matter. At CERN's Large Hadron Collider near Geneva, physicists smash protons together at nearly the speed of light, hoping some collisions produce invisible particles. They would give themselves away as \"missing\" energy in the collision's balance sheet. Here too, no convincing sign has yet been found.",
      "Mapping the invisible":"This distortion of light is called gravitational lensing. Predicted by Einstein, it works like a cosmic magnifying glass: a large mass bends space around it and deflects the light of galaxies behind it. The stronger the distortion, the more mass there is. By measuring these distortions on millions of galaxies, we can \"weigh\" dark matter without ever seeing it directly."}
 }
});

addFig({
 blackhole:{fr:{"Photographier l'invisible":{src:"assets/photos/plus/blackhole-eht.jpg",cap:"Les deux premières images de trous noirs : M87* (à gauche, publiée en 2019) et Sagittarius A*, au centre de notre galaxie (à droite, 2022). Les deux anneaux ont presque la même taille apparente, mais M87* est environ 1 500 fois plus massif et beaucoup plus loin.",credit:"Image : EHT Collaboration — CC BY 4.0"}},
            en:{"Photographing the invisible":{src:"assets/photos/plus/blackhole-eht.jpg",cap:"The first two images of black holes: M87* (left, released in 2019) and Sagittarius A* at the centre of our galaxy (right, 2022). The two rings look almost the same size, but M87* is about 1,500 times more massive and much farther away.",credit:"Image: EHT Collaboration — CC BY 4.0"}}},
 voyager:{fr:{"Un point bleu pâle":{src:"assets/photos/plus/voyager-paleblue.jpg",cap:"Le « point bleu pâle » : la Terre, minuscule point lumineux au milieu d'un rayon de lumière solaire, photographiée par Voyager 1 le 14 février 1990 à environ 6 milliards de kilomètres (version retraitée par la NASA en 2020).",credit:"Photo : NASA / JPL-Caltech — domaine public"}},
          en:{"A pale blue dot":{src:"assets/photos/plus/voyager-paleblue.jpg",cap:"The \"pale blue dot\": Earth, a tiny speck of light within a ray of sunlight, photographed by Voyager 1 on 14 February 1990 from about 6 billion kilometres (version reprocessed by NASA in 2020).",credit:"Photo: NASA / JPL-Caltech — public domain"}}},
 saturn:{fr:{"Des anneaux de glace… et peut-être temporaires":{src:"assets/photos/plus/saturn-equinox.jpg",cap:"Saturne photographiée par la sonde Cassini en 2009, au moment de l'équinoxe : le Soleil éclaire les anneaux exactement par la tranche, ce qui les fait paraître très sombres.",credit:"Photo : NASA / JPL / Space Science Institute — domaine public"}},
         en:{"Rings of ice… and perhaps temporary ones":{src:"assets/photos/plus/saturn-equinox.jpg",cap:"Saturn photographed by the Cassini probe in 2009, at equinox: the Sun lights the rings exactly edge-on, making them look very dark.",credit:"Photo: NASA / JPL / Space Science Institute — public domain"}}}
});
