# 04 — User Stories & Acceptance Criteria

User stories follow the format:

> **As a** [persona], **I want** [action], **so that** [outcome].

Each story includes **acceptance criteria** — the testable conditions that define "done."

---

## Epic 1 — Feedback capture

### US-01 — Log new feedback

**As** Priya (PM), **I want** to quickly log feedback with its source, **so that** I don't lose context when prioritizing later.

**Acceptance criteria:**
- [ ] Form requires feedback text (minimum 10 characters)
- [ ] User selects one source from predefined list
- [ ] On submit, item appears at top of inbox
- [ ] Form clears after successful submit
- [ ] Empty submit shows validation message

**Priority:** P0 | **Story points:** 3

---

### US-02 — View feedback inbox

**As** Priya, **I want** to see all feedback in one list, **so that** I can review what users are saying.

**Acceptance criteria:**
- [ ] List shows text preview, source badge, date
- [ ] Newest items appear first
- [ ] Empty state explains how to add first feedback

**Priority:** P0 | **Story points:** 2

---

### US-03 — Promote feedback to feature

**As** Priya, **I want** to convert a feedback item into a feature idea, **so that** I can score it in my backlog.

**Acceptance criteria:**
- [ ] "Promote" button on each inbox item
- [ ] Creates feature with title derived from feedback
- [ ] Links feature to original feedback id
- [ ] Prevents duplicate promotion of same feedback
- [ ] User receives confirmation message

**Priority:** P0 | **Story points:** 5

---

## Epic 2 — Prioritization

### US-04 — Score feature with RICE

**As** Priya, **I want** to enter RICE values for a feature, **so that** I can compare options objectively.

**Acceptance criteria:**
- [ ] Fields: Reach (1-10), Impact (dropdown), Confidence (0-100%), Effort (≥ 0.5)
- [ ] Score updates automatically when any value changes
- [ ] Score formula matches PRD: (R × I × C) / E
- [ ] Invalid inputs show inline help

**Priority:** P0 | **Story points:** 5

---

### US-05 — View prioritized backlog

**As** Priya, **I want** features sorted by RICE score, **so that** I know what to build first.

**Acceptance criteria:**
- [ ] Backlog sorted descending by score
- [ ] Each card shows title, score, RICE breakdown
- [ ] Unscored features appear at bottom with "Needs scoring" label

**Priority:** P0 | **Story points:** 3

---

## Epic 3 — Insights

### US-06 — Dashboard overview

**As** Arjun (student PM), **I want** a summary dashboard, **so that** I can see project health at a glance.

**Acceptance criteria:**
- [ ] Shows total feedback count
- [ ] Shows total features count
- [ ] Shows top-priority feature if scored
- [ ] Updates when data changes

**Priority:** P0 | **Story points:** 3

---

## Epic 4 — Data management

### US-07 — Persistent data

**As** any user, **I want** my data saved between browser sessions, **so that** I don't re-enter everything.

**Acceptance criteria:**
- [ ] Refreshing page retains all feedback and features
- [ ] Data stored locally (no account required)

**Priority:** P0 | **Story points:** 2

---

## MoSCoW summary

| Must have | Should have | Could have | Won't have (MVP) |
|-----------|-------------|------------|------------------|
| US-01, 02, 03, 04, 05, 06, 07 | Delete feedback/feature | Status field on features | Login, API, integrations |

---

## How to talk about user stories in interviews

**Bad:** "We have a form and a backlog page."

**Good:** "I broke the product into three epics — capture, prioritize, and insights. The critical path was US-03: without promoting feedback to features, RICE scoring has nothing to score. That's why I prioritized it in sprint 1."

Next: [`05-prioritization-framework.md`](05-prioritization-framework.md)
