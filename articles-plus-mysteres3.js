/* LUMORA — Inexpliqué (3) : compléments FR/EN. */
addParas({
 voynich:{
  fr:{"Des plantes qui n'existent pas":"Certaines racines dessinées dans le manuscrit ont des formes étonnantes : l'une évoque un lion, une autre semble porter de petits visages humains. Ces détails ont alimenté les théories les plus diverses, mais rappellent aussi que les herbiers médiévaux mêlaient souvent observation et imagination."},
  en:{"Plants that do not exist":"Some of the roots drawn in the manuscript have astonishing shapes: one suggests a lion, another seems to bear small human faces. These details have fuelled all kinds of theories, but they are also a reminder that medieval herbals often mixed observation and imagination."}
 },
 wow:{
  fr:{"Que signifie « 6EQUJ5 » ?":"Le signal était aussi très étroit : il n'occupait qu'un seul des cinquante canaux de fréquence étudiés par le récepteur, chacun large de seulement 10 kilohertz. Les sources naturelles connues émettent généralement sur une bande de fréquences beaucoup plus large, ce qui rendait ce signal encore plus intrigant.",
      "Une comète ?":"D'autres hypothèses ont été examinées et écartées : un satellite ou un avion passant dans le champ du télescope, un reflet d'un signal terrestre sur un débris spatial, ou une erreur de l'ordinateur. Aucune ne correspondait à toutes les caractéristiques observées.",
      "Un signal qui ne revient jamais":"Certains chercheurs ont suggéré qu'un émetteur extraterrestre pourrait balayer le ciel comme un phare, et ne viser la Terre que très rarement. Mais cette idée est impossible à vérifier sans nouvelles observations, et elle ne repose sur aucune preuve.",
      "Big Ear, l'« oreille géante »":"Le télescope a aussi réalisé l'un des plus grands relevés du ciel en ondes radio de son époque, l'Ohio Sky Survey, qui a permis de cataloguer des milliers de sources radio inconnues, comme des galaxies lointaines et des quasars."},
  en:{"What does \"6EQUJ5\" mean?":"The signal was also very narrow: it occupied only one of the fifty frequency channels studied by the receiver, each just 10 kilohertz wide. Known natural sources usually emit over a much wider band of frequencies, which made this signal even more intriguing.",
      "A comet?":"Other hypotheses were examined and ruled out: a satellite or aircraft passing through the telescope's field, a reflection of a terrestrial signal off space debris, or a computer error. None matched all the observed features.",
      "A signal that never returned":"Some researchers have suggested that an alien transmitter might sweep the sky like a lighthouse and point at Earth only very rarely. But this idea cannot be tested without new observations and rests on no evidence.",
      "Big Ear, the \"giant ear\"":"The telescope also carried out one of the largest radio sky surveys of its time, the Ohio Sky Survey, which catalogued thousands of previously unknown radio sources, such as distant galaxies and quasars."}
 }
});

addParas({
 voynich:{fr:{"Une écriture inconnue":"Aucune ponctuation n'y apparaît."},en:{"An unknown script":"No punctuation appears anywhere in it."}},
 wow:{fr:{"Écouter les étoiles":"Des millions de bénévoles ont même prêté la puissance de leur ordinateur au projet SETI@home, lancé en 1999, pour analyser les données des radiotélescopes."},
      en:{"Listening to the stars":"Millions of volunteers even lent their computers' processing power to the SETI@home project, launched in 1999, to analyse radio telescope data."}}
});

{ const P="assets/photos/plus/";
const F=(s,c,ce,cr,cre,m)=>[{src:P+s,cap:c,credit:cr,...(m?{maxw:m}:{})},{src:P+s,cap:ce,credit:cre,...(m?{maxw:m}:{})}];
const fig=(id,hf,he,f)=>({[id]:{fr:{[hf]:f[0]},en:{[he]:f[1]}}});
[
 fig("voynich","Étoiles, bains et rosaces","Stars, baths and rosettes",F("voynich-page.jpg","Une page de la section « des bains » : de petites femmes se baignent dans un liquide vert, entourées de texte en voynichais.","A page from the \"bathing\" section: small women bathe in a green liquid, surrounded by Voynichese text.","Bibliothèque Beinecke, Yale — domaine public","Beinecke Library, Yale — public domain","420px")),
 fig("voynich","Des plantes qui n'existent pas","Plants that do not exist",F("voynich-root-faces.jpg","Détail d'une plante dont les racines semblent porter deux petits visages humains.","Detail of a plant whose roots seem to bear two small human faces.","Bibliothèque Beinecke, Yale — domaine public","Beinecke Library, Yale — public domain","520px")),
 fig("voynich","Une écriture inconnue","An unknown script",F("voynich-zodiac.jpg","Un médaillon de la section du zodiaque, avec un couple et des mots en écriture inconnue disposés en cercle.","A medallion from the zodiac section, with a couple and words in the unknown script arranged in a circle.","Bibliothèque Beinecke, Yale — domaine public","Beinecke Library, Yale — public domain","460px")),
 fig("wow","Que signifie « 6EQUJ5 » ?","What does \"6EQUJ5\" mean?",F("wow-printout.jpg","Copie de l'impression originale de Big Ear : à gauche, la séquence entourée et le « Wow! » écrit par Jerry Ehman.","Copy of the original Big Ear printout: on the left, the circled sequence and the \"Wow!\" written by Jerry Ehman.","Big Ear Radio Observatory / NAAPO — domaine public","Big Ear Radio Observatory / NAAPO — public domain")),
 fig("wow","Un nuage d'hydrogène réveillé ?","An awakened hydrogen cloud?",F("arecibo-dish.jpg","Le radiotélescope d'Arecibo, à Porto Rico, dont les archives ont servi à proposer une nouvelle explication du signal. Il s'est effondré en 2020.","The Arecibo radio telescope in Puerto Rico, whose archives were used to propose a new explanation for the signal. It collapsed in 2020.","Photo : Mariordo — CC BY-SA 4.0","Photo: Mariordo — CC BY-SA 4.0")),
 fig("wow","Répondre au signal","Answering the signal",F("arecibo-message.jpg","Le message d'Arecibo de 1974 : 1 679 impulsions formant une image des chiffres, de l'ADN, d'un être humain et du télescope.","The 1974 Arecibo message: 1,679 pulses forming a picture of numbers, DNA, a human being and the telescope.","Image : Pablo Carlos Budassi — CC BY-SA 4.0","Image: Pablo Carlos Budassi — CC BY-SA 4.0","260px")),
 fig("wow","De fausses alertes célèbres","Famous false alarms",F("jocelyn-bell-1967.jpg","Jocelyn Bell Burnell en 1967, l'année où elle découvrit le premier pulsar, surnommé « LGM-1 ».","Jocelyn Bell Burnell in 1967, the year she discovered the first pulsar, nicknamed \"LGM-1\".","Photo : Roger W Haworth — CC BY-SA 2.0","Photo: Roger W Haworth — CC BY-SA 2.0","380px"))
].forEach(addFig);
}

addParas({
 voynich:{fr:{"De Prague à Rome":"Kircher ne trouva jamais la solution."},en:{"From Prague to Rome":"Kircher never found the solution either."}},
 wow:{fr:{"Une nuit d'août 1977":"Jerry Ehman a raconté cette histoire dans de nombreuses interviews, au fil des années."},en:{"An August night in 1977":"Jerry Ehman recounted the story in many interviews over the years."}}
});
