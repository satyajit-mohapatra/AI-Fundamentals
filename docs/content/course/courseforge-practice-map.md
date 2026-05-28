# CourseForge Practice Map

This map shows how the sample app grows across the course.

## Practice Rule

Students should stay on the engineer's middle path:

- Delegate enough to move faster.
- Keep enough ownership to preserve judgment, codebase sense, and correctness.
- Use tests, reviews, and handoffs to make agent work trustworthy.

## Module Map

| Module | CourseForge slice | Practice focus | Student output |
|---|---|---|---|
| 01 - Before We Start | Product framing, setup, and baseline checks | Understand the app goal and production-style risks | Setup notes, migration checklist, personal AI coding goal |
| 02 - Getting To Know Your Agent Harness | Read-only repo orientation | Start safe sessions in any harness, prompt clearly, use permissions deliberately | Session worksheet, prompt rewrites, permission policy |
| 03 - Day 1 Fundamentals | Lesson list and lesson status feature | Explore codebase, build a thin feature, compact and hand off | File map, verified feature slice, handoff |
| 04 - Day 2 Steering | Repo instructions and reusable workflows | Add harness-specific repo instructions, progressive disclosure, and first reusable workflow candidate | Agent instructions, context map, workflow outline |
| 05 - Day 3 Planning | AI writing assistant feature | PRD, multi-phase plan, tracer bullet, user questions | PRD, phase plan, tracer bullet report |
| 06 - Day 4 Feedback Loops | Script approval and publish-readiness rule | Do-work workflow, pre-commit, red-green-refactor | Workflow, failing/passing tests, check report |
| 07 - Day 5 AFK Agents | GitHub Issues backlog and AFK task queue | Shape unattended tasks with scope, stop conditions, and reports | AFK envelope, agent-ready issues, backlog state machine |
| 08 - Day 6 HITL Patterns | Script review UI, research, prototype, architecture | Choose HITL vs AFK, research risky choices, prototype, review architecture | Research brief, prototype decision, architecture review, capstone |

## Recommended Build Path

### Slice 1: Course and Lesson Library

Build a basic CourseForge library:

- Create course
- Create module
- Create lesson
- Show lesson duration and status
- Filter by lesson status

**Why this slice:** It is small, visible, and easy to verify. It gives students a safe first feature.

### Slice 2: Lesson Script Drafts

Add script drafts:

- Create draft for a lesson
- Mark draft as `needs-review`
- Approve draft
- Show latest draft status on lesson page

**Why this slice:** It introduces state transitions and tests at sensible boundaries.

### Slice 3: AI Writing Assistant Modes

Add the first AI-assisted writing mode as a mock or local placeholder:

- Hook generator
- Recap generator
- Exercise prompt generator
- Rewrite for clarity

**Why this slice:** It lets students practice PRDs, tracer bullets, and HITL gates without requiring a real AI API.

### Slice 4: Publishing Tasks

Add publishing task tracking:

- CMS task
- YouTube task
- Newsletter task
- Social task
- Blocked/done state

**Why this slice:** It introduces downstream operational risk and AFK backlog candidates.

### Slice 5: Script Review Screen Prototype

Prototype the review screen:

- Script body
- Review status
- Generated suggestions
- Approval action
- Publishing readiness warning

**Why this slice:** It lets students compare UI options and decide before production implementation.

## Suggested Student Task Labels

Use these labels in GitHub Issues or a local Kanban board:

- `needs-shaping`
- `ready-for-agent`
- `hitl`
- `afk-candidate`
- `blocked`
- `review-needed`
- `good-first-agent`
- `research`
- `prototype`
- `architecture`

## Task Classification Examples

### AFK Candidate

```text
Normalize empty-state copy across lesson and module list screens.
Allowed files: UI copy files and lesson/module list components.
Stop if more than 5 files need changes.
Validation: run lint and affected UI tests.
Report: files changed, copy changed, checks run, unresolved concerns.
```

### HITL Task

```text
Decide which AI writing assistant modes should ship first.
Human decision needed because this affects product scope, UI design, and test strategy.
Agent can research options and propose tradeoffs, but should not implement until approved.
```

### Not Agent-Ready

```text
Make CourseForge publishing great.
```

This must be shaped into:

- User problem
- Publishing channels
- Non-goals
- First tracer bullet
- Validation strategy
- HITL review gates

## Capstone Recommendation

Use the **Lesson Script Review Workflow** as the final project because it touches the full course:

- Product thinking
- Domain modeling
- Codebase exploration
- PRD
- Multi-phase planning
- Tracer bullet
- Red-green-refactor
- HITL gate
- AFK-ready follow-up issues
- Final handoff
