# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

## Commands

```bash
pnpm dev      # Start development server
pnpm build    # Production build
pnpm start    # Run production server
pnpm lint     # Run ESLint
```

No test suite is configured.

## Stack

- **Next.js 16** with App Router — breaking changes from older versions; read `node_modules/next/dist/docs/` before writing Next.js-specific code
- **React 19** with Server Components
- **TypeScript 5**, **Tailwind CSS 4**, **Framer Motion 12**
- **shadcn/ui** (style: `radix-nova`) + Radix UI primitives
- Path alias: `@/*` → project root

## Architecture

```
app/
  layout.tsx     # Root layout, fonts (Geist + Inter), metadata
  page.tsx       # Single page: Navbar → Hero → Work → AboutGrid → Footer
  globals.css    # OKLch theme variables, Tailwind imports
components/
  ui/            # Low-level primitives (ImageTrail, ShinyText)
  *.tsx          # Page sections (all "use client")
hooks/
  use-mouse-vector.tsx  # Mouse position & velocity tracking
lib/
  utils.ts       # cn() — clsx + tailwind-merge class merging
```

## Key Patterns

**All interactive components use `"use client"`** — no mixed server/client boundaries in the current component tree.

**Animations** follow Framer Motion variants with `whileInView` + `viewport={{ once: true }}` for scroll-triggered reveals and staggered children. Use these patterns consistently when adding new animated sections.

**Class merging** always goes through `cn()` from `@/lib/utils`. Never concatenate Tailwind classes directly.

**Project data** is hardcoded in `Work.tsx` as a typed array. Tech stack icons are mapped via `TAG_ICONS` using `react-icons` (`Si*` prefix). Add new projects/icons there.

**Image configuration** whitelists `images.unsplash.com` in `next.config.ts` — add any new remote image domains there.
