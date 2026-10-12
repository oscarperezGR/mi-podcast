# Implementation Plan: Podcast Website

**Branch**: `001-podcast-website` | **Date**: 2026-10-02 | **Spec**: [spec.md](./spec.md)

**Input**: Feature specification from `/specs/001-podcast-website/spec.md`

## Summary

Build an elegant, distinctive, responsive static podcast website with four pages
(landing with one featured episode, Episodes listing 20 episodes, About, FAQ).
All episode data is mocked and embedded in the project — no database, no real
feed. Technical approach: Next.js configured for full static export
(`output: 'export'`), pre-rendered HTML for all routes, native HTML media and
`<details>` for enhancement so core content works without JavaScript.

## Technical Context

**Language/Version**: TypeScript 5.x on Next.js 15 (App Router)

**Primary Dependencies**: Next.js (static export mode), React — no UI/component
library, no data-fetching client, CSS via plain CSS Modules (see research.md)

**Storage**: N/A — mock episode/FAQ data embedded as typed data modules in the
repository; no database (per user input and spec FR-008)

**Testing**: Playwright end-to-end smoke tests (navigation, playback control,
responsive viewports); a11y spot-check via automated axe scan in CI/local

**Target Platform**: Static file hosting (any static host / `out/` directory);
latest two major browsers; mobile + desktop viewports

**Project Type**: Web (static site, single project)

**Performance Goals**: Initial JS/CSS budget < 250 KB (constitution principle
IV); content readable on slow mobile networks

**Constraints**: Constitution: static-only delivery, no runtime backend,
WCAG 2.1 AA, core content readable without interactive enhancements, minimal
dependencies

**Scale/Scope**: 4 pages, 20 mocked episodes, 1 FAQ (~5+ items), single repo

## Constitution Check

*GATE: Must pass before Phase 0 research. Re-check after Phase 1 design.*

| # | Principle / Constraint | Verdict | Notes |
|---|------------------------|---------|-------|
| I | Static-Only Delivery (NON-NEGOTIABLE) | PASS | Next.js `output: 'export'` emits pure static files; no server runtime, DB, or API routes |
| II | Minimal Dependencies | PASS | Next.js + React + Playwright only; no component library, no CMS/feed client; styling is plain CSS Modules |
| III | Accessibility (NON-NEGOTIABLE) | PASS | Semantic HTML, keyboard navigation, alt text, WCAG 2.1 AA contrast required in all designs; a11y spot-check in quickstart |
| IV | Performance Budget | PASS | Budget < 250 KB initial JS/CSS enforced; images local and sized; no unused code shipped |
| V | Progressive Enhancement & Simplicity | PASS | Pre-rendered HTML content; `<audio>` and `<details>` degrade gracefully; readable without JS |
| — | Technical Constraints (static, portable content, no secrets) | PASS | Content in version-controlled data modules; no external CDN required for core render |
| — | Development Workflow | PASS | Review-before-merge, manual browser verification (captured in quickstart.md) |

**Gate result**: PASS — no violations, Complexity Tracking not required.
Re-checked after Phase 1 design: unchanged (see end of research.md).

## Project Structure

### Documentation (this feature)

```text
specs/001-podcast-website/
├── plan.md              # This file (/speckit.plan command output)
├── research.md          # Phase 0 output (/speckit.plan command)
├── data-model.md        # Phase 1 output (/speckit.plan command)
├── quickstart.md        # Phase 1 output (/speckit.plan command)
├── contracts/           # Phase 1 output (/speckit.plan command)
│   ├── pages.md         # Page/route + navigation contract
│   └── episode-schema.md# Mock data schema contract
├── checklists/
│   └── requirements.md  # Spec quality checklist
└── tasks.md             # Phase 2 output (/speckit.tasks command - NOT created by /speckit.plan)
```

### Source Code (repository root)

```text
src/
├── app/
│   ├── layout.tsx        # Root layout, site navigation, footer
│   ├── page.tsx          # Landing page (featured episode)
│   ├── episodes/page.tsx # Episodes catalog (20 items)
│   ├── about/page.tsx    # About page
│   └── faq/page.tsx      # FAQ page
├── components/           # EpisodeCard, FeaturedEpisode, Player, FaqItem, SiteNav
├── data/
│   ├── episodes.ts       # 20 mocked episodes + featured flag
│   └── faq.ts            # FAQ items
├── styles/               # CSS Modules + design tokens (colors, type scale)
└── public/
    ├── artwork/          # Episode artwork (local, sized images)
    └── audio/            # Mock/placeholder audio files

tests/
└── e2e/                  # Playwright smoke tests (nav, playback, viewports)

next.config.ts            # output: 'export'
```

**Structure Decision**: Single project (static site). Next.js App Router with
four route directories matching the four required pages; mock data isolated
under `src/data/` so content is portable and editable in version control.

## Complexity Tracking

> No constitution violations — this section intentionally left empty.
