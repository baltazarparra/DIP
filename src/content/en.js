export default {
  meta: {
    title: 'DIP — Deep Implementation Protocol',
    description:
      'A structured, document-driven protocol for agentic software development. Organize complex projects into milestones, phases, and PRDs for reliable AI-assisted implementation.',
  },
  nav: {
    getStarted: 'Get Started',
    github: 'GitHub',
  },
  hero: {
    badge: 'Open Protocol',
    titleLine1: 'Deep Implementation',
    titleLine2: 'Protocol',
    subtitle:
      'A structured, document-driven protocol for agentic software development. Organize complex projects into milestones, phases, and PRDs — giving AI coding agents the context they need to build with precision.',
    cta: 'Get Started',
    ctaSecondary: 'View on GitHub',
  },
  whyDip: {
    title: 'Why DIP?',
    intro:
      'AI coding agents are powerful, but they struggle without structure. Throwing an entire epic at an agent produces inconsistent results. DIP solves this by breaking complex work into well-scoped, document-driven units that agents can execute reliably.',
    problem: {
      title: 'The Problem',
      items: [
        'Agents lack context about the bigger picture',
        'Large features get implemented inconsistently',
        'No structured handoff between planning and execution',
        'Phase transitions lose context without documentation',
        'Hidden assumptions and unresolved unknowns become late surprises',
      ],
    },
    solution: {
      title: 'The Solution',
      body: 'DIP provides a repeatable loop where each step produces a document that feeds into the next, creating a chain of context that keeps both humans and agents aligned, including continuous URA tracking.',
      flowSteps: ['Refinement', 'Milestone', 'Phases', 'PRDs', 'Implementation', 'Report', 'Loop'],
    },
  },
  protocol: {
    title: 'The Protocol',
    intro:
      'Seven steps that transform a product vision into structured, agent-executable units of work while keeping uncertainty explicit.',
    folderStructureLabel: 'Folder Structure',
    folderStructureCode: 'project structure',
    steps: [
      {
        number: '01',
        title: 'Refinement Meeting',
        description:
          'The entire team — Design, Product, Business, Technology — defines a milestone together. Cross-functional alignment ensures the milestone captures all perspectives before any code is written.',
      },
      {
        number: '02',
        title: 'Milestone Document',
        description:
          'The team produces a milestone.md — a comprehensive definition of the epic, including goals, scope, success criteria, constraints, and a URA baseline (Unknowns, Risks, Assumptions).',
      },
      {
        number: '03',
        title: 'Implementation Phases',
        description:
          'The development team breaks the milestone into coherent phases in implementation-phases.md. Each phase is a logical grouping of work that can be completed and validated independently, with a URA snapshot and exit gate.',
      },
      {
        number: '04',
        title: 'PRDs',
        description:
          'Each phase is broken down into individual PRDs — self-contained documents that function like detailed Jira cards. A PRD contains everything a coding agent needs: description, acceptance criteria, non-functional requirements, URA, and technical context.',
      },
      {
        number: '05',
        title: 'Implementation',
        description:
          'The agent picks up PRDs from the active phase and implements them one by one, validating assumptions, reducing unknowns, and reacting to risk triggers while meeting acceptance criteria.',
      },
      {
        number: '06',
        title: 'Phase Report',
        description:
          'When all PRDs in a phase are completed, a report is generated summarizing what was built, deviations from the plan, URA outcomes, and context needed for the next phase.',
      },
      {
        number: '07',
        title: 'Loop',
        description:
          'The cycle repeats for each phase until the milestone is complete. Each report anchors the next phase, preserving context across the entire implementation.',
      },
    ],
    folderStructure: `project/
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
                └── report-phase-2.md`,
  },
  artifacts: {
    title: 'Agent Artifacts',
    intro:
      'DIP integrates with AI coding agent artifacts to create a complete workflow. Three layers that complement each other without overlap.',
    items: [
      {
        name: 'AGENTS.md',
        role: 'The Map',
        description:
          'Entry point for AI coding agents. Points to the active milestone and current phase. Agents read this first to understand where the project is and what to work on next.',
        icon: '&#9881;',
        color: 'cyan',
      },
      {
        name: 'Cursor Rules',
        role: 'The Guardrails',
        description:
          'Automatic contextual guidance activated by file patterns. Rules enforce PRD format, report structure, URA discipline, and protocol compliance without the agent needing to be reminded.',
        icon: '&#9670;',
        color: 'amber',
      },
      {
        name: 'Skills',
        role: 'The Tools',
        description:
          'Repeatable actions for scaffolding milestones, creating phase structures, and generating reports. Skills automate the mechanical parts of the protocol, including URA updates.',
        icon: '&#9889;',
        color: 'emerald',
      },
    ],
  },
  prdExample: {
    title: 'What a PRD looks like',
    intro:
      'Each PRD is a self-contained unit of work — like a detailed Jira card in markdown. It contains everything a coding agent needs to implement that specific piece: acceptance criteria, non-functional requirements, URA, technical context, and clear boundaries.',
    fileName: 'prd-user-auth.md',
    prdContent: `---
title: User Authentication Flow
status: pending
priority: high
complexity: medium
phase: phase-1
milestone: milestone-1
---

# User Authentication Flow

## Description
Implement email/password authentication with session
management. Users should be able to sign up, log in,
and maintain sessions across page refreshes.

## Acceptance Criteria
- [ ] User can sign up with email and password
- [ ] User can log in with existing credentials
- [ ] Session persists across page refreshes
- [ ] Error messages displayed for invalid inputs
- [ ] Password reset flow via email

## Non-Functional Requirements
- Response time < 200ms for auth endpoints
- Passwords hashed with bcrypt (min 12 rounds)
- Rate limiting: max 5 failed attempts per minute
- HTTPS required for all auth endpoints

## Unknowns, Risks, and Assumptions (URA)
### Unknowns
| Unknown | Why It Matters | Discovery Action | Decision Deadline | Owner | Status |
|---------|----------------|------------------|-------------------|-------|--------|
| Peak auth load profile | Affects session architecture | Run load test with synthetic traffic | 2026-03-12 | Backend Lead | open |

### Assumptions
| Assumption | Confidence (1-5) | Validation Method | Validation Date | Impact If False | Owner | Status |
|------------|------------------|-------------------|-----------------|-----------------|-------|--------|
| Redis cache can sustain p95 < 30ms | 3 | Benchmark in staging | 2026-03-14 | Platform Engineer | open |

### Risks
| Risk Statement (If..., then...) | Likelihood (1-5) | Impact (1-5) | Response | Trigger | Owner | Status |
|---------------------------------|------------------|--------------|----------|---------|-------|--------|
| If auth DB latency spikes, then login completion may drop | 3 | 4 | reduce | p95 DB latency > 150ms for 10m | Backend Lead | monitoring |

## Technical Considerations
- Use JWT tokens stored in httpOnly cookies
- Refresh token rotation for extended sessions
- Consider OAuth2 integration in a future PRD

## Related Files
- src/auth/handlers.ts
- src/middleware/auth.ts
- src/db/schema/users.ts

## Out of Scope
- Social login (Google, GitHub) — separate PRD
- Two-factor authentication — separate PRD
- Admin role management — phase-2`,
  },
  gettingStarted: {
    title: 'Getting Started',
    intro: 'Adopt DIP in your project in five steps. The protocol works with any tech stack and any AI coding agent.',
    ctaText: 'All templates, rules, and examples are available in the repository.',
    ctaButton: 'View Templates on GitHub',
    steps: [
      {
        number: '1',
        title: 'Add the DIP structure',
        description:
          'Create the folder structure in your project to house milestones, phases, and reports.',
        code: 'mkdir -p docs/milestones/milestone-1/{phases/phase-1,reports}',
      },
      {
        number: '2',
        title: 'Copy the templates',
        description:
          'Download the DIP templates and place them in your project. Each template includes formatting guidelines, URA structure, and inline instructions for AI agents.',
        code: null,
      },
      {
        number: '3',
        title: 'Configure your AGENTS.md',
        description:
          'Add an AGENTS.md to your project root that declares the project follows DIP, points to the active milestone, and identifies the current phase.',
        code: null,
      },
      {
        number: '4',
        title: 'Add Cursor Rules',
        description:
          'Copy the DIP rules to .cursor/rules/ for automatic guidance when writing protocol documents. Rules enforce PRD format, report structure, and protocol compliance.',
        code: 'cp templates/rules/*.mdc .cursor/rules/',
      },
      {
        number: '5',
        title: 'Run a refinement meeting',
        description:
          'Gather your team — Design, Product, Business, Technology. Define a milestone together, set the initial URA baseline, break work into phases, and start the loop.',
        code: null,
      },
    ],
  },
  simplerFlow: {
    title: 'Need a simpler flow?',
    body: 'A practical guide for agentic development.',
    cta: 'Open the guide',
  },
  footer: {
    tagline: 'Deep Implementation Protocol',
    github: 'GitHub',
    templates: 'Templates',
    license: 'MIT License',
    copyright: 'DIP — Deep Implementation Protocol. Open source under the MIT License.',
  },
  sourcesUsed: {
    label: 'Sources Used',
    sources: [
      { title: 'ISO 31000:2018 — Risk management guidelines', url: 'https://www.iso.org/iso-31000-risk-management.html' },
      {
        title: 'The Orange Book (UK Government, 2025 update)',
        url: 'https://www.gov.uk/government/publications/orange-book/the-orange-book-management-of-risk-principles-and-concepts',
      },
      {
        title: 'NIST SP 800-30 Rev.1 — Guide for Conducting Risk Assessments',
        url: 'https://www.nist.gov/publications/guide-conducting-risk-assessments',
      },
      {
        title: 'NIST SP 800-39 — Managing Information Security Risk',
        url: 'https://www.nist.gov/publications/managing-information-security-risk-organization-mission-and-information-system-view',
      },
      { title: 'DoD RIO Guide (2023, Change 2.2)', url: 'https://www.cto.mil/wp-content/uploads/2023/11/RIO-2023-2-2.pdf' },
      {
        title: 'NASA Risk Management Handbook v1 (2011)',
        url: 'https://ntrs.nasa.gov/api/citations/20120000033/downloads/20120000033.pdf',
      },
      { title: 'NASA Risk Management Handbook v2.0 Part 1 (2024)', url: 'https://ntrs.nasa.gov/citations/20240014019' },
      { title: 'NASA Risk Management Handbook v2.0 Part 2 (2024)', url: 'https://ntrs.nasa.gov/citations/20240014326' },
      { title: 'Google SRE Book — Embracing Risk', url: 'https://sre.google/sre-book/embracing-risk/' },
      { title: 'The Scrum Guide (2020)', url: 'https://scrumguides.org/docs/scrumguide/v2020/2020-Scrum-Guide-US.pdf' },
      {
        title: 'RAND MR-114 — Assumption-Based Planning',
        url: 'https://www.rand.org/pubs/monograph_reports/MR114.html',
      },
      {
        title: 'SEI — Architecture Tradeoff Analysis Method (ATAM)',
        url: 'https://www.sei.cmu.edu/library/architecture-tradeoff-analysis-method-collection/',
      },
      {
        title: 'PMI — Assumptions-Based Planning paper',
        url: 'https://www.pmi.org/learning/library/assumptions-based-planning-analyze-techniques-6582',
      },
    ],
  },
}
