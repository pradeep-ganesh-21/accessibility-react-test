import React from 'react';

// Covers:
//   - axe `color-contrast` (1.4.3) — at AA. Inline styles guarantee a low ratio
//     so the rule fires deterministically (axe sees the computed colors).
export function ColorContrastSection() {
  return (
    <section aria-labelledby="contrast-heading">
      <h2 id="contrast-heading">Color contrast</h2>

      {/* Light grey on light grey — well below 4.5:1 */}
      <p style={{ color: '#bbbbbb', backgroundColor: '#cccccc' }}>
        This paragraph has a contrast ratio of about 1.4:1 against its
        background — well below the 4.5:1 minimum required by WCAG 1.4.3.
      </p>

      {/* Yellow on white — common low-contrast trap */}
      <p style={{ color: '#f5d76e', backgroundColor: '#ffffff' }}>
        Yellow text on a white background.
      </p>

      {/* Button with low contrast */}
      <button
        style={{ color: '#7a7a7a', backgroundColor: '#888888', border: 'none', padding: '8px 16px' }}
        onClick={() => {}}
      >
        Low contrast button
      </button>
    </section>
  );
}
