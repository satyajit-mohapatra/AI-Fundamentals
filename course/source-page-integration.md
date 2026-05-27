# Source Page Integration Notes

Source page reviewed and used as a course reference: https://www.aihero.dev/cohorts/ai-coding-for-real-engineers-m0k0w

These notes translate the page into course design decisions for this local curriculum. They are intentionally paraphrased and adapted into original teaching material.

See also `generative-ai-foundations.md` for the researched technical primer that defines AI, generative AI, LLMs, prompts, context, harnesses, agents, grounding, and risk for students before they start the coding-agent workflow.

## Positioning To Carry Through The Course

The course should frame AI coding as a professional engineering workflow, not a shortcut around engineering. The source page repeatedly contrasts reactive AI use with a deliberate middle path:

- Avoid delegating everything to the agent.
- Avoid delegating nothing and keeping all work in the human's head.
- Teach a proactive workflow where the human owns judgment, process, and verification.
- Treat AI coding tools as powerful but risky tools that must fit into an existing software development process.

## Risks To Make Concrete

The course should repeatedly return to the production-style risks that make agent work different from toy demos:

- Data loss or destructive changes
- Non-compliance with team, industry, or corporate standards
- Subtle breaking changes that escape notice
- Losing the team's sense of the codebase
- Technical debt created at agent speed
- Unreviewed or low-quality tests
- Agents operating outside the context where they are still useful

## Engineering Skills To Teach Explicitly

The page presents AI coding as an extension of engineering fundamentals. The course should make these skills visible in exercises and rubrics:

- Communicating: clear requirements, observations, constraints, and handoffs
- Anticipating: identifying risks and failure modes before they happen
- Planning: turning large work into PRDs and execution plans
- Decomposing: breaking plans into scoped, iterative tasks
- Delegating: deciding what to give to agents, subagents, or humans
- Systematizing: building feedback loops with types, tests, hooks, and reviews
- Parallelizing: balancing coding, research, review, and QA work

## Sample App Direction

The source page uses a professional course-creator product as the motivating example. This curriculum adopts a similar, original sample app:

**CourseForge** - a production-style course creation workspace for instructors.

CourseForge helps instructors manage course ideas, lessons, scripts, recordings, publishing tasks, and review workflows. It is large enough to support realistic AI coding exercises, but small enough to build incrementally.

The app should include these domains over the course:

- Course and module organization
- Lesson script drafting and review
- Recording checklist and asset tracking
- Lightweight in-browser video timeline or transcript editor
- AI writing assistant modes for hooks, summaries, exercises, and rewrites
- Publishing sync placeholders for CMS, YouTube, newsletter, and social channels
- GitHub Issues style backlog for agent-ready work
- Kanban board for HITL and AFK task flow

## Course-Level Practice Pattern

Every module should point back to CourseForge:

- Modules 01-02: set up the repo and learn agent basics against the sample app.
- Module 03: explore the codebase and build a small feature.
- Module 04: add agent steering with repo instructions, reusable workflows, and memory.
- Module 05: write a PRD and plan a larger CourseForge feature with a tracer bullet.
- Module 06: add feedback loops, pre-commit checks, and red-green-refactor.
- Module 07: convert CourseForge work into AFK-ready GitHub Issues.
- Module 08: run research, prototype UI, improve architecture, and complete the final workflow.

## Rubric Additions

Student work should be assessed on:

- Whether they chose the right level of delegation
- Whether the task was scoped and decomposed before execution
- Whether the agent had enough context but not too much noise
- Whether validation was meaningful and repeatable
- Whether the final handoff preserves codebase sense
- Whether the sample app improved without uncontrolled scope creep
