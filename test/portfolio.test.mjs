import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";

const page = await readFile(new URL("../pages/index.vue", import.meta.url), "utf8");
const config = await readFile(new URL("../nuxt.config.ts", import.meta.url), "utf8");
const contentMap = await readFile(new URL("../docs/week-03-content-map.md", import.meta.url), "utf8");
const stackRationale = await readFile(new URL("../docs/week-04-stack-rationale-review-draft.md", import.meta.url), "utf8");
const deploymentExplanation = await readFile(new URL("../docs/week-05-nuxt-deployment-explanation-review-draft.md", import.meta.url), "utf8");
const agentDesign = await readFile(new URL("../docs/week-05-personal-agent-design-review-draft.md", import.meta.url), "utf8");
const projectFilterFeature = await readFile(new URL("../docs/week-06-project-filter-feature-review-draft.md", import.meta.url), "utf8");
const hardeningAudit = await readFile(new URL("../docs/week-07-hardening-audit.md", import.meta.url), "utf8");
const nuxtConfig = await readFile(new URL("../nuxt.config.ts", import.meta.url), "utf8");
const agentMcpExplainer = await readFile(new URL("../docs/week-04-agent-mcp-explainer-review-draft.md", import.meta.url), "utf8");

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

test("Week 5 explanation refers to the real static build and retains its review boundary", () => {
  assert.match(deploymentExplanation, /pnpm run generate/);
  assert.match(deploymentExplanation, /\.github\/workflows\/deploy\.yml/);
  assert.match(deploymentExplanation, /Participant review required/);
  assert.match(deploymentExplanation, /not.*the same as a verified working public portfolio URL/i);
});

test("Week 5 personal-agent design keeps one narrow job, pre-build evals, and irreversible-action guardrails", () => {
  assert.match(agentDesign, /One job/);
  assert.match(agentDesign, /Evaluation cases defined before build/);
  assert.match(agentDesign, /Unsafe requested action/);
  assert.match(agentDesign, /no publish, submit, deployment, or social-post tool/i);
  assert.match(agentDesign, /Participant review required/);
});

test("Week 6 feature draft documents one real browser-side project filter and its evidence boundary", () => {
  assert.match(projectFilterFeature, /Exactly one feature/);
  assert.match(projectFilterFeature, /activeFilter/);
  assert.match(projectFilterFeature, /does not need a backend/i);
  assert.match(projectFilterFeature, /Participant review required/);
  assert.match(page, /activeFilter/);
});

test("Week 7 hardening records metadata fixes and does not erase known review limits", () => {
  assert.match(nuxtConfig, /og:title/);
  assert.match(nuxtConfig, /twitter:card/);
  assert.match(nuxtConfig, /canonical/);
  assert.match(hardeningAudit, /Fix-now changes applied/);
  assert.match(hardeningAudit, /No hardening review from a mentor or peer/);
  assert.match(hardeningAudit, /should not be submitted as a completed Week 7 checkpoint/i);
});

test("Week 4 explainer accurately distinguishes a fixed workflow from an agent and leaves MCP screenshots unclaimed", () => {
  assert.match(agentMcpExplainer, /workflow.*decided in advance/i);
  assert.match(agentMcpExplainer, /model.*control over the process/i);
  assert.match(agentMcpExplainer, /is a \*\*workflow\*\*, not an agent/i);
  assert.match(agentMcpExplainer, /Required participant MCP evidence/);
  assert.match(agentMcpExplainer, /cannot be recreated from this study draft/i);
});
