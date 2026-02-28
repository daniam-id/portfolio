# Portfolio Website

Personal portfolio website built with Astro 5 and Tailwind CSS, focused on fast static delivery, accessible navigation, and animated section reveals.

## Quick Start

```bash
npm install
npm run dev
```

Development server runs on `http://localhost:4321`.

## Available Scripts

```bash
npm run dev          # Start local development server
npm run lint         # Run ESLint
npm run lint:astro   # Run Astro checks
npm run validate:nav # Validate site nav anchors
npm run build        # Full pipeline: lint:astro -> validate:nav -> astro build -> test:links
npm run preview      # Preview production build locally
```

## Tech Stack

- **Framework**: [Astro](https://astro.build) 5.x
- **Styling**: [Tailwind CSS](https://tailwindcss.com) 3.x + CSS variables
- **Validation**: `@astrojs/check`, `linkinator`, custom nav validation script
- **Interactivity**: Astro components with inline scripts (no React runtime dependency)

## Features

- Responsive single-page portfolio sections (hero, about, services, projects, tech stack, contact)
- Custom `MotionWrapper` reveal system with dual `IntersectionObserver` strategy
- Mobile dock and desktop navigation with accessibility-focused behavior
- Build-time validation for Astro checks, internal anchors, and broken links

## Project Structure

```text
src/
├── components/sections/    # Page sections (.astro)
├── components/ui/          # Reusable UI components (.astro)
├── config/site.ts          # Site copy and navigation config
├── layouts/Layout.astro    # Base layout and SEO shell
├── pages/index.astro       # Home page composition
└── styles/globals.css      # Global styles and design tokens
scripts/
└── validate-nav.mjs        # Internal anchor consistency check
```

## Customization

- Update content and nav links in `src/config/site.ts`
- Update section composition order in `src/pages/index.astro`
- Add/adjust global design tokens in `src/styles/globals.css`

## Documentation

- [Technical Overview](./docs/technical_overview.md)
- [AI Agent Guide](./AGENTS.md)
- [Change History](./PROGRESS.md)

## Deployment

Any static hosting platform works (for example Vercel, Netlify, or Cloudflare Pages):

1. Run `npm run build`
2. Deploy the generated `dist/` directory

## License

MIT
