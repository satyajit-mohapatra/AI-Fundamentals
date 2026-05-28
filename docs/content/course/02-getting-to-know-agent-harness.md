# 02 - Getting To Know Your Agent Harness

Available from May 18, 2026

## 1. Intro

**Duration:** 8-10 minutes

**Outcome:** The learner understands what an agent harness is for and how this module will teach the basic interaction loop across tools.

**Video flow:**

- 0:00-1:00 - Open with the core mental model: an agent harness connects an AI model to a repo, terminal, editor, permissions, and review loop.
- 1:00-3:00 - Explain the difference between chat-based help and repo-aware help.
- 3:00-4:00 - Name supported harness categories: terminal-based agents, CLI agents, IDE agents, hosted agent apps, and other repo-aware tools.
- 4:00-6:00 - Show the basic loop: ask, inspect, approve, run, review, continue.
- 6:00-8:00 - Preview the module topics: session management, terminal prompting, IDE use, time travel, bash commands, and permissions.
- 8:00-10:00 - Set the safety rule: the user remains responsible for final review.

**Demo:** Ask the agent to summarize the current repo without making changes.

**Exercise:** Write your first repo-safe prompt: "Inspect this project and tell me how it is organized. Do not edit files."

**Recap:** An agent harness is most useful when it has repo context, explicit boundaries, and a verification path.

## 2. Managing Your Agent Session

**Duration:** 10-13 minutes

**Outcome:** The learner can start, pause, resume, and keep an agent session organized in any harness.

**Video flow:**

- 0:00-1:00 - Explain that a session is a working memory plus tool context, not just a chat window.
- 1:00-3:00 - Show how to start in the correct directory and confirm the repo path.
- 3:00-5:00 - Explain what belongs in session context: current task, constraints, files inspected, decisions, and verification results.
- 5:00-8:00 - Show how to reset direction without losing useful facts: summarize, restate goal, and give the next instruction.
- 8:00-11:00 - Explain when to start a fresh session: wrong repo, polluted context, new unrelated task, or major plan change.
- 11:00-13:00 - Show a clean final session summary.

**Demo:** Start a session, ask for repo orientation, then redirect it to inspect one folder.

**Exercise:** Create a session-start checklist: path, goal, scope, current git state, and first safe prompt.

**Recap:** Session quality affects output quality. Keep context current and task-focused.

## 3. Prompting In The Terminal

**Duration:** 12-15 minutes

**Outcome:** The learner can write terminal prompts that are concrete, bounded, and easy to verify.

**Video flow:**

- 0:00-1:00 - State the lesson: a prompt is a task contract.
- 1:00-4:00 - Teach the four-part prompt: goal, scope, constraints, done condition.
- 4:00-6:00 - Show weak prompts and rewrite them: "fix this" becomes "reproduce the failing test and patch the smallest cause."
- 6:00-9:00 - Explain prompt styles: explore-only, plan-only, edit, review, debug, and verify.
- 9:00-12:00 - Show how to ask for command output interpretation without letting the agent guess.
- 12:00-15:00 - Explain how to stop runaway work: interrupt, narrow scope, and restate the task.

**Demo:** Convert a vague bug request into an agent-ready terminal instruction.

**Exercise:** Rewrite three prompts using goal, scope, constraints, and done condition.

**Recap:** Good prompts reduce agent guessing and make review easier.

## 4. Your Agent Harness And Your IDE

**Duration:** 10-12 minutes

**Outcome:** The learner understands how to combine an agent harness with editor review and navigation.

**Video flow:**

- 0:00-1:00 - Explain why the IDE still matters: diffs, symbols, navigation, search, and visual review.
- 1:00-3:00 - Show how the agent can point you to files, functions, and call sites.
- 3:00-6:00 - Demonstrate reviewing the agent's edits in the IDE: file tree, diff view, tests, and inline comments.
- 6:00-8:00 - Explain division of labor: let the agent search and patch, use the IDE to inspect and judge.
- 8:00-10:00 - Show a correction loop: user notices a bad edit in the IDE and steers the agent back.
- 10:00-12:00 - Explain why visual inspection catches issues summaries miss.

**Demo:** Ask the agent to identify relevant files, open them in the IDE, and review the diff manually.

**Exercise:** Pick one agent change and inspect it in your IDE before reading the agent summary.

**Recap:** An agent harness accelerates work, but the IDE remains your review surface.

## 5. Going Forwards And Backwards In Time

**Duration:** 10-13 minutes

**Outcome:** The learner can use history, diffs, and checkpoints to move safely through agent work.

**Video flow:**

- 0:00-1:00 - Open with the danger: agent work can move fast enough that you lose track.
- 1:00-3:00 - Explain time travel tools: git status, diffs, commits, branches, editor undo, and session summaries.
- 3:00-6:00 - Show how to inspect what changed after an agent edit.
- 6:00-8:00 - Teach checkpointing: commit or stash known-good states before risky changes.
- 8:00-11:00 - Explain how to go forward: accept a small change, verify, then continue.
- 11:00-13:00 - Explain how to go backward safely: prefer reviewed diffs and explicit reversions over panic resets.

**Demo:** Make a small change, inspect the diff, then create a checkpoint commit or note.

**Exercise:** Write your own checkpoint rule: when will you commit, stash, or stop for review?

**Recap:** If you can inspect and recover, you can let agents move faster.

## 6. Running Bash Commands

**Duration:** 12-15 minutes

**Outcome:** The learner can ask the agent to run shell commands safely and interpret the results.

**Video flow:**

- 0:00-1:00 - Explain that command execution is powerful because it gives evidence, not just guesses.
- 1:00-3:00 - Show safe command categories: `ls`, `rg`, tests, linting, typechecking, and local app startup.
- 3:00-6:00 - Explain risky command categories: deletion, reset, network installs, migrations, production commands, and secrets.
- 6:00-9:00 - Demonstrate asking the agent to run a read-only command and summarize the result.
- 9:00-12:00 - Demonstrate a failing command: ask the agent to diagnose from output, not invent a cause.
- 12:00-15:00 - Teach the rule: commands should either gather context, verify behavior, or perform a deliberate edit step.

**Demo:** Ask the agent to run a targeted test, then explain pass/fail output.

**Exercise:** List five commands you are comfortable letting the agent run and five that require approval.

**Recap:** Bash commands turn agent work into evidence, but permissions and intent matter.

## 7. Permissions

**Duration:** 10-13 minutes

**Outcome:** The learner understands how permissions protect the workspace and when to grant or deny them.

**Video flow:**

- 0:00-1:00 - Explain the key idea: permissions are workflow design, not annoyance.
- 1:00-3:00 - Define common permission categories: file read, file write, shell command, network access, browser, and external services.
- 3:00-5:00 - Show examples of low-risk and high-risk actions.
- 5:00-8:00 - Explain how to evaluate a permission request: what will it touch, why is it needed, what could go wrong, and is there a safer alternative?
- 8:00-11:00 - Demonstrate denying a broad request and approving a narrow one.
- 11:00-13:00 - Create a personal permission policy for the course.

**Demo:** Compare "run all setup commands" with "run the test command listed in package.json."

**Exercise:** Write approval rules for network access, destructive commands, migrations, and broad file edits.

**Recap:** Good permissions let the agent work while keeping irreversible decisions with the human.
