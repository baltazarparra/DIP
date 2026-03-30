---
milestone: milestone-1
total_phases: 3
current_phase: phase-1
---

<!-- Milestone template — implementation-phases.md
     This document breaks the milestone into coherent implementation phases
     and tracks progress across all phases and their PRDs.

     INSTRUCTIONS FOR AGENTS:
     - Read this file to determine which phase is currently active
     - A phase is complete when ALL its PRDs have status "completed"
     - Track URA status for each phase and keep owners/dates up to date
     - After completing a phase, update its status here and generate a report
     - Do not start a new phase until the current one is complete and reported
-->

# Implementation Phases

<!-- This is the implementation plan for the milestone defined in milestone.md.
     Each phase groups related work that can be completed and validated independently. -->

## Phase 1: Foundation

<!-- Replace with a descriptive name for this phase -->

**Status**: in-progress
**Description**: Set up the foundational architecture and core data models needed for all subsequent phases.

### PRDs

<!-- List all PRDs in this phase with their status.
     Status values: pending | in-progress | completed
     Update these as work progresses. -->

| PRD | File | Status |
|-----|------|--------|
| Database Schema | `phases/phase-1/prd-database-schema.md` | pending |
| User Authentication | `phases/phase-1/prd-user-auth.md` | pending |

### URA Snapshot

<!-- Keep only the highest-priority items that can affect this phase outcome.
     Status suggestions:
     - Unknowns: open | resolved | carried-over
     - Assumptions: open | validated | invalidated
     - Risks: monitoring | mitigated | materialized
-->

| Type | Item | Owner | Due Date | Status |
|------|------|-------|----------|--------|
| Unknown | Unknown 1 | Name/Role | YYYY-MM-DD | open |
| Assumption | Assumption 1 | Name/Role | YYYY-MM-DD | open |
| Risk | If [condition], then [consequence] | Name/Role | YYYY-MM-DD | monitoring |

### Phase Exit Gate (URA)

- [ ] No unresolved high-impact risk without explicit acceptance
- [ ] Critical assumptions are validated or re-planned
- [ ] Priority unknowns are resolved or explicitly carried to the next phase

---

## Phase 2: Core Features

**Status**: pending
**Description**: Implement the primary user-facing features that deliver the milestone's core value.

### PRDs

| PRD | File | Status |
|-----|------|--------|
| Feature A | `phases/phase-2/prd-feature-a.md` | pending |
| Feature B | `phases/phase-2/prd-feature-b.md` | pending |

### URA Snapshot

| Type | Item | Owner | Due Date | Status |
|------|------|-------|----------|--------|
| Unknown | Unknown 1 | Name/Role | YYYY-MM-DD | open |
| Assumption | Assumption 1 | Name/Role | YYYY-MM-DD | open |
| Risk | If [condition], then [consequence] | Name/Role | YYYY-MM-DD | monitoring |

### Phase Exit Gate (URA)

- [ ] No unresolved high-impact risk without explicit acceptance
- [ ] Critical assumptions are validated or re-planned
- [ ] Priority unknowns are resolved or explicitly carried to the next phase

---

## Phase 3: Polish and Integration

**Status**: pending
**Description**: Integration testing, performance optimization, and UI polish before milestone completion.

### PRDs

| PRD | File | Status |
|-----|------|--------|
| Integration Tests | `phases/phase-3/prd-integration-tests.md` | pending |
| Performance Optimization | `phases/phase-3/prd-performance.md` | pending |

### URA Snapshot

| Type | Item | Owner | Due Date | Status |
|------|------|-------|----------|--------|
| Unknown | Unknown 1 | Name/Role | YYYY-MM-DD | open |
| Assumption | Assumption 1 | Name/Role | YYYY-MM-DD | open |
| Risk | If [condition], then [consequence] | Name/Role | YYYY-MM-DD | monitoring |

### Phase Exit Gate (URA)

- [ ] No unresolved high-impact risk without explicit acceptance
- [ ] Critical assumptions are validated or re-planned
- [ ] Priority unknowns are resolved or explicitly carried to the next phase
