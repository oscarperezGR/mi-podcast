# Phase 0: Research & Decisions

**Feature**: Podcast Website (`specs/001-podcast-website`)
**Date**: 2026-10-02
**Status**: All Technical Context unknowns resolved — no NEEDS CLARIFICATION remain.

## R1 — Static generation strategy with Next.js

**Decision**: Use Next.js with `output: 'export'` (static export) and App
Router; every route is pre-rendered at build time into `out/`.

**Rationale**: User specified "Next.js with static site configuration, no
databases". Static export satisfies constitution principle I (no server
runtime) and makes deployment trivial (any static host).

**Alternatives considered**:
- Next.js with server rendering/ISR — rejected: violates Static-Only Delivery.
- Plain HTML/CSS/JS — rejected: user explicitly chose Next.js.
- SPA-only (client-rendered) — rejected: hurts principle V (readable core
  content) and SEO/perceived performance.

## R2 — Mock data storage location

**Decision**: Store the 20 episodes and FAQ items as typed TypeScript data
modules (`src/data/episodes.ts`, `src/data/faq.ts`) exporting plain arrays.
No JSON fetched at runtime, no CMS, no feed parsing.

**Rationale**: User said data is embedded for the mock episodes and nothing
pulled from a real feed. Typed modules give compile-time validation of the
schema (contracts/episode-schema.md), keep content in version control
(constitution Technical Constraints), and add zero dependencies.

**Alternatives considered**:
- JSON files imported directly — fine, but loses compile-time type checking.
- MDX content files — overkill for 20 structured records; adds complexity (YAGNI).
- Local mock API layer — rejected: implies a service; unnecessary for static data.

## R3 — Styling approach

**Decision**: Plain CSS Modules with a small set of design tokens
(CSS custom properties for color, type scale, spacing) defined once in the root
layout. No CSS framework or component library.

**Rationale**: Constitution principle II (minimal dependencies) and V
(simplicity). Full control over the "elegant, stand-out" aesthetic without
shipping unused framework CSS; tokens keep the design system consistent across
4 pages and make WCAG contrast (principle III) manageable from one place.

**Alternatives considered**:
- Tailwind CSS — productive but adds a build dependency and utility-class noise;
  rejected under principle II for a 4-page site.
- Styled-components/emotion — runtime CSS-in-JS cost; rejected under IV and II.
- Component library (MUI, shadcn, etc.) — heavy; rejected under II.

## R4 — Audio playback

**Decision**: Native HTML `<audio controls>` (or a thin wrapper around it) fed
with local mock audio files from `public/audio/`.

**Rationale**: Zero dependencies, keyboard/screen-reader accessible for free,
degrades gracefully when media is unavailable (spec edge case: player shows a
clear failure state; content stays usable).

**Alternatives considered**:
- Audio player libraries (e.g., howler, wavesurfer) — rejected: not needed for
  basic play/pause of one file (principle II, V).

## R5 — FAQ interactivity without JavaScript

**Decision**: Use native `<details>/<summary>` elements for FAQ expand/collapse.

**Rationale**: Satisfies FR-011 and principle V — answers are readable even
when interactive enhancements fail, while still feeling like an app when they
work. Fully keyboard accessible natively.

**Alternatives considered**:
- Controlled accordion with JS state — rejected as the *base* behavior;
  acceptable only as optional enhancement.

## R6 — Featured episode selection

**Decision**: Exactly one episode carries `featured: true` in the data module;
the landing page renders that episode. A build-time check fails if zero or more
than one episode is featured.

**Rationale**: Spec requires "exactly one" featured episode (FR-001,
acceptance scenario 1); deterministic and no algorithm (assumption).

**Alternatives considered**:
- Hard-code featured markup in the landing page — rejected: duplicates data and
  breaks the single-source-of-truth content model.

## R7 — Responsive/mobile strategy

**Decision**: Mobile-first CSS (base styles for small viewports, `min-width`
breakpoints for larger), fluid type/spacing with `clamp()`, and images sized
via width/height attributes + modern formats where practical. Verified at ≥3
viewports per SC-004.

**Rationale**: User stated the site is responsive and ready for mobile;
constitution principle IV (performance on mobile) and SC-004.

**Alternatives considered**:
- Desktop-first with `max-width` — rejected: worse mobile baseline.

## R8 — Testing/verification approach

**Decision**: Playwright e2e smoke suite covering: navigation across all 4
pages, 20-episode listing count, featured episode presence, playback control
visibility, FAQ expansion, and viewport checks at 3 widths; plus an axe-core
accessibility scan. Manual browser verification per constitution workflow is
captured in quickstart.md.

**Rationale**: Proves the spec's success criteria end-to-end with one
dependency; aligns with constitution Development Workflow (verification before
merge).

**Alternatives considered**:
- Full unit-test coverage of components — low value for mostly-static
  pages; can be added later if logic grows (YAGNI).

## Post-Phase-1 Constitution Re-check

| Principle | Design impact | Verdict |
|-----------|---------------|---------|
| I Static-Only | Static export, pre-rendered routes, local assets only | PASS |
| II Minimal Dependencies | Next.js + React + Playwright + CSS Modules; no libraries for playback/FAQ/styling | PASS |
| III Accessibility | Semantic HTML, native controls, axe scan in validation | PASS |
| IV Performance | Pre-rendering + small dep set keeps initial JS/CSS under 250 KB; sized local images | PASS |
| V Progressive Enhancement | Pre-rendered HTML; `<audio>`/`<details>` degrade gracefully | PASS |

No new violations introduced by Phase 1 design.
