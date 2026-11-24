/* LUMORA — pages : article, univers, bibliothèque, quiz, chronologie, « Surprends-moi », découverte du jour, lecture audio.
   Navigation par adresse (#/d/<id>, #/u/<id>, #/u/<id>/<sous-catégorie>, #/bibliotheque, #/quiz, #/quiz/<univers|all>, #/chronologie).
   Dans la version Django, ces adresses deviennent de vraies URL (/decouvertes/<slug>/, /univers/<slug>/…) rendues côté serveur pour le référencement. */

Object.assign(ui.fr, uiPages.fr);
Object.assign(ui.en, uiPages.en);
items.forEach(x=>{ x.sub = subOf[x.id] ?? 0; x.tl = timeline[x.id] || null; });
places.forEach(p=>p.items.forEach(id=>{ const x = items.find(i=>i.id===id); if(x && !x.place) x.place = p.id; }));
const placeById = id => places.find(p=>p.id===id);

const byId = id => items.find(x=>x.id===id);
const uniIndex = id => universes.findIndex(u=>u.id===id);
const uniNum = id => String(uniIndex(id)+1).padStart(2,"0");
const subName = (cat, i) => uni(cat).domains[lang][i] || "";
const uniPhotoSrc = (u, w=1280) => u.photo ? (u.photo.src || commonsImg(u.photo.file, w)) : "";
const shuffle = a => { a=[...a]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
const yearLabel = x => x.tl ? (x.tl.l ? x.tl.l[lang] : (x.tl.y<0 ? t("bce")(x.tl.y) : String(x.tl.y))) : "";

/* une image absente (pas encore téléchargée, lien cassé) disparaît et laisse le visuel de l'univers */
document.addEventListener("error", e=>{ const t = e.target; if(t && t.tagName==="IMG" && !t.closest(".universe-card")){ const b = t.closest(".article-gallery button"); if(b) b.remove(); else t.remove(); } }, true);

/* ---------- historique ---------- */
let history_ = store.get("lumora-history", []);
function pushHistory(id){
  history_ = [{id, at:Date.now()}].concat(history_.filter(h=>h.id!==id)).slice(0,60);
  store.set("lumora-history", history_);
}
function updateLibraryCount(){
  const n = saved.size, el = $("#libraryCount");
  el.hidden = !n; el.textContent = n;
}

/* ---------- carte de découverte (partagée) ---------- */
function cardHTML(x){
  return `
    <article class="discovery-card" data-id="${x.id}" tabindex="0">
      <div class="discovery-art ${x.art}${x.photo?" has-photo":""}" style="--glow:${uni(x.cat).glow}" data-icon="${uni(x.cat).icon}">${x.photo?`<img class="art-photo" src="${x.photo}" alt="" loading="lazy">`:""}<span class="art-label">${esc(uniName(x.cat).toUpperCase())} / LUMORA</span>${x.yt?`<span class="video-badge">▶ ${lang==="fr"?"Vidéo":"Video"}</span>`:""}${x.gallery&&x.gallery.length>1?`<span class="photo-count">◫ ${x.gallery.length} ${t("photos")}</span>`:""}</div>
      <div class="discovery-content">
        <div class="discovery-meta"><span>${esc(uniName(x.cat))}</span><span>${x.min} MIN ${t("readSuffix")}</span></div>
        <h3>${esc(x.title[lang])}</h3>
        <p>${esc(x.desc[lang])}</p>
        <div class="discovery-bottom"><span>${t("discover")} ↗</span><button aria-label="${esc(t("openLabel")+" : "+x.title[lang])}">↗</button></div>
      </div>
    </article>`;
}
function bindCards(root){
  root.querySelectorAll(".discovery-card").forEach(c=>{
    c.addEventListener("click",()=>openArticle(c.dataset.id));
    c.addEventListener("keydown",e=>{ if(e.key==="Enter") openArticle(c.dataset.id); });
  });
}

/* ---------- Surprends-moi ---------- */
function surprise(cat){
  const recent = new Set(history_.slice(0,12).map(h=>h.id));
  const current = route && route.name==="d" ? route.id : null;
  let pool = items.filter(x=>(!cat || x.cat===cat) && x.id!==current);
  const fresh = pool.filter(x=>!recent.has(x.id));
  if(fresh.length) pool = fresh;
  const x = pool[Math.floor(Math.random()*pool.length)];
  showToast(t("surpriseToast"));
  location.hash = "#/d/"+x.id;
}
document.addEventListener("click", e=>{
  const b = e.target.closest("[data-surprise]");
  if(b){ e.preventDefault(); surprise(b.dataset.surprise || null); }
});

/* ---------- découverte du jour ---------- */
function dailyItem(){
  const day = Math.floor((Date.now() - new Date().getTimezoneOffset()*60000) / 86400000);
  return items[(day*37) % items.length];
}
function renderDaily(){
  const x = dailyItem();
  const dateStr = new Date().toLocaleDateString(lang==="fr"?"fr-FR":"en-GB",{weekday:"long",day:"numeric",month:"long"});
  $("#daily").innerHTML = `
    <a class="daily-card" href="#/d/${x.id}" style="--glow:${uni(x.cat).glow}">
      <div class="daily-media">${x.photo?`<img src="${x.photo}" alt="" loading="lazy">`:""}</div>
      <div class="daily-copy">
        <div class="eyebrow"><span class="pulse"></span>${esc(t("dailyEyebrow"))} · ${esc(dateStr.toUpperCase())}</div>
        <h2>${esc(x.title[lang])}</h2>
        <p>${esc(x.lead[lang])}</p>
        <div class="daily-meta"><span>${esc(uniName(x.cat))}</span><span>•</span><span>${x.min} MIN ${t("readSuffix")}</span></div>
        <span class="outline-button">${esc(t("read"))} <span>↗</span></span>
        <small>${esc(t("dailyNote"))}</small>
      </div>
    </a>`;
}

/* ---------- lecture audio (synthèse vocale du navigateur) ---------- */
const tts = window.speechSynthesis || null;
let ttsState = "idle";
function stopAudio(){ if(tts){ tts.cancel(); } ttsState = "idle"; updateAudioButton(); }
function updateAudioButton(){
  const b = $("#audioBtn"); if(!b) return;
  b.innerHTML = ttsState==="playing" ? `❚❚ <span>${t("pause")}</span>` : ttsState==="paused" ? `▶ <span>${t("resume")}</span>` : `▶ <span>${t("listen")}</span>`;
  b.classList.toggle("active", ttsState!=="idle");
  const s = $("#audioStop"); if(s) s.hidden = ttsState==="idle";
}
function playArticle(x){
  if(!tts){ showToast(t("audioUnsupported")); return; }
  if(ttsState==="playing"){ tts.pause(); ttsState="paused"; updateAudioButton(); return; }
  if(ttsState==="paused"){ tts.resume(); ttsState="playing"; updateAudioButton(); return; }
  tts.cancel();
  const _L = longOf(x); const text = [x.title[lang], x.lead[lang], _L&&_L[lang]?_L[lang].key.join(" "):"", t("modalSection")+".", x.body[lang], _L&&_L[lang]?_L[lang].sections.map(s=>s.h+". "+s.p.join(" ")).join(" "):""].join(" ");
  const chunks = text.match(/[^.!?…]+[.!?…]*\s*/g) || [text];
  const voice = pickVoice();
  chunks.forEach((c,i)=>{
    const u = new SpeechSynthesisUtterance(c.trim());
    u.lang = voice && !/multilingual|multilingue/i.test(voice.name) ? voice.lang : (lang==="fr" ? "fr-FR" : "en-GB"); if(voice) u.voice = voice; u.rate = 0.94; u.pitch = 0.96;
    if(i===chunks.length-1) u.onend = ()=>{ ttsState="idle"; updateAudioButton(); };
    tts.speak(u);
  });
  ttsState = "playing"; updateAudioButton();
}

/* voix : celles installées sur l'appareil ; les voix « naturelles » (Edge, Chrome) sont proposées en premier */
/* Voix par défaut : Vivienne multilingue (Edge), qui lit le français et l'anglais */
const isDefaultVoice = v => /vivienne/i.test(v.name) && /multilingual|multilingue/i.test(v.name);
const voicePrefs = {fr:["henri","remy","rémy","denise","vivienne","eloise","natural","online","google","thomas","amélie","amelie"], en:["guy","ryan","andrew","brian","natural","online","google uk english male","google","daniel"]};
function langVoices(){
  if(!tts) return [];
  const code = lang==="fr" ? "fr" : "en";
  const rank = v => { if(isDefaultVoice(v)) return -1; const n = v.name.toLowerCase(); const i = voicePrefs[lang].findIndex(k=>n.includes(k)); return i<0 ? 99 : i; };
  return tts.getVoices().filter(v=>(v.lang && v.lang.toLowerCase().startsWith(code)) || /multilingual|multilingue/i.test(v.name)).sort((a,b)=>rank(a)-rank(b));
}
function pickVoice(){
  const list = langVoices(), want = store.get("lumora-voice-"+lang, "");
  return list.find(v=>v.name===want) || list[0] || null;
}
function fillVoices(){
  const sel = $("#voiceSel"); if(!sel) return;
  if(!tts){ sel.closest(".settings-row").hidden = true; return; }
  const list = langVoices(), cur = pickVoice();
  sel.innerHTML = list.length ? list.map(v=>`<option value="${esc(v.name)}" ${cur&&v.name===cur.name?"selected":""}>${esc(v.name.replace(/^Microsoft\s+/,"").replace(/\s*-\s*.*$/,"")+(isDefaultVoice(v)?" ★":""))}</option>`).join("") : `<option value="">${esc(t("voiceDefault"))}</option>`;
}
if(tts) tts.addEventListener ? tts.addEventListener("voiceschanged", fillVoices) : (tts.onvoiceschanged = fillVoices);

/* ---------- paramètres (voix de lecture) ---------- */
function renderSettings(){
  const pop = $("#settingsPop");
  pop.innerHTML = `<h3>${esc(t("settings"))}</h3>
    <label class="settings-row"><span>${esc(t("voiceSetting"))}</span><select id="voiceSel"></select></label>
    <button class="pill-button ghost" id="voiceTest">▶ <span>${esc(t("voiceTest"))}</span></button>
    <p>${esc(t("voiceNote"))}</p>`;
  fillVoices();
  $("#voiceSel").addEventListener("change", e=>{ store.set("lumora-voice-"+lang, e.target.value); if(ttsState!=="idle"){ stopAudio(); } });
  $("#voiceTest").addEventListener("click", ()=>{
    if(!tts){ showToast(t("audioUnsupported")); return; }
    stopAudio(); const v = pickVoice(), u = new SpeechSynthesisUtterance(t("voiceSample"));
    if(v){ u.voice = v; u.lang = v.lang; } u.rate = 0.94; tts.speak(u);
  });
}
$("#settingsBtn").addEventListener("click", e=>{
  e.stopPropagation(); const pop = $("#settingsPop");
  if(pop.hidden){ renderSettings(); pop.hidden = false; $("#settingsBtn").setAttribute("aria-expanded","true"); }
  else { pop.hidden = true; $("#settingsBtn").setAttribute("aria-expanded","false"); }
});
document.addEventListener("click", e=>{ const pop = $("#settingsPop"); if(!pop.hidden && !pop.contains(e.target)){ pop.hidden = true; $("#settingsBtn").setAttribute("aria-expanded","false"); } });
document.addEventListener("keydown", e=>{ if(e.key==="Escape") $("#settingsPop").hidden = true; });

/* ---------- détour inattendu : un lien vers un autre univers ---------- */
function detourOf(x){
  const rel = new Set(relatedCache.map(y=>y.id));
  const p = x.place ? placeById(x.place) : null;
  const samePlace = p ? p.items.map(byId).filter(y=>y && y.cat!==x.cat && y.id!==x.id) : [];
  if(samePlace.length) return {y:samePlace[Math.floor(Math.random()*samePlace.length)], why:t("detourSame")(p.name[lang])};
  const kw = new Set(x.facts.fr.slice(1).map(norm));
  const linked = items.filter(y=>y.cat!==x.cat && !rel.has(y.id) && y.facts.fr.some(f=>kw.has(norm(f))));
  const pool = linked.length ? linked : items.filter(y=>y.cat!==x.cat && !rel.has(y.id));
  return {y:pool[Math.floor(Math.random()*pool.length)], why:t("detourOther")};
}
let relatedCache = [], detourCache = null;
function detourHTML(x){
  const {y, why} = detourCache || detourOf(x), u = uni(y.cat);
  return `<section class="detour" style="--glow:${u.glow}">
    <div class="detour-copy"><div class="eyebrow">✦ ${esc(t("detourEyebrow"))}</div><h2>${esc(t("detourTitle"))}</h2><p>${esc(why)}</p></div>
    <a class="detour-card" href="#/d/${y.id}">${y.photo?`<img src="${y.photo}" alt="" loading="lazy">`:""}<span><small>${u.icon} ${esc(u.name[lang])}</small><strong>${esc(y.title[lang])}</strong><em>${esc(y.desc[lang])}</em></span><b>↗</b></a>
  </section>`;
}

/* ---------- favoris ---------- */
function saveLabel(id){ return (saved.has(id)?"♥ ":"♡ ")+`<span>${saved.has(id)?t("saved"):t("save")}</span>`; }
function toggleSaveId(id){
  saved.has(id) ? saved.delete(id) : saved.add(id);
  store.set("lumora-saved", [...saved]);
  showToast(saved.has(id) ? t("toastAdd") : t("toastRemove"));
  updateLibraryCount();
}

/* ---------- partage ---------- */
async function shareArticle(x){
  const url = location.href;
  try{
    if(navigator.share){ await navigator.share({title:x.title[lang]+" — LUMORA", text:x.desc[lang], url}); return; }
  }catch(e){ if(e && e.name==="AbortError") return; }
  try{ await navigator.clipboard.writeText(url); showToast(t("linkCopied")); }
  catch(e){ window.prompt(t("share"), url); }
}

/* ---------- visionneuse ---------- */
let lbList = [], lbIndex = 0;
function openLightbox(list, i){ lbList = list; lbIndex = i; $("#lightbox").hidden = false; showLb(); document.body.style.overflow="hidden"; }
function showLb(){ $("#lightbox img").src = lbList[lbIndex]; $$("#lightbox .lightbox-nav").forEach(b=>b.hidden = lbList.length<2); }
function closeLightbox(){ $("#lightbox").hidden = true; document.body.style.overflow=""; }
$("#lightbox .lightbox-close").addEventListener("click", closeLightbox);
$("#lightbox").addEventListener("click", e=>{ if(e.target.id==="lightbox") closeLightbox(); });
$("#lightbox .prev").addEventListener("click", ()=>{ lbIndex=(lbIndex-1+lbList.length)%lbList.length; showLb(); });
$("#lightbox .next").addEventListener("click", ()=>{ lbIndex=(lbIndex+1)%lbList.length; showLb(); });
document.addEventListener("keydown", e=>{
  if($("#lightbox").hidden) return;
  if(e.key==="Escape") closeLightbox();
  if(e.key==="ArrowLeft") $("#lightbox .prev").click();
  if(e.key==="ArrowRight") $("#lightbox .next").click();
});

/* ---------- référencement : titre, description, données structurées ---------- */
function setMeta(title, desc, ld){
  document.title = title;
  document.querySelector('meta[name="description"]').setAttribute("content", desc);
  let s = document.getElementById("ldjson");
  if(!ld){ if(s) s.remove(); return; }
  if(!s){ s = document.createElement("script"); s.type="application/ld+json"; s.id="ldjson"; document.head.appendChild(s); }
  s.textContent = JSON.stringify(ld);
}

/* =================== PAGES =================== */

function relatedOf(x, skip){
  const kw = new Set(x.facts.fr.map(norm));
  const score = y => (y.cat===x.cat?2:0) + (y.cat===x.cat && y.sub===x.sub?3:0) + y.facts.fr.filter(f=>kw.has(norm(f))).length*2 + (x.tl&&y.tl&&Math.abs(x.tl.y-y.tl.y)<150?1:0);
  return items.filter(y=>y.id!==x.id && y.id!==skip).map(y=>[score(y),Math.random(),y]).sort((a,b)=>b[0]-a[0]||a[1]-b[1]).slice(0,4).map(a=>a[2]);
}


/* ---- Articles longs + vidéos YouTube ---- */
const LA = {
  fr:{ess:"L'essentiel en 30 secondes",nums:"Les chiffres clés",did:"Le saviez-vous ?",open:"Ce qu'on ne sait pas encore",src:"Sources",vid:"En vidéo",play:"Lire la vidéo",onYt:"Ouvrir sur YouTube",ytNote:"La vidéo se charge depuis YouTube seulement si vous cliquez.",badge:"Vidéo",verified:"Article vérifié à partir des sources ci-dessous."},
  en:{ess:"The essentials in 30 seconds",nums:"Key figures",did:"Did you know?",open:"What we don't know yet",src:"Sources",vid:"Watch",play:"Play video",onYt:"Open on YouTube",ytNote:"The video only loads from YouTube when you click.",badge:"Video",verified:"Article checked against the sources below."}
};
const la = k => LA[lang][k];
function longOf(x){ return (typeof longArticles!=="undefined" && longArticles[x.id]) || null; }
function longText(L){ if(!L) return ""; return [L.key.join(" "), ...L.sections.flatMap(s=>[s.h, ...s.p]), L.numbers.map(n=>n.join(" ")).join(" "), L.didyou.join(" "), L.open.join(" ")].join(" "); }
(function initLong(){
  if(typeof longArticles==="undefined") return;
  items.forEach(x=>{
    const A = longArticles[x.id]; if(!A) return;
    const dead = window.LUMORA_DEAD_VIDEOS || [];
    if(A.video && !dead.includes(A.video.id)) x.yt = A.video;
    if(A.fr && A.en){
      const words = longText(A.fr).split(/\s+/).length + String(x.body.fr).split(/\s+/).length;
      x.min = Math.max(x.min, Math.round(words/200));
    }
  });
})();
function ytHTML(v){
  const id = encodeURIComponent(v.id);
  return `<h2>▶ ${esc(la("vid"))}</h2>
  <div class="yt-facade" data-yt="${id}" data-title="${esc(v.title[lang])}">
    <img src="https://i.ytimg.com/vi/${id}/hqdefault.jpg" alt="" loading="lazy">
    <button class="yt-play" aria-label="${esc(la("play"))} : ${esc(v.title[lang])}"><span>▶</span></button>
    <div class="yt-cap"><strong>${esc(v.title[lang])}</strong><small>${esc(v.channel)} · YouTube</small></div>
  </div>
  <p class="yt-note">${esc(la("ytNote"))} <a href="https://www.youtube.com/watch?v=${id}" target="_blank" rel="noopener">${esc(la("onYt"))} ↗</a></p>`;
}
function bindYT(root){
  root.querySelectorAll(".yt-facade").forEach(f=>{
    const go=()=>{ f.innerHTML = `<iframe src="https://www.youtube-nocookie.com/embed/${f.dataset.yt}?autoplay=1&rel=0" title="${f.dataset.title}" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`; f.classList.add("playing"); };
    f.querySelector(".yt-play").addEventListener("click",go);
  });
}
function longHTML(x){
  const A = longOf(x); if(!A || !A[lang]) return `<h2>${esc(t("modalSection"))}</h2><p class="article-body">${esc(x.body[lang])}</p>`;
  const L = A[lang];
  return `<section class="la-essential"><h2>⚡ ${esc(la("ess"))}</h2><ul>${L.key.map(k=>`<li>${esc(k)}</li>`).join("")}</ul></section>
  <h2>${esc(t("modalSection"))}</h2><p class="article-body">${esc(x.body[lang])}</p>
  ${L.sections.map(s=>`<h2>${esc(s.h)}</h2>${s.p.map(p=>`<p class="article-body">${esc(p)}</p>`).join("")}`).join("")}
  <h2>${esc(la("nums"))}</h2><div class="la-numbers">${L.numbers.map(n=>`<div><strong>${esc(n[0])}</strong><span>${esc(n[1])}</span></div>`).join("")}</div>
  <div class="la-didyou"><h3>💡 ${esc(la("did"))}</h3><ul>${L.didyou.map(d=>`<li>${esc(d)}</li>`).join("")}</ul></div>
  <h2>${esc(la("open"))}</h2><ul class="la-open">${L.open.map(o=>`<li>${esc(o)}</li>`).join("")}</ul>`;
}
function sourcesHTML(x){
  const A = longOf(x); if(!A || !A.sources) return `<div class="source-note"><span>ⓘ</span><span>${esc(t("prototypeSource"))}</span></div>`;
  return `<div class="la-sources"><h2>${esc(la("src"))}</h2><p>${esc(la("verified"))}</p><ol>${A.sources.map(s=>`<li><a href="${esc(s.u)}" target="_blank" rel="noopener">${esc(s.t)} ↗</a></li>`).join("")}</ol></div>`;
}

function renderArticle(id){
  const x = byId(id);
  if(!x){ return renderNotFound(); }
  const u = uni(x.cat), same = items.filter(y=>y.cat===x.cat), k = same.indexOf(x);
  const prev = same[(k-1+same.length)%same.length], next = same[(k+1)%same.length];
  const gal = x.gallery && x.gallery.length ? x.gallery : (x.photo ? [x.photo] : []);
  pushHistory(x.id);
  relatedCache = [];
  detourCache = detourOf(x);
  relatedCache = relatedOf(x, detourCache.y.id);
  setMeta(`${x.title[lang]} — LUMORA`, x.desc[lang], {"@context":"https://schema.org","@type":"Article","headline":x.title[lang],"description":x.desc[lang],"inLanguage":lang,"image":gal.slice(0,3),"articleSection":u.name[lang],"keywords":x.facts[lang].join(", "),"publisher":{"@type":"Organization","name":"LUMORA"}});
  $("#page").innerHTML = `
  <article class="article-page" style="--glow:${u.glow};--shade:${u.shade}">
    <nav class="crumbs" aria-label="breadcrumb"><a href="#/">${esc(t("home"))}</a><span>/</span><a href="#/u/${u.id}">${esc(u.name[lang])}</a><span>/</span><a href="#/u/${u.id}/${x.sub}">${esc(subName(x.cat,x.sub))}</a></nav>
    <header class="article-hero">
      <div class="article-hero-media ${x.art}${x.photo?" has-photo":""}" data-icon="${u.icon}">${x.photo?`<img src="${x.photo}" alt="${esc(x.title[lang])}">`:""}</div>
      <div class="article-hero-copy">
        <div class="eyebrow">${esc(u.name[lang].toUpperCase())} · ${esc(subName(x.cat,x.sub).toUpperCase())}</div>
        <h1 tabindex="-1">${esc(x.title[lang])}</h1>
        <p class="article-lead">${esc(x.lead[lang])}</p>
        <div class="article-meta"><span>◷ ${x.min} MIN ${t("readSuffix")}</span>${x.tl?`<span>⌛ ${esc(yearLabel(x))}</span>`:""}</div>
        <div class="article-actions">
          <button class="pill-button" id="audioBtn"></button>
          <button class="pill-button ghost" id="audioStop" hidden>■ <span>${t("stop")}</span></button>
          <button class="pill-button ghost" id="saveBtn">${saveLabel(x.id)}</button>
          <button class="pill-button ghost" id="shareBtn">⤴ <span>${t("share")}</span></button>
          <button class="pill-button ghost" data-surprise>✦ <span>${t("surprise")}</span></button>
        </div>
      </div>
    </header>
    <div class="article-layout">
      <div class="article-main">
        ${longHTML(x)}
        ${x.yt?ytHTML(x.yt):""}
        ${gal.length>1?`<h2>${esc(t("gallery"))}</h2><div class="article-gallery">${gal.map((g,i)=>`<button data-i="${i}" aria-label="${t("photo")} ${i+1}"><img src="${g}" alt="" loading="lazy"></button>`).join("")}</div>`:""}
        ${x.credits?`<p class="photo-credits">◫ ${esc(lang==="fr"?"Photos":"Photos")} : ${x.credits.map(esc).join(" · ")}</p>`:""}
        ${x.video?`<h2>${esc(t("video"))}</h2><div class="article-video"><video controls preload="none" src="${x.video}"></video></div>`:""}
        ${sourcesHTML(x)}
        <div class="prev-next"><div class="eyebrow">${esc(t("prevNext").toUpperCase())}</div>
          <a href="#/d/${prev.id}"><small>${t("previous")}</small><span>${esc(prev.title[lang])}</span></a>
          <a href="#/d/${next.id}" class="next"><small>${t("next")}</small><span>${esc(next.title[lang])}</span></a>
        </div>
      </div>
      <aside class="article-aside">
        <div class="keybox">
          <h3>${esc(t("keyInfo"))}</h3>
          <dl>
            <dt>${lang==="fr"?"Univers":"Universe"}</dt><dd><a href="#/u/${u.id}">${u.icon} ${esc(u.name[lang])}</a></dd>
            <dt>${esc(t("subcat"))}</dt><dd><a href="#/u/${u.id}/${x.sub}">${esc(subName(x.cat,x.sub))}</a></dd>
            ${x.tl?`<dt>${esc(t("period"))}</dt><dd>${esc(yearLabel(x))}</dd>`:""}
            <dt>${esc(t("readingTime"))}</dt><dd>${t("minutes")(x.min)}</dd>
          </dl>
          <div class="keychips">${x.facts[lang].map(f=>`<span>${esc(f)}</span>`).join("")}</div>
          ${x.place?`<a class="text-link" href="#/atlas/${x.place}">◍ ${esc(t("seeOnMap"))} · ${esc(placeById(x.place).name[lang])} ↗</a>`:""}
          ${x.tl?`<a class="text-link" href="#/chronologie">⌛ ${esc(t("navTimeline"))} ↗</a>`:""}
          <a class="text-link" href="#/quiz/${u.id}">? ${esc(t("navQuiz"))} ${esc(u.name[lang])} ↗</a>
        </div>
      </aside>
    </div>
    ${detourHTML(x)}
    <section class="related">
      <div class="section-heading"><div><h2>${esc(t("related"))}<span class="accent">.</span></h2></div><a class="text-link" href="#/u/${u.id}">${esc(t("backTo")(u.name[lang]))}</a></div>
      <div class="discovery-grid">${relatedCache.map(cardHTML).join("")}</div>
    </section>
  </article>`;
  bindCards($("#page")); bindYT($("#page"));
  updateAudioButton();
  $("#audioBtn").addEventListener("click", ()=>playArticle(x));
  $("#audioStop").addEventListener("click", stopAudio);
  $("#saveBtn").addEventListener("click", ()=>{ toggleSaveId(x.id); $("#saveBtn").innerHTML = saveLabel(x.id); });
  $("#shareBtn").addEventListener("click", ()=>shareArticle(x));
  $$("#page .article-gallery button").forEach(b=>b.addEventListener("click", ()=>openLightbox(gal, +b.dataset.i)));
  const heroImg = $("#page .article-hero-media img");
  if(heroImg) heroImg.addEventListener("click", ()=>openLightbox(gal, 0));
}

function renderUniversePage(id, sub){
  const u = uni(id);
  if(!u) return renderNotFound();
  const list = items.filter(x=>x.cat===id);
  const subs = u.domains[lang].map((name,i)=>({i, name, list:list.filter(x=>x.sub===i)}));
  const sel = sub==null || isNaN(sub) || !subs[sub] ? null : sub;
  const shownList = sel==null ? list : subs[sel].list;
  const k = uniIndex(id), nextU = universes[(k+1)%universes.length];
  setMeta(`${u.name[lang]} — LUMORA`, uniIntro[id][lang], {"@context":"https://schema.org","@type":"CollectionPage","name":u.name[lang],"description":uniIntro[id][lang],"inLanguage":lang});
  const tile = (s) => {
    const img = s.list.find(x=>x.photo);
    return `<a class="sub-tile${sel===s.i?" selected":""}${s.list.length?"":" empty"}" href="#/u/${id}/${s.i}" ${s.list.length?"":'aria-disabled="true"'}>
      ${img?`<img src="${img.photo}" alt="" loading="lazy">`:(u.photo?`<img src="${uniPhotoSrc(u,640)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:"")}
      <span class="sub-name">${esc(s.name)}</span>
      <span class="sub-count">${s.list.length?esc(t("discoveriesCount")(s.list.length)):esc(t("comingSoon"))}</span></a>`;
  };
  $("#page").innerHTML = `
  <div class="universe-page" style="--glow:${u.glow};--shade:${u.shade}">
    <section class="uni-hero">
      ${u.photo?`<img class="uni-hero-bg" src="${uniPhotoSrc(u)}" alt="" referrerpolicy="no-referrer">`:""}
      <div class="uni-hero-copy">
        <a class="back-link" href="#explore">${esc(t("allUniverses"))}</a>
        <div class="eyebrow"><span class="uni-icon">${u.icon}</span> ${esc(t("universeLabel")(uniNum(id)))}</div>
        <h1 tabindex="-1">${esc(u.name[lang])}</h1>
        <p>${esc(uniIntro[id][lang])}</p>
        <div class="uni-stats"><span>${esc(t("discoveriesCount")(list.length))}</span><span>•</span><span>${subs.length} ${esc(t("subcats").toLowerCase())}</span></div>
        <div class="article-actions">
          <button class="pill-button" data-surprise="${id}">✦ <span>${esc(t("surpriseHere"))}</span></button>
          <a class="pill-button ghost" href="#/quiz/${id}">? <span>${esc(t("navQuiz"))} ${esc(u.name[lang])}</span></a>
        </div>
      </div>
    </section>
    <section class="section sub-section">
      <div class="section-heading"><div><div class="eyebrow">${esc(u.name[lang].toUpperCase())}</div><h2>${esc(t("subcats"))}<span class="accent">.</span></h2></div></div>
      <div class="sub-grid">
        <a class="sub-tile all${sel==null?" selected":""}" href="#/u/${id}"><span class="sub-icon">${u.icon}</span><span class="sub-name">${esc(t("allSubs"))}</span><span class="sub-count">${esc(t("discoveriesCount")(list.length))}</span></a>
        ${subs.map(tile).join("")}
      </div>
    </section>
    <section class="section sub-list" id="subList">
      <div class="section-heading"><div><h2>${esc(sel==null?t("allSubs"):subs[sel].name)}<span class="accent">.</span></h2></div></div>
      ${shownList.length?`<div class="discovery-grid">${shownList.map(cardHTML).join("")}</div>`:`<div class="empty-state"><span>✧</span><h3>${esc(t("comingSoon"))}</h3><p>${esc(t("subEmpty"))}</p></div>`}
    </section>
    <section class="section uni-next">
      <div class="eyebrow">${esc(t("otherUniverses").toUpperCase())}</div>
      <a class="next-universe" href="#/u/${nextU.id}" style="--glow:${nextU.glow}">
        ${nextU.photo?`<img src="${uniPhotoSrc(nextU,960)}" alt="" loading="lazy" referrerpolicy="no-referrer">`:""}
        <span class="eyebrow">${esc(t("nextUniverse").toUpperCase())} · ${esc(t("universeLabel")(uniNum(nextU.id)))}</span>
        <strong>${nextU.icon} ${esc(nextU.name[lang])} →</strong>
        <span>${esc(uniIntro[nextU.id][lang])}</span>
      </a>
      <div class="uni-chips">${universes.filter(v=>v.id!==id).map(v=>`<a href="#/u/${v.id}">${v.icon} ${esc(v.name[lang])}</a>`).join("")}</div>
    </section>
  </div>`;
  $$("#page .sub-tile.empty").forEach(a=>a.addEventListener("click", e=>{ e.preventDefault(); showToast(t("subEmpty")); }));
  bindCards($("#page"));
}

let libTab = "saved";
function renderLibrary(){
  setMeta(`${t("libraryTitle")} — LUMORA`, t("libraryIntro"));
  const savedList = [...saved].map(byId).filter(Boolean);
  const hist = history_.map(h=>({...h, x:byId(h.id)})).filter(h=>h.x);
  const last = hist[0];
  const now = Date.now();
  $("#page").innerHTML = `
  <div class="section library-page">
    <nav class="crumbs"><a href="#/">${esc(t("home"))}</a></nav>
    <div class="section-heading"><div><div class="eyebrow">${esc(t("libraryEyebrow"))}</div><h1 tabindex="-1">${esc(t("libraryTitle"))}<span class="accent">.</span></h1></div><p>${esc(t("libraryIntro"))}</p></div>
    ${last?`<a class="resume-card" href="#/d/${last.x.id}">${last.x.photo?`<img src="${last.x.photo}" alt="">`:""}<span><small class="eyebrow">${esc(t("resumeExploring").toUpperCase())}</small><strong>${esc(last.x.title[lang])}</strong><em>${esc(uniName(last.x.cat))} · ${esc(t("ago")(now-last.at))}</em></span><b>↗</b></a>`:""}
    <div class="tabs" role="tablist">
      <button role="tab" class="${libTab==="saved"?"selected":""}" data-tab="saved">♥ ${esc(t("tabSaved")(savedList.length))}</button>
      <button role="tab" class="${libTab==="history"?"selected":""}" data-tab="history">◷ ${esc(t("tabHistory")(hist.length))}</button>
    </div>
    <div class="tab-panel">
      ${libTab==="saved"
        ? (savedList.length?`<div class="discovery-grid">${savedList.map(cardHTML).join("")}</div>`:`<div class="empty-state"><span>♡</span><p>${esc(t("savedEmpty"))}</p><button class="outline-button" data-surprise>✦ ${esc(t("surprise"))}</button></div>`)
        : (hist.length?`<ul class="history-list">${hist.map(h=>`<li><a href="#/d/${h.x.id}">${h.x.photo?`<img src="${h.x.photo}" alt="" loading="lazy">`:`<i></i>`}<span><strong>${esc(h.x.title[lang])}</strong><em>${esc(uniName(h.x.cat))}</em></span><time>${esc(t("ago")(now-h.at))}</time></a></li>`).join("")}</ul><button class="text-link" id="clearHistory">${esc(t("clearHistory"))}</button>`:`<div class="empty-state"><span>◷</span><p>${esc(t("historyEmpty"))}</p><button class="outline-button" data-surprise>✦ ${esc(t("surprise"))}</button></div>`)}
    </div>
  </div>`;
  $$("#page .tabs button").forEach(b=>b.addEventListener("click", ()=>{ libTab=b.dataset.tab; renderLibrary(); }));
  const c = $("#clearHistory"); if(c) c.addEventListener("click", ()=>{ history_=[]; store.set("lumora-history",[]); renderLibrary(); });
  bindCards($("#page"));
}

/* ---------- quiz ---------- */
let quiz = null;
const quizBest = () => store.get("lumora-quiz-best", {});
function buildQuiz(scope){
  const pool = scope==="all" ? items : items.filter(x=>x.cat===scope);
  const written = shuffle(quizBank.filter(q=>scope==="all"||q.cat===scope)).slice(0, scope==="all"?4:2).map(q=>{
    const order = shuffle([0,1,2,3]);
    return {type:"text", q:q.q, opts:order.map(i=>({fr:q.o.fr[i],en:q.o.en[i]})), a:order.indexOf(q.a), ref:q.ref};
  });
  const need = Math.min(8 - written.length, pool.filter(x=>x.photo).length);
  const photo = shuffle(pool.filter(x=>x.photo)).slice(0, need).map(x=>{
    const near = shuffle(items.filter(y=>y.id!==x.id && y.cat===x.cat));
    const far = shuffle(items.filter(y=>y.id!==x.id && y.cat!==x.cat));
    const wrong = near.concat(far).slice(0,3);
    const opts = shuffle([x, ...wrong]);
    return {type:"photo", img:x.photo, opts:opts.map(y=>y.title), a:opts.indexOf(x), ref:x.id};
  });
  return {scope, qs:shuffle(written.concat(photo)), i:0, score:0, answered:null};
}
function renderQuiz(scope){
  setMeta(`${t("quizTitle")} — LUMORA`, t("quizIntro"));
  if(!scope){
    const best = quizBest();
    const opt = (id, label, icon, glow) => `<a class="quiz-pick" href="#/quiz/${id}" style="--glow:${glow}"><span class="sub-icon">${icon}</span><strong>${esc(label)}</strong>${best[id]?`<small>${esc(t("best")(best[id]))}</small>`:""}</a>`;
    $("#page").innerHTML = `
    <div class="section quiz-page">
      <nav class="crumbs"><a href="#/">${esc(t("home"))}</a></nav>
      <div class="section-heading"><div><div class="eyebrow">${esc(t("quizEyebrow"))}</div><h1 tabindex="-1">${esc(t("quizTitle"))}<span class="accent">.</span></h1></div><p>${esc(t("quizIntro"))}</p></div>
      <div class="quiz-grid">${opt("all", t("quizAll"), "✧", "#75c5ff66")}${universes.map(u=>opt(u.id, u.name[lang], u.icon, u.glow)).join("")}</div>
    </div>`;
    return;
  }
  if(scope!=="all" && !uni(scope)) return renderNotFound();
  if(!quiz || quiz.scope!==scope || quiz.done) quiz = buildQuiz(scope);
  drawQuiz();
}
function drawQuiz(){
  const Q = quiz, n = Q.qs.length, label = Q.scope==="all" ? t("quizAll") : uniName(Q.scope);
  const head = `<nav class="crumbs"><a href="#/">${esc(t("home"))}</a><span>/</span><a href="#/quiz">${esc(t("navQuiz"))}</a><span>/</span><span>${esc(label)}</span></nav>`;
  if(Q.i >= n){
    Q.done = true;
    const best = quizBest(); const prevBest = best[Q.scope] ? +best[Q.scope].split("/")[0] : -1;
    if(Q.score > prevBest){ best[Q.scope] = `${Q.score}/${n}`; store.set("lumora-quiz-best", best); }
    $("#page").innerHTML = `<div class="section quiz-page">${head}
      <div class="quiz-card result"><div class="eyebrow">${esc(label.toUpperCase())}</div>
        <div class="quiz-score">${t("score")(Q.score,n)}</div><p>${esc(t("scoreMsg")(Q.score,n))}</p>
        <small>${esc(t("best")(quizBest()[Q.scope]))}</small>
        <div class="article-actions"><button class="pill-button" id="replay">↻ <span>${esc(t("replay"))}</span></button><a class="pill-button ghost" href="#/quiz">${esc(t("otherQuiz"))}</a></div>
      </div></div>`;
    $("#replay").addEventListener("click", ()=>{ quiz = buildQuiz(Q.scope); drawQuiz(); });
    return;
  }
  const q = Q.qs[Q.i], ans = Q.answered;
  const text = q.type==="photo" ? t("photoQ") : q.q[lang];
  $("#page").innerHTML = `<div class="section quiz-page">${head}
    <div class="quiz-card">
      <div class="quiz-progress"><span style="width:${(Q.i/n)*100}%"></span></div>
      <div class="eyebrow">${esc(t("question")(Q.i+1,n).toUpperCase())} · ${esc(label.toUpperCase())}</div>
      ${q.type==="photo"?`<div class="quiz-img"><img src="${q.img}" alt=""></div>`:""}
      <h2>${esc(text)}</h2>
      <div class="quiz-options">${q.opts.map((o,i)=>`<button data-i="${i}" ${ans!=null?"disabled":""} class="${ans==null?"":i===q.a?"right":i===ans?"wrong":""}"><b>${"ABCD"[i]}</b>${esc(o[lang])}</button>`).join("")}</div>
      ${ans!=null?`<div class="quiz-feedback ${ans===q.a?"ok":"ko"}">${esc(ans===q.a?t("correct"):t("wrong")(q.opts[q.a][lang]))}
        <a href="#/d/${q.ref}">${esc(t("readMore"))}</a></div>
        <button class="pill-button" id="nextQ">${esc(Q.i+1<n?t("nextQ"):t("seeResult"))}</button>`:""}
    </div></div>`;
  $$("#page .quiz-options button").forEach(b=>b.addEventListener("click", ()=>{
    Q.answered = +b.dataset.i; if(Q.answered===q.a) Q.score++; drawQuiz();
  }));
  const nb = $("#nextQ"); if(nb){ nb.addEventListener("click", ()=>{ Q.i++; Q.answered=null; drawQuiz(); window.scrollTo({top:0}); }); nb.focus({preventScroll:true}); }
}

/* ---------- chronologie ---------- */
let tlFilter = "all", tlDrag = null, tlMoved = false;
window.addEventListener("pointermove", e=>{ if(!tlDrag) return; const dx=e.clientX-tlDrag.x; if(Math.abs(dx)>4){ tlMoved=true; tlDrag.sc.classList.add("dragging"); } tlDrag.sc.scrollLeft = tlDrag.left-dx; });
window.addEventListener("pointerup", ()=>{ if(!tlDrag) return; const sc=tlDrag.sc; tlDrag=null; setTimeout(()=>sc.classList.remove("dragging"),0); });
function renderTimeline(){
  setMeta(`${t("timelineTitle")} — LUMORA`, t("timelineIntro"));
  const dated = items.filter(x=>x.tl).sort((a,b)=>a.tl.y-b.tl.y);
  const cats = universes.filter(u=>dated.some(x=>x.cat===u.id));
  const list = dated.filter(x=>tlFilter==="all"||x.cat===tlFilter);
  const eras = t("eras").map(([name,a,b])=>({name, list:list.filter(x=>x.tl.y>=a && x.tl.y<b)})).filter(e=>e.list.length);
  $("#page").innerHTML = `
  <div class="section timeline-page">
    <nav class="crumbs"><a href="#/">${esc(t("home"))}</a></nav>
    <div class="section-heading"><div><div class="eyebrow">${esc(t("timelineEyebrow"))}</div><h1 tabindex="-1">${esc(t("timelineTitle"))}<span class="accent">.</span></h1></div><p>${esc(t("timelineIntro"))}</p></div>
    <div class="filter-row">${[`<button class="filter-chip${tlFilter==="all"?" selected":""}" data-f="all">${esc(t("filterAll"))} · ${dated.length}</button>`].concat(cats.map(u=>`<button class="filter-chip${tlFilter===u.id?" selected":""}" data-f="${u.id}">${u.icon} ${esc(u.name[lang])}</button>`)).join("")}</div>
    <div class="tl-controls"><span>⟷ ${esc(t("dragTime"))}</span><span><button class="tl-arrow" data-dir="-1" aria-label="←">←</button><button class="tl-arrow" data-dir="1" aria-label="→">→</button></span></div>
    <div class="tl-scroll" id="tlScroll"><div class="tl-track">
      ${eras.map(e=>`<section class="tl-era"><h3>${esc(e.name)}</h3><div class="tl-nodes">${e.list.map(x=>`
        <a class="tl-node" href="#/d/${x.id}" style="--glow:${uni(x.cat).glow}">
          <span class="tl-year">${esc(yearLabel(x))}</span><span class="tl-dot"></span>
          <span class="tl-card">${x.photo?`<img src="${x.photo}" alt="" loading="lazy">`:""}<small>${uni(x.cat).icon} ${esc(uniName(x.cat))}</small><strong>${esc(x.title[lang])}</strong></span>
        </a>`).join("")}</div></section>`).join("")}
    </div></div>
  </div>`;
  $$("#page .filter-chip").forEach(b=>b.addEventListener("click", ()=>{ tlFilter=b.dataset.f; renderTimeline(); }));
  const sc = $("#tlScroll");
  $$("#page .tl-arrow").forEach(b=>b.addEventListener("click", ()=>sc.scrollBy({left:+b.dataset.dir*sc.clientWidth*0.8, behavior:"smooth"})));
  sc.addEventListener("pointerdown", e=>{ if(e.pointerType!=="mouse") return; tlDrag={sc, x:e.clientX, left:sc.scrollLeft, moved:false}; });
  sc.addEventListener("click", e=>{ if(tlMoved){ e.preventDefault(); tlMoved=false; } }, true);
}

/* ---------- actualités automatiques (data/news.json, renouvelé par GitHub Actions) ---------- */
let newsData = window.LUMORA_NEWS || {items:[], sources:[]}, newsFilter = "all", newsShown = 6;
function relTime(iso){
  const d = (new Date(iso) - Date.now())/1000, rtf = new Intl.RelativeTimeFormat(lang, {numeric:"auto"});
  const a = Math.abs(d);
  if(a < 3600) return rtf.format(Math.round(d/60), "minute");
  if(a < 86400) return rtf.format(Math.round(d/3600), "hour");
  if(a < 86400*30) return rtf.format(Math.round(d/86400), "day");
  return new Date(iso).toLocaleDateString(lang==="fr"?"fr-FR":"en-GB", {day:"numeric", month:"long", year:"numeric"});
}
function renderNewsFeed(){
  const all = (newsData.items||[]).filter(n=>uni(n.universe));
  const cats = universes.filter(u=>all.some(n=>n.universe===u.id));
  if(newsFilter!=="all" && !cats.some(u=>u.id===newsFilter)) newsFilter = "all";
  $("#newsFilters").innerHTML = [`<button class="filter-chip${newsFilter==="all"?" selected":""}" data-nf="all">${esc(t("newsAll"))} · ${all.length}</button>`]
    .concat(cats.map(u=>`<button class="filter-chip${newsFilter===u.id?" selected":""}" data-nf="${u.id}">${u.icon} ${esc(u.name[lang])} · ${all.filter(n=>n.universe===u.id).length}</button>`)).join("");
  $$("#newsFilters .filter-chip").forEach(b=>b.addEventListener("click", ()=>{ newsFilter=b.dataset.nf; newsShown=6; renderNewsFeed(); }));
  const list = all.filter(n=>newsFilter==="all"||n.universe===newsFilter);
  $("#newsGrid").innerHTML = list.length ? list.slice(0, newsShown).map(n=>{
    const u = uni(n.universe), rel = n.related ? byId(n.related) : null;
    return `<article class="news-item" style="--glow:${u.glow}">
      <a class="news-media" href="${esc(n.link)}" target="_blank" rel="noopener noreferrer" data-icon="${u.icon}" aria-hidden="true" tabindex="-1">${n.image?`<img src="${esc(n.image)}" alt="" loading="lazy" referrerpolicy="no-referrer" onerror="this.remove()">`:""}${n.image&&n.imageCredit?`<small>${esc(t("imageBy")(n.imageCredit))}</small>`:""}</a>
      <div class="news-body">
        <div class="news-top"><span class="news-source">${esc(n.sourceName)}</span><time datetime="${esc(n.published)}">${esc(relTime(n.published))}</time></div>
        <h3><a href="${esc(n.link)}" target="_blank" rel="noopener noreferrer">${esc(n.title)}</a>${n.lang!==lang?` <span class="news-lang">${esc(n.lang.toUpperCase())}</span>`:""}</h3>
        ${n.summary?`<p>${esc(n.summary)}</p>`:""}
        <div class="news-foot">
          <button class="news-uni" data-nf="${u.id}">${u.icon} ${esc(u.name[lang])}</button>
          ${rel?`<a class="news-rel" href="#/d/${rel.id}">✦ ${esc(t("newsGoFurther"))} : ${esc(rel.title[lang])}</a>`:""}
          <a class="news-out" href="${esc(n.link)}" target="_blank" rel="noopener noreferrer">${esc(t("newsRead")(n.sourceName))}</a>
        </div>
      </div>
    </article>`; }).join("") : `<div class="empty-state"><span>◌</span><p>${esc(t("newsEmpty"))}</p></div>`;
  $$("#newsGrid .news-uni").forEach(b=>b.addEventListener("click", ()=>{ newsFilter=b.dataset.nf; newsShown=6; renderNewsFeed(); $("#news").scrollIntoView({behavior:"smooth"}); }));
  const rest = list.length - newsShown;
  $("#newsMoreRow").hidden = rest <= 0;
  if(rest > 0) $("#newsMore").textContent = t("newsMore")(rest);
  const srcNames = [...new Set((newsData.sources||[]).map(s=>s.name))].join(", ");
  $("#newsStatus").textContent = newsData.snapshot ? t("newsSnapshot")
    : t("newsStatus")(newsData.updated ? relTime(newsData.updated) : "—", all.length, srcNames);
}
$("#newsMore").addEventListener("click", ()=>{ newsShown += 6; renderNewsFeed(); });
/* sur le site en ligne, on relit news.json sans cache pour avoir la toute dernière version */
if(location.protocol.startsWith("http")){
  fetch("data/news.json", {cache:"no-store"}).then(r=>r.ok?r.json():null).then(d=>{
    if(d && d.items && (!newsData.updated || d.updated >= newsData.updated)){ newsData = d; renderNewsFeed(); }
  }).catch(()=>{});
}

/* ---------- carte du monde ---------- */
function atlasPanelHTML(id){
  const p = id ? placeById(id) : null;
  if(!p){
    const list = [...places].sort((a,b)=>a.name[lang].localeCompare(b.name[lang], lang));
    return `<div class="eyebrow">${esc(t("atlasPlaces")(places.length).toUpperCase())}</div><h2>${esc(t("atlasPick"))}</h2>
      <div class="atlas-list">${list.map(q=>`<button data-place="${q.id}"><span>${esc(q.name[lang])}</span><small>${q.items.length}</small></button>`).join("")}</div>`;
  }
  const its = p.items.map(byId).filter(Boolean);
  return `<button class="text-link atlas-back" data-place="">← ${esc(t("atlasPick"))}</button>
    <div class="eyebrow">◍ ${esc(t("atlasCount")(its.length).toUpperCase())}</div>
    <h2>${esc(p.name[lang])}</h2><p class="atlas-blurb">${esc(p.blurb[lang])}</p>
    <div class="atlas-items">${its.map(x=>{ const u = uni(x.cat); return `<a href="#/d/${x.id}" style="--glow:${u.glow}">${x.photo?`<img src="${x.photo}" alt="" loading="lazy">`:`<i>${u.icon}</i>`}<span><small>${u.icon} ${esc(u.name[lang])}</small><strong>${esc(x.title[lang])}</strong></span></a>`; }).join("")}</div>`;
}
function showAtlasPlace(id, fromGlobe){
  const panel = $("#atlasPanel"); if(!panel) return;
  panel.innerHTML = atlasPanelHTML(id);
  panel.scrollTop = 0;
  panel.querySelectorAll("[data-place]").forEach(b=>b.addEventListener("click", ()=>{
    const pid = b.dataset.place;
    if(pid && window.LumoraAtlas.current) window.LumoraAtlas.current.select(pid, true);
    else { showAtlasPlace(pid||null); history.replaceState(null, "", "#/atlas"); route = parseRoute(); $$(".atlas-pin").forEach(x=>x.classList.remove("selected")); }
  }));
  if(id){ history.replaceState(null, "", "#/atlas/"+id); route = parseRoute(); const p = placeById(id); setMeta(`${p.name[lang]} — ${t("atlasTitle")} — LUMORA`, p.blurb[lang]); }
  if(fromGlobe && window.matchMedia("(max-width:900px)").matches) panel.scrollIntoView({behavior:"smooth", block:"start"});
}
function renderAtlas(id){
  window.LumoraAtlas.destroy();
  setMeta(`${t("atlasTitle")} — LUMORA`, t("atlasIntro"));
  $("#page").innerHTML = `
  <div class="atlas-page">
    <div class="atlas-stage" id="atlasStage">
      <div class="atlas-head">
        <nav class="crumbs"><a href="#/">${esc(t("home"))}</a></nav>
        <div class="eyebrow"><span class="pulse"></span>${esc(t("atlasEyebrow"))}</div>
        <h1 tabindex="-1">${esc(t("atlasTitle"))}<span class="accent">.</span></h1>
        <p>${esc(t("atlasIntro"))}</p>
      </div>
      <div class="atlas-tools">
        <button class="pill-button" id="atlasRandom">✦ <span>${esc(t("atlasRandom"))}</span></button>
        <span><button class="tl-arrow" id="zoomIn" aria-label="+">+</button><button class="tl-arrow" id="zoomOut" aria-label="−">−</button></span>
      </div>
      <div class="atlas-hint">⟲ ${esc(t("atlasHint"))}</div>
    </div>
    <aside class="atlas-panel" id="atlasPanel"></aside>
  </div>`;
  const ok = window.LumoraAtlas.mount($("#atlasStage"), {places, label:p=>p.name[lang], onSelect:pid=>showAtlasPlace(pid, true)});
  if(!ok){ $("#atlasStage").classList.add("no-gl"); $("#atlasStage .atlas-hint").textContent = t("atlasNoGL"); }
  $("#atlasRandom").addEventListener("click", ()=>{ if(ok) ok.random(); else { const p = places[Math.floor(Math.random()*places.length)]; showAtlasPlace(p.id); } });
  $("#zoomIn").addEventListener("click", ()=>ok && ok.zoomBy(-0.4));
  $("#zoomOut").addEventListener("click", ()=>ok && ok.zoomBy(0.4));
  if(id && placeById(id)){ if(ok) ok.select(id, true); else showAtlasPlace(id); }
  else showAtlasPlace(null);
}

function renderNotFound(){
  setMeta("LUMORA", t("metaDesc"));
  $("#page").innerHTML = `<div class="section"><div class="empty-state"><span>✧</span><h1 tabindex="-1">${esc(t("notFound"))}</h1><p><a class="text-link" href="#/">${esc(t("home"))}</a></p><button class="outline-button" data-surprise>✦ ${esc(t("surprise"))}</button></div></div>`;
}

/* =================== ROUTEUR =================== */
let route = null, homeScroll = 0;
function parseRoute(){
  const h = decodeURIComponent(location.hash.replace(/^#/,""));
  if(!h.startsWith("/") || h==="/") return {name:"home", anchor: h.startsWith("/") ? "" : h};
  const [a,b,c] = h.slice(1).split("/");
  if(a==="d") return {name:"d", id:b};
  if(a==="u") return {name:"u", id:b, sub: c!=null && c!=="" ? +c : null};
  if(a==="bibliotheque" || a==="library") return {name:"library"};
  if(a==="quiz") return {name:"quiz", scope:b||null};
  if(a==="chronologie" || a==="timeline") return {name:"timeline"};
  if(a==="atlas" || a==="carte" || a==="map") return {name:"atlas", id:b||null};
  return {name:"404"};
}
function drawRoute(r){
  if(r.name==="d") renderArticle(r.id);
  else if(r.name==="u") renderUniversePage(r.id, r.sub);
  else if(r.name==="library") renderLibrary();
  else if(r.name==="quiz") renderQuiz(r.scope);
  else if(r.name==="timeline") renderTimeline();
  else if(r.name==="atlas") renderAtlas(r.id);
  else renderNotFound();
}
function navHighlight(r){
  $$(".desktop-nav a").forEach(a=>{
    const href = a.getAttribute("href");
    a.classList.toggle("current", (r.name==="timeline" && href==="#/chronologie") || (r.name==="quiz" && href==="#/quiz") || (r.name==="atlas" && href==="#/atlas"));
  });
  $(".library-link").classList.toggle("current", r.name==="library");
}
function onRoute(){
  const prev = route, r = parseRoute();
  stopAudio(); closeLightbox();
  if(r.name!=="atlas") window.LumoraAtlas.destroy();
  if(prev && prev.name==="home") homeScroll = window.scrollY;
  route = r; navHighlight(r);
  if(r.name==="home"){
    $("#page").hidden = true; $("#page").innerHTML = ""; $("#home").hidden = false;
    setMeta(t("pageTitle"), t("metaDesc"));
    if(r.anchor){ const el = document.getElementById(r.anchor); if(el) requestAnimationFrame(()=>el.scrollIntoView()); }
    else if(prev && prev.name!=="home") requestAnimationFrame(()=>window.scrollTo(0, location.hash==="#/" ? 0 : homeScroll));
    return;
  }
  $("#home").hidden = true; $("#page").hidden = false;
  drawRoute(r);
  const sameUni = prev && prev.name==="u" && r.name==="u" && prev.id===r.id;
  if(sameUni){ const l = $("#subList"); if(l) l.scrollIntoView({behavior:"smooth"}); }
  else { window.scrollTo(0,0); const h1 = $("#page h1"); if(h1) h1.focus({preventScroll:true}); }
}
window.addEventListener("hashchange", onRoute);

/* appelé par renderAll() (changement de langue, premier rendu) */
function renderExtras(){
  renderDaily();
  updateLibraryCount();
  if(!$("#settingsPop").hidden) renderSettings();
  if(route && route.name!=="home"){ const y = window.scrollY; drawRoute(route); window.scrollTo(0,y); }
}

renderAll();
onRoute();
