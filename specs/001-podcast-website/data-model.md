# Phase 1: Data Model

**Feature**: Podcast Website (`specs/001-podcast-website`)
**Date**: 2026-10-02

All entities are static/in-memory — there is no persistence layer (no database).
Validation rules derive from spec requirements; structural/type validation is
enforced at build time by TypeScript (see research.md R2).

## Episode

Represents one of the 20 mocked podcast episodes.

| Field | Type | Required | Rules / Validation |
|-------|------|----------|--------------------|
| `number` | integer | yes | Unique across all episodes; 1–20; displayed as episode number |
| `slug` | string | yes | Unique; URL-safe (lowercase, hyphens); used for episode identity/anchors |
| `title` | string | yes | Non-empty; unique per episode |
| `publishDate` | date (ISO `YYYY-MM-DD`) | yes | Valid date; unique; used for ordering (newest first) |
| `duration` | string | yes | Human-readable duration (e.g., `42 min`) |
| `shortDescription` | string | yes | 1–2 sentences; used in list/featured cards |
| `longDescription` | string | yes | Full show notes for the episode |
| `artwork` | string (local path) | yes | Local asset under `public/artwork/`; must have `alt` text at render |
| `audioSrc` | string (local path) | yes | Local asset under `public/audio/`; mock/placeholder audio |
| `featured` | boolean | yes | Exactly ONE episode in the collection has `true` (FR-001); build check fails otherwise |

**Relationships**: Referenced by the landing page (the featured one) and listed
by the Episodes page. No other entities reference episodes.

**State transitions**: None — content is immutable at runtime.

**Derived**: `totalEpisodeCount` MUST equal 20 (FR-002 / SC-002).

## Featured Episode

Not a separate entity — a *view* of the single Episode with `featured: true`.
Invariant: `episodes.filter(e => e.featured).length === 1`.

## FAQ Item

Represents one question/answer pair on the FAQ page.

| Field | Type | Required | Rules / Validation |
|-------|------|----------|--------------------|
| `id` | string | yes | Unique; URL-safe anchor id |
| `question` | string | yes | Non-empty |
| `answer` | string | yes | Non-empty; rendered as expanded content |

**Constraints**: At least 5 items (FR-005 / SC-005).
**State transitions**: None; expansion of an answer is presentational only
(native `<details>`, research R5).

## Site Page

The four required pages.

| Page | Route | Required content |
|------|-------|------------------|
| Landing | `/` | Featured episode (artwork, title, description, playback control), nav to all pages |
| Episodes | `/episodes` | All 20 episodes with number, title, date, duration, short description, artwork |
| About | `/about` | Show premise, host/brand description, contact/follow info |
| FAQ | `/faq` | ≥ 5 FAQ items |

**Constraints**: Every page reachable from every other page via consistent
navigation (FR-006 / SC-003, contract: `contracts/pages.md`).

## Validation Summary (build-time / test-time)

1. Exactly 1 featured episode; 20 total; unique `number`, `slug`, `title`.
2. All `publishDate` values are valid ISO dates.
3. All `artwork` / `audioSrc` paths resolve to files in `public/`.
4. ≥ 5 FAQ items with non-empty question/answer.
5. Episode count displayed on `/episodes` equals 20 (e2e assertion, SC-002).
