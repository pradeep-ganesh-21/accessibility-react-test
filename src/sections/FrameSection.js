import React from 'react';

// Covers:
//   - axe `frame-title` / jsx-a11y/iframe-has-title (2.4.1, 4.1.2)
export function FrameSection() {
  return (
    <section aria-labelledby="frame-heading">
      <h2 id="frame-heading">Frames</h2>

      {/* iframe with no title attribute */}
      <iframe
        src="about:blank"
        width="200"
        height="80"
        style={{ border: '1px solid #aaa' }}
      />
    </section>
  );
}
