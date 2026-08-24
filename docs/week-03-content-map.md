# Week 3: The Through-Line — Content and CTA Map

## One-line claim

> **I build small, testable systems that make AI work accountable.**

This claim is deliberately short enough to remember and grounded in the linked work: metering, validation, idempotency, structured outputs, background-job retries, and evidence boundaries. It does not claim unverified provider integrations, commercial impact, or personal endorsements.

## Visitor action and CTA ladder

The single desired action is: **review a working repository and its evidence notes before deciding whether the engineering approach fits a team.**

| Level | Visitor intent | CTA | Destination |
| --- | --- | --- | --- |
| Primary | Understand the portfolio promise | `Review selected work` | Portfolio work section |
| Project | Inspect one implementation | `Repository` | The corresponding public GitHub repository |
| Verification | Assess source and tests | `Open GitHub` / `Visit GitHub` | `https://github.com/iotserver24` |
| Share | Save the page for later review | `Copy portfolio URL` | Copies the current portfolio address locally; it does not send data anywhere |

## Content map

| Page / location | Sections in order | Case placement | CTA |
| --- | --- | --- | --- |
| Home | Identity mark → one-line claim → short audience statement → proof statement → primary actions | No case before the claim; this is orientation. | `Review selected work` |
| Selected work | Section heading → filter controls → project cards → evidence boundaries → repository links | **Lead:** Usage Metering & Billing Engine. Then Structured LLM Triage, SQL-to-PDF Reporting, Decision Desk, and Background Report Job. The lead case has the broadest backend evidence: tenant isolation, pricing, quotas, webhooks, and reconciliation. | `Repository` on each project |
| Working principle | Narrow contract → uncomfortable-path testing → transparent limitations | The principles explain the shared reasoning across all five cases rather than presenting an additional claim. | Continue to the next-step section |
| Next step | “Start with the code” → brief review guidance → GitHub and copy-link controls | Directs a reviewer to source, tests, and evidence rather than a fabricated contact funnel. | `Visit GitHub` / `Copy portfolio URL` |
| Repository documentation | README → implementation files → deterministic tests / evidence documents | Source material for deeper review. | GitHub navigation |

## Case selection rationale

| Case | Why it belongs | Evidence already available | Boundary displayed to a visitor |
| --- | --- | --- | --- |
| Usage Metering & Billing Engine | Strongest end-to-end backend case; combines data modelling, tenant isolation, metering, quotas, webhooks, and background reconciliation. | Public source, 9 deterministic tests, local API and Inngest evidence. | No live Stripe Checkout or externally delivered webhook is claimed. |
| Structured LLM Triage API | Demonstrates constrained LLM integration and structured validation. | Public source and 9 deterministic tests. | Private-provider execution is not claimed. |
| SQL-to-PDF Reporting Pipeline | Demonstrates data aggregation and a concrete artifact. | Public source, 4 tests, locally generated eight-page report. | Evidence is local, not a hosted reporting service. |
| Decision Desk Workflow | Demonstrates workflow interface reasoning and execution boundaries. | Public source, 5 tests, managed checkpoint. | Provider-backed execution is explicitly a boundary. |
| Background Report Job | Demonstrates asynchronous lifecycle, retry, and controlled failure handling. | Public source, 7 tests, local lifecycle evidence. | The verification is local, not a production job service. |

## Still to gather before making broader claims

| Missing proof | Why it matters | Current status |
| --- | --- | --- |
| A working public portfolio URL | A reviewer needs a stable webpage, not only source. | GitHub Pages deployment succeeded, but the account-level `anisurge.me` custom-domain configuration redirects externally; correcting that account-level setting remains manual. |
| Phone-device opening evidence | Week 6 asks for a participant’s actual second-device test. | Cannot be fabricated; participant-only. |
| Independent human critique and response | Week 6 asks for real feedback and a response. | Cannot be invented; participant-only. |
| Real Stripe test-mode session and webhook | The capstone’s adapter path is documented but an external account is unconfigured. | Requires private participant credentials and provider setup. |
| Real LLM-provider run | The triage API deliberately uses a test boundary without credentials. | Requires private participant credential configuration. |
| Five successful no-code automation source runs | Week 4 requires actual end-to-end workflow output and time comparison. | The prepared import flows are public, but this sandbox’s no-code runtime was unable to fetch GitHub sources; do not claim completion. |
| Screenshots chosen by the participant | The Week 3 visual-curation exercise requires actual selection judgment. | No fabricated selection screenshots included. |

## Review note

This map was prepared using the participant-provided GitHub identity and public implementation records. It should be reviewed and adjusted by the participant if their preferred audience, contact channel, or strongest future case changes.
