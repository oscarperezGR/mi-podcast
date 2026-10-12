import Image from "next/image";
import Link from "next/link";
import EpisodePlayer from "@/components/EpisodePlayer";
import type { Episode } from "@/data/episode-types";

type Props = {
  episode: Episode;
};

export default function FeaturedEpisode({ episode }: Props) {
  return (
    <article className="featured card" aria-labelledby="featured-title">
      <div className="featured__art">
        <Image
          src={episode.artwork}
          alt={`Artwork for episode ${episode.number}: ${episode.title}`}
          width={600}
          height={600}
          priority
        />
      </div>
      <div className="featured__body">
        <p className="eyebrow">
          Featured · Episode {episode.number} · {episode.duration}
        </p>
        <h2 id="featured-title">{episode.title}</h2>
        <p className="muted featured__meta">
          Published{" "}
          <time dateTime={episode.publishDate}>{episode.publishDate}</time>
        </p>
        <p>{episode.shortDescription}</p>
        <p className="featured__desc muted">{episode.longDescription}</p>
        <div className="featured__player">
          <EpisodePlayer src={episode.audioSrc} title={episode.title} />
        </div>
        <p>
          <Link href="/episodes" className="btn btn--ghost">
            Browse all 20 episodes
          </Link>
        </p>
      </div>
    </article>
  );
}
