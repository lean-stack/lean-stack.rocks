# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```sh
pnpm dev          # Start dev server at localhost:4321
pnpm build        # Type-check (astro check) then build to ./dist/
pnpm preview      # Preview the production build locally
```

Linting and formatting use [Biome](https://biomejs.dev/) (no separate lint script — run via `pnpm biome check .` or the VS Code extension).

There are no tests.

## Architecture

This is a minimal [Astro](https://astro.build) static site (v6) for lean-stack.rocks, currently a single-page teaser. The stack is intentionally lean:

- **Astro** — file-based routing; pages live in `src/pages/`. Each `.astro` file becomes a route.
- **Open Props** — CSS custom-property design tokens (`open-props/style` for variables, `open-props/normalize` for reset). Use `var(--size-*)`, `var(--font-weight-*)`, etc. from Open Props rather than hardcoded values.
- **Global styles** — a single `src/styles.css` imported directly in pages; no CSS modules or scoped styles yet.
- **TypeScript** — `astro/tsconfigs/strictest` preset; no relaxing strictness.
- **Biome** — linter + formatter replacing ESLint/Prettier. Config: 2-space indent, single quotes, semicolons. Import organization is on.
