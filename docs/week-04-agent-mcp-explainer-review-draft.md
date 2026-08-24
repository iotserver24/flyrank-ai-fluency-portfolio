# Week 4: Agent Concepts and MCP Basics — Review Draft

> **Participant evidence boundary:** This is an AI-assisted technical study draft grounded in the linked Anthropic and MCP documentation. It is not written evidence that the participant read the sources in full, understands them independently, configured a personal MCP client, or ran three tool tasks. The participant must review and rewrite it in their own words and attach genuine tool-call screenshots before it can satisfy the assignment.

## Workflow versus agent

A **workflow** is a path decided in advance by the developer. The software follows the same steps in the same order: receive input, call a specific tool, format the result, and return it. An LLM may appear inside a workflow, but it does not make the whole system an agent if the program still decides what happens next every time.

An **agent** gives a model more control over the process. The model can inspect the current situation, choose an appropriate tool, use the result as new information, and decide whether it needs another step or needs to stop. That flexibility is useful when the number or type of steps cannot be predicted in advance, but it also brings more cost, latency, and ways to make mistakes. The practical lesson from Anthropic’s engineering guidance is to start with the simplest approach that works and add agentic autonomy only when it creates a measurable benefit.[^anthropic]

The Week 4 Repository Brief pipeline is a **workflow**, not an agent. Its visual Node-RED version has a fixed route:

```text
webhook input → build a public-source URL → HTTP request → attach a human-review note → response
```

The flow never asks a model to decide which repository to inspect, which tool to call, whether the source is sufficient, or how many additional steps to take. That makes it predictable and easier to audit. It also means that calling it an autonomous research agent would be misleading.

## What MCP is

The Model Context Protocol (MCP) is an open standard for connecting AI applications to external systems. A useful analogy is a common connector: an AI client can use the same kind of interface to reach data sources, tools, and reusable workflows rather than needing a different one-off integration for every service.[^mcp]

Three practical MCP concepts are:

| Concept | Plain-language meaning | Evidence Scout example |
| --- | --- | --- |
| **Tool** | An action the client can request with defined inputs and outputs. | `inspect_project(path)` reads an allowlisted local project and returns a source-linked inventory. |
| **Resource** | A piece of context the client can read. | A public repository README, local `EVIDENCE.md`, or a selected non-secret test file. |
| **Prompt** | A reusable instruction pattern for how the client should perform a task. | “Separate local test evidence from unverified provider claims and cite each source path.” |

MCP does not automatically make a system safe or accurate. A tool needs clear descriptions, narrow parameters, example inputs, and limits. If a client has a tool that can edit a file or send a message, the tool definition should make approval requirements obvious. The same applies to an agent: it needs boundaries before it receives useful capabilities.

## What the current workflow would need to become an agent

The existing Repository Brief workflow could become a narrowly scoped research agent only if it gained a model-driven decision loop. For example, it could receive a portfolio question, decide whether the available evidence is sufficient, choose one allowed read-only repository tool, inspect the returned files, and either produce a cited evidence checklist or stop and ask the owner for a missing source.

That upgrade should keep strict guardrails: one repository at a time; a small maximum number of tool calls; no secret files; no publish, submit, deploy, purchase, or account tools; and a requirement to cite source paths. The local `Portfolio Evidence Scout` prototype already demonstrates the safer part of this plan: it reads an allowlisted project path, inventories non-secret evidence, and labels unknowns. It remains deterministic because no privately configured model is available. That is an intentional implementation boundary, not evidence of an MCP-connected autonomous agent.

## Required participant MCP evidence

This assignment specifically requires a personal MCP or connector setup and three tasks where the client visibly used tools. Those screenshots cannot be recreated from this study draft. A complete submission would need the participant to connect an MCP client they control, run three genuine tool calls (for example, reading a selected local file, listing a permitted project directory, and querying an approved public service), and include unedited evidence that shows the tool use.

[^anthropic]: [Anthropic Engineering, “Building effective agents”](https://www.anthropic.com/engineering/building-effective-agents), accessed 2026-08-24.
[^mcp]: [Model Context Protocol documentation, “What is MCP?”](https://modelcontextprotocol.io/docs/getting-started/intro), accessed 2026-08-24.
