/* LUMORA — apparition en douceur au défilement (« scroll reveal »).
   - seuls les blocs (cartes, titres de section, bandeaux) apparaissent, jamais le texte des articles ;
   - désactivé si l'utilisateur a demandé moins d'animations dans son système ;
   - sans JavaScript, rien n'est masqué : la classe .rv n'est posée que par ce script. */
(function(){
  if(!("IntersectionObserver" in window)) return;
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
  if(reduce && reduce.matches) return;
  const SEL = [".section-heading", ".universe-card", ".discovery-card", ".daily-card", ".otd-home-card", ".news-card",
               ".feature-band", ".quote-section", ".tl-era", ".otd-feature", ".otd-card", ".sub-card", ".library-card",
               ".related-card", ".quiz-pick", ".atlas-side"].join(",");
  const io = new IntersectionObserver(entries=>{
    for(const e of entries){
      if(!e.isIntersecting) continue;
      const el = e.target; io.unobserve(el);
      el.classList.add("rv-in");
      /* une fois apparu, on rend l'élément à ses styles normaux (effets de survol, etc.) */
      const d = parseFloat(el.style.getPropertyValue("--rv-d")) || 0;
      setTimeout(()=>{ el.classList.remove("rv","rv-in"); el.style.removeProperty("--rv-d"); }, 900 + d);
    }
  }, {rootMargin:"0px 0px -6% 0px", threshold:0.06});
  let queued = false;
  function scan(){
    queued = false;
    let n = 0;
    document.querySelectorAll(SEL).forEach(el=>{
      if(el.dataset.rv) return;
      el.dataset.rv = "1";
      if(el.closest("[hidden]")) { delete el.dataset.rv; return; }
      const r = el.getBoundingClientRect();
      if(r.bottom < 0) return;                       /* déjà dépassé : on n'anime pas */
      el.classList.add("rv");
      el.style.setProperty("--rv-d", (n++ % 6) * 70 + "ms");
      io.observe(el);
    });
  }
  const queue = ()=>{ if(!queued){ queued = true; requestAnimationFrame(scan); } };
  document.documentElement.classList.add("rv-on");
  new MutationObserver(queue).observe(document.body, {childList:true, subtree:true, attributes:true, attributeFilter:["hidden"]});
  queue();
})();
