import React from 'react';

// Covers:
//   - jsx-a11y/click-events-have-key-events (2.1.1)
//   - jsx-a11y/no-static-element-interactions (2.1.1)
//   - jsx-a11y/no-noninteractive-element-interactions (4.1.2)
//   - jsx-a11y/interactive-supports-focus (2.1.1, 4.1.2)
//   - jsx-a11y/mouse-events-have-key-events (2.1.1)
export function ClickHandlerSection() {
  return (
    <section aria-labelledby="click-heading">
      <h2 id="click-heading">Click handlers on non-interactive elements</h2>

      {/* Static element with onClick — click-events-have-key-events + no-static-element-interactions */}
      <div onClick={() => alert('clicked')}>I am a clickable div with no key handler</div>

      {/* span with onClick */}
      <span onClick={() => alert('span clicked')}>Clickable span</span>

      {/* div with role but no tabIndex/keyDown — interactive-supports-focus */}
      <div role="button" onClick={() => {}}>Role=button but not focusable</div>

      {/* mouseOver but no key equivalent — mouse-events-have-key-events */}
      <div onMouseOver={() => {}} onFocus={() => {}}>Hover effect (mouse only)</div>

      {/* h3 with onClick — no-noninteractive-element-interactions */}
      <h3 onClick={() => {}}>Click me, I am a heading</h3>
    </section>
  );
}
