# Tool-Agnostic Agent Harness Guide

This course is designed to work with any serious AI coding harness or agent environment.

Examples include terminal-based agents, CLI agents, IDE agents, hosted agent apps, and local or hosted runners with terminal, file, and review capabilities. Codex, Claude Code, OpenCode/opencode, GitHub Copilot CLI or agent mode, Cursor, Windsurf, and similar tools are all valid choices if you can translate the workflow into the tool's interface.

The course uses **agent harness** as the neutral term for the tool that connects an LLM to a codebase, terminal, editor, browser, issue tracker, or automation environment.

## What Every Harness Needs To Support

The exact commands and UI will differ, but the workflow expects the tool to support most of these capabilities:

- Read files in a local repo
- Search the codebase
- Propose edits
- Apply edits or generate patches
- Run shell commands or ask the user to run them
- Show diffs or changed files
- Ask for permission before risky actions
- Preserve session context or produce handoff summaries

If a tool lacks one capability, adapt the workflow:

- If it cannot run commands, ask it to propose commands and run them yourself.
- If it cannot edit files, ask it for patches or file-level instructions.
- If it cannot inspect the whole repo, give it selected files and keep the task smaller.
- If it lacks permission controls, enforce boundaries through branches, sandboxes, and human review.

## Tool Translation Table

| Course term | Harness-neutral meaning | Example translations |
|---|---|---|
| Agent harness | The tool session that connects an LLM to a repo and workflow | Codex thread, Claude Code session, OpenCode session, Copilot agent session, IDE agent chat |
| Session context | The working conversation plus selected files, repo state, and prior decisions | Thread history, terminal session, selected IDE files, issue context, pasted command output |
| Tool permission | The boundary between what the agent may do directly and what needs approval | Sandbox approval, permission prompt, configured command policy, IDE confirmation, manual human gate |
| Read-only inspection | Ask for analysis without file edits or side effects | "Inspect this repo. Do not edit files." |
| Apply change | The mechanism for turning an agent suggestion into a diff | Direct edit, patch, suggested change, IDE apply action, copied patch |
| Verification | Evidence that the work actually behaves as expected | Tests, lint, typecheck, browser check, manual QA, command output |
| Repo instructions | Durable project guidance the harness can read or that you paste at session start | `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`, opencode config, IDE custom instructions |

## Course Rule

When a lesson says "ask the agent," translate that into your chosen tool:

```text
Inspect this repo and tell me how it is organized. Do not edit files.
```

That prompt works across tools because it states:

- Goal: inspect the repo
- Scope: project organization
- Constraint: do not edit files
- Output: explain the structure

## Harness-Neutral Prompt Template

```text
Goal: <what I want done>
Scope: <files, folders, feature, issue, or module>
Constraints: <what must not change, permissions, risk boundaries>
Process: <inspect first, plan briefly, then act only if allowed>
Verification: <tests, lint, typecheck, manual check, or evidence>
Output: <files changed, checks run, risks, next step>
```

## Harness-Neutral Safety Policy

Use these rules regardless of tool:

- Start read-only in unfamiliar repos.
- Make the current repo, branch, and task visible.
- Ask before broad edits, migrations, destructive commands, network installs, or external API calls.
- Prefer small, reversible changes.
- Review diffs before trusting summaries.
- Treat tool memory as helpful but stale until verified.
- Require evidence before accepting work as complete.

## How To Adapt CourseForge Tasks

Every CourseForge task can be run in any harness:

- If the harness can inspect, edit, and run checks, give it a bounded task envelope and require a final evidence report.
- If the harness can inspect and suggest but cannot edit, ask for a patch or file-level instructions, then apply and verify yourself.
- If the harness is IDE-centered, use file selection, inline diffs, and symbol navigation as the control surface.
- If the harness has weak permission controls, use branches, sandboxes, small tasks, and manual gates.

The important part is not the button or command. The important part is the loop:

```text
Shape -> Inspect -> Plan -> Execute -> Verify -> Review -> Handoff
```
