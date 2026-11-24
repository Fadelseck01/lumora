/* LUMORA — globe de la carte du monde interactive (Three.js r147).
   Mêmes textures que la Terre de l'accueil. Les lieux sont des points HTML posés sur le globe :
   ils suivent la rotation, se cachent sur la face arrière et se touchent comme des boutons. */
window.LumoraAtlas = (function(){
  let inst = null;

  function mount(wrap, opts){
    destroy();
    const T = window.LUMORA_TEXTURES;
    if(!window.THREE || !T) return false;
    const canvas = document.createElement("canvas");
    canvas.className = "atlas-canvas";
    const layer = document.createElement("div");
    layer.className = "atlas-pins";
    wrap.append(canvas, layer);

    let renderer;
    try{ renderer = new THREE.WebGLRenderer({canvas, antialias:true, alpha:true}); }catch(e){ canvas.remove(); layer.remove(); return false; }
    if(!renderer.getContext()){ canvas.remove(); layer.remove(); return false; }
    renderer.setPixelRatio(Math.min(window.devicePixelRatio||1, 2));
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(38, 1, 0.1, 100);
    let camZ = 4.0, camZTarget = 4.0;
    camera.position.set(0,0,camZ);

    const loader = new THREE.TextureLoader();
    const tex = src => { const t = loader.load(src); t.anisotropy = Math.min(8, renderer.capabilities.getMaxAnisotropy()); return t; };
    /* lumière douce venant de face pour que chaque lieu choisi soit éclairé */
    const sunDir = new THREE.Vector3(-0.35, 0.45, 0.82).normalize();
    const earthMat = new THREE.ShaderMaterial({
      uniforms:{ dayMap:{value:tex(T.day)}, nightMap:{value:tex(T.night)}, specMap:{value:tex(T.water)}, sunDir:{value:sunDir} },
      vertexShader:`varying vec2 vUv; varying vec3 vN; varying vec3 vW;
        void main(){ vUv=uv; vN=normalize(mat3(modelMatrix)*normal); vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }`,
      fragmentShader:`uniform sampler2D dayMap; uniform sampler2D nightMap; uniform sampler2D specMap; uniform vec3 sunDir;
        varying vec2 vUv; varying vec3 vN; varying vec3 vW;
        void main(){ vec3 N=normalize(vN); vec3 V=normalize(cameraPosition-vW); float ndl=dot(N,sunDir);
          float dayMix=smoothstep(-0.35,0.2,ndl);
          vec3 col=texture2D(dayMap,vUv).rgb*(0.18+1.0*max(ndl,0.0))*dayMix + texture2D(nightMap,vUv).rgb*vec3(1.0,0.82,0.55)*1.4*(1.0-dayMix);
          vec3 H=normalize(sunDir+V); col+=vec3(0.75,0.88,1.0)*pow(max(dot(N,H),0.0),45.0)*texture2D(specMap,vUv).r*0.45*dayMix;
          float fres=pow(1.0-max(dot(N,V),0.0),2.6); col=mix(col,vec3(0.38,0.68,1.0),fres*0.65);
          gl_FragColor=vec4(col,1.0); }`
    });
    const earth = new THREE.Mesh(new THREE.SphereGeometry(1, 128, 96), earthMat);
    const cloudMat = new THREE.ShaderMaterial({ transparent:true, depthWrite:false, uniforms:{ map:{value:tex(T.clouds)}, sunDir:{value:sunDir} },
      vertexShader:`varying vec2 vUv; varying vec3 vN; void main(){ vUv=uv; vN=normalize(mat3(modelMatrix)*normal); gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }`,
      fragmentShader:`uniform sampler2D map; uniform vec3 sunDir; varying vec2 vUv; varying vec3 vN;
        void main(){ float a=texture2D(map,vUv).r; float l=max(dot(normalize(vN),sunDir),0.0); gl_FragColor=vec4(vec3(0.1+0.9*l),a*0.42); }` });
    const clouds = new THREE.Mesh(new THREE.SphereGeometry(1.008, 96, 72), cloudMat);
    const atmo = new THREE.Mesh(new THREE.SphereGeometry(1.13, 96, 72), new THREE.ShaderMaterial({
      side:THREE.BackSide, transparent:true, depthWrite:false, blending:THREE.AdditiveBlending,
      vertexShader:`varying vec3 vN; varying vec3 vW; void main(){ vN=normalize(mat3(modelMatrix)*normal); vec4 w=modelMatrix*vec4(position,1.0); vW=w.xyz; gl_Position=projectionMatrix*viewMatrix*w; }`,
      fragmentShader:`varying vec3 vN; varying vec3 vW; void main(){ vec3 N=normalize(vN); vec3 V=normalize(cameraPosition-vW); float k=clamp(-dot(N,V)/0.5,0.0,1.0); gl_FragColor=vec4(vec3(0.32,0.62,1.0)*pow(k,3.0)*1.5,1.0); }` }));

    const tilt = new THREE.Group();   // latitude (rotation x)
    const spin = new THREE.Group();   // longitude (rotation y)
    spin.add(earth, clouds); tilt.add(spin); scene.add(tilt, atmo);

    /* lat/lon -> point local du globe (même convention que SphereGeometry) */
    const toVec = (lat, lon, r=1.012) => {
      const phi = (lon+180)*Math.PI/180, th = (90-lat)*Math.PI/180;
      return new THREE.Vector3(-Math.cos(phi)*Math.sin(th)*r, Math.cos(th)*r, Math.sin(phi)*Math.sin(th)*r);
    };
    const pins = opts.places.map(p=>{
      const o = new THREE.Object3D(); o.position.copy(toVec(p.lat, p.lon)); spin.add(o);
      const b = document.createElement("button");
      b.className = "atlas-pin"; b.type = "button"; b.dataset.id = p.id;
      b.style.setProperty("--n", Math.min(p.items.length,5));
      b.innerHTML = `<i></i><span>${opts.label(p)}</span>`;
      b.setAttribute("aria-label", opts.label(p));
      b.addEventListener("click", e=>{ e.stopPropagation(); if(moved) return; select(p.id, true); });
      layer.appendChild(b);
      return {p, o, b};
    });

    /* rotation : rotY = longitude, rotX = latitude (radians) */
    let rotY = Math.PI/2 - (10+180)*Math.PI/180, rotX = 0.35, tY = null, tX = null, velY = 0, idle = true, selected = null;
    const lonToRot = lon => Math.PI/2 - (lon+180)*Math.PI/180;
    function flyTo(lat, lon){
      let target = lonToRot(lon);
      target = rotY + Math.atan2(Math.sin(target-rotY), Math.cos(target-rotY));  // chemin le plus court
      tY = target; tX = THREE.MathUtils.clamp(lat*Math.PI/180, -1.2, 1.2); idle = false;
    }
    function select(id, fly){
      const pin = pins.find(x=>x.p.id===id); if(!pin) return;
      selected = id;
      pins.forEach(x=>x.b.classList.toggle("selected", x.p.id===id));
      if(fly){ flyTo(pin.p.lat, pin.p.lon); camZTarget = Math.min(camZTarget, 3.4); }
      opts.onSelect && opts.onSelect(id);
    }

    /* glisser / zoom */
    let dragging=false, lx=0, ly=0, moved=false;
    canvas.addEventListener("pointerdown", e=>{ dragging=true; moved=false; lx=e.clientX; ly=e.clientY; idle=false; tY=tX=null; canvas.setPointerCapture(e.pointerId); wrap.classList.add("dragging"); });
    canvas.addEventListener("pointermove", e=>{
      if(!dragging) return;
      const dx=e.clientX-lx, dy=e.clientY-ly; lx=e.clientX; ly=e.clientY;
      if(Math.abs(dx)+Math.abs(dy)>2) moved=true;
      const k = 0.005*camZ/3.4;
      velY = dx*k; rotY += velY; rotX = THREE.MathUtils.clamp(rotX + dy*k, -1.25, 1.25);
    });
    const up = e=>{ dragging=false; wrap.classList.remove("dragging"); try{ canvas.releasePointerCapture(e.pointerId); }catch(_){} setTimeout(()=>moved=false, 0); };
    canvas.addEventListener("pointerup", up); canvas.addEventListener("pointercancel", up);
    canvas.addEventListener("wheel", e=>{ e.preventDefault(); camZTarget = THREE.MathUtils.clamp(camZTarget + e.deltaY*0.0018, 1.75, 4.6); }, {passive:false});
    const zoomBy = d => { camZTarget = THREE.MathUtils.clamp(camZTarget + d, 1.75, 4.6); };

    function resize(){
      const w = wrap.clientWidth, h = wrap.clientHeight; if(!w || !h) return;
      renderer.setSize(w, h, false); camera.aspect = w/h;
      if(w > 700) camera.setViewOffset(w, h, -w*0.13, 0, w, h); else camera.clearViewOffset();
      camera.updateProjectionMatrix();
    }
    const ro = new ResizeObserver(resize); ro.observe(wrap); resize();

    const v = new THREE.Vector3(), camDir = new THREE.Vector3();
    let raf = 0, last = performance.now(), alive = true;
    function frame(now){
      if(!alive) return;
      const dt = Math.min((now-last)/1000, 0.05); last = now;
      if(tY!==null){ rotY += (tY-rotY)*Math.min(1, dt*3.2); rotX += (tX-rotX)*Math.min(1, dt*3.2); if(Math.abs(tY-rotY)<0.001 && Math.abs(tX-rotX)<0.001){ tY=tX=null; } }
      else if(!dragging){ velY *= 0.93; rotY += velY + (idle ? dt*0.06 : 0); }
      spin.rotation.y = rotY; tilt.rotation.x = rotX;
      clouds.rotation.y += dt*0.01;
      camZ += (camZTarget-camZ)*Math.min(1, dt*5); camera.position.set(0,0,camZ); camera.lookAt(0,0,0);
      renderer.render(scene, camera);
      /* points HTML */
      const w = canvas.clientWidth, h = canvas.clientHeight;
      camDir.copy(camera.position).normalize();
      for(const x of pins){
        x.o.getWorldPosition(v);
        const facing = v.clone().normalize().dot(camDir);
        const vis = facing > 0.12;
        x.b.classList.toggle("hidden", !vis);
        if(!vis) continue;
        v.project(camera);
        x.b.style.transform = `translate(${(v.x*0.5+0.5)*w}px, ${(-v.y*0.5+0.5)*h}px)`;
        x.b.style.opacity = Math.min(1, (facing-0.12)*4);
        x.b.style.zIndex = Math.round(facing*100);
      }
      raf = requestAnimationFrame(frame);
    }
    raf = requestAnimationFrame(frame);

    inst = {
      select, zoomBy,
      random(){ const p = opts.places[Math.floor(Math.random()*opts.places.length)]; select(p.id, true); return p.id; },
      relabel(fn){ pins.forEach(x=>{ x.b.querySelector("span").textContent = fn(x.p); x.b.setAttribute("aria-label", fn(x.p)); }); },
      get selected(){ return selected; },
      destroy(){
        alive = false; cancelAnimationFrame(raf); ro.disconnect();
        scene.traverse(o=>{ if(o.geometry) o.geometry.dispose(); if(o.material){ Object.values(o.material.uniforms||{}).forEach(u=>u.value && u.value.dispose && u.value.dispose()); o.material.dispose(); } });
        renderer.dispose(); try{ renderer.forceContextLoss(); }catch(_){}
        canvas.remove(); layer.remove();
      }
    };
    return inst;
  }
  function destroy(){ if(inst){ inst.destroy(); inst = null; } }
  return { mount, destroy, get current(){ return inst; } };
})();
