import Link from "next/link";
import FeaturedEpisode from "@/components/FeaturedEpisode";
import { episodes } from "@/data/episodes";
import { getFeaturedEpisode } from "@/data/episode-types";

export default function HomePage() {
  const featured = getFeaturedEpisode(episodes);

  return (
    <>
      <section className="hero" aria-labelledby="hero-title">
        <p className="eyebrow">A weekly podcast</p>
        <h1 id="hero-title">Stories for people who make things.</h1>
        <p className="hero__lede muted">
          Mi Podcast is a show about creative work, attention, and the ideas
          that shape how we live — one self-contained conversation at a time.
        </p>
        <div className="hero__actions">
          <a href="#featured" className="btn">
            Listen to the latest
          </a>
          <Link href="/about" className="btn btn--ghost">
            About the show
          </Link>
        </div>
      </section>

      <section id="featured" aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="visually-hidden">
          Featured episode
        </h2>
        <FeaturedEpisode episode={featured} />
      </section>
    </>
  );
}
