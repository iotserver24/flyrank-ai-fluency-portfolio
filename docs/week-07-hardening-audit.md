# Week 7: Break Your Own Site — Hardening Audit

> **Scope boundary:** This is a reproducible technical audit of the public source and HTTP availability. It is not an independent human hardening review, a physical-device test, a search-index guarantee, or proof that a participant manually tried every edge case.

## Fix-now changes applied

| Finding | Fix | Verification method |
| --- | --- | --- |
| The initial Nuxt configuration had only title and description metadata. | Added canonical URL, Open Graph title/description/type/URL, Twitter text metadata, and `robots.txt`. | Source test plus generated static build. |
| A retired account-level custom domain redirected the portfolio externally. | Removed the user-confirmed `anisurge.me` custom-domain binding from the user Pages configuration. | GitHub Pages settings now show the default `iotserver24.github.io` domain; direct HTTPS check returned `200`. |
| Project paths needed repeatable availability checks. | Added the read-only `pnpm site:audit` command for the portfolio and five linked repositories. | Captured JSON output under `evidence/site-hardening-audit.json`. |

## Automated checks

The command below makes GET requests only. It does not authenticate, submit a form, alter a repository, or test a third-party service.

```bash
pnpm site:audit
pnpm test
pnpm run check
pnpm run generate
```

The audit records response statuses and elapsed request time. It is intentionally **not** described as a formal performance score.

### Observed result — 2026-08-24

The captured audit at [`evidence/site-hardening-audit.json`](../evidence/site-hardening-audit.json) recorded `200` responses for all six checked public endpoints: the portfolio and the five linked backend repositories. The portfolio response completed in 384 ms; repository availability checks ranged from 790 to 1,053 ms. These values are request observations only, not a speed grade or user-experience claim.

## Triage: known limitations

| Limitation | Why it remains | Required next step |
| --- | --- | --- |
| No form or email-capture flow exists. | The portfolio’s selected one feature is a browser-side project filter; there is no visitor data to accept or duplicate-submit. | Add a contact feature only if there is a real receiving address and a privacy-conscious data-handling decision. |
| No participant-operated second-browser/device test is recorded. | A sandbox test is not a real user-device proof. | Participant tests the public page on another browser/phone and documents the result. |
| No hardening review from a mentor or peer is present. | This requires a real human reviewer. | Request a human review and record the actual must-fixes. |
| Search-index and social-card appearance are unverified. | External crawlers/indexes do not guarantee immediate results. | Check after a public crawl; add a real OG image if visual sharing is required. |
| Browser cached an old redirect immediately after domain removal. | A stale redirect can survive in an existing browser context. | Retest in a fresh browser profile after cache/propagation clears. |

## Submission boundary

The audit makes the source and known gaps reviewable. It should not be submitted as a completed Week 7 checkpoint until the participant performs the requested edge-case tests and obtains the required human hardening review.
