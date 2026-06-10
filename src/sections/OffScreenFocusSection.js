import React from 'react';

// Runtime keyboard scanner — Point 1 (focus-offscreen).
// Each element is focusable but visually unreachable, and crucially does NOT
// reveal itself on :focus (so it's not treated as a skip-link).
export function OffScreenFocusSection() {
  return (
    <section aria-labelledby="offscreen-heading">
      <h2 id="offscreen-heading">Off-screen / invisible focus</h2>

      {/* Off-screen anchor — left:-9999px, top:-9999px */}
      <a
        href="https://example.com/deep-page"
        style={{
          position: 'fixed',
          left: '-9999px',
          top: '-9999px',
        }}
      >
        Off-screen link
      </a>

      {/* Fully transparent button — opacity:0 */}
      <button
        onClick={() => {}}
        style={{ opacity: 0 }}
      >
        Transparent button (opacity 0)
      </button>

      {/* Zero-area link — width:0, height:0 */}
      <a
        href="https://example.com/x"
        style={{
          display: 'inline-block',
          width: 0,
          height: 0,
          overflow: 'hidden',
        }}
      >
        Zero-area link
      </a>
    </section>
  );
}
