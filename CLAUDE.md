# CLAUDE.md — Sadowski Portfolio

This file provides context for AI assistants working on this codebase.

## Project Overview

A static HTML/CSS/JavaScript portfolio website for a Product Manager. No build system, no package manager, no backend. Deployed as-is from the file system.

## Repository Structure

```
Sadowski/
├── index.html                  # Main portfolio page (single page)
├── assets/
│   └── icons/
│       └── favicon.svg
├── css/
│   ├── reset.css               # Modern CSS reset (normalize baseline)
│   ├── tokens.css              # Design tokens (all CSS custom properties)
│   ├── main.css                # Component and layout styles
│   └── case-study.css          # Styles specific to case study subpages
├── js/
│   └── main.js                 # Vanilla JS (nav toggle, scroll effects, year)
└── sections/
    └── case-study-template.html # Template for individual case study pages
```

## Development Workflow

### Running Locally

No build step required. Serve statically:

```bash
python -m http.server 8000
# or
npx serve .
```

Then open `http://localhost:8000` in a browser.

### No Build, No Tests, No Linting

There are no npm scripts, CI/CD pipelines, Makefiles, or test suites. Changes are made directly to source files.

### Git Branches

- `main` — production branch
- Feature branches follow the pattern `claude/<description>-<id>`

## CSS Architecture

### File Load Order (in `<head>`)

1. `reset.css` — clears browser defaults
2. `tokens.css` — defines all CSS custom properties
3. `main.css` (or `case-study.css`) — consumes tokens, defines components

### Design Tokens (`tokens.css`)

All values are CSS custom properties. Never hardcode colors, spacing, or type sizes — always reference a token.

**Colors:**
```css
--color-bg: #ffffff
--color-surface: #f5f5f5
--color-border: #e0e0e0
--color-text: #111111
--color-text-muted: #666666
--color-accent: #5b53e8       /* primary purple */
--color-accent-hover: #4740cc
```

**Spacing scale** (`--space-1` = 0.25rem through `--space-24` = 6rem):
```css
--space-1: 0.25rem
--space-2: 0.5rem
--space-3: 0.75rem
--space-4: 1rem
--space-6: 1.5rem
--space-8: 2rem
--space-12: 3rem
--space-16: 4rem
--space-24: 6rem
```

**Typography:** System font stack — `system-ui, -apple-system, "Segoe UI", sans-serif`

**Transitions:**
```css
--transition-fast: 150ms ease
--transition-base: 250ms ease
```

### Naming Convention

BEM-style class names:
- Block: `.nav`, `.card`, `.btn`
- Element: `.nav__logo`, `.card__title`
- Modifier: `.btn--primary`, `.btn--ghost`

### Responsive Breakpoints

Mobile-first. Breakpoints in `main.css`:
- `680px` — small tablet / large phone
- `768px` — tablet and above

## HTML Conventions

- Semantic HTML5 elements: `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`
- Heading hierarchy must be preserved (`h1` → `h2` → `h3`)
- Images: always include `alt` text; use `loading="lazy"` for below-fold images
- Accessibility attributes: `aria-label`, `aria-expanded`, `role="list"` where appropriate
- Mobile viewport meta tag is required on every page

## JavaScript Conventions

Vanilla JS only — no frameworks, no modules, no bundler.

Current responsibilities of `main.js`:
- Mobile nav open/close toggle
- Close nav when a nav link is clicked
- Set current year in footer (`<span id="year">`)
- Add `.scrolled` class to `<header>` for shadow effect on scroll

When adding JS:
- Use `querySelector` / `querySelectorAll`
- Attach event listeners via `addEventListener`
- Respect `prefers-reduced-motion` for any animation logic
- Keep the file small and focused — do not add third-party libraries without discussion

## Personalization Placeholders

The template contains `[Your Name]` / `[YN]` placeholders throughout. Before treating the site as production-ready, replace:

| Placeholder | Location |
|---|---|
| `[Your Name]` | `<title>`, nav logo, hero, about, meta description |
| `[YN]` | Nav logo abbreviation |
| `assets/images/avatar.jpg` | Profile photo |
| `assets/resume/resume.pdf` | Downloadable resume |
| Case study card content | Three placeholder cards in `index.html` |
| Contact email / social links | Footer section |

## Adding Case Studies

1. Copy `sections/case-study-template.html` to the project root (e.g., `project-name.html`)
2. Link the stylesheet: `<link rel="stylesheet" href="css/case-study.css">`
3. Replace all template content with actual case study copy
4. Add a card in `index.html` under the case studies section pointing to the new file

## Key Conventions Summary

- **No hardcoded values** — use tokens from `tokens.css`
- **No external dependencies** — keep it dependency-free
- **BEM class naming** for all new CSS
- **Semantic HTML** — choose elements by meaning, not appearance
- **Mobile-first CSS** — base styles target small screens; media queries add complexity upward
- **Minimal JS** — only what is necessary for interactivity; no frameworks
