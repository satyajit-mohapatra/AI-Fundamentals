# 04 - Day 2 Steering: Detailed Video Scripts

Available from June 1, 2026

## 1. What Is A Repo Instruction File

**Recording target:** 10-12 minutes, file walkthrough.

**Presenter script:**

- **0:00-1:00 - Hook:** "Every serious harness needs a way to learn the local rules of a repo."
- **1:00-2:00 - Tool translation:** Explain that this may be `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`, opencode config, IDE custom instructions, or a linked project guide.
- **2:00-3:00 - Purpose:** Explain repo-local instructions: setup commands, tests, style, architecture notes, safety rules, and review expectations.
- **3:00-5:00 - What not to include:** Huge docs, stale opinions, secrets, vague encouragement, and anything not actionable.
- **5:00-8:00 - Minimal structure:** Project overview, commands, conventions, workflow rules, and escalation rules.
- **8:00-10:00 - Agent behavior:** Agents use it to make better default choices during exploration and edits.
- **10:00-12:00 - Maintenance:** Stale instructions steer agents badly, so keep it current.

**Screen direction:** Create or inspect the repo instruction file your harness reads.

**On-screen text:** "Actionable. Current. Specific."

**Demo steps:**

1. Add setup command.
2. Add test command.
3. Add style rule.
4. Add safety rule.

**Exercise prompt:** "Draft five repo instructions you want an agent to know before editing."

**Closing recap:** "Repo instructions give the agent the local rules of the road."

## 2. Steering An Agent With Repo Instructions

**Recording target:** 12-15 minutes, before/after steering demo.

**Presenter script:**

- **0:00-1:00 - Hook:** "If you repeat the same prompt every session, it probably belongs in durable repo instructions."
- **1:00-3:00 - Instruction categories:** Code style, testing rules, branch rules, forbidden actions, preferred tools, and final report format.
- **3:00-6:00 - Convert repetition:** Take a repeated instruction and make it durable.
- **6:00-9:00 - Concrete language:** "Use `rg` for search" beats "search carefully." "Report files changed and checks run" beats "summarize well."
- **9:00-12:00 - Test the rule:** Run a tiny task and see if the agent follows the instruction.
- **12:00-15:00 - Prune:** Remove stale or ignored instructions; tighten vague ones.

**Screen direction:** Add a final-report rule, then ask the agent to do a tiny task and compare output.

**On-screen text:** "Repeated prompt -> repo instruction"

**Demo steps:**

1. Show repeated prompt.
2. Add to the harness-specific repo instruction file.
3. Run a small task.
4. Check whether behavior changed.

**Exercise prompt:** "Identify one instruction you repeat often and rewrite it for your harness's repo instruction mechanism."

**Closing recap:** "Steering works when repo instructions are concrete enough to change behavior."

## 3. Progressive Disclosure

**Recording target:** 10-13 minutes, layered-context demo.

**Presenter script:**

- **0:00-1:00 - Hook:** "Dumping all context at once usually hides the part that matters."
- **1:00-3:00 - Definition:** Progressive disclosure means giving minimum useful context, then revealing more when the task needs it.
- **3:00-5:00 - Layers:** Top-level task, relevant docs, module rules, file-level conventions, and decision records.
- **5:00-8:00 - Triggers for more context:** Ambiguity, repeated mistake, new subsystem, failed verification, or risky decision.
- **8:00-11:00 - Document shape:** Link deeper docs rather than forcing everything into one file.
- **11:00-13:00 - Rule:** Reveal context when it improves the next action.

**Screen direction:** Start with a short prompt, then reveal a module note after the agent identifies the relevant area.

**On-screen text:** "Enough context to act. More context when needed."

**Demo steps:**

1. Give top-level task.
2. Ask agent to inspect.
3. Reveal module-specific doc.
4. Compare next plan quality.

**Exercise prompt:** "Split one long instruction document into top-level, module-level, and task-specific notes."

**Closing recap:** "Layered context keeps the agent oriented without drowning it."

## 4. What Are Reusable Agent Workflows

**Recording target:** 10-12 minutes, reusable workflow anatomy walkthrough.

**Presenter script:**

- **0:00-1:00 - Hook:** "A reusable workflow gives the agent a process to follow when a task needs more than a loose prompt."
- **1:00-3:00 - Why workflows exist:** Repeated work should not depend on copy-pasted prompts or memory.
- **3:00-5:00 - Examples:** TDD, diagnose, review, PRD, handoff, research, prototype.
- **5:00-8:00 - Anatomy:** Trigger, workflow, constraints, templates, examples, and references.
- **8:00-10:00 - Prompt versus workflow:** Prompts steer the current task; reusable workflows steer the process.
- **10:00-12:00 - Avoid overuse:** Save workflows for repeated processes, not every preference.

**Screen direction:** Open a sample reusable workflow instruction and label each section.

**On-screen text:** "Trigger. Workflow. Constraints. Output."

**Demo steps:**

1. Open a reusable workflow.
2. Identify trigger.
3. Identify workflow steps.
4. Show output format.

**Exercise prompt:** "Name one workflow you repeat often enough to save as a reusable instruction."

**Closing recap:** "Reusable workflows package repeatable expertise."

## 5. Using Reusable Workflows For Steering

**Recording target:** 12-15 minutes, workflow invocation demo.

**Presenter script:**

- **0:00-1:00 - Hook:** "Reusable workflows turn loose requests into structured processes."
- **1:00-4:00 - Match task shape:** Bug, feature, refactor, review, document, research, prototype, or handoff.
- **4:00-7:00 - Visible phases:** The agent should move through the workflow's phases: inspect, diagnose, test, implement, verify, summarize.
- **7:00-10:00 - Missing-step prevention:** Reusable workflows reduce skipped reproduction, validation, and review.
- **10:00-13:00 - Add local constraints:** A reusable workflow gives process; the prompt gives the local target and boundaries.
- **13:00-15:00 - Improve the workflow:** If it fails repeatedly, update the workflow.

**Screen direction:** Invoke, attach, or paste a TDD or diagnose workflow on a small bug and point out each phase.

**On-screen text:** "Workflow = process. Prompt = target."

**Demo steps:**

1. Choose task shape.
2. Invoke, attach, or paste the relevant workflow.
3. Add local constraints.
4. Review final output against workflow phases.

**Exercise prompt:** "Write a prompt that invokes or includes a reusable workflow and adds task-specific constraints."

**Closing recap:** "Use reusable workflows when you care about reliable process, not just an answer."

## 6. Automatic Memory

**Recording target:** 10-13 minutes, memory versus current evidence lesson.

**Presenter script:**

- **0:00-1:00 - Hook:** "Memory helps the agent start smarter, but it should not replace current evidence."
- **1:00-3:00 - Useful memory:** Preferences, recurring workflows, repo conventions, and prior decisions.
- **3:00-5:00 - Risky memory:** Current repo state, latest test result, dependency versions, active branch, or facts likely to change.
- **5:00-8:00 - Verification rule:** Memory can suggest; current files and commands confirm.
- **8:00-11:00 - Asking carefully:** Ask the agent to use memory cautiously and refresh stale facts.
- **11:00-13:00 - Differences:** Memory carries prior context, repo instructions carry project rules, and reusable workflows carry process.

**Screen direction:** Use a remembered preference, then verify a current command in the repo.

**On-screen text:** "Memory suggests. Current evidence confirms."

**Demo steps:**

1. Reference a remembered preference.
2. Inspect current repo file.
3. Run or identify current command.
4. Decide based on current evidence.

**Exercise prompt:** "Write three things worth remembering and three things that must always be rechecked."

**Closing recap:** "Memory is helpful context, not a source of truth."
