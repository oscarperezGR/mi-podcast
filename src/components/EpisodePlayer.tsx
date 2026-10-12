"use client";

import { useState } from "react";

type Props = {
  src: string;
  title: string;
};

export default function EpisodePlayer({ src, title }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <p role="status" className="player-unavailable muted">
        Audio unavailable for “{title}”. Please try again later.
      </p>
    );
  }

  return (
    <audio
      controls
      preload="none"
      src={src}
      aria-label={`Play ${title}`}
      className="player"
      onError={() => setFailed(true)}
    />
  );
}
