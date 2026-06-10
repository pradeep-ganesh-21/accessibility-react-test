import React from 'react';

// Covers:
//   - axe `empty-heading` (2.4.6)
//   - axe `heading-order` (1.3.1, 2.4.6) — skipped levels
//   - jsx-a11y/heading-has-content (2.4.6)
//   - 2.4.10 AAA Section Headings — picked up by AAA semantic agent
export function HeadingsSection() {
  return (
    <section aria-labelledby="headings-heading">
      <h2 id="headings-heading">Headings</h2>

      {/* Empty heading — axe empty-heading + jsx-a11y/heading-has-content */}
      <h3></h3>

      {/* Heading-order skip: h2 → h5 — axe heading-order */}
      <h5>Out-of-order heading (h5 directly after h2)</h5>

      {/* Heading containing only an icon (no accessible content) */}
      <h4 aria-hidden="true">⚠️</h4>

      {/* A long block of body text under no heading at all — surfaces section-headings (AAA 2.4.10) */}
      <p>
        Below this paragraph there is more than three hundred words of
        prose split into multiple paragraphs without any subheading. A
        sighted user scanning the page would have no anchor to navigate
        the content, and a screen-reader user using rotor headings would
        also have no entry point. This is the situation 2.4.10 describes.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
        non placerat tortor. Donec sit amet bibendum massa. Nulla
        vestibulum lacinia eros, in pretium leo dictum non. Aliquam erat
        volutpat. Curabitur lobortis, magna ac luctus efficitur, lectus
        urna gravida velit, eu finibus nisl risus eget odio. Mauris in
        bibendum elit. Aenean elementum, justo at fringilla pretium,
        massa orci posuere lectus, sit amet venenatis eros lectus a urna.
      </p>
      <p>
        Integer porta nisl id sapien finibus, vel iaculis dolor ornare.
        Vivamus a facilisis libero. Phasellus blandit lectus quis lacus
        viverra, sit amet euismod ligula vehicula. Quisque rhoncus eros
        non magna porttitor scelerisque. Vestibulum ante ipsum primis in
        faucibus orci luctus et ultrices posuere cubilia curae; Maecenas
        sit amet quam at lectus suscipit varius.
      </p>
    </section>
  );
}
