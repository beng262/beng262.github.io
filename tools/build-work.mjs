// Writes one static case-study page per B-Agent app to work/<id>.html.
// Reads the short facts from assets/data.js and the long story from assets/cases.json.
// Run after editing either file:  node tools/build-work.mjs
import fs from "node:fs";
import path from "node:path";
import vm from "node:vm";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const ctx = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, "assets/data.js"), "utf8"), ctx);
const apps = ctx.window.BAGENT;
const cases = JSON.parse(fs.readFileSync(path.join(root, "assets/cases.json"), "utf8"));

const esc = (s) => String(s ?? "").replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const icon = (n) => `<svg class="ic" aria-hidden="true"><use href="#i-${n}"></use></svg>`;
const mark = (c) => `<svg class="bmark" viewBox="0 0 55.7 62" aria-hidden="true"><path fill="${c}" d="M55.15,51.03c-.88,2.93-2.63,5.61-5.26,7.44-3.05,2.13-6.4,3.49-10.11,3.5l-36.16.04c-2.22,0-3.62-1.37-3.61-3.67l.05-10.87L0,40.77c-.02-1.73.5-3.77,2.23-4.57l16.8-7.73c.78-.2,1.71.3,1.71,1.13v16.29s23.01-10.33,23.01-10.33c.29-.13.6-.23.91-.29.29-.05.58-.09.87-.11,1.41-.09,2.82.33,3.99,1.13,4.94,3.33,7.35,9.02,5.62,14.74ZM2.49,16.38l12.69,5.68,23.58,10.48c.9.4,1.77.46,2.7-.05,9-4.82,13.49-15.51,8.29-24.03C47,3.94,41.25.03,35.77.03L3.37,0C1.33,0,.06,1.64.07,3.5l.02,9.33c0,1.69.93,2.89,2.4,3.55Z"/></svg>`;
const CSP = "default-src 'self'; script-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; object-src 'none'; base-uri 'self'; form-action 'none'; frame-src 'none'";

fs.mkdirSync(path.join(root, "work"), { recursive: true });

apps.forEach((p, i) => {
  const c = cases[p.id] || {};
  const prev = apps[(i - 1 + apps.length) % apps.length], next = apps[(i + 1) % apps.length];
  const title = `B-Agent ${p.name} – case study – Bengisu Saraç`;
  const ogImg = fs.existsSync(path.join(root, `img/og/${p.id}.png`)) ? `img/og/${p.id}.png` : "img/og.png";
  const shots = p.shots.map(([src, cap], j) => `
        <figure class="${j ? "shot" : "shot main"}">
          <div class="browser"><div class="bar"><i></i><i></i><i></i><span class="url">${icon("lock")}${esc(p.url)}</span></div>
          <picture>${p.themed ? `<source srcset="../img/${src}-dark.webp" media="(prefers-color-scheme: dark)" />` : ""}<img src="../img/${src}.webp" alt="${esc(`B-Agent ${p.name}: ${cap}`)}" width="1440" height="900" ${j ? 'loading="lazy"' : 'fetchpriority="high"'} data-zoom="${esc(`B-Agent ${p.name} · ${cap}`)}" data-group="shots" /></picture></div>
          <figcaption>${esc(cap)}</figcaption>
        </figure>`).join("");
  const numbers = (c.numbers || []).map((n) => `<div class="num"><b>${esc(n.value)}</b><span>${esc(n.label)}</span></div>`).join("");
  const flow = (c.flow || []).map((f, j) => `<li class="step reveal"><span class="k">${String(j + 1).padStart(2, "0")}</span><b>${esc(f.label)}</b><span>${esc(f.detail)}</span></li>`).join("");
  const challenges = (c.challenges || []).map((h, j) => `<article class="hard spot reveal"><span class="k">Problem ${j + 1}</span><h3>${esc(h.title)}</h3><p>${esc(h.text)}</p></article>`).join("");

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta http-equiv="Content-Security-Policy" content="${CSP}" />
  <meta name="referrer" content="strict-origin-when-cross-origin" />
  <title>${esc(title)}</title>
  <meta name="description" content="${esc(p.tagline + " " + (c.approach || ""))}" />
  <meta property="og:title" content="${esc(`B-Agent ${p.name}: ${p.tagline}`)}" />
  <meta property="og:description" content="${esc(c.problem || p.tagline)}" />
  <meta property="og:image" content="https://beng262.github.io/${ogImg}" />
  <meta property="og:url" content="https://beng262.github.io/work/${p.id}.html" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="canonical" href="https://beng262.github.io/work/${p.id}.html" />
  <link rel="icon" href="../favicon.svg" type="image/svg+xml" />
  <link rel="icon" href="../favicon-32.png" type="image/png" sizes="32x32" />
  <link rel="apple-touch-icon" href="../apple-touch-icon.png" />
  <script src="../assets/theme.js"></script>
  <link rel="stylesheet" href="../assets/site.css" />
  <link rel="stylesheet" href="../assets/work.css" />
</head>
<body style="--c:${p.color}">
  <script src="../assets/icons.js"></script>
  <div class="wrap top">
    <a class="back" href="../bagent.html#${p.id}">${icon("left")} All B-Agent apps</a>
    <a class="back" href="../index.html">Home</a>
  </div>

  <main>
    <section class="case-hero wrap">
      <div class="hero-grid">
        <div>
          <span class="kicker">Case study · B-Agent</span>
          <h1 class="reveal">${mark(p.color)} B-Agent <em>${esc(p.name)}</em></h1>
          <p class="lead reveal">${esc(p.tagline)}</p>
          ${c.role ? `<p class="role reveal">${icon("sparkles")} ${esc(c.role)}</p>` : ""}
          <div class="cta-row reveal">
            <a class="btn solid" href="https://${p.url}" target="_blank" rel="noopener">${esc(p.url)} ${icon("ext")}</a>
            ${p.extra ? `<a class="btn" href="${p.extra.href}" target="_blank" rel="noopener">${icon("github")} ${esc(p.extra.label)}</a>` : ""}
          </div>
        </div>
        ${numbers ? `<div class="nums reveal">${numbers}</div>` : ""}
      </div>
    </section>

    <section class="wrap gallery">${shots}
    </section>

    ${c.problem || c.approach ? `<section class="wrap story">
      ${c.problem ? `<div class="reveal"><span class="kicker">The problem</span><p>${esc(c.problem)}</p></div>` : ""}
      ${c.approach ? `<div class="reveal"><span class="kicker">The approach</span><p>${esc(c.approach)}</p></div>` : ""}
    </section>` : ""}

    ${flow ? `<section class="wrap block">
      <span class="kicker">How it works</span>
      <h2 class="reveal">From request to answer, step by step.</h2>
      <ol class="flow">${flow}</ol>
    </section>` : ""}

    <section class="wrap block cols2">
      <div class="reveal"><h4>What it does</h4><ul>${p.does.map((d) => `<li>${esc(d)}</li>`).join("")}</ul></div>
      <div class="reveal hood"><h4>Under the hood</h4><ul>${p.hood.map((d) => `<li>${esc(d)}</li>`).join("")}</ul></div>
    </section>

    ${challenges ? `<section class="wrap block">
      <span class="kicker">Hard problems</span>
      <h2 class="reveal">What took real engineering.</h2>
      <div class="hards">${challenges}</div>
    </section>` : ""}

    <section class="wrap block">
      <span class="kicker">Built with</span>
      <div class="stack reveal">${p.stack.map((s) => `<span class="tag">${esc(s)}</span>`).join("")}</div>
    </section>

    <nav class="wrap pager" aria-label="More B-Agent apps">
      <a href="${prev.id}.html" style="--c:${prev.color}">${icon("left")}<span><small>Previous</small>B-Agent ${esc(prev.name)}</span></a>
      <a href="${next.id}.html" style="--c:${next.color}" class="next"><span><small>Next</small>B-Agent ${esc(next.name)}</span>${icon("right")}</a>
    </nav>
  </main>

  <footer class="foot">Screens are from the live app.<br />© 2026 Bengisu Saraç · <a href="../index.html">Back to home</a></footer>

  <figure class="lb" id="lb" role="dialog" aria-modal="true" aria-label="Screenshot viewer">
    <div><img id="lbImg" alt="" /><figcaption id="lbCap"></figcaption></div>
    <button class="prev" id="lbPrev" aria-label="Previous">${icon("left")}</button>
    <button class="next" id="lbNext" aria-label="Next">${icon("right")}</button>
    <button class="x" id="lbX" aria-label="Close">${icon("x")}</button>
  </figure>

  <script src="../assets/site.js"></script>
</body>
</html>
`;
  fs.writeFileSync(path.join(root, "work", `${p.id}.html`), html);
  console.log(`work/${p.id}.html`, c.flow ? "" : "(no case content yet)");
});
