# 06 - Day 4 Feedback Loops: Detailed Video Scripts

Available from June 8, 2026

## 1. Is Code Cheap

**Recording target:** 10-12 minutes, patch comparison.

**Presenter script:**

- **0:00-1:00 - Hook:** "If AI makes code cheap, what becomes expensive?"
- **1:00-3:00 - Core answer:** Understanding, integration, testing, review, and maintenance remain expensive.
- **3:00-5:00 - Failure modes:** Too much code, duplicate abstractions, unreviewed edge cases, hidden behavior changes.
- **5:00-8:00 - New bottlenecks:** Judgment, feedback, verification, maintainability.
- **8:00-10:00 - Prompt shift:** Ask for smaller changes and stronger checks.
- **10:00-12:00 - Rule:** Optimize for reviewed working behavior, not code volume.

**Screen direction:** Compare a large generated patch with a smaller verified patch.

**On-screen text:** "Code is cheap to create. Verification is not."

**Demo steps:** Show diff size, review burden, checks, and residual risk for both patches.

**Exercise prompt:** "Take one feature request and define the smallest useful version."

**Closing recap:** "The useful unit is not lines generated. It is behavior verified."

## 2. Steering Agents To Use Feedback Loops With Reusable Workflows

**Recording target:** 12-15 minutes, before/after workflow demo.

**Presenter script:**

- **0:00-1:00 - Hook:** "Agents often skip feedback loops unless the workflow requires them."
- **1:00-3:00 - Loop examples:** Diagnose, TDD, review, pre-commit, handoff.
- **3:00-6:00 - Reusable workflow wrappers:** A saved workflow makes sequence and evidence part of the task.
- **6:00-9:00 - Compare runs:** Without the workflow, the agent patches early; with the workflow, it reproduces, investigates, changes, verifies.
- **9:00-12:00 - Stop conditions:** If no repro, unstable tests, or broad scope, stop and report.
- **12:00-15:00 - Evidence report:** Final output must name what was reproduced, changed, verified, and still risky.

**Screen direction:** Bug task with and without a feedback-loop workflow.

**On-screen text:** "Reproduce -> Investigate -> Change -> Verify"

**Demo steps:** Run task once loosely, then with the workflow, compare final evidence.

**Exercise prompt:** "Write a prompt that requires reproduce before fix and verify before summary."

**Closing recap:** "The loop should appear in the work, not just in the narration."

## 3. Building A Do Work Workflow

**Recording target:** 12-15 minutes, reusable workflow authoring demo.

**Presenter script:**

- **0:00-1:00 - Hook:** "A do-work workflow is your default process for ordinary implementation tasks."
- **1:00-3:00 - Phases:** Understand, inspect, plan briefly, implement narrowly, verify, summarize.
- **3:00-6:00 - Rules:** Respect user changes, avoid unrelated refactors, use existing patterns, run checks.
- **6:00-9:00 - Output:** Files changed, checks run, result, residual risks.
- **9:00-12:00 - Escalation:** Ask before broad scope, destructive commands, or ambiguous product choices.
- **12:00-15:00 - Keep it usable:** Compact, strict, reusable.

**Screen direction:** Draft a concise Markdown workflow or harness-specific reusable instruction.

**On-screen text:** "Default workflow: inspect, change, verify, summarize."

**Demo steps:** Write phases, add rules, add output format, add escalation rules.

**Exercise prompt:** "Write your own six-step implementation workflow."

**Closing recap:** "A do-work workflow captures your default engineering discipline."

## 4. Using Our Do Work Workflow

**Recording target:** 10-13 minutes, run and evaluate workflow.

**Presenter script:**

- **0:00-1:00 - Hook:** "A reusable workflow only matters if it changes behavior."
- **1:00-3:00 - Invoke:** Start a small task and explicitly invoke the workflow.
- **3:00-6:00 - Watch phases:** Inspect, plan, implement, verify.
- **6:00-9:00 - Review final output:** Files changed, checks run, result, risks.
- **9:00-11:00 - Correct missing behavior:** Ask for the skipped step, not just better wording.
- **11:00-13:00 - Refine:** If the workflow failed, tighten it later.

**Screen direction:** Run a tiny code change using the do-work workflow.

**On-screen text:** "Evaluate the behavior, not the prose."

**Demo steps:** Invoke, observe phases, review report, score behavior.

**Exercise prompt:** "Run your do-work prompt on a tiny task and score it 1-4."

**Closing recap:** "Reusable workflows are testable artifacts."

## 5. Fixing Agents Broken Formatting With Pre Commit

**Recording target:** 12-15 minutes, formatting failure and hook demo.

**Presenter script:**

- **0:00-1:00 - Hook:** "Agents can write code that works but violates local formatting."
- **1:00-3:00 - Define pre-commit:** Automated checks before commit.
- **3:00-6:00 - Common checks:** Formatter, linter, typecheck, tests, secret scan, generated file checks.
- **6:00-9:00 - Failure demo:** Show formatting failure, run formatter or hook, inspect corrected diff.
- **9:00-12:00 - Agent prompt:** Make hooks part of the definition of done.
- **12:00-15:00 - Limit:** Hooks catch mechanical issues, not architectural mistakes.

**Screen direction:** Introduce formatting issue, run hook, show diff.

**On-screen text:** "Pre-commit catches avoidable mistakes."

**Demo steps:** Create issue, run formatter, inspect diff, show configured checks.

**Exercise prompt:** "List the checks your repo should run before commit."

**Closing recap:** "Pre-commit keeps review focused on behavior, not cleanup."

## 6. What Is Red Green Refactor

**Recording target:** 10-12 minutes, loop explanation.

**Presenter script:**

- **0:00-1:00 - Hook:** "Red, green, refactor is simple because the sequence matters."
- **1:00-3:00 - Red:** A failing test proves the test can catch the behavior.
- **3:00-5:00 - Green:** Make the smallest change that passes.
- **5:00-8:00 - Refactor:** Clean up while tests protect behavior.
- **8:00-10:00 - Agent fit:** The loop prevents premature broad edits.
- **10:00-12:00 - When not to use:** Pure exploration, unclear requirements, non-testable spikes.

**Screen direction:** Show failing test, minimal pass, small cleanup.

**On-screen text:** "Red = prove failure. Green = pass. Refactor = improve safely."

**Demo steps:** Walk through one tiny behavior in three phases.

**Exercise prompt:** "Write one behavior that should fail before the fix."

**Closing recap:** "The loop anchors the agent to observable behavior."

## 7. Red Green Refactor

**Recording target:** 12-15 minutes, full cycle demo.

**Presenter script:**

- **0:00-1:00 - Hook:** "Now we run the loop end to end."
- **1:00-4:00 - Red:** Ask the agent to write or identify a meaningful failing test and run it.
- **4:00-7:00 - Green:** Ask for the smallest implementation that passes.
- **7:00-10:00 - Refactor:** Improve naming or structure without changing behavior.
- **10:00-13:00 - Verify:** Run targeted test and one broader relevant check.
- **13:00-15:00 - Report:** Name failing test, fix, cleanup, and checks run.

**Screen direction:** Tiny parser, validator, or UI behavior.

**On-screen text:** "Prove. Fix. Clean. Verify."

**Demo steps:** Write failing test, patch, refactor, run checks, summarize.

**Exercise prompt:** "Use the loop on one small bug and record the failing test, smallest fix, and cleanup step."

**Closing recap:** "Red-green-refactor turns AI help into dependable software work."
