// art.html gallery
const pieces = [
    { title: "Axolotl growth stages", meta: "WellnessMate · digital illustration", image: "img/personal/wellness-axolotls.webp" },
    { title: "WellnessMate logo", meta: "App and game art", image: "img/personal/wellness-logo.webp" },
    { title: "More on ArtStation", meta: "Illustration, characters and 3D", image: "" }
  ];

  const grid = document.getElementById("grid");
  pieces.forEach(p => {
    const card = document.createElement("a");
    card.className = "card";
    card.href = "https://bengisrc.artstation.com";
    card.target = "_blank";
    card.rel = "noopener";
    card.style.textDecoration = "none";
    card.style.color = "white";

    const thumb = document.createElement("div");
    thumb.className = "thumb";
    const img = document.createElement("img");
    img.alt = p.title;
    const fallback = 'data:image/svg+xml;utf8,' + encodeURIComponent(
      `<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='800'><defs><linearGradient id='g' x1='0' x2='1' y1='0' y2='1'><stop offset='0' stop-color='#99CDEB'/><stop offset='1' stop-color='#FFB6D9'/></linearGradient></defs><rect width='100%' height='100%' fill='url(#g)'/><text x='50%' y='50%' fill='#ffffff' font-weight='bold' font-family='Arial' font-size='34' text-anchor='middle' dominant-baseline='middle'>${p.title}</text></svg>`
    );
    img.src = p.image || fallback;
    img.onerror = () => { img.src = fallback; };
    thumb.appendChild(img);

    const body = document.createElement("div");
    body.className = "card-body";
    const t = document.createElement("div"); t.className = "title"; t.textContent = p.title;
    const m = document.createElement("div"); m.className = "meta"; m.textContent = p.meta;
    body.appendChild(t); body.appendChild(m);

    card.appendChild(thumb); card.appendChild(body);
    grid.appendChild(card);
  });
