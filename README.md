# Bengisu Saraç

## Computer Scientist | Applied AI, Cloud & On-Premise

I build enterprise AI systems across cloud and on-premise environments:
retrieval-augmented generation, agent workflows, and computer vision, integrated with real
business data sources. I work across Azure, AWS and Google Cloud, and deliver locally
hosted deployments where data residency requires it. Microsoft Certified Trainer and Azure
Solutions Architect Expert. I design and draw, too.

Live site: **[beng262.github.io](https://beng262.github.io)**

## What I work on

- **B-Agent** – nine production AI apps on Azure for UnifyTech: Law, Research, Roleplay,
  HYPE, Efor, Atlas, HR, Sign and the platform that ties them together. Screens and details
  are on the [live site](https://beng262.github.io/#bagent).

- **Retrieval over legal corpora** – daily ingest of legislation and case law, multi-index
  routing, legislation comparison, contract analysis, and document generation.
- **Agent workflows** – intent routing into specialised agents over live enterprise data
  (SAP, Azure SQL), with per-tenant isolation enforced through Entra ID.
- **Computer vision** – YOLO and ResNet architectures for industrial vision tasks.

## Stack

`Python` `TypeScript` `C++` `PyTorch` `OpenCV` `React` `Flutter`

**Cloud** `Azure (AI Foundry, OpenAI, AI Search, Functions, Cosmos DB, Entra ID)` `AWS` `Google Cloud`

**On-premise** self-hosted and locally deployed AI services, for data-residency and air-gapped requirements

## Contact & Links

- 📧 [bengsrc@gmail.com](mailto:bengsrc@gmail.com)
- ![GitHub](https://img.shields.io/badge/GitHub-181717?style=flat&logo=github&logoColor=white) [GitHub Profile](https://github.com/beng262)
- ![LinkedIn](https://img.shields.io/badge/LinkedIn-0A66C2?style=flat&logo=linkedin&logoColor=white) [LinkedIn Profile](https://linkedin.com/in/bengisarac14697)
- ![ArtStation](https://img.shields.io/badge/ArtStation-13AFF0?style=flat&logo=artstation&logoColor=white) [ArtStation Portfolio](https://bengisrc.artstation.com)

## This repository

Static site served by GitHub Pages: plain HTML, CSS and JS, no framework, no build step for the
site itself. Everything is served from this repo, so each page carries a strict Content Security
Policy that allows no third-party scripts or requests. Colours follow the system light or dark
setting: light is the original #99CDEB to #FFB6D9 gradient, dark is
(the dark style of my Wallpaper App design: near-black blue, blue and lavender glows, soft bokeh,
and the iridescent "W" logo colours on edges, headings and buttons).

| Path | Purpose |
|---|---|
| `index.html` | Home: hero, projects with filters, client work, training, design and art, contact |
| `bagent.html` | The nine B-Agent apps in a switcher |
| `work/*.html` | One case study per B-Agent app (generated, see below) |
| `uiux.html`, `art.html` | Design and art pages |
| `assets/data.js` | All content: `PROJECTS`, `CLIENTS` (industry only, no client names), `TRAINING`, `BAGENT` |
| `assets/cases.json` | The longer case-study story per B-Agent app |
| `assets/site.css`, `site.js` | Shared theme, scroll reveal, image viewer |
| `assets/home.js`, `bagent.js`, `uiux.js`, `art.js` | Page scripts |
| `assets/theme.js`, `icons.js` | Reveal guard in `<head>`, icon sprite (Lucide, Simple Icons) |
| `tools/build-work.mjs` | Writes `work/*.html` from `data.js` and `cases.json` |
| `img/` | Screenshots and covers (WebP), training photos, link previews (`og.png`, `og/<app>.png`) |
| `img/art/` | Paintings from my ArtStation: full size, plus `t/` thumbnails; the list lives in `assets/art.js` |
| `404.html`, `sitemap.xml`, `robots.txt` | Not-found page and search-engine files |

After editing `assets/data.js` or `assets/cases.json`, rebuild the case studies:

```bash
node tools/build-work.mjs
```

A B-Agent app with `themed: true` in `data.js` has two captures per screen: `img/<shot>.webp`
(light) and `img/<shot>-dark.webp` (dark), and the page picks the one matching the system theme.

Screenshots of the B-Agent apps come from the live apps. People, companies and tenant figures in
them were replaced with made-up ones before capture, and company names in the training photos
are blurred.
