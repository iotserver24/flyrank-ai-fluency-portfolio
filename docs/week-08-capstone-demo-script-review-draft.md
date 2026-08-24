# Week 8: Capstone Demo Script — Review Draft

> **Record-it-yourself boundary:** This is a run-of-show for a real 3–5 minute demonstration of the public Usage Metering & Billing Engine. It is not a video, not a screen recording, and not proof that the participant can narrate it without reviewing the code. A completed assignment needs an authentic live recorded run and the participant’s own narration.

## What to prepare before recording

1. Clone the public [capstone repository](https://github.com/iotserver24/flyrank-capstone-metering-billing).
2. Run the documented install, seed, test, and local-server commands from its README.
3. Use `X-Tenant-Key: local-demo-key` and a fresh `Idempotency-Key` for the local tenant demo.
4. Keep the repository README and `EVIDENCE.md` open so every claim in the recording matches public evidence.
5. Do not use or show private credentials. The real Stripe path is intentionally unconfigured.

## 3–5 minute run of show

| Time | What to show | What to say in plain language |
| --- | --- | --- |
| 0:00–0:30 | Repository README and architecture diagram. | “This is a tenant-scoped usage metering service. It records API or simulated AI-token usage, enforces a plan limit, and keeps a visible evidence boundary around payment-provider work.” |
| 0:30–1:20 | `npm test` and the 9-test result. | “The suite checks the cases that are easy to get wrong: idempotent retries, exact quota limits, inactive subscriptions, integer price arithmetic, signed webhook fixtures, and tenant isolation.” |
| 1:20–2:20 | Local `POST /v1/generate` with the demo tenant key and a quantity of 3, then repeat the same request with the same idempotency key. | “The first request writes one metered event. Repeating the same key returns the same event as a replay instead of writing and charging twice.” |
| 2:20–2:55 | A new request over the quota and the usage rollup. | “The seeded Free plan allows three API calls. A new fourth call returns 429 with a retry hint; the rollup keeps cost in integer microcents.” |
| 2:55–3:35 | Reconciliation evidence and the public Inngest configuration. | “The background reconciliation function has a verified local success run and a controlled failure with configured retries and persisted alerts. This is local evidence, not a claim of a hosted operations system.” |
| 3:35–4:15 | `POST /v1/checkout` without secrets, then the limitations section. | “This is the important limitation: without participant-owned Stripe test credentials, Checkout deliberately returns a configuration error. Fixture tests verify the signature code path, but no real payment, Checkout Session, or externally delivered Stripe webhook is claimed.” |
| 4:15–4:45 | `BUILDLOG.md` and evidence links. | “AI assistance was documented in the build log, and I kept source evidence distinct from unverified external steps.” |

## One design decision to explain

The implementation stores pricing in **integer microcents** instead of floating-point money. The purpose is to make additive rollups deterministic and avoid common rounding errors during quota/accounting calculations.

## One limitation to explain on camera

There is no real Stripe Checkout Session or externally delivered Stripe webhook in the evidence because private test-mode configuration was not supplied. The capstone verifies the adapter boundary and deterministic signed fixtures only.

## After recording

- [ ] Upload the actual video to a participant-controlled public or reviewer-accessible location.
- [ ] Add the video URL to the correct showcase thread and assignment form.
- [ ] Confirm the video displays a real live run rather than slides and includes the limitation above.
- [ ] Recheck `/intern/submissions`; do not treat Save submission as persistence.
