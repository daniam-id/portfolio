# Adam Daniam — Portfolio

Personal portfolio website showcasing web development and AI integration work. Built with Astro for zero-JS static delivery, featuring animated section reveals, accessible navigation, and a blog powered by Content Collections.

**Live:** [adamdev.web.id](https://adamdev.web.id)

## What This Does

A single-page portfolio with six content sections (hero, about, services, projects, tech stack, contact) plus a blog. It ships zero client-side framework runtime — all interactivity runs through inline scripts. The design follows a monochrome industrial aesthetic with sharp corners and `border-black/10` separators.

## Tech Stack

| Technology | Role |
|---|---|
| **Astro 5.x** | Static site framework — zero JS by default |
| **Tailwind CSS 3.x** | Utility-first styling with CSS variable tokens |
| **TypeScript** | Type-safe frontmatter and config |
| **Content Collections** | Type-safe Markdown blog content |
| **@astrojs/sitemap** | Automated sitemap generation |

## Getting Started

```bash
git clone https://github.com/daniam-id/portfolio.git
cd portfolio
npm install
npm run dev
```

Dev server runs at `http://localhost:4321`.

## Available Scripts

| Command | Purpose |
|---|---|
| `npm run dev` | Start local dev server |
| `npm run build` | Full pipeline: type check → nav validation → build → link check |
| `npm run lint` | Run ESLint |
| `npm run lint:astro` | Astro type checks |
| `npm run validate:nav` | Verify internal anchor consistency |
| `npm run preview` | Preview production build |

## How It Works

**MotionWrapper** — A custom reveal animation system using dual `IntersectionObserver` strategy (appear + reset) with CSS transitions. Wraps each page section for staggered entrance effects. Includes a no-JS fallback that shows content immediately.

**MobileDock** — Bottom navigation dock for mobile using the ARIA Tablist pattern. Keyboard-navigable with arrow keys, syncs `aria-selected` state, and manages `inert` on background content.

**Navbar** — Fixed header with scroll detection, mobile overlay menu, focus trapping, and `inert`-based background isolation when the menu is open.

**Non-blocking fonts** — Google Fonts loaded via `media="print" + onload` swap pattern with `<noscript>` fallback. CSP tradeoff documented in `Layout.astro`.

**Build validation** — Every `npm run build` runs four checks in sequence: Astro type checking, internal anchor validation (custom `validate-nav.mjs`), static build, and broken link detection via linkinator.

## Project Structure

```
src/
├── components/sections/    # Page sections (About, Services, Projects, etc.)
├── components/ui/          # Reusable UI (Navbar, MobileDock, MotionWrapper, Button)
├── config/site.ts          # Single source of truth for all site content
├── content/blog/           # Markdown blog posts (Content Collections)
├── layouts/Layout.astro    # Base layout with SEO, fonts, JSON-LD
├── pages/
│   ├── index.astro         # Home page composition
│   └── blog/               # Blog listing + dynamic post pages
└── styles/globals.css      # Global styles and design tokens
scripts/
└── validate-nav.mjs        # Internal anchor consistency checker
```

## Documentation

- [Technical Overview](./docs/technical_overview.md) — Architecture, data flow, build pipeline
- [AI Agent Guide](./AGENTS.md) — Context for AI-assisted development
- [Change History](./PROGRESS.md) — All AI-assisted changes tracked

## Future Ideas

- [ ] Add real project content to replace placeholders
- [ ] Dark mode toggle
- [ ] Self-hosted fonts for stricter CSP compliance
- [ ] Blog RSS feed

## License

MIT
