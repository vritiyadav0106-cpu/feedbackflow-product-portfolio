# 06 — Metrics & Success

PMs are judged by **outcomes**, not output. This doc defines what success means for FeedbackFlow.

---

## North star metric

**Time to prioritization decision (TTPD)**

> Hours from receiving a batch of feedback to having a ranked top-3 backlog.

| Segment | Before (spreadsheet) | MVP target |
|---------|----------------------|------------|
| Priya's team | ~4 hours / week | < 1 hour / week |

*For portfolio: you measured this informally by timing yourself using the app vs a spreadsheet.*

---

## Supporting metrics (AARRR lens)

### Acquisition
*Not applicable for internal B2B tool MVP — users are invited by PM.*

### Activation

| Metric | Definition | Target |
|--------|------------|--------|
| First feedback logged | User completes US-01 within first session | > 80% in usability test |
| First feature scored | User completes RICE on one feature | > 60% in usability test |

### Retention

| Metric | Definition | Target (if shipped for real) |
|--------|------------|------------------------------|
| Weekly active PM | Opens app ≥1× per week | 70% of team |
| Backlog revisit rate | Opens backlog after initial setup | 50% weekly |

### Revenue
*Deferred — freemium model in roadmap.*

### Referral
*Deferred — "Share read-only backlog link" in v1.1.*

---

## Input metrics (leading indicators)

These predict whether TTPD will improve:

| Input metric | Why it matters |
|--------------|----------------|
| % feedback promoted to features | Shows inbox → backlog loop works |
| % features with complete RICE | Shows framework adoption |
| Avg confidence score | Low avg → need more discovery |
| Feedback per source | Identifies noisy channels |

---

## Counter-metrics (what could go wrong)

| Counter-metric | Risk | Mitigation |
|----------------|------|------------|
| Time spent scoring | PM theater — scoring instead of shipping | Cap backlog grooming to 30 min |
| Backlog size | Hoarding ideas, never cutting | WIP limit: max 15 active ideas |
| Score variance | Gaming RICE to justify favorites | Quarterly calibration with eng |

---

## MVP success criteria (portfolio)

You can honestly claim MVP success if:

1. ✅ A new user can complete capture → promote → score → read ranked list in **< 10 minutes** without help
2. ✅ You can explain **top priority** and **why** using RICE in an interview
3. ✅ PRD P0 requirements are implemented

---

## Experiment ideas (if you had 4 more weeks)

| Experiment | Hypothesis | Success signal |
|------------|------------|----------------|
| Onboarding checklist | Reduces drop-off before first score | +20% activation |
| RICE tooltips | Improves confidence accuracy | Fewer 50% confidence scores |
| "Duplicate theme" warning | Reduces backlog noise | -15% duplicate features |

---

## Dashboard → metric mapping

| Dashboard widget | Metric |
|------------------|--------|
| Total feedback | Volume signal |
| Total features | Promotion rate numerator |
| Top priority | Decision output |
| By source chart | Channel mix |

Next: [`07-roadmap.md`](07-roadmap.md)
