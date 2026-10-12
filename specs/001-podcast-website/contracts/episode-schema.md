# Contract: Episode & FAQ Data Schema

**Feature**: Podcast Website — schema contract for embedded mock data
(consumed from `src/data/episodes.ts` and `src/data/faq.ts`)

## Episode record

```text
Episode {
  number           : integer   // unique, 1..20
  slug             : string    // unique, URL-safe
  title            : string    // unique, non-empty
  publishDate      : string    // ISO date YYYY-MM-DD, unique
  duration         : string    // e.g. "42 min"
  shortDescription : string    // 1-2 sentences
  longDescription  : string    // show notes
  artwork          : string    // path under public/artwork/
  audioSrc         : string    // path under public/audio/
  featured         : boolean   // exactly one record true across the set
}
```

## Collection invariants (enforced at build/test)

1. `episodes.length === 20` (FR-002).
2. Exactly one record with `featured === true` (FR-001).
3. `number`, `slug`, `title`, `publishDate` are each unique.
4. Every `artwork` and `audioSrc` path resolves to an existing local file.
5. Default ordering for display: `publishDate` descending (newest first).

## FAQ record

```text
FaqItem {
  id       : string   // unique, URL-safe anchor
  question : string   // non-empty
  answer   : string   // non-empty
}
```

Collection invariant: `faq.length >= 5` (FR-005).

## Handling rules

- Data is imported statically at build time; no runtime fetching, no external
  services (FR-008, constitution principle I).
- Content is version-controlled source data — edits are code/content changes,
  not admin operations (no CMS, assumption in spec).
- Schema changes MUST update this contract, `data-model.md`, and the
  corresponding tests together.
