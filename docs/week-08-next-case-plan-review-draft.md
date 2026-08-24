# Week 8: The Plan to Keep Building — Review Draft

> **Participant action boundary:** This guide gives a concrete maintenance path for the public portfolio. It does not prove that a personal calendar reminder was set or that a personal Claude Project exists and was preserved. Those are actions the participant must perform and evidence independently.

## Named next piece of work

**PostgreSQL migration and operational-readiness case study for the Usage Metering & Billing Engine.**

This is a real, bounded next step for the existing public capstone. The current capstone intentionally uses SQLite for a reproducible local demonstration. The next case should document how the storage boundary would be migrated to PostgreSQL, including an explicit migration plan, connection/transaction considerations, a test strategy, and any deliberately deferred production concerns. It should not claim a production deployment or a payment-provider result unless that evidence exists.

## Exactly where the next case goes

The case belongs in the public portfolio repository and is linked from the existing “Selected systems” section.

```text
flyrank-ai-fluency-portfolio/
├── docs/
│   └── cases/
│       └── metering-postgres-readiness.md      ← new source of truth
├── pages/
│   └── index.vue                               ← add a project/card link
└── test/
    └── portfolio.test.mjs                      ← verify public source and honest evidence boundary
```

## How to add the case

1. **Start with the problem.** State the actual limitation: the capstone deliberately uses SQLite for local reproducibility, while a service that expects concurrent production traffic needs a reviewed database migration plan.
2. **State what was done.** Describe only real work: schema mapping, migration sequence, transaction concerns, test changes, and any changes actually committed to the capstone repository.
3. **State what came of it.** Link the public commit, tests, and evidence. If PostgreSQL was not launched or load-tested, say that directly instead of implying it.
4. **Add a portfolio card.** Add the case title, a one-sentence technical outcome, a repository or case-study link, and a proof sentence that differentiates verified tests from unrun production steps.
5. **Update the test.** Add a deterministic assertion that the new public link and its evidence-boundary text remain present.
6. **Run the release checks.** Run `pnpm test`, `pnpm run check`, and `pnpm run generate`; commit and let the GitHub Pages workflow deploy.
7. **Review it as a visitor.** Open the public URL in a fresh logged-out browser context, check the link, and correct any misleading wording before sharing.

## Reusable three-beat case template

```markdown
# [Case title]

## Problem
What real engineering constraint or user need existed?

## What I did
What implementation, decision, test, or review was actually completed?

## What came of it
What public proof exists? What is still unverified or intentionally deferred?
```

## Required personal follow-through

- [ ] Create a genuine calendar/reminder entry under the participant’s own account, choosing a date and cadence they intend to honor. Attach real evidence only after it exists.
- [ ] Preserve or create a participant-owned Claude Project only if they choose to use Claude; add the actual approved instructions and screenshot evidence rather than a substitute claim.
- [ ] Rewrite this plan in the participant’s own words before presenting it as a personal commitment.
