import React from 'react';

// Covers:
//   - axe `label` / jsx-a11y/label-has-associated-control (3.3.2, 4.1.2)
//   - axe `select-name` (4.1.2)
//   - jsx-a11y/autocomplete-valid (1.3.5)
//   - jsx-a11y/no-onchange (3.2.2)
export function FormsSection() {
  return (
    <section aria-labelledby="forms-heading">
      <h2 id="forms-heading">Forms</h2>

      <form onSubmit={(e) => e.preventDefault()}>
        {/* Unlabeled input — axe label + 3.3.2 */}
        <input type="text" />

        {/* Orphan label — jsx-a11y/label-has-associated-control */}
        <label>Email address</label>

        {/* Label without `htmlFor` and without nested control */}
        <label>
          Password
        </label>
        <input type="password" />

        {/* Wrong autocomplete — jsx-a11y/autocomplete-valid (1.3.5) */}
        <label htmlFor="cc">Credit card</label>
        <input id="cc" type="text" autoComplete="not-a-real-token" />

        {/* Select with no accessible name — axe select-name */}
        <select onChange={() => {}}>
          <option value="one">One</option>
          <option value="two">Two</option>
        </select>

        {/* Onchange without onblur — jsx-a11y/no-onchange (3.2.2)
            Note: this rule is deprecated upstream but still in many configs. */}
        <select aria-label="Country" onChange={() => {}}>
          <option value="us">United States</option>
          <option value="ca">Canada</option>
        </select>

        {/* No-button submit — uses input but missing visible label */}
        <input type="submit" value="" />

        {/* Required field with no error/instructions */}
        <label htmlFor="zip">Zip</label>
        <input id="zip" type="text" required />
      </form>
    </section>
  );
}
