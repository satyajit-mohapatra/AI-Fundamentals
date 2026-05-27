# 03 - Day 1 Fundamentals: Detailed Video Scripts

Available from June 1, 2026

## 1. The Constraints Of LLMs

**Recording target:** 12-15 minutes, concept lesson with side-by-side prompt comparison.

**Presenter script:**

- **0:00-1:00 - Hook:** "Before we use an AI coding agent well, we need one clean assumption: it can be fluent without being correct."
- **1:00-3:00 - Model constraint:** Explain that an LLM predicts likely text from context. That makes it useful for drafting, searching, and reasoning, but it does not make it a source of truth.
- **3:00-5:00 - Coding failure modes:** Name hallucinated functions, stale library knowledge, wrong file assumptions, broad refactors, and confident summaries that do not match the diff.
- **5:00-8:00 - Evidence gates:** Teach the controls: provide repo context, constrain scope, ask for file evidence, run commands, inspect diffs, and verify behavior.
- **8:00-12:00 - Collaborator model:** "Treat the agent like a fast collaborator inside a control loop. It helps you think and move faster; your workflow decides what is real."
- **12:00-15:00 - Decision rule:** "Do not ask whether the model sounds confident. Ask what evidence supports the claim."

**Screen direction:** Ask a repo question without context, then ask again after inspecting files. Compare the answer quality.

**On-screen text:** "Fluent is not correct. Evidence beats confidence."

**Demo steps:**

1. Ask a vague implementation question.
2. Inspect relevant files.
3. Ask again with file context.
4. Run or show one check that confirms a claim.

**Exercise prompt:** "List three things an agent should verify before changing a real repo."

**Closing recap:** "LLMs are useful because they are fast and flexible. They become reliable when your process forces evidence."

## 2. What Are Subagents

**Recording target:** 10-13 minutes, workflow diagram plus delegation example.

**Presenter script:**

- **0:00-1:00 - Hook:** "A subagent is not a replacement for your judgment. It is a bounded helper with a smaller job."
- **1:00-3:00 - Why use them:** Explain parallel exploration, test inspection, doc review, research, or implementation in a clearly owned area.
- **3:00-5:00 - Good task shape:** A good subagent task is narrow, independent, observable, and has a clear output.
- **5:00-8:00 - Bad delegation:** "Look into this feature" creates overlap and contradictions. "Inspect tests for the billing path and return coverage gaps" is usable.
- **8:00-11:00 - Keep decisions local:** Product judgment, architecture tradeoffs, and cross-cutting decisions should stay in the main thread.
- **11:00-13:00 - Operating rule:** Delegate side work; integrate and decide centrally.

**Screen direction:** Show one large task split into three lanes: code map, tests, docs. Merge findings into one main decision.

**On-screen text:** "Independent. Narrow. Reviewable."

**Demo steps:**

1. Write a broad task.
2. Split into two subagent-safe tasks.
3. Identify one task not safe to delegate.
4. Show a combined final decision.

**Exercise prompt:** "Take one large task and identify two safe subagent tasks plus one task you should keep yourself."

**Closing recap:** "Subagents reduce load when the work can be split cleanly. They do not remove responsibility."

## 3. Codebase Exploration

**Recording target:** 12-15 minutes, terminal and editor walkthrough.

**Presenter script:**

- **0:00-1:00 - Hook:** "Exploration is not delay. It is how the agent avoids touching the wrong part of the repo."
- **1:00-3:00 - Exploration map:** Identify files, entry points, call sites, tests, config, and docs.
- **3:00-6:00 - Search tactics:** Use fast search, file listing, route names, symbol names, test names, and imports.
- **6:00-9:00 - Evidence summary:** Ask the agent to report which files matter, what each one does, and what evidence supports it.
- **9:00-12:00 - Facts versus assumptions:** Require the agent to label uncertainty. If it cannot prove a file matters, it should say so.
- **12:00-15:00 - From map to plan:** Convert the file map into the smallest implementation plan.

**Screen direction:** Terminal search on left, editor file map on right.

**On-screen text:** "Explore before edit. File map before patch."

**Demo steps:**

1. Search for a feature symbol.
2. Open entry point, core logic, and tests.
3. Ask for a file map with evidence.
4. Draft a tiny plan.

**Exercise prompt:** "Pick one feature and create a three-file map: entry point, core logic, tests."

**Closing recap:** "Inspect the shape before you change the shape."

## 4. Build A Feature

**Recording target:** 12-15 minutes, small feature implementation demo.

**Presenter script:**

- **0:00-1:00 - Hook:** "Feature work should be one thin slice, not a whole product area in one pass."
- **1:00-3:00 - Define behavior:** State what the user can do, what is in scope, what is not, and how success is checked.
- **3:00-5:00 - Inspect pattern:** Ask the agent to find how similar behavior is already implemented.
- **5:00-8:00 - Implement narrowly:** Change the smallest useful surface and avoid unrelated cleanup.
- **8:00-11:00 - Verify behavior:** Run a targeted test, lint, typecheck, or manual flow.
- **11:00-15:00 - Review and explain:** Inspect the diff and summarize the behavior change in plain language.

**Screen direction:** Add a small validation rule, CLI flag, UI field, or API response field.

**On-screen text:** "Behavior -> Pattern -> Patch -> Verify -> Review"

**Demo steps:**

1. Write a feature brief.
2. Ask the agent to inspect existing pattern.
3. Apply a small change.
4. Run one check.
5. Review the diff.

**Exercise prompt:** "Write a feature brief with behavior, scope, likely files, and done condition."

**Closing recap:** "A feature is done when the behavior is verified and the diff is understandable."

## 5. Non Determinism

**Recording target:** 10-12 minutes, repeated prompt comparison.

**Presenter script:**

- **0:00-1:00 - Hook:** "If you ask the same model the same thing twice, you may not get the same answer. That is normal."
- **1:00-3:00 - Why it happens:** Explain generation choices, context changes, tool output differences, and different valid paths.
- **3:00-5:00 - Why it matters:** Planning, code style, file selection, naming, and explanations can vary.
- **5:00-8:00 - Controls:** Use tighter prompts, explicit constraints, examples, tests, repo instructions, and stable output formats.
- **8:00-10:00 - Useful variation:** Brainstorming and design alternatives benefit from multiple runs.
- **10:00-12:00 - Dangerous variation:** Migrations, security-sensitive work, production fixes, and broad refactors need stricter boundaries.

**Screen direction:** Run two prompt variants and show different outputs. Then tighten constraints and show convergence.

**On-screen text:** "Do not require identical output. Require bounded, verifiable output."

**Demo steps:**

1. Ask for two approaches.
2. Compare differences.
3. Add constraints.
4. Show a more consistent response.

**Exercise prompt:** "Rewrite a loose prompt so two runs would likely produce the same acceptable output."

**Closing recap:** "Non-determinism is managed with scope, constraints, and verification."

## 6. Showing Context In The Status Line

**Recording target:** 8-10 minutes, short workflow hygiene lesson.

**Presenter script:**

- **0:00-1:00 - Hook:** "Long AI sessions get risky when nobody remembers the repo, branch, task, or mode."
- **1:00-3:00 - Visible context:** Explain repo name, branch, dirty state, current task, permission mode, and environment.
- **3:00-5:00 - Mistakes prevented:** Wrong repo, wrong branch, wrong command, uncommitted changes, or forgotten task scope.
- **5:00-8:00 - Pre-edit habit:** Before major edits, confirm where you are, what you are changing, and how you will verify it.
- **8:00-10:00 - Handoff connection:** Visible context makes compaction and handoff easier.

**Screen direction:** Show two terminals: one ambiguous, one with visible repo/branch/task notes.

**On-screen text:** "Repo. Branch. Task. Mode. Verification."

**Demo steps:**

1. Display current repo and branch.
2. State the active task.
3. Confirm scope before editing.
4. Note the verification command.

**Exercise prompt:** "Write a before-edit status check with repo, branch, scope, and verification plan."

**Closing recap:** "Know where you are before you change anything."

## 7. Why Plan Mode Sucks

**Recording target:** 10-13 minutes, compare generic plan to repo-grounded plan.

**Presenter script:**

- **0:00-1:00 - Hook:** "Planning is useful. Planning in a vacuum creates fake certainty."
- **1:00-3:00 - Failure mode:** Plans written before repo evidence often invent architecture, miss constraints, and overgeneralize.
- **3:00-5:00 - Symptoms:** Generic steps, no file references, no commands, no verification, and no stop conditions.
- **5:00-8:00 - Better loop:** Short plan, inspect, revise, execute one step, verify, then continue.
- **8:00-11:00 - Grounded plans:** Ask for files, commands, risks, and acceptance criteria.
- **11:00-13:00 - Nuance:** Plan-only phases are useful for high-risk work, but they must be evidence-seeking.

**Screen direction:** Show a generic plan first, then inspect files and rewrite it with real file paths and checks.

**On-screen text:** "Do not plan in a vacuum."

**Demo steps:**

1. Generate a generic plan.
2. Inspect relevant files.
3. Rewrite plan using evidence.
4. Add validation and stop conditions.

**Exercise prompt:** "Take a broad task and write a two-step discovery plan before implementation."

**Closing recap:** "Planning works when it stays tied to evidence and execution."

## 8. The Grill Execute Clear Loop

**Recording target:** 12-15 minutes, live loop demo.

**Presenter script:**

- **0:00-1:00 - Hook:** "The simplest reliable agent loop is three moves: grill, execute, clear."
- **1:00-4:00 - Grill:** Ask hard questions about scope, acceptance, risks, tradeoffs, and unknowns.
- **4:00-7:00 - Execute:** Make one bounded slice with visible checks. No sprawling edits.
- **7:00-10:00 - Clear:** Summarize what changed, what was verified, what remains open, and what comes next.
- **10:00-13:00 - Why it works:** It prevents drift and keeps humans, agents, and subagents aligned.
- **13:00-15:00 - Rule:** "If vague, grill. If clear, execute. If complete, clear the state."

**Screen direction:** Use one small bug or feature and run the whole loop.

**On-screen text:** "Grill -> Execute -> Clear"

**Demo steps:**

1. Ask clarifying questions.
2. Implement one bounded change.
3. Run one check.
4. Write a clear state summary.

**Exercise prompt:** "Use the loop on a feature idea and write one sentence for each stage."

**Closing recap:** "The loop converts vague intent into repeatable progress."

## 9. Compaction

**Recording target:** 10-12 minutes, summary rewrite exercise.

**Presenter script:**

- **0:00-1:00 - Hook:** "Long sessions eventually get too large. Compaction preserves what matters and drops noise."
- **1:00-3:00 - What survives:** Goal, constraints, decisions, files changed, checks run, unresolved risks, and next step.
- **3:00-5:00 - Bad versus good:** A diary is not a continuation summary. A good compaction is a restart packet.
- **5:00-8:00 - When to compact:** Before a new phase, after major decisions, before handoff, or when context gets messy.
- **8:00-10:00 - How to write it:** Make it short, factual, and action-oriented.
- **10:00-12:00 - Test:** Another agent or human should be able to continue from it.

**Screen direction:** Turn a messy session transcript into a concise continuation note.

**On-screen text:** "Goal. Decisions. Files. Checks. Risks. Next."

**Demo steps:**

1. Show noisy notes.
2. Extract durable facts.
3. Write a restart summary.
4. Check whether it supports continuation.

**Exercise prompt:** "Write a compaction note for a completed lesson exercise."

**Closing recap:** "Compaction is state preservation, not just shortening."

## 10. Handing Off

**Recording target:** 10-13 minutes, final status writing demo.

**Presenter script:**

- **0:00-1:00 - Hook:** "A task is not handed off if the next person has to rediscover everything."
- **1:00-3:00 - Handoff contents:** Goal, current state, changed files, decisions, checks, blockers, and next step.
- **3:00-6:00 - Agent handoffs:** Include exact file paths, exact commands, exact constraints, and known uncertainty.
- **6:00-9:00 - Done versus ready:** Explain that complete for a slice is not the same as reviewed or merged.
- **9:00-11:00 - Failed checks:** If verification failed, say so directly and include output or next diagnostic step.
- **11:00-13:00 - Standard:** The recipient should be able to continue without guessing.

**Screen direction:** Draft a final handoff message after a small feature.

**On-screen text:** "Done. Verified. Open. Next."

**Demo steps:**

1. List changed files.
2. List checks run.
3. Note open risks.
4. Write next step.

**Exercise prompt:** "Write a handoff with four sections: done, verified, open, next."

**Closing recap:** "Good handoffs preserve momentum."
