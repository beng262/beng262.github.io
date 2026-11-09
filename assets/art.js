// art.html: the gallery. Pieces come from my ArtStation (bengisrc) plus game art from WellnessMate.
// imgs: files in img/art/ (full size) and img/art/t/ (thumbnail). The first one is the cover.
(() => {
  const AS = "https://www.artstation.com/artwork/";
  const PIECES = [
    { title: "Scarlet Witch", cat: "Painting", kind: "Digital painting · ibisPaint X", note: "About twenty hours, after a long break from big pieces.", imgs: ["scarlet-1", "scarlet-2"], pos: "70% 35%", link: AS + "nErno4" },
    { title: "Miraak", cat: "Painting", kind: "Digital painting · MediBang Paint", note: "Drawn at sixteen for a friend, over ten days.", imgs: ["miraak-1", "miraak-2"], link: AS + "Rn81Er" },
    { title: "Arcane-style portraits", cat: "Painting", kind: "Digital painting · ibisPaint", note: "Portraits in the style of the Arcane series, mostly airbrush.", imgs: ["arcane-1", "arcane-2"], link: AS + "Bk2r5k" },
    { title: "Mystery Fall", cat: "Painting", kind: "Digital painting · MediBang Paint", note: "My first environment piece, repainted later. Portraits were always my thing.", imgs: ["fall-1", "fall-2"], link: AS + "9NWDmy" },
    { title: "Garden of Aesthetic", cat: "Illustration", kind: "Illustration series · 7 prints", note: "Prints for my room, in the colours I couldn't find in shops.", imgs: ["garden-1", "garden-2", "garden-3", "garden-4", "garden-5", "garden-6", "garden-7"], link: AS + "kl0qJ6" },
    { title: "Sonic", cat: "Painting", kind: "Digital painting", note: "For my little brother, the biggest Sonic fan I know.", imgs: ["sonic-1"], link: AS + "B3Bn2m" },
    { title: "Mr. Mime", cat: "3D", kind: "3D model · Blender", note: "Most of my 3D lives inside my games; this one I could share.", imgs: ["mime-1", "mime-2"], link: AS + "XJoz3Y" },
    { title: "Digital Eye", cat: "Painting", kind: "Digital painting · MediBang Paint", note: "My second digital drawing, at fifteen.", imgs: ["eye-1"], link: AS + "Rn81KD" },
    { title: "Some Kind of Kitty", cat: "Painting", kind: "Digital painting · MediBang Paint", note: "My very first digital piece, at fourteen, on a tablet bought with my savings.", imgs: ["kitty-1"], link: AS + "LeoLYl" },
    { title: "Cute Bunny", cat: "Painting", kind: "Digital painting", note: "A short, happy one.", imgs: ["bunny-1"], link: AS + "ZeyKkN" },
    { title: "Axolotl growth stages", cat: "Game art", kind: "Game art · WellnessMate", note: "The pet grows up as you finish your daily goals.", imgs: ["axolotls"] },
    { title: "WellnessMate logo", cat: "Game art", kind: "Game art · logo", note: "The logo for my wellness pet game.", imgs: ["wellness-logo"] },
  ];
  const CATS = ["All", "Painting", "Illustration", "3D", "Game art"];

  const grid = document.getElementById("gallery");
  const bar = document.getElementById("cats");
  const icon = (id) => `<svg class="ic" aria-hidden="true"><use href="#i-${id}"></use></svg>`;
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));

  bar.innerHTML = CATS.map((c, i) => `<button type="button" aria-pressed="${i === 0}">${c}</button>`).join("");
  grid.innerHTML = PIECES.map((p, i) => `
    <figure class="piece reveal" data-cat="${p.cat}">
      <button type="button" class="shot" data-i="${i}" aria-label="Open ${esc(p.title)}">
        <img src="img/art/t/${p.imgs[0]}.webp" alt="${esc(p.title)}" loading="lazy" decoding="async"${p.pos ? ` style="object-position:${p.pos}"` : ""} />
        ${p.imgs.length > 1 ? `<span class="count">${icon("layers")} ${p.imgs.length}</span>` : ""}
      </button>
      <figcaption>
        <b>${esc(p.title)}</b>
        <span class="kind">${esc(p.kind)}</span>
        <span class="note">${esc(p.note)}</span>
        ${p.link ? `<a href="${p.link}" target="_blank" rel="noopener">${icon("artstation")} On ArtStation</a>` : ""}
      </figcaption>
    </figure>`).join("");

  grid.addEventListener("click", (e) => {
    const b = e.target.closest(".shot");
    if (!b) return;
    const p = PIECES[+b.dataset.i];
    SITE.open(p.imgs.map((f, k) => [`img/art/${f}.webp`, p.imgs.length > 1 ? `${p.title} (${k + 1}/${p.imgs.length})` : p.title]), 0);
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
