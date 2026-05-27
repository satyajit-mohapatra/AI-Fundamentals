# Sample App To Build: CourseForge

CourseForge is the running sample app for the course. It is a production-style course creation workspace for instructors who plan, script, record, review, and publish technical courses.

The app is intentionally chosen because it has realistic product complexity:

- Structured content: courses, modules, lessons, scripts, exercises
- Workflow state: idea, drafted, reviewed, recorded, edited, published
- Media-adjacent work: recording notes, transcript segments, video timeline markers
- AI-assisted writing: hook generation, rewrite modes, summaries, exercise prompts
- Publishing operations: CMS, YouTube, newsletter, and social sync placeholders
- Team process: GitHub Issues, Kanban, review gates, AFK task queues

Students do not need to build the entire app. They build it through thin, verifiable slices that match the course lessons.

## Product Brief

**Problem:** Instructors lose time moving between notes, scripts, recording checklists, edits, publishing tasks, and feedback. AI can help, but only if the workflow keeps content structured and reviewable.

**Primary user:** A technical course creator who needs to plan and produce a cohort-based course.

**Core workflow:**

1. Create a course.
2. Add modules and lessons.
3. Draft a lesson script.
4. Generate alternate hooks or recaps with an AI writing assistant.
5. Track recording and editing status.
6. Review lesson readiness.
7. Queue publishing tasks.

## Suggested Tech Shape

Use whatever stack the instructor wants, but the sample app should have enough structure to practice real agent work.

Recommended simple stack:

- TypeScript
- React or Next.js
- SQLite or Postgres
- Prisma, Drizzle, or a lightweight repository layer
- Vitest or Jest
- Playwright only if UI flow tests are needed
- ESLint, Prettier, and pre-commit hooks

Alternative low-friction stack:

- TypeScript
- Vite React app
- In-memory JSON store for early lessons
- Local persistence added later

## Domain Model

Use this starting model:

- `Course`
  - `id`
  - `title`
  - `description`
  - `status`: `idea | active | archived`
- `Module`
  - `id`
  - `courseId`
  - `title`
  - `availableFrom`
  - `position`
- `Lesson`
  - `id`
  - `moduleId`
  - `title`
  - `durationMinutes`
  - `status`: `outline | scripted | recorded | edited | published`
  - `objective`
- `ScriptDraft`
  - `id`
  - `lessonId`
  - `version`
  - `body`
  - `reviewStatus`: `draft | needs-review | approved`
- `WritingAssistantMode`
  - `id`
  - `name`
  - `purpose`
  - `promptTemplate`
- `PublishingTask`
  - `id`
  - `lessonId`
  - `channel`: `cms | youtube | newsletter | linkedin | x`
  - `status`: `todo | blocked | done`
- `AgentTask`
  - `id`
  - `source`
  - `title`
  - `scope`
  - `acceptanceCriteria`
  - `validationCommand`
  - `mode`: `hitl | afk`

## Minimum Viable App

By the end of the course, a student should have one of these:

- A working UI where courses, modules, lessons, and lesson scripts can be created and reviewed.
- A CLI or terminal app that models the same workflow and proves the agent practices.
- A documented repo workflow using issues, reusable workflows, tests, and handoffs even if the UI remains simple.

## Feature Slices By Course Module

### 01 - Before We Start

**Example:** Open the sample repo, identify the app purpose, and record setup commands.

**Student task:** Create `SETUP_NOTES.md` with install, test, dev, migration, and troubleshooting notes.

**Deliverable:** Setup notes plus one successful baseline check or a documented setup failure.

### 02 - Getting To Know Your Agent Harness

**Example:** Ask the chosen agent harness to inspect CourseForge and explain the data model without editing files.

**Student task:** Start an agent session in your chosen harness and ask for a read-only orientation.

**Deliverable:** Session summary that lists key folders, commands, and first safe task.

### 03 - Day 1 Fundamentals

**Example feature:** Add lesson status filtering to the lesson list.

**Student task:** Use codebase exploration to map the entry point, core logic, and test file before editing.

**Deliverable:** A small verified feature slice plus a handoff.

### 04 - Day 2 Steering

**Example:** Add repo instructions for CourseForge using the mechanism your harness supports.

**Student task:** Define repo-specific commands, style rules, testing expectations, and safety rules.

**Deliverable:** repo instruction file or custom-instructions export plus one tiny task showing the agent followed it.

### 05 - Day 3 Planning

**Example larger feature:** Add an AI writing assistant with modes for hook, recap, exercise, and rewrite.

**Student task:** Write a PRD, split it into phases, and choose a tracer bullet.

**Deliverable:** PRD, phase plan, tracer bullet definition, and phase-one execution prompt.

### 06 - Day 4 Feedback Loops

**Example:** Add validation so a lesson cannot be marked `published` without an approved script.

**Student task:** Use red-green-refactor to create the failing test, implement the rule, and refactor safely.

**Deliverable:** Failing test evidence, passing test evidence, diff summary, and pre-commit result.

### 07 - Day 5 AFK Agents

**Example:** Convert repetitive backlog items into agent-ready GitHub Issues.

**Student task:** Create an AFK-safe task queue for docs cleanup, test naming cleanup, or small repeated UI copy changes.

**Deliverable:** Three agent-ready issues with scope, stop condition, validation, and final report format.

### 08 - Day 6 Human In The Loop Patterns

**Example:** Prototype the lesson script review screen and choose a direction.

**Student task:** Run a research or prototype phase, classify tasks as HITL or AFK, and complete the final workflow.

**Deliverable:** Prototype decision note, Kanban state rules, architecture review note, and capstone handoff.

## Suggested Feature Backlog

Use these as student tasks or instructor demo tasks.

### Good First Agent Tasks

- Add empty-state copy to the lesson list.
- Add `durationMinutes` display to lesson cards.
- Add a filter for `outline`, `scripted`, and `recorded` lessons.
- Add a seed course with two modules and five lessons.
- Add a script review badge for `draft`, `needs-review`, and `approved`.
- Add tests for lesson status transitions.

### HITL Tasks

- Decide which writing assistant modes should ship first.
- Choose whether publishing sync should be mocked or integrated.
- Design the lesson script review workflow.
- Decide how strict publishing readiness rules should be.
- Choose whether the app should optimize for solo instructors or teams.

### AFK Candidate Tasks

- Normalize copy across empty states.
- Add missing test names.
- Generate issue descriptions from accepted PRD phases.
- Update docs after a feature lands.
- Convert hard-coded sample lessons into seed data.

### Not Agent-Ready Yet

- "Make the app great."
- "Add all publishing integrations."
- "Refactor the whole data layer."
- "Improve the UI."
- "Make the AI assistant smart."

Each not-ready task must be shaped into a PRD, prototype, tracer bullet, or research task before implementation.

## Capstone Option

Build the **Lesson Script Review Workflow**:

1. Instructors can create a lesson script draft.
2. They can mark it as `needs-review`.
3. They can approve the script.
4. A lesson cannot move to `recorded` unless the latest script is approved.
5. The UI or CLI shows the script status clearly.
6. Tests protect the status rule.
7. The final handoff lists changed files, checks run, and unresolved product decisions.

This capstone touches product thinking, codebase exploration, planning, tests, feedback loops, and handoff without requiring the full app.
