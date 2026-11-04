// B-Agent page: the nine-app switcher. Screens switch with the system theme when an app has
// both captures (img/<shot>.webp for light, img/<shot>-dark.webp for dark).
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const icon = (n) => `<svg class="ic" aria-hidden="true"><use href="#i-${n}"></use></svg>`;
  const dark = matchMedia("(prefers-color-scheme: dark)");
  const src = (p, shot) => `img/${shot}${p.themed && dark.matches ? "-dark" : ""}.webp`;
  const mark = '<svg class="bmark" viewBox="0 0 55.7 62" aria-hidden="true"><path d="M55.15,51.03c-.88,2.93-2.63,5.61-5.26,7.44-3.05,2.13-6.4,3.49-10.11,3.5l-36.16.04c-2.22,0-3.62-1.37-3.61-3.67l.05-10.87L0,40.77c-.02-1.73.5-3.77,2.23-4.57l16.8-7.73c.78-.2,1.71.3,1.71,1.13v16.29s23.01-10.33,23.01-10.33c.29-.13.6-.23.91-.29.29-.05.58-.09.87-.11,1.41-.09,2.82.33,3.99,1.13,4.94,3.33,7.35,9.02,5.62,14.74ZM2.49,16.38l12.69,5.68,23.58,10.48c.9.4,1.77.46,2.7-.05,9-4.82,13.49-15.51,8.29-24.03C47,3.94,41.25.03,35.77.03L3.37,0C1.33,0,.06,1.64.07,3.5l.02,9.33c0,1.69.93,2.89,2.4,3.55Z"/></svg>';

  const plist = $("#plist"), panel = $("#panel");
  let current = 0, shot = 0, timer = null, hovering = false;
  plist.innerHTML = BAGENT.map((p, i) => `<button class="pbtn" role="tab" id="tab-${p.id}" aria-controls="panel" aria-selected="false" style="--c:${p.color}" data-i="${i}">${mark}<span><strong>${esc(p.name)}</strong><small>${esc(p.tagline)}</small></span></button>`).join("");

  function render(i, focus) {
    current = i; shot = 0;
    const p = BAGENT[i];
    plist.querySelectorAll(".pbtn").forEach((b, j) => { b.setAttribute("aria-selected", j === i); b.tabIndex = j === i ? 0 : -1; });
    if (focus) plist.children[i].focus();
    panel.style.setProperty("--c", p.color);
    panel.setAttribute("aria-labelledby", "tab-" + p.id);
    panel.innerHTML = `
      <div class="browser">
        <div class="bar"><i></i><i></i><i></i><span class="url">${icon("lock")}${esc(p.url)}</span></div>
        <div class="viewport" id="vp" title="Click to enlarge">
          ${p.shots.map((s, j) => `<img src="${src(p, s[0])}" alt="${esc(`B-Agent ${p.name}: ${s[1]}`)}" ${j ? 'loading="lazy"' : ""} class="${j ? "" : "on"}" />`).join("")}
        </div>
      </div>
      ${p.shots.length > 1 ? `<div class="thumbs">${p.shots.map((s, j) => `<button class="thumb ${j ? "" : "on"}" data-j="${j}"><img src="${src(p, s[0])}" alt="" loading="lazy" /><span>${esc(s[1])}</span></button>`).join("")}</div>` : `<p class="note" style="text-align:left;margin:8px 2px 0">${esc(p.shots[0][1])}</p>`}
      <div class="pbody">
        <div class="ptitle"><h2>B-Agent <em>${esc(p.name)}</em></h2>
          <a class="btn sm solid" href="work/${p.id}.html">Case study ${icon("right")}</a>
          <a class="btn sm" href="https://${p.url}" target="_blank" rel="noopener">${esc(p.url)} ${icon("ext")}</a>
        </div>
        <p class="ptag">${esc(p.tagline)}</p>
        <div class="cols">
          <div><h3>What it does</h3><ul>${p.does.map((d) => `<li>${esc(d)}</li>`).join("")}</ul></div>
          <div><h3>Under the hood</h3><ul>${p.hood.map((d) => `<li>${esc(d)}</li>`).join("")}</ul></div>
        </div>
        <div class="stack">${p.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
      </div>`;
    panel.querySelectorAll(".thumb").forEach((t) => t.addEventListener("click", () => show(+t.dataset.j)));
    $("#vp").addEventListener("click", () => SITE.open(p.shots.map((s) => [src(p, s[0]), `B-Agent ${p.name} · ${s[1]}`]), shot));
    show(0);
  }
  function show(j) {
    const p = BAGENT[current];
    shot = j;
    panel.querySelectorAll(".viewport img").forEach((im, k) => im.classList.toggle("on", k === j));
    panel.querySelectorAll(".thumb").forEach((t, k) => t.classList.toggle("on", k === j));
    clearTimeout(timer);
    if (!SITE.calm && p.shots.length > 1 && !hovering) timer = setTimeout(() => show((shot + 1) % p.shots.length), 6000);
  }
  panel.addEventListener("mouseenter", () => { hovering = true; clearTimeout(timer); });
  panel.addEventListener("mouseleave", () => { hovering = false; show(shot); });
  plist.addEventListener("click", (e) => { const b = e.target.closest(".pbtn"); if (b) render(+b.dataset.i); });
  plist.addEventListener("keydown", (e) => {
    const k = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (k) { e.preventDefault(); render((current + k + BAGENT.length) % BAGENT.length, true); }
  });
  dark.addEventListener("change", () => render(current));
  render(Math.max(0, BAGENT.findIndex((p) => "#" + p.id === location.hash)));

  $("#more").innerHTML = BAGENT_MORE.map((m) => `<article class="mini card" style="--c:${m.color}">${mark}<h3>${esc(m.name)}</h3><p>${esc(m.text)}</p></article>`).join("");
  SITE.reveal();
})();
