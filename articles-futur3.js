/* LUMORA — articles complets : Futur (3) — L'ordinateur quantique. */
Object.assign(longArticles, {

quantumcomputer: {
 sources: [
  {t:"Feynman, R. — Simulating Physics with Computers, International Journal of Theoretical Physics (1982)", u:"https://doi.org/10.1007/BF02650179"},
  {t:"Shor, P. — Algorithms for quantum computation: discrete logarithms and factoring (1994)", u:"https://doi.org/10.1109/SFCS.1994.365700"},
  {t:"Arute et al., Nature (2019) — Quantum supremacy using a programmable superconducting processor", u:"https://doi.org/10.1038/s41586-019-1666-5"},
  {t:"Google Quantum AI, Nature (2024) — Quantum error correction below the surface code threshold (Willow)", u:"https://doi.org/10.1038/s41586-024-08449-y"},
  {t:"NIST — Normes de cryptographie post-quantique FIPS 203, 204 et 205 (août 2024)", u:"https://www.nist.gov/news-events/news/2024/08/nist-releases-first-3-finalized-post-quantum-encryption-standards"}
 ],
 fr: {
  key: [
   "Un ordinateur classique utilise des bits qui valent 0 ou 1 ; un ordinateur quantique utilise des qubits, qui peuvent être dans une superposition des deux états.",
   "En combinant superposition, intrication et interférences, il pourrait résoudre certains problèmes bien plus vite qu'un ordinateur classique.",
   "Les qubits sont très fragiles : la moindre perturbation les fait perdre leur état, et corriger ces erreurs est le grand défi actuel.",
   "Les applications espérées concernent la chimie, les matériaux et les médicaments, mais un ordinateur quantique puissant menacerait aussi certains codes secrets d'Internet."
  ],
  sections: [
   {h:"L'idée de Feynman", p:[
    "En 1981, lors d'une conférence aux États-Unis, le physicien Richard Feynman fait une remarque célèbre. Les ordinateurs ont beaucoup de mal à simuler le comportement des atomes et des molécules, car la nature obéit aux lois de la physique quantique, très difficiles à reproduire avec des calculs ordinaires.",
    "Pour décrire seulement quelques dizaines de particules quantiques, un ordinateur classique doit manipuler une quantité de nombres qui double à chaque particule ajoutée. Avec quelques centaines de particules, il faudrait plus de nombres qu'il n'y a d'atomes dans l'Univers.",
    "Feynman propose donc une idée audacieuse : pour simuler la nature, il faudrait construire un ordinateur qui fonctionne lui-même selon les lois de la physique quantique. Il conclut par une phrase devenue célèbre : la nature n'est pas classique, et si l'on veut la simuler, mieux vaut le faire de façon quantique.",
    "Quelques années plus tard, en 1985, le physicien britannique David Deutsch décrit en détail comment pourrait fonctionner un ordinateur quantique universel, capable en principe d'exécuter n'importe quel calcul. Le domaine de l'informatique quantique était né."
   ]},
   {h:"Bits et qubits", p:[
    "Un ordinateur ordinaire, comme celui de ton téléphone, manipule des bits. Chaque bit est comme un interrupteur : il vaut 0 ou 1, éteint ou allumé. Toutes les informations, textes, images, musiques ou vidéos, sont codées sous forme de longues suites de 0 et de 1.",
    "Un ordinateur quantique utilise des qubits, ou bits quantiques. Grâce au principe de superposition, un qubit peut être dans un état qui combine 0 et 1 en même temps, avec certaines proportions. On peut l'imaginer comme une pièce de monnaie qui tourne sur elle-même, et qui n'est ni pile ni face tant qu'elle n'est pas tombée.",
    "Quand on mesure un qubit, il « tombe » sur 0 ou sur 1, au hasard, selon les proportions de sa superposition. Toute la difficulté est donc de faire des calculs avant la mesure, en manipulant les superpositions sans les détruire.",
    "Avec deux qubits, on peut représenter une superposition de quatre combinaisons : 00, 01, 10 et 11. Avec trois qubits, huit combinaisons. Chaque qubit ajouté double le nombre de combinaisons. Avec 300 qubits, on pourrait en théorie manipuler plus de combinaisons qu'il n'y a d'atomes dans l'Univers observable."
   ]},
   {h:"Pas un ordinateur plus rapide pour tout", p:[
    "On dit souvent qu'un ordinateur quantique « essaie toutes les solutions en même temps ». C'est une image trompeuse. À la fin du calcul, une seule mesure donne un seul résultat, choisi au hasard parmi toutes les possibilités. Si l'on ne fait rien de plus, on n'obtient qu'une réponse aléatoire.",
    "L'astuce des algorithmes quantiques consiste à utiliser les interférences, comme des vagues qui s'additionnent ou s'annulent. On organise le calcul pour que les chemins menant aux mauvaises réponses s'annulent entre eux, tandis que ceux menant à la bonne réponse se renforcent. À la mesure, on a alors de grandes chances d'obtenir le bon résultat.",
    "Les qubits peuvent aussi être intriqués, c'est-à-dire liés entre eux de telle sorte qu'ils forment un seul système. Cette propriété permet de créer des corrélations impossibles à obtenir avec des bits ordinaires.",
    "Cela ne fonctionne que pour certains types de problèmes bien particuliers. Pour la plupart des tâches de la vie courante, comme naviguer sur Internet, écrire un texte ou jouer à un jeu vidéo, un ordinateur quantique ne serait pas plus rapide qu'un ordinateur classique. Il ne remplacera pas nos ordinateurs personnels."
   ]},
   {h:"L'algorithme qui fait peur", p:[
    "En 1994, le mathématicien américain Peter Shor fait une découverte qui va attirer l'attention du monde entier. Il montre qu'un ordinateur quantique pourrait décomposer de très grands nombres en produits de nombres premiers beaucoup plus vite que n'importe quel ordinateur classique connu.",
    "Ce problème peut sembler abstrait, mais il est au cœur de la sécurité d'Internet. Une grande partie des systèmes de chiffrement, qui protègent les paiements en ligne, les messageries et les échanges bancaires, repose sur le fait qu'il est extrêmement difficile de retrouver les facteurs d'un nombre de plusieurs centaines de chiffres.",
    "Avec les meilleurs ordinateurs classiques, cela prendrait des milliards d'années. Un ordinateur quantique suffisamment puissant pourrait, en théorie, y parvenir en quelques heures ou quelques jours. Il pourrait alors déchiffrer des communications protégées aujourd'hui.",
    "Deux ans plus tard, en 1996, l'informaticien Lov Grover publie un autre algorithme quantique, qui permet de chercher un élément dans une grande liste désordonnée plus rapidement qu'un ordinateur classique. Ces découvertes ont lancé une course mondiale pour construire de véritables ordinateurs quantiques."
   ]},
   {h:"Fabriquer des qubits", p:[
    "Il existe plusieurs façons de fabriquer des qubits, et personne ne sait encore laquelle l'emportera. Google et IBM utilisent des circuits électriques supraconducteurs, de minuscules boucles de métal refroidies tout près du zéro absolu, dans de grands cryostats dorés suspendus.",
    "D'autres entreprises piègent des atomes chargés, des ions, dans des champs électriques, et les manipulent avec des lasers. Ces qubits sont très stables et très précis, mais les opérations sont plus lentes. D'autres encore utilisent des atomes neutres, maintenus par des faisceaux laser appelés « pinces optiques ». L'entreprise française Pasqal fait partie des pionnières de cette approche.",
    "Certaines équipes utilisent des particules de lumière, les photons, qui peuvent fonctionner à température ambiante et voyager dans des fibres optiques. D'autres misent sur des électrons piégés dans du silicium, le matériau des puces électroniques actuelles, ce qui pourrait faciliter la fabrication en grande série.",
    "Microsoft explore une voie plus exotique, les qubits topologiques, qui seraient naturellement protégés contre les erreurs. En 2025, l'entreprise a présenté une première puce de ce type, mais une partie de la communauté scientifique reste sceptique sur la réalité de ces résultats."
   ]},
   {h:"Des qubits très fragiles", p:[
    "Le grand problème des qubits, c'est leur fragilité. Leur état quantique est détruit par la moindre perturbation : une vibration, un peu de chaleur, un champ magnétique parasite, ou même un rayon cosmique venu de l'espace. Ce phénomène s'appelle la décohérence.",
    "Pour protéger les qubits supraconducteurs, on les refroidit à une température plus basse que celle de l'espace, on les isole des vibrations et on les enferme dans des blindages magnétiques. Malgré ces précautions, ils ne conservent leur état que pendant quelques dizaines ou centaines de microsecondes.",
    "Chaque opération réalisée sur un qubit a aussi une petite chance de produire une erreur, typiquement une fois sur mille environ pour les meilleurs systèmes actuels. C'est beaucoup trop pour les calculs complexes, qui nécessitent des milliards d'opérations.",
    "C'est pourquoi les machines actuelles, qui comptent de quelques dizaines à un millier de qubits, sont souvent qualifiées de « bruyantes ». Elles permettent des expériences passionnantes, mais pas encore de résoudre des problèmes utiles que les ordinateurs classiques ne sauraient pas traiter."
   ]},
   {h:"Corriger les erreurs", p:[
    "La solution envisagée s'appelle la correction d'erreurs quantiques. L'idée est de répartir l'information d'un seul qubit « logique », fiable, sur de nombreux qubits « physiques », imparfaits. En surveillant en permanence ces qubits, on peut détecter et corriger les erreurs sans détruire l'information.",
    "Le principe ressemble à une conversation dans un endroit bruyant : si l'on répète plusieurs fois le même message, on finit par le comprendre malgré le bruit. Mais en physique quantique, on ne peut pas simplement copier un qubit, ce qui rend la tâche beaucoup plus subtile.",
    "Il y a une condition essentielle : les qubits physiques doivent être suffisamment fiables. Si leur taux d'erreur est sous un certain seuil, ajouter des qubits réduit les erreurs. Sinon, cela les augmente. Pendant des années, aucune machine n'avait franchi ce seuil de façon convaincante.",
    "En décembre 2024, Google a présenté une puce appelée Willow, comptant 105 qubits. Ses chercheurs ont montré qu'en agrandissant un qubit logique, de 9 à 25 puis à 49 qubits physiques, le taux d'erreur diminuait à chaque étape. C'est une étape importante, même si des millions de qubits physiques pourraient être nécessaires pour les calculs les plus ambitieux."
   ]},
   {h:"La course à la suprématie", p:[
    "En octobre 2019, Google annonce avoir atteint la « suprématie quantique » avec son processeur Sycamore, de 53 qubits. Il a effectué en 200 secondes un calcul qui, selon l'entreprise, aurait pris environ 10 000 ans au meilleur superordinateur du monde.",
    "IBM conteste aussitôt ce chiffre, estimant qu'un superordinateur bien programmé aurait pu y parvenir en quelques jours. Dans les années suivantes, d'autres chercheurs ont mis au point des méthodes classiques plus efficaces, réduisant encore l'avantage. Le calcul choisi, de plus, n'avait aucune utilité pratique.",
    "Depuis, plusieurs équipes, en Chine et aux États-Unis notamment, ont annoncé de nouvelles démonstrations, avec des machines plus grandes. En 2025, Google a publié un calcul de physique vérifiable, réalisé environ 13 000 fois plus vite que par un superordinateur, une étape vers des applications réelles.",
    "Les spécialistes préfèrent aujourd'hui parler d'« avantage quantique » plutôt que de « suprématie ». La vraie question est de savoir quand un ordinateur quantique résoudra un problème réellement utile, impossible à traiter autrement."
   ]},
   {h:"Ce qu'on espère en faire", p:[
    "L'application la plus prometteuse est celle qu'imaginait Feynman : simuler des molécules et des matériaux. Les chimistes espèrent comprendre comment fonctionnent certaines enzymes, comme celle qui permet à des bactéries de fabriquer de l'engrais naturel à partir de l'azote de l'air, à température ambiante.",
    "Aujourd'hui, la fabrication industrielle d'engrais azotés consomme environ 1 à 2 % de l'énergie mondiale. Mieux comprendre cette chimie pourrait permettre de produire des engrais avec beaucoup moins d'énergie. Les chercheurs espèrent aussi concevoir de meilleures batteries, des catalyseurs plus efficaces ou de nouveaux médicaments.",
    "Les ordinateurs quantiques pourraient aussi aider à résoudre certains problèmes d'optimisation, comme organiser des itinéraires de livraison, gérer des réseaux électriques ou concevoir des portefeuilles financiers. Mais pour ces usages, les gains restent incertains, et les ordinateurs classiques progressent eux aussi.",
    "Certains chercheurs estiment que les premières applications réellement utiles pourraient apparaître d'ici une dizaine d'années, d'autres pensent qu'il faudra plus longtemps. Il faut donc se méfier des annonces trop enthousiastes."
   ]},
   {h:"Protéger les secrets de demain", p:[
    "La menace de l'algorithme de Shor est prise très au sérieux. Les spécialistes craignent que des espions enregistrent dès aujourd'hui des communications chiffrées, pour les déchiffrer plus tard, quand un ordinateur quantique suffisamment puissant existera. On appelle cela la stratégie « récolter maintenant, déchiffrer plus tard ».",
    "Pour y faire face, les cryptographes ont mis au point de nouvelles méthodes de chiffrement, appelées cryptographie post-quantique. Elles fonctionnent sur des ordinateurs ordinaires, mais reposent sur des problèmes mathématiques que même un ordinateur quantique ne saurait pas résoudre facilement.",
    "En août 2024, l'institut américain des normes, le NIST, a publié les trois premières normes officielles de cryptographie post-quantique, après huit ans de compétition internationale. Les navigateurs Internet et les messageries commencent déjà à les adopter.",
    "Selon une estimation publiée en 2025 par un chercheur de Google, casser l'un des codes les plus utilisés, RSA-2048, nécessiterait moins d'un million de qubits physiques fonctionnant pendant environ une semaine. Aucune machine n'en est encore capable, mais ce chiffre est bien plus bas que les estimations précédentes."
   ]}
  ],
  numbers: [
   ["1981","Richard Feynman propose l'idée d'un ordinateur quantique"],
   ["1994","algorithme de Shor"],
   ["105","qubits de la puce Willow de Google (2024)"],
   ["2024","premières normes de cryptographie post-quantique"]
  ],
  didyou: [
   "Avec seulement 300 qubits, on pourrait théoriquement représenter plus de combinaisons qu'il n'y a d'atomes dans l'Univers.",
   "Un ordinateur quantique ne serait pas plus rapide qu'un ordinateur ordinaire pour regarder une vidéo ou écrire un texte.",
   "Un simple rayon cosmique venu de l'espace peut provoquer des erreurs dans des qubits supraconducteurs."
  ],
  open: [
   "Quelle technologie de qubits l'emportera finalement ?",
   "Quand un ordinateur quantique résoudra-t-il un problème vraiment utile, impossible à traiter autrement ?"
  ]
 },
 en: {
  key: [
   "A classical computer uses bits that are 0 or 1; a quantum computer uses qubits, which can be in a superposition of both states.",
   "By combining superposition, entanglement and interference, it could solve certain problems far faster than a classical computer.",
   "Qubits are very fragile: the slightest disturbance makes them lose their state, and correcting these errors is today's great challenge.",
   "Hoped-for applications involve chemistry, materials and medicines, but a powerful quantum computer would also threaten some of the internet's secret codes."
  ],
  sections: [
   {h:"Feynman's idea", p:[
    "In 1981, at a conference in the United States, the physicist Richard Feynman made a famous remark. Computers struggle to simulate the behaviour of atoms and molecules, because nature obeys the laws of quantum physics, which are very hard to reproduce with ordinary calculations.",
    "To describe just a few dozen quantum particles, a classical computer has to handle a quantity of numbers that doubles with each particle added. With a few hundred particles, it would need more numbers than there are atoms in the Universe.",
    "So Feynman put forward a bold idea: to simulate nature, we should build a computer that itself works according to the laws of quantum physics. He concluded with a now-famous remark: nature isn't classical, and if you want to simulate it, you'd better make it quantum mechanical.",
    "A few years later, in 1985, the British physicist David Deutsch described in detail how a universal quantum computer could work, able in principle to carry out any calculation. The field of quantum computing was born."
   ]},
   {h:"Bits and qubits", p:[
    "An ordinary computer, like the one in your phone, handles bits. Each bit is like a switch: it is 0 or 1, off or on. All information, texts, images, music or videos, is encoded as long strings of 0s and 1s.",
    "A quantum computer uses qubits, or quantum bits. Thanks to the principle of superposition, a qubit can be in a state that combines 0 and 1 at the same time, in certain proportions. You can picture it as a spinning coin that is neither heads nor tails until it lands.",
    "When a qubit is measured, it \"lands\" on 0 or 1 at random, according to the proportions of its superposition. The whole difficulty is therefore to carry out calculations before measurement, manipulating superpositions without destroying them.",
    "With two qubits you can represent a superposition of four combinations: 00, 01, 10 and 11. With three qubits, eight combinations. Each added qubit doubles the number of combinations. With 300 qubits you could in theory handle more combinations than there are atoms in the observable Universe."
   ]},
   {h:"Not a faster computer for everything", p:[
    "It is often said that a quantum computer \"tries all the solutions at once\". That is a misleading image. At the end of the calculation a single measurement gives a single result, chosen at random among all the possibilities. If you do nothing more, you just get a random answer.",
    "The trick of quantum algorithms is to use interference, like waves that add up or cancel out. The calculation is arranged so that the paths leading to wrong answers cancel each other out, while those leading to the right answer reinforce each other. On measurement you then have a good chance of getting the right result.",
    "Qubits can also be entangled, meaning linked so that they form a single system. This property makes it possible to create correlations that cannot be obtained with ordinary bits.",
    "This only works for certain very specific types of problem. For most everyday tasks, such as browsing the internet, writing a text or playing a video game, a quantum computer would be no faster than a classical one. It will not replace our personal computers."
   ]},
   {h:"The algorithm that frightens", p:[
    "In 1994 the American mathematician Peter Shor made a discovery that caught the world's attention. He showed that a quantum computer could break very large numbers down into products of prime numbers far faster than any known classical computer.",
    "This problem may seem abstract, but it lies at the heart of internet security. Much of the encryption that protects online payments, messaging and banking relies on the fact that it is extremely hard to find the factors of a number hundreds of digits long.",
    "With the best classical computers this would take billions of years. A powerful enough quantum computer could, in theory, do it in a few hours or days. It could then decrypt communications that are protected today.",
    "Two years later, in 1996, the computer scientist Lov Grover published another quantum algorithm, which searches for an item in a large unsorted list faster than a classical computer. These discoveries launched a worldwide race to build real quantum computers."
   ]},
   {h:"Making qubits", p:[
    "There are several ways to make qubits, and no one yet knows which will win. Google and IBM use superconducting electrical circuits, tiny metal loops cooled to very close to absolute zero in large hanging gold-coloured cryostats.",
    "Other companies trap charged atoms, ions, in electric fields and manipulate them with lasers. These qubits are very stable and precise, but operations are slower. Others still use neutral atoms held by laser beams called \"optical tweezers\". The French company Pasqal is one of the pioneers of this approach.",
    "Some teams use particles of light, photons, which can work at room temperature and travel through optical fibres. Others are betting on electrons trapped in silicon, the material of today's microchips, which could make mass production easier.",
    "Microsoft is exploring a more exotic route, topological qubits, which would be naturally protected against errors. In 2025 the company presented a first chip of this kind, but part of the scientific community remains sceptical about these results."
   ]},
   {h:"Very fragile qubits", p:[
    "The big problem with qubits is their fragility. Their quantum state is destroyed by the slightest disturbance: a vibration, a little heat, a stray magnetic field or even a cosmic ray from space. This phenomenon is called decoherence.",
    "To protect superconducting qubits, they are cooled below the temperature of space, isolated from vibrations and enclosed in magnetic shielding. Despite these precautions, they keep their state for only a few tens or hundreds of microseconds.",
    "Each operation performed on a qubit also has a small chance of producing an error, typically about once in a thousand for today's best systems. That is far too much for complex calculations, which require billions of operations.",
    "That is why today's machines, with a few dozen to a thousand qubits, are often described as \"noisy\". They allow fascinating experiments, but cannot yet solve useful problems that classical computers could not handle."
   ]},
   {h:"Correcting errors", p:[
    "The proposed solution is called quantum error correction. The idea is to spread the information of a single reliable \"logical\" qubit across many imperfect \"physical\" qubits. By constantly monitoring these qubits, errors can be detected and corrected without destroying the information.",
    "The principle is like a conversation in a noisy place: if the same message is repeated several times, you eventually understand it despite the noise. But in quantum physics you cannot simply copy a qubit, which makes the task far more subtle.",
    "There is an essential condition: the physical qubits must be reliable enough. If their error rate is below a certain threshold, adding qubits reduces errors. If not, it increases them. For years no machine had convincingly crossed this threshold.",
    "In December 2024 Google presented a chip called Willow, with 105 qubits. Its researchers showed that by enlarging a logical qubit from 9 to 25 and then 49 physical qubits, the error rate fell at each step. This is an important milestone, even though millions of physical qubits might be needed for the most ambitious calculations."
   ]},
   {h:"The race for supremacy", p:[
    "In October 2019 Google announced it had achieved \"quantum supremacy\" with its 53-qubit Sycamore processor. It carried out in 200 seconds a calculation that, according to the company, would have taken the world's best supercomputer about 10,000 years.",
    "IBM immediately disputed this figure, arguing that a well-programmed supercomputer could have done it in a few days. In the following years other researchers developed more efficient classical methods, further reducing the advantage. Moreover, the chosen calculation had no practical use.",
    "Since then several teams, notably in China and the United States, have announced new demonstrations with larger machines. In 2025 Google published a verifiable physics calculation performed about 13,000 times faster than by a supercomputer, a step towards real applications.",
    "Specialists now prefer to speak of \"quantum advantage\" rather than \"supremacy\". The real question is when a quantum computer will solve a genuinely useful problem that cannot be tackled any other way."
   ]},
   {h:"What we hope to do with it", p:[
    "The most promising application is the one Feynman imagined: simulating molecules and materials. Chemists hope to understand how certain enzymes work, such as the one that lets bacteria make natural fertiliser from nitrogen in the air at room temperature.",
    "Today the industrial production of nitrogen fertilisers uses about 1 to 2% of the world's energy. Better understanding this chemistry could make it possible to produce fertiliser with far less energy. Researchers also hope to design better batteries, more efficient catalysts or new medicines.",
    "Quantum computers might also help solve certain optimisation problems, such as planning delivery routes, managing power grids or designing financial portfolios. But for these uses the gains remain uncertain, and classical computers keep improving too.",
    "Some researchers think the first truly useful applications could appear within about ten years; others think it will take longer. So it is wise to be wary of overly enthusiastic announcements."
   ]},
   {h:"Protecting tomorrow's secrets", p:[
    "The threat from Shor's algorithm is taken very seriously. Specialists fear that spies are already recording encrypted communications in order to decrypt them later, once a powerful enough quantum computer exists. This is called the \"harvest now, decrypt later\" strategy.",
    "To counter it, cryptographers have developed new encryption methods called post-quantum cryptography. They run on ordinary computers but rely on mathematical problems that even a quantum computer could not easily solve.",
    "In August 2024 the US standards institute, NIST, published the first three official post-quantum cryptography standards after eight years of international competition. Web browsers and messaging apps are already starting to adopt them.",
    "According to an estimate published in 2025 by a Google researcher, breaking one of the most widely used codes, RSA-2048, would require fewer than a million physical qubits running for about a week. No machine can yet do this, but the figure is far lower than previous estimates."
   ]}
  ],
  numbers: [
   ["1981","Richard Feynman proposes the idea of a quantum computer"],
   ["1994","Shor's algorithm"],
   ["105","qubits on Google's Willow chip (2024)"],
   ["2024","first post-quantum cryptography standards"]
  ],
  didyou: [
   "With just 300 qubits you could theoretically represent more combinations than there are atoms in the Universe.",
   "A quantum computer would be no faster than an ordinary one for watching a video or writing a text.",
   "A single cosmic ray from space can cause errors in superconducting qubits."
  ],
  open: [
   "Which qubit technology will win in the end?",
   "When will a quantum computer solve a truly useful problem that cannot be tackled any other way?"
  ]
 }
}

});
