# FeedbackFlow MVP

Browser-based feedback inbox + RICE prioritization for early-stage PMs.

## Run

From project root:
```bash
./start.sh
```
Then open: http://localhost:8080/feedbackflow/

Or double-click `index.html` (use local server if links break).

## Screens

| Tab | Purpose |
|-----|---------|
| Dashboard | Metrics, source breakdown, how-to |
| Inbox | Add feedback, promote to features |
| Backlog | RICE scoring, auto-sorted priority list |

## PM docs

Full case study: [`../docs/`](../docs/)  
Technical overview for PMs: [`../docs/08-technical-overview-for-pms.md`](../docs/08-technical-overview-for-pms.md)

## Data

Saved in browser `localStorage` only. Clear site data to reset. Demo seed loads on first visit.
