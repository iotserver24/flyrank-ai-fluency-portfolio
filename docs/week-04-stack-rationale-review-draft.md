# Week 4: Three Roads — Stack Rationale Review Draft

> **Attestation boundary:** This is an AI-assisted planning draft based only on supplied preferences and public project needs. It is not represented as the participant’s independently affirmed first-person decision. The participant must review, revise, and affirm the decision paragraph before it can honestly satisfy the brief’s “in your own words” requirement.

## Constraints used for the comparison

| Constraint | Current evidence |
| --- | --- |
| Cost | The first portfolio release should be free to build and host. |
| Honest current scope | It needs a concise proof statement, long-form reading, project cases, public repository links, and a simple next step. |
| Display needs | The main content is text, links, and selected implementation evidence; no image gallery, account system, payment flow, or dashboard is currently required. |
| Dynamic requirement | **Not yet.** The first version has no authenticated user flow, private content, or user-managed data. |
| Stated preference | Nuxt.js is preferred for future frontend work. |

## Three stack options

| Option | How it would be built and hosted | Backend now? | Real trade-off |
| --- | --- | --- | --- |
| 1. Plain HTML and CSS | A few static pages deployed with GitHub Pages. | No. | The fastest and least complex option, but reusable structured case-study updates become more manual and it does not match the stated Nuxt preference. |
| 2. Nuxt 3 static site | Nuxt 3 with static generation and a free static host such as GitHub Pages. | No. | Keeps the first release content-only while enabling reusable components and familiar routing, but requires build and deployment configuration. |
| 3. Nuxt 3 with a server and database | Nuxt server routes plus a hosted database and authentication boundaries. | Yes. | Supports future contact flows or private content, but introduces credentials, operations, security work, and maintenance before a genuine dynamic need exists. |

## Pressure test

| Question | Plain HTML and CSS | Nuxt 3 static site | Nuxt 3 plus server/database |
| --- | --- | --- | --- |
| What breaks or becomes difficult? | Reusable layouts and structured updates become more manual. | The portfolio is still static; dynamic features must wait for a real reason. | More failure modes, credentials, database responsibility, and deployment maintenance. |
| What must be maintained? | Hand-edited pages and links. | Nuxt dependencies, the static build, and content components. | Everything in the static option plus server, database, security, backups, and deployment operations. |
| Can it be finished in two weeks? | Yes. | Yes, for a focused content-first scope. | Unnecessarily risky for the stated scope. |
| Does it show the work well? | Yes for a small page, less convenient for evolving case studies. | Yes: supports long-form case notes, evidence boundaries, and repository links. | Yes, but provides no immediate display benefit over static generation. |

## Proposed decision for participant review

**Proposed stack:** Nuxt 3 with static generation and free static hosting.

The rationale to review is: this option keeps the first release free and content-focused, matches the stated frontend preference, and gives the public backend repositories a clean, reusable presentation layer. It is maintainable for a first release because there is no server, user account, or database to operate. The backend answer is **not yet**: add one only if a genuine future requirement appears, such as a contact workflow, private content, or dynamically maintained data.

The public implementation at [flyrank-ai-fluency-portfolio](https://github.com/iotserver24/flyrank-ai-fluency-portfolio) demonstrates the selected static Nuxt path. Its GitHub Pages workflow builds successfully, while the user account’s existing custom-domain setting currently redirects externally; this is a hosting configuration blocker, not evidence that the static architecture needs a backend.

## Participant review checklist

- [ ] Confirm the claimed preference for Nuxt matches the participant’s current choice.
- [ ] Rewrite or affirm the decision paragraph in the participant’s own words.
- [ ] Confirm that “not yet” is the right backend decision for the portfolio.
- [ ] Submit only after the above statements are personally reviewed.
