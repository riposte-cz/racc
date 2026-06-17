# RACC web preview

Static GitHub Pages-ready website for **RACC — Rapid Adaptive Capability Control**.

## How to use in GitHub

1. Create a repository, for example `racc-web`.
2. Copy the contents of this folder into the repository root.
3. Commit and push.
4. In GitHub go to **Settings → Pages**.
5. Set **Source** to `Deploy from a branch`.
6. Select branch `main` and folder `/root`.
7. Save. GitHub will publish the page after a short build.

No build step is required. This is plain HTML, CSS and JavaScript.

## Structure

```text
index.html
css/styles.css
js/main.js
assets/
  hero-racc-dashboard.png
  racc-architecture.png
  ria-assistant.png
  commercial-model.png
  brand-system.png
  logo-racc-mark.png
  logo-riposte.png
.nojekyll
```

## Brand hierarchy

- **RACC** = main product platform
- **RIA** = assistant interface inside RACC
- **Riposte s.r.o.** = company / owner
