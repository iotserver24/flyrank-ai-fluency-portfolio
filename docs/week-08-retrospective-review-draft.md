# Week 8: Retrospective — Review Draft

> **Required personal revision:** The narrative below is an AI-assisted draft assembled from public repository evidence. It cannot be submitted as the participant’s own reflection until the participant rewrites it in their own words, removes anything they cannot personally affirm, and adds genuine hours and final-review evidence. It does not claim that the portal has accepted the work.

## Draft for participant review (approximately 670 words)

At the start of this internship, the useful goal was not to collect a long list of AI buzzwords. It was to ship small backend systems where I could point to the code, run the tests, and explain what was genuinely verified. The work began with a CRUD API and then moved through persistence, authentication boundaries, background jobs, scraping, structured LLM output, PDF reports, and an event-driven decision flow. The largest integrated piece became the usage-metering and billing capstone.

The most important change in the work was moving from “does the feature appear to work?” to “what evidence supports this exact claim?” In the capstone, for example, an idempotent request, a quota boundary, tenant-key isolation, and integer money arithmetic were represented as deterministic tests and local API evidence. The Stripe adapter was also implemented, but a real Checkout Session was not claimed because participant-owned test credentials were never configured. That distinction was uncomfortable at first because it meant writing down gaps instead of smoothing them over, but it made the project more credible and easier to review.

The portfolio work followed the same pattern. The public site does not use generated images as stand-ins for engineering evidence. It links to repositories, says what each project does, and explicitly describes where a test fixture or a local run ends. The site is deployed on GitHub Pages and the source includes a filter interaction, metadata, and a hardening audit. However, a real mobile-device run, a personal profile link, a human critique, and a final review are separate things that still need genuine evidence. The same is true of the AI Fluency exercises: a draft or implementation can be valuable preparation, but it is not a substitute for a personal screenshot, a real calendar reminder, or a recorded demo.

Three transferable lessons stand out. First, **scope is a technical skill**. A small contract with clear inputs, status codes, and failure behavior is more useful than a broad product promise that cannot be tested. The metering service deliberately starts with a simulated billable endpoint and a local database because that makes idempotency and quota behavior visible before adding a production billing integration. Second, **evidence is part of the feature**. A test, a reproducible command, a README limitation, and a public commit all reduce ambiguity for the next reviewer. Third, **automation needs boundaries**. The background job and the evidence-scout prototype show that an automated path should state what it can read, what it will not change, what it retries, and when it needs a human decision.

The next meaningful project is a PostgreSQL operational-readiness case study for the metering service. The point would not be to label an unfinished migration as production-ready. It would be to map the existing schema, define a safe migration and transaction strategy, add tests, and publish the remaining limits. That is a realistic continuation because it grows a real public system instead of inventing a new one just to make the portfolio look larger.

For the person I was in Week 1, the short version is this: build a small thing, make the expected and failure paths visible, and distinguish what you know from what you assume. Use AI as a drafting and reasoning partner, but keep an evidence trail and personally check the parts that need your judgment. A reviewer should be able to follow the link, reproduce the result, and see where the boundary is without trusting a marketing claim.

## Participant completion checklist

- [ ] Rewrite the draft in first-person only where each statement is personally true.
- [ ] Add a genuine hours record in the portal; do not estimate or reconstruct hours as if observed.
- [ ] Add the real demo video and build-in-public post URL, if recorded/published.
- [ ] Submit to the human final-review checkpoint and record the actual outcome.
- [ ] Update the index only after the portal persistence issue is resolved.
