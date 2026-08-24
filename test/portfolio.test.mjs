import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const page = await readFile(new URL("../pages/index.vue", import.meta.url), "utf8");
const config = await readFile(new URL("../nuxt.config.ts", import.meta.url), "utf8");
const contentMap = await readFile(new URL("../docs/week-03-content-map.md", import.meta.url), "utf8");
const stackRationale = await readFile(new URL("../docs/week-04-stack-rationale-review-draft.md", import.meta.url), "utf8");

test("portfolio links to verified public backend repositories", () => {
  for (const repository of [
    "flyrank-capstone-metering-billing",
    "flyrank-be-07-llm",
    "flyrank-be-08-pdf-reports",
    "flyrank-be09-decision-flow",
    "flyrank-be-06-background-job"
  ]) {
    assert.match(page, new RegExp(`https://github\\.com/iotserver24/${repository}`));
  }
});

test("portfolio discloses provider-evidence limits rather than claiming a live Stripe integration", () => {
  assert.match(page, /no real Stripe Checkout or provider webhook is claimed/i);
  assert.doesNotMatch(page, /live Stripe Checkout completed/i);
});

test("portfolio includes an accessible interactive project filter and deployment configuration", () => {
  assert.match(page, /aria-label="Filter selected work"/);
  assert.match(page, /activeFilter/);
  assert.match(config, /github_pages/);
});

test("Week 3 content map preserves a concise claim, CTA ladder, and explicit proof gaps", () => {
  assert.match(contentMap, /I build small, testable systems that make AI work accountable/);
  assert.match(contentMap, /Visitor action and CTA ladder/);
  assert.match(contentMap, /Still to gather before making broader claims/);
  assert.match(contentMap, /Cannot be fabricated/);
});

test("Week 4 stack analysis retains three options and a participant-attestation boundary", () => {
  assert.match(stackRationale, /Plain HTML and CSS/);
  assert.match(stackRationale, /Nuxt 3 static site/);
  assert.match(stackRationale, /Nuxt 3 with a server and database/);
  assert.match(stackRationale, /Attestation boundary/);
  assert.match(stackRationale, /not yet/i);
});
