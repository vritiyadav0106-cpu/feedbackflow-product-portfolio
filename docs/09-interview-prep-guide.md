# 09 — Interview Prep Guide

Use this to practice **out loud**. PM interviews reward clarity, not memorization.

---

## 60-second elevator pitch

> "I built FeedbackFlow to solve a problem I've seen in student product teams and early startups: feedback lives everywhere, but prioritization lives nowhere. I defined two personas, wrote a PRD, cut scope to a browser-based MVP, and implemented the core loop — capture feedback, promote to features, score with RICE, and see a ranked backlog. I measured success by time-to-prioritization and activation through the scoring flow. If I had six more weeks, I'd add CSV import and team sharing."

**Practice until you can say this without reading.**

---

## Common APM questions + answer frames

### 1. Tell me about a product you built.

**Structure:** Problem → User → Solution → Tradeoffs → Metrics → Learnings

| Section | Your answer hook |
|---------|------------------|
| Problem | Scattered feedback, no shared priority |
| User | Priya, first PM hire |
| Solution | FeedbackFlow MVP — inbox + RICE backlog |
| Tradeoffs | Cut auth, integrations, AI |
| Metrics | TTPD, activation to first RICE score |
| Learnings | "Frameworks don't help if capture is broken — inbox came first" |

---

### 2. How did you prioritize features?

> "I started with MoSCoW on the PRD, then ordered sprints by dependency: you can't score features that don't exist, so promote-to-feature was P0 before dashboard polish. For the backlog *inside* the product, I used RICE with explicit definitions so scores are comparable."

---

### 3. How do you work with engineers?

> "I brought user stories with acceptance criteria, not pixel-perfect specs. For RICE, I defined the formula in the PRD and validated edge cases — like confidence as a percentage — before build. I'd review a working prototype weekly rather than waiting for perfection."

*Even if you built this solo, frame it as how you **would** work on a team.*

---

### 4. What would you do differently?

Good PMs have real critiques:

- "I'd run 5 moderated usability tests before calling MVP done."
- "I'd add onboarding — demo data helps, but a checklist would improve activation."
- "I might simplify Impact to three tiers instead of five for faster scoring."

---

### 5. How do you use data?

> "North star is time-to-prioritization. Leading indicators: % feedback promoted, % features scored. I'd pair quantitative dashboard counts with weekly qualitative review of top themes."

---

### 6. Design a metric for X (live case)

If they point at FeedbackFlow:

> "I'd instrument: time from first feedback logged to third feature scored — that captures full loop adoption. Segment by source to see if Sales feedback gets actioned slower than Support."

---

## Demo script (5 minutes in interview)

1. **Dashboard** (30s): "Here's health at a glance — 6 feedback items, 3 features, top priority is CSV export at 4.27."
2. **Inbox** (1m): Add live feedback — show validation, source tags.
3. **Promote** (1m): Promote that item — explain linking.
4. **Backlog** (2m): Change RICE values — show resorting — explain formula.
5. **Close** (30s): "This is MVP — next is CSV import and team workspaces."

**Have the app open before the call.**

---

## Behavioral (STAR) story templates

### Conflict / pushback

**Situation:** Scope creep — wanted Slack integration in MVP.  
**Task:** Keep two-week timeline.  
**Action:** Documented in PRD non-goals; proposed v2 with success gate on v1 retention.  
**Result:** Shipped core loop; credible roadmap story for interviews.

### Failure / mistake

**Situation:** First version had no empty states — testers confused.  
**Action:** Added empty state copy and demo seed data.  
**Result:** Activation improved in informal retest.

*Personalize with your real experience if possible.*

---

## Questions to ask them

- "How does your PM team involve engineering in prioritization?"
- "What does success look like for an APM in the first 90 days?"
- "How do you balance stakeholder requests vs user research?"

---

## Red flags to avoid

| Don't say | Say instead |
|-----------|-------------|
| "I coded the whole thing" (only) | "I owned product definition end-to-end and shipped an MVP to validate the workflow" |
| "RICE is always right" | "RICE structures tradeoffs; I'd calibrate with the team quarterly" |
| "Everyone needs this" | "Primary user is first PM hire at 10–50 person startup" |
| Vague metrics | Name TTPD and activation specifically |

---

## Mock interview checklist

- [ ] 60-second pitch without notes
- [ ] Draw user flow on paper from memory
- [ ] Explain RICE with one worked example
- [ ] Live demo in under 5 minutes
- [ ] Name 3 things in v1.1 roadmap and why
- [ ] One "what I'd do differently" answer

Next: [`10-how-to-study.md`](10-how-to-study.md)
