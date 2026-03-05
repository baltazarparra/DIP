# AGENTS.md

This project is the **DIP — Deep Implementation Protocol** repository, which contains:

1. A static landing page (Astro + Tailwind CSS) deployed to GitHub Pages
2. Downloadable document templates for teams adopting the DIP protocol

## Project Overview

DIP is a structured, document-driven protocol for agentic software development. It organizes complex projects into milestones, phases, and PRDs (Product Requirements Documents), giving AI coding agents the context they need to implement features reliably.
DIP also requires explicit management of URA (Unknowns, Risks, Assumptions) across milestone, phase, PRD, and report documents.

This repository itself follows the DIP protocol.

## Active Milestone

- **Current milestone**: See `docs/milestones/` for the active milestone directory
- **Current phase**: Check `implementation-phases.md` inside the active milestone for phase status

Before starting any work, always:
1. Read the active milestone's `milestone.md` to understand the goal
2. Read `implementation-phases.md` to identify the current phase
3. Read all PRDs in the active phase's directory
4. Check reports from previous phases for context
5. Review active URA items (Unknowns, Risks, Assumptions)

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

```
DIP/
├── src/                    # Landing page source code (Astro)
│   ├── layouts/            # Page layouts
│   ├── components/         # UI components (.astro)
│   ├── pages/              # Route pages
│   └── styles/             # Global styles
├── templates/              # DIP protocol templates (downloadable)
│   ├── AGENTS.md           # AGENTS.md template for adopters
│   ├── milestone.md        # Milestone document template
│   ├── implementation-phases.md
│   ├── prd-template.md     # PRD template
│   └── report-template.md  # Phase report template
├── docs/                   # This project's own DIP docs
│   └── milestones/         # Milestone directories
├── AGENTS.md               # This file
├── README.md               # Human-facing README
├── astro.config.mjs        # Astro configuration
└── package.json            # Dependencies
```

## Code Style

- TypeScript strict mode
- Use Astro components (`.astro`) for all UI — no React/Vue unless interactivity requires it
- Tailwind CSS for styling — no custom CSS unless Tailwind cannot achieve the design
- Semantic HTML elements over generic divs
- All user-facing content must be in English

## DIP Protocol Rules

This project follows the DIP protocol. When working on implementation:

- Never skip reading the active phase's PRDs before starting work
- Mark PRD status as `in-progress` when you begin and `completed` when done
- Keep URA entries current and escalate invalidated critical assumptions
- After completing all PRDs in a phase, generate a phase report before moving to the next phase
- Update `implementation-phases.md` to reflect phase completion status
- Do not modify documents from completed phases unless explicitly asked

## Testing & Validation

```bash
npm run build        # Verify the site builds without errors
```

Ensure all links in the landing page resolve correctly and all template files are valid markdown.

## Git Conventions

- Do not run `git push --force` or any destructive git operations
- Do not commit `.env` files or any secrets
- Keep commits focused on a single logical change
