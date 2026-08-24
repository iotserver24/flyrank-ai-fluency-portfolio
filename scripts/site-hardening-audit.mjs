const targets = [
  "https://iotserver24.github.io/flyrank-ai-fluency-portfolio/",
  "https://github.com/iotserver24/flyrank-capstone-metering-billing",
  "https://github.com/iotserver24/flyrank-be-07-llm",
  "https://github.com/iotserver24/flyrank-be-08-pdf-reports",
  "https://github.com/iotserver24/flyrank-be09-decision-flow",
  "https://github.com/iotserver24/flyrank-be-06-background-job"
];

async function inspect(url) {
  const started = performance.now();
  try {
    const response = await fetch(url, { redirect: "manual", signal: AbortSignal.timeout(10_000) });
    return {
      url,
      status: response.status,
      ok: response.status >= 200 && response.status < 400,
      location: response.headers.get("location"),
      elapsedMs: Math.round(performance.now() - started)
    };
  } catch (error) {
    return { url, status: null, ok: false, error: error.message, elapsedMs: Math.round(performance.now() - started) };
  }
}

const checks = await Promise.all(targets.map(inspect));
const output = {
  audit: "Portfolio hardening network checks",
  executedAt: new Date().toISOString(),
  mode: "read-only HTTP availability checks; not a speed benchmark, search-index proof, device test, or human review",
  checks,
  knownLimitations: [
    "The portfolio deliberately has no form, data capture, or duplicate-submission path to test.",
    "No independent device/browser matrix or human hardening review is included in this automated audit.",
    "Search indexing and social-card rendering depend on external crawlers and were not claimed from this check.",
    "An OG image is not provided; text social metadata is present."
  ]
};

process.stdout.write(`${JSON.stringify(output, null, 2)}\n`);
