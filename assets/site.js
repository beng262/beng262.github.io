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

  window.SITE = { reveal, open, zoomables, calm, $ };
  reveal(); zoomables();
})();
