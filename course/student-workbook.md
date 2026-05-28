# Student Workbook

This workbook turns the course into hands-on practice using the CourseForge sample app.

Each task produces an artifact. Students should keep these artifacts in a `course-work/` folder or in the sample app repo.

## 01 - Before We Start

### Task 1: Personal AI Coding Goal

Write:

- One workflow you want AI coding to speed up
- One engineering responsibility you will keep human-owned
- One risk you are worried about in real codebases

**Deliverable:** `course-work/01-ai-coding-goal.md`

### Task 2: Setup Notes

Set up the CourseForge repo or your chosen practice repo.

Include:

- Install command
- Dev command
- Test command
- Migration command, if applicable
- One setup problem and how you investigated it

**Deliverable:** `SETUP_NOTES.md`

### Task 3: Migration Safety Checklist

For the CourseForge domain model, imagine adding `ScriptDraft`.

Write:

- Current schema assumption
- Desired schema change
- Backward compatibility concern
- Rollback plan
- Verification command or query

**Deliverable:** `course-work/01-migration-checklist.md`

## 02 - Getting To Know Your Agent Harness

### Task 1: Read-Only Repo Orientation

Ask your chosen agent harness:

```text
Inspect this repo and tell me how it is organized. Do not edit files. Include key folders, likely test commands, and one safe first task.
```

**Deliverable:** `course-work/02-session-orientation.md`

### Task 1b: Harness Translation

Write down which harness style you are using for the course:

- Terminal-based agent
- CLI agent
- IDE agent
- Hosted agent app
- Other repo-aware harness

Then write how that tool handles:

- Reading files
- Applying edits
- Running commands
- Asking for permissions
- Showing diffs

**Deliverable:** `course-work/02-harness-translation.md`

### Task 2: Prompt Rewrite

Rewrite these vague prompts:

- "Improve the UI."
- "Fix lesson scripts."
- "Make publishing work."

Use:

- Goal
- Scope
- Constraints
- Done condition

**Deliverable:** `course-work/02-prompt-rewrites.md`

### Task 3: Permission Policy

Write approval rules for:

- Network access
- Destructive commands
- Database migrations
- Broad file edits
- External publishing APIs

**Deliverable:** `course-work/02-permission-policy.md`

## 03 - Day 1 Fundamentals

### Task 1: Codebase Exploration Map

Map the CourseForge lesson list feature.

Find:

- Entry point
- Core logic or component
- Test file or missing test location

**Deliverable:** `course-work/03-file-map.md`

### Task 2: Build A Small Feature

Add one of:

- Lesson status filter
- Duration display on lesson cards
- Empty state for courses with no modules

Requirements:

- Inspect existing pattern first
- Change the smallest useful surface
- Run one verification command
- Write a handoff

**Deliverable:** Code change plus `course-work/03-feature-handoff.md`

### Task 3: Compaction Note

After the feature, write a compact continuation note with:

- Goal
- Files changed
- Checks run
- Decisions
- Risks
- Next step

**Deliverable:** `course-work/03-compaction.md`

## 04 - Day 2 Steering

### Task 1: Create Repo Instructions

Add repo instructions for CourseForge:

- Setup command
- Test command
- Search preference
- Code style
- Safety rules
- Final response format

Use the file or setting your harness supports: `AGENTS.md`, `CLAUDE.md`, `.github/copilot-instructions.md`, opencode configuration, IDE custom instructions, or a linked project guide.

**Deliverable:** repo instruction file or custom-instructions export

### Task 2: Progressive Disclosure Map

Split CourseForge guidance into:

- Top-level repo instructions
- Module-specific notes for lessons/scripts
- Task-specific notes for publishing or AI writing assistant

**Deliverable:** `course-work/04-progressive-disclosure.md`

### Task 3: Reusable Workflow Candidate

Choose one repeated workflow:

- Do work
- Diagnose bug
- Write PRD
- Prototype UI
- Handoff

Write the trigger and six-step workflow.

**Deliverable:** `course-work/04-reusable-workflow-candidate.md`

## 05 - Day 3 Planning

### Task 1: PRD

Write a PRD for the CourseForge AI writing assistant.

Include:

- Problem
- User
- Scope
- Non-goals
- Acceptance criteria
- Risks
- Rollout

**Deliverable:** `course-work/05-writing-assistant-prd.md`

### Task 2: Multi-Phase Plan

Split the PRD into phases:

- Data model
- UI shell
- First writing mode
- Review flow
- Tests
- Later modes

Each phase needs:

- Goal
- Inputs
- Outputs
- Validation
- Handoff

**Deliverable:** `course-work/05-multi-phase-plan.md`

### Task 3: Tracer Bullet

Define the thinnest real end-to-end path:

Example: lesson script text -> hook-generation mode -> generated suggestion saved as a draft note.

**Deliverable:** `course-work/05-tracer-bullet.md`

## 06 - Day 4 Feedback Loops

### Task 1: Do-Work Workflow

Write a reusable do-work workflow:

1. Understand the request
2. Inspect files
3. Plan briefly
4. Implement narrowly
5. Verify
6. Summarize

Add escalation rules and final report format.

**Deliverable:** `course-work/06-do-work-workflow.md`

### Task 2: Red-Green-Refactor

Implement the rule:

```text
A lesson cannot move to recorded unless its latest script draft is approved.
```

Deliver:

- Failing test
- Minimal passing change
- Refactor, if useful
- Test output

**Deliverable:** Code change plus `course-work/06-rgr-report.md`

### Task 3: Pre-Commit Plan

Define repo checks:

- Formatter
- Linter
- Typecheck
- Tests
- Secret scan, if relevant

**Deliverable:** `course-work/06-pre-commit-plan.md`

## 07 - Day 5 AFK Agents

### Task 1: AFK Task Envelope

Create an AFK-safe task:

```text
Normalize empty-state copy across CourseForge screens.
```

Include:

- Objective
- Allowed files
- Max files changed
- Stop condition
- Validation
- Final report format

**Deliverable:** `course-work/07-afk-envelope.md`

### Task 2: Agent-Ready Issues

Write three GitHub Issue drafts:

- Docs cleanup
- Test naming cleanup
- Seed data cleanup

Each issue needs:

- Context
- Scope
- Acceptance criteria
- Validation command
- HITL or AFK label

**Deliverable:** `course-work/07-agent-ready-issues.md`

### Task 3: Backlog State Machine

Define states:

- Inbox
- Needs shaping
- Ready for agent
- Running
- Blocked
- Review
- Done

Add entry and exit criteria for each.

**Deliverable:** `course-work/07-backlog-state-machine.md`

## 08 - Day 6 Human In The Loop Patterns

### Task 1: HITL vs AFK Classification

Classify these CourseForge tasks:

- Design writing assistant modes
- Normalize button copy
- Add publishing sync to YouTube
- Research transcript editing libraries
- Improve architecture of lesson status transitions

Use:

- Ambiguity
- Blast radius
- Verification quality
- Reversibility

**Deliverable:** `course-work/08-hitl-afk-classification.md`

### Task 2: Research Brief

Research one question:

```text
What is the safest first implementation for a browser-based transcript or video timeline editor?
```

Require:

- Sources
- Findings
- Uncertainty
- Recommendation
- Next test

**Deliverable:** `course-work/08-research-brief.md`

### Task 3: UI Prototype

Prototype the lesson script review screen.

Include:

- Audience
- Workflow
- Data shown
- States
- Constraints
- Keep/change/discard decision

**Deliverable:** `course-work/08-prototype-decision.md`

### Task 4: Architecture Review

Ask the agent for architecture opportunities without editing code.

Focus:

- Module boundaries
- Status transition logic
- Tests
- Domain language
- Agent navigability

**Deliverable:** `course-work/08-architecture-review.md`

## Capstone

Complete the **Lesson Script Review Workflow**:

1. Create a task brief or GitHub Issue.
2. Map affected modules.
3. Write a phase plan.
4. Execute the first tracer bullet.
5. Use red-green-refactor for one status rule.
6. Run verification.
7. Produce a handoff.

**Final deliverables:**

- Task brief or issue
- Scope and non-goals
- Module map
- Execution prompt
- Files changed
- Checks run
- Handoff
- One lesson learned

## Final Reflection

Answer:

- What did you delegate?
- What did you keep human-owned?
- What feedback loop caught the most useful problem?
- Where did the agent need better steering?
- What will you add to repo instructions, a reusable workflow, or memory next time?
