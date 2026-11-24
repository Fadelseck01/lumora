/* LUMORA — Terre 3D de la page d'accueil (Three.js r147, version classique).
   - Glisser : faire tourner la Terre (horizontalement) et l'incliner (verticalement)
   - Bouton : passer de la vue « horizon » (comme une photo prise depuis l'orbite) à la planète entière
   - Rotation automatique lente, nuages qui dérivent, lumières des villes sur la face nocturne
   Si WebGL n'est pas disponible, la planète en CSS d'origine reste affichée. */
(function(){
  const hero = document.querySelector(".hero");
  const canvas = document.getElementById("earthCanvas");
  const T = window.LUMORA_TEXTURES;
  if(!hero || !canvas || !window.THREE || !T) return;

  let renderer;
  try{
    renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:false, powerPreference:"high-performance"});
  }catch(e){ return; }
  if(!renderer.getContext()) return;
  hero.classList.add("has-3d");

  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
  renderer.setClearColor(0x03060d, 1);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 200);
  camera.position.set(0, 0, 3.2);

  const loader = new THREE.TextureLoader();
  const tex = src => { const t = loader.load(src, ()=>{ loaded++; }); t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy()); return t; };
  let loaded = 0;

  const sunDir = new THREE.Vector3(-0.55, 0.55, 0.65).normalize();

  /* --- Terre --- */
  const earthMat = new THREE.ShaderMaterial({
    uniforms:{ dayMap:{value:tex(T.day)}, nightMap:{value:tex(T.night)}, specMap:{value:tex(T.water)}, sunDir:{value:sunDir} },
    vertexShader:`
      varying vec2 vUv; varying vec3 vN; varying vec3 vW;
      void main(){ vUv=uv; vN=normalize(mat3(modelMatrix)*normal); vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }`,
    fragmentShader:`
      uniform sampler2D dayMap; uniform sampler2D nightMap; uniform sampler2D specMap; uniform vec3 sunDir;
      varying vec2 vUv; varying vec3 vN; varying vec3 vW;
      void main(){
        vec3 N=normalize(vN); vec3 V=normalize(cameraPosition-vW);
        float ndl=dot(N,sunDir);
        float dayMix=smoothstep(-0.18,0.28,ndl);
        vec3 day=texture2D(dayMap,vUv).rgb;
        vec3 night=texture2D(nightMap,vUv).rgb;
        vec3 col=day*(0.06+1.12*max(ndl,0.0))*dayMix + night*vec3(1.0,0.82,0.55)*1.5*(1.0-dayMix);
        float water=texture2D(specMap,vUv).r;
        vec3 H=normalize(sunDir+V);
        col+=vec3(0.75,0.88,1.0)*pow(max(dot(N,H),0.0),45.0)*water*0.55*dayMix;
        float fres=pow(1.0-max(dot(N,V),0.0),2.6);
        col=mix(col,vec3(0.38,0.68,1.0)*(0.25+0.95*dayMix),fres*0.7);
        gl_FragColor=vec4(col,1.0);
      }`
  });
  const earth = new THREE.Mesh(new THREE.SphereGeometry(1, 128, 96), earthMat);

  /* --- Nuages --- */
  const cloudMat = new THREE.ShaderMaterial({
    transparent:true, depthWrite:false,
    uniforms:{ map:{value:tex(T.clouds)}, sunDir:{value:sunDir} },
    vertexShader:`varying vec2 vUv; varying vec3 vN; void main(){ vUv=uv; vN=normalize(mat3(modelMatrix)*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
    fragmentShader:`
      uniform sampler2D map; uniform vec3 sunDir; varying vec2 vUv; varying vec3 vN;
      void main(){ float a=texture2D(map,vUv).r; float l=max(dot(normalize(vN),sunDir),0.0);
        gl_FragColor=vec4(vec3(0.08+0.95*l),a*0.7*smoothstep(-0.25,0.3,dot(normalize(vN),sunDir)+0.1)); }`
  });
  const clouds = new THREE.Mesh(new THREE.SphereGeometry(1.008, 96, 72), cloudMat);

  /* --- Atmosphère (halo) --- */
  const atmoMat = new THREE.ShaderMaterial({
    side:THREE.BackSide, transparent:true, depthWrite:false, blending:THREE.AdditiveBlending,
    uniforms:{ sunDir:{value:sunDir} },
    vertexShader:`varying vec3 vN; varying vec3 vW; void main(){ vN=normalize(mat3(modelMatrix)*normal); vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }`,
    fragmentShader:`
      uniform vec3 sunDir; varying vec3 vN; varying vec3 vW;
      void main(){ vec3 N=normalize(vN); vec3 V=normalize(cameraPosition-vW);
        float k=clamp(-dot(N,V)/0.5,0.0,1.0);
        float i=pow(k,3.2);
        float lit=0.3+0.9*smoothstep(-0.4,0.6,dot(N,sunDir));
        gl_FragColor=vec4(vec3(0.32,0.62,1.0)*i*lit*1.6,1.0); }`
  });
  const atmo = new THREE.Mesh(new THREE.SphereGeometry(1.14, 96, 72), atmoMat);

  const planet = new THREE.Group();          // rotation par l'utilisateur
  const spin = new THREE.Group();            // rotation propre (jour)
  spin.add(earth, clouds);
  planet.add(spin);
  planet.rotation.z = THREE.MathUtils.degToRad(-23.4) * 0.35;
  const holder = new THREE.Group();          // position / échelle selon la vue
  holder.add(planet, atmo);
  scene.add(holder);

  /* --- Étoiles --- */
  function stars(count, size, opacity){
    const g = new THREE.BufferGeometry(), p = new Float32Array(count*3), c = new Float32Array(count*3);
    for(let i=0;i<count;i++){
      const u=Math.random()*2-1, th=Math.random()*Math.PI*2, r=60+Math.random()*30, s=Math.sqrt(1-u*u);
      p.set([r*s*Math.cos(th), r*u, r*s*Math.sin(th)-20], i*3);
      const tint=Math.random(); c.set(tint<0.15?[1,0.85,0.7]:tint<0.3?[0.75,0.85,1]:[1,1,1], i*3);
    }
    g.setAttribute("position", new THREE.BufferAttribute(p,3));
    g.setAttribute("color", new THREE.BufferAttribute(c,3));
    return new THREE.Points(g, new THREE.PointsMaterial({size, sizeAttenuation:false, vertexColors:true, transparent:true, opacity, depthWrite:false}));
  }
  const starField = new THREE.Group();
  starField.add(stars(2600, 1.2, 0.75), stars(260, 2.2, 0.95));
  scene.add(starField);

  /* --- Vues : horizon <-> planète entière --- */
  function layouts(){
    const a = camera.aspect;
    if(a < 0.8) return { horizon:{x:0, y:-3.05, z:-0.6, s:2.6}, whole:{x:0, y:-0.55, z:-0.4, s:0.72} };
    if(a < 1.3) return { horizon:{x:0.2, y:-3.2, z:-0.6, s:2.9}, whole:{x:0.45, y:-0.05, z:0, s:0.72} };
    return { horizon:{x:0.4, y:-3.35, z:-0.6, s:3.1}, whole:{x:0.92, y:-0.02, z:0, s:0.78} };
  }
  let view = 0, viewTarget = 0;   // 0 = horizon, 1 = planète entière
  const ease = t => t<0.5 ? 4*t*t*t : 1-Math.pow(-2*t+2,3)/2;

  function placeHolder(){
    const L = layouts(), t = ease(view);
    const lerp = (a,b) => a+(b-a)*t;
    holder.position.set(lerp(L.horizon.x,L.whole.x), lerp(L.horizon.y,L.whole.y), lerp(L.horizon.z,L.whole.z));
    holder.scale.setScalar(lerp(L.horizon.s,L.whole.s));
  }

  const toggle = document.getElementById("earthToggle");
  if(toggle) toggle.addEventListener("click", ()=>{
    viewTarget = viewTarget ? 0 : 1;
    hero.classList.toggle("earth-whole", viewTarget===1);
  });

  /* --- Interaction : glisser pour tourner --- */
  let dragging=false, lastX=0, lastY=0, velY=0, velX=0, rotY=(window.LUMORA_START_LON!==undefined?window.LUMORA_START_LON:4.5), rotX=0, mx=0, my=0;
  // Inclinaison de base : vue « horizon » = axe de la Terre couché vers l'arrière (on survole l'équateur) ; vue entière = axe presque vertical
  const BASE_TILT = {horizon:-1.22, whole:0.28};
  canvas.addEventListener("pointerdown", e=>{ dragging=true; lastX=e.clientX; lastY=e.clientY; canvas.setPointerCapture(e.pointerId); hero.classList.add("earth-dragging"); hero.classList.add("earth-touched"); });
  canvas.addEventListener("pointermove", e=>{
    const r = canvas.getBoundingClientRect();
    mx = (e.clientX - r.left)/r.width - 0.5; my = (e.clientY - r.top)/r.height - 0.5;
    if(!dragging) return;
    const dx=e.clientX-lastX, dy=e.clientY-lastY; lastX=e.clientX; lastY=e.clientY;
    velY = dx*0.0055; velX = dy*0.0035;
    rotY += velY; rotX = THREE.MathUtils.clamp(rotX+velX, -0.45, 0.45);
  });
  const stop = e=>{ dragging=false; hero.classList.remove("earth-dragging"); try{ canvas.releasePointerCapture(e.pointerId); }catch(_){} };
  canvas.addEventListener("pointerup", stop);
  canvas.addEventListener("pointercancel", stop);
  canvas.addEventListener("pointerleave", ()=>{ mx=0; my=0; });

  /* --- Taille --- */
  function resize(){
    const w = hero.clientWidth, h = hero.clientHeight;
    renderer.setSize(w, h, false);
    camera.aspect = w/h; camera.updateProjectionMatrix();
    placeHolder();
  }
  new ResizeObserver(resize).observe(hero);
  resize();

  /* --- Boucle (en pause quand l'accueil n'est pas visible) --- */
  let visible = true, last = performance.now();
  new IntersectionObserver(([en])=>{ visible = en.isIntersecting; if(visible){ last=performance.now(); requestAnimationFrame(frame); } }).observe(hero);
  document.addEventListener("visibilitychange", ()=>{ if(!document.hidden && visible){ last=performance.now(); requestAnimationFrame(frame); } });

  function frame(now){
    if(!visible || document.hidden) return;
    const raw = (now-last)/1000; last = now;
    const dt = Math.min(raw, 0.05), dtView = Math.min(raw, 0.25);
    if(!dragging){
      velY *= 0.94; velX *= 0.9;
      rotY += velY + (reduceMotion ? 0 : dt*0.045);
      rotX = THREE.MathUtils.clamp(rotX+velX, -0.45, 0.45);
    }
    spin.rotation.y = rotY;
    planet.rotation.x = BASE_TILT.horizon + (BASE_TILT.whole-BASE_TILT.horizon)*ease(view) + rotX;
    clouds.rotation.y += reduceMotion ? 0 : dt*0.012;
    if(view !== viewTarget){
      view += (viewTarget>view ? 1 : -1) * dtView/1.3;
      view = Math.min(1, Math.max(0, view));
      placeHolder();
    }
    // léger effet de parallaxe avec la souris
    camera.position.x += (mx*0.18 - camera.position.x)*0.04;
    camera.position.y += (-my*0.12 - camera.position.y)*0.04;
    camera.lookAt(0, 0, 0);
    starField.rotation.y += reduceMotion ? 0 : dt*0.004;
    renderer.render(scene, camera);
    if(loaded >= 4) hero.classList.add("earth-ready");
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
