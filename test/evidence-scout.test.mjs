import test from "node:test";
import assert from "node:assert/strict";
import { mkdtemp, mkdir, writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { assertAllowedRoot, inspectProject } from "../scripts/portfolio-evidence-scout.mjs";

test("evidence scout rejects project paths outside the explicit FlyRank allowlist", () => {
  assert.throws(() => assertAllowedRoot("/tmp/not-an-allowed-project"), /PATH_NOT_ALLOWLISTED/);
});

test("evidence scout inventories non-secret evidence and never reads protected files", async () => {
  const parent = await mkdtemp(join(tmpdir(), "scout-fixture-"));
  const root = join(parent, "flyrank-be-evidence-fixture");
  await mkdir(root);
  await writeFile(join(root, "README.md"), "# Demo\n\n9 tests passed locally.\nProvider not configured.\n");
  await writeFile(join(root, ".env"), "SECRET_VALUE=must-not-be-read\n");

  const report = await inspectProject(root);
  assert.deepEqual(report.sourceFiles, ["README.md"]);
  assert.match(JSON.stringify(report), /9 tests passed locally/);
  assert.doesNotMatch(JSON.stringify(report), /SECRET_VALUE/);
  assert.equal(report.evidenceSnippets[1].classification, "needs_owner_confirmation");
});
