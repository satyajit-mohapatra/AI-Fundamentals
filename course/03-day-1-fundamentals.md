# 03 - Day 1 Fundamentals

Available from June 1, 2026

## 1. The Constraints Of LLMs

**Duration:** 12-15 minutes

**Outcome:** The learner understands the practical limits of LLMs and why AI coding workflows need verification.

**Video flow:**

- 0:00-1:00 - Open with the point: LLMs are fluent, not automatically correct.
- 1:00-3:00 - Explain prediction: models generate likely next tokens based on context, not guaranteed truth.
- 3:00-5:00 - Name common constraints: hallucination, stale knowledge, hidden assumptions, context limits, and non-determinism.
- 5:00-8:00 - Show how constraints appear in coding: invented APIs, wrong file assumptions, overbroad refactors, and false confidence.
- 8:00-12:00 - Teach mitigation: provide context, constrain scope, ask for evidence, run checks, and review diffs.
- 12:00-15:00 - Reframe the agent as a fast collaborator that needs a control loop.

**Demo:** Ask an agent a question without repo context, then ask again after file inspection and compare quality.

**Exercise:** List three things an agent should verify before editing a real repo.

**Recap:** LLM limits are manageable when your workflow forces evidence.

## 2. What Are Subagents

**Duration:** 10-13 minutes

**Outcome:** The learner can explain what subagents are and when parallel delegation helps.

**Video flow:**

- 0:00-1:00 - Define subagents as bounded helper agents working on smaller tasks.
- 1:00-3:00 - Explain why they exist: parallel exploration, focused implementation, review, or research.
- 3:00-5:00 - Give examples: one agent inspects tests, another reviews docs, another drafts a small patch.
- 5:00-8:00 - Explain boundaries: each subagent needs a clear task, output format, and ownership area.
- 8:00-11:00 - Warn about risks: duplicated effort, conflicting edits, vague delegation, and unreviewed conclusions.
- 11:00-13:00 - State the rule: delegate independent side work, keep blocking decisions local.

**Demo:** Split a task into "explore API path," "inspect tests," and "review docs" subagent assignments.

**Exercise:** Take one large task and identify two safe subagent tasks plus one task you should keep yourself.

**Recap:** Subagents are useful when work is independent, bounded, and reviewable.

## 3. Codebase Exploration

**Duration:** 12-15 minutes

**Outcome:** The learner can guide an agent through a repo without jumping straight to edits.

**Video flow:**

- 0:00-1:00 - Start with the rule: exploration is work, not delay.
- 1:00-3:00 - Show the exploration stack: files, entry points, call sites, tests, configuration, and docs.
- 3:00-6:00 - Teach search tactics: file listing, `rg`, symbol search, test names, and route names.
- 6:00-9:00 - Ask the agent to map the relevant path before proposing changes.
- 9:00-12:00 - Show how to validate exploration: quote files, list evidence, and separate facts from assumptions.
- 12:00-15:00 - Convert exploration into a small implementation plan.

**Demo:** Ask the agent to find where a feature is implemented and produce a file map.

**Exercise:** Pick one feature in a repo and create a three-file map: entry point, core logic, tests.

**Recap:** A good agent first learns the local shape of the codebase.

## 4. Build A Feature

**Duration:** 12-15 minutes

**Outcome:** The learner can use an agent to build a small feature with scope, implementation, and verification.

**Video flow:**

- 0:00-1:00 - Frame the goal: build one thin feature slice, not an entire product area.
- 1:00-3:00 - Define the feature: user behavior, constraints, and acceptance criteria.
- 3:00-5:00 - Ask the agent to inspect existing patterns before proposing code.
- 5:00-8:00 - Walk through implementation: identify files, make the smallest useful change, update tests or examples.
- 8:00-11:00 - Run verification: targeted test, lint, typecheck, or manual flow.
- 11:00-15:00 - Review the diff and summarize what changed.

**Demo:** Add a small UI field, CLI flag, or validation rule using the existing pattern.

**Exercise:** Write a feature brief with behavior, scope, files likely involved, and done condition.

**Recap:** Feature work should move through inspect, patch, verify, and review.

## 5. Non Determinism

**Duration:** 10-12 minutes

**Outcome:** The learner understands why the same prompt can produce different outputs and how to work with that reality.

**Video flow:**

- 0:00-1:00 - Show the surprise: repeated prompts can lead to different paths.
- 1:00-3:00 - Explain non-determinism in plain terms: generation choices, context changes, and tool outputs vary.
- 3:00-5:00 - Show where it matters: plans, code style, file selection, and explanations.
- 5:00-8:00 - Teach controls: narrower prompts, explicit constraints, tests, examples, and stable project instructions.
- 8:00-10:00 - Explain when variation is useful: brainstorming, alternative designs, and review.
- 10:00-12:00 - Explain when variation is dangerous: migrations, security, broad refactors, and production fixes.

**Demo:** Ask for two alternative approaches to the same feature and compare risk.

**Exercise:** Rewrite a loose prompt so two runs would likely produce the same acceptable output.

**Recap:** Do not require identical agent output. Require verifiable, bounded output.

## 6. Showing Context In The Status Line

**Duration:** 8-10 minutes

**Outcome:** The learner understands how visible context reduces mistakes during long agent sessions.

**Video flow:**

- 0:00-1:00 - Explain the problem: users forget branch, repo, task, mode, or environment.
- 1:00-3:00 - Define useful status-line context: repo name, branch, model or mode, current task, permissions, and dirty state.
- 3:00-5:00 - Show how a visible status cue prevents mistakes like editing the wrong repo or running the wrong command.
- 5:00-8:00 - Walk through a simple status habit: before major edits, confirm location, branch, and task.
- 8:00-10:00 - Connect this to handoffs and compaction.

**Demo:** Show two terminal sessions side by side and identify the safer one based on visible context.

**Exercise:** Write a "before edit" status check: repo, branch, scope, and verification plan.

**Recap:** Visible context is a small habit that prevents expensive mistakes.

## 7. Why Plan Mode Sucks

**Duration:** 10-13 minutes

**Outcome:** The learner understands when planning modes are useful and why planning without execution feedback can become weak.

**Video flow:**

- 0:00-1:00 - Open with nuance: planning is valuable, but isolated plan mode can create fake certainty.
- 1:00-3:00 - Explain the failure mode: plans built before enough repo evidence often miss constraints.
- 3:00-5:00 - Show symptoms: generic steps, invented architecture, no verification, and plans too broad to execute.
- 5:00-8:00 - Teach a better pattern: short plan, inspect, revise, execute one step, verify, then continue.
- 8:00-11:00 - Explain how to ask for plans that are grounded in files and commands.
- 11:00-13:00 - State when a plan-only phase is still useful: high-risk work, unclear requirements, or multi-day tasks.

**Demo:** Compare a generic plan with a repo-grounded plan after file exploration.

**Exercise:** Take a broad task and write a two-step discovery plan before implementation.

**Recap:** Planning works best when it is tied to evidence and execution.

## 8. The Grill Execute Clear Loop

**Duration:** 12-15 minutes

**Outcome:** The learner can use a repeatable loop to clarify requirements, execute a bounded step, and reset context.

**Video flow:**

- 0:00-1:00 - Define the loop: grill, execute, clear.
- 1:00-4:00 - Grill: ask hard questions about scope, acceptance, risks, tradeoffs, and unknowns.
- 4:00-7:00 - Execute: perform one bounded slice with visible checks.
- 7:00-10:00 - Clear: summarize decisions, results, open questions, and next action.
- 10:00-13:00 - Show how this prevents context drift and overbuilding.
- 13:00-15:00 - Explain how to use it with humans, agents, and subagents.

**Demo:** Run a mini-loop for a bug: grill the requirement, patch one file, run one check, summarize.

**Exercise:** Use the loop on a feature idea and write one sentence for each stage.

**Recap:** The loop converts vague intent into repeated, reviewable progress.

## 9. Compaction

**Duration:** 10-12 minutes

**Outcome:** The learner understands context compaction and can prepare summaries that survive long work.

**Video flow:**

- 0:00-1:00 - Explain the issue: long sessions eventually exceed useful context.
- 1:00-3:00 - Define compaction: reducing prior conversation into a smaller working summary.
- 3:00-5:00 - Explain what must survive: goal, constraints, decisions, files changed, checks run, and unresolved risks.
- 5:00-8:00 - Show a bad compaction summary versus a useful one.
- 8:00-10:00 - Teach when to compact manually: before a new phase, after major decisions, or before handoff.
- 10:00-12:00 - Show a reusable compaction prompt.

**Demo:** Turn a noisy session transcript into a 10-line continuation summary.

**Exercise:** Write a compaction note for a completed lesson exercise.

**Recap:** Compaction is not just shortening. It preserves the state needed to continue safely.

## 10. Handing Off

**Duration:** 10-13 minutes

**Outcome:** The learner can leave work in a state another person or agent can continue.

**Video flow:**

- 0:00-1:00 - Open with the rule: if someone cannot continue from your notes, the task is not really handed off.
- 1:00-3:00 - List handoff essentials: goal, current state, changed files, decisions, checks, blockers, and next step.
- 3:00-6:00 - Show how agent handoffs differ from human handoffs: agents need explicit constraints and file paths.
- 6:00-9:00 - Build a handoff after a feature slice.
- 9:00-11:00 - Explain what to include when tests fail or verification is incomplete.
- 11:00-13:00 - Show the difference between "done" and "ready for review."

**Demo:** Draft a final handoff message for a partially completed agent task.

**Exercise:** Write a handoff with four sections: done, verified, open, next.

**Recap:** Good handoffs preserve momentum and reduce rediscovery.
