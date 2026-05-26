# Project Guide

## File Organization

This project uses the App Router under `src/app`. Keep root-level files for configuration and dependency management only.

- `src/app`: routes, layouts, route-level loading/error states, and route metadata
- `src/components`: shared, reusable UI that is not tied to one route
- `src/data`: portfolio content, project lists, resume facts, and other mostly static data
- `src/hooks`: reusable client-side React hooks
- `src/lib`: framework-agnostic helpers, formatters, constants, and integrations
- `src/types`: shared TypeScript types
- `public/images`: static image assets referenced from `/images/...`

Prefer colocating route-specific code beside the route in `src/app`, using private folders like `_components` or `_lib` when that code should not be shared globally.

## Import Paths

Use the `@/` alias for source imports:

```ts
import { projects } from "@/data/projects";
import { cn } from "@/lib/cn";
```

The alias maps to `src/*` in `tsconfig.json`.

## Scripts

- `npm run dev`: start the local Next.js dev server
- `npm run lint`: run ESLint
- `npm run lint:fix`: auto-fix lint issues where possible
- `npm run typecheck`: generate Next route types, then run TypeScript without emitting files
- `npm run build`: create a production build
- `npm run check`: run typecheck, lint, and build

Run `npm run check` before deploying or after larger changes.

## Upkeep Notes

- Keep `package-lock.json` committed and use `npm install` for dependency updates.
- Avoid adding dependencies for small helpers; prefer local utilities in `src/lib`.
- Store secrets only in `.env.local`; `.env*` files are ignored by git.
- Use `next/image` for portfolio screenshots and headshots when practical.
- Update page metadata, Open Graph images, sitemap, and robots files before publishing.
- Keep portfolio content in data files first, then render it from components. This makes design changes easier later.
- When changing Next.js behavior, check `node_modules/next/dist/docs/` first because this project uses Next.js 16.
