/* LUMORA — articles complets : Futur (1) — Intelligence artificielle, fusion nucléaire. */
Object.assign(longArticles, {

ai: {
 sources: [
  {t:"Turing, A. — Computing Machinery and Intelligence, Mind (1950)", u:"https://doi.org/10.1093/mind/LIX.236.433"},
  {t:"Prix Nobel de physique et de chimie 2024 (Hopfield, Hinton ; Baker, Hassabis, Jumper)", u:"https://www.nobelprize.org/prizes/chemistry/2024/summary/"},
  {t:"Vaswani et al. — Attention Is All You Need (2017)", u:"https://arxiv.org/abs/1706.03762"},
  {t:"Union européenne — Règlement sur l'intelligence artificielle (AI Act, 2024)", u:"https://eur-lex.europa.eu/eli/reg/2024/1689/oj"},
  {t:"Agence internationale de l'énergie — Energy and AI (2025)", u:"https://www.iea.org/reports/energy-and-ai"}
 ],
 fr: {
  key: [
   "L'intelligence artificielle, ou IA, désigne des programmes capables d'accomplir des tâches qui demandent habituellement de l'intelligence humaine, comme reconnaître des images, traduire ou répondre à des questions.",
   "Les IA modernes apprennent à partir d'énormes quantités d'exemples, grâce à des réseaux de neurones artificiels inspirés, de loin, du cerveau.",
   "Elles aident déjà les scientifiques à prédire la forme des protéines, à analyser des images médicales ou à prévoir la météo.",
   "Elles posent aussi des questions importantes : erreurs, biais, fausses images, consommation d'énergie et effets sur le travail."
  ],
  sections: [
   {h:"Une machine peut-elle penser ?", p:[
    "En 1950, le mathématicien britannique Alan Turing publie un article qui commence par une question audacieuse : « Les machines peuvent-elles penser ? » Plutôt que de chercher à définir la pensée, il propose un test, qu'il appelle le « jeu de l'imitation ».",
    "Dans ce test, une personne discute par écrit avec deux interlocuteurs cachés : un humain et une machine. Si elle n'arrive pas à distinguer lequel est la machine, on peut considérer que celle-ci se comporte de manière intelligente. On l'appelle aujourd'hui le test de Turing.",
    "À l'époque, les ordinateurs occupaient des pièces entières et étaient bien moins puissants qu'une calculatrice moderne. Turing prédisait pourtant qu'à la fin du XXe siècle, les machines pourraient tromper un interlocuteur dans une partie importante des conversations.",
    "Turing est mort en 1954, à 41 ans, après avoir été condamné pour son homosexualité, alors illégale au Royaume-Uni. Il a été réhabilité bien plus tard, et son visage figure depuis 2021 sur les billets de 50 livres sterling. Il est considéré comme l'un des pères de l'informatique."
   ]},
   {h:"Naissance d'un domaine", p:[
    "L'expression « intelligence artificielle » a été inventée par l'informaticien américain John McCarthy. Durant l'été 1956, il organise avec plusieurs collègues un atelier au Dartmouth College, aux États-Unis, pour réfléchir à la façon de faire penser les machines. On considère souvent cet atelier comme l'acte de naissance de l'IA.",
    "Les premiers chercheurs sont très optimistes. Ils créent des programmes capables de démontrer des théorèmes mathématiques, de jouer aux dames ou de résoudre des casse-têtes. Certains prédisent qu'une machine aussi intelligente qu'un humain existera en une vingtaine d'années.",
    "En 1966, l'informaticien Joseph Weizenbaum crée ELIZA, un programme qui imite un psychothérapeute en reformulant les phrases de son interlocuteur. Il est très simple, mais beaucoup d'utilisateurs ont l'impression qu'il les comprend vraiment, ce qui inquiète son propre créateur.",
    "Mais les progrès sont plus lents que prévu. Les ordinateurs manquent de puissance, et les programmes, écrits règle par règle, ne savent pas faire face à la complexité du monde réel. Les financements diminuent, et le domaine traverse deux périodes de découragement, appelées les « hivers de l'IA », dans les années 1970 puis à la fin des années 1980."
   ]},
   {h:"Apprendre par l'exemple", p:[
    "Il existe deux grandes façons de rendre une machine « intelligente ». La première consiste à lui écrire toutes les règles à suivre, comme une recette. La seconde consiste à lui montrer des milliers ou des millions d'exemples, et à la laisser trouver elle-même les règles : c'est l'apprentissage automatique.",
    "Pour apprendre à reconnaître des chats, par exemple, on ne décrit pas au programme les oreilles, les moustaches et la queue. On lui montre des millions de photos étiquetées « chat » ou « pas chat ». Peu à peu, il ajuste ses calculs pour se tromper de moins en moins.",
    "Les programmes les plus performants utilisent des réseaux de neurones artificiels. Ce sont des calculs organisés en couches successives, vaguement inspirés des neurones du cerveau. Chaque « neurone » artificiel reçoit des nombres, les combine et transmet le résultat à la couche suivante.",
    "L'idée est ancienne : le psychologue américain Frank Rosenblatt avait construit dès 1958 une machine appelée perceptron. Mais pendant des décennies, ces réseaux sont restés trop petits pour être vraiment utiles, faute de données et de puissance de calcul."
   ]},
   {h:"Les machines battent les champions", p:[
    "En mai 1997, l'ordinateur Deep Blue, conçu par l'entreprise IBM, bat le champion du monde d'échecs Garry Kasparov dans un match en six parties. C'est un choc mondial. Pourtant, Deep Blue ne « pensait » pas comme un humain : il calculait environ 200 millions de positions par seconde.",
    "Le jeu de go, très populaire en Asie, semblait bien plus difficile pour les machines. Le nombre de positions possibles est si grand qu'il dépasse le nombre d'atomes dans l'Univers observable. Les meilleurs programmes restaient loin du niveau des grands joueurs.",
    "En mars 2016, le programme AlphaGo, développé par l'entreprise britannique DeepMind, filiale de Google, bat le champion sud-coréen Lee Sedol par quatre victoires à une. Lors de la deuxième partie, il joue un coup si inattendu, le célèbre « coup 37 », que les commentateurs croient d'abord à une erreur.",
    "AlphaGo avait appris en étudiant des parties humaines, puis en jouant des millions de parties contre lui-même. Une version suivante, AlphaGo Zero, a même appris uniquement en jouant contre elle-même, sans aucun exemple humain, et a dépassé la précédente en quelques jours."
   ]},
   {h:"La révolution de l'apprentissage profond", p:[
    "Au début des années 2010, trois ingrédients se réunissent : des quantités gigantesques de données disponibles sur Internet, des processeurs graphiques très puissants, conçus au départ pour les jeux vidéo, et des améliorations dans les méthodes d'apprentissage des réseaux de neurones.",
    "En 2012, un réseau de neurones appelé AlexNet, créé à l'université de Toronto, remporte haut la main un concours international de reconnaissance d'images, ImageNet, avec beaucoup moins d'erreurs que les méthodes classiques. C'est le début de l'« apprentissage profond », ou deep learning, qui utilise des réseaux comportant de nombreuses couches.",
    "En quelques années, cette technique transforme la reconnaissance vocale, la traduction automatique et la reconnaissance des visages. Les assistants vocaux des téléphones et les sous-titres automatiques des vidéos en sont des exemples quotidiens.",
    "En 2024, le prix Nobel de physique a récompensé l'Américain John Hopfield et le Britanno-Canadien Geoffrey Hinton, pionniers des réseaux de neurones artificiels. Hinton a ensuite averti publiquement des risques que pourrait poser une IA de plus en plus puissante."
   ]},
   {h:"Des machines qui parlent", p:[
    "En 2017, des chercheurs de Google publient un article intitulé « Attention Is All You Need », qui présente une nouvelle architecture de réseau de neurones, appelée transformeur. Elle permet de traiter efficacement de longs textes, en repérant quels mots sont liés entre eux, même éloignés.",
    "Grâce à cette architecture, des entreprises entraînent de grands modèles de langage sur d'énormes quantités de textes. Ces modèles apprennent à prédire le mot suivant d'une phrase. En faisant cela à très grande échelle, ils deviennent capables de rédiger, résumer, traduire et répondre à des questions.",
    "Le 30 novembre 2022, l'entreprise américaine OpenAI met en ligne ChatGPT. En deux mois, il aurait atteint environ 100 millions d'utilisateurs, une croissance plus rapide que celle de n'importe quelle application auparavant. D'autres assistants suivent, développés par Google, Anthropic, Meta ou l'entreprise française Mistral AI.",
    "Ces outils ont aussi des limites. Ils peuvent inventer des faits avec assurance, ce qu'on appelle des « hallucinations ». Ils ne savent pas toujours d'où viennent leurs informations, et peuvent reproduire des erreurs présentes dans les textes qui ont servi à les entraîner. Il est donc important de vérifier ce qu'ils affirment."
   ]},
   {h:"Un outil pour les chercheurs", p:[
    "L'un des plus grands succès scientifiques de l'IA concerne les protéines. Ces molécules, essentielles à la vie, se replient en formes complexes qui déterminent leur rôle. Trouver la forme d'une seule protéine pouvait demander des années de travail en laboratoire.",
    "En 2020, le programme AlphaFold, de DeepMind, a réussi à prédire la forme des protéines avec une précision proche de celle des expériences. En 2022, ses créateurs ont publié les structures prédites de plus de 200 millions de protéines, presque toutes celles connues de la science.",
    "Cette avancée aide les chercheurs à comprendre des maladies et à concevoir de nouveaux médicaments ou des enzymes capables de dégrader le plastique. En 2024, Demis Hassabis et John Jumper, de DeepMind, ont reçu le prix Nobel de chimie, avec l'Américain David Baker, qui conçoit de nouvelles protéines.",
    "L'IA aide aussi les médecins à repérer des signes de maladies sur des radiographies ou des images de l'œil, les astronomes à trier les données des télescopes, et les météorologues à produire des prévisions plus rapidement. Dans tous ces cas, elle reste un outil, et les décisions importantes doivent être vérifiées par des humains."
   ]},
   {h:"Des risques à surveiller", p:[
    "L'IA peut reproduire et amplifier des injustices. Si un programme apprend à partir de données qui contiennent des préjugés, il risque de les répéter, par exemple en recrutant moins de femmes ou en reconnaissant moins bien les visages de certaines personnes. On parle de biais algorithmiques.",
    "Les IA génératives peuvent aussi créer de fausses images, de fausses vidéos ou de fausses voix très réalistes, appelées « hypertrucages » ou deepfakes. Elles peuvent servir à tromper, à harceler ou à diffuser de fausses informations, ce qui rend plus important que jamais de vérifier les sources.",
    "Il existe aussi des questions sur le droit d'auteur : des écrivains, des artistes et des journaux reprochent à certaines entreprises d'avoir utilisé leurs œuvres sans autorisation pour entraîner leurs modèles. Plusieurs procès sont en cours dans le monde.",
    "Enfin, de nombreux chercheurs s'interrogent sur les risques à long terme d'IA toujours plus puissantes, et sur la façon de s'assurer qu'elles restent sûres, honnêtes et sous contrôle humain. Ce domaine de recherche s'appelle la sûreté de l'IA."
   ]},
   {h:"Énergie et travail", p:[
    "Entraîner et faire fonctionner de grands modèles d'IA demande énormément de calculs, réalisés dans de vastes centres de données. Ceux-ci consomment beaucoup d'électricité, et souvent d'eau pour refroidir les machines. Selon l'Agence internationale de l'énergie, leur consommation pourrait plus que doubler d'ici 2030.",
    "Les chercheurs travaillent à rendre les modèles plus efficaces, et certaines entreprises investissent dans les énergies renouvelables ou nucléaires pour alimenter leurs centres de données. L'impact environnemental de l'IA est devenu un sujet de débat important.",
    "L'IA transforme aussi le monde du travail. Elle peut automatiser certaines tâches répétitives, aider à écrire du code informatique, à traduire ou à rédiger des documents. Certains métiers pourraient changer profondément, tandis que de nouveaux métiers apparaissent.",
    "Les économistes ne sont pas d'accord sur l'ampleur de ces changements. Beaucoup estiment que l'essentiel sera d'aider les travailleurs à se former, et de veiller à ce que les bénéfices de l'IA soient partagés équitablement."
   ]},
   {h:"Encadrer l'IA", p:[
    "Face à ces enjeux, de nombreux pays cherchent à encadrer l'IA. En 2024, l'Union européenne a adopté le règlement sur l'intelligence artificielle, souvent appelé AI Act, la première grande loi au monde sur ce sujet. Il classe les usages de l'IA selon leurs risques et interdit certains d'entre eux, comme la notation sociale des citoyens.",
    "D'autres pays, comme la Chine, le Canada ou le Royaume-Uni, ont adopté leurs propres règles ou recommandations. Des sommets internationaux réunissent régulièrement des gouvernements, des chercheurs et des entreprises pour discuter de la sécurité de l'IA.",
    "Dans les écoles, les enseignants s'interrogent sur la meilleure façon d'utiliser ces outils : comme une aide pour apprendre, expliquer ou s'entraîner, sans qu'ils remplacent la réflexion personnelle des élèves.",
    "Plus de soixante-dix ans après la question de Turing, les spécialistes ne sont toujours pas d'accord sur ce que signifie vraiment « penser » pour une machine. Mais une chose est sûre : l'IA est devenue l'une des technologies les plus importantes de notre époque."
   ]}
  ],
  numbers: [
   ["1956","atelier de Dartmouth, naissance du domaine de l'IA"],
   ["1997","Deep Blue bat Garry Kasparov aux échecs"],
   ["2016","AlphaGo bat Lee Sedol au jeu de go"],
   ["> 200 millions","structures de protéines prédites par AlphaFold"]
  ],
  didyou: [
   "L'expression « intelligence artificielle » a été inventée en 1955 pour proposer l'atelier de Dartmouth.",
   "Le visage d'Alan Turing figure sur les billets de 50 livres sterling depuis 2021.",
   "AlphaGo Zero a appris le go sans jamais étudier une partie humaine."
  ],
  open: [
   "Une machine pourra-t-elle un jour vraiment comprendre ce qu'elle dit ?",
   "Comment garantir que des IA très puissantes restent sûres et utiles pour tous ?"
  ]
 },
 en: {
  key: [
   "Artificial intelligence, or AI, refers to programs able to perform tasks that usually require human intelligence, such as recognising images, translating or answering questions.",
   "Modern AI learns from huge numbers of examples, using artificial neural networks loosely inspired by the brain.",
   "It already helps scientists predict the shape of proteins, analyse medical images and forecast the weather.",
   "It also raises important questions: errors, bias, fake images, energy use and effects on work."
  ],
  sections: [
   {h:"Can a machine think?", p:[
    "In 1950 the British mathematician Alan Turing published a paper opening with a bold question: \"Can machines think?\" Rather than trying to define thinking, he proposed a test he called the \"imitation game\".",
    "In this test a person chats in writing with two hidden partners: a human and a machine. If they cannot tell which is the machine, the machine can be considered to behave intelligently. Today it is called the Turing test.",
    "At the time computers filled whole rooms and were far less powerful than a modern calculator. Yet Turing predicted that by the end of the 20th century machines could fool a questioner in a sizeable share of conversations.",
    "Turing died in 1954, aged 41, after being convicted for his homosexuality, then illegal in the United Kingdom. He was rehabilitated much later, and since 2021 his face has appeared on the 50-pound note. He is considered one of the fathers of computer science."
   ]},
   {h:"Birth of a field", p:[
    "The term \"artificial intelligence\" was coined by the American computer scientist John McCarthy. In summer 1956 he and several colleagues organised a workshop at Dartmouth College in the United States to think about how to make machines think. This workshop is often seen as the birth of AI.",
    "The first researchers were very optimistic. They created programs able to prove mathematical theorems, play draughts or solve puzzles. Some predicted that a machine as intelligent as a human would exist within twenty years or so.",
    "In 1966 the computer scientist Joseph Weizenbaum created ELIZA, a program that imitated a psychotherapist by rephrasing its partner's sentences. It was very simple, but many users felt it really understood them, which worried its own creator.",
    "But progress was slower than expected. Computers lacked power, and programs written rule by rule could not cope with the complexity of the real world. Funding dwindled, and the field went through two periods of discouragement, called the \"AI winters\", in the 1970s and again in the late 1980s."
   ]},
   {h:"Learning by example", p:[
    "There are two main ways to make a machine \"intelligent\". The first is to write out all the rules it must follow, like a recipe. The second is to show it thousands or millions of examples and let it work out the rules for itself: this is machine learning.",
    "To learn to recognise cats, for example, you do not describe ears, whiskers and tails to the program. You show it millions of photos labelled \"cat\" or \"not cat\". Little by little it adjusts its calculations to make fewer and fewer mistakes.",
    "The best-performing programs use artificial neural networks. These are calculations organised in successive layers, loosely inspired by the brain's neurons. Each artificial \"neuron\" receives numbers, combines them and passes the result to the next layer.",
    "The idea is old: the American psychologist Frank Rosenblatt built a machine called the perceptron as early as 1958. But for decades these networks remained too small to be truly useful, for lack of data and computing power."
   ]},
   {h:"Machines beat the champions", p:[
    "In May 1997 the computer Deep Blue, built by IBM, beat world chess champion Garry Kasparov in a six-game match. It was a worldwide shock. Yet Deep Blue did not \"think\" like a human: it calculated about 200 million positions per second.",
    "The game of Go, very popular in Asia, seemed much harder for machines. The number of possible positions is so large it exceeds the number of atoms in the observable Universe. The best programs remained far from the level of top players.",
    "In March 2016 the program AlphaGo, developed by the British company DeepMind, a Google subsidiary, beat the South Korean champion Lee Sedol four games to one. In the second game it played a move so unexpected, the famous \"move 37\", that commentators at first thought it was a mistake.",
    "AlphaGo had learned by studying human games and then playing millions of games against itself. A later version, AlphaGo Zero, learned solely by playing against itself, with no human examples at all, and overtook its predecessor within days."
   ]},
   {h:"The deep learning revolution", p:[
    "In the early 2010s three ingredients came together: gigantic amounts of data available on the internet, very powerful graphics processors originally designed for video games, and improvements in the methods used to train neural networks.",
    "In 2012 a neural network called AlexNet, created at the University of Toronto, easily won an international image recognition competition, ImageNet, with far fewer errors than conventional methods. This was the start of \"deep learning\", which uses networks with many layers.",
    "Within a few years this technique transformed speech recognition, machine translation and face recognition. Phone voice assistants and automatic video subtitles are everyday examples.",
    "In 2024 the Nobel Prize in Physics went to the American John Hopfield and the British-Canadian Geoffrey Hinton, pioneers of artificial neural networks. Hinton then publicly warned about the risks that ever more powerful AI could pose."
   ]},
   {h:"Machines that talk", p:[
    "In 2017 Google researchers published a paper titled \"Attention Is All You Need\", which presented a new neural network architecture called the transformer. It can process long texts efficiently by spotting which words are linked, even when far apart.",
    "Using this architecture, companies trained large language models on enormous amounts of text. These models learn to predict the next word in a sentence. By doing this on a very large scale, they become able to write, summarise, translate and answer questions.",
    "On 30 November 2022 the American company OpenAI released ChatGPT. Within two months it reportedly reached about 100 million users, faster growth than any app before it. Other assistants followed, developed by Google, Anthropic, Meta and the French company Mistral AI.",
    "These tools also have limits. They can confidently make up facts, known as \"hallucinations\". They do not always know where their information comes from and can repeat errors found in the texts used to train them. It is therefore important to check what they say."
   ]},
   {h:"A tool for researchers", p:[
    "One of AI's greatest scientific successes concerns proteins. These molecules, essential to life, fold into complex shapes that determine their role. Finding the shape of a single protein could take years of laboratory work.",
    "In 2020 DeepMind's AlphaFold program managed to predict protein shapes with accuracy close to that of experiments. In 2022 its creators published the predicted structures of more than 200 million proteins, almost all those known to science.",
    "This advance helps researchers understand diseases and design new medicines or enzymes able to break down plastic. In 2024 Demis Hassabis and John Jumper of DeepMind received the Nobel Prize in Chemistry, together with the American David Baker, who designs new proteins.",
    "AI also helps doctors spot signs of disease on X-rays or eye scans, astronomers sort telescope data and meteorologists produce forecasts faster. In all these cases it remains a tool, and important decisions must be checked by humans."
   ]},
   {h:"Risks to watch", p:[
    "AI can reproduce and amplify injustice. If a program learns from data containing prejudice, it may repeat it, for example by recruiting fewer women or recognising some people's faces less well. This is called algorithmic bias.",
    "Generative AI can also create very realistic fake images, videos or voices, known as deepfakes. They can be used to deceive, harass or spread false information, which makes checking sources more important than ever.",
    "There are also copyright questions: writers, artists and newspapers accuse some companies of using their work without permission to train their models. Several lawsuits are under way around the world.",
    "Finally, many researchers are concerned about the long-term risks of ever more powerful AI, and about how to make sure it remains safe, honest and under human control. This field of research is called AI safety."
   ]},
   {h:"Energy and work", p:[
    "Training and running large AI models requires enormous amounts of computation, carried out in vast data centres. These use a lot of electricity, and often water to cool the machines. According to the International Energy Agency, their consumption could more than double by 2030.",
    "Researchers are working to make models more efficient, and some companies are investing in renewable or nuclear energy to power their data centres. AI's environmental impact has become a major subject of debate.",
    "AI is also transforming the world of work. It can automate some repetitive tasks and help write computer code, translate or draft documents. Some jobs could change profoundly, while new ones appear.",
    "Economists disagree about how big these changes will be. Many believe the key will be helping workers train, and making sure the benefits of AI are shared fairly."
   ]},
   {h:"Regulating AI", p:[
    "Faced with these issues, many countries are seeking to regulate AI. In 2024 the European Union adopted the Artificial Intelligence Act, often called the AI Act, the world's first major law on the subject. It classifies uses of AI by risk and bans some of them, such as social scoring of citizens.",
    "Other countries, such as China, Canada and the United Kingdom, have adopted their own rules or guidelines. International summits regularly bring together governments, researchers and companies to discuss AI safety.",
    "In schools, teachers are considering how best to use these tools: as an aid to learning, explaining or practising, without letting them replace pupils' own thinking.",
    "More than seventy years after Turing's question, specialists still disagree about what \"thinking\" really means for a machine. But one thing is certain: AI has become one of the most important technologies of our time."
   ]}
  ],
  numbers: [
   ["1956","Dartmouth workshop, birth of the AI field"],
   ["1997","Deep Blue beats Garry Kasparov at chess"],
   ["2016","AlphaGo beats Lee Sedol at Go"],
   ["> 200 million","protein structures predicted by AlphaFold"]
  ],
  didyou: [
   "The term \"artificial intelligence\" was coined in 1955 in the proposal for the Dartmouth workshop.",
   "Alan Turing's face has appeared on the 50-pound note since 2021.",
   "AlphaGo Zero learned Go without ever studying a human game."
  ],
  open: [
   "Will a machine ever truly understand what it says?",
   "How can we make sure very powerful AI remains safe and useful for everyone?"
  ]
 }
},

fusion: {
 sources: [
  {t:"ITER Organization — Qu'est-ce qu'ITER ? (Saint-Paul-lez-Durance)", u:"https://www.iter.org/fr"},
  {t:"Lawrence Livermore National Laboratory — Achieving fusion ignition (NIF, 5 décembre 2022)", u:"https://lasers.llnl.gov/science/achieving-fusion-ignition"},
  {t:"UK Atomic Energy Authority / EUROfusion — Record final de JET : 69 mégajoules (2024)", u:"https://euro-fusion.org/"},
  {t:"CEA — WEST établit un record de durée de plasma (février 2025)", u:"https://www.cea.fr/"},
  {t:"AIEA — World Fusion Outlook", u:"https://www.iaea.org/"}
 ],
 fr: {
  key: [
   "La fusion nucléaire consiste à unir des noyaux d'atomes légers, comme l'hydrogène, pour former des noyaux plus lourds, ce qui libère une énorme énergie : c'est ainsi que brillent les étoiles.",
   "Sur Terre, il faut chauffer le combustible à plus de 100 millions de degrés et le confiner, un défi technique immense.",
   "En 2022, un laboratoire américain a pour la première fois obtenu davantage d'énergie de la réaction que celle apportée par les lasers.",
   "Le grand réacteur international ITER, en construction en France, doit démontrer que la fusion peut devenir une source d'énergie."
  ],
  sections: [
   {h:"Le feu des étoiles", p:[
    "Pendant longtemps, personne ne savait pourquoi le Soleil brillait. Au XIXe siècle, certains savants pensaient qu'il brûlait comme un énorme feu de charbon, mais un tel feu se serait éteint en quelques milliers d'années seulement, bien trop vite par rapport à l'âge de la Terre.",
    "En 1920, l'astronome britannique Arthur Eddington propose une explication : au cœur du Soleil, des noyaux d'hydrogène s'uniraient pour former de l'hélium, libérant de l'énergie. En 1939, le physicien germano-américain Hans Bethe décrit en détail ces réactions, ce qui lui vaudra le prix Nobel de physique en 1967.",
    "Les noyaux atomiques sont chargés positivement et se repoussent très fortement. Pour qu'ils fusionnent, il faut les rapprocher à grande vitesse, ce qui n'est possible qu'à des températures et des pressions extrêmes, comme au cœur des étoiles. Même là, la physique quantique les aide à franchir la dernière barrière.",
    "Toutes les étoiles du ciel fonctionnent ainsi. Et les éléments plus lourds, comme le carbone et l'oxygène de notre corps, ont été fabriqués par fusion dans des étoiles disparues bien avant la naissance du Soleil."
   ]},
   {h:"Fusion ou fission ?", p:[
    "Il ne faut pas confondre fusion et fission. Les centrales nucléaires actuelles utilisent la fission : elles cassent des noyaux lourds d'uranium en morceaux plus légers. La fusion fait l'inverse : elle assemble des noyaux légers pour en former de plus lourds.",
    "Dans les deux cas, une petite partie de la masse se transforme en énergie. Mais la fusion présente de grands avantages. Elle ne produit pas de déchets radioactifs à très longue durée de vie comme ceux de la fission, et elle ne rejette pas de gaz à effet de serre.",
    "Elle est aussi plus sûre : une réaction de fusion ne peut pas s'emballer. Au moindre problème, le plasma se refroidit et la réaction s'arrête d'elle-même, en quelques secondes. Un accident comme ceux de Tchernobyl ou de Fukushima est impossible.",
    "En revanche, les parois des réacteurs de fusion deviennent radioactives à cause des neutrons très énergétiques produits par la réaction. Cette radioactivité diminue toutefois en quelques décennies, et non en milliers d'années."
   ]},
   {h:"Un carburant presque inépuisable", p:[
    "La réaction la plus facile à obtenir sur Terre unit deux formes lourdes d'hydrogène : le deutérium et le tritium. Ensemble, ils forment un noyau d'hélium et libèrent un neutron très rapide, qui emporte la plus grande partie de l'énergie.",
    "Le deutérium est abondant : on le trouve dans l'eau de mer, à raison d'environ 33 grammes par mètre cube. Le tritium, lui, est radioactif et presque absent dans la nature. Les futurs réacteurs devront le fabriquer eux-mêmes, en utilisant les neutrons de la réaction pour transformer du lithium.",
    "L'énergie libérée est colossale. Quelques grammes de ce mélange pourraient produire autant d'énergie que plusieurs tonnes de charbon. On estime que le deutérium contenu dans les océans pourrait alimenter l'humanité pendant des millions d'années.",
    "C'est pourquoi la fusion est souvent présentée comme une source d'énergie idéale pour l'avenir. Mais depuis plus de soixante-dix ans, les chercheurs plaisantent en disant qu'elle est « toujours pour dans trente ans »."
   ]},
   {h:"Plus chaud que le Soleil", p:[
    "Au cœur du Soleil, la température est d'environ 15 millions de degrés, mais la pression est gigantesque, à cause de son énorme masse. Sur Terre, on ne peut pas reproduire une telle pression. Il faut donc compenser en chauffant beaucoup plus : à plus de 100 millions de degrés, soit près de dix fois plus que le cœur du Soleil.",
    "À ces températures, la matière n'est plus solide, liquide ou gazeuse : elle devient un plasma, un gaz si chaud que les électrons sont arrachés aux atomes. Aucun matériau ne peut résister au contact d'un tel plasma, qui le ferait fondre instantanément.",
    "Le défi est donc de maintenir ce plasma brûlant sans qu'il touche les parois du réacteur, assez longtemps et assez dense pour que les réactions de fusion produisent plus d'énergie qu'il n'en faut pour le chauffer. Les physiciens appellent ce seuil le critère de Lawson.",
    "Deux grandes méthodes ont été développées : enfermer le plasma dans une cage magnétique, ou le comprimer très brièvement avec des lasers."
   ]},
   {h:"La cage magnétique", p:[
    "Dans les années 1950, deux physiciens soviétiques, Igor Tamm et Andreï Sakharov, imaginent une machine en forme d'anneau, comme un beignet, dans laquelle de puissants aimants maintiennent le plasma suspendu en l'air. Elle prend le nom de tokamak, un acronyme russe signifiant « chambre toroïdale à bobines magnétiques ».",
    "En 1968, des chercheurs soviétiques annoncent des résultats spectaculaires avec leur tokamak T-3. Les scientifiques occidentaux, sceptiques, envoient une équipe britannique à Moscou, en pleine guerre froide, avec des lasers pour mesurer la température. Ils confirment les résultats, et les tokamaks se multiplient dans le monde.",
    "Il existe une autre forme de machine, le stellarator, inventé en 1951 par l'astrophysicien américain Lyman Spitzer. Ses aimants, aux formes tordues et complexes, sont plus difficiles à concevoir, mais permettent un fonctionnement plus stable. Le plus grand, Wendelstein 7-X, fonctionne en Allemagne depuis 2015.",
    "Le plus grand tokamak des dernières décennies, JET, situé au Royaume-Uni, a fonctionné de 1983 à 2023. Lors de ses dernières expériences, il a produit 69 millions de joules d'énergie de fusion en cinq secondes, un record mondial annoncé en 2024."
   ]},
   {h:"Des lasers géants", p:[
    "L'autre méthode, appelée fusion par confinement inertiel, consiste à comprimer très brutalement une minuscule bille de combustible. Au National Ignition Facility, en Californie, 192 lasers géants, logés dans un bâtiment grand comme trois terrains de football, concentrent leur énergie sur une capsule plus petite qu'un grain de poivre.",
    "La capsule implose en quelques milliardièmes de seconde, et son cœur atteint des températures et des pressions supérieures à celles du centre du Soleil. Pendant un instant, la fusion se produit avant que le combustible ne se disperse.",
    "Le 5 décembre 2022, ce laboratoire a annoncé une première historique : la réaction a produit environ 3,15 millions de joules d'énergie, alors que les lasers en avaient apporté 2,05 millions. Pour la première fois, une expérience de fusion produisait plus d'énergie qu'elle n'en recevait directement.",
    "Ce résultat est cependant loin d'une centrale électrique. Les lasers eux-mêmes ont consommé bien plus d'électricité qu'ils n'en ont transmis à la cible, et l'installation ne peut réaliser qu'un tir de ce type par jour, alors qu'une centrale devrait en faire plusieurs par seconde."
   ]},
   {h:"ITER, un chantier mondial", p:[
    "ITER, dont le nom signifie « le chemin » en latin, est le plus grand projet de fusion au monde. Il est en construction depuis 2010 à Saint-Paul-lez-Durance, dans le sud de la France, près du centre de recherche du CEA de Cadarache.",
    "Il réunit l'Union européenne, la Chine, l'Inde, le Japon, la Corée du Sud, la Russie et les États-Unis, soit 35 pays représentant plus de la moitié de la population mondiale. Ses pièces, fabriquées sur plusieurs continents, sont acheminées par bateau et par convois routiers exceptionnels.",
    "Le tokamak d'ITER pèsera environ 23 000 tonnes, autant que trois tours Eiffel. Ses aimants supraconducteurs, refroidis à −269 °C, seront parmi les plus puissants jamais construits. Son objectif est de produire dix fois plus de puissance de fusion qu'il n'en faut pour chauffer le plasma : 500 mégawatts pour 50 injectés.",
    "Le projet a connu de nombreux retards et une forte hausse de son coût, estimé à plus de 20 milliards d'euros. Selon le calendrier révisé en 2024, les premières expériences scientifiques sont prévues vers 2034, et l'utilisation du mélange deutérium-tritium vers 2039. ITER ne produira pas d'électricité : il doit démontrer la faisabilité scientifique et technique."
   ]},
   {h:"Records et avancées", p:[
    "Ces dernières années, plusieurs machines ont battu des records de durée. En janvier 2025, le tokamak chinois EAST a maintenu un plasma à haute performance pendant 1 066 secondes. Quelques semaines plus tard, en février 2025, le tokamak français WEST, à Cadarache, a maintenu un plasma pendant 1 337 secondes, soit plus de 22 minutes.",
    "Ces expériences ne produisent pas d'énergie de fusion utile, mais elles permettent de tester des matériaux et des techniques pour faire fonctionner un réacteur pendant de longues durées, ce qui sera indispensable pour une future centrale.",
    "Un autre défi concerne les matériaux. Les neutrons produits par la fusion bombardent les parois et les fragilisent peu à peu. Les ingénieurs étudient des alliages spéciaux et des parois en tungstène, le métal qui a le point de fusion le plus élevé, pour résister à ces conditions extrêmes."
   ]},
   {h:"La course des entreprises privées", p:[
    "Depuis une dizaine d'années, plus de quarante entreprises privées se sont lancées dans la course à la fusion, attirant des milliards de dollars d'investissement. Elles espèrent aller plus vite que les grands projets publics, en misant sur des machines plus compactes.",
    "Aux États-Unis, l'entreprise Commonwealth Fusion Systems construit SPARC, un tokamak compact équipé de nouveaux aimants supraconducteurs à haute température, beaucoup plus puissants. Elle a annoncé en 2025 un accord avec Google pour lui vendre l'électricité de sa future centrale.",
    "D'autres entreprises explorent des approches originales, avec des plasmas tirés à grande vitesse ou des combustibles différents. L'entreprise Helion a même signé un accord pour fournir de l'électricité à Microsoft à partir de 2028, un objectif que beaucoup de spécialistes jugent très ambitieux.",
    "Les experts restent prudents. La plupart estiment que les premières centrales à fusion capables de fournir de l'électricité au réseau ne verront pas le jour avant les années 2040 ou 2050, et qu'elles ne pourront donc pas, à elles seules, résoudre la crise climatique à court terme."
   ]},
   {h:"Espoirs et faux départs", p:[
    "L'histoire de la fusion a aussi connu des épisodes moins glorieux. La première fusion obtenue par l'homme fut militaire : le 1er novembre 1952, les États-Unis ont fait exploser la première bombe à hydrogène, Ivy Mike, sur un atoll du Pacifique. Contrairement aux réacteurs, cette réaction était incontrôlée.",
    "En 1989, deux chimistes, Martin Fleischmann et Stanley Pons, annoncent avoir réalisé une « fusion froide » à température ambiante, dans un simple bocal d'eau lourde. La nouvelle fait sensation, mais aucun laboratoire ne parvient à reproduire leurs résultats, et l'affaire tourne au fiasco.",
    "Malgré ces faux départs, les progrès réels sont importants. Les performances des machines de fusion se sont améliorées de façon spectaculaire depuis les années 1970, plus vite que celles de nombreuses autres technologies.",
    "Si les chercheurs réussissent à maîtriser la fusion, l'humanité disposerait d'une source d'énergie propre, sûre et pratiquement illimitée. Reproduire sur Terre le feu des étoiles reste l'un des plus grands défis scientifiques et techniques de notre époque."
   ]}
  ],
  numbers: [
   ["> 100 millions °C","température nécessaire au plasma sur Terre"],
   ["3,15 MJ","énergie produite par le NIF le 5 décembre 2022"],
   ["69 MJ","record final de JET (annoncé en 2024)"],
   ["35","pays participant à ITER"]
  ],
  didyou: [
   "Le plasma d'un réacteur de fusion est près de dix fois plus chaud que le cœur du Soleil.",
   "Le tokamak d'ITER pèsera autant que trois tours Eiffel.",
   "En 1968, une équipe britannique s'est rendue à Moscou, en pleine guerre froide, pour vérifier les résultats d'un tokamak soviétique."
  ],
  open: [
   "Quand la première centrale à fusion fournira-t-elle de l'électricité au réseau ?",
   "Quels matériaux pourront résister durablement au bombardement des neutrons ?"
  ]
 },
 en: {
  key: [
   "Nuclear fusion joins the nuclei of light atoms such as hydrogen to form heavier nuclei, releasing enormous energy: this is how stars shine.",
   "On Earth the fuel must be heated to more than 100 million degrees and confined, a huge technical challenge.",
   "In 2022 an American laboratory for the first time got more energy out of the reaction than the lasers put in.",
   "The large international ITER reactor, under construction in France, is meant to show that fusion can become a source of energy."
  ],
  sections: [
   {h:"The fire of the stars", p:[
    "For a long time no one knew why the Sun shone. In the 19th century some scientists thought it burned like a huge coal fire, but such a fire would have gone out within a few thousand years, far too soon given the age of the Earth.",
    "In 1920 the British astronomer Arthur Eddington proposed an explanation: at the Sun's core, hydrogen nuclei might join to form helium, releasing energy. In 1939 the German-American physicist Hans Bethe described these reactions in detail, which would earn him the Nobel Prize in Physics in 1967.",
    "Atomic nuclei are positively charged and repel each other very strongly. To make them fuse, they must be brought together at high speed, which is only possible at extreme temperatures and pressures, as in the cores of stars. Even there, quantum physics helps them over the last barrier.",
    "Every star in the sky works this way. And heavier elements, such as the carbon and oxygen in our bodies, were made by fusion in stars that died long before the Sun was born."
   ]},
   {h:"Fusion or fission?", p:[
    "Fusion should not be confused with fission. Today's nuclear power stations use fission: they split heavy uranium nuclei into lighter pieces. Fusion does the opposite: it assembles light nuclei to form heavier ones.",
    "In both cases a small part of the mass turns into energy. But fusion has big advantages. It does not produce very long-lived radioactive waste like fission does, and it emits no greenhouse gases.",
    "It is also safer: a fusion reaction cannot run away. At the slightest problem the plasma cools and the reaction stops by itself within seconds. An accident like Chernobyl or Fukushima is impossible.",
    "On the other hand, the walls of fusion reactors become radioactive because of the very energetic neutrons produced by the reaction. This radioactivity, however, fades within a few decades rather than thousands of years."
   ]},
   {h:"An almost inexhaustible fuel", p:[
    "The easiest reaction to achieve on Earth joins two heavy forms of hydrogen: deuterium and tritium. Together they form a helium nucleus and release a very fast neutron, which carries off most of the energy.",
    "Deuterium is plentiful: it is found in seawater, at about 33 grams per cubic metre. Tritium, however, is radioactive and almost absent in nature. Future reactors will have to make it themselves, using neutrons from the reaction to transform lithium.",
    "The energy released is colossal. A few grams of this mixture could produce as much energy as several tonnes of coal. It is estimated that the deuterium in the oceans could power humanity for millions of years.",
    "That is why fusion is often presented as an ideal energy source for the future. But for more than seventy years researchers have joked that it is \"always thirty years away\"."
   ]},
   {h:"Hotter than the Sun", p:[
    "At the Sun's core the temperature is about 15 million degrees, but the pressure is gigantic because of its enormous mass. On Earth such pressure cannot be reproduced. So it has to be offset by heating much more: to over 100 million degrees, nearly ten times the Sun's core.",
    "At these temperatures matter is no longer solid, liquid or gas: it becomes a plasma, a gas so hot that electrons are stripped from atoms. No material can withstand contact with such a plasma, which would melt it instantly.",
    "The challenge is therefore to hold this scorching plasma without it touching the reactor walls, for long enough and densely enough that the fusion reactions produce more energy than is needed to heat it. Physicists call this threshold the Lawson criterion.",
    "Two main methods have been developed: trapping the plasma in a magnetic cage, or compressing it very briefly with lasers."
   ]},
   {h:"The magnetic cage", p:[
    "In the 1950s two Soviet physicists, Igor Tamm and Andrei Sakharov, imagined a ring-shaped machine, like a doughnut, in which powerful magnets keep the plasma suspended in mid-air. It was named the tokamak, a Russian acronym meaning \"toroidal chamber with magnetic coils\".",
    "In 1968 Soviet researchers announced spectacular results with their T-3 tokamak. Sceptical Western scientists sent a British team to Moscow, at the height of the Cold War, with lasers to measure the temperature. They confirmed the results, and tokamaks multiplied around the world.",
    "There is another type of machine, the stellarator, invented in 1951 by the American astrophysicist Lyman Spitzer. Its twisted, complex magnets are harder to design but allow more stable operation. The largest, Wendelstein 7-X, has been running in Germany since 2015.",
    "The largest tokamak of recent decades, JET in the United Kingdom, operated from 1983 to 2023. In its final experiments it produced 69 million joules of fusion energy in five seconds, a world record announced in 2024."
   ]},
   {h:"Giant lasers", p:[
    "The other method, called inertial confinement fusion, involves violently compressing a tiny pellet of fuel. At the National Ignition Facility in California, 192 giant lasers, housed in a building the size of three football pitches, focus their energy on a capsule smaller than a peppercorn.",
    "The capsule implodes in a few billionths of a second, and its core reaches temperatures and pressures greater than those at the centre of the Sun. For an instant fusion occurs before the fuel scatters.",
    "On 5 December 2022 this laboratory announced a historic first: the reaction produced about 3.15 million joules of energy, while the lasers had delivered 2.05 million. For the first time a fusion experiment produced more energy than it directly received.",
    "This result is, however, a long way from a power station. The lasers themselves used far more electricity than they delivered to the target, and the facility can fire only one such shot a day, whereas a power station would need several per second."
   ]},
   {h:"ITER, a global project", p:[
    "ITER, whose name means \"the way\" in Latin, is the world's largest fusion project. It has been under construction since 2010 at Saint-Paul-lez-Durance in southern France, near the CEA's Cadarache research centre.",
    "It brings together the European Union, China, India, Japan, South Korea, Russia and the United States, 35 countries representing more than half the world's population. Its parts, made on several continents, are delivered by ship and by exceptional road convoys.",
    "ITER's tokamak will weigh about 23,000 tonnes, as much as three Eiffel Towers. Its superconducting magnets, cooled to −269 °C, will be among the most powerful ever built. Its goal is to produce ten times more fusion power than is needed to heat the plasma: 500 megawatts for 50 put in.",
    "The project has suffered many delays and a sharp rise in cost, estimated at more than 20 billion euros. Under the schedule revised in 2024, the first scientific experiments are planned for around 2034 and the use of deuterium–tritium fuel around 2039. ITER will not produce electricity: it is meant to demonstrate scientific and technical feasibility."
   ]},
   {h:"Records and advances", p:[
    "In recent years several machines have broken duration records. In January 2025 China's EAST tokamak held a high-performance plasma for 1,066 seconds. A few weeks later, in February 2025, the French WEST tokamak at Cadarache held a plasma for 1,337 seconds, more than 22 minutes.",
    "These experiments do not produce useful fusion energy, but they make it possible to test materials and techniques for running a reactor for long periods, which will be essential for a future power station.",
    "Another challenge concerns materials. The neutrons produced by fusion bombard the walls and gradually weaken them. Engineers are studying special alloys and tungsten walls, the metal with the highest melting point, to withstand these extreme conditions."
   ]},
   {h:"The private-sector race", p:[
    "Over the past decade more than forty private companies have joined the fusion race, attracting billions of dollars of investment. They hope to move faster than the big public projects by betting on more compact machines.",
    "In the United States the company Commonwealth Fusion Systems is building SPARC, a compact tokamak fitted with new high-temperature superconducting magnets that are much more powerful. In 2025 it announced a deal with Google to sell it electricity from its future power plant.",
    "Other companies are exploring original approaches, with plasmas fired at high speed or different fuels. The company Helion has even signed a deal to supply electricity to Microsoft from 2028, a goal many specialists consider very ambitious.",
    "Experts remain cautious. Most believe the first fusion power stations able to supply electricity to the grid will not appear before the 2040s or 2050s, and so cannot on their own solve the climate crisis in the short term."
   ]},
   {h:"Hopes and false starts", p:[
    "The history of fusion has also had less glorious episodes. The first man-made fusion was military: on 1 November 1952 the United States exploded the first hydrogen bomb, Ivy Mike, on a Pacific atoll. Unlike in reactors, this reaction was uncontrolled.",
    "In 1989 two chemists, Martin Fleischmann and Stanley Pons, announced they had achieved \"cold fusion\" at room temperature in a simple jar of heavy water. The news caused a sensation, but no laboratory managed to reproduce their results, and the affair turned into a fiasco.",
    "Despite these false starts, real progress has been considerable. The performance of fusion machines has improved spectacularly since the 1970s, faster than that of many other technologies.",
    "If researchers succeed in mastering fusion, humanity would have a clean, safe and practically unlimited source of energy. Recreating the fire of the stars on Earth remains one of the greatest scientific and technical challenges of our time."
   ]}
  ],
  numbers: [
   ["> 100 million °C","temperature the plasma needs on Earth"],
   ["3.15 MJ","energy produced by NIF on 5 December 2022"],
   ["69 MJ","JET's final record (announced 2024)"],
   ["35","countries taking part in ITER"]
  ],
  didyou: [
   "The plasma in a fusion reactor is nearly ten times hotter than the Sun's core.",
   "ITER's tokamak will weigh as much as three Eiffel Towers.",
   "In 1968 a British team travelled to Moscow, at the height of the Cold War, to check a Soviet tokamak's results."
  ],
  open: [
   "When will the first fusion power station supply electricity to the grid?",
   "Which materials will be able to withstand neutron bombardment over the long term?"
  ]
 }
}

});
