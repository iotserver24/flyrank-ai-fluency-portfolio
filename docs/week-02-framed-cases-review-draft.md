# Week 2: Frame It as Cases — Review Draft

> **Participant review required:** These cases are AI-assisted portfolio copy based on public project documentation and local evidence records. They are not claims of client outcomes, user metrics, production deployments, or independent FlyRank acceptance. The participant must confirm the first-person wording and technical claims before presenting them as personal case studies.

## Voice and evaluation posture

The proposed voice is **clear, direct, technically specific, and candid about limits**. Each case leads with a problem, names a deliberately narrow implementation choice, states the observed evidence, and makes the unresolved boundary visible. The intended reader is a technical reviewer, not a generic audience seeking unverified business claims.

## Case 1 — Task API: prove the basics are deliberate

Small task APIs are often presented as a list of routes without input validation or error-path evidence. The proposed case describes an Express Task API with create, read, update, delete, filtering, validation, and a browser-visible OpenAPI contract. The deliberate limitation is that the first version uses in-memory state because the work was focused on the HTTP surface and reproducible CRUD behavior, not durable storage. The [public repository](https://github.com/iotserver24/flyrank-be-01-crud-api) records six deterministic tests. It is also the only assignment currently shown in the official submissions record; that status does not automatically extend to other portfolio projects.

## Case 2 — Background reports: return `202`, then complete safely

The core problem is avoiding a long-lived client request while report work runs. The proposed framing describes `POST /reports` validating a topic, creating a pending record, emitting an event, and returning `202 Accepted`, with `GET /reports/:id` supporting status polling. The separate workflow deliberately includes controlled failure/retry behavior, idempotent completion handling, and a heartbeat. The [public repository](https://github.com/iotserver24/flyrank-be-06-background-job) records local lifecycle evidence and seven tests. It does **not** claim a hosted production queue or external alerting service.

## Case 3 — LLM triage: treat model output as untrusted input

The proposed third case makes a narrower argument: a classification endpoint should not assume a provider result is valid, complete, or inexpensive. The [public triage API](https://github.com/iotserver24/flyrank-be-07-llm) version-controls its prompt, validates a closed response schema, has a repair/quarantine path, and records bounded retry and timeout behavior. Its nine local tests and eight-case evaluation use a labelled deterministic stub when participant-owned provider credentials are absent. The case must retain that distinction: this is evidence of contract design and local tests, not a real provider-quality evaluation.

## Suggested CTA and AI-assistance disclosure

> Review a project first. If the code, approach, and stated limits fit the problem you have in mind, start a conversation through GitHub or LinkedIn.

AI assistance was used for drafting and revising portfolio copy and technical artifacts. Public repositories and deterministic checks were used to review concrete claims. The participant must add any personal examples, screenshots, or outcomes only when they are genuine and reviewable.

## Participant completion check

- [ ] Confirm each first-person case description against the public source and actual build experience.
- [ ] Replace no limitation with a stronger claim unless new evidence supports it.
- [ ] Add only real personal contact channels and profile details.
- [ ] Retry the FlyRank form and verify persistence separately; an earlier save attempt did not appear in `/intern/submissions`.

## References

[1]: https://github.com/iotserver24/flyrank-ai-fluency-portfolio "Public AI Fluency portfolio source"
[2]: https://internship.flyrank.ai/intern/submissions "FlyRank submissions page observed on 2026-08-24"
