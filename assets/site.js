// Shared behaviour for every page: scroll reveal, image viewer.
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const calm = matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Reveal elements as they scroll into view. Call SITE.reveal() again after adding new ones.
  const io = "IntersectionObserver" in window
    ? new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: 0.12 })
    : null;
  function reveal() {
    document.querySelectorAll(".reveal:not([data-watch])").forEach((el, i) => {
      el.dataset.watch = "1";
      el.style.transitionDelay = (i % 4) * 70 + "ms";
      if (io) io.observe(el); else el.classList.add("in");
    });
  }

  // Image viewer: any element with data-zoom opens it; data-full overrides the image shown
  const lb = $("#lb"), lbImg = $("#lbImg"), lbCap = $("#lbCap");
  let list = [], idx = 0, from = null;
  function show(i) {
    idx = (i + list.length) % list.length;
    lbImg.src = list[idx][0]; lbImg.alt = list[idx][1]; lbCap.textContent = list[idx][1];
    $("#lbPrev").hidden = $("#lbNext").hidden = list.length < 2;
  }
  function open(l, i) {
    if (!lb) return;
    list = l; from = document.activeElement;
    lb.classList.add("open"); document.body.style.overflow = "hidden";
    show(i); $("#lbX").focus();
  }
  function close() { lb.classList.remove("open"); document.body.style.overflow = ""; if (from && from.focus) from.focus(); }
  if (lb) {
    $("#lbPrev").addEventListener("click", () => show(idx - 1));
    $("#lbNext").addEventListener("click", () => show(idx + 1));
    $("#lbX").addEventListener("click", close);
    lb.addEventListener("click", (e) => { if (e.target === lb) close(); });
    addEventListener("keydown", (e) => {
      if (!lb.classList.contains("open")) return;
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") show(idx - 1);
      if (e.key === "ArrowRight") show(idx + 1);
    });
  }
  function zoomables(scope = document) {
    const groups = {};
    scope.querySelectorAll("[data-zoom]").forEach((el) => { const g = el.dataset.group || "all"; (groups[g] = groups[g] || []).push(el); });
    Object.values(groups).forEach((all) => all.forEach((el, i) => {
      if (el.dataset.zoomBound) return;
      el.dataset.zoomBound = "1";
      el.addEventListener("click", () => open(all.map((a) => [a.dataset.full || a.currentSrc || a.src, a.dataset.zoom]), i));
    }));
  }

  // Dark theme layers: soft glows and bokeh lights that drift a little with scroll and the pointer.
  // Only their transform changes, so the rest of the page is never restyled.
  const glow = document.createElement("div"), bokeh = document.createElement("div");
  glow.className = "bg-glow"; bokeh.className = "bg-bokeh";
  glow.setAttribute("aria-hidden", "true"); bokeh.setAttribute("aria-hidden", "true");
  document.body.prepend(glow, bokeh);
  if (!calm) {
    let sy = 0, px = 0, py = 0, queued = false;
    const paint = () => {
      queued = false;
      glow.style.transform = `translate3d(${(-26 * px).toFixed(1)}px, ${(-20 * py - 90 * sy).toFixed(1)}px, 0) rotate(${(8 * sy).toFixed(2)}deg)`;
      bokeh.style.transform = `translate3d(${(-60 * px).toFixed(1)}px, ${(-44 * py - 260 * sy).toFixed(1)}px, 0)`;
    };
    const queue = () => { if (!queued) { queued = true; requestAnimationFrame(paint); } };
    addEventListener("scroll", () => { const m = document.documentElement.scrollHeight - innerHeight; sy = m > 0 ? scrollY / m : 0; queue(); }, { passive: true });
    if (matchMedia("(pointer: fine)").matches) addEventListener("pointermove", (e) => { px = e.clientX / innerWidth - 0.5; py = e.clientY / innerHeight - 0.5; queue(); }, { passive: true });
  }
  // Cards light up under the pointer (dark theme)
  document.addEventListener("pointermove", (e) => {
    const c = e.target.closest && e.target.closest(".card, .piece");
    if (!c) return;
    const r = c.getBoundingClientRect();
    c.style.setProperty("--mx", (e.clientX - r.left).toFixed(0) + "px");
    c.style.setProperty("--my", (e.clientY - r.top).toFixed(0) + "px");
  }, { passive: true });

  window.SITE = { reveal, open, zoomables, calm, $ };
  reveal(); zoomables();
})();
