# Contract: Pages & Navigation

**Feature**: Podcast Website — UI/page contract (static site, no external APIs)

## Routes

| Route | Page | MUST render | Source data |
|-------|------|-------------|-------------|
| `/` | Landing | Site nav; exactly one featured episode (artwork + alt, title, short description, duration, play control); link/cards to other pages | Episode with `featured: true` |
| `/episodes` | Episodes | Site nav; list of all 20 episodes ordered newest-first; each entry: number, title, publish date, duration, short description, artwork + alt, play control | All episodes |
| `/about` | About | Site nav; show premise, host/brand description, contact/follow link(s) | Static page content |
| `/faq` | FAQ | Site nav; ≥ 5 question/answer items, expandable in place | FAQ items |

## Navigation contract

- Site navigation appears on EVERY page and contains links to: Home (`/`),
  Episodes (`/episodes`), About (`/about`), FAQ (`/faq`).
- All links are relative/absolute static paths — no client-side router data
  fetch required.
- Current page MUST be indicated accessibly (e.g., `aria-current="page"`).
- Requirement coverage: FR-006, SC-003 (≤ 2 clicks between any two pages —
  satisfied by direct nav links).

## Playback contract

- A playback control MUST be present on the landing page (featured episode)
  and on each episode entry on `/episodes` (FR-007).
- Activating the control starts playback of that episode's local audio file.
- If audio fails to load/play, the control MUST show a clear failure/unavailable
  state and page content MUST remain usable (spec edge case).
- Playback MUST NOT require JavaScript to leave the page in an unusable state
  (native `<audio>` baseline, research R4).

## Responsive contract

- All routes render correctly (no overlap/clipping) at ≥ 3 tested viewport
  widths covering mobile and desktop (SC-004).
- Navigation remains operable (tappable/keyboard-reachable) at mobile widths.

## Accessibility contract

- Semantic landmarks (`header`, `nav`, `main`, `footer`) on every page.
- All artwork has descriptive `alt` text; all controls have accessible names.
- Color contrast meets WCAG 2.1 AA (constitution principle III).
- FAQ items operable via keyboard without JavaScript (`<details>`, research R5).

## Out of scope (explicitly NOT part of this contract)

- Any HTTP API, feed endpoint, or server route (static-only constitution).
- Search, filtering, pagination, comments, accounts, subscriptions.
