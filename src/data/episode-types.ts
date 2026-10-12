export interface Episode {
  number: number;
  slug: string;
  title: string;
  publishDate: string;
  duration: string;
  shortDescription: string;
  longDescription: string;
  artwork: string;
  audioSrc: string;
  featured: boolean;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

const ISO_DATE = /^\d{4}-\d{2}-\d{2}$/;

export function validateEpisodes(episodes: Episode[]): void {
  const errors: string[] = [];

  if (episodes.length !== 20) {
    errors.push(`expected exactly 20 episodes, got ${episodes.length}`);
  }

  const featuredCount = episodes.filter((e) => e.featured).length;
  if (featuredCount !== 1) {
    errors.push(`expected exactly 1 featured episode, got ${featuredCount}`);
  }

  const unique = (key: keyof Episode) =>
    new Set(episodes.map((e) => String(e[key])));
  for (const key of ["number", "slug", "title", "publishDate"] as const) {
    if (unique(key).size !== episodes.length) {
      errors.push(`duplicate values found in "${key}"`);
    }
  }

  for (const e of episodes) {
    if (e.number < 1 || e.number > 20) {
      errors.push(`episode number ${e.number} out of range 1..20`);
    }
    if (!ISO_DATE.test(e.publishDate)) {
      errors.push(`episode ${e.number} has invalid publishDate "${e.publishDate}"`);
    }
    if (!e.artwork.startsWith("/artwork/")) {
      errors.push(`episode ${e.number} artwork must live under /artwork/`);
    }
    if (!e.audioSrc.startsWith("/audio/")) {
      errors.push(`episode ${e.number} audioSrc must live under /audio/`);
    }
    if (!e.title.trim() || !e.shortDescription.trim()) {
      errors.push(`episode ${e.number} missing title or shortDescription`);
    }
  }

  if (errors.length > 0) {
    throw new Error(`Episode data invariant violations:\n- ${errors.join("\n- ")}`);
  }
}

export function validateFaq(items: FaqItem[]): void {
  const errors: string[] = [];
  if (items.length < 5) {
    errors.push(`expected at least 5 FAQ items, got ${items.length}`);
  }
  if (new Set(items.map((i) => i.id)).size !== items.length) {
    errors.push("duplicate FAQ ids");
  }
  for (const item of items) {
    if (!item.question.trim() || !item.answer.trim()) {
      errors.push(`FAQ item "${item.id}" missing question or answer`);
    }
  }
  if (errors.length > 0) {
    throw new Error(`FAQ data invariant violations:\n- ${errors.join("\n- ")}`);
  }
}

export function getFeaturedEpisode(episodes: Episode[]): Episode {
  const featured = episodes.filter((e) => e.featured);
  if (featured.length !== 1) {
    throw new Error(`expected exactly 1 featured episode, got ${featured.length}`);
  }
  return featured[0];
}

export function sortEpisodesByDateDesc(episodes: Episode[]): Episode[] {
  return [...episodes].sort((a, b) => b.publishDate.localeCompare(a.publishDate));
}
