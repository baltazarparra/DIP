# Quality Verification Layer

DIP already gives agents the structure they need to build with precision. This document extends the protocol with a complementary quality strategy — a verification layer that rides alongside each DIP step.

## The idea

DIP's loop (Refinement → Milestone → Phases → PRDs → Implementation → Report) creates a strong chain of context. The quality verification layer adds a parallel chain: at each step, it defines how to measure and confirm that the output meets expectations. Think of it as DIP for the "build" side, and this layer for the "prove it works" side.

## How it extends each DIP step

| DIP step | DIP already provides | Quality layer extends with |
|----------|---------------------|--------------------------|
| **Refinement** | Cross-functional alignment | Quality risks and testability considerations |
| **Milestone** | Goals, scope, URA baseline | Coverage targets and quality success criteria |
| **Phases** | Logical work groupings + exit gates | Measurable entry/exit criteria with quality gates |
| **PRDs** | Requirements, ACs, URA | Risk-tiered ACs with unique IDs and test layer mapping |
| **Implementation** | Agent builds PRDs | Automated quality gates on every PR |
| **Report** | Summary, deviations, URA outcomes | Coverage metrics, traceability status, defect summary |

## Practical example: enhanced ACs in PRDs

DIP's PRD template already includes Acceptance Criteria. This layer suggests enriching them with IDs for traceability, risk tiers to prioritize verification effort, and Given/When/Then structure:

```markdown
## Acceptance Criteria

- [ ] **AC-001.1** [P0] Given a user with valid credentials, When they submit the login form, Then they receive a session token
- [ ] **AC-001.2** [P1] Given an expired session, When the user makes a request, Then they are redirected to login
```

* **Unique ID** (AC-001.1): traces the AC from PRD → test file → defect → report
* **Risk tier** (P0/P1/P2): scales verification depth — P0 gets full E2E, P2 gets unit tests
* **Given/When/Then**: makes the AC directly translatable to BDD specs

## Suggested phase exit additions

DIP already uses exit gates between phases. These quality criteria complement them:

* All P0 ACs have passing E2E tests
* All P1 ACs have passing integration or component tests
* Coverage thresholds met per risk tier
* No P0 traceability gaps (every critical AC maps to a test)

## Full framework

This document introduces the core ideas. For the complete quality governance framework — including detailed validation chains, risk tiering criteria, quality gate configurations, traceability matrix templates, and weekly scorecards — see [Crivo](https://github.com/priscilanfs28/crivo), a protocol-agnostic quality framework with a dedicated DIP integration guide.
