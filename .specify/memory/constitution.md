<!--
Sync Impact Report
- Version change: (unversioned scaffold) → 1.0.0
- Rationale: Initial ratification of project-specific principles (first fill of scaffold).
- Modified principles:
  - [PRINCIPLE_1_NAME] → I. Static-Only Delivery (NON-NEGOTIABLE)
  - [PRINCIPLE_2_NAME] → II. Minimal Dependencies
  - [PRINCIPLE_3_NAME] → III. Accessibility (NON-NEGOTIABLE)
  - [PRINCIPLE_4_NAME] → IV. Performance Budget
  - [PRINCIPLE_5_NAME] → V. Progressive Enhancement & Simplicity
- Added sections: Technical Constraints, Development Workflow
- Removed sections: none (scaffold placeholders [SECTION_2_NAME], [SECTION_3_NAME],
  [SECTION_2_CONTENT], [SECTION_3_CONTENT], [GOVERNANCE_RULES] replaced)
- TODOs/deferred: none — all placeholders resolved.
  RATIFICATION_DATE set to 2026-10-02 (initial adoption; no prior adoption date existed).
-->

# Mi Podcast Constitution

## Core Principles

### I. Static-Only Delivery (NON-NEGOTIABLE)

The application MUST be deployable as static files only. No server-side runtime,
database, or per-request backend logic is permitted in production. Any build step
MUST produce a self-contained set of static assets (HTML, CSS, JS, media) that any
static file host can serve.

Rationale: Static delivery keeps hosting trivial, cheap, and secure — there is no
server surface to patch, scale, or monitor.

### II. Minimal Dependencies

Third-party libraries and frameworks MUST be justified by a concrete need and kept
to the smallest viable set. Every added dependency MUST be actively maintained,
license-compatible, and auditable. No dependency is permitted solely for
convenience when a few lines of standard HTML/CSS/JS suffice.

Rationale: Fewer dependencies mean a smaller attack surface, faster loads, and
less maintenance debt for a small static site.

### III. Accessibility (NON-NEGOTIABLE)

All pages MUST use semantic HTML, remain fully navigable by keyboard, and carry
appropriate alternative text for non-text content. Color contrast MUST meet
WCAG 2.1 AA. Interactive controls MUST expose accessible names to assistive
technology. Accessibility regressions block release.

Rationale: An unusable site for any audience is a defect, not a nice-to-have.

### IV. Performance Budget

The site MUST load fast on slow networks and low-end devices. Assets MUST be
compressed (gzip/brotli where supported), images MUST be sized and modern formats
(WEBP/AVIF) where practical, and unused code MUST NOT ship. Core page loads MUST
stay within an agreed budget (target: well under 250 KB of initial JS/CSS,
excluding intentionally heavy media such as audio/video).

Rationale: Performance is a feature; podcast consumers frequently browse on mobile
connections.

### V. Progressive Enhancement & Simplicity

Core content (episodes, titles, links, audio) MUST be readable with JavaScript
disabled. JavaScript MUST enhance, not gate, the experience. Start with the
simplest solution that meets the requirement (YAGNI); complexity MUST be justified
by an actual need.

Rationale: Static content degrades gracefully; simplicity keeps the site durable
and maintainable.

## Technical Constraints

- Output is a static site: plain HTML/CSS/JS, or a static-site generator whose
  build output is pure static files. No SSR/CSR-only app shells for core content.
- The site MUST work in the latest two major versions of Chrome, Firefox, Safari,
  and Edge, and MUST remain usable on mobile viewports.
- All content files (episodes, show notes) MUST live in version control in an
  editable, portable format (Markdown/JSON/YAML) — no content locked in a
  proprietary CMS.
- External resources (fonts, CDNs, embeds) MUST have a documented fallback or be
  optional; the core page MUST render without them.
- Secrets MUST NOT be committed; a static site has no runtime secret storage.

## Development Workflow

- All changes are made through version control with review before merge to the
  default branch.
- Every change MUST be verified manually in a browser (or automated smoke test)
  against: rendering, keyboard navigation, and responsive layout.
- Broken links, missing alt text, and console errors found during review MUST be
  fixed before merge.
- The production build MUST be verified locally (or in CI) before deployment;
  deploys MUST be reproducible from a clean checkout.

## Governance

This constitution supersedes all other practices and guidelines for this project.

- **Amendments**: Proposed as a pull request updating this file. Amendments MUST
  document the rationale and a migration plan for any existing code that would
  become non-compliant. Approval by the project owner is required.
- **Versioning**: Semantic versioning applies — MAJOR for principle
  removals/redefinitions, MINOR for added or materially expanded principles,
  PATCH for clarifications and wording fixes.
- **Compliance review**: All pull requests and reviews MUST verify compliance
  with these principles. Violations MUST be justified explicitly in the PR or
  blocked. Complexity MUST be justified, not assumed.
- **Guidance**: Runtime development guidance belongs in the project README/docs
  referenced from this constitution; this file governs principles only.

**Version**: 1.0.0 | **Ratified**: 2026-10-02 | **Last Amended**: 2026-10-02
