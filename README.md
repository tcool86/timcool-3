# timcool.me

Personal portfolio site for Tim Cool.

## Stack

- **Astro 5** (static output, React islands)
- **React 19** + **TypeScript 5**
- **Tailwind CSS v4**
- **motion** v12 (the successor to `framer-motion`)
- **valtio** for shared client state
- **Vitest** + **@testing-library/react** for unit tests
- **Playwright** for E2E smoke
- **ESLint 9** flat config + **Prettier 3**
- **pnpm** (Node 22)
- **Render** for hosting (Static Site service serving `dist/`)

## Project structure

```
src/
  pages/index.astro          Entry page; composes layout + sections
  layouts/BaseLayout.astro   <html>, <meta>, favicon, global CSS
  components/
    astro/                   Zero-JS static pieces
      Section.astro          Wrapper with IntersectionObserver-based reveal
      About.astro
      Projects.astro
      Archive.astro
      Contact.astro          Wraps the ContactForm island
      Footer.astro
      SocialLinks.astro
      Card.astro
    react/                   Interactive islands (motion / valtio)
      Landing.tsx            client:load
      Header.tsx             client:idle  (reads valtio store)
      MobileHeader.tsx       client:idle
      Menu.tsx
      MenuItem.tsx
      MenuToggle.tsx
      ExperienceTabs.tsx     client:visible
      ContactForm.tsx        client:visible
      Input.tsx
      Arrow.tsx
      SessionPing.tsx        client:idle  (best-effort GET /session)
      Icons.tsx
  state/portfolio.ts         valtio proxy + setSection / usePortfolio
  lib/api.ts                 baseAPI constant
  data/experiences.json
  styles/global.css          Design tokens + component CSS + Tailwind
  test/                      Vitest specs + setup
e2e/                         Playwright specs
public/                      Static assets (favicon, fonts, robots.txt)
```

## Development

```bash
nvm use          # Node 22
pnpm install
pnpm dev         # local dev server at http://localhost:4321
```

## Scripts

| Script             | Purpose                                     |
| ------------------ | ------------------------------------------- |
| `pnpm dev`         | Astro dev server                            |
| `pnpm build`       | Static build into `dist/`                   |
| `pnpm preview`     | Serve the built site                        |
| `pnpm start`       | Same as `preview`, binds `0.0.0.0:$PORT`    |
| `pnpm typecheck`   | `astro check`                               |
| `pnpm lint`        | ESLint over the whole repo                  |
| `pnpm lint:fix`    | ESLint with `--fix`                         |
| `pnpm format`      | Prettier write                              |
| `pnpm test`        | Vitest (single run)                         |
| `pnpm test:watch`  | Vitest in watch mode                        |
| `pnpm test:e2e`    | Playwright (builds + serves automatically)  |

## CI

GitHub Actions (`.github/workflows/ci.yml`) runs typecheck, lint, unit tests,
and build on every push and PR.

## Deployment (Render)

Render reads [`render.yaml`](./render.yaml) at the repo root and provisions a
**Static Site** service:

- Build command: `corepack enable && pnpm install --frozen-lockfile && pnpm build`
- Publish directory: `./dist`
- Node 22 (set via `NODE_VERSION` env var; matches `.nvmrc`)
- PR previews enabled
- Long-cache headers for `/fonts/*` and `/_astro/*` (fingerprinted assets)
- Single-page rewrite (`/* → /index.html`) for client-side routing

To deploy: connect this repo in the Render dashboard once; subsequent pushes
to `main` deploy automatically. Pull requests get ephemeral preview URLs.

The `pnpm start` script (`astro preview --host 0.0.0.0 --port $PORT`) is kept
for local production smoke tests and as a fallback if you ever switch to a
Render **Web Service** instead of a Static Site.
