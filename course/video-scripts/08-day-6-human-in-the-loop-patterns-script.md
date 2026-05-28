# 08 - Day 6 Human In The Loop Patterns: Detailed Video Scripts

Available from June 8, 2026

## 1. HITL And AFK Tasks

**Recording target:** 10-12 minutes, task classification demo.

**Presenter script:** 0:00-1:00 ask whether the agent should pause or run unattended; 1:00-3:00 HITL tasks are ambiguous, risky, product-heavy, broad, externally impactful; 3:00-5:00 AFK tasks are bounded, repetitive, reversible, verifiable; 5:00-8:00 use matrix: ambiguity, blast radius, verification, reversibility; 8:00-10:00 classify example tasks; 10:00-12:00 show HITL can prepare tasks for AFK.

**Screen direction:** Sort backlog cards into HITL, AFK, and needs-shaping buckets.

**On-screen text:** "HITL for judgment. AFK for bounded execution."

**Exercise prompt:** "Classify three tasks from your backlog."

**Closing recap:** "Pick the workflow based on risk, not preference."

## 2. Dont Plan Kanban

**Recording target:** 8-10 minutes, board critique.

**Presenter script:** 0:00-1:00 moving cards is not planning; 1:00-3:00 Kanban is good for visibility, WIP, status, flow; 3:00-5:00 it is bad for requirements discovery, architecture, task shaping; 5:00-7:00 show weak board with vague cards; 7:00-10:00 show stronger board where ready means scoped and accepted.

**Screen direction:** Compare vague board with shaped board.

**On-screen text:** "Kanban tracks work. It does not shape work."

**Exercise prompt:** "Review one board column and mark cards that are not actually ready."

**Closing recap:** "Ready means defined, not merely assigned."

## 3. Using The Kanban Workflow

**Recording target:** 10-13 minutes, board state workflow.

**Presenter script:** 0:00-1:00 workflow manages flow without losing context; 1:00-3:00 columns: inbox, needs shaping, ready, in progress, blocked, review, done; 3:00-5:00 ready criteria: objective, scope, acceptance, verification, owner; 5:00-8:00 move tasks based on evidence; 8:00-11:00 agents update cards with commands, files, blockers; 11:00-13:00 WIP limits protect review capacity.

**Screen direction:** Move one task across columns and add notes.

**On-screen text:** "Columns should mean something."

**Exercise prompt:** "Write entry and exit criteria for your agent board columns."

**Closing recap:** "Kanban works when state changes are evidence-based."

## 4. Research

**Recording target:** 10-12 minutes, structured research output.

**Presenter script:** 0:00-1:00 research needs structure because agents summarize confidently; 1:00-3:00 outputs: question, sources, findings, uncertainty, recommendation, next action; 3:00-5:00 source quality: official docs, repo evidence, primary sources, current info; 5:00-8:00 ask for citations or file references; 8:00-10:00 separate facts, interpretation, recommendation; 10:00-12:00 move to spike or prototype when reading is not enough.

**Screen direction:** Show research brief and evidence summary.

**On-screen text:** "Facts. Interpretation. Recommendation."

**Exercise prompt:** "Write a research brief with one question and three required output fields."

**Closing recap:** "Good research makes uncertainty visible."

## 5. Trying Out Research

**Recording target:** 12-15 minutes, live research decision.

**Presenter script:** 0:00-1:00 choose concrete question; 1:00-3:00 write prompt with source requirements and output format; 3:00-6:00 gather evidence; 6:00-9:00 review source quality, missing data, assumptions, relevance; 9:00-12:00 convert to recommendation with tradeoffs; 12:00-15:00 decide proceed, prototype, or ask follow-up.

**Screen direction:** Run a library or API research question and produce a decision note.

**On-screen text:** "Research supports decisions."

**Exercise prompt:** "Run one research prompt and write a final decision note."

**Closing recap:** "Research is done when it supports a decision or next test."

## 6. Prototyping

**Recording target:** 10-12 minutes, prototype framing.

**Presenter script:** 0:00-1:00 prototype is disposable artifact for learning; 1:00-3:00 contrast prototype, tracer bullet, production feature; 3:00-5:00 good questions: UI feel, API shape, data model, performance, flow, feasibility; 5:00-8:00 boundaries: throwaway location, no production commitment, learning goal; 8:00-10:00 timebox; 10:00-12:00 extract lessons without copying shortcuts.

**Screen direction:** Sketch a UI or CLI prototype with question and timebox visible.

**On-screen text:** "Prototype to learn, not to ship."

**Exercise prompt:** "Write one prototype question and a 30-minute timebox."

**Closing recap:** "A prototype is valuable when it answers a decision."

## 7. Trying Out UI Prototyping

**Recording target:** 12-15 minutes, three-option UI review.

**Presenter script:** 0:00-1:00 UI benefits from seeing options; 1:00-3:00 brief includes audience, workflow, data, states, constraints, tone; 3:00-6:00 ask for multiple variations; 6:00-9:00 review clarity, density, workflow speed, accessibility, design fit; 9:00-12:00 choose direction and list what survives; 12:00-15:00 avoid copying prototype shortcuts.

**Screen direction:** Compare three UI options side by side with a checklist.

**On-screen text:** "Generate options. Compare tradeoffs."

**Exercise prompt:** "Write a UI prototype brief for one screen in your project."

**Closing recap:** "UI prototypes create concrete options for human judgment."

## 8. The Prototype Workflow

**Recording target:** 10-13 minutes, workflow invocation.

**Presenter script:** 0:00-1:00 workflow enforces question, timebox, artifact, review, decision; 1:00-3:00 phases: clarify goal, build disposable version, inspect result, summarize lessons; 3:00-5:00 outputs: screenshot, link, transcript, code sketch, decision note; 5:00-8:00 invoke for UI or data-model experiment; 8:00-11:00 stop condition prevents creep; 11:00-13:00 findings feed PRDs and plans.

**Screen direction:** Run prototype prompt and finish with keep/change/discard summary.

**On-screen text:** "Question -> Timebox -> Artifact -> Decision"

**Exercise prompt:** "Write a prototype-workflow prompt for your risky feature question."

**Closing recap:** "The prototype workflow keeps experiments bounded and useful."

## 9. Designing Codebases Ai Loves

**Recording target:** 12-15 minutes, module comparison.

**Presenter script:** 0:00-1:00 agents perform better in clear codebases; 1:00-3:00 helpful traits: small modules, boundaries, names, tests, examples, docs, patterns; 3:00-5:00 harmful traits: hidden side effects, huge files, unclear ownership, inconsistency, missing tests; 5:00-8:00 define AI navigability; 8:00-11:00 architecture and tests improve reliability; 11:00-15:00 turn traits into refactor criteria.

**Screen direction:** Compare clean module and tangled module.

**On-screen text:** "Agents love code humans can understand."

**Exercise prompt:** "Score one module for clarity, boundaries, tests, and examples."

**Closing recap:** "AI-navigable code is usually human-navigable code."

## 10. The Improve Codebase Architecture Workflow

**Recording target:** 12-15 minutes, architecture opportunity ranking.

**Presenter script:** 0:00-1:00 purpose is easier navigation, testing, evolution; 1:00-3:00 inspect boundaries, duplication, shallow wrappers, tests, domain language; 3:00-6:00 ask for opportunities, not immediate rewrites; 6:00-9:00 rank by impact, risk, testability; 9:00-12:00 convert one opportunity into small refactor plan; 12:00-15:00 no broad refactor without tests and review.

**Screen direction:** Ask for three opportunities and score them.

**On-screen text:** "Diagnose before rewrites."

**Exercise prompt:** "Write an architecture-review prompt that forbids immediate edits."

**Closing recap:** "Architecture improvement starts with diagnosis and ranking."

## 11. Adding Module Awareness To Our PRD And Plan Workflow

**Recording target:** 12-15 minutes, planning template update.

**Presenter script:** 0:00-1:00 product plans often ignore where code lives; 1:00-3:00 module awareness means affected modules, owners, contracts, tests, boundaries; 3:00-6:00 add fields: entry points, dependencies, risky areas, tests, non-goals; 6:00-9:00 phase design improves; 9:00-12:00 prevents unrelated refactors; 12:00-15:00 update planning prompt so agents map modules before execution.

**Screen direction:** Add affected-modules section to a PRD.

**On-screen text:** "Plans need codebase shape."

**Exercise prompt:** "Add module awareness fields to your planning template."

**Closing recap:** "Plans are safer when they include product intent and code boundaries."

## 12. The Final Workflow

**Recording target:** 12-15 minutes, capstone workflow walkthrough.

**Presenter script:** 0:00-1:00 present final workflow; 1:00-3:00 shaping: goal, scope, user questions, PRD; 3:00-5:00 planning: module map, tracer bullet, phases, verification; 5:00-7:00 execution: do-work workflow, TDD/diagnose, reviewable diffs; 7:00-9:00 feedback: tests, pre-commit, correction, handoff; 9:00-11:00 scale: backlog, GitHub Issues, AFK, HITL gates; 11:00-15:00 decision rule: lightest workflow that controls actual risk.

**Screen direction:** Walk one feature from idea to issue to tracer bullet to verified handoff.

**On-screen text:** "Shape -> Plan -> Execute -> Verify -> Scale"

**Exercise prompt:** "Write your personal AI coding workflow as a 10-step checklist."

**Closing recap:** "The final workflow is a set of controls chosen by risk."

## Capstone Project

**Recording target:** 10-15 minute capstone briefing plus 45-90 minutes learner work.

**Presenter script:** Explain the capstone goal: take one shaped task through module map, execution prompt, verified change, and handoff. Review required evidence: task brief or issue, scope and non-goals, module map, execution prompt, files changed, checks run, final handoff, and one lesson learned. Tell learners to choose a task small enough to complete but real enough to exercise the workflow.

**Screen direction:** Show required evidence checklist and sample final handoff.

**Exercise prompt:** "Complete one shaped agent task end to end and submit the evidence list."

**Closing recap:** "The capstone succeeds when the workflow is traceable from task definition through verification."

## Assessment Rubric

Score each area from 1 to 4:

- **Task framing:** goal, scope, non-goals, acceptance criteria
- **Agent steering:** repo instructions, reusable workflows, memory, or harness-specific guidance
- **Execution control:** small steps, gates, no avoidable scope creep
- **Verification:** meaningful checks or evidence
- **Handoff quality:** files, decisions, risks, next steps
- **Workflow maturity:** correct HITL or AFK choice based on risk
