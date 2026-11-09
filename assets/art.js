// art.html: the gallery, pictures only. Names and details live on my ArtStation (bengisrc).
// imgs: files in img/art/ (full size) and img/art/t/ (thumbnail). The first one is the cover.
// alt is for screen readers only; nothing is written on the page.
(() => {
  const PIECES = [
    { alt: "Scarlet Witch, digital painting", cat: "Painting", imgs: ["scarlet-1", "scarlet-2"], pos: "70% 35%" },
    { alt: "Miraak, digital painting", cat: "Painting", imgs: ["miraak-1", "miraak-2"] },
    { alt: "Arcane-style portraits", cat: "Painting", imgs: ["arcane-1", "arcane-2"] },
    { alt: "Misty forest, digital painting", cat: "Painting", imgs: ["fall-1", "fall-2"] },
    { alt: "Botanical prints, illustration series", cat: "Illustration", imgs: ["garden-1", "garden-2", "garden-3", "garden-4", "garden-5", "garden-6", "garden-7"] },
    { alt: "Sonic, digital painting", cat: "Painting", imgs: ["sonic-1"] },
    { alt: "Mr. Mime, 3D model", cat: "3D", imgs: ["mime-1", "mime-2"] },
    { alt: "An eye, digital painting", cat: "Painting", imgs: ["eye-1"] },
    { alt: "A kitten, digital painting", cat: "Painting", imgs: ["kitty-1"] },
    { alt: "A bunny, digital painting", cat: "Painting", imgs: ["bunny-1"] },
  ];
  const CATS = ["All", "Painting", "Illustration", "3D"];

  const grid = document.getElementById("gallery");
  const bar = document.getElementById("cats");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  bar.innerHTML = CATS.map((c, i) => `<button type="button" aria-pressed="${i === 0}">${c}</button>`).join("");
  grid.innerHTML = PIECES.map((p, i) => `
    <figure class="piece reveal" data-cat="${p.cat}">
      <button type="button" class="shot" data-i="${i}" aria-label="View larger: ${esc(p.alt)}">
        <img src="img/art/t/${p.imgs[0]}.webp" alt="${esc(p.alt)}" loading="lazy" decoding="async"${p.pos ? ` style="object-position:${p.pos}"` : ""} />
        ${p.imgs.length > 1 ? `<span class="count"><svg class="ic" aria-hidden="true"><use href="#i-layers"></use></svg> ${p.imgs.length}</span>` : ""}
      </button>
    </figure>`).join("");

  grid.addEventListener("click", (e) => {
    const b = e.target.closest(".shot");
    if (!b) return;
    const p = PIECES[+b.dataset.i];
    SITE.open(p.imgs.map((f, k) => [`img/art/${f}.webp`, p.imgs.length > 1 ? `${k + 1} / ${p.imgs.length}` : ""]), 0);
  });

  bar.addEventListener("click", (e) => {
    const b = e.target.closest("button");
    if (!b) return;
    bar.querySelectorAll("button").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    const cat = b.textContent;
    grid.querySelectorAll(".piece").forEach((f) => { f.hidden = cat !== "All" && f.dataset.cat !== cat; });
  });

  SITE.reveal();
})();
