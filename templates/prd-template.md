---
title: "PRD Title"
status: pending
priority: high
complexity: medium
phase: phase-1
milestone: milestone-1
---

<!-- DIP TEMPLATE — PRD (Product Requirements Document)
     Each PRD is a self-contained unit of work, equivalent to a detailed Jira card.
     It contains everything a coding agent needs to implement this specific piece.

     INSTRUCTIONS FOR AGENTS:
     - Update status to "in-progress" when you begin working on this PRD
     - Update status to "completed" when ALL acceptance criteria checkboxes are checked
     - Do not modify the Description, NFRs, or Out of Scope sections during implementation
     - If you discover new requirements, note them in Technical Considerations
     - If acceptance criteria cannot be met, explain why and request human review

     STATUS LIFECYCLE: pending → in-progress → completed
     PRIORITY VALUES: critical | high | medium | low
     COMPLEXITY VALUES: simple | medium | complex
-->

# PRD Title

<!-- Replace with a clear, specific title that describes what will be built.
     Good: "User Authentication with Email/Password"
     Bad: "Auth stuff" or "Login" -->

## Description

<!-- Provide a clear description of what needs to be built.
     Include the user story or business context.
     Be specific enough that an agent can implement without guessing.

     Good: "Implement email/password authentication with session management.
            Users should be able to sign up, log in, and maintain sessions
            across page refreshes."
     Bad:  "Add login functionality." -->

## Acceptance Criteria

<!-- List testable criteria that define "done" for this PRD.
     Each criterion should be verifiable — either it works or it doesn't.
     Use checkboxes so agents can mark them as they go.

     Good criteria:
     - [ ] User can sign up with email and password
     - [ ] Invalid email format shows inline error message
     - [ ] Duplicate email registration returns 409 status

     Bad criteria:
     - [ ] Auth works properly (too vague)
     - [ ] Good user experience (not testable)
-->

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Non-Functional Requirements

<!-- List performance, security, accessibility, and other quality requirements.
     Be specific with numbers where possible.

     Example:
     - Response time < 200ms for API endpoints
     - Passwords hashed with bcrypt (min 12 rounds)
     - WCAG 2.1 AA compliance for all new UI elements
     - Rate limiting: max 5 failed attempts per minute
-->

- Requirement 1
- Requirement 2

## Technical Considerations

<!-- Document architecture decisions, constraints, dependencies on other PRDs,
     or anything that affects how this should be implemented.

     Example:
     - Use JWT tokens stored in httpOnly cookies
     - Depends on prd-database-schema.md being completed first
     - Must be compatible with the existing middleware stack
-->

## Related Files

<!-- List files that will likely need to be created or modified.
     This helps agents navigate directly to the relevant code.

     Example:
     - src/auth/handlers.ts (create)
     - src/middleware/auth.ts (create)
     - src/db/schema/users.ts (modify)
-->

## Out of Scope

<!-- Explicitly list what this PRD does NOT cover.
     This prevents scope creep and helps agents stay focused.

     Example:
     - Social login (Google, GitHub) — separate PRD
     - Two-factor authentication — phase-2
     - Admin role management — separate milestone
-->
