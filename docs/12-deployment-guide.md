# 12 — Deployment Guide (Put It Online)

A live URL on your resume beats "runs on my laptop." This guide gets you there for free.

---

## Option 1 — GitHub Pages (recommended)

### Step 1 — Create GitHub repo

```bash
cd "/Users/arnavsharma/Desktop/APM Project"
git init
git add .
git commit -m "Add FeedbackFlow APM portfolio project"
```

Create a new repo on GitHub (e.g. `feedbackflow-apm-portfolio`), then:

```bash
git remote add origin https://github.com/YOUR_USERNAME/feedbackflow-apm-portfolio.git
git branch -M main
git push -u origin main
```

### Step 2 — Enable Pages

1. GitHub repo → **Settings** → **Pages**
2. Source: **Deploy from branch**
3. Branch: `main` → folder `/ (root)` → **Save**
4. Wait 2–5 minutes

### Step 3 — Your live URLs

```
Portfolio: https://YOUR_USERNAME.github.io/feedbackflow-apm-portfolio/portfolio/
Product:   https://YOUR_USERNAME.github.io/feedbackflow-apm-portfolio/feedbackflow/
```

### Step 4 — Fix links (if needed)

Portfolio links use relative paths (`../feedbackflow/`). They work on GitHub Pages when the full repo is deployed from root. No code changes needed.

---

## Option 2 — Netlify (drag and drop)

1. Go to [app.netlify.com](https://app.netlify.com)
2. **Add new site** → **Deploy manually**
3. Drag the entire `APM Project` folder
4. Netlify gives you a URL like `https://random-name.netlify.app`
5. Add paths: `/portfolio/` and `/feedbackflow/`

---

## Option 3 — Vercel / Cloudflare Pages

Same idea: connect repo, publish root directory, no build command needed (static HTML).

---

## After deploying

- [ ] Test all three tabs in FeedbackFlow on mobile
- [ ] Click every portfolio link
- [ ] Add URL to resume: `Portfolio: your-url/portfolio/`
- [ ] Add URL to LinkedIn Featured section
- [ ] Optional: custom domain (Namecheap + DNS → GitHub Pages)

---

## Resume line examples

```
FeedbackFlow — Product case study (APM portfolio)
• Defined problem, personas, PRD; shipped browser MVP for feedback → RICE prioritization
• Live demo: your-url/feedbackflow/ | Case study: your-url/portfolio/
```

Next: [`13-resume-and-linkedin-kit.md`](13-resume-and-linkedin-kit.md)
