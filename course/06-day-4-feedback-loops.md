# 06 - Day 4 Feedback Loops

Available from June 8, 2026

## 1. Is Code Cheap

**Duration:** 10-12 minutes

**Outcome:** The learner understands why fast code generation does not make design, review, and verification free.

**Video flow:**

- 0:00-1:00 - Open with the question: if AI makes code cheap, what becomes expensive?
- 1:00-3:00 - Explain that generated code is cheap to produce but still expensive to understand, integrate, test, and maintain.
- 3:00-5:00 - Show failure modes: too much code, duplicate abstractions, unreviewed edge cases, and hidden behavior changes.
- 5:00-8:00 - Teach the new bottlenecks: judgment, feedback, verification, and maintainability.
- 8:00-10:00 - Explain how this changes agent prompts: ask for smaller changes and stronger checks.
- 10:00-12:00 - State the rule: optimize for reviewed working behavior, not code volume.

**Demo:** Compare a large generated patch with a small verified patch.

**Exercise:** Take a feature request and define the smallest useful version.

**Recap:** Code is cheaper to create, but correctness and maintainability are still expensive.

## 2. Steering Agents To Use Feedback Loops With Reusable Workflows

**Duration:** 12-15 minutes

**Outcome:** The learner can use reusable workflows to force useful loops like reproduce, test, implement, and verify.

**Video flow:**

- 0:00-1:00 - Explain that agents often skip feedback loops unless instructed.
- 1:00-3:00 - Define feedback loop examples: diagnose, TDD, review, pre-commit, and handoff.
- 3:00-6:00 - Show how a reusable workflow encodes the loop as steps the agent must follow.
- 6:00-9:00 - Demonstrate a bug task with and without a feedback-loop workflow.
- 9:00-12:00 - Explain how to add stop conditions when the loop fails.
- 12:00-15:00 - Show how final reports should include evidence from the loop.

**Demo:** Invoke a diagnose or TDD workflow and point out each feedback gate.

**Exercise:** Write a prompt that requires the agent to reproduce before fixing and verify before summarizing.

**Recap:** Reusable workflows make good process repeatable, especially when the task gets stressful.

## 3. Building A Do Work Workflow

**Duration:** 12-15 minutes

**Outcome:** The learner can design a simple reusable "do work" workflow for everyday implementation tasks.

**Video flow:**

- 0:00-1:00 - Define the purpose: a default workflow for turning a task into a verified change.
- 1:00-3:00 - List the workflow phases: understand, inspect, plan briefly, implement narrowly, verify, summarize.
- 3:00-6:00 - Write the workflow rules: respect user changes, avoid unrelated refactors, use existing patterns, run checks.
- 6:00-9:00 - Add output requirements: files changed, checks run, result, and residual risks.
- 9:00-12:00 - Add escalation rules: ask before broad scope, destructive commands, or ambiguous product decisions.
- 12:00-15:00 - Explain how to keep the workflow short enough to be used.

**Demo:** Draft a compact `do-work` workflow in Markdown.

**Exercise:** Write your own six-step implementation workflow.

**Recap:** A good do-work workflow captures your default engineering discipline.

## 4. Using Our Do Work Workflow

**Duration:** 10-13 minutes

**Outcome:** The learner can invoke or include the do-work workflow on a small task and review whether the agent followed it.

**Video flow:**

- 0:00-1:00 - Explain that a reusable workflow only matters if it changes behavior.
- 1:00-3:00 - Start with a small task and explicitly invoke the do-work workflow.
- 3:00-6:00 - Watch for the required phases: inspect, plan, implement, verify.
- 6:00-9:00 - Review the final output against the workflow requirements.
- 9:00-11:00 - Correct the agent if it skips a step.
- 11:00-13:00 - Decide whether the workflow needs refinement.

**Demo:** Use the workflow to change a small validation rule and run the targeted test.

**Exercise:** Run your do-work prompt on a tiny task and score the output from 1-4.

**Recap:** Reusable workflows should be evaluated by the behavior they reliably produce.

## 5. Fixing Agents Broken Formatting With Pre Commit

**Duration:** 12-15 minutes

**Outcome:** The learner can use pre-commit checks to catch formatting and basic quality issues before review.

**Video flow:**

- 0:00-1:00 - Explain the problem: agents can create code that works but violates local formatting.
- 1:00-3:00 - Define pre-commit: automated checks before code is committed.
- 3:00-6:00 - Show common checks: formatter, linter, typecheck, tests, secret scan, and generated file checks.
- 6:00-9:00 - Demonstrate a formatting failure and automated fix.
- 9:00-12:00 - Explain how to prompt agents to run or respect pre-commit.
- 12:00-15:00 - Warn against using pre-commit as the only review gate.

**Demo:** Create a formatting issue, run the formatter or pre-commit hook, and inspect the resulting diff.

**Exercise:** List the checks your repo should run before commit.

**Recap:** Pre-commit gives agents fast feedback on mechanical quality.

## 6. What Is Red Green Refactor

**Duration:** 10-12 minutes

**Outcome:** The learner understands red-green-refactor and why it fits agent-assisted coding.

**Video flow:**

- 0:00-1:00 - Define the loop: red means failing test, green means make it pass, refactor means clean up safely.
- 1:00-3:00 - Explain why red matters: it proves the test can catch the failure.
- 3:00-5:00 - Explain why green should be small: solve the behavior before polishing.
- 5:00-8:00 - Explain refactor: improve structure while tests protect behavior.
- 8:00-10:00 - Connect to agents: the loop prevents premature broad edits.
- 10:00-12:00 - Show when not to use it: pure exploration, uncertain requirements, or non-testable spikes.

**Demo:** Show a failing test, a minimal passing change, and a small cleanup.

**Exercise:** Write one behavior that should fail before the fix.

**Recap:** Red-green-refactor gives the agent a tight correctness loop.

## 7. Red Green Refactor

**Duration:** 12-15 minutes

**Outcome:** The learner can guide an agent through a full red-green-refactor cycle.

**Video flow:**

- 0:00-1:00 - Start with a small bug or behavior change.
- 1:00-4:00 - Red: ask the agent to write or identify a failing test and run it.
- 4:00-7:00 - Green: ask for the smallest implementation that passes the test.
- 7:00-10:00 - Refactor: improve naming or structure without changing behavior.
- 10:00-13:00 - Run the targeted test and a broader relevant check.
- 13:00-15:00 - Summarize the cycle with files changed and evidence.

**Demo:** Implement a small parser, validator, or UI behavior through the full cycle.

**Exercise:** Use the loop on one small bug in your practice repo.

**Recap:** The loop keeps the agent grounded in behavior instead of speculation.
