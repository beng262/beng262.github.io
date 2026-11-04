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

Static site served by GitHub Pages: plain HTML, CSS and JS, no framework. Everything is
served from this repo (fonts and icons included), so each page carries a strict Content
Security Policy that allows no third-party scripts or requests.

| Path | Purpose |
|---|---|
| `index.html` | Home: hero, B-Agent product switcher, approach, personal projects, contact |
| `work/*.html` | One case study per B-Agent app (generated, see below) |
| `uiux.html`, `art.html` | Design and art pages |
| `assets/data.js` | Products and projects on the home page. Edit text here |
| `assets/cases.json` | The longer case-study story per app: problem, approach, flow, hard problems, numbers |
| `assets/site.css`, `site.js` | Shared theme (dark and light), nav, scroll reveal, image viewer |
| `assets/home.js`, `uiux.js`, `art.js` | Page scripts |
| `assets/theme.js`, `icons.js`, `fonts/` | Theme before first paint, icon sprite (Lucide, Simple Icons), self-hosted fonts (OFL) |
| `tools/build-work.mjs` | Writes `work/*.html` from `data.js` and `cases.json` |
| `img/` | Screenshots (WebP), link-preview images (`og.png`, `og/<app>.png`) |
| `404.html`, `sitemap.xml`, `robots.txt` | Not-found page and search-engine files |
| `development.html` | Old URL, redirects to the home page |

After editing `assets/data.js` or `assets/cases.json`, rebuild the case studies:

```bash
node tools/build-work.mjs
```

Screenshots of the B-Agent apps come from the live apps. People, companies and tenant
figures in them were replaced with made-up ones before capture.
