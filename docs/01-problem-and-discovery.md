# 01 — Problem & Discovery

## Problem statement

**Early-stage product teams receive user feedback in many places (email, support tickets, sales calls, social media) but lack a simple system to capture, theme, and prioritize that feedback into a buildable backlog.**

### Who feels this pain?

- Solo founders wearing the PM hat
- First PM hire at a 10–50 person startup
- Student product club leads running a campus app

### Why now?

- Teams ship faster with AI-assisted dev → **prioritization** becomes the bottleneck, not coding
- Spreadsheet backlogs break when more than 2 people contribute feedback
- Without a shared system, loud voices win over important signals

---

## Discovery approach (what an APM would do)

You did not need 500 user interviews for a portfolio project. You **simulated** disciplined discovery:

### Step 1 — Hypothesis

> "PMs at early-stage companies spend more time **organizing** feedback than **deciding** what to build."

### Step 2 — Signals you looked for

| Signal type | Example | What it told you |
|-------------|---------|------------------|
| Complaints in PM communities | "Our backlog is a mess of Notion pages" | Pain is real and common |
| Job descriptions | "Own roadmap prioritization" in APM roles | Companies value this skill |
| Your own experience | Group projects where tasks had no owner | You lived the problem |

### Step 3 — Problem framing (fill in for interviews)

Use this template when an interviewer asks *"How did you find this problem?"*:

```
I talked to [N] people who [role/context].
The pattern I heard was: [quote or paraphrase].
That led me to define the problem as: [one sentence].
I validated it by [lightweight method: survey, shadowing, personal use].
```

**Example (honest for a portfolio):**

> "I interviewed 3 classmates who led product clubs and reviewed 10 public PM forum threads about backlog chaos. The pattern was: feedback arrives everywhere, but nothing connects feedback → feature → priority. I validated by using a spreadsheet myself for a week and hitting the same friction."

---

## Jobs to be done (JTBD)

When a PM "hires" a prioritization tool, they want to:

1. **Capture** feedback without losing context (who said it, when, from which channel)
2. **Cluster** similar requests so one theme does not look like ten separate features
3. **Compare** options with a consistent framework (not gut feel alone)
4. **Communicate** why feature A beat feature B to eng and leadership

---

## Competitive landscape (lightweight)

| Alternative | Strength | Weakness for our user |
|-------------|----------|------------------------|
| Spreadsheet | Free, flexible | No workflow, scores manual |
| Notion | Pretty, collaborative | Becomes cluttered; no RICE built-in |
| Jira / Linear | Great for eng teams | Heavy for pre-PMF teams; feedback ≠ roadmap |
| Productboard / Dovetail | Enterprise-grade | Overkill + expensive for students / early startups |

### Your positioning

**FeedbackFlow = feedback inbox + RICE scoring for teams that are not ready for enterprise PM tools.**

---

## Scope decision (critical PM skill)

### In scope for MVP

- Single-user (browser local storage) — no login complexity
- Feedback capture form
- Inbox list with source tags
- Promote feedback → feature idea
- RICE scoring on feature ideas
- Sorted priority backlog view
- Simple dashboard counts

### Explicitly out of scope (and why)

| Cut | Reason |
|-----|--------|
| Multi-user / auth | Adds eng weeks; not needed to prove prioritization workflow |
| Integrations (Slack, Intercom) | Phase 2; MVP validates manual capture first |
| AI auto-tagging | Sexy but hides your prioritization thinking in interviews |
| Mobile app | Web-first matches persona (desk work) |

**Interview line:** *"I used MoSCoW and cut everything that didn't prove the core loop: capture → theme → score → decide."*

---

## Key takeaway

You are not selling software. You are selling **a decision** you made as a PM: which problem, which user, which MVP slice.

Next: [`02-user-personas.md`](02-user-personas.md)
