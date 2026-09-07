# 07 — Product Roadmap

Roadmaps communicate **direction and sequencing**, not a promise of exact dates.

---

## Vision (12–18 months)

**FeedbackFlow becomes the default feedback-to-roadmap loop for teams from 0→1 product-market fit.**

---

## Now — MVP (v1.0) ✅ Portfolio version

**Theme:** Prove the core loop

| Initiative | User value | Status |
|------------|------------|--------|
| Feedback inbox | Capture without losing context | ✅ Shipped |
| Promote to feature | Bridge insight → backlog | ✅ Shipped |
| RICE scoring | Objective comparison | ✅ Shipped |
| Dashboard | At-a-glance health | ✅ Shipped |
| localStorage persistence | No setup friction | ✅ Shipped |

**Success gate:** 5 usability tests with PM students; 4/5 complete core loop unaided.

---

## Next — v1.1 (4–6 weeks)

**Theme:** Reduce manual work

| Initiative | Rationale | Effort |
|------------|-----------|--------|
| CSV import for feedback | Priya gets weekly support exports | M |
| Link multiple feedback → one feature | Themes span many tickets | S |
| Export backlog PDF | Exec review without login | S |
| Onboarding tour | Improve activation | S |

---

## Later — v2.0 (quarter)

**Theme:** Team collaboration

| Initiative | Rationale | Dependency |
|------------|-----------|------------|
| Auth + workspaces | Multi-PM teams | Backend |
| Comments on features | Async alignment | Auth |
| Slack integration | Meet users where feedback lives | API design |
| Read-only stakeholder view | CEO visibility without edit rights | Auth |

---

## Explore — v3+ (hypotheses)

| Idea | Bet | Risk |
|------|-----|------|
| AI theme clustering | Speed up grouping | Black-box hurts PM learning |
| Integration marketplace | Expand TAM | Distraction from core |
| Public roadmap page | User trust | Commitment pressure |

---

## Roadmap visualization

```
Q2 2026          Q3 2026              Q4 2026
|---------|------------------------|------------------|
  MVP v1.0      v1.1 import/export    v2 team + Slack
  Portfolio     Onboarding            Auth, comments
```

---

## How to present roadmap in interviews

Use the **Now / Next / Later** format verbally:

> "Now we proved capture and RICE. Next I'd reduce manual entry with CSV import because Priya gets support dumps weekly. Later is collaboration — but I'd validate v1.1 retention before building auth."

**Avoid:** Gantt charts with fake precision.

Next: [`08-technical-overview-for-pms.md`](08-technical-overview-for-pms.md)
