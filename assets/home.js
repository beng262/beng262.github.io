// Home page: project filters and cards, the project popup, client work and training text.
// Content comes from assets/data.js.
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const icon = (n) => `<svg class="ic" aria-hidden="true"><use href="#i-${n}"></use></svg>`;
  const isExternal = (h) => /^https?:/.test(h);

  // Filters
  const filters = $("#filters"), grid = $("#pgrid");
  filters.innerHTML = CATS.map((c, i) => `<button type="button" aria-pressed="${i === 0}" data-cat="${esc(c)}">${esc(c)}</button>`).join("");
  filters.addEventListener("click", (e) => {
    const b = e.target.closest("button"); if (!b) return;
    filters.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", x === b));
    grid.querySelectorAll(".proj").forEach((card) => card.classList.toggle("hide", b.dataset.cat !== "All" && card.dataset.cat !== b.dataset.cat));
  });

  // Project cards
  grid.innerHTML = PROJECTS.map((p, i) => `
    <button type="button" class="proj card lift reveal" data-i="${i}" data-cat="${esc(p.cat)}" aria-haspopup="dialog">
      <div class="thumb"><img src="img/${p.img}.webp" alt="${esc(p.name)}" loading="lazy" width="1600" height="1000" class="${p.pixel ? "pixel" : ""}" /></div>
      <div class="body"><div class="title">${esc(p.name)}</div><div class="meta">${esc(p.kind)}</div><p class="line">${esc(p.line)}</p></div>
    </button>`).join("");

  // Project popup
  const modal = $("#modal"), inner = $("#modalInner");
  let opener = null;
  function openProject(i) {
    const p = PROJECTS[i];
    opener = document.activeElement;
    inner.innerHTML = `
      <button class="close" id="mClose" aria-label="Close">${icon("x")}</button>
      <div class="cover"><img src="img/${p.img}.webp" alt="${esc(p.name)}" class="${p.pixel ? "pixel" : ""}" data-zoom="${esc(p.name)}" data-group="modal" /></div>
      <div class="content">
        <h2 id="mTitle">${esc(p.name)}</h2>
        <div class="meta">${esc(p.kind)}</div>
        <p style="margin:0 0 12px">${esc(p.line)}</p>
        <ul>${p.points.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        ${p.gallery ? `<div class="gal">${p.gallery.map((g) => `<img src="img/${g}.webp" alt="" loading="lazy" data-zoom="${esc(p.name)}" data-group="modal" />`).join("")}</div>` : ""}
        <div class="tags">${p.tags.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
        <div class="links">${p.links.map(([t, h], j) => `<a class="btn sm ${j === 0 ? "solid" : ""}" href="${esc(h)}" ${isExternal(h) ? 'target="_blank" rel="noopener"' : ""}>${t === "GitHub" ? icon("github") + " " : ""}${esc(t)}${isExternal(h) && t !== "GitHub" ? " " + icon("ext") : ""}</a>`).join("")}${p.note ? `<span class="note">${esc(p.note)}</span>` : ""}</div>
      </div>`;
    modal.classList.add("open");
    document.body.style.overflow = "hidden";
    SITE.zoomables(inner);
    $("#mClose").addEventListener("click", closeProject);
    $("#mClose").focus();
  }
  function closeProject() {
    modal.classList.remove("open");
    document.body.style.overflow = "";
    if (opener && opener.focus) opener.focus();
  }
  grid.addEventListener("click", (e) => { const c = e.target.closest(".proj"); if (c) openProject(+c.dataset.i); });
  modal.addEventListener("click", (e) => { if (e.target === modal) closeProject(); });
  addEventListener("keydown", (e) => { if (e.key === "Escape" && modal.classList.contains("open") && !$("#lb").classList.contains("open")) closeProject(); });

  // Client work
  if (window.CLIENTS) {
    $("#cgrid").innerHTML = CLIENTS.map((c) => `
      <article class="client card reveal">
        <div class="ind"><i></i>${esc(c.industry)}</div>
        <h3>${esc(c.title)}</h3>
        ${c.live ? `<span class="live"><i></i>${esc(c.live)}</span>` : ""}
        <p>${esc(c.text)}</p>
        <div class="tags">${c.stack.map((t) => `<span class="tag">${esc(t)}</span>`).join("")}</div>
      </article>`).join("");
  }

  // Training
  if (window.TRAINING) {
    $("#trainText").innerHTML = `<h3>${esc(TRAINING.title)}</h3>${TRAINING.paragraphs.map((x) => `<p>${esc(x)}</p>`).join("")}${TRAINING.topics ? `<ul>${TRAINING.topics.map((t) => `<li>${esc(t)}</li>`).join("")}</ul>` : ""}`;
  }

  SITE.reveal();
  SITE.zoomables();
})();
