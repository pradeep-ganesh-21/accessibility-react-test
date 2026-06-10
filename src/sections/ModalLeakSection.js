import React from 'react';

// Runtime keyboard scanner — Point 3 (modal-focus-leak).
// Two always-open dialog regions, neither of which traps focus, so Tab walks
// straight through them and out into surrounding content. The scanner sees
// focus leaving the dialog subtree while the dialog is still open.
//
// - aria-modal="true"  → blocker (modality declared, focus leak defeats it)
// - bare role="dialog" → review  (modality not declared)
export function ModalLeakSection() {
  return (
    <section aria-labelledby="modal-leak-heading">
      <h2 id="modal-leak-heading">Modal focus leak</h2>

      {/* Blocker: aria-modal=true with no focus trap */}
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Always-open leaky dialog (blocker)"
        style={{
          border: '2px solid #c0392b',
          padding: '12px',
          margin: '8px 0',
        }}
      >
        <input
          type="text"
          aria-label="Dialog input (blocker)"
          defaultValue="modal field"
        />
        <button onClick={() => {}}>Modal OK (blocker)</button>
      </div>

      {/* Review: bare role=dialog */}
      <div
        role="dialog"
        aria-label="Always-open inline panel (review)"
        style={{
          border: '2px solid #d35400',
          padding: '12px',
          margin: '8px 0',
        }}
      >
        <input
          type="text"
          aria-label="Dialog input (review)"
          defaultValue="panel field"
        />
        <button onClick={() => {}}>Panel OK (review)</button>
      </div>

      <button onClick={() => {}}>Spacer button after dialogs</button>
    </section>
  );
}
