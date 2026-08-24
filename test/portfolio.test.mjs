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
const dnsWalkthrough = await readFile(new URL("../docs/week-05-dns-walkthrough-review-draft.md", import.meta.url), "utf8");
const nextCasePlan = await readFile(new URL("../docs/week-08-next-case-plan-review-draft.md", import.meta.url), "utf8");
const deliverablesIndex = await readFile(new URL("../docs/week-08-deliverables-index.md", import.meta.url), "utf8");
const demoScript = await readFile(new URL("../docs/week-08-capstone-demo-script-review-draft.md", import.meta.url), "utf8");
const imageCurationStrategy = await readFile(new URL("../docs/week-03-image-curation-strategy-review-draft.md", import.meta.url), "utf8");
const retrospectiveDraft = await readFile(new URL("../docs/week-08-retrospective-review-draft.md", import.meta.url), "utf8");
const workflowGraph = await readFile(new URL("../automation/weekly-repository-brief.node-red.json", import.meta.url), "utf8");
const workflowHarness = await readFile(new URL("../scripts/run-local-workflow-source-packets.mjs", import.meta.url), "utf8");
const workflowRunSummary = JSON.parse(await readFile(new URL("../evidence/automation-runs-success/summary.json", import.meta.url), "utf8"));
const manualChecklist = await readFile(new URL("../docs/week-08-manual-evidence-and-portal-checklist.md", import.meta.url), "utf8");
const proofStatementDraft = await readFile(new URL("../docs/week-01-proof-statement-review-draft.md", import.meta.url), "utf8");
const framedCasesDraft = await readFile(new URL("../docs/week-02-framed-cases-review-draft.md", import.meta.url), "utf8");
const promptLadderDraft = await readFile(new URL("../docs/week-02-prompt-ladder-review-draft.md", import.meta.url), "utf8");
const identityKitDraft = await readFile(new URL("../docs/week-03-identity-kit-review-draft.md", import.meta.url), "utf8");
const participantEvidenceKit = await readFile(new URL("../docs/participant-evidence-capture-kit.md", import.meta.url), "utf8");
const submissionPacket = await readFile(new URL("../docs/submission-packet-copy-paste.md", import.meta.url), "utf8");

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

test("Week 5 DNS walkthrough explains resolution and CNAMEs while preserving personal launch boundaries", () => {
  assert.match(dnsWalkthrough, /DNS is the internet’s address book/i);
  assert.match(dnsWalkthrough, /CNAME record makes one domain name an alias/i);
  assert.match(dnsWalkthrough, /iotserver24\.github\.io\/flyrank-ai-fluency-portfolio/);
  assert.match(dnsWalkthrough, /Remaining personal launch steps/);
  assert.match(dnsWalkthrough, /official FlyRank completion badge/i);
});

test("Week 8 plan names a concrete next case and preserves real reminder and Claude Project requirements", () => {
  assert.match(nextCasePlan, /PostgreSQL migration and operational-readiness case study/i);
  assert.match(nextCasePlan, /Problem[\s\S]*What I did[\s\S]*What came of it/);
  assert.match(nextCasePlan, /Create a genuine calendar\/reminder entry/i);
  assert.match(nextCasePlan, /participant-owned Claude Project/i);
});

test("Week 8 package index and demo script keep real evidence and video boundaries distinct", () => {
  assert.match(deliverablesIndex, /flyrank-capstone-metering-billing/);
  assert.match(deliverablesIndex, /current `\/intern\/submissions` record still contains only BE-01/i);
  assert.match(demoScript, /Record-it-yourself boundary/);
  assert.match(demoScript, /integer microcents/i);
  assert.match(demoScript, /no real Stripe Checkout Session/i);
});

test("Week 3 image strategy prioritizes real evidence and does not fabricate a photo or image set", () => {
  assert.match(imageCurationStrategy, /not a completed image set/i);
  assert.match(imageCurationStrategy, /real terminal\/API capture/i);
  assert.match(imageCurationStrategy, /do not substitute an AI portrait/i);
  assert.match(imageCurationStrategy, /genuine one-to-two sentence rejection note/i);
});

test("Week 8 retrospective keeps public evidence separate from participant attestation and final review", () => {
  assert.match(retrospectiveDraft, /Required personal revision/);
  assert.match(retrospectiveDraft, /does not claim that the portal has accepted the work/i);
  assert.match(retrospectiveDraft, /Three transferable lessons/);
  assert.match(retrospectiveDraft, /genuine hours record/i);
  assert.match(retrospectiveDraft, /human final-review checkpoint/i);
});

test("Week 4 visual workflow uses a public-source packet with a clear no-code human-review boundary", () => {
  assert.match(workflowGraph, /Format supplied public source packet/);
  assert.match(workflowGraph, /humanReviewRequired/);
  assert.match(workflowHarness, /sourceTargets/);
  assert.match(workflowHarness, /workflowStatus/);
  assert.match(workflowHarness, /sourceBoundary/);
});

test("Week 4 source-packet flow has five captured public-source and visual-workflow successes", () => {
  assert.equal(workflowRunSummary.results.length, 5);
  for (const result of workflowRunSummary.results) {
    assert.equal(result.sourceStatus, 200);
    assert.equal(result.workflowStatus, 200);
    assert.equal(result.packet.humanReviewRequired, true);
    assert.match(result.packet.notice, /does not judge quality/i);
  }
});

test("manual checklist preserves exact portal links, participant-only evidence, and the official BE-01 persistence boundary", () => {
  assert.match(manualChecklist, /CUSTOM-MQKONMK2-B549E9F4/);
  assert.match(manualChecklist, /FL-01/);
  assert.match(manualChecklist, /Only BE-01/i);
  assert.match(manualChecklist, /Participant-only/);
  assert.match(manualChecklist, /FlyRank Support/);
  assert.match(manualChecklist, /no other item may be represented as portal-persisted, accepted, or certificate-eligible/i);
});

test("Week 1–3 public source drafts preserve review and evidence limits", () => {
  assert.match(proofStatementDraft, /Participant review required/);
  assert.match(proofStatementDraft, /not evidence that FlyRank accepted/i);
  assert.match(framedCasesDraft, /not claims of client outcomes/i);
  assert.match(framedCasesDraft, /provider-quality evaluation/i);
  assert.match(promptLadderDraft, /not a screenshot series from a participant-owned Claude Project/i);
  assert.match(promptLadderDraft, /Baseline/);
  assert.match(promptLadderDraft, /Verification requirements/);
  assert.match(identityKitDraft, /not embedded in this public draft/i);
  assert.match(identityKitDraft, /must approve, revise, or reject/i);
});

test("participant evidence kit and submission packet preserve exact form links and blank-evidence boundaries", () => {
  assert.match(participantEvidenceKit, /This kit does not create evidence/i);
  assert.match(participantEvidenceKit, /Do not upload blank templates as if they were completed work/i);
  assert.match(participantEvidenceKit, /3–5 minute/i);
  assert.match(submissionPacket, /CUSTOM-MQYD5DXU-19C5C7D4/);
  assert.match(submissionPacket, /CUSTOM-MQKONMK2-B549E9F4/);
  assert.match(submissionPacket, /participant evidence required/i);
  assert.match(submissionPacket, /Nothing is officially submitted unless it appears there/i);
});
