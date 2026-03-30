# AGENTS.md

This project is the **Milestone** repository, which contains:

1. A static landing page (Astro + Tailwind CSS) deployed to GitHub Pages
2. Downloadable document templates for teams adopting the Milestone workflow

## Project Overview

Milestone is a structured, document-driven workflow for agentic software development. It organizes complex projects into milestone documents, phases, and PRDs (Product Requirements Documents), giving AI coding agents the context they need to implement features reliably.
Milestone also requires explicit management of URA (Unknowns, Risks, Assumptions) across milestone, phase, PRD, and report documents.

This repository hosts the public website and the downloadable templates for that workflow.

## Repository Scope

- This repository does not currently keep active implementation artifacts under `docs/milestones/`
- Unless the user explicitly asks to add workflow documents, treat `src/`, `templates/`, `public/`, and the root config files as the active scope
- When editing the website, keep EN and pt-BR content synchronized
- When editing templates, keep README examples and rule names in sync

## Setup Commands

```bash
npm install          # Install dependencies
npm run dev          # Start dev server at localhost:4321
npm run build        # Build for production
npm run preview      # Preview production build locally
```

## Tech Stack

- **Astro** — Static site generator
- **Tailwind CSS** — Utility-first styling
- **GitHub Pages** — Hosting (deployed via GitHub Actions)

## Project Structure

```text
milestone/
├── src/                    # Landing page source code (Astro)
│   ├── layouts/            # Page layouts
│   ├── components/         # UI components (.astro)
│   ├── pages/              # Route pages
│   └── styles/             # Global styles
├── templates/              # Milestone workflow templates (downloadable)
│   ├── AGENTS.md           # AGENTS.md template for adopters
│   ├── milestone.md        # Milestone document template
│   ├── implementation-phases.md
│   ├── prd-template.md     # PRD template
│   ├── report-template.md  # Phase report template
│   └── rules/              # Editor rules for the workflow
├── public/                 # Static assets
├── AGENTS.md               # This file
├── README.md               # Human-facing README
├── astro.config.mjs        # Astro configuration
└── package.json            # Dependencies
```

## Code Style

- TypeScript strict mode
- Use Astro components (`.astro`) for all UI; no React/Vue unless interactivity requires it
- Tailwind CSS for styling; no custom CSS unless Tailwind cannot achieve the design
- Semantic HTML elements over generic divs
- Keep branding consistent as `Milestone` with `M` as the compact brand mark
- Keep both `src/content/en.js` and `src/content/pt.js` in sync

## Workflow Notes

- If this repository later gains `docs/milestones/`, follow the Milestone workflow end to end
- Keep URA terminology and template structure consistent across AGENTS, rules, milestone, phase, PRD, and report documents
- Do not modify completed workflow documents unless explicitly asked

## Testing & Validation

```bash
npm run build        # Verify the site builds without errors
```

Ensure all landing-page links resolve correctly and all template files remain valid markdown.

## Git Conventions

- Do not run `git push --force` or any destructive git operations
- Do not commit `.env` files or any secrets
- Keep commits focused on a single logical change
