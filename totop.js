/* LUMORA — bouton « Revenir en haut » avec anneau de progression de lecture.
   Apparaît après environ un écran de défilement, sur toutes les pages longues
   (découvertes, univers, chronologie, Ce jour-là, accueil…), à la couleur de l'univers. */
(function(){
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)");
  const R = 21, C = 2 * Math.PI * R;
  const b = document.createElement("button");
  b.type = "button"; b.className = "to-top";
  b.innerHTML = `<svg viewBox="0 0 48 48" aria-hidden="true"><circle class="tt-track" cx="24" cy="24" r="${R}"/><circle class="tt-ring" cx="24" cy="24" r="${R}" stroke-dasharray="${C.toFixed(2)}" stroke-dashoffset="${C.toFixed(2)}"/></svg><span aria-hidden="true">↑</span>`;
  document.body.appendChild(b);
  const ring = b.querySelector(".tt-ring");
  const label = ()=>{ const l = (typeof lang!=="undefined" && lang==="en") ? "Back to top" : "Revenir en haut"; b.setAttribute("aria-label", l); b.title = l; };
  const color = ()=>{
    const host = document.querySelector("#page:not([hidden]) [style*='--glow']");
    const g = host ? getComputedStyle(host).getPropertyValue("--glow").trim() : "";
    /* couleur de l'univers, rendue opaque pour que l'anneau reste bien visible */
    b.style.setProperty("--tt", /^#[0-9a-f]{8}$/i.test(g) ? g.slice(0,7) : (g || "#75c5ff"));
  };
  let ticking = false;
  const update = ()=>{
    ticking = false;
    const max = document.documentElement.scrollHeight - innerHeight;
    const y = scrollY, p = max > 0 ? Math.min(1, y / max) : 0;
    ring.setAttribute("stroke-dashoffset", (C * (1 - p)).toFixed(2));
    b.classList.toggle("show", y > innerHeight * 0.9 && max > innerHeight * 0.6);
  };
  addEventListener("scroll", ()=>{ if(!ticking){ ticking = true; requestAnimationFrame(update); } }, {passive:true});
  addEventListener("resize", update);
  addEventListener("hashchange", ()=>setTimeout(()=>{ color(); label(); update(); }, 60));
  document.addEventListener("click", e=>{ if(e.target.closest && e.target.closest("#languageToggle")) setTimeout(label, 50); });
  b.addEventListener("click", ()=>{
    scrollTo({top:0, behavior:(reduce && reduce.matches) ? "auto" : "smooth"});
    const h = document.querySelector("#page:not([hidden]) h1, #home:not([hidden]) h1");
    if(h){ if(!h.hasAttribute("tabindex")) h.setAttribute("tabindex","-1"); setTimeout(()=>h.focus({preventScroll:true}), 450); }
  });
  color(); label(); update();
})();
