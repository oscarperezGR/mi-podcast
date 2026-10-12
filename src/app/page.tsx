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
        <h1 id="hero-title"> Historias para quienes crean cosas.</h1>
        <p className="hero__lede muted">
          Mi Podcast es un programa sobre el trabajo creativo, la atención y las ideas 
          que dan forma a nuestra forma de vivir 
          —una conversación independiente a la vez—.
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
