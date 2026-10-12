# Quickstart & Validation Guide

**Feature**: Podcast Website (`specs/001-podcast-website`)
**Purpose**: Run the site and validate it end-to-end against the spec's
success criteria. Implementation details live in `tasks.md`; contracts in
`contracts/`; data rules in `data-model.md`.

## Prerequisites

- Node.js LTS (v20+) and npm installed
- No database, no API keys, no external feed access required (all data mocked)

## Setup & Run

```bash
npm install          # install dependencies
npm run dev          # local dev server (verify in browser)
npm run build        # static export → out/ directory
npm run serve:out    # serve the static out/ build (any static file server)
npm run test:e2e     # Playwright smoke suite
```

`npm run build` MUST complete without errors and produce a static `out/`
directory containing all four routes (validates constitution principle I).

## Validation Scenarios (map to Success Criteria)

| # | Scenario | Steps | Expected outcome | Covers |
|---|----------|-------|------------------|--------|
| 1 | Featured episode hero | Open `/` | Exactly one episode shown with artwork, title, description, play control; listening possible within ~10s of load | FR-001, SC-001 |
| 2 | Full catalog | Open `/episodes` | 20 distinct episodes listed, newest first; none missing/duplicated; each with number, title, date, duration, description, artwork | FR-002/003, SC-002 |
| 3 | Navigation | From each of the 4 pages, navigate to every other page | Reachable in ≤ 2 clicks; nav present on all pages; current page indicated | FR-006, SC-003 |
| 4 | Responsive | View all pages at 3 widths (e.g., 360px, 768px, 1440px) | No overlap, clipping, or unreadable text; nav usable on mobile | FR-010, SC-004 |
| 5 | FAQ | Open `/faq`, expand items | ≥ 5 Q&A pairs; answers revealed in place without leaving the page | FR-005, SC-005 |
| 6 | Design perception | Show all pages to ≥ 3 reviewers | Average elegance/distinctiveness rating ≥ 4/5 | FR-009, SC-006 |
| 7 | No-JS readability | Load `/episodes`, `/about`, `/faq` with JS disabled (or view page source HTML) | All core content readable | FR-011, SC-007 |
| 8 | Playback failure | Simulate missing/blocked audio | Player shows clear unavailable state; page content still usable | Spec edge case |
| 9 | Accessibility | Run axe scan on all 4 pages | No serious/critical violations; keyboard can reach all controls | Constitution III |

## Contract References

- Page/route and navigation expectations: `contracts/pages.md`
- Mock data schema and invariants: `contracts/episode-schema.md`
- Entity fields and validation rules: `data-model.md`

## Definition of Done (validation perspective)

- All 9 scenarios above pass on the static `out/` build.
- `npm run build` yields a self-contained static site (no server runtime).
- Constitution check in `plan.md` remains PASS after implementation.
