// Everything the home page lists. Edit text here; index.html only lays it out.
// shots: [file under img/, caption]. Screens come from the live apps (in Turkish);
// people and company names in them are replaced with made-up ones.

window.BAGENT = [
  {
    id: "law", name: "Law", color: "#3b6ef6", url: "law.bagent.com.tr",
    tagline: "An AI legal assistant for Turkish lawyers, grounded in real law.",
    does: [
      "Ask a legal question, get an answer that cites real court decisions and laws.",
      "Draft 14 kinds of documents, from petitions to contracts, and export to Word, PDF or UYAP format.",
      "Upload a contract and get a clause-by-clause risk map with suggested rewrites.",
      "Search case law, compare two versions of a law, run legal interest calculations.",
      "Keep case files, with an AI summary of every new document.",
    ],
    hood: [
      "About 11 million court decisions and 46,000 legislation documents in Azure AI Search, refreshed daily.",
      "Citation guard: every case number in an answer is checked against the index. Anything unverifiable is removed.",
      "Each owner's content is encrypted with its own key (AES-256-GCM). One access rule for case files, no admin bypass.",
      "Also ships as a Microsoft Teams app and an Outlook add-in.",
    ],
    stack: ["React", "Node.js", "Azure OpenAI", "Azure AI Search", "Cosmos DB", "Python", "Docker"],
    shots: [
      ["law/chat", "An answer built on Yargıtay case law"],
      ["law/caselaw", "Semantic search over 9,485 matching decisions"],
      ["law/panel", "Every legal tool in one panel"],
      ["law/generator", "Drafting studio for contracts and petitions"],
    ],
  },
  {
    id: "research", name: "Research", color: "#0aa5c9", url: "research.bagent.com.tr",
    tagline: "Chat with your company's documents and data, securely.",
    does: [
      "Ask across SharePoint, OneDrive, Outlook, Power BI, databases and uploads.",
      "Answers list only the sources they actually cite.",
      "Schedule questions to run on their own; answers land in your chat.",
      "Turn any answer into a designed PowerPoint deck.",
      "Code in the browser with an AI assistant, on GitHub repos or your own computer.",
    ],
    hood: [
      "17 connector types feed a resumable three-step indexing pipeline: extract, embed, search.",
      "Chats are encrypted per user (AES-256-GCM). Admins see usage counts, never message text.",
      "An MCP server brings the same knowledge into VS Code and Claude Code, with the same permission filter.",
      "A background Lab reviews codebases: 7,298 findings across 4 repos so far.",
    ],
    stack: ["React", "TypeScript", "Azure Functions", "Cosmos DB", "Azure AI Search", "Azure OpenAI", "MCP"],
    shots: [
      ["research/answer", "Asking a sales database in plain Turkish"],
      ["research/code", "Code tab: an IDE with an AI assistant"],
      ["research/tasks", "Scheduled questions that run on their own"],
      ["research/home", "Home: pick sources, web search, voice"],
    ],
  },
  {
    id: "roleplay", name: "Roleplay", color: "#d9a10b", url: "roleplay.bagent.com.tr",
    tagline: "Practise sales conversations with an AI customer first.",
    does: [
      "Pick a scenario, like a price objection or an angry customer, and talk to an AI customer.",
      "Practise in text or by voice, against the clock.",
      "Get a score and a coaching note: strengths, what to improve, next steps.",
      "Managers build scenarios with a 5-step wizard, or let AI fill it in from one paragraph.",
    ],
    hood: [
      "The AI customer knows current product facts, synced from the brand's website and uploaded files.",
      "Real-time voice over WebRTC to an Azure OpenAI realtime model, with short-lived secrets.",
      "Each company's data is kept apart, with 5 roles. Tokens live only in HttpOnly cookies.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Python", "PostgreSQL", "Azure OpenAI"],
    shots: [
      ["roleplay/chat", "A live practice call with an upset customer"],
      ["roleplay/summary", "Score and coaching note after the call"],
      ["roleplay/pick", "Choose your role: seller or customer"],
      ["roleplay/scenarios", "Scenario library, dark theme"],
    ],
  },
  {
    id: "hype", name: "HYPE", color: "#e4478f", url: "hype.bagent.com.tr",
    tagline: "An AI marketing studio for campaigns, content, email and automation.",
    does: [
      "Plan campaigns and track KPIs and channel mix on one dashboard.",
      "Write posts and generate images with AI, then publish to social accounts.",
      "Turn a product link into a short vertical video ad with script and voiceover.",
      "Design emails with drag and drop and schedule them to contact lists.",
      "Automate birthday, renewal and follow-up emails.",
    ],
    hood: [
      "One campaign store feeds the dashboard, reports and chatbot, so the numbers always agree.",
      "A backend keeps API keys out of the browser, rate-limits each user and encrypts social tokens.",
      "Seven server-side workflow actions, from SendGrid to HubSpot. Images fall back across 4 providers.",
    ],
    stack: ["React", "TypeScript", "Azure Functions", "Azure Storage", "Azure OpenAI", "FFmpeg"],
    shots: [
      ["hype/campaigns", "Campaigns with budget, reach and A/B results"],
      ["hype/templates", "Email templates, ready to customise"],
      ["hype/content", "Content studio for posts and visuals"],
      ["hype/automation", "Automations that run themselves"],
      ["hype/ads", "Product link to video ad"],
    ],
  },
  {
    id: "efor", name: "Efor", color: "#38c9f0", url: "efor.bagent.com.tr",
    tagline: "Log work hours however you like; AI turns them into reports.",
    does: [
      "Report effort as an Excel sheet, a text file, a chat sentence or calendar meetings.",
      "Check the AI-drafted rows next to the source and confirm with one click.",
      "See your week, projects, tickets and project files in one place.",
      "Ready-made reports, Excel with live formulas, PDF, scheduled emails, missing-day reminders.",
    ],
    hood: [
      "AI reads, code decides: dates, hours, totals and every database write are tested code.",
      "A confirmed file layout is remembered, so the next file in that layout skips the model.",
      "Syncs with Microsoft Planner and the ServiceDesk; calendar access is per person and read-only.",
      "Tested end to end, with database tests on in-process PostgreSQL.",
    ],
    stack: ["TypeScript", "Node.js", "PostgreSQL", "Azure OpenAI", "Microsoft Graph", "Vitest"],
    shots: [
      ["efor/week", "My week: hours, overtime and missing days"],
      ["efor/projects", "Projects synced with Planner"],
      ["efor/reports", "Effort per project, ready to export"],
      ["efor/tickets", "Open tickets per person and customer"],
    ],
    extra: { label: "Public preview on GitHub", href: "https://github.com/beng262/Effort-Tracker" },
  },
  {
    id: "atlas", name: "Atlas", color: "#ef4444", url: "atlas.bagent.com.tr",
    tagline: "See your Microsoft 365 security, users and licences at a glance.",
    does: [
      "A tenant health dashboard: MFA coverage, risk, licence use, admin roles and storage.",
      "A security report per user: risk level, MFA, failed sign-ins, legacy auth, sign-ins from several countries.",
      "Licence, mailbox, OneDrive and SharePoint storage and Teams views, with search and CSV export.",
      "Ask the built-in AI assistant about your tenant, or email a report with an Excel attachment.",
    ],
    hood: [
      "Runs in the browser and reads Microsoft Graph with the signed-in admin's own token.",
      "Spots when Microsoft 365 usage reports are anonymised and can switch that setting through the Graph admin API.",
      "Started life as a PowerShell reporting script; I rebuilt it as a React app.",
    ],
    stack: ["React", "Vite", "Tailwind", "MSAL", "Microsoft Graph", "Azure OpenAI", "Recharts"],
    shots: [
      ["atlas/dashboard", "Tenant dashboard: users, MFA, risk, admin roles"],
      ["atlas/licenses", "Licence use and unlicensed users"],
      ["atlas/storage", "OneDrive and SharePoint storage"],
      ["atlas/teams", "Teams and their members"],
    ],
  },
  {
    id: "hr", name: "HR", color: "#f97316", url: "hr.bagent.com.tr",
    tagline: "An HR portal with a chatbot that can actually do things.",
    does: [
      "Manage employee records, the org chart, leave, events and payroll transactions.",
      "Request leave, advances, expenses, overtime or visa letters, with manager approval.",
      "Ask the HR chatbot to check leave or update records, in Turkish or English.",
      "Works on its own with Excel import, or syncs with an HR system.",
    ],
    hood: [
      "The portal and the chatbot share one action API of 21 HR actions; the chatbot reaches them through 13 tools, as the signed-in user.",
      "Roles are enforced on the server: employees reach only their own data, managers act on their team.",
      "A mock mode runs the whole app on local sample data, with no cloud services.",
    ],
    stack: ["React 19", "TypeScript", "Vite", "Azure Functions", "MSAL", "Azure OpenAI", "Azure Speech"],
    shots: [
      ["hr/people", "People directory"],
      ["hr/requests", "Requests waiting for approval"],
      ["hr/leave", "Leave records with return dates"],
      ["hr/home", "Portal home with quick actions"],
    ],
  },
  {
    id: "sign", name: "Sign", color: "#14b8a6", url: "sign.bagent.com.tr",
    tagline: "Checks whether a cheque signature matches the one on file.",
    does: [
      "Upload a cheque and a signature circular, as images or PDFs.",
      "Get a 0 to 100 score with a Match, Review or No match decision.",
      "Approve or retry, and keep a history of every comparison.",
    ],
    hood: [
      "Its own ML service: YOLOv8 finds the signatures, a Siamese CNN turns each into a 256-number fingerprint.",
      "Every pair of detected regions is compared, so stamps and second signatures don't fool it.",
      "Simple signatures automatically get a stricter threshold.",
      "Microsoft sign-in in three layers: the site, an API token check, an IP-locked ML service.",
    ],
    stack: ["React", "TypeScript", "Node.js", "Python", "PyTorch", "YOLOv8", "Docker"],
    shots: [["sign/result", "A synthetic test cheque, scored and explained"]],
  },
  {
    id: "platform", name: "Platform", color: "#8b5cf6", url: "bagent.com.tr",
    tagline: "One home for every B-Agent product, with sign-in and seats.",
    does: [
      "Product pages, pricing and contact, in Turkish and English.",
      "Sign in with a Microsoft work account and land in your company's own workspace.",
      "Company admins invite colleagues and choose who can use which product.",
      "Pick the Azure region where your company's data and AI live.",
    ],
    hood: [
      "Licensing control plane: seats per product per company, checked at sign-in.",
      "One Entra ID model across every *.bagent.com.tr app.",
      "The WordPress site and the React landing page share one TR/EN translation file.",
    ],
    stack: ["React", "Vite", "Express", "MSAL", "WordPress", "Docker", "App Service"],
    shots: [
      ["bagent/platform", "app.bagent.com.tr, the English landing page"],
      ["bagent/agents", "Nine agents, one per business function"],
    ],
  },
];

// Smaller pieces of the platform, shown as text cards.
window.BAGENT_MORE = [
  { name: "LicenseIQ", color: "#22a559", text: "Finds wasted Microsoft 365 licences across every tenant an IT provider manages. I connected it to real data: admin API, reports and Copilot ROI, then shipped it." },
  { name: "Guardrail Demo", color: "#94a3b8", text: "Shows, with real attacks, how AI agents stay safe: jailbreaks, hidden prompt injections and data-leak requests blocked across four layers, with Turkish ID, IBAN and phone masking." },
  { name: "Teams & Outlook", color: "#3b6ef6", text: "B-Agent Law inside Microsoft Teams, and an Outlook add-in that reviews an attached contract and drafts the reply." },
  { name: "VS Code bridge", color: "#0aa5c9", text: "A VS Code extension and CLI that let Research's AI work on files on your own computer. The server never relays file contents, and every write needs a click." },
];

window.PROJECTS = [
  {
    name: "AI-Powered Finance Agent", kind: "TypeScript · open source", img: "personal/finance-agent", color: "#99cdeb",
    line: "A free toolkit that fetches Turkish and US market data and understands finance questions.",
    points: ["One typed interface over Borsa Istanbul, TCMB, TEFAS, TUIK, SEC and CBOE.", "Routes questions by topic with any AI model, or by keywords without one.", "No dependencies, a prompt-injection guard, refreshed every weekday by a GitHub Action."],
    tags: ["TypeScript", "LLM agents", "Market data", "GitHub Actions"],
    links: [["Live page", "https://beng262.github.io/AI-Powered-Finance-Agent/"], ["GitHub", "https://github.com/beng262/AI-Powered-Finance-Agent"]],
  },
  {
    name: "WellnessMate", kind: "Flutter · Firebase", img: "personal/wellness-screens", color: "#7cc4ff",
    line: "A habit tracker where finishing your daily goals keeps a pet axolotl growing.",
    points: ["Daily goals, a mood diary, a calendar and colour themes.", "Flutter app with Firebase sign-in and cloud sync.", "All the art is drawn by me."],
    tags: ["Flutter", "Dart", "Firebase", "Illustration"],
    links: [["GitHub", "https://github.com/beng262/WellnessMate"]],
  },
  {
    name: "DrawNow!", kind: "JavaScript · no libraries", img: "personal/canvas", color: "#ffb6d9",
    line: "A drawing app in the browser, with layers and real brushes.",
    points: ["Layers with opacity and clipping, undo and redo, zoom from 10% to 3200%.", "Nine brushes including watercolor and charcoal, plus a gap-closing bucket fill.", "About 3,300 lines of plain JavaScript."],
    tags: ["JavaScript", "Canvas API", "Graphics"],
    links: [["Try it", "https://beng262.github.io/Canvas/"], ["GitHub", "https://github.com/beng262/Canvas"]],
  },
  {
    name: "Loud Town", kind: "Flutter · graduation project", img: "personal/loudtown-art", color: "#ff5c8a", contain: true,
    line: "My graduation game: find hidden objects in town scenes generated fresh every level.",
    points: ["Builds each scene at run time from sprites and recoloured variants.", "Difficulty adapts to your solve times, aiming for about five minutes a level.", "A spatial grid keeps placed objects from overlapping."],
    tags: ["Flutter", "Procedural generation", "Adaptive difficulty"],
    links: [], note: "Private repository",
  },
  {
    name: "TimeShift", kind: "React · daily puzzle", tile: "TS", color: "#c4b5fd",
    line: "A daily word puzzle: everyone gets the same word, and hints cost points.",
    points: ["The word is picked from the date, so every player shares one puzzle a day.", "Score starts at 1000; wrong guesses and hints lower it.", "Progress is saved in the browser."],
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    links: [["Play", "https://snazzy-sable-5d7ded.netlify.app"], ["GitHub", "https://github.com/beng262/TimeShift-Daily-Word-Game"]],
  },
  {
    name: "Bengimini", kind: "HTML · CSS · hackathon", tile: "Bm", color: "#ffb6d9",
    line: "A personal blog design that made the finals of a UI hackathon.",
    points: ["Sections for projects, art, daily life, recipes and pets.", "Light and dark themes, comments and recipe checklists.", "Hand-written HTML, CSS and JavaScript."],
    tags: ["HTML", "CSS", "UI design"],
    links: [["Visit", "https://beng262.github.io/Blog/"], ["GitHub", "https://github.com/beng262/Blog"]],
  },
];

window.EARLIER = [
  ["CNN with PyTorch", "Image classifier for CIFAR-10.", "https://github.com/beng262/CNN-Using-PyTorch"],
  ["Perceptron from scratch", "A single-layer network in NumPy, decision boundary plotted.", "https://github.com/beng262/Deep-Learning-Perceptron"],
  ["Percolation", "Weighted union-find simulation of flow through a random grid.", "https://github.com/beng262/Percolation-Project"],
  ["Simon", "The colour-sequence memory game as a native Android app.", "https://github.com/beng262/Simon_Game"],
  ["Infinite Tic-Tac-Toe", "Your oldest mark vanishes, so a game never ends in a draw.", "https://github.com/beng262/InfiniteTicTacToe"],
  ["WhatNow", "Built early screens for an iOS app now on the App Store.", "https://apps.apple.com/tr/app/decide-for-me-whatnow/id6749577335"],
];
