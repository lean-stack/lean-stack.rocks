---
title: Style a parent based on its children with :has()
date: 2026-05-29
tags: [css]
links:
  - label: "MDN: :has()"
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS/:has"
---

`:has()` lets you select an element based on what it contains — the long-missing "parent selector".

```css
/* label that contains a checked checkbox */
label:has(input:checked) {
  font-weight: bold;
}

/* card that contains an img */
.card:has(img) {
  padding: 0;
}
```

Baseline 2024 — available in all modern browsers.
