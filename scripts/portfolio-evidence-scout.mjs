import { access, readFile, readdir, stat } from "node:fs/promises";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath, pathToFileURL } from "node:url";

const SAFE_ROOT = /^flyrank-(be|capstone|ai-fluency)-[a-z0-9-]+$/;
const ROOT_FILES = ["README.md", "EVIDENCE.md", "BUILDLOG.md", "todo.md", "package.json"];
const SAFE_DIRECTORIES = ["test", "tests", "docs", "evidence"];
const PROTECTED_NAME = /(^|\/)(\.env(?:\.|$)|.*(?:secret|token|password|credential|key).*)(\/|$)/i;
const SIGNAL = /(test|pass|fail|local|verified|unconfigured|not configured|limitation|blocked|manual|provider|webhook|deployment|evidence)/i;

export function assertAllowedRoot(rootPath) {
  const resolved = resolve(rootPath);
  const name = resolved.split("/").at(-1) || "";
  if (!SAFE_ROOT.test(name)) {
    throw new Error("PATH_NOT_ALLOWLISTED: select a local flyrank-be-*, flyrank-capstone-*, or flyrank-ai-fluency-* project directory.");
  }
  return resolved;
}

async function existingFiles(root) {
  const paths = [];
  for (const filename of ROOT_FILES) {
    const candidate = join(root, filename);
    try {
      await access(candidate);
      paths.push(candidate);
    } catch {}
  }
  for (const directory of SAFE_DIRECTORIES) {
    const folder = join(root, directory);
    try {
      const entries = await readdir(folder, { withFileTypes: true });
      for (const entry of entries.slice(0, 20)) {
        if (entry.isFile()) paths.push(join(folder, entry.name));
      }
    } catch {}
  }
  return paths;
}

function sourceSnippets(text) {
  return text
    .split(/\r?\n/)
    .map((line, index) => ({ line: index + 1, text: line.trim() }))
    .filter((entry) => entry.text.length > 0 && SIGNAL.test(entry.text))
    .slice(0, 8);
}

function classifySnippet(text) {
  if (/(unconfigured|not configured|blocked|manual|limitation|not claimed|pending)/i.test(text)) return "needs_owner_confirmation";
  if (/(pass|test|verified|local evidence|local run)/i.test(text)) return "source_mentions_local_evidence";
  return "source_context";
}

export async function inspectProject(rootPath) {
  const root = assertAllowedRoot(rootPath);
  const info = await stat(root);
  if (!info.isDirectory()) throw new Error("PATH_NOT_DIRECTORY: the selected allowlisted path is not a directory.");

  const files = await existingFiles(root);
  const sources = [];
  for (const file of files) {
    const rel = relative(root, file);
    if (PROTECTED_NAME.test(rel)) continue;
    const text = await readFile(file, "utf8");
    sources.push({
      path: rel,
      snippets: sourceSnippets(text).map((snippet) => ({
        ...snippet,
        classification: classifySnippet(snippet.text)
      }))
    });
  }

  const snippets = sources.flatMap((source) => source.snippets.map((snippet) => ({ path: source.path, ...snippet })));
  return {
    agent: "Portfolio Evidence Scout",
    mode: "deterministic, read-only source inventory — not a live LLM result",
    reviewedRoot: root,
    sourceFiles: sources.map((source) => source.path),
    evidenceSnippets: snippets,
    protectedFilePolicy: "Only named documentation, package, test, and evidence files are read. Environment, credential, token, password, and key files are excluded.",
    nextHumanChecks: [
      "Open each cited source before reusing its language in a public portfolio or portal form.",
      "Confirm whether any external provider, deployment, payment, or webhook claim has real evidence beyond local tests or fixtures.",
      "Approve any wording before publishing or submitting; this agent has no write, publish, deployment, payment, or account action."
    ]
  };
}

async function main() {
  const args = process.argv.slice(2);
  const pathFlag = args.indexOf("--path");
  if (pathFlag === -1 || !args[pathFlag + 1]) {
    throw new Error("USAGE: pnpm agent:scout -- --path /absolute/path/to/allowlisted-project");
  }
  const report = await inspectProject(args[pathFlag + 1]);
  process.stdout.write(`${JSON.stringify(report, null, 2)}\n`);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main().catch((error) => {
    process.stderr.write(`${error.message}\n`);
    process.exitCode = 1;
  });
}
