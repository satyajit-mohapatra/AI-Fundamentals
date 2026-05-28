# 08 - Day 6 Human In The Loop Patterns

Available from June 8, 2026

## 1. HITL And AFK Tasks

**Duration:** 10-12 minutes

**Outcome:** The learner can distinguish tasks that need human-in-the-loop control from tasks safe for AFK execution.

**Video flow:**

- 0:00-1:00 - Define the decision: should the agent pause for humans or run unattended?
- 1:00-3:00 - Compare HITL tasks: ambiguous, risky, product-heavy, broad scope, or external impact.
- 3:00-5:00 - Compare AFK tasks: bounded, repetitive, reversible, and easy to verify.
- 5:00-8:00 - Introduce a decision matrix: ambiguity, blast radius, verification quality, and reversibility.
- 8:00-10:00 - Classify example tasks into HITL, AFK, or not agent-ready.
- 10:00-12:00 - Explain how HITL can prepare tasks for later AFK execution.

**Demo:** Sort five backlog items into HITL, AFK, and needs-shaping.

**Exercise:** Classify three tasks from your own backlog.

**Recap:** Use HITL for judgment and AFK for bounded execution.

## 2. Dont Plan Kanban

**Duration:** 8-10 minutes

**Outcome:** The learner understands why Kanban should manage flow, not become a substitute for thinking.

**Video flow:**

- 0:00-1:00 - Open with the warning: moving cards is not the same as planning work.
- 1:00-3:00 - Explain what Kanban is good for: visibility, WIP limits, status, and flow.
- 3:00-5:00 - Explain what Kanban is bad for: requirements discovery, architecture decisions, and task shaping.
- 5:00-7:00 - Show a weak board full of vague cards.
- 7:00-10:00 - Show a stronger board where each ready card already has scope and acceptance criteria.

**Demo:** Convert a vague Kanban card into an agent-ready card.

**Exercise:** Review one board column and mark which cards are not actually ready.

**Recap:** Kanban tracks work. It does not replace shaping the work.

## 3. Using The Kanban Workflow

**Duration:** 10-13 minutes

**Outcome:** The learner can use a Kanban workflow to move agent tasks through clear states.

**Video flow:**

- 0:00-1:00 - Define the workflow goal: manage task flow without losing context.
- 1:00-3:00 - Introduce common columns: inbox, needs shaping, ready, in progress, blocked, review, done.
- 3:00-5:00 - Explain entry criteria for "ready": objective, scope, acceptance, verification, owner.
- 5:00-8:00 - Demonstrate moving a task based on evidence, not optimism.
- 8:00-11:00 - Show how agents should update cards with commands run, files touched, and blockers.
- 11:00-13:00 - Explain WIP limits for human review capacity.

**Demo:** Move one task from inbox to ready to review with notes at each transition.

**Exercise:** Write column entry and exit criteria for your agent board.

**Recap:** A Kanban workflow is useful when states mean something concrete.

## 4. Research

**Duration:** 10-12 minutes

**Outcome:** The learner understands how to use agents for research without mixing facts, guesses, and recommendations.

**Video flow:**

- 0:00-1:00 - Explain why research needs structure: agents can summarize confidently even when evidence is thin.
- 1:00-3:00 - Define research outputs: question, sources, findings, uncertainty, recommendation, and next action.
- 3:00-5:00 - Explain source quality: official docs, repo evidence, primary sources, current information.
- 5:00-8:00 - Show how to ask for citations or file references when research affects decisions.
- 8:00-10:00 - Teach separation: facts, interpretation, and recommendation should be labeled.
- 10:00-12:00 - Explain when research should become a spike or prototype.

**Demo:** Ask an agent to research a library migration and require findings, risks, and source links.

**Exercise:** Write a research brief with one question and three required output fields.

**Recap:** Good research makes uncertainty visible instead of hiding it in a confident summary.

## 5. Trying Out Research

**Duration:** 12-15 minutes

**Outcome:** The learner can run a small research task and turn the result into a decision.

**Video flow:**

- 0:00-1:00 - Choose a concrete question: library choice, API behavior, migration path, or performance risk.
- 1:00-3:00 - Write the research prompt with source requirements and output format.
- 3:00-6:00 - Let the agent gather evidence and summarize findings.
- 6:00-9:00 - Review the evidence: source quality, missing data, assumptions, and relevance.
- 9:00-12:00 - Convert findings into a recommendation with tradeoffs.
- 12:00-15:00 - Decide whether to proceed, prototype, or ask a follow-up question.

**Demo:** Research whether a package supports a needed feature and decide whether to test it locally.

**Exercise:** Run one research prompt and write a final decision note.

**Recap:** Research is complete when it supports a decision or clearly identifies the next test.

## 6. Prototyping

**Duration:** 10-12 minutes

**Outcome:** The learner understands prototyping as a way to answer questions before committing implementation.

**Video flow:**

- 0:00-1:00 - Define a prototype: a disposable artifact built to learn something.
- 1:00-3:00 - Contrast prototype, tracer bullet, and production feature.
- 3:00-5:00 - List good prototype questions: UI feel, API shape, data model, performance, user flow, feasibility.
- 5:00-8:00 - Explain prototype boundaries: throwaway location, no production commitment, clear learning goal.
- 8:00-10:00 - Show how to timebox a prototype.
- 10:00-12:00 - Explain how to extract lessons without copying bad prototype code.

**Demo:** Sketch a quick UI or CLI prototype for a risky feature idea.

**Exercise:** Write one prototype question and a 30-minute timebox.

**Recap:** Prototype to learn, not to accidentally ship.

## 7. Trying Out UI Prototyping

**Duration:** 12-15 minutes

**Outcome:** The learner can use an agent to create UI options for review before implementation.

**Video flow:**

- 0:00-1:00 - Explain that UI work benefits from seeing options quickly.
- 1:00-3:00 - Define the prototype brief: audience, workflow, data shown, states, constraints, and visual tone.
- 3:00-6:00 - Ask the agent for multiple UI variations, not one polished guess.
- 6:00-9:00 - Review options using criteria: clarity, density, workflow speed, accessibility, and fit with existing design.
- 9:00-12:00 - Choose one direction and list what should survive into production.
- 12:00-15:00 - Explain how to avoid copying prototype shortcuts.

**Demo:** Generate or sketch three layouts for the same dashboard workflow and compare tradeoffs.

**Exercise:** Write a UI prototype brief for one screen in your project.

**Recap:** UI prototyping is useful when it creates concrete options for human judgment.

## 8. The Prototype Workflow

**Duration:** 10-13 minutes

**Outcome:** The learner can use a prototype workflow to structure throwaway experiments.

**Video flow:**

- 0:00-1:00 - Define what the workflow should enforce: question, timebox, artifact, review, decision.
- 1:00-3:00 - Show the workflow phases: clarify learning goal, build disposable version, inspect result, summarize lessons.
- 3:00-5:00 - Explain output formats: screenshot, demo link, CLI transcript, code sketch, or decision note.
- 5:00-8:00 - Demonstrate invoking the workflow for a small UI or data-model experiment.
- 8:00-11:00 - Show how the workflow prevents prototype creep.
- 11:00-13:00 - Explain how prototype findings feed PRDs and plans.

**Demo:** Run a prototype workflow and end with "keep, change, discard" decisions.

**Exercise:** Write a prototype-workflow prompt for your risky feature question.

**Recap:** The prototype workflow makes experiments bounded and decision-oriented.

## 9. Designing Codebases Ai Loves

**Duration:** 12-15 minutes

**Outcome:** The learner understands codebase traits that make agent work easier and safer.

**Video flow:**

- 0:00-1:00 - State the principle: agents perform better in codebases with clear structure and feedback.
- 1:00-3:00 - Name helpful traits: small modules, explicit boundaries, good names, tests, examples, docs, and consistent patterns.
- 3:00-5:00 - Name harmful traits: hidden side effects, huge files, unclear ownership, inconsistent conventions, and missing tests.
- 5:00-8:00 - Explain "AI navigability": can an agent find the right code and know how to change it?
- 8:00-11:00 - Show how architecture and tests improve agent reliability.
- 11:00-15:00 - Turn this into review criteria for future refactors.

**Demo:** Compare two modules and identify which one an agent can safely modify.

**Exercise:** Score one module in your repo for clarity, boundaries, tests, and examples.

**Recap:** A codebase agents love is usually a codebase humans can understand too.

## 10. The Improve Codebase Architecture Workflow

**Duration:** 12-15 minutes

**Outcome:** The learner can use an architecture-improvement workflow to identify refactors that help both humans and agents.

**Video flow:**

- 0:00-1:00 - Define the purpose: find changes that make the codebase easier to navigate, test, and evolve.
- 1:00-3:00 - Explain what the workflow should inspect: module boundaries, duplicated logic, shallow wrappers, tests, and domain language.
- 3:00-6:00 - Show how to ask for opportunities, not immediate rewrites.
- 6:00-9:00 - Rank opportunities by impact, risk, and testability.
- 9:00-12:00 - Convert one opportunity into a small refactor plan.
- 12:00-15:00 - Add safety: no broad refactor without tests and review.

**Demo:** Ask an agent to identify three architecture improvements and choose one small, testable refactor.

**Exercise:** Write an architecture-review prompt that forbids immediate code edits.

**Recap:** Architecture improvement starts with diagnosis and ranking, not instant reshaping.

## 11. Adding Module Awareness To Our PRD And Plan Workflow

**Duration:** 12-15 minutes

**Outcome:** The learner can improve PRD and planning workflows by including module boundaries and ownership.

**Video flow:**

- 0:00-1:00 - Explain the gap: product plans often ignore where code actually lives.
- 1:00-3:00 - Define module awareness: knowing affected modules, owners, contracts, tests, and boundaries.
- 3:00-6:00 - Add module fields to the PRD or plan: entry points, dependencies, risky areas, test locations, and non-goals.
- 6:00-9:00 - Show how module awareness improves phase design.
- 9:00-12:00 - Demonstrate how it prevents unrelated refactors.
- 12:00-15:00 - Update the planning prompt so agents must map modules before execution.

**Demo:** Take a PRD feature and add an "affected modules" section before planning implementation.

**Exercise:** Add module awareness fields to your planning template.

**Recap:** Plans get safer when they include the codebase shape, not just product intent.

## 12. The Final Workflow

**Duration:** 12-15 minutes

**Outcome:** The learner can combine the course patterns into one practical AI coding workflow.

**Video flow:**

- 0:00-1:00 - Present the full workflow as the capstone.
- 1:00-3:00 - Start with shaping: goal, scope, user questions, and PRD if needed.
- 3:00-5:00 - Add planning: module map, tracer bullet, phases, and verification.
- 5:00-7:00 - Add execution: do-work workflow, TDD or diagnose loop, reviewable diffs.
- 7:00-9:00 - Add feedback: tests, pre-commit, user correction, and handoff.
- 9:00-11:00 - Add scale: backlog, GitHub Issues, AFK agents, and HITL gates.
- 11:00-15:00 - Show the final decision rule: choose the lightest workflow that controls the actual risk.

**Demo:** Walk one feature from idea to issue to tracer bullet to verified change to handoff.

**Exercise:** Write your personal AI coding workflow as a 10-step checklist.

**Recap:** The final workflow is not one rigid process. It is a set of controls you apply based on risk, ambiguity, and verification quality.

## Capstone Project

**Duration:** 45-90 minutes of learner work

Build a small repo workflow where an agent can take a shaped task, inspect relevant modules, execute a tracer bullet or small fix, run verification, and produce a review-ready handoff.

**Required evidence:**

- Task brief or issue
- Scope and non-goals
- Module map
- Execution prompt
- Files changed
- Checks run
- Final handoff
- One lesson learned for future agent work

## Assessment Rubric

Score each area from 1 to 4.

- **Task framing:** clear goal, scope, non-goals, and acceptance criteria
- **Agent steering:** useful repo instructions, reusable workflows, memory, or harness-specific guidance
- **Execution control:** small steps, review gates, and no avoidable scope creep
- **Verification:** meaningful tests, linting, manual checks, or evidence
- **Handoff quality:** changed files, decisions, risks, and next steps are clear
- **Workflow maturity:** learner chooses HITL or AFK based on risk instead of habit
