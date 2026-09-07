# 08 — Technical Overview (For PMs, Not Developers)

You do **not** need to write code to understand this product. You need to explain **what was built, why this stack, and what tradeoffs you made** — exactly what APM interviews test.

---

## Architecture in plain English

```
┌─────────────────────────────────────────┐
│           Your web browser              │
│  ┌─────────────┐    ┌─────────────────┐ │
│  │   HTML      │    │   CSS           │ │
│  │  (structure)│    │  (visual design)│ │
│  └──────┬──────┘    └─────────────────┘ │
│         │                               │
│  ┌──────▼──────────────────────────────┐ │
│  │   JavaScript (app.js)               │ │
│  │   - handles button clicks           │ │
│  │   - calculates RICE scores          │ │
│  │   - saves data to localStorage       │ │
│  └──────┬──────────────────────────────┘ │
│         │                               │
│  ┌──────▼──────────────────────────────┐ │
│  │   localStorage (browser database)   │ │
│  │   - feedback items                  │ │
│  │   - feature backlog                 │ │
│  └─────────────────────────────────────┘ │
└─────────────────────────────────────────┘

No server. No database in the cloud. No login.
```

### Why this architecture? (PM decision)

| Choice | Benefit | Tradeoff |
|--------|---------|----------|
| Static web app (HTML/CSS/JS) | Runs anywhere; zero install | No multi-user sync |
| localStorage | Instant save; privacy | Data lost if browser cleared |
| No backend | Shipped in days, not months | Cannot scale to real SaaS without v2 |

**Interview line:** *"I chose a client-only MVP to validate the workflow before investing in infrastructure — classic lean approach."*

---

## File map

```
feedbackflow/
├── index.html    → Page layout: nav, tabs, forms, lists
├── styles.css    → Colors, spacing, responsive layout
└── app.js        → All product logic (read this with comments)
```

### What each file does

| File | Analogy | PM owns |
|------|---------|---------|
| `index.html` | Wireframe brought to life | Information architecture, labels |
| `styles.css` | Visual design system | Readability, hierarchy |
| `app.js` | Business rules engine | RICE formula, validation rules |

---

## Data model (what gets stored)

Think of this like a simplified database schema.

### Feedback item

```json
{
  "id": "fb_abc123",
  "text": "Users want bulk CSV export",
  "source": "support",
  "submitterType": "end-user",
  "createdAt": "2026-06-24T10:00:00.000Z",
  "promoted": false
}
```

### Feature item

```json
{
  "id": "ft_xyz789",
  "title": "Bulk CSV export",
  "description": "Users want bulk CSV export",
  "feedbackId": "fb_abc123",
  "reach": 8,
  "impact": 2,
  "confidence": 80,
  "effort": 3,
  "riceScore": 4.27,
  "status": "idea",
  "createdAt": "2026-06-24T10:05:00.000Z"
}
```

### Storage key

Everything is saved under one key in localStorage: `feedbackflow_data`

---

## Key logic (read in app.js)

| Function | What it does | PRD link |
|----------|--------------|----------|
| `calculateRiceScore()` | Applies RICE formula | PRD §5 |
| `addFeedback()` | Validates + saves feedback | US-01 |
| `promoteToFeature()` | Creates linked feature | US-03 |
| `updateFeatureRice()` | Recalculates on edit | US-04 |
| `renderBacklog()` | Sorts by score desc | US-05 |
| `seedDemoData()` | Populates demo for interviews | PRD P-02 |

---

## How data flows (one user action)

**User clicks "Add feedback":**

1. Browser reads form fields (`index.html`)
2. `app.js` validates text length ≥ 10
3. Creates feedback object with unique `id`
4. Pushes to `state.feedback` array
5. Calls `saveState()` → JSON.stringify → localStorage
6. Calls `renderInbox()` → updates DOM (what you see on screen)

You don't need to know what "DOM" means in depth — just: **input → validate → save → refresh view**.

---

## What you would ask engineering in v2

If this were a real team project, your eng questions might be:

1. "What's the migration path from localStorage to a real database?"
2. "How do we handle concurrent edits from two PMs?"
3. "What's the API contract for Slack integration?"
4. "How do we version the data schema without breaking users?"

That language signals PM maturity.

---

## Glossary

| Term | Plain English |
|------|---------------|
| HTML | Skeleton of the page |
| CSS | How it looks |
| JavaScript | Behavior when users click/type |
| localStorage | Browser's small save file |
| DOM | The live page the user sees |
| JSON | Structured data format `{ "key": "value" }` |
| MVP | Smallest version that tests the hypothesis |

---

## Suggested reading order for app.js

1. Top: `state` object — what's stored
2. `calculateRiceScore` — business rule
3. `addFeedback` + `promoteToFeature` — core loop
4. `render*` functions — how UI updates
5. `init()` — what happens on page load

Spend **30 minutes** with `app.js` open beside this doc. Trace one click from button → function name.

Next: [`09-interview-prep-guide.md`](09-interview-prep-guide.md)
