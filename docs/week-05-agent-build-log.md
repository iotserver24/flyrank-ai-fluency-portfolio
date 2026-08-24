# Week 5: Portfolio Evidence Scout Build Log

## Scope carried forward from the design

The designed agent has one job: inspect an allowlisted local FlyRank project’s non-secret evidence files and return a review checklist. It is intentionally read-only. It cannot publish, submit, deploy, purchase, alter an account, read a credential file, or claim a live provider result.

## Implementation steps and real revisions

| Step | What happened | Change or decision |
| --- | --- | --- |
| 1. Started with the FL-06 design | The design called for a narrow local scripted agent and safe source inventory. | Implemented `scripts/portfolio-evidence-scout.mjs` with an explicit FlyRank project-directory allowlist. |
| 2. Restricted filesystem scope | A general recursive reader could expose irrelevant or secret-adjacent material. | The implementation reads only named documentation/package files and immediate files within `test`, `tests`, `docs`, and `evidence`; `.env`, credentials, keys, tokens, and passwords are excluded. |
| 3. Kept output deterministic | No private model-provider credential is configured. | The prototype creates a source-linked inventory and labels text as local-evidence context or needs-owner-confirmation; it does not present itself as an LLM response. |
| 4. Added pre-build checks | The FL-06 plan defined acceptance and safety cases. | Automated tests prove path allowlisting and protected-file exclusion. |

## Core local run

The reproducible core run is:

```bash
pnpm agent:scout -- --path /home/ubuntu/flyrank-capstone-metering-billing
```

It reads only the capstone’s allowed non-secret files and prints JSON with cited source paths, evidence snippets, owner-confirmation labels, and no-action guardrails. A committed output capture is added only after executing this command successfully.

## Verified local execution — 2026-08-24

```text
Command: pnpm agent:scout -- --path /home/ubuntu/flyrank-capstone-metering-billing
Result: 6 allowlisted non-secret source files, 38 source-linked evidence snippets
Mode: deterministic, read-only source inventory — not a live LLM result
Automated checks: 9 tests passed; Nuxt type check passed
Captured output: evidence/portfolio-evidence-scout-capstone.json
```

The captured JSON contains source paths and snippets only. It contains no `.env` value, API key, password, token, or external provider result.

## What was deliberately cut

| Deferred feature | Why it was cut |
| --- | --- |
| Live model classification | No private LLM provider was configured. A safe structured-provider boundary can be added later without changing the read-only guardrails. |
| GitHub API/network retrieval | The sandbox’s visual no-code runner encountered GitHub 403 restrictions. The prototype deliberately uses a selected local project path instead. |
| Automatic publishing or submission | Explicitly forbidden by the design; a human must approve any external action. |
| Raw two-minute screen capture | This requires a genuine unedited operator recording. It has not been created or claimed. |

## Remaining FL-07 evidence boundary

The agent can be validated through source, tests, and an unedited terminal run. It **cannot satisfy the assignment’s raw screen-capture requirement until the participant records an actual run**. No screen capture, private external tool connection, or personal claim is fabricated in this repository.
