import React from 'react';

// Covers:
//   - axe `button-name` (4.1.2) — empty button
//   - jsx-a11y/control-has-associated-label (1.3.1, 3.3.2, 4.1.2)
//   - jsx-a11y/no-redundant-roles (4.1.2) — <button role="button">
export function ButtonsSection() {
  return (
    <section aria-labelledby="buttons-heading">
      <h2 id="buttons-heading">Buttons</h2>

      {/* Empty button — axe button-name */}
      <button onClick={() => {}}></button>

      {/* Icon-only button with no accessible name */}
      <button onClick={() => {}}>
        <span aria-hidden="true">x</span>
      </button>

      {/* Redundant role — jsx-a11y/no-redundant-roles */}
      <button role="button" onClick={() => {}}>Redundant role</button>
    </section>
  );
}
