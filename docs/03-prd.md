# 03 — Product Requirements Document (PRD)

**Product:** FeedbackFlow  
**Author:** Vriti Yadav  
**Version:** 1.0 (MVP)  
**Status:** Shipped (portfolio MVP)  
**Last updated:** June 2026

---

## 1. Overview

### 1.1 Summary

FeedbackFlow is a web-based tool that lets product managers capture user feedback, convert insights into feature ideas, and prioritize them using the RICE scoring framework.

### 1.2 Problem

See [`01-problem-and-discovery.md`](01-problem-and-discovery.md).

### 1.3 Target users

- **Primary:** Priya — first PM hire at early-stage startup
- **Secondary:** Arjun — student product lead

See [`02-user-personas.md`](02-user-personas.md).

### 1.4 Goals

| Goal | Metric | MVP target |
|------|--------|------------|
| Reduce time to organize feedback | Time from receipt → logged | < 2 minutes per item |
| Enable consistent prioritization | % of backlog items with RICE score | 100% of promoted features |
| Improve decision clarity | User can explain top 3 priorities | Qualitative — demo test |

### 1.5 Non-goals (MVP)

- User authentication and multi-tenant workspaces
- Third-party integrations
- Automated sentiment analysis
- Native mobile applications

---

## 2. User flows

### Flow A — Capture feedback

```
User opens Inbox → Clicks "Add feedback" → Fills form (text, source, submitter type)
→ Feedback appears in inbox list → Success toast
```

### Flow B — Feedback → Feature

```
User views inbox item → Clicks "Promote to feature" → Feature draft created
→ User navigates to Backlog → Enters RICE values → Score auto-calculated → List re-sorts
```

### Flow C — Review priorities

```
User opens Dashboard → Sees counts (feedback, features, top priority)
→ Opens Backlog → Top item = highest RICE score
```

---

## 3. Functional requirements

### 3.1 Feedback inbox

| ID | Requirement | Priority |
|----|-------------|----------|
| F-01 | User can add feedback with text (required, min 10 chars) | P0 |
| F-02 | User can tag source: Support, Sales, User interview, Social, Other | P0 |
| F-03 | User can tag submitter type: End user, Internal, Prospect | P1 |
| F-04 | User can view all feedback in reverse chronological order | P0 |
| F-05 | User can delete feedback | P1 |
| F-06 | User can promote feedback to a feature idea | P0 |

### 3.2 Feature backlog

| ID | Requirement | Priority |
|----|-------------|----------|
| B-01 | Feature has title (from feedback snippet), description, linked feedback id | P0 |
| B-02 | User can set RICE: Reach (1-10), Impact (0.25-3), Confidence (0-100%), Effort (person-weeks) | P0 |
| B-03 | System calculates RICE score = (Reach × Impact × Confidence) / Effort | P0 |
| B-04 | Backlog sorts by RICE score descending | P0 |
| B-05 | User can edit or delete features | P1 |
| B-06 | User can mark feature status: Idea, Planned, Shipped | P2 |

### 3.3 Dashboard

| ID | Requirement | Priority |
|----|-------------|----------|
| D-01 | Show total feedback count | P0 |
| D-02 | Show total feature ideas count | P0 |
| D-03 | Show highest-priority feature name + score | P0 |
| D-04 | Show feedback by source (simple breakdown) | P1 |

### 3.4 Data persistence

| ID | Requirement | Priority |
|----|-------------|----------|
| P-01 | Data persists in browser localStorage between sessions | P0 |
| P-02 | Seed demo data on first load for portfolio demo | P1 |

---

## 4. Non-functional requirements

| Area | Requirement |
|------|-------------|
| Performance | Page loads < 2s on laptop browser |
| Accessibility | Form labels, keyboard navigable buttons |
| Browser support | Latest Chrome, Safari, Firefox |
| Privacy | Data stays on device (no server in MVP) |

---

## 5. RICE definitions (product copy in app)

| Factor | Definition | Scale |
|--------|------------|-------|
| **Reach** | Users affected per quarter | 1–10 (relative) |
| **Impact** | Effect on key metric if shipped | 0.25 (minimal), 0.5 (low), 1 (medium), 2 (high), 3 (massive) |
| **Confidence** | How sure are we? | 0–100% |
| **Effort** | Engineering person-weeks | Decimal, min 0.5 |

**Formula:** `RICE = (Reach × Impact × Confidence) / Effort`

*Confidence is stored as 0–1 in calculation (e.g., 80% → 0.8).*

---

## 6. MVP vs future

| MVP (v1) | v1.1 | v2 |
|----------|------|-----|
| Manual feedback entry | CSV import | Slack integration |
| Single user | Share read-only link | Team workspaces |
| RICE scoring | Weighted custom frameworks | ML theme clustering |
| localStorage | Cloud sync | Auth + roles |

See [`07-roadmap.md`](07-roadmap.md).

---

## 7. Open questions

| Question | Owner | Decision by |
|----------|-------|-------------|
| Should we allow multiple feedback items per feature? | PM | v1.1 — yes, link table |
| Default Impact scale — dropdown vs slider? | PM + Design | MVP — dropdown (clearer) |
| Export backlog to PDF for exec review? | PM | v1.1 |

---

## 8. Sign-off checklist (for your portfolio narrative)

- [x] Problem defined and scoped
- [x] Personas documented
- [x] P0 requirements implemented in `feedbackflow/`
- [x] Success metrics defined
- [x] Out-of-scope list explicit

Next: [`04-user-stories.md`](04-user-stories.md)
