import React from 'react';

// Covers:
//   - axe `image-alt` / jsx-a11y/alt-text (1.1.1)
//   - axe `input-image-alt` (1.1.1, 4.1.2)
//   - jsx-a11y/img-redundant-alt (1.1.1)
//   - axe `role-img-alt` (1.1.1) for role=img without alt
export function ImagesSection() {
  return (
    <section aria-labelledby="images-heading">
      <h2 id="images-heading">Images</h2>

      {/* Missing alt — axe image-alt + jsx-a11y/alt-text */}
      <img src="https://placehold.co/120x80/cccccc/333333/png?text=NoAlt" />

      {/* Redundant alt — jsx-a11y/img-redundant-alt */}
      <img
        src="https://placehold.co/120x80/cccccc/333333/png?text=Dog"
        alt="image of a dog"
      />

      {/* Empty alt on a meaningful image — jsx-a11y/alt-text edge case;
          axe will pass because alt="" is allowed for decorative images. */}
      <img
        src="https://placehold.co/120x80/cccccc/333333/png?text=Decor"
        alt=""
      />

      {/* input type=image without alt — axe input-image-alt + jsx-a11y/alt-text */}
      <input
        type="image"
        src="https://placehold.co/40x40/333333/ffffff/png?text=Submit"
      />

      {/* role=img without an accessible name — axe role-img-alt */}
      <span role="img" />

      {/* Anchor wrapping an image with no alt — accessible name missing */}
      <a href="/destination">
        <img src="https://placehold.co/80x40/cccccc/333333/png?text=Logo" />
      </a>
    </section>
  );
}
