# AI Fluency Portfolio

A Nuxt 3 static portfolio that presents actual public Backend AI Engineering repositories while preserving their evidence boundaries. It was created as a portfolio artifact for the FLYRANK AI Fluency weekly sequence.

## Scope

The portfolio links to verified repositories for the metering/billing capstone, structured LLM triage API, SQL-to-PDF reports, background job, and decision workflow. It includes an interactive project filter and a copy-URL action. It does **not** claim a real Stripe Checkout Session, live provider execution, a personal Claude Project, an external human critique, a phone-device opening, or a custom-domain deployment unless separate evidence exists.

## Stack choice

The repository uses Nuxt 3 static generation and a GitHub Pages workflow. This matches the participant's stated Nuxt preference while avoiding an unnecessary backend for a content-only first release. The planning draft is maintained outside this repository at `flyrank_three_roads_stack_rationale_draft.md` until the participant reviews its first-person wording.

## Local checks

```bash
npm install
npm test
npm run check
npm run generate
```

## Deployment

The included GitHub Actions workflow builds a static Nuxt output and deploys it to GitHub Pages once Pages is enabled in repository settings. Enabling public hosting and claiming its URL must be verified separately.

## License

MIT
