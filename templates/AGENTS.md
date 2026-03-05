# AGENTS.md

<!-- DIP TEMPLATE — AGENTS.md
     This is the entry point for AI coding agents working on your project.
     It tells the agent what protocol to follow, where to find the active work,
     and how to navigate the project. Update this file every time the active
     milestone or phase changes.
-->

This project follows the **DIP — Deep Implementation Protocol**.

## Active Milestone

<!-- UPDATE: Replace with your current milestone name and path -->
- **Current milestone**: `docs/milestones/milestone-1/`
- **Current phase**: phase-1

## Before Starting Any Work

1. Read the active milestone's `milestone.md` to understand the overall goal
2. Read `implementation-phases.md` to identify the current phase and its status
3. Read **all** PRDs in the active phase's directory (`phases/phase-N/`)
4. Check reports from previous phases in `reports/` for context on what was already built
5. Review active URA items (Unknowns, Risks, Assumptions) in milestone, phase plan, and PRDs
6. Only work on PRDs with status `pending` or `in-progress`

## Protocol Flow

```
Refinement → Milestone → Phases → PRDs → Implementation → Report → Next Phase
```

A phase is complete when **all PRDs** within it have status `completed`. After completing a phase:
1. Generate a report in `reports/report-phase-N.md`
2. Update `implementation-phases.md` to mark the phase as completed
3. Update this file to point to the next phase

## URA Operating Rules

`URA = Unknowns, Risks, Assumptions`

1. Update PRD status to `in-progress` when starting implementation
2. Keep PRD URA entries current while implementing
3. If a risk materializes, record it as an issue in phase tracking/report
4. If a critical assumption is invalidated, stop and re-plan before continuing
5. Do not close a phase with unresolved high-impact risk unless explicitly accepted

## Setup Commands

<!-- UPDATE: Replace with your project's actual commands -->
```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run test         # Run tests
npm run lint         # Run linter
npm run build        # Build for production
```

## Project Structure

<!-- UPDATE: Replace with your project's actual structure -->
```
project/
├── AGENTS.md                              # This file
├── .cursor/rules/                         # DIP protocol rules
├── docs/milestones/                       # All milestones
│   └── milestone-1/
│       ├── milestone.md                   # Milestone definition
│       ├── implementation-phases.md       # Phase breakdown + status
│       ├── phases/                        # PRDs per phase
│       └── reports/                       # Phase completion reports
└── src/                                   # Source code
```

## Code Style

<!-- UPDATE: Replace with your project's code style conventions -->
- TypeScript strict mode
- Use functional patterns where possible
- Write tests for new functionality

## Git Conventions

- Do not run destructive git operations (force push, hard reset)
- Do not commit .env files or secrets
- Keep commits focused on a single logical change
