import React from 'react';

// Covers:
//   - jsx-a11y/media-has-caption (1.2.2)
//   - axe `video-caption` (1.2.2) — when video has no track[kind=captions]
export function MediaSection() {
  return (
    <section aria-labelledby="media-heading">
      <h2 id="media-heading">Media</h2>

      {/* video without <track> — jsx-a11y/media-has-caption + axe video-caption */}
      <video
        controls
        width="320"
        height="180"
        src="https://example.com/video-that-does-not-exist.mp4"
      />

      {/* audio without controls or captions */}
      <audio
        src="https://example.com/audio-that-does-not-exist.mp3"
      />
    </section>
  );
}
