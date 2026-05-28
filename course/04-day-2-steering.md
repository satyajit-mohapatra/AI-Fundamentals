# 04 - Day 2 Steering

Available from June 1, 2026

## 1. What Is A Repo Instruction File

**Duration:** 10-12 minutes

**Outcome:** The learner understands how repo-local instruction files guide AI coding agents across different harnesses.

**Video flow:**

- 0:00-1:00 - Define a repo instruction file as repo-local operating instructions for coding agents.
- 1:00-3:00 - Show common implementations: `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`, opencode config, IDE custom instructions, or a linked project guide.
- 3:00-5:00 - Explain what belongs there: commands, conventions, architecture notes, safety rules, and review expectations.
- 5:00-7:00 - Show what does not belong: huge docs, outdated opinions, secrets, and vague motivational text.
- 7:00-9:00 - Walk through a minimal repo instruction structure.
- 8:00-10:00 - Explain how agents use it during code exploration and edits.
- 10:00-12:00 - Warn that stale instructions are worse than no instructions.

**Demo:** Create or inspect a small repo instruction file with setup commands, test commands, and style rules. Use the filename or setting your chosen harness reads.

**Exercise:** Draft five repo instructions you would want an agent to know before editing.

**Recap:** Repo instructions are the repo's steering layer for agent behavior, regardless of the exact filename.

## 2. Steering An Agent With Repo Instructions

**Duration:** 12-15 minutes

**Outcome:** The learner can use repo instructions to steer agent behavior consistently across sessions and tools.

**Video flow:**

- 0:00-1:00 - State the value: persistent instructions reduce repeated prompting.
- 1:00-3:00 - Show instruction categories: code style, testing rules, branch rules, forbidden actions, and preferred tools.
- 3:00-6:00 - Convert a repeated prompt into a durable repo instruction.
- 6:00-9:00 - Explain specificity: "use existing patterns" is weaker than "use `rg` for search and run `npm test -- --runInBand` for targeted tests."
- 9:00-12:00 - Demonstrate how an agent follows or violates the file.
- 12:00-15:00 - Explain how to review and prune instructions over time.

**Demo:** Add a rule that agents must summarize files changed and checks run, then test it with a small task.

**Exercise:** Identify one instruction you repeat often and rewrite it for your harness's repo instruction mechanism.

**Recap:** Steering works when instructions are concrete, current, and tied to repo behavior.

## 3. Progressive Disclosure

**Duration:** 10-13 minutes

**Outcome:** The learner understands how to reveal context gradually instead of overloading the agent.

**Video flow:**

- 0:00-1:00 - Explain the problem: dumping everything at once hides what matters.
- 1:00-3:00 - Define progressive disclosure: give the agent the minimum useful context, then reveal more when needed.
- 3:00-5:00 - Show levels: top-level task, relevant docs, module-specific rules, file-level conventions.
- 5:00-8:00 - Explain when to disclose more: ambiguity, repeated mistakes, new subsystem, or failed verification.
- 8:00-11:00 - Show how to structure docs so agents discover them naturally.
- 11:00-13:00 - Connect this to reusable workflows and modular instructions.

**Demo:** Start with a short prompt, then add a linked design note only after the agent finds the relevant module.

**Exercise:** Split one long instruction document into top-level, module-level, and task-specific notes.

**Recap:** Give enough context to act, then reveal deeper context when the task needs it.

## 4. What Are Reusable Agent Workflows

**Duration:** 10-12 minutes

**Outcome:** The learner can explain reusable agent workflows and when a workflow is better than another prompt.

**Video flow:**

- 0:00-1:00 - Define reusable workflows as procedures an agent can follow for specialized tasks. Some harnesses call these skills; others use prompt libraries, custom instructions, or saved templates.
- 1:00-3:00 - Explain why reusable workflows exist: repeated work should not depend on memory or prompt copy-paste.
- 3:00-5:00 - Show examples: TDD workflow, diagnose workflow, PRD workflow, review workflow, handoff workflow.
- 5:00-8:00 - Explain workflow anatomy: trigger, steps, constraints, templates, and optional references.
- 8:00-10:00 - Compare one-off prompting with invoking or pasting a reusable workflow.
- 10:00-12:00 - Warn against over-packaging: use reusable workflows for repeated processes, not every preference.

**Demo:** Walk through a simple reusable workflow instruction and identify the parts that guide behavior.

**Exercise:** Name one workflow you repeat often enough to save as a reusable instruction.

**Recap:** Reusable workflows package repeatable expertise so agents can apply it consistently.

## 5. Using Reusable Workflows For Steering

**Duration:** 12-15 minutes

**Outcome:** The learner can use reusable workflows to steer agent behavior for diagnosis, planning, testing, review, or writing.

**Video flow:**

- 0:00-1:00 - Open with the value: reusable workflows turn loose requests into structured processes.
- 1:00-4:00 - Show how to choose a workflow based on task shape: bug, feature, refactor, review, document, or research.
- 4:00-7:00 - Demonstrate invoking, attaching, or pasting a workflow and watching the agent follow its phases.
- 7:00-10:00 - Explain how reusable workflows reduce missing steps: reproduction, validation, handoff, and review.
- 10:00-13:00 - Teach how to combine reusable workflows with current task constraints.
- 13:00-15:00 - Explain how to update a workflow after repeated failures.

**Demo:** Use a TDD or diagnose workflow on a small bug and point out the workflow gates.

**Exercise:** Write a prompt that invokes or includes a reusable workflow and adds task-specific constraints.

**Recap:** Reusable workflows steer process; prompts steer the current goal.

## 6. Automatic Memory

**Duration:** 10-13 minutes

**Outcome:** The learner understands automatic memory and how to use it without assuming it is always current.

**Video flow:**

- 0:00-1:00 - Define memory as prior context the agent can use across sessions.
- 1:00-3:00 - Explain what memory is useful for: preferences, repo conventions, recurring workflows, and prior decisions.
- 3:00-5:00 - Explain what memory is bad at: current repo state, latest test results, and facts that may have changed.
- 5:00-8:00 - Teach the verification rule: memory can suggest, but current files and commands confirm.
- 8:00-11:00 - Show how to ask an agent to use memory cautiously.
- 11:00-13:00 - Explain how memory, repo instructions, and reusable workflows differ.

**Demo:** Use a remembered preference, then verify the repo's current command before acting.

**Exercise:** Write three things worth remembering and three things that should always be rechecked.

**Recap:** Memory is useful context, not a substitute for current evidence.
