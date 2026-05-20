'use client';

import { useState } from 'react';

function microlinkUrl(url: string) {
  return `https://api.microlink.io/?url=${encodeURIComponent(
    url,
  )}&screenshot=true&meta=false&embed=screenshot.url`;
}

/**
 * Live project thumbnail. If a liveUrl is given we ask microlink for a
 * fresh screenshot; on any load error we swap to the static Unsplash
 * fallback. Faithful to the original Vite project-card behaviour.
 */
export function ProjectScreenshot({
  liveUrl,
  fallback,
  alt,
  isWip,
}: {
  liveUrl?: string;
  fallback: string;
  alt: string;
  isWip?: boolean;
}) {
  const initial = liveUrl ? microlinkUrl(liveUrl) : fallback;
  const [src, setSrc] = useState(initial);

  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => {
        if (src !== fallback) setSrc(fallback);
      }}
      className={`object-cover w-full h-full group-hover:scale-105 transition-transform duration-700 ease-out ${
        isWip ? 'opacity-30 blur-[1px] grayscale' : ''
      }`}
    />
  );
}
