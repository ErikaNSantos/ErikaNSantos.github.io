# erikansantos.github.io

[![Deploy to GitHub Pages](https://github.com/ErikaNSantos/ErikaNSantos.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/ErikaNSantos/ErikaNSantos.github.io/actions/workflows/deploy.yml)

Personal portfolio, live at [erikansantos.github.io](https://erikansantos.github.io). Bilingual (PT-BR / EN) single-page application presenting my work in data analytics and process engineering. Fully static: no backend, deployed to GitHub Pages through GitHub Actions.

## Stack

React 19, TypeScript, Vite 7, Tailwind CSS v4, Wouter (routing), Framer Motion (animation), Three.js via react-three-fiber (hero particles) and react-globe.gl (contact page globe).

## Structure

```
client/
  src/
    pages/          Routes: Home, About, Projects, Blog, Contact
    components/     Layout (nav + footer), 3D canvases, shadcn/ui primitives
    contexts/       LanguageContext (PT/EN), ThemeContext
    lib/            translations.ts: every UI string, in both languages
    index.css       Design tokens: the palette is defined once in :root
                    and consumed as Tailwind utilities (bg-primary, text-teal)
.github/workflows/  deploy.yml: build and publish to GitHub Pages on push
patches/            pnpm patch applied to wouter
```

Decisions that shaped the build:

- **Internationalization.** Every visible string lives in `translations.ts`. `LanguageContext` detects the browser language, persists the user's choice, and keeps `<html lang>` in sync. Adding a string in only one language is the failure mode to avoid: the `t()` helper falls back to the key name, which makes the omission visible during review.
- **Performance.** Routes load through `React.lazy`, so the markdown renderer (blog) and the 3D globe (contact) download only when visited. The initial JavaScript payload went from 2.0 MB to 464 kB (150 kB gzip) after route-level code splitting. Project card visuals are inline SVG instead of raster images.
- **Contact form without a backend.** The form posts to Formspree when `VITE_FORMSPREE_ENDPOINT` is defined at build time. Without it, the form opens the visitor's email client with the message pre-filled. Both paths work on static hosting.
- **Design tokens.** Colors exist in one place (`client/src/index.css`, `:root`). Components reference semantic utilities only. Per-card accents on the Projects page use `color-mix()` over CSS variables, so changing the palette is a one-file edit.

## Local development

```bash
pnpm install
pnpm dev          # dev server at localhost:3000
pnpm run check    # TypeScript, no emit
pnpm run build    # production build to dist/public
pnpm preview      # serve the production build locally
```

## Deploy

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds with pnpm and publishes `dist/public` to GitHub Pages. The repository name (`ErikaNSantos.github.io`) and the Vite `base: '/'` setting depend on each other; renaming one requires changing the other.

To enable real form submission, create a form at [formspree.io](https://formspree.io), add `VITE_FORMSPREE_ENDPOINT` as a repository secret, and pass it to the build step in `deploy.yml`:

```yaml
- name: Build
  run: pnpm run build
  env:
    NODE_ENV: production
    VITE_FORMSPREE_ENDPOINT: ${{ secrets.VITE_FORMSPREE_ENDPOINT }}
```

## License

MIT. See [LICENSE](LICENSE).
