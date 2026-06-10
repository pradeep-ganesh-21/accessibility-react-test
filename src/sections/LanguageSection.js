import React from 'react';

// Covers:
//   - axe `valid-lang` (3.1.2) — invalid language code on an element
//   - jsx-a11y/lang (3.1.1) — invalid lang attribute
//   (axe `html-has-lang` and `html-lang-valid` need <html> and are governed
//    by public/index.html.)
export function LanguageSection() {
  return (
    <section aria-labelledby="lang-heading">
      <h2 id="lang-heading">Language tags</h2>

      <p lang="zz-not-real">
        This paragraph has lang="zz-not-real", which is not a valid BCP-47
        language tag.
      </p>

      <p lang="">
        This paragraph has an empty lang attribute.
      </p>
    </section>
  );
}
