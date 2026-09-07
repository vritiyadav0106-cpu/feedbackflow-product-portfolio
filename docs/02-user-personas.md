# 02 — User Personas

Personas are **decision tools**, not creative writing. Every feature in the PRD should trace back to one of these people.

---

## Primary persona — Priya, First PM Hire

| Attribute | Detail |
|-----------|--------|
| **Role** | First product manager at a 25-person B2B SaaS startup |
| **Age** | 26 |
| **Goals** | Ship a credible roadmap in first 90 days; earn trust from eng lead |
| **Frustrations** | Feedback in Slack threads, Gong clips, and a shared Google Sheet; CEO forwards emails tagged "ASAP" |
| **Tech comfort** | Uses Notion and Figma; not a developer |
| **Success looks like** | Weekly prioritization meeting takes 45 min, not 3 hours |

### Priya's scenario

> Monday 9am: Support forwards 12 tickets. Sales drops a Loom. Priya needs one place to log these, group "export to CSV" requests, and defend why "SSO" ranks below "bulk edit" this quarter.

**FeedbackFlow features for Priya:** Inbox, source tags, promote to feature, RICE backlog, dashboard counts.

---

## Secondary persona — Arjun, Student Product Lead

| Attribute | Detail |
|-----------|--------|
| **Role** | Leads 8-person team building a campus events app |
| **Age** | 21 |
| **Goals** | Show structured PM thinking for internship applications |
| **Frustrations** | Teammates DM feature ideas; no shared priority |
| **Budget** | $0; cannot buy Productboard |
| **Success looks like** | Clear backlog for sprint planning |

**FeedbackFlow features for Arjun:** Free, runs locally, simple UI, exportable mental model for case studies.

---

## Anti-persona (who we are NOT building for)

| Anti-persona | Why not |
|--------------|---------|
| Enterprise PM at 5,000-person company | Needs compliance, SSO, integrations — different product |
| Developer wanting Jira replacement | Wants sprint boards, git links — out of scope |
| Consumer user giving feedback | They don't use the tool; they are the *subject* of feedback |

---

## Empathy map (Priya)

```
SAYS                          THINKS
"I need one source of truth"  "If I pick wrong, eng loses trust"
"Can we ship SSO this sprint?" "CEO pressure vs user data"

DOES                          FEELS
Copies Slack → spreadsheet    Overwhelmed Mondays
Runs prioritization meetings  Anxious about credibility
```

---

## How to use personas in interviews

When asked *"Who is your user?"*, answer in this structure:

1. **Name + context** (one sentence)
2. **Primary job** they're trying to do
3. **One concrete scenario** from their week
4. **How your MVP helps** that scenario

**Do not** read the table aloud. Tell Priya's Monday morning story.

---

## Persona → feature traceability

| Feature | Priya | Arjun |
|---------|-------|-------|
| Feedback inbox | ✅ | ✅ |
| Source tagging | ✅ | ✅ |
| RICE scoring | ✅ | ⚠️ learning |
| Dashboard metrics | ✅ | ✅ |
| Team collaboration | 🔜 Phase 2 | 🔜 Phase 2 |

Next: [`03-prd.md`](03-prd.md)
