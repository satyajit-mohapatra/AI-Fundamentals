# AI Coding Course

This curriculum expands each listed course item into a short 8-15 minute video-ready lesson. Each lesson is written so it can be turned directly into a screen recording, talking-head segment, live demo, or workshop exercise.

## Course Structure

- `01-before-we-start.md` - orientation, setup, course workflow, and cohort logistics
- `02-getting-to-know-agent-harness.md` - core agent harness usage, terminal flow, IDE flow, shell commands, and permissions
- `03-day-1-fundamentals.md` - LLM constraints, subagents, exploration, feature work, context, compaction, and handoff
- `04-day-2-steering.md` - repo instructions, steering, progressive disclosure, reusable workflows, and memory
- `05-day-3-planning.md` - massive tasks, PRDs, multi-phase plans, tracer bullets, execution, and user questions
- `06-day-4-feedback-loops.md` - feedback loops, reusable workflows, pre-commit, and red-green-refactor
- `07-day-5-afk-agents.md` - AFK agents, sandboxes, backlogs, GitHub Issues, and queued work
- `08-day-6-human-in-the-loop-patterns.md` - HITL/AFK task design, Kanban, research, prototypes, architecture, and final workflow
- `source-page-integration.md` - notes adapted from the AI Hero course page into this local curriculum
- `tool-agnostic-agent-harness-guide.md` - translation guide for common agent harnesses and similar tools
- `sample-app-courseforge.md` - the running sample app students build throughout the course
- `courseforge-practice-map.md` - module-by-module sample app build path
- `student-workbook.md` - concrete student tasks and deliverables
- `video-scripts/` - detailed recording scripts for every lesson

## Standard Video Format

Use this structure for each 8-15 minute lesson:

1. Hook: name the problem the learner has probably felt.
2. Concept: explain the mental model in plain language.
3. Demo: show the workflow in a terminal, editor, repo, or issue tracker.
4. Exercise: give the learner one concrete action.
5. Recap: repeat the decision rule they should remember.

## Suggested Course Outcomes

By the end, learners should be able to:

- Set up a repo and coding-agent environment safely.
- Use your chosen agent harness from the terminal, CLI, or IDE without losing control of scope.
- Explore unfamiliar codebases and build small features with verification.
- Steer agents using repo instructions, reusable workflows, progressive disclosure, and memory.
- Plan large work using PRDs, tracer bullets, and multi-phase execution.
- Build feedback loops with tests, linting, pre-commit, and red-green-refactor.
- Design AFK agent workflows with sandboxing, backlogs, and review gates.
- Combine HITL and AFK patterns into a practical AI coding workflow.

## Running Sample App

The course now uses **CourseForge** as the running sample app. CourseForge is a production-style course creation workspace for instructors. Students build it in small slices: course and lesson library, script drafts, writing assistant modes, publishing tasks, and a script review workflow.

The app is designed to make the course concrete:

- It is large enough to require PRDs, decomposition, and tracer bullets.
- It is risky enough to teach HITL, AFK boundaries, and permissions.
- It is structured enough to support tests, pre-commit, and architecture review.
- It is familiar enough that students can focus on the AI coding workflow rather than domain confusion.

Start with `tool-agnostic-agent-harness-guide.md`, then use `sample-app-courseforge.md` and `student-workbook.md` for module tasks.
