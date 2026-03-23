# DIP — Deep Implementation Protocol

A structured, document-driven protocol for agentic software development,
designed for medium-to-high complexity projects.

DIP bridges the gap between product vision and AI-assisted implementation by organizing work into **milestones**, **phases**, and **PRDs** while making **unknowns, risks, and assumptions** explicit — giving coding agents the context they need to build with precision.

[View Landing Page](https://baltazarparra.github.io/DIP) · [Get Started](#getting-started) · [Templates](./templates)

---

## Why DIP?

AI coding agents are powerful, but they struggle without structure. Throwing an entire epic at an agent produces inconsistent results. DIP solves this by breaking complex work into well-scoped, document-driven units that agents can execute reliably.

**DIP is not a tool.** It's a protocol — a set of conventions and document templates that any team can adopt, regardless of which AI coding agent they use.

### The Problem

- Agents lack context about the bigger picture
- Large features get implemented inconsistently
- There's no structured handoff between planning and execution
- Phase transitions lose context without documentation
- Hidden assumptions and unresolved unknowns become late surprises

### The Solution

DIP provides a repeatable loop:

```
Refinement → Milestone → Phases → PRDs → Implementation → Report → Next Phase
```

Each step produces a document that feeds into the next, creating a chain of context that keeps both humans and agents aligned.
At every step, DIP tracks **URA** (`Unknowns, Risks, Assumptions`) to reduce avoidable surprises.

---

## The Protocol

### 1. Refinement Meeting

The entire team (Design, Product, Business, Technology) defines a milestone/epic together. This cross-functional alignment ensures the milestone captures all perspectives before any code is written.

### 2. Milestone Document

The team produces a `milestone.md` — a comprehensive definition of the epic, including goals, scope, success criteria, constraints, and a milestone-level URA baseline.

### 3. Implementation Phases

The development team breaks the milestone into coherent phases in `implementation-phases.md`. Each phase is a logical grouping of work that can be completed and validated independently, with URA snapshots and exit gates.

### 4. PRDs (Product Requirements Documents)

Each phase is broken down into individual PRDs — self-contained documents that function like detailed Jira cards. A PRD contains everything a coding agent needs to implement that specific piece: description, acceptance criteria, non-functional requirements, URA, and technical considerations.

### 5. Implementation

The agent (or developer) picks up PRDs from the active phase and implements them one by one, marking each as completed while validating assumptions, reducing unknowns, and monitoring risk triggers.

### 6. Phase Report

When all PRDs in a phase are completed, a `report-phase-N.md` is generated summarizing what was built, deviations from the plan, URA outcomes, and context needed for the next phase.

### 7. Loop

The cycle repeats for each phase until the milestone is complete, carrying forward unresolved URA items with explicit ownership.

---

## Folder Structure

```
project/
├── AGENTS.md
├── .cursor/
│   └── rules/
│       ├── dip-protocol.mdc
│       ├── prd-writing.mdc
│       ├── report-writing.mdc
│       └── milestone-writing.mdc
└── docs/
    └── milestones/
        └── milestone-1/
            ├── milestone.md
            ├── implementation-phases.md
            ├── phases/
            │   ├── phase-1/
            │   │   ├── prd-user-auth.md
            │   │   └── prd-database-schema.md
            │   └── phase-2/
            │       └── prd-api-endpoints.md
            └── reports/
                ├── report-phase-1.md
                └── report-phase-2.md
```

---

## Agent Artifacts

DIP integrates with AI coding agent artifacts to create a complete workflow:

| Artifact | Role | Purpose |
|----------|------|---------|
| **AGENTS.md** | The Map | Entry point for agents — points to the active milestone and phase |
| **Cursor Rules** | The Guardrails | Automatic contextual guidance for document formatting, protocol compliance, and URA discipline |
| **Skills** | The Tools | Repeatable actions for scaffolding milestones, phases, and reports |

---

## Managing Unknowns, Risks, and Assumptions (URA)

DIP uses a lightweight URA model to make uncertainty explicit and actionable:

- **Unknowns**: open questions that require discovery before commitment
- **Assumptions**: beliefs currently treated as true and needing validation
- **Risks**: potential events that can impact outcomes (tracked with `If..., then...` statements)

When a risk materializes, it becomes an issue and is reported. When a critical assumption fails, the team re-plans before continuing.

---

## PRD Template

Each PRD is a self-contained unit of work:

```markdown
---
title: User Authentication Flow
status: pending
priority: high
complexity: medium
phase: phase-1
milestone: milestone-1
---

# User Authentication Flow

## Description
Brief description of what needs to be built.

## Acceptance Criteria
- [ ] User can sign up with email and password
- [ ] User can log in with existing credentials
- [ ] Session persists across page refreshes

## Non-Functional Requirements
- Response time < 200ms for auth endpoints
- Passwords hashed with bcrypt (min 12 rounds)

## Unknowns, Risks, and Assumptions (URA)
### Unknowns
- What is the expected peak auth traffic profile?

### Assumptions
- Session storage choice can support projected load

### Risks
- If session storage latency spikes, then login conversion may drop

## Technical Considerations
Architecture decisions, constraints, dependencies.

## Related Files
Files likely to be created or modified.

## Out of Scope
What should NOT be included.
```

---

## Quality Verification

DIP structures how agents build. The **Quality Verification Layer** extends the protocol with risk-tiered acceptance criteria, measurable quality gates, and phase exit criteria — so every DIP step also proves it works. For a full quality governance framework, see [Crivo](https://github.com/priscilanfs28/crivo).

---

## Getting Started

### 1. Add the DIP structure

Create the folder structure in your project:

```bash
mkdir -p docs/milestones/milestone-1/{phases/phase-1,reports}
```

### 2. Copy the templates

Download the [templates](./templates) and place them in your project. Each template includes formatting guidelines, URA structure, and example content.

### 3. Configure your AGENTS.md

Add an `AGENTS.md` to your project root that points to the active milestone and phase. See the [AGENTS.md template](./templates/AGENTS.md) for a starting point.

### 4. Add Cursor Rules (optional)

If you use Cursor, add the [DIP rules](./templates/rules/) to `.cursor/rules/` for automatic guidance when writing protocol documents.

### 5. Run a refinement meeting

Gather your team, define a milestone, set the initial URA baseline, and start the loop.

---

## This Repository

This repo serves a dual purpose:

- **Landing page** — A static site explaining the DIP protocol, hosted on GitHub Pages
- **Templates** — Downloadable document templates that teams can copy into their projects

### Running the landing page locally

```bash
npm install
npm run dev
```

Open your browser at `http://localhost:4321`.

---

## License

MIT — see [LICENSE](./LICENSE).
