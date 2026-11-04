// Home page: hero, B-Agent switcher, project cards, stats. Content comes from assets/data.js.
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const calm = SITE.calm;
  const mark = '<svg class="bmark" viewBox="0 0 55.7 62" aria-hidden="true"><path d="M55.15,51.03c-.88,2.93-2.63,5.61-5.26,7.44-3.05,2.13-6.4,3.49-10.11,3.5l-36.16.04c-2.22,0-3.62-1.37-3.61-3.67l.05-10.87L0,40.77c-.02-1.73.5-3.77,2.23-4.57l16.8-7.73c.78-.2,1.71.3,1.71,1.13v16.29s23.01-10.33,23.01-10.33c.29-.13.6-.23.91-.29.29-.05.58-.09.87-.11,1.41-.09,2.82.33,3.99,1.13,4.94,3.33,7.35,9.02,5.62,14.74ZM2.49,16.38l12.69,5.68,23.58,10.48c.9.4,1.77.46,2.7-.05,9-4.82,13.49-15.51,8.29-24.03C47,3.94,41.25.03,35.77.03L3.37,0C1.33,0,.06,1.64.07,3.5l.02,9.33c0,1.69.93,2.89,2.4,3.55Z"/></svg>';

  const links = $("#navLinks");
  const sections = ["bagent", "approach", "projects", "craft", "contact"].map((id) => document.getElementById(id));
  const navObs = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) links.querySelectorAll("a").forEach((a) => a.classList.toggle("on", a.getAttribute("href") === "#" + e.target.id)); }), { rootMargin: "-45% 0px -50% 0px" });
  sections.forEach((s) => navObs.observe(s));

  // Marquee
  const tech = ["Azure OpenAI", "Azure AI Search", "Cosmos DB", "Azure Functions", "Entra ID", "Microsoft Graph", "React", "TypeScript", "Node.js", "Next.js", "Python", "PyTorch", "YOLOv8", "PostgreSQL", ".NET 8", "WebRTC", "MCP", "Flutter", "Godot 4", "Docker", "OpenCV"];
  $("#track").innerHTML = [...tech, ...tech].map((t) => `<span class="tag">${t}</span>`).join("");

  // B-Agent switcher
  const plist = $("#plist"), panel = $("#panel");
  let current = 0, shot = 0, timer = null, hovering = false;
  plist.innerHTML = BAGENT.map((p, i) => `<button class="pbtn" role="tab" id="tab-${p.id}" aria-controls="panel" aria-selected="false" style="--c:${p.color}" data-i="${i}">${mark}<span><strong>${esc(p.name)}</strong><small>${esc(p.tagline)}</small></span></button>`).join("");

  function renderProduct(i, focus) {
    current = i; shot = 0;
    const p = BAGENT[i];
    plist.querySelectorAll(".pbtn").forEach((b, j) => { b.setAttribute("aria-selected", j === i); b.tabIndex = j === i ? 0 : -1; });
    if (focus) plist.children[i].focus();
    panel.style.setProperty("--c", p.color);
    panel.setAttribute("aria-labelledby", "tab-" + p.id);
    panel.innerHTML = `
      <div class="browser">
        <div class="bar"><i></i><i></i><i></i><span class="url"><svg class="ic" aria-hidden="true"><use href="#i-lock"></use></svg>${esc(p.url)}</span></div>
        <div class="viewport" id="vp" title="Click to enlarge">
          ${p.shots.map((s, j) => `<img src="img/${s[0]}.webp" alt="${esc("B-Agent " + p.name + ": " + s[1])}" ${j ? 'loading="lazy"' : ""} class="${j ? "" : "on"}" />`).join("")}
          <span class="zoom"><svg class="ic" aria-hidden="true"><use href="#i-expand"></use></svg> Enlarge</span>
        </div>
      </div>
      ${p.shots.length > 1 ? `<div class="thumbs">${p.shots.map((s, j) => `<button class="thumb ${j ? "" : "on"}" data-j="${j}"><span class="prog"></span><img src="img/${s[0]}.webp" alt="" loading="lazy" /><span>${esc(s[1])}</span></button>`).join("")}</div>` : `<p class="note" style="margin:10px 4px 0">${esc(p.shots[0][1])}</p>`}
      <div class="pbody fade-swap">
        <div class="ptitle"><h3>B-Agent <em>${esc(p.name)}</em></h3>
            <a class="btn sm primary" href="work/${p.id}.html">Read the case study <svg class="ic" aria-hidden="true"><use href="#i-right"></use></svg></a>
          <a class="btn sm" href="https://${p.url}" target="_blank" rel="noopener">${esc(p.url)} <svg class="ic" aria-hidden="true"><use href="#i-ext"></use></svg></a>
          ${p.extra ? `<a class="btn sm" href="${p.extra.href}" target="_blank" rel="noopener"><svg class="ic" aria-hidden="true"><use href="#i-github"></use></svg> ${esc(p.extra.label)}</a>` : ""}
        </div>
        <p class="ptag">${esc(p.tagline)}</p>
        <div class="cols">
          <div><h4>What it does</h4><ul>${p.does.map((d) => `<li>${esc(d)}</li>`).join("")}</ul></div>
          <div class="hood"><h4>Under the hood</h4><ul>${p.hood.map((d) => `<li>${esc(d)}</li>`).join("")}</ul></div>
        </div>
        <div class="stack">${p.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
      </div>`;
    panel.querySelectorAll(".thumb").forEach((t) => t.addEventListener("click", () => { showShot(+t.dataset.j); }));
    $("#vp").addEventListener("click", () => SITE.open(p.shots.map((s) => ["img/" + s[0] + ".webp", "B-Agent " + p.name + " · " + s[1]]), shot));
    showShot(0);
  }
  function showShot(j) {
    const p = BAGENT[current];
    shot = j;
    panel.querySelectorAll(".viewport img").forEach((im, k) => im.classList.toggle("on", k === j));
    panel.querySelectorAll(".thumb").forEach((t, k) => {
      t.classList.toggle("on", k === j);
      const bar = t.querySelector(".prog"); bar.classList.remove("run"); void bar.offsetWidth;
      if (k === j && !calm && !hovering) bar.classList.add("run");
    });
    clearTimeout(timer);
    if (!calm && p.shots.length > 1 && !hovering) timer = setTimeout(() => showShot((shot + 1) % p.shots.length), 6000);
  }
  panel.addEventListener("mouseenter", () => { hovering = true; clearTimeout(timer); panel.querySelectorAll(".prog").forEach((b) => b.classList.remove("run")); });
  panel.addEventListener("mouseleave", () => { hovering = false; showShot(shot); });
  plist.addEventListener("click", (e) => { const b = e.target.closest(".pbtn"); if (b) { renderProduct(+b.dataset.i); if (innerWidth < 1080) b.scrollIntoView({ inline: "center", block: "nearest", behavior: "smooth" }); } });
  plist.addEventListener("keydown", (e) => {
    const k = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (k) { e.preventDefault(); renderProduct((current + k + BAGENT.length) % BAGENT.length, true); }
  });
  const start = Math.max(0, BAGENT.findIndex((p) => "#" + p.id === location.hash));
  renderProduct(start);

  SITE.reveal();
  $("#more").innerHTML = BAGENT_MORE.map((m) => `<article class="mini reveal" style="--c:${m.color}">${mark}<h4>${esc(m.name)}</h4><p>${esc(m.text)}</p></article>`).join("");

  // Personal projects
  $("#pgrid").innerHTML = PROJECTS.map((p) => `
    <article class="proj reveal" style="--c:${p.color}">
      <div class="media">${p.img ? `<img src="img/${p.img}.webp" alt="${esc(p.name)}" loading="lazy" class="${p.contain ? "contain" : ""}" />` : `<div class="tile">${esc(p.tile)}</div>`}</div>
      <div class="body">
        <span class="k">${esc(p.kind)}</span>
        <h3>${esc(p.name)}</h3>
        <p>${esc(p.line)}</p>
        <ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        <div class="links">${p.links.map(([t, h]) => `<a class="btn sm" href="${h}" target="_blank" rel="noopener">${t === "GitHub" ? '<svg class="ic" aria-hidden="true"><use href="#i-github"></use></svg> ' : ""}${esc(t)}</a>`).join("")}${p.note ? `<small>${esc(p.note)}</small>` : ""}</div>
      </div>
    </article>`).join("");
  $("#earlier").insertAdjacentHTML("beforeend", EARLIER.map(([n, d, h]) => `<a href="${h}" target="_blank" rel="noopener"><b>${esc(n)}</b><span class="d">${esc(d)}</span><svg class="ic" aria-hidden="true"><use href="#i-ext"></use></svg></a>`).join(""));

  // Deep links (#bagent, #projects, #law…): land on the target again once fonts have changed the layout
  const target = location.hash && document.getElementById(location.hash.slice(1)) || (BAGENT.some((p) => "#" + p.id === location.hash) && $("#bagent"));
  if (target) (document.fonts ? document.fonts.ready : Promise.resolve()).then(() => target.scrollIntoView({ behavior: "instant", block: "start" }));

  // Count-up stats
  const cio = new IntersectionObserver((es) => es.forEach((e) => {
    if (!e.isIntersecting) return; cio.unobserve(e.target);
    const el = e.target, to = +el.dataset.count, suf = el.dataset.suffix || "", t0 = performance.now();
    const step = (t) => { const k = Math.min(1, (t - t0) / 1400); el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3))) + suf; if (k < 1) requestAnimationFrame(step); };
    calm ? (el.textContent = to + suf) : requestAnimationFrame(step);
  }), { threshold: 0.6 });
  document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));

  // Hero cards tilt with the mouse
  const stage = $("#stage");
  if (!calm && matchMedia("(pointer: fine)").matches) {
    addEventListener("pointermove", (e) => {
      const x = e.clientX / innerWidth - 0.5, y = e.clientY / innerHeight - 0.5;
      stage.querySelectorAll(".card3d").forEach((c, i) => { const z = [-40, 20, 80][i]; c.style.transform = `rotateY(${-14 + x * 10}deg) rotateX(${6 - y * 8}deg) translateZ(${z}px) translate(${x * (i + 1) * 8}px, ${y * (i + 1) * 6}px)`; });
    }, { passive: true });
  }

  SITE.reveal();
  SITE.zoomables();

})();
