import React from 'react';
import './missing-focus-indicator.css';

// Runtime keyboard scanner — Point 2 (focus-indicator-missing, AA-only).
// Buttons that have outline:none and no other visual change on :focus or
// :focus-visible. The tier-1 computed-style delta sees no change and the
// tier-2 screenshot pixel-diff confirms zero changed pixels.
export function MissingFocusIndicatorSection() {
  return (
    <section aria-labelledby="indicator-heading">
      <h2 id="indicator-heading">Missing focus indicator</h2>

      <button className="no-indicator" onClick={() => {}}>No indicator 1</button>
      <button className="no-indicator" onClick={() => {}}>No indicator 2</button>
    </section>
  );
}
