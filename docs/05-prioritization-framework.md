# 05 — Prioritization Framework (RICE)

This document explains **why** FeedbackFlow uses RICE and **how** to use it in the app and in interviews.

---

## Why prioritization matters

Resources are finite: engineering time, design bandwidth, your credibility.

Without a framework, teams default to:
- **Loudest stakeholder** wins
- **Most recent** feedback wins
- **Easiest** ticket wins

A framework forces **explicit tradeoffs**.

---

## Why RICE (not ICE, MoSCoW alone, or gut feel)

| Framework | Pros | Cons for our user |
|-----------|------|-------------------|
| **MoSCoW** | Great for scope buckets | Doesn't rank within "Must" |
| **ICE** | Simple (3 factors) | Missing effort → overweights sexy ideas |
| **RICE** | Adds Reach + Effort | Slightly more inputs — worth it for PM interviews |
| **Kano** | Excellent for delight vs basics | Harder to operationalize in a simple MVP |

**Decision:** RICE is industry-recognized, teachable in 5 minutes, and maps cleanly to UI fields.

---

## RICE components explained

### Reach

**Question:** How many users will this affect in a given time period (we use per quarter)?

| Score | Meaning (example) |
|-------|-------------------|
| 1 | Edge case, < 5% of users |
| 5 | Core segment, ~30% |
| 10 | Nearly all active users |

*In MVP we use 1–10 relative scale — perfect precision is less important than consistent comparison.*

### Impact

**Question:** How much will this move our target metric?

| Value | Label | Example |
|-------|-------|---------|
| 0.25 | Minimal | Small UX polish |
| 0.5 | Low | Nice-to-have convenience |
| 1 | Medium | Clear workflow improvement |
| 2 | High | Major retention driver |
| 3 | Massive | Unlocks new use case or revenue |

### Confidence

**Question:** How much evidence supports Reach and Impact estimates?

| Range | Meaning |
|-------|---------|
| 100% | Hard data (analytics, repeated requests) |
| 80% | Strong qualitative signal |
| 50% | Hypothesis — needs discovery |
| < 50% | Speculative — usually deprioritize |

**PM tip:** Low confidence is a signal to **learn more**, not always to kill the idea.

### Effort

**Question:** How many person-weeks for eng + design + PM?

Include: build, test, release, docs. Use **person-weeks**, not calendar weeks.

---

## The formula

```
RICE Score = (Reach × Impact × Confidence) / Effort
```

Where **Confidence** is a decimal (80% → 0.8).

### Worked example

**Feature:** Bulk CSV export

| Factor | Value |
|--------|-------|
| Reach | 8 |
| Impact | 2 (high) |
| Confidence | 0.8 (80%) |
| Effort | 3 person-weeks |

```
Score = (8 × 2 × 0.8) / 3 = 12.8 / 3 ≈ 4.27
```

**Feature:** Dark mode

| Factor | Value |
|--------|-------|
| Reach | 6 |
| Impact | 0.5 |
| Confidence | 0.9 |
| Effort | 1 |

```
Score = (6 × 0.5 × 0.9) / 1 = 2.7
```

**Decision:** Ship CSV export before dark mode.

---

## Common interview questions

### "RICE is subjective — isn't it just fake math?"

**Answer:** "RICE isn't meant to replace judgment — it structures conversation. The value is forcing the team to agree on assumptions before building. I'd rather argue about whether Impact is 1 or 2 than argue after we've spent six weeks building the wrong thing."

### "How do you handle CEO pet projects?"

**Answer:** "I'd still run it through RICE transparently. If Reach is real, the score will reflect it. If not, the framework gives data for a respectful pushback conversation."

### "When would you not use RICE?"

**Answer:** "Regulatory must-dos, security incidents, or contractual deadlines — those are table stakes, not optimization problems. I use MoSCoW or a separate 'non-negotiable' lane for those."

---

## How this appears in FeedbackFlow

1. User promotes feedback → **Feature** created
2. User opens **Backlog** tab
3. User fills RICE fields on each card
4. App recalculates score and **re-sorts** list
5. **Dashboard** surfaces #1 priority

Read the code comments in `feedbackflow/app.js` function `calculateRiceScore()` after reading this doc.

Next: [`06-metrics-and-success.md`](06-metrics-and-success.md)
