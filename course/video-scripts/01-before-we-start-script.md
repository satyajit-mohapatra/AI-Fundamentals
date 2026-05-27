# 01 - Before We Start: Detailed Video Scripts

Available from May 18, 2026

## 1. Where We're Going

**Recording target:** 10-12 minutes, talking head plus course-map slides and one terminal/diff preview.

**Presenter script:**

- **0:00-0:45 - Hook:** "Most developers do not fail with AI coding because the model is useless. They fail because they treat the model like a magic box. This course is about something more practical: building a workflow where an AI coding agent can help you move faster without taking control away from you."
- **0:45-2:00 - Course promise:** "By the end of this course, you should be able to take a real repo task, shape it, give it to an agent, review what happened, run verification, and hand off the result. You will not just learn commands. You will learn a working system."
- **2:00-4:00 - Course arc:** Walk through the journey: setup, agent harness basics, fundamentals, steering, planning, feedback loops, AFK agents, and human-in-the-loop patterns. Emphasize that each day adds a control layer and works across terminal-based agents, CLI agents, IDE agents, hosted agent apps, and similar tools.
- **4:00-6:30 - The final workflow:** Explain the end-state loop: shape the task, inspect the repo, choose HITL or AFK, execute a small slice, verify, review, summarize, and continue.
- **6:30-8:30 - What this course is not:** "This is not a prompt-hacking course. It is not a replacement for engineering judgment. It is not about generating the most code. It is about getting useful, reviewable, verified work."
- **8:30-10:30 - Learner responsibility:** Explain that the human remains accountable for product decisions, risk, security, data, and final review.
- **10:30-12:00 - Transition:** "In the next lessons we will get the environment ready, because agent workflows only work when the repo, tools, and feedback loops are real."

**Screen direction:** Show a simple course roadmap. Then show a final example task summary with sections: Goal, Files changed, Checks run, Risks, Next step.

**On-screen text:** "Goal -> Context -> Plan -> Execute -> Verify -> Review -> Handoff"

**Demo steps:**

1. Open a sample final handoff note.
2. Point to the changed files list.
3. Point to checks run.
4. Point to a remaining risk or follow-up.

**Exercise prompt:** "Write one sentence: what do you want AI coding to improve in your workflow? Then write one thing you do not want to give up control over."

**Closing recap:** "The goal is not to make the agent independent. The goal is to make the work controlled, visible, and faster."

## 2. Navigating The Discord

**Recording target:** 8-10 minutes, screen recording of Discord structure or a mock community layout.

**Presenter script:**

- **0:00-0:45 - Hook:** "The fastest way to get ignored in a technical community is to post: 'It does not work.' The fastest way to get helped is to make the problem easy to understand."
- **0:45-2:00 - Why Discord matters:** Explain that learners will use Discord for debugging, feedback, office-hour prep, sharing prompts, and comparing workflows.
- **2:00-4:00 - Channel tour:** Walk through announcements, help, cohort chat, office hours, project sharing, and wins. Tell learners where to ask setup questions versus workflow questions.
- **4:00-6:30 - Good help request:** Teach the structure: goal, context, command or prompt used, exact output, what you expected, and the precise question.
- **6:30-8:00 - Bad patterns:** Explain why huge pasted logs, screenshots without text, vague complaints, and missing repo context slow everyone down.
- **8:00-10:00 - Close the loop:** Ask learners to reply with the fix once solved so future learners can search and benefit.

**Screen direction:** Show a mock help post. Highlight each required part with callouts.

**On-screen text:** "Goal. Context. Tried. Output. Expected. Question."

**Demo steps:**

1. Start with a weak post: "Migration failed. Help?"
2. Rewrite it with exact command, error, environment, and question.
3. Show how the improved version invites a useful answer.

**Exercise prompt:** "Create a help-request template you can reuse during the course."

**Closing recap:** "Good community questions are not longer. They are easier to reproduce."

## 3. Repo Setup

**Recording target:** 12-15 minutes, terminal-heavy setup walkthrough.

**Presenter script:**

- **0:00-0:45 - Hook:** "If the repo does not run locally, the agent is not coding. It is guessing."
- **0:45-2:00 - Setup goal:** Explain that the target is a known baseline: dependencies installed, local commands understood, and at least one verification command passing or failing for a known reason.
- **2:00-4:00 - Repo tour:** Show top-level folders: source, tests, docs, scripts, migrations, config, package or lock files.
- **4:00-7:00 - Install path:** Run or describe the install command. Explain that learners should capture versions and errors.
- **7:00-10:00 - Baseline checks:** Run lint, test, typecheck, or app start command. Explain each result.
- **10:00-12:30 - Setup failures:** Model the right response: copy exact command, exact output, system info, and next hypothesis.
- **12:30-15:00 - Ready state:** End by showing the checklist: repo opens, dependencies installed, baseline command known, setup notes written.

**Screen direction:** Terminal on left, setup notes on right.

**On-screen text:** "A working baseline beats a confident guess."

**Demo steps:**

1. Confirm current directory.
2. List files.
3. Install dependencies.
4. Run one baseline check.
5. Write setup notes.

**Exercise prompt:** "Create `SETUP_NOTES.md` with the commands that worked on your machine and any failures you hit."

**Closing recap:** "Before you ask an agent to change code, make sure both of you know how to tell whether the repo still works."

## 4. Database Migrations

**Recording target:** 10-13 minutes, conceptual explanation plus local migration demo.

**Presenter script:**

- **0:00-0:45 - Hook:** "A bad code change can often be reverted. A bad database migration may have already changed the data."
- **0:45-2:00 - Define migrations:** Explain schema evolution as ordered, repeatable changes to database structure or data.
- **2:00-4:00 - Migration anatomy:** Show timestamp/name, up/down or apply/rollback, schema changes, and seed/data migrations.
- **4:00-6:30 - Local run:** Demonstrate running migrations locally and checking the result.
- **6:30-9:00 - Agent usage:** Explain the correct prompt: inspect existing models and migrations, propose shape, call out compatibility risks, do not run production changes.
- **9:00-11:00 - Risk checklist:** Backward compatibility, rollback, data volume, locks, default values, nullable fields, and deployment order.
- **11:00-13:00 - Close:** "Treat migrations as code plus state. That means slower, more explicit, and more reviewed."

**Screen direction:** Show migrations folder, a sample migration, and schema diff or DB inspection command.

**On-screen text:** "Schema change = code risk + data risk"

**Demo steps:**

1. Open an existing migration.
2. Run local migration command.
3. Inspect resulting table/schema.
4. Draft a migration prompt with safety constraints.

**Exercise prompt:** "Write a migration safety checklist with current schema, desired change, rollback, and verification."

**Closing recap:** "The agent can help with migrations, but the human owns the data risk."

## 5. Setting Up Your Agent Harness For The Course

**Recording target:** 12-15 minutes, agent harness terminal setup.

**Presenter script:**

- **0:00-0:45 - Hook:** "Your first agent harness task should not be 'build my feature.' It should be 'show me you understand the repo.'"
- **0:45-2:00 - Setup goal:** The chosen harness should be authenticated or configured, launched in the right repo, and able to inspect files safely.
- **2:00-4:00 - Start in repo:** Show current working directory and explain why launching from the wrong folder poisons the session.
- **4:00-6:00 - First prompt:** Use a read-only prompt: "Inspect this repo and tell me how to run it. Do not edit files."
- **6:00-8:30 - Permissions:** Explain how different harnesses ask for approval, or how the human can enforce approval manually when the tool has weaker permission controls.
- **8:30-11:00 - Editor and terminal relationship:** the harness runs or proposes the workflow; you review in the IDE and terminal.
- **11:00-13:30 - First useful task:** Ask the agent to identify setup commands and verification commands.
- **13:30-15:00 - Save a startup prompt:** Encourage learners to reuse a safe first prompt.

**Screen direction:** Terminal or IDE agent session, then editor showing repo files.

**On-screen text:** "First task: inspect. Second task: plan. Third task: edit."

**Demo steps:**

1. Open your chosen agent harness in the repo.
2. Ask for repo summary with no edits.
3. Ask for setup commands.
4. Review its answer against files.

**Exercise prompt:** "Save your default first prompt for a new codebase."

**Closing recap:** "Start every agent relationship with orientation, not action."

## 6. How To Take This Course

**Recording target:** 8-12 minutes, talking head plus note-taking demo.

**Presenter script:**

- **0:00-0:45 - Hook:** "Watching this course will not change your workflow. Practicing the loops will."
- **0:45-2:00 - Learning rhythm:** Watch, pause, run, review, write a note.
- **2:00-4:00 - Course journal:** Show a simple format: lesson, prompt used, result, mistake, new rule.
- **4:00-6:00 - One practice repo:** Recommend using the same repo so lessons compound.
- **6:00-8:00 - When to pause:** Pause before running commands, before approving edits, after failing checks, and before accepting a summary.
- **8:00-10:00 - What to collect:** Prompts that worked, prompts that failed, reusable checklists, and personal permission rules.
- **10:00-12:00 - Close:** "Your goal is to leave with your own workflow, not just my examples."

**Screen direction:** Show a Markdown course journal being filled out.

**On-screen text:** "Watch -> Practice -> Review -> Capture"

**Demo steps:**

1. Create a course journal entry.
2. Add prompt used.
3. Add result and mistake.
4. Add one new rule.

**Exercise prompt:** "Choose your practice repo and create your first course journal entry."

**Closing recap:** "The notes you write during failures will become your best agent instructions later."

## 7. Office Hours

**Recording target:** 8-10 minutes, structured question-prep demo.

**Presenter script:**

- **0:00-0:45 - Hook:** "Office hours are most useful when you bring evidence, not just confusion."
- **0:45-2:00 - Purpose:** Explain that office hours are for stuck points, workflow review, task shaping, and decision support.
- **2:00-4:00 - What to bring:** Current goal, repo state, prompt used, command output, error, expected result, and specific ask.
- **4:00-6:00 - Good questions:** "Is this scoped well?", "What verification is missing?", "Should this be HITL or AFK?", "Where is the review gate?"
- **6:00-8:00 - Bad questions:** "What should I build?", "Why is everything broken?", or anything without evidence.
- **8:00-10:00 - After office hours:** Turn advice into a note, issue, checklist, or updated prompt.

**Screen direction:** Show a messy question being rewritten into a clear office-hours prompt.

**On-screen text:** "Context. Evidence. Decision needed."

**Demo steps:**

1. Write a messy stuck-point paragraph.
2. Extract context, evidence, and ask.
3. Produce a 90-second office-hours question.

**Exercise prompt:** "Prepare one office-hours question using context, evidence, and decision needed."

**Closing recap:** "The clearer your question, the more useful the answer."

## 8. Appendix: Cohort 003 -> Cohort 004 Changelog

**Recording target:** 8-12 minutes, changelog walkthrough.

**Presenter script:**

- **0:00-0:45 - Hook:** "A changelog is not trivia. It tells you what the course learned from previous learners."
- **0:45-2:00 - Why it exists:** Explain that tools, workflows, and course emphasis changed between cohorts.
- **2:00-4:00 - What to look for:** New lessons, renamed workflows, removed advice, updated commands, and improved exercises.
- **4:00-6:00 - Conflicting info:** If old Discord posts conflict with the current lesson, prefer the current lesson unless an instructor says otherwise.
- **6:00-8:30 - Prior cohort learners:** Ask them to mark old notes that need updating.
- **8:30-12:00 - Close:** Use the changelog as a guide to what changed and why, not as required memorization.

**Screen direction:** Show a sample changelog table with "old guidance," "new guidance," and "why changed."

**On-screen text:** "Current workflow wins over old notes."

**Demo steps:**

1. Show one old workflow.
2. Show the updated workflow.
3. Explain the reason for the change.

**Exercise prompt:** "If you have prior notes, mark anything that may be outdated. If not, write one question you have about the course evolution."

**Closing recap:** "The course will keep improving. Your workflow should too."
