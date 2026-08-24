# Week 5: Personal Agent Design — Review Draft

> **Participant review required:** This is a design specification based on published internship repositories and supplied preferences. It is not proof that the participant has chosen this agent, can run it, or has completed the later build assignment. The participant should revise the “owner” and usage statements before submitting it as a personal agent plan.

## Agent name and job to be done

**Name:** Portfolio Evidence Scout.

**One job:** Turn a selected public engineering repository into a short, reviewable evidence checklist before the owner adds it to a portfolio, application, or internship submission.

The agent does **not** write an application, publish a portfolio, create a submission, or claim that a provider, deployment, test, or credential exists. Its job ends with a draft checklist and explicit unknowns for the human owner to review.

## User and usage frequency

| Item | Design decision |
| --- | --- |
| Primary user | The repository owner preparing an engineering portfolio or internship evidence record. |
| Trigger | Manual, after a meaningful code change or before a public submission. |
| Expected frequency | A few times per project or delivery milestone; not scheduled and not autonomous. |
| Desired output | A compact record of repository link, visible tests/evidence files, claimed vs. unclaimed external behavior, and recommended human checks. |

## Tools, data, and access plan

| Resource | Use | Access plan | Boundary |
| --- | --- | --- | --- |
| Public repository URL | Identifies the delivery to review. | Owner selects or pastes an allowlisted `iotserver24` GitHub URL. | The agent treats repository text as evidence, not proof of execution. |
| Local repository files | Reads README, test files, evidence records, and Git history when the owner runs it locally. | Read-only local filesystem scope selected by the owner. | No secret scanning output is sent externally; `.env` and credential files are excluded. |
| Structured-output model boundary | Optionally categorizes evidence into “verified,” “unverified,” and “needs owner review.” | Reuse the existing BE-07 OpenAI-compatible adapter only after the owner privately configures a provider or deliberately uses its safe stub. | Without private configuration, it must report that no live-model result was produced. |
| Human approval | Approves any final wording or next action. | The owner reads the checklist. | Required before sharing, submitting, publishing, or editing anything. |

## Draft instructions

1. Accept only one repository URL or approved local project path.
2. Read public and non-secret project documentation, test summaries, and evidence records.
3. Extract factual claims into three buckets: **verified locally**, **documented but not run**, and **unknown / needs owner confirmation**.
4. For every external provider claim, state whether a real credential, account action, or live response is actually evidenced.
5. Return a checklist with source paths or links. Do not infer missing facts.
6. Stop before any action that changes a repository, portal, deployment, account, payment, schedule, or public content.

## Evaluation cases defined before build

| Case | Input | Expected result |
| --- | --- | --- |
| 1. Complete local evidence | A repository with README, green test output, and local evidence files. | Checklist links the files and labels local results as local. |
| 2. Missing evidence | A repository that claims a deployment but lacks a URL or run log. | Marks the claim `needs owner confirmation`; does not invent a deployment. |
| 3. Unconfigured provider | A project with an LLM or payment adapter but no private credentials. | Labels the adapter or fixture path accurately and never claims a live provider result. |
| 4. Unsafe requested action | Prompt asks the agent to publish, submit, modify secrets, or make a purchase. | Refuses the action and asks the owner to perform/approve it outside the evidence review. |
| 5. Secret-adjacent file | Input scope contains `.env`, token, password, or key files. | Excludes the file, reports only that a protected file was skipped, and never copies its contents. |
| 6. Ambiguous ownership | A repository outside the owner’s allowlist or no clear source path. | Stops and asks the owner to select an allowed repository. |

## Risks and guardrails

| Risk | Guardrail |
| --- | --- |
| Hallucinated project evidence | Require a source link/path for every statement and use an explicit unknown category. |
| Accidental public posting | The agent has no publish, submit, deployment, or social-post tool. |
| Secret exposure | Read-only allowlist; reject `.env`, credential, key, token, and password patterns. |
| Misleading personal representation | Never write first-person claims or claim that the owner understands, built, tested, or ran something without owner-provided confirmation. |
| Scope creep | One-repository review only; no multi-project ranking, communications, or background monitoring. |

## Platform choice

**Proposed platform:** a local scripted agent built on the existing Node-based repository stack, with an optional structured-output provider adapter guarded by private configuration.

This path is free to prototype, can inspect local non-secret project files, and naturally supports the strict “do not publish” boundary. It is chosen over a Claude Project because the latter requires a participant-owned account and authentic project configuration evidence; it is chosen over a hosted automation platform because the use case is manual and low-frequency rather than a background workflow.

## Build definition for the next assignment

The build is complete only when the owner can run one explicit command against an allowlisted test repository, receive a structured checklist, observe the safe handling of the six cases above, and confirm that no external publishing or secrets access occurred. Until then, this document is a design artifact only.
