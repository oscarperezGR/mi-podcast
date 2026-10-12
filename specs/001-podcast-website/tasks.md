---
description: "Task list template for feature implementation"
---

# Tasks: Podcast Website

**Input**: Design documents from `/specs/001-podcast-website/`

**Prerequisites**: plan.md, spec.md, research.md, data-model.md, contracts/, quickstart.md

**Tests**: The spec did not request TDD; per plan.md/quickstart.md the testing
approach is a Playwright smoke suite + axe scan — included in the Polish phase
as validation tooling (not test-first).

**Organization**: Tasks are grouped by user story to enable independent
implementation and testing of each story.

## Format: `[ID] [P?] [Story] Description`

- **[P]**: Can run in parallel (different files, no dependencies)
- **[Story]**: Which user story this task belongs to (e.g., US1, US2, US3)
- Include exact file paths in descriptions

## Path Conventions

Single project (static site): `src/`, `tests/` at repository root, per plan.md.

---

## Phase 1: Setup (Shared Infrastructure)

**Purpose**: Project initialization and basic structure

- [X] T001 Scaffold Next.js static-export project in repo root: `package.json`
  (scripts: `dev`, `build`, `serve:out`, `test:e2e`), `tsconfig.json`,
  `next.config.ts` with `output: 'export'`, `src/app/layout.tsx`,
  `src/app/page.tsx` placeholder (per plan.md Project Structure)
- [X] T002 [P] Configure ESLint and Prettier in `eslint.config.mjs` and
  `.prettierrc` at repository root
- [X] T003 [P] Install and configure Playwright in `playwright.config.ts`
  (baseURL pointed at static server, viewports 360/768/1440) and create
  placeholder `tests/e2e/smoke.spec.ts`

**Checkpoint**: Project builds to a static `out/` directory (`npm run build`)

---

## Phase 2: Foundational (Blocking Prerequisites)

**Purpose**: Core data, styling, and layout that ANY user story depends on

**?? CRITICAL**: No user story work can begin until this phase is complete

- [X] T004 Create design tokens (colors with WCAG AA contrast, type scale,
  spacing) and base styles in `src/styles/globals.css`; import in
  `src/app/layout.tsx` (constitution principles III & IV; research R3)
- [X] T005 Define `Episode` and `FaqItem` types plus invariant validation
  helpers in `src/data/episode-types.ts`, enforcing verbatim from
  `contracts/episode-schema.md`: `number` unique 1..20; `slug` unique
  URL-safe; `title` unique non-empty; `publishDate` unique ISO `YYYY-MM-DD`;
  `featured` exactly one true across the set; FAQ `id` unique, question/answer
  non-empty
- [X] T006 Create `src/data/episodes.ts` with exactly 20 mocked episodes
  (`episodes.length === 20`), exactly one `featured: true` (FR-001),
  newest-first orderable by `publishDate`, `artwork` under `public/artwork/`,
  `audioSrc` under `public/audio/` (depends: T005)
- [X] T007 [P] Create `src/data/faq.ts` with at least 5 question/answer items
  (`faq.length >= 5`, FR-005) using the `FaqItem` type (depends: T005)
- [X] T008 [P] Generate local placeholder assets: 20 artwork images in
  `public/artwork/` and mock audio files in `public/audio/` matching the
  paths declared in `src/data/episodes.ts` (no external CDN, research R6/R8)
- [X] T009 Implement shared navigation component `src/components/SiteNav.tsx`
  with links to `/`, `/episodes`, `/about`, `/faq` and `aria-current="page"`
  on the active route (FR-006; contract `contracts/pages.md`) (depends: T004)
- [X] T010 Update root layout `src/app/layout.tsx` with semantic landmarks
  (`header`, `nav`, `main`, `footer`) embedding `SiteNav` so navigation appears
  on every page (depends: T009)

**Checkpoint**: Foundation ready — all four user stories can now be built
independently

---

## Phase 3: User Story 1 - Discover and play a featured episode (Priority: P1) ?? MVP

**Goal**: Landing page showing exactly one featured episode with artwork,
title, description, and working playback control

**Independent Test**: Open `/`, see exactly one featured episode with
artwork/title/description, start playback, and navigate to other pages (spec
US1 acceptance scenarios 1–3; quickstart scenarios 1 & 3)

### Implementation for User Story 1

- [X] T011 [P] [US1] Create `FeaturedEpisode` component in
  `src/components/FeaturedEpisode.tsx`: artwork with descriptive `alt`, title,
  `shortDescription`, `duration`, play control (FR-001, FR-009)
- [X] T012 [P] [US1] Create `EpisodePlayer` component in
  `src/components/EpisodePlayer.tsx` wrapping native `<audio controls>`
  (research R4) with a clear failure/unavailable state when audio cannot load
  (spec edge case; FR-007)
- [X] T013 [US1] Implement landing page `src/app/page.tsx`: select the episode
  where `featured === true`, render `FeaturedEpisode` + `EpisodePlayer`, and
  provide visible links/cards to Episodes, About, and FAQ (depends: T006,
  T011, T012)

**Checkpoint**: User Story 1 fully functional and testable independently — MVP
shippable after validation

---

## Phase 4: User Story 2 - Browse the full episode catalog (Priority: P2)

**Goal**: Episodes page listing all 20 mocked episodes with full metadata and
per-episode playback

**Independent Test**: Open `/episodes` and verify 20 distinct episodes listed
newest-first with number, title, date, duration, description, artwork; select
one and start playback (spec US2 acceptance scenarios 1–3; quickstart
scenario 2)

### Implementation for User Story 2

- [ ] T014 [P] [US2] Create `EpisodeCard` component in
  `src/components/EpisodeCard.tsx` rendering number, title, `publishDate`,
  `duration`, `shortDescription`, artwork + `alt`, and an `EpisodePlayer`
  play control (FR-003, FR-007) (depends: T012)
- [ ] T015 [US2] Implement Episodes page `src/app/episodes/page.tsx` listing
  all episodes from `src/data/episodes.ts` sorted by `publishDate` descending,
  asserting visually that all 20 render (FR-002; SC-002) (depends: T006, T014)

**Checkpoint**: User Stories 1 AND 2 both work independently

---

## Phase 5: User Story 3 - Learn about the show and get answers (Priority: P3)

**Goal**: About page with show/host description and FAQ page with ≥ 5
in-place expandable answers

**Independent Test**: Open `/about` and `/faq`; verify show description and
contact/follow info present, ≥ 5 Q&A pairs, answers expand without page
navigation (spec US3 acceptance scenarios 1–3; quickstart scenario 5)

### Implementation for User Story 3

- [ ] T016 [P] [US3] Create `FaqItem` component in
  `src/components/FaqItem.tsx` using native `<details>/<summary>` so answers
  are readable without JavaScript (FR-011; research R5) (depends: T005)
- [ ] T017 [P] [US3] Implement About page `src/app/about/page.tsx` with show
  premise, host/brand description, and contact/follow links (FR-004)
- [ ] T018 [US3] Implement FAQ page `src/app/faq/page.tsx` rendering all items
  from `src/data/faq.ts` via `FaqItem` (≥ 5 items, FR-005; SC-005)
  (depends: T007, T016)

**Checkpoint**: All user stories independently functional

---

## Phase 6: Polish & Cross-Cutting Concerns

**Purpose**: Improvements and validation that affect multiple user stories

- [ ] T019 [P] Mobile-first responsive pass across `src/styles/*.css` and
  components: `clamp()` fluid type/spacing, `min-width` breakpoints, nav
  usable at 360px, no overlap at 360/768/1440 (FR-010; SC-004; research R7)
- [ ] T020 [P] Accessibility audit across all pages: descriptive `alt` on all
  artwork, accessible names on controls, keyboard reachability, WCAG 2.1 AA
  contrast in design tokens (FR-009; constitution principle III)
- [ ] T021 [P] Implement Playwright smoke tests in `tests/e2e/` covering
  quickstart scenarios 1–5 and 7: featured episode presence, exactly 20
  episode entries, nav reachable in ≤ 2 clicks on all 4 pages, FAQ expansion,
  3-viewport render check, core content readable from pre-rendered HTML
  (SC-001…SC-005, SC-007)
- [ ] T022 [P] Add axe-core accessibility scan test in
  `tests/e2e/a11y.spec.ts` asserting no serious/critical violations on all 4
  routes (constitution principle III; quickstart scenario 9)
- [ ] T023 Performance check against constitution principle IV: initial JS/CSS
  budget < 250 KB from `npm run build` output, sized images, no unused
  dependencies shipped (adjust `src/` assets/styles as needed)
- [ ] T024 Run full `specs/001-podcast-website/quickstart.md` validation:
  `npm run build` → serve `out/` → execute all 9 scenarios, fix any gaps

**Checkpoint**: Feature ready for review and deployment from static `out/`

---

## Dependencies & Execution Order

### Phase Dependencies

- **Setup (Phase 1)**: No dependencies — can start immediately
- **Foundational (Phase 2)**: Depends on Setup completion — BLOCKS all user stories
- **User Story 1 (Phase 3)**: Depends on Foundational (T006, T004, T010)
- **User Story 2 (Phase 4)**: Depends on Foundational (T006) + T012 from US1 —
  to preserve full independence, build US2 after US1, or extract `EpisodePlayer`
  (T012) first; T012 is small and intentionally shared
- **User Story 3 (Phase 5)**: Depends on Foundational (T007, T005, T010) only —
  fully independent of US1/US2
- **Polish (Phase 6)**: Depends on all desired user stories being complete

### User Story Dependencies

- **User Story 1 (P1)**: Starts after Foundational; no dependencies on other stories
- **User Story 2 (P2)**: Starts after Foundational; shares `EpisodePlayer` (T012)
  with US1 but is otherwise independent
- **User Story 3 (P3)**: Starts after Foundational; no dependencies on US1/US2

### Within Each User Story

- Components before pages
- Data (Phase 2) before rendering
- Core implementation before cross-story integration

---

## Parallel Opportunities

- **Phase 1**: T002 ∥ T003 (different config files)
- **Phase 2**: T007 ∥ T008 ∥ T009 (after T005/T004 respectively, no shared files)
- **Phase 3**: T011 ∥ T012 (different components, no dependencies)
- **Phase 4**: T014 can start as soon as T012 exists
- **Phase 5**: T016 ∥ T017 (different files)
- **Phase 6**: T019 ∥ T020 ∥ T021 ∥ T022 (different files/concerns)
- **Across stories**: US2 and US3 can be worked in parallel after Foundational
  (US3 has zero coupling to US1/US2)

---

## Parallel Example: User Story 1

```bash
# Launch independent components together:
Task: "Create FeaturedEpisode component in src/components/FeaturedEpisode.tsx"
Task: "Create EpisodePlayer component in src/components/EpisodePlayer.tsx"

# Then integrate:
Task: "Implement landing page src/app/page.tsx (depends: both components + src/data/episodes.ts)"
```

---

## Implementation Strategy

### MVP First (User Story 1 Only)

1. Complete Phase 1: Setup
2. Complete Phase 2: Foundational (CRITICAL — blocks all stories)
3. Complete Phase 3: User Story 1
4. **STOP and VALIDATE**: quickstart scenarios 1 & 3 on `/`
5. Static `out/` build is demoable at this point

### Incremental Delivery

1. Setup + Foundational → foundation ready
2. US1 (landing + featured playback) → validate → MVP demo
3. US2 (20-episode catalog) → validate → full catalog live
4. US3 (About + FAQ) → validate → complete content site
5. Polish → quickstart scenarios 1–9 pass → deploy static `out/`

### Parallel Team Strategy

1. Team completes Setup + Foundational together
2. Once Foundational is done:
   - Developer A: US1 (landing page)
   - Developer B: US3 (About + FAQ — zero coupling)
   - Developer C: waits for T012, then US2 (catalog)
3. Stories complete and integrate independently

---

## Notes

- [P] tasks = different files, no dependencies
- [Story] label maps task to specific user story for traceability
- Each user story is independently completable and testable
- Commit after each task or logical group
- Stop at any checkpoint to validate story independently
- Constitution gates (plan.md): static-only output, <250 KB initial JS/CSS
  (T023), WCAG 2.1 AA (T020/T022), readable without interactive enhancements
  (T021 scenario 7)
