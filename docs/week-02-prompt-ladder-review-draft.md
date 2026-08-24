# Week 2: The Prompt Ladder — Review Draft

> **Evidence boundary:** This is an AI-assisted prompt-design exercise based on the public background-job project. It is not a screenshot series from a participant-owned Claude Project, nor proof that a provider dashboard or production deployment was run. The participant must review the prompts and substitute actual tool output only where it was genuinely produced.

## Real work problem

The target problem is a small Node.js report API that accepts work quickly, returns `202 Accepted`, and moves an eight-second task into a local Inngest workflow. The goal of the ladder is to show why a broad request is insufficient and how each added constraint makes a reviewable implementation plan more useful.

| Version | Single layer added | Useful gain | Remaining gap |
| --- | --- | --- | --- |
| Baseline | None: “Write backend code for a report API.” | Establishes a deliberately weak comparison point. | No asynchronous boundary, status contract, or verification plan. |
| 1 | Clear goal | Introduces immediate `202` response and later polling. | Worker behavior and failures remain generic. |
| 2 | Defined audience | Keeps the proposal small for a junior Node.js learner. | Still omits exact local job tooling and retries. |
| 3 | Real context | Names Express, Inngest, in-memory state, routes, eight-second work, and heartbeat. | Blends code, explanation, and testing into an awkward review shape. |
| 4 | Specified output format | Requests file tree, endpoint table, implementation order, and run commands. | A tidy outline can still hide invalid-input and retry requirements. |
| 5 | Verification requirements | Adds `400` before event emission, unknown-ID `404`, controlled retry failure, idempotency, cron output, and a truthfulness constraint. | The prompt cannot replace a real run or participant review. |

## Final reusable prompt

```text
Design a small Node.js background-report API for a junior developer who knows Express.
The goal is to accept a topic immediately, return 202 with an ID, and move the
eight-second work into a local Inngest worker.

Use Express, an in-memory report map, and Inngest locally. Define GET /health,
POST /reports, GET /reports/:id, and /api/inngest. Validate a non-empty topic
before emitting the event; store pending state; return 202; use named sleep and
build steps; configure retries: 2; include a controlled fail topic, idempotent
completion, and an every-minute heartbeat summary.

Return a file tree, endpoint-and-function table, implementation order, two local
run commands, and a verification checklist. Cover sub-second 202, pending-to-done
polling, unknown-ID 404, missing-topic 400 with no event, controlled retry failure,
idempotency, cron output, and the in-memory restart limitation. Do not claim a
dashboard, provider, or deployment run unless evidence is supplied.
```

## What the ladder demonstrates—and does not demonstrate

The ladder demonstrates a method for progressively constraining a technical draft: add one purpose, audience, context, format, or verification layer at a time, then inspect what became clearer and what remained ambiguous. It does not establish authorship of a provider output or a personal tool-account configuration. The source system and its documented local evidence are public in the [background-job repository](https://github.com/iotserver24/flyrank-be-06-background-job).

## Participant completion check

- [ ] Run or inspect the ladder in the actual permitted tool environment, if the assignment requires it.
- [ ] Preserve genuine outputs and explain the observed differences in personal words.
- [ ] Do not present representative drafts as screenshots or as a provider run.
- [ ] Retry the related portal form and verify persistence separately; the prior save attempt did not appear in `/intern/submissions`.

## References

[1]: https://github.com/iotserver24/flyrank-be-06-background-job "Background Report Job repository"
[2]: https://internship.flyrank.ai/intern/submissions "FlyRank submissions page observed on 2026-08-24"
