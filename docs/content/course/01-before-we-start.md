# 01 - Before We Start

Available from May 18, 2026

## 1. Where We're Going

**Duration:** 10-12 minutes

**Outcome:** The learner understands the destination of the course: using AI coding agents as practical engineering collaborators, not as magic code generators.

**Video flow:**

- 0:00-1:00 - Open with the core promise: "By the end, you will know how to move from idea to working change with an agent, while keeping review, tests, and judgment in your hands."
- 1:00-3:00 - Explain the course arc: setup, basic agent harness usage, fundamentals, steering, planning, feedback loops, AFK agents, and human-in-the-loop workflows.
- 3:00-6:00 - Show the end-state workflow at a high level: define the task, inspect the repo, plan, execute, verify, review, and hand off.
- 6:00-9:00 - Set expectations: agents are powerful but non-deterministic; the course teaches control systems around them.
- 9:00-12:00 - Preview the capstone: a repeatable AI coding workflow that can handle real repo work.

**Demo:** Show a finished example task summary with a plan, files changed, checks run, and remaining risks.

**Exercise:** Write one sentence describing what you want AI coding to improve in your own workflow.

**Recap:** The course is about building a reliable workflow around agents, not just learning commands.

## 2. Navigating The Discord

**Duration:** 8-10 minutes

**Outcome:** The learner knows how to use the community space for help, discussion, code review, and office-hour follow-up.

**Video flow:**

- 0:00-1:00 - Explain why Discord matters: the course is not only videos; it is feedback and shared practice.
- 1:00-3:00 - Walk through the main channels: announcements, help, wins, office hours, cohort chat, and project-sharing.
- 3:00-5:00 - Model a good help request: context, goal, what you tried, error or output, relevant files, and exact question.
- 5:00-7:00 - Explain etiquette: avoid pasting huge logs, avoid vague "it does not work" posts, and close the loop when solved.
- 7:00-10:00 - Show how to search before asking and how to thread follow-up questions.

**Demo:** Draft a good Discord help post for a failed migration or broken test.

**Exercise:** Write a reusable help-request template with fields for goal, context, command run, output, and question.

**Recap:** Good community questions are small, specific, and easy to reproduce.

## 3. Repo Setup

**Duration:** 12-15 minutes

**Outcome:** The learner can clone or prepare the course repo and confirm the local development environment is ready.

**Video flow:**

- 0:00-1:00 - Explain why setup is part of the discipline: agents can only help if the local project can run.
- 1:00-3:00 - Show the repo structure: application code, tests, docs, scripts, migrations, and configuration.
- 3:00-6:00 - Walk through cloning or opening the repo, installing dependencies, and checking runtime versions.
- 6:00-9:00 - Run the baseline checks: install, lint, test, typecheck, or app startup, depending on the repo.
- 9:00-12:00 - Explain how to handle setup failures: capture exact command, exact error, environment details, and next hypothesis.
- 12:00-15:00 - Show the "ready" state: clean status or known changes, passing baseline, and documented local URL if applicable.

**Demo:** Run a clean setup checklist from terminal to first successful test or app boot.

**Exercise:** Create a `SETUP_NOTES.md` for your machine with commands that worked and any local deviations.

**Recap:** Before asking an agent to code, make sure the repo has a known working baseline.

## 4. Database Migrations

**Duration:** 10-13 minutes

**Outcome:** The learner understands what migrations are, how to run them safely, and how to ask an agent for migration-related help.

**Video flow:**

- 0:00-1:00 - Start with the risk: database changes affect state, not just files.
- 1:00-3:00 - Define migrations: ordered changes to schema or seed data that should be reproducible.
- 3:00-5:00 - Show where migrations live and how naming, ordering, and rollback conventions work.
- 5:00-8:00 - Run migrations in a local environment and inspect the resulting schema or tables.
- 8:00-11:00 - Explain how to prompt an agent: ask it to inspect current models, propose migration shape, and identify compatibility risks before editing.
- 11:00-13:00 - Call out production caution: backups, reviews, rollbacks, data migration plans, and no blind execution.

**Demo:** Add or inspect a simple local migration and verify it with a schema check.

**Exercise:** Write a migration safety checklist: current schema, desired change, backward compatibility, rollback, and verification.

**Recap:** Treat migrations as code plus data risk. Plan and verify them before running broadly.

## 5. Setting Up Your Agent Harness For The Course

**Duration:** 12-15 minutes

**Outcome:** The learner can configure a chosen agent harness for the course and understands the minimum settings needed for safe daily work.

**Video flow:**

- 0:00-1:00 - Explain the goal: the agent should be able to inspect and edit the repo while respecting permissions and local workflow.
- 1:00-4:00 - Walk through installing or launching the chosen harness. Mention terminal-based agents, CLI agents, IDE agents, and hosted agent apps as valid options.
- 4:00-6:00 - Explain the terminal session model: current directory, context, tool access, and command execution.
- 6:00-9:00 - Configure basic preferences: model choice, permissions, editor integration, and default safety prompts.
- 9:00-12:00 - Run a first harmless task: ask the agent to summarize the repo and list setup commands without editing files.
- 12:00-15:00 - Show the first safety pattern: ask before broad edits, verify commands, and summarize changes.

**Demo:** Start your chosen agent harness in the repo and ask: "Inspect this repo and tell me how to run it. Do not edit files."

**Exercise:** Save your preferred first prompt for a new repo session.

**Recap:** A good harness setup gives the agent enough access to help, but not unlimited freedom.

## 6. How To Take This Course

**Duration:** 8-12 minutes

**Outcome:** The learner knows the recommended rhythm for watching, practicing, reflecting, and applying each lesson.

**Video flow:**

- 0:00-1:00 - Set the rule: do not binge the course without doing the exercises.
- 1:00-3:00 - Explain the watch-practice-review rhythm: watch a lesson, run the demo, do the exercise, then write a short note.
- 3:00-5:00 - Show how to keep a course journal: prompts that worked, failures, fixes, and new rules.
- 5:00-8:00 - Explain when to pause a video: during setup, before running commands, before accepting agent output, and after failed checks.
- 8:00-12:00 - Recommend a project: use one real repo throughout so the lessons compound.

**Demo:** Create a course journal entry with "lesson, prompt used, result, mistake, next rule."

**Exercise:** Pick the repo or project you will use for practice and write why it is a good training ground.

**Recap:** The course works best as deliberate practice, not passive watching.

## 7. Office Hours

**Duration:** 8-10 minutes

**Outcome:** The learner knows how to prepare for office hours and get high-quality help.

**Video flow:**

- 0:00-1:00 - Explain office hours as a place for stuck points, workflow design, and review, not general venting.
- 1:00-3:00 - Show what to bring: repo state, prompt used, exact output, what you expected, and what you want feedback on.
- 3:00-5:00 - Explain useful question types: "Is this task scoped well?", "Where should I put a human review gate?", "What verification is missing?"
- 5:00-7:00 - Explain what not to bring: broad project tours, missing setup info, or unclear goals.
- 7:00-10:00 - Show how to convert office-hour feedback into a next action or course note.

**Demo:** Turn a messy stuck point into a clear 90-second office-hours question.

**Exercise:** Prepare one office-hours question using context, problem, evidence, and ask.

**Recap:** The better your evidence, the better the help you get.

## 8. Appendix: Cohort 003 -> Cohort 004 Changelog

**Duration:** 8-12 minutes

**Outcome:** The learner understands what changed between cohorts and how to use the changelog as context instead of distraction.

**Video flow:**

- 0:00-1:00 - Explain why changelogs matter: they show what the instructors learned from prior cohorts.
- 1:00-3:00 - Summarize major changes: updated tools, revised lessons, new reusable workflows, better exercises, and workflow improvements.
- 3:00-5:00 - Explain how to interpret changes: a removed lesson may mean the idea moved elsewhere, not that it stopped mattering.
- 5:00-8:00 - Show how to find the current recommendation when old Discord posts or notes conflict with the latest material.
- 8:00-12:00 - Encourage learners from prior cohorts to compare workflows and update their local notes.

**Demo:** Compare one old workflow and one new workflow, then explain what changed and why.

**Exercise:** If you have prior notes, mark which ones need updating for Cohort 004.

**Recap:** The changelog is a map of course evolution. Use it to stay aligned with the current workflow.
