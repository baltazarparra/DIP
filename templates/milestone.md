---
title: "Milestone Title"
status: active
created: YYYY-MM-DD
---

<!-- Milestone template — milestone.md
     This document defines a milestone/epic. It is produced during the refinement
     meeting with the full team (Design, Product, Business, Technology).

     INSTRUCTIONS FOR AGENTS:
     - Do not modify this document unless explicitly asked
     - Use this as the source of truth for the milestone's scope and goals
     - Use the URA section as the source of truth for uncertainty handling
     - Reference this when evaluating whether a PRD aligns with the milestone
-->

# Milestone Title

<!-- Replace with a clear, descriptive title for this milestone/epic -->

## Overview

<!-- Provide a high-level description of what this milestone achieves.
     This should be 2-4 paragraphs explaining the business context,
     user need, and technical opportunity. -->

## Goals

<!-- List the specific, measurable goals this milestone aims to achieve.
     Good goals are concrete and verifiable.

     Example:
     - Users can complete the checkout flow end-to-end
     - Payment processing handles Stripe and PayPal
     - Order confirmation emails are sent within 30 seconds
-->

- Goal 1
- Goal 2
- Goal 3

## Success Criteria

<!-- Define how the team will know this milestone is successful.
     These should be measurable outcomes, not just "it works."

     Example:
     - Checkout conversion rate >= 85%
     - p95 latency for payment processing < 2 seconds
     - Zero critical bugs in production after 1 week
-->

- [ ] Criterion 1
- [ ] Criterion 2
- [ ] Criterion 3

## Scope

### In Scope

<!-- Explicitly list what IS included in this milestone -->

- Item 1
- Item 2

### Out of Scope

<!-- Explicitly list what is NOT included. This prevents scope creep
     and gives agents clear boundaries. -->

- Item 1
- Item 2

## Constraints

<!-- List any technical, business, or timeline constraints.

     Example:
     - Must use existing database schema where possible
     - Must be backwards-compatible with API v2
     - Deadline: end of Q2
-->

- Constraint 1
- Constraint 2

## Unknowns, Risks, and Assumptions (URA)

<!-- This section defines how uncertainty will be managed for the entire milestone.
     Keep it concise and operational. PRDs and phase plans must align with it. -->

### Risk Appetite and Escalation Thresholds

<!-- Define what level of risk is acceptable and when escalation is mandatory.
     Example:
     - Schedule variance tolerance: <= 10%
     - Security risks with Impact >= 4 require immediate escalation
     - Any unresolved risk score >= 16 (Likelihood x Impact) blocks phase close
-->

- Appetite rule 1
- Appetite rule 2

### Critical Assumptions

<!-- Capture assumptions that, if false, would materially change scope, timeline,
     architecture, or compliance posture. -->

| Assumption | Confidence (1-5) | Validation Plan | Validation Deadline | Owner | Status |
|------------|------------------|-----------------|---------------------|-------|--------|
| Assumption 1 | 3 | Validate via spike/analysis | YYYY-MM-DD | Name/Role | open |
| Assumption 2 | 4 | Validate via prototype/test | YYYY-MM-DD | Name/Role | open |

### Priority Unknowns

<!-- Unknowns are unanswered questions that need evidence before committing.
     Every priority unknown should have a discovery action and decision date. -->

| Unknown | Why It Matters | Discovery Action | Decision Deadline | Owner | Status |
|---------|----------------|------------------|-------------------|-------|--------|
| Unknown 1 | Could affect architecture choice | Time-boxed spike | YYYY-MM-DD | Name/Role | open |
| Unknown 2 | Could affect delivery plan | User/tech validation | YYYY-MM-DD | Name/Role | open |

### Top Milestone Risks

<!-- Use If/Then phrasing to keep risk statements testable.
     Example: If payment provider latency exceeds 1.5s, then checkout conversion may drop. -->

| Risk Statement (If..., then...) | Likelihood (1-5) | Impact (1-5) | Response Strategy | Trigger | Owner | Status |
|---------------------------------|------------------|--------------|-------------------|---------|-------|--------|
| If [condition], then [consequence] | 3 | 4 | reduce | Trigger signal | Name/Role | monitoring |

## Stakeholders

<!-- List the people or roles involved in this milestone -->

| Role | Name | Responsibility |
|------|------|----------------|
| Product | | Defines requirements and priorities |
| Design | | UI/UX specifications |
| Tech Lead | | Architecture decisions |
| Engineering | | Implementation |
