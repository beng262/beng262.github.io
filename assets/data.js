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
      "Pick a scenario, like a price objection or a security-minded IT manager, and talk to an AI customer.",
      "Talk face to face with an avatar that listens and answers out loud in Turkish, or practise by voice or text, against the clock.",
      "Get a score and a coaching note: strengths, what to improve, next steps.",
      "Managers build scenarios with a 5-step wizard, or let AI fill it in from one paragraph.",
    ],
    hood: [
      "Talking avatars from Azure AI Speech over WebRTC: Turkish speech-to-text in, the scenario's character answers, the avatar says it with lip-sync. 15 faces to choose from.",
      "The AI customer knows current product facts, synced from the brand's website and uploaded files.",
      "Real-time voice over WebRTC to an Azure OpenAI realtime model, with short-lived secrets.",
      "Each company's data is kept apart, with 5 roles. Tokens live only in HttpOnly cookies.",
    ],
    stack: ["Next.js", "React", "TypeScript", "Tailwind", "Python", "PostgreSQL", "Azure OpenAI"],
    shots: [
      ["roleplay/avatar", "A live avatar call: Emre, an IT manager, asks about data security"],
      ["roleplay/avatar-pick", "Pick who you talk to: 15 avatar faces"],
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

// Every project on the home page, B-Agent included as one entry. cat drives the filter buttons.
window.CATS = ["All", "AI & cloud", "Games", "Apps", "Web & tools", "Coursework"];

window.PROJECTS = [
  {
    id: "bagent", name: "B-Agent", cat: "AI & cloud", img: "personal/bagent-cover", kind: "Product family · UnifyTech",
    line: "Nine AI products I built end to end: legal research, company knowledge, sales coaching, HR, marketing and more.",
    points: ["A legal assistant that searches about 11 million court decisions and checks every citation.", "Chat over SharePoint, OneDrive, Outlook and databases, encrypted per user.", "A sales coach you talk to by voice, an HR chatbot that can act, a marketing studio."],
    tags: ["Azure OpenAI", "Azure AI Search", "React", "Node.js", "Python"],
    links: [["See all nine apps", "bagent.html"]],
  },
  {
    id: "littlehours", name: "Little Hours", cat: "Games", img: "personal/topia-landscape", kind: "Godot 4 · in development", pixel: true,
    line: "A cozy pixel-art life sim for phones: your home, a farm, pets and a seaside town.",
    points: ["Eleven places, plus farming, cooking, fishing, decorating, weather and a day and night cycle.", "Neighbours make small talk written on the phone itself by a small offline AI model (Qwen3 1.7B).", "Sound made in code, a Turkish translation, and Android, iOS and web builds."],
    tags: ["Godot 4", "GDScript", "On-device AI", "Pixel art"],
    links: [], note: "Private repository", gallery: ["personal/topia-light", "personal/topia-town", "personal/topia-dusk"],
  },
  {
    id: "godotbook", name: "Learning Godot", cat: "Web & tools", img: "personal/godot-book", kind: "A free short book · ★ 2",
    line: "A short book that teaches Godot 4 by opening up one finished game.",
    points: ["12,040 lines of real code, 4 parts and 11 chapters.", "24 exercises you can check, each ending in something that runs.", "Plain HTML and CSS on GitHub Pages."],
    tags: ["Godot 4", "Technical writing", "HTML", "CSS"],
    links: [["Read it", "https://beng262.github.io/learning-godot/"], ["GitHub", "https://github.com/beng262/learning-godot"]],
  },
  {
    id: "finance", name: "AI-Powered Finance Agent", cat: "AI & cloud", img: "personal/finance-agent", kind: "TypeScript · open source",
    line: "A free toolkit that fetches Turkish and US market data and understands finance questions.",
    points: ["One typed interface over Borsa Istanbul, TCMB, TEFAS, TUIK, SEC and CBOE.", "Routes questions by topic with any AI model, or by keywords without one.", "No dependencies, a prompt-injection guard, refreshed every weekday by a GitHub Action."],
    tags: ["TypeScript", "LLM agents", "Market data"],
    links: [["Live page", "https://beng262.github.io/AI-Powered-Finance-Agent/"], ["GitHub", "https://github.com/beng262/AI-Powered-Finance-Agent"]],
  },
  {
    id: "wellness", name: "WellnessMate", cat: "Apps", img: "personal/wellness-card", kind: "Flutter · Firebase",
    line: "A habit tracker where finishing your daily goals keeps a pet axolotl growing.",
    points: ["Daily goals, a mood diary, a calendar and colour themes.", "Flutter app with Firebase sign-in and cloud sync.", "All the art is drawn by me."],
    tags: ["Flutter", "Dart", "Firebase", "Illustration"],
    links: [["GitHub", "https://github.com/beng262/WellnessMate"]], gallery: ["personal/wellness-screens", "personal/wellness-axolotls"],
  },
  {
    id: "loudtown", name: "Loud Town", cat: "Games", img: "personal/loudtown", kind: "Flutter · graduation project",
    line: "My graduation game: find hidden objects in town scenes that are built fresh every level.",
    points: ["Builds each scene at run time from sprites and recoloured variants.", "Difficulty adapts to your solve times, aiming for about five minutes a level.", "A spatial grid keeps placed objects from overlapping."],
    tags: ["Flutter", "Procedural generation", "Adaptive difficulty"],
    links: [], note: "Private repository", gallery: ["personal/loudtown-play"],
  },
  {
    id: "drawnow", name: "DrawNow!", cat: "Web & tools", img: "personal/canvas", kind: "JavaScript · no libraries",
    line: "A drawing app in the browser, with layers and real brushes.",
    points: ["Layers with opacity and clipping, undo and redo, zoom from 10% to 3200%.", "Nine brushes including watercolor and charcoal, plus a gap-closing bucket fill.", "About 3,300 lines of plain JavaScript."],
    tags: ["JavaScript", "Canvas API", "Graphics"],
    links: [["Try it", "https://beng262.github.io/Canvas/"], ["GitHub", "https://github.com/beng262/Canvas"]],
  },
  {
    id: "timeshift", name: "TimeShift", cat: "Games", img: "personal/timeshift", kind: "React · daily puzzle",
    line: "A daily word puzzle: everyone gets the same word, and hints cost points.",
    points: ["The word is picked from the date, so every player shares one puzzle a day.", "Score starts at 1000; wrong guesses and hints lower it.", "Progress is saved in the browser."],
    tags: ["React", "TypeScript", "Vite", "Tailwind"],
    links: [["Play", "https://snazzy-sable-5d7ded.netlify.app"], ["GitHub", "https://github.com/beng262/TimeShift-Daily-Word-Game"]],
  },
  {
    id: "bengimini", name: "Bengimini", cat: "Web & tools", img: "personal/bengimini", kind: "HTML · CSS · hackathon finalist",
    line: "A personal blog design that made the finals of a UI hackathon.",
    points: ["Sections for projects, art, daily life, recipes and pets.", "Light and dark themes, comments and recipe checklists.", "Hand-written HTML, CSS and JavaScript."],
    tags: ["HTML", "CSS", "UI design"],
    links: [["Visit", "https://beng262.github.io/Blog/"], ["GitHub", "https://github.com/beng262/Blog"]],
  },
  {
    id: "whatnow", name: "WhatNow", cat: "Apps", img: "personal/whatnow", kind: "iOS app · App Store",
    line: "A decide-for-me app that suggests a place to eat or something to do. I built its first screens.",
    points: ["Home, history and profile screens.", "The shared layout and navigation."],
    tags: ["React", "TypeScript"],
    links: [["App Store", "https://apps.apple.com/tr/app/decide-for-me-whatnow/id6749577335"]],
  },
  {
    id: "tictactoe", name: "Infinite Tic-Tac-Toe", cat: "Games", img: "personal/tictactoe", kind: "Python · Pygame",
    line: "Tic-tac-toe where your oldest mark vanishes, so a game never ends in a draw.",
    points: ["Each player keeps only three marks on the board.", "A win animation in Pygame."],
    tags: ["Python", "Pygame"],
    links: [["GitHub", "https://github.com/beng262/InfiniteTicTacToe"]],
  },
  {
    id: "cnn", name: "CNN with PyTorch", cat: "Coursework", img: "personal/cnn", kind: "Python · PyTorch",
    line: "A small convolutional network that learns to recognise everyday photos (CIFAR-10).",
    points: ["Convolution and pooling layers, then class scores.", "Prints test accuracy after training."],
    tags: ["Python", "PyTorch", "Computer vision"],
    links: [["GitHub", "https://github.com/beng262/CNN-Using-PyTorch"]],
  },
  {
    id: "perceptron", name: "Perceptron from scratch", cat: "Coursework", img: "personal/perceptron", kind: "Python · NumPy",
    line: "The simplest neural network, built by hand, with its decision boundary plotted.",
    points: ["Training loop written in NumPy, no frameworks.", "Plots the line that separates the two classes."],
    tags: ["Python", "NumPy", "Machine learning"],
    links: [["GitHub", "https://github.com/beng262/Deep-Learning-Perceptron"]],
  },
  {
    id: "percolation", name: "Percolation", cat: "Coursework", img: "personal/percolation", kind: "Java · algorithms",
    line: "Simulates whether water can flow through a random grid from top to bottom.",
    points: ["Weighted union-find keeps every check fast.", "Draws grids and their results."],
    tags: ["Java", "Union-find", "Simulation"],
    links: [["GitHub", "https://github.com/beng262/Percolation-Project"]],
  },
  {
    id: "simon", name: "Simon", cat: "Coursework", img: "personal/simon", kind: "Android · Java",
    line: "The classic repeat-the-colours memory game as a native Android app.",
    points: ["The sequence grows every round.", "A scoreboard saved on the device."],
    tags: ["Android", "Java", "Gradle"],
    links: [["GitHub", "https://github.com/beng262/Simon_Game"]],
  },
];

// Client work. Company names stay private: each card names the industry only.
window.CLIENTS = [
  { industry: "Networking hardware maker", title: "IT operations agents",
    text: "A governed set of agents that answer service desk, endpoint, cloud and network questions in English and Turkish through read-only data tools. Figures are computed in code, and tests and evaluation cases run before every release.",
    stack: ["Microsoft 365 Agents SDK", "Azure AI Foundry", "Node.js", "Entra ID"] },
  { industry: "Insurance broker", title: "Broker portal with an assistant", live: "Live on the App Store and Google Play",
    text: "Policies, claims, reports and a pharmacy locator for policyholders and admins, with a scoped chat assistant, live support, MFA sign-in, a mobile app and a deployment pipeline.",
    stack: ["React", "Node.js", "iOS & Android", "Azure OpenAI"] },
  { industry: "Cosmetics retailer", title: "Legal assistant for contracts",
    text: "Turns a contract into a clause-by-clause risk map with suggested rewrites, and compares two versions of a law article by article, refusing to answer when a row has no source.",
    stack: ["React", "Node.js", "Azure OpenAI", "Document Intelligence"] },
  { industry: "Wood panel and flooring manufacturer", title: "Sales assistant in Turkish",
    text: "Answers business questions by writing SQL against the company's BI database, then returns an insight, a table and a chart. The SQL is validated and runs as the signed-in user.",
    stack: ["FastAPI", "React", "Azure OpenAI", "Azure SQL"] },
  { industry: "Airline", title: "Crew reassignment assistant (design)",
    text: "Designed an assistant inside the crew management screen: a rules engine checks qualifications, duty and rest limits, candidates are ranked with a reason, and the controller decides.",
    stack: ["Azure AI Foundry", "Azure AI Search", "Container Apps"] },
  { industry: "Pharmaceutical company", title: "Company-wide AI platform (design)",
    text: "Proposed one AI entry point for field, medical, HR and legal teams: an orchestrator routes each request to a specialist agent with approved tools only, across web, Teams, mobile and Outlook.",
    stack: ["Multi-agent", "Microsoft Teams", "SSO", "Guardrails"] },
  { industry: "Industrial holding group", title: "Strategy team assistant (scope)",
    text: "Scoped three workflows: finding time for large meetings, sorting email into actions and drafts, and drafting budget-variance notes, all with human approval in Teams.",
    stack: ["Microsoft Graph", "Azure OpenAI", "Microsoft Teams"] },
];

window.TRAINING = {
  title: "Microsoft Certified Trainer",
  paragraphs: [
    "I teach AI to corporate teams in English and Turkish: hybrid, hands-on and built around their real work.",
    "One example: a full-day Microsoft Copilot programme for a multinational company, with a leadership kick-off, a foundations session, three hands-on labs and AI clinics for questions, plus before-and-after assessments to measure what people learned.",
  ],
  topics: [
    "What AI and generative AI are",
    "Responsible AI and writing good prompts",
    "Microsoft 365 Copilot in Word, Excel, PowerPoint, Outlook and Teams",
    "Building agents in Copilot Studio",
    "Security and governance of AI agents",
  ],
};
