import { mkdir, writeFile } from "node:fs/promises";
import { join, resolve } from "node:path";

const sourceTargets = [
  ["Usage Metering & Billing Engine", "https://raw.githubusercontent.com/iotserver24/flyrank-capstone-metering-billing/main/README.md"],
  ["Structured LLM Triage API", "https://raw.githubusercontent.com/iotserver24/flyrank-be-07-llm/main/README.md"],
  ["SQL-to-PDF Reports", "https://raw.githubusercontent.com/iotserver24/flyrank-be-08-pdf-reports/main/README.md"],
  ["Background Report Job", "https://raw.githubusercontent.com/iotserver24/flyrank-be-06-background-job/main/README.md"],
  ["Decision Desk Workflow", "https://raw.githubusercontent.com/iotserver24/flyrank-be09-decision-flow/main/README.md"]
];

const outputDirectory = resolve("evidence/automation-runs-success");
await mkdir(outputDirectory, { recursive: true });

const results = [];
for (const [sourceName, sourceUrl] of sourceTargets) {
  const started = performance.now();
  const sourceResponse = await fetch(sourceUrl, { signal: AbortSignal.timeout(10_000) });
  if (!sourceResponse.ok) {
    throw new Error(`Source fetch failed for ${sourceName}: ${sourceResponse.status}`);
  }

  const sourceText = await sourceResponse.text();
  const flowResponse = await fetch("http://127.0.0.1:1880/weekly-repository-brief", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({ sourceName, sourceUrl, sourceText })
  });
  const packet = await flowResponse.json();
  const result = {
    sourceName,
    sourceUrl,
    sourceStatus: sourceResponse.status,
    workflowStatus: flowResponse.status,
    elapsedMs: Math.round(performance.now() - started),
    packet
  };
  results.push(result);
  await writeFile(join(outputDirectory, `${sourceName.toLowerCase().replace(/[^a-z0-9]+/g, "-")}.json`), `${JSON.stringify(result, null, 2)}\n`);
}

const summary = {
  executedAt: new Date().toISOString(),
  workflow: "local Node-RED no-code source-packet flow",
  sourceBoundary: "The harness fetched public README text directly because the sandbox blocks the Node-RED HTTP node; the workflow itself received, formatted, labeled for human review, and returned each source packet.",
  results
};

await writeFile(join(outputDirectory, "summary.json"), `${JSON.stringify(summary, null, 2)}\n`);
process.stdout.write(`${JSON.stringify(summary, null, 2)}\n`);
