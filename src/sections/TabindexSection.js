import React from 'react';

// Covers:
//   - axe `tabindex` (best-practice; mapped to 4.1.2) — positive tabindex
//   - jsx-a11y/tabindex-no-positive (2.4.3)
//   - jsx-a11y/no-noninteractive-tabindex (4.1.2)
//   - axe `no-autofocus` / jsx-a11y/no-autofocus (2.4.3)
//   - axe `scrollable-region-focusable` (2.1.1)
export function TabindexSection() {
  return (
    <section aria-labelledby="tabindex-heading">
      <h2 id="tabindex-heading">Tabindex / autofocus / scrollable regions</h2>

      {/* Positive tabindex — axe tabindex + jsx-a11y/tabindex-no-positive */}
      <button tabIndex={3} onClick={() => {}}>Positive tabindex (3)</button>
      <button tabIndex={1} onClick={() => {}}>Positive tabindex (1)</button>

      {/* tabIndex on a non-interactive element — jsx-a11y/no-noninteractive-tabindex */}
      <div tabIndex={0}>Non-interactive div with tabindex=0</div>

      {/* autofocus — axe no-autofocus + jsx-a11y/no-autofocus */}
      <input type="text" aria-label="Auto-focused" autoFocus />

      {/* Scrollable region without keyboard access — axe scrollable-region-focusable
          (2.1.1) — flagged because the region scrolls but isn't tabbable. */}
      <div
        style={{
          overflow: 'auto',
          height: '90px',
          width: '300px',
          border: '1px solid #888',
          padding: '8px',
        }}
      >
        <p>Line 1</p>
        <p>Line 2</p>
        <p>Line 3</p>
        <p>Line 4</p>
        <p>Line 5</p>
        <p>Line 6</p>
        <p>Line 7</p>
        <p>Line 8</p>
        <p>Line 9</p>
        <p>Line 10</p>
      </div>
    </section>
  );
}
