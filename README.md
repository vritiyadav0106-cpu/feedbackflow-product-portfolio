# FeedbackFlow — APM Portfolio Project

A complete **Associate Product Manager portfolio** you can learn, demo, and explain in interviews — built for people who think in products, not code.

This repo contains:

| Part | Folder | What it is |
|------|--------|------------|
| **Product MVP** | [`feedbackflow/`](feedbackflow/) | Working web app — feedback inbox + RICE prioritization |
| **Portfolio site** | [`portfolio/`](portfolio/) | Personal website showcasing your case study |
| **PM documents** | [`docs/`](docs/) | PRD, personas, user stories, roadmap, interview prep |

---

## Live site

| Page | URL |
|------|-----|
| **Portfolio** | https://vritiyadav0106-cpu.github.io/feedbackflow-product-portfolio/portfolio/ |
| **FeedbackFlow app** | https://vritiyadav0106-cpu.github.io/feedbackflow-product-portfolio/feedbackflow/ |

The site root redirects to the portfolio. This README is for developers browsing the repo on GitHub.

---

## Quick start — run in 2 minutes

You need only a **web browser**. No Node.js, no database, no install.

### Option A — Live online (simplest)

Open the **Live site** links above — no install needed.

### Option B — Open files locally

1. Open **`feedbackflow/index.html`** in Chrome or Safari (double-click the file).
2. Open **`portfolio/index.html`** the same way for your portfolio site.

> Some browsers restrict local file links. If portfolio → product links break, use Option C.

### Option C — Local server (for development)

**Easiest:** Double-click `Start Portfolio.command` (Mac)

**Or** from Terminal (after cloning this repo):

```bash
cd feedbackflow-product-portfolio
chmod +x start.sh
./start.sh
```

Then open in your browser:

| What | URL |
|------|-----|
| **Product (FeedbackFlow)** | http://localhost:8080/feedbackflow/ |
| **Portfolio** | http://localhost:8080/portfolio/ |
| **Docs** | Browse files in `docs/` or open in VS Code |

Press `Ctrl+C` in the terminal to stop the server.

### Option D — VS Code Live Server

1. Install the **Live Server** extension in VS Code / Cursor.
2. Right-click `feedbackflow/index.html` → **Open with Live Server**.

---

## What is FeedbackFlow?

**One-liner:** A tool for early-stage PMs to capture user feedback and prioritize features using **RICE**.

**Why this project works for APM interviews:**

- Solves a **real PM problem** (scattered feedback, unclear priorities)
- Shows **discovery → PRD → MVP → metrics → roadmap** end-to-end
- Technical depth is **explainable in 5 minutes** without being a developer project
- You can **live-demo** it in any interview with Wi‑Fi or offline

**Core user loop:**

```
Capture feedback → Promote to feature → Score with RICE → See ranked backlog
```

---

## Project structure

```
feedbackflow-product-portfolio/
├── README.md                 ← You are here
├── feedbackflow/             ← The product MVP
│   ├── index.html            ← Page structure (screens, forms)
│   ├── styles.css            ← Visual design
│   └── app.js                ← Logic (RICE, save data) — read with docs
├── portfolio/                ← Your personal portfolio site
│   ├── index.html
│   ├── styles.css
│   └── script.js
└── docs/                     ← PM artifacts (study these!)
    ├── 00-START-HERE.md      ← Learning map — read first
    ├── 01-problem-and-discovery.md
    ├── 02-user-personas.md
    ├── 03-prd.md
    ├── 04-user-stories.md
    ├── 05-prioritization-framework.md
    ├── 06-metrics-and-success.md
    ├── 07-roadmap.md
    ├── 08-technical-overview-for-pms.md
    ├── 09-interview-prep-guide.md
    ├── 10-how-to-study.md
    ├── 11-wireframes-and-user-flows.md
    ├── 12-deployment-guide.md
    ├── 13-resume-and-linkedin-kit.md
    └── 14-complete-narrative.md   ← Read this for full story in one doc
```

Also at project root:

| File | Purpose |
|------|---------|
| [`READ-ME-FIRST.md`](READ-ME-FIRST.md) | **Start here** — 5-step quick path |
| [`PERSONALIZE.md`](PERSONALIZE.md) | Your contact info & bio |
| [`INTERVIEW-READY-CHECKLIST.md`](INTERVIEW-READY-CHECKLIST.md) | Pre-application checklist |
| [`start.sh`](start.sh) | Run local server |
| [`Start Portfolio.command`](Start%20Portfolio.command) | Double-click to run (Mac) |

---

## How this project was made (APM lens)

This was built using a standard PM workflow — not "code first."

### Phase 1 — Discovery (Days 1–2)

- Defined the problem: feedback chaos at early-stage teams
- Created personas (Priya, Arjun) — see [`docs/02-user-personas.md`](docs/02-user-personas.md)
- Mapped competitors (spreadsheets, Notion, Jira, Productboard)
- **Output:** Problem statement + scope boundaries

### Phase 2 — Definition (Days 3–5)

- Wrote PRD with P0/P1 requirements — [`docs/03-prd.md`](docs/03-prd.md)
- Broke work into user stories with acceptance criteria — [`docs/04-user-stories.md`](docs/04-user-stories.md)
- Chose **RICE** as prioritization framework — [`docs/05-prioritization-framework.md`](docs/05-prioritization-framework.md)
- Defined north star metric (Time to Prioritization Decision) — [`docs/06-metrics-and-success.md`](docs/06-metrics-and-success.md)
- **Output:** Buildable spec an engineer (or you) could implement

### Phase 3 — Build MVP (Days 6–10)

- **Scope cut:** No login, no API, no integrations — stored in browser only
- Built three screens: Dashboard, Inbox, Backlog
- Implemented RICE formula and auto-sorting
- Added demo seed data for interview demos
- **Output:** `feedbackflow/` folder

### Phase 4 — Portfolio & narrative (Days 11–14)

- Case study on portfolio site — `portfolio/`
- Interview prep guide — [`docs/09-interview-prep-guide.md`](docs/09-interview-prep-guide.md)
- **Output:** Something you can link on resume and LinkedIn

---

## What to read (and in what order)

**Do not read randomly.** Follow this path:

| Order | Document | Time | You should be able to… |
|-------|----------|------|------------------------|
| 0 | [`docs/00-START-HERE.md`](docs/00-START-HERE.md) | 10 min | See the full learning map |
| 1 | [`docs/01-problem-and-discovery.md`](docs/01-problem-and-discovery.md) | 30 min | Explain why this problem matters |
| 2 | [`docs/02-user-personas.md`](docs/02-user-personas.md) | 20 min | Describe your user in a story |
| 3 | [`docs/03-prd.md`](docs/03-prd.md) | 45 min | Walk through requirements |
| 4 | [`docs/04-user-stories.md`](docs/04-user-stories.md) | 30 min | Connect features to user value |
| 5 | [`docs/05-prioritization-framework.md`](docs/05-prioritization-framework.md) | 25 min | Calculate and defend RICE |
| 6 | [`docs/06-metrics-and-success.md`](docs/06-metrics-and-success.md) | 20 min | Answer "how do you measure success?" |
| 7 | [`docs/07-roadmap.md`](docs/07-roadmap.md) | 15 min | Present Now / Next / Later |
| 8 | Run the app | 30 min | Demo every screen |
| 9 | [`docs/08-technical-overview-for-pms.md`](docs/08-technical-overview-for-pms.md) | 30 min | Explain how it works without coding |
| 10 | [`docs/09-interview-prep-guide.md`](docs/09-interview-prep-guide.md) | 45 min | Pitch in 60 seconds |
| 11 | [`docs/10-how-to-study.md`](docs/10-how-to-study.md) | ongoing | Weekly study plan |
| — | [`docs/14-complete-narrative.md`](docs/14-complete-narrative.md) | 25 min | **Full story in one read** |
| — | [`docs/13-resume-and-linkedin-kit.md`](docs/13-resume-and-linkedin-kit.md) | 20 min | Resume & LinkedIn copy |
| — | [`INTERVIEW-READY-CHECKLIST.md`](INTERVIEW-READY-CHECKLIST.md) | 10 min | Ready to apply? |

**Short on time?** Read [`docs/14-complete-narrative.md`](docs/14-complete-narrative.md) → run app → [`docs/09-interview-prep-guide.md`](docs/09-interview-prep-guide.md).

---

## How to read (method)

### For each document

1. **Skim** all headings — know the shape
2. **Read** fully — highlight decisions, not definitions
3. **Close** the doc — write 3 bullets from memory
4. **Re-open** — fix gaps
5. **Say it out loud** as if an interviewer asked "tell me about X"

### For the code (`feedbackflow/app.js`)

You are **not** learning to become a developer. You are learning to **talk to developers**.

1. Read [`docs/08-technical-overview-for-pms.md`](docs/08-technical-overview-for-pms.md) first
2. Open `app.js` beside it
3. Find these functions: `calculateRiceScore`, `addFeedback`, `promoteToFeature`
4. Trace one click: button → function → save → screen update
5. Stop after 30 minutes — that's enough for APM interviews

---

## What to study (beyond this repo)

| Topic | Why | Suggested resource |
|-------|-----|-------------------|
| RICE / prioritization | Core interview topic | Intercom RICE blog post |
| PRD writing | Expected artifact | Public PRDs (Linear, Notion) |
| Metrics | "How do you measure success?" | AARRR (Pirate Metrics) |
| User research | Discovery credibility | *The Mom Test* (book) |
| Product sense | Case interviews | Lenny's Newsletter, product breakdowns on YouTube |
| SQL basics (optional) | Some APM roles | Mode Analytics SQL tutorial |

---

## Personalize before sharing

Edit [`PERSONALIZE.md`](PERSONALIZE.md) first, then update portfolio contact links.

- [x] `PERSONALIZE.md` — name, email, LinkedIn (done)
- [ ] Add education & location in `PERSONALIZE.md` when ready
- [ ] `portfolio/index.html` — contact section (search `PERSONALIZE`)
- [ ] Take screenshots of FeedbackFlow for LinkedIn (optional)

---

## 60-second interview pitch (practice this)

> "I built FeedbackFlow to solve scattered feedback at early-stage product teams. I defined personas, wrote a PRD, and cut scope to a browser MVP that captures feedback, promotes themes to features, and ranks them with RICE. Success is measured by time-to-prioritization. Next I'd add CSV import and team workspaces."

Full scripts: [`docs/09-interview-prep-guide.md`](docs/09-interview-prep-guide.md)

---

## 5-minute live demo script

1. **Dashboard** — "6 feedback items, 3 features, CSV export is top priority at 4.27"
2. **Inbox** — Add live feedback, show validation
3. **Promote** — Convert to feature, explain linking
4. **Backlog** — Change RICE values, show re-sorting, explain formula
5. **Close** — "MVP proves the loop; v1.1 is CSV import"

---

## Deploy online

This project is live on GitHub Pages:

- **Portfolio:** https://vritiyadav0106-cpu.github.io/feedbackflow-product-portfolio/portfolio/
- **Product:** https://vritiyadav0106-cpu.github.io/feedbackflow-product-portfolio/feedbackflow/
- **Repo:** https://github.com/vritiyadav0106-cpu/feedbackflow-product-portfolio

---

## About the author

**Vriti Yadav** — Product (Manager & Analyst)  
**Education:** B.A. (Hons) Economics, Kirori Mal College, University of Delhi  
**Email:** Vritiyadav076@gmail.com  
**LinkedIn:** [linkedin.com/in/vriti-yadav-b987851b6](https://www.linkedin.com/in/vriti-yadav-b987851b6/)

Product case study portfolio: discovery, prioritization, metrics, and shipped prototype — built for PM and Product Analyst applications.

---

## License

This portfolio project is yours to use, modify, and present in job applications.

---

**Start here:** [`READ-ME-FIRST.md`](READ-ME-FIRST.md) → then [`docs/14-complete-narrative.md`](docs/14-complete-narrative.md)
