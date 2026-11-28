/* LUMORA — « Aujourd'hui dans l'histoire » (Ce jour-là).
   Les événements viennent de Wikipédia (fichiers data/onthisday/MM-DD.js, générés chaque
   semaine par scripts/fetch_onthisday.py). Ils sont traités comme des données externes :
   tout le texte est échappé et seuls les liens https sont gardés.
   Les événements sont reliés aux découvertes LUMORA grâce à des mots-clés. */

Object.assign(uiPages.fr, {
  navOtd:"Ce jour-là", otdEyebrow:"AUJOURD'HUI DANS L'HISTOIRE", otdTitle:"Ce jour-là",
  otdIntro:"Ce qui s'est passé à cette date au fil des siècles, d'après Wikipédia, avec un lien vers nos découvertes quand il y en a une.",
  otdToday:"Aujourd'hui", otdPrev:"Jour précédent", otdNext:"Jour suivant", otdPick:"Choisir une date",
  otdAlso: d=>`Aussi un ${d}`, otdOurs:"Lire notre découverte", otdWiki:"Wikipédia",
  otdImg:"Image : crédits et licence", otdLoading:"Chargement des événements…",
  otdMissing:"Les événements de cette date ne sont pas encore disponibles. Réessaie un peu plus tard.",
  otdNote:"Événements et textes issus de Wikipédia (licence CC BY-SA 4.0), sélectionnés automatiquement ; les événements les plus violents sont écartés.",
  otdHomeBtn: d=>`Tous les événements du ${d}`, otdYearsAgo: n=>`il y a ${n} an${n>1?"s":""}`
});
Object.assign(uiPages.en, {
  navOtd:"On this day", otdEyebrow:"TODAY IN HISTORY", otdTitle:"On this day",
  otdIntro:"What happened on this date through the centuries, according to Wikipedia, with a link to our discoveries whenever there is one.",
  otdToday:"Today", otdPrev:"Previous day", otdNext:"Next day", otdPick:"Pick a date",
  otdAlso: d=>`Also on ${d}`, otdOurs:"Read our discovery", otdWiki:"Wikipedia",
  otdImg:"Image: credits and licence", otdLoading:"Loading events…",
  otdMissing:"Events for this date are not available yet. Please try again a little later.",
  otdNote:"Events and texts from Wikipedia (CC BY-SA 4.0 licence), selected automatically; the most violent events are left out.",
  otdHomeBtn: d=>`All events on ${d}`, otdYearsAgo: n=>`${n} year${n>1?"s":""} ago`
});

/* mots-clés reliant un événement Wikipédia à une découverte LUMORA (FR et EN) */
const OTD_LINKS = {
  blackhole:["trou noir","trous noirs","black hole","black holes","Event Horizon Telescope"],
  oort:["nuage d'Oort","Oort cloud","comète de Halley","Halley's Comet","comète","comet"],
  voyager:["Voyager 1","Voyager 2","programme Voyager","Voyager program","sonde Voyager"],
  saturn:["Saturne","Saturn","Cassini-Huygens","Cassini"],
  betelgeuse:["Bételgeuse","Betelgeuse"], andromeda:["galaxie d'Andromède","Andromeda Galaxy"],
  bigbang:["Big Bang","fond diffus cosmologique","cosmic microwave background"],
  darkmatter:["matière noire","dark matter"],
  aurora:["aurore boréale","aurore polaire","aurora borealis","northern lights","tempête solaire","solar storm"],
  life:["exoplanète","exoplanet","vie extraterrestre","extraterrestrial life"],
  fermi:["Enrico Fermi","SETI"], wow:["signal Wow","Wow! signal","Big Ear","Arecibo"],
  ingenuity:["Ingenuity","Perseverance","Mars 2020"],
  quantum:["mécanique quantique","physique quantique","quantum mechanics","Max Planck","Erwin Schrödinger","Werner Heisenberg","Niels Bohr"],
  emc2:["Albert Einstein","Einstein","relativité générale","relativité restreinte","general relativity","special relativity"],
  gps:["GPS","Global Positioning System","Navstar"],
  absolutezero:["zéro absolu","absolute zero","supraconductivité","superconductivity","Kamerlingh Onnes"],
  fusion:["fusion nucléaire","nuclear fusion","ITER","bombe H","bombe à hydrogène","hydrogen bomb","Ivy Mike","tokamak"],
  graphene:["graphène","graphene"], quantumcomputer:["ordinateur quantique","quantum computer","quantum computing"],
  ai:["intelligence artificielle","artificial intelligence","Deep Blue","AlphaGo","ChatGPT","Alan Turing"],
  printing:["Gutenberg","imprimerie","printing press","Bible de Gutenberg","Gutenberg Bible"],
  time:["fuseau horaire","fuseaux horaires","time zone","méridien de Greenwich","Greenwich Mean Time","horloge atomique","atomic clock","calendrier grégorien","Gregorian calendar","seconde intercalaire","leap second"],
  penicillin:["pénicilline","penicillin","Alexander Fleming"],
  vaccines:["vaccin","vaccine","vaccination","variole","smallpox","Edward Jenner","Louis Pasteur","poliomyélite","polio vaccine","Jonas Salk"],
  genome:["génome humain","Human Genome Project","double hélice","double helix","Rosalind Franklin","James Watson","Francis Crick"],
  evolution:["Charles Darwin","De l'origine des espèces","On the Origin of Species","Darwin"],
  cancer:["cancer"], covid:["COVID-19","SARS-CoV-2","coronavirus"], spanishflu:["grippe espagnole","Spanish flu"],
  plague:["peste noire","Black Death","peste bubonique","bubonic plague"], cholera:["choléra","cholera","John Snow"],
  ww1:["Première Guerre mondiale","World War I","First World War","Grande Guerre","armistice de 1918","bataille de Verdun","Battle of Verdun","bataille de la Somme","Battle of the Somme"],
  ww2:["Seconde Guerre mondiale","Deuxième Guerre mondiale","World War II","Second World War","Pearl Harbor","débarquement de Normandie","Normandy landings","D-Day","Hiroshima","Nagasaki","Stalingrad"],
  rome476:["Empire romain d'Occident","Western Roman Empire","Romulus Augustule","Romulus Augustulus","Odoacre","Odoacer"],
  pompeii:["Pompéi","Pompeii","Vésuve","Vesuvius","Herculanum","Herculaneum"],
  cleopatra:["Cléopâtre","Cleopatra"], mansa:["Mansa Moussa","Mansa Musa","empire du Mali","Mali Empire"],
  ibnbattuta:["Ibn Battûta","Ibn Battuta"], zimbabwe:["Grand Zimbabwe","Great Zimbabwe"],
  tsunami2004:["tsunami","raz-de-marée"], ringoffire:["ceinture de feu","Ring of Fire","Pinatubo","mont Saint Helens","Mount St. Helens"],
  calbuco:["Calbuco"], challenger:["fosse des Mariannes","Mariana Trench","Challenger Deep"],
  goree:["Gorée","traite négrière","traite atlantique","Atlantic slave trade","abolition de l'esclavage","abolition of slavery"],
  lacrose:["lac Rose","Lake Retba","Paris-Dakar","Dakar Rally","rallye Dakar"],
  vatican:["Vatican","Saint-Siège","Holy See","conclave"],
  sagrada:["Sagrada Família","Antoni Gaudí","Gaudí"], starrynight:["Van Gogh"],
  monalisa:["Joconde","Mona Lisa","Léonard de Vinci","Leonardo da Vinci"],
  tajmahal:["Taj Mahal","Shah Jahan"], terracotta:["Qin Shi Huang","armée de terre cuite","Terracotta Army"],
  khufu:["Khéops","Khufu","pyramide de Gizeh","Great Pyramid of Giza"], moai:["île de Pâques","Easter Island","Rapa Nui"],
  stonehenge:["Stonehenge"], nazca:["Nazca"], roanoke:["Roanoke"], bermuda:["triangle des Bermudes","Bermuda Triangle"],
  voynich:["manuscrit de Voynich","Voynich manuscript"], dodo:["dodo"], tardigrade:["tardigrade"], axolotl:["axolotl"],
  vaquita:["vaquita","marsouin du Pacifique"], muertos:["Día de Muertos","Día de los Muertos","jour des Morts"],
  silbo:["La Gomera","silbo"], sentinelese:["Sentinelle du Nord","North Sentinel","îles Andaman","Andaman Islands"],
  polarnight:["Svalbard","nuit polaire","polar night"], minotaur:["Cnossos","Knossos"], kukulcan:["Chichén Itzá","Chichen Itza"],
  mummies:["momie","mummy"], ocean:["Jacques-Yves Cousteau","Calypso","bathyscaphe"],
  sputnik:["Spoutnik", "Sputnik"],
  laika:["Laïka", "Laika", "Spoutnik 2", "Sputnik 2"],
  gagarin:["Gagarine", "Gagarin", "Vostok 1"],
  apollo11:["Apollo 11", "Neil Armstrong", "Buzz Aldrin", "Michael Collins", "alunissage", "Moon landing"],
  tutankhamun:["Toutânkhamon", "Tutankhamun", "Howard Carter", "Lord Carnarvon"],
  soundiata:["Soundiata", "Sundiata", "Soundjata"],
  songhai:["Songhaï", "Songhai", "Askia", "Sonni Ali", "Tondibi"],
  dahomey:["Dahomey", "Béhanzin", "Behanzin", "Abomey"],
  vinland:["Vinland", "Leif Erikson", "Erik le Rouge", "Erik the Red", "L'Anse aux Meadows"],
  magellan:["Magellan", "Elcano", "Lapulapu"],
  mlk:["Martin Luther King", "I have a dream", "Rosa Parks", "droits civiques", "civil rights"],
  hitler:["Adolf Hitler", "Hitler"],
  berlinwall:["mur de Berlin", "Berlin Wall", "Checkpoint Charlie"],
  titanic:["Titanic"],
  joola:["Joola"],
  krakatoa:["Krakatoa", "Krakatau"],
  september11:["11 septembre 2001", "September 11 attacks", "World Trade Center", "attentats du 11 septembre", "Al-Qaïda", "al-Qaeda"]
};
const otdRe = {};
function otdMatches(ev){
  const hay = [ev.t].concat(ev.links.map(l=>l.t)).join(" · ");
  const found = [];
  for(const id of Object.keys(OTD_LINKS)){
    if(!byId(id)) continue;
    const terms = OTD_LINKS[id]; if(!terms.length) continue;
    const re = otdRe[id] || (otdRe[id] = new RegExp("(^|[^\\p{L}\\p{N}])(" + terms.map(s=>s.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")).join("|") + ")(?=$|[^\\p{L}\\p{N}])","iu"));
    if(re.test(hay)) found.push(id);
    if(found.length>=2) break;
  }
  return found;
}

/* ---------- données ---------- */
const OTD_MONTHS = [31,29,31,30,31,30,31,31,30,31,30,31];
function otdKey(d){ return String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); }
function otdValid(k){ if(typeof k!=="string" || !/^\d\d-\d\d$/.test(k)) return false; const m=+k.slice(0,2), d=+k.slice(3); return m>=1 && m<=12 && d>=1 && d<=OTD_MONTHS[m-1]; }
function otdShift(k, n){ const d = new Date(2024, +k.slice(0,2)-1, +k.slice(3)+n); return otdKey(d); } /* 2024 : année bissextile, le 29 février existe */
function otdLabel(k){ return new Date(2024, +k.slice(0,2)-1, +k.slice(3)).toLocaleDateString(lang==="fr"?"fr-FR":"en-GB",{day:"numeric",month:"long"}); }

const otdWaiting = {};
function otdLoad(k){
  window.LUMORA_OTD = window.LUMORA_OTD || {};
  if(window.LUMORA_OTD[k]) return Promise.resolve(window.LUMORA_OTD[k]);
  if(otdWaiting[k]) return otdWaiting[k];
  return otdWaiting[k] = new Promise(res=>{
    const s = document.createElement("script");
    s.src = `data/onthisday/${k}.js`; s.async = true;
    s.onload = ()=>{ delete otdWaiting[k]; res(window.LUMORA_OTD[k] || null); };
    s.onerror = ()=>{ delete otdWaiting[k]; s.remove(); res(null); };
    document.head.appendChild(s);
  });
}
/* nettoyage des données externes : seuls des textes et des liens https bien formés passent */
function otdClean(raw){
  const day = raw && typeof raw==="object" ? raw[lang] : null;
  if(!day || typeof day!=="object") return null;
  const ev = e=>{
    if(!e || typeof e!=="object" || !Number.isFinite(e.y) || typeof e.t!=="string" || !e.t.trim() || e.soft===false) return null;
    const links = (Array.isArray(e.links)?e.links:[]).filter(l=>l && typeof l.t==="string" && safeUrl(l.u)).slice(0,3).map(l=>({t:l.t.slice(0,120), u:safeUrl(l.u)}));
    const im = e.img && typeof e.img==="object" && safeUrl(e.img.src) ? {src:safeUrl(e.img.src), page:safeUrl(e.img.page), free:e.img.free===true} : null;
    const x = {y:Math.trunc(e.y), t:e.t.trim().slice(0,400), links, img:im};
    x.ours = otdMatches(x);
    return x;
  };
  const sel = (Array.isArray(day.selected)?day.selected:[]).map(ev).filter(Boolean);
  const evs = (Array.isArray(day.events)?day.events:[]).map(ev).filter(Boolean);
  const all = sel.concat(evs);
  if(!all.length) return null;
  /* à la une : d'abord un événement relié à une découverte LUMORA, illustré si possible */
  const score = x => (x.ours.length?4:0) + (x.img?2:0) + (sel.includes(x)?1:0);
  const featured = all.slice().sort((a,b)=>score(b)-score(a))[0];
  const rest = all.filter(x=>x!==featured).sort((a,b)=>b.y-a.y);
  return {featured, rest};
}

/* ---------- affichage ---------- */
function otdYear(y){ return y<0 ? `${-y} ${lang==="fr"?"av. J.-C.":"BC"}` : String(y); }
function otdOursLinks(x){
  return x.ours.map(id=>{ const it = byId(id), u = uni(it.cat);
    return `<a class="otd-ours" href="#/d/${id}" style="--glow:${u.glow}">${u.icon} ${esc(t("otdOurs"))} : ${esc(it.title[lang])}</a>`; }).join("");
}
function otdWikiLinks(x){
  return x.links.slice(0,2).map(l=>`<a class="otd-wiki" href="${esc(l.u)}" target="_blank" rel="noopener noreferrer">${esc(l.t)} ↗</a>`).join("");
}
function otdFeatureHTML(x){
  const ago = new Date().getFullYear() - x.y;
  return `<article class="otd-feature">
    ${x.img?`<figure class="otd-feature-media"><img src="${esc(x.img.src)}" alt="" loading="lazy" referrerpolicy="no-referrer">
      ${x.img.page?`<figcaption><a href="${esc(x.img.page)}" target="_blank" rel="noopener noreferrer">${esc(t("otdImg"))} ↗</a></figcaption>`:""}</figure>`:""}
    <div class="otd-feature-copy">
      <div class="otd-year">${esc(otdYear(x.y))}${x.y>0 && ago>0?`<small>${esc(t("otdYearsAgo")(ago))}</small>`:""}</div>
      <h2>${esc(x.t.charAt(0).toUpperCase()+x.t.slice(1))}</h2>
      <div class="otd-actions">${otdOursLinks(x)}${otdWikiLinks(x)}</div>
    </div>
  </article>`;
}
function otdCardHTML(x){
  return `<article class="otd-card">
    ${x.img?`<a class="otd-card-media" href="${esc(x.img.page||x.img.src)}" target="_blank" rel="noopener noreferrer" title="${esc(t("otdImg"))}"><img src="${esc(x.img.src)}" alt="" loading="lazy" referrerpolicy="no-referrer"></a>`:""}
    <div class="otd-card-copy"><span class="otd-card-year">${esc(otdYear(x.y))}</span>
      <p>${esc(x.t.charAt(0).toUpperCase()+x.t.slice(1))}</p>
      <div class="otd-actions">${otdOursLinks(x)}${otdWikiLinks(x)}</div></div>
  </article>`;
}

let otdToken = 0;
function renderOnThisDay(k){
  const today = otdKey(new Date());
  if(!otdValid(k)) k = today;
  const label = otdLabel(k), my = ++otdToken;
  setMeta(`${t("otdTitle")} — ${label} — LUMORA`, t("otdIntro"));
  $("#page").innerHTML = `<div class="section otd-page">
    <nav class="crumbs"><a href="#/">${esc(t("home"))}</a><span>/</span><span>${esc(t("otdTitle"))}</span></nav>
    <div class="section-heading"><div><div class="eyebrow"><span class="pulse"></span>${esc(t("otdEyebrow"))}</div>
      <h1 tabindex="-1">${esc(label)}<span class="accent">.</span></h1></div><p>${esc(t("otdIntro"))}</p></div>
    <div class="otd-nav">
      <a class="otd-arrow" href="#/aujourdhui/${otdShift(k,-1)}" aria-label="${esc(t("otdPrev"))}">‹</a>
      <span class="otd-pick" role="group" aria-label="${esc(t("otdPick"))}">
        <select id="otdDay" aria-label="${esc(t("otdPick"))}">${Array.from({length:31},(_,i)=>i+1).map(d=>`<option value="${d}"${d===+k.slice(3)?" selected":""}>${d}</option>`).join("")}</select>
        <select id="otdMonth" aria-label="${esc(t("otdPick"))}">${OTD_MONTHS.map((_,m)=>`<option value="${m+1}"${m+1===+k.slice(0,2)?" selected":""}>${esc(new Date(2024,m,1).toLocaleDateString(lang==="fr"?"fr-FR":"en-GB",{month:"long"}))}</option>`).join("")}</select>
      </span>
      <a class="otd-arrow" href="#/aujourdhui/${otdShift(k,1)}" aria-label="${esc(t("otdNext"))}">›</a>
      ${k!==today?`<a class="pill-button ghost otd-today" href="#/aujourdhui">${esc(t("otdToday"))}</a>`:""}
    </div>
    <div id="otdBody"><p class="otd-loading">${esc(t("otdLoading"))}</p></div>
    <p class="otd-note">${esc(t("otdNote"))}</p>
  </div>`;
  const go = ()=>{ const m = +$("#otdMonth").value, d = Math.min(+$("#otdDay").value, OTD_MONTHS[m-1]);
    const v = String(m).padStart(2,"0")+"-"+String(d).padStart(2,"0"); if(otdValid(v)) location.hash = "#/aujourdhui/"+v; };
  $$("#otdDay, #otdMonth").forEach(s=>s.addEventListener("change", go));
  otdLoad(k).then(raw=>{
    if(my!==otdToken || !$("#otdBody")) return;
    const d = otdClean(raw);
    $("#otdBody").innerHTML = d ? `${otdFeatureHTML(d.featured)}
      ${d.rest.length?`<h3 class="otd-sub">${esc(t("otdAlso")(label))}</h3><div class="otd-grid">${d.rest.map(otdCardHTML).join("")}</div>`:""}`
      : `<p class="otd-loading">${esc(t("otdMissing"))}</p>`;
  });
}

/* encadré « Ce jour-là » sur l'accueil */
function renderOtdHome(){
  const box = $("#otdHome"); if(!box) return;
  const k = otdKey(new Date()), label = otdLabel(k);
  otdLoad(k).then(raw=>{
    const d = otdClean(raw);
    if(!d){ box.hidden = true; return; }
    const x = d.featured; box.hidden = false;
    box.innerHTML = `<a class="otd-home-card" href="#/aujourdhui">
      ${x.img?`<div class="otd-home-media"><img src="${esc(x.img.src)}" alt="" loading="lazy" referrerpolicy="no-referrer"></div>`:""}
      <div class="otd-home-copy">
        <div class="eyebrow"><span class="pulse"></span>${esc(t("otdTitle").toUpperCase())} · ${esc(label.toUpperCase())}</div>
        <div class="otd-year">${esc(otdYear(x.y))}</div>
        <p>${esc(x.t.charAt(0).toUpperCase()+x.t.slice(1))}</p>
        <span class="outline-button">${esc(t("otdHomeBtn")(label))} <span>→</span></span>
      </div></a>`;
  });
}
