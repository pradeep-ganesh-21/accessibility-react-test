import React from 'react';

// Covers:
//   - axe `link-name` (4.1.2)
//   - jsx-a11y/anchor-has-content (2.4.4)
//   - jsx-a11y/anchor-is-valid (2.4.4)
//   - jsx-a11y/anchor-ambiguous-text (2.4.4) — "click here", "read more"
//   - 2.4.9 Link Purpose (Link Only) — picked up by AAA semantic agent
export function LinksSection() {
  return (
    <section aria-labelledby="links-heading">
      <h2 id="links-heading">Links</h2>

      {/* Empty link — axe link-name + jsx-a11y/anchor-has-content */}
      <a href="/empty"></a>

      {/* Invalid href patterns — jsx-a11y/anchor-is-valid */}
      <a href="#">click</a>
      <a href="javascript:void(0)">javascript link</a>

      {/* Ambiguous link text — jsx-a11y/anchor-ambiguous-text + 2.4.9 AAA */}
      <a href="/page-a">click here</a>
      <a href="/page-b">read more</a>
      <a href="/page-c">learn more</a>
      <a href="/page-d">here</a>

      {/* Target=_blank without rel=noreferrer — best practice */}
      <a href="https://example.com" target="_blank">
        external site (no rel)
      </a>
    </section>
  );
}
