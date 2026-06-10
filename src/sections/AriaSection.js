import React from 'react';

// Covers:
//   - axe `aria-roles` / jsx-a11y/aria-role (4.1.2) — invalid role
//   - axe `aria-valid-attr` / jsx-a11y/aria-props (4.1.2) — invalid prop
//   - axe `aria-valid-attr-value` / jsx-a11y/aria-proptypes (4.1.2) — invalid prop value
//   - axe `aria-hidden-focus` / jsx-a11y/no-aria-hidden-on-focusable (4.1.2)
//   - axe `role-has-required-aria-props` / jsx-a11y/role-has-required-aria-props (4.1.2)
//   - jsx-a11y/role-supports-aria-props (4.1.2) — input with role=alert
//   - jsx-a11y/no-distracting-elements (2.2.2) — <marquee> / <blink>
//   - jsx-a11y/no-access-key (2.1.1)
//   - jsx-a11y/no-noninteractive-element-to-interactive-role (4.1.2)
//   - jsx-a11y/no-interactive-element-to-noninteractive-role (4.1.2)
//   - jsx-a11y/aria-unsupported-elements (4.1.2)
//   - jsx-a11y/scope (1.3.1) — scope on non-th
//   - jsx-a11y/aria-activedescendant-has-tabindex (4.1.2)
export function AriaSection() {
  return (
    <section aria-labelledby="aria-heading">
      <h2 id="aria-heading">ARIA</h2>

      {/* Invalid role — jsx-a11y/aria-role + axe aria-roles */}
      <div role="banana">Element with invalid role</div>

      {/* Invalid ARIA prop — jsx-a11y/aria-props */}
      <button aria-labeledby="x" onClick={() => {}}>Misspelled aria-labelledby</button>

      {/* Invalid ARIA value — jsx-a11y/aria-proptypes */}
      <button aria-pressed="maybe" onClick={() => {}}>Bad aria-pressed value</button>

      {/* Focusable element with aria-hidden — axe aria-hidden-focus */}
      <button aria-hidden="true" onClick={() => {}}>Hidden but focusable</button>

      {/* role=checkbox without aria-checked — required-aria-props */}
      <span role="checkbox" tabIndex={0}>Custom checkbox without aria-checked</span>

      {/* role=alert on input — input doesn't support alert role properly */}
      <input role="alert" aria-label="Search" type="text" />

      {/* Distracting element — jsx-a11y/no-distracting-elements */}
      <marquee>This text is scrolling and is distracting</marquee>

      {/* accessKey — jsx-a11y/no-access-key */}
      <a href="/foo" accessKey="a">Link with accessKey</a>

      {/* button → role="link" — jsx-a11y/no-interactive-element-to-noninteractive-role */}
      <button role="presentation" onClick={() => {}}>I look like a button but say presentation</button>

      {/* div → role=button without keyboard — separately covered in ClickHandlerSection */}
      <div role="button">Static div with role=button (no tabIndex, no key handler)</div>

      {/* aria-unsupported-elements — meta with aria-* */}
      <meta itemProp="version" aria-hidden="true" />

      {/* aria-activedescendant without tabIndex */}
      <div role="combobox" aria-activedescendant="opt1" aria-expanded="false" aria-controls="lb">
        <ul id="lb" role="listbox">
          <li id="opt1" role="option">Option 1</li>
        </ul>
      </div>

      {/* scope on a non-th — jsx-a11y/scope */}
      <div scope="row">Wrong scope usage</div>
    </section>
  );
}
