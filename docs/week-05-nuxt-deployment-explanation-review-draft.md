# Week 5: Explain It Like You Built It — Review Draft

> **Participant review required:** This draft explains a real part of the public Nuxt portfolio repository, but it cannot prove that the participant personally understands or can teach it. Read it, correct it in your own words, and affirm it before treating it as the assignment deliverable.

## The real build piece: turning Nuxt pages into a static website

The portfolio starts as Vue files, such as `pages/index.vue`. Those files describe what the page should show: the heading, project cards, buttons, and filter behavior. Nuxt reads that code and turns it into normal website files that a browser can load.

When `pnpm run generate` runs, Nuxt builds the JavaScript and CSS, then pre-renders the portfolio page into static files. “Static” means the visitor does not need a server-side app to assemble the page every time. The host can send the already-prepared files directly.

The repository has a GitHub Actions workflow in `.github/workflows/deploy.yml`. On a push to `main`, it installs the project dependencies, runs the same static-generation command, packages the generated `.output/public` folder, and asks GitHub Pages to deploy that package. This makes the source code and deployment steps repeatable: a change is not live just because it is edited locally; it has to be committed, pushed, built, and deployed successfully.

The site has one small interactive part: the project filters. The static page loads first, then the browser runs the filter code to show either all projects, backend projects, or workflow projects. That interaction does not need a database because the project list is already in the page source.

## What I would verify in my own words

Before submitting, the participant should be able to answer these without reading this draft:

1. Why can this portfolio work without a backend today?
2. What does `pnpm run generate` produce?
3. What does the GitHub Actions workflow do after a push?
4. Why does the project filter work without storing anything in a database?

## Boundary

The GitHub Actions workflow did complete successfully for this repository. However, the account-level Pages custom-domain setting redirects externally, so a passing build is **not** the same as a verified working public portfolio URL. That distinction is intentional and should be retained in any explanation.
