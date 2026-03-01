# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm run dev` — Start dev server (binds to 0.0.0.0)
- `npm run build` — Production build
- `npm run lint` — ESLint via next lint
- `npm run prettier` — Format all files with Prettier

No test framework is configured.

## Architecture

Next.js 16 App Router personal website using React 19, Chakra UI v3 (`defaultSystem`), and Framer Motion for animations.

**Routing:** Uses the `app/` directory. Pages are at `app/page.tsx` (home), `app/work/page.tsx`, `app/posts/page.tsx`, `app/projects/page.tsx`. The work/posts/projects routes are placeholder pages; their nav links in `Header.tsx` are currently commented out.

**Layout:** `app/layout.tsx` is the root layout (server component). It wraps children in `Providers` (Chakra) and renders the `Header`. All page components and UI components are client components (`'use client'`).

**Component pattern:** Components live in `app/components/`. Each is a self-contained client component that accepts typed props and wraps Chakra primitives with `motion()` for entrance animations. Data (bio events, social links, interests) is defined as constants in `app/page.tsx` and passed as props.

**Styling:** Chakra UI responsive syntax (`{ base: ..., md: ... }`) throughout. No custom theme — uses `defaultSystem`. No CSS files.

**Static assets:** Served from `public/images/`.

## Key Dependencies

- `@chakra-ui/react` v3 — Component library (uses `defaultSystem`, not `extendTheme`)
- `framer-motion` — Animations; components use `motion(ChakraComponent)` pattern
- `react-icons` — Icon library (Fa, Hi icon sets)
