# 05 - Day 3 Planning

Available from June 1, 2026

## 1. How To Tackle Massive Tasks

**Duration:** 12-15 minutes

**Outcome:** The learner can break a large, vague task into phases an agent can execute safely.

**Video flow:**

- 0:00-1:00 - Start with the problem: massive tasks fail when the agent tries to solve everything in one context.
- 1:00-3:00 - Define a massive task: unclear requirements, many files, unknown architecture, or multi-day implementation.
- 3:00-6:00 - Teach the decomposition stack: goal, constraints, unknowns, phases, tracer bullet, execution slices.
- 6:00-9:00 - Show how to separate discovery from implementation.
- 9:00-12:00 - Explain risk controls: stop conditions, review gates, validation at each phase, and handoff notes.
- 12:00-15:00 - Convert one broad feature into a multi-phase outline.

**Demo:** Turn "add team billing" into discovery, data model, API, UI, tests, and rollout phases.

**Exercise:** Pick a large feature and list five unknowns before listing implementation steps.

**Recap:** Massive tasks become manageable when you reduce uncertainty before writing lots of code.

## 2. Write Great PRDs With A Reusable Workflow

**Duration:** 12-15 minutes

**Outcome:** The learner can use a PRD workflow to turn an idea into clear requirements for agent execution.

**Video flow:**

- 0:00-1:00 - Explain that agents cannot rescue unclear product thinking.
- 1:00-3:00 - Define a practical PRD: problem, users, scope, non-goals, acceptance criteria, risks, and rollout.
- 3:00-6:00 - Show how a PRD workflow interviews the user instead of assuming requirements.
- 6:00-9:00 - Demonstrate drafting acceptance criteria that are testable.
- 9:00-12:00 - Explain how to keep PRDs small enough for implementation.
- 12:00-15:00 - Show how the PRD becomes input to a plan or issue.

**Demo:** Use a PRD template to shape a feature request from vague idea to acceptance criteria.

**Exercise:** Write three acceptance criteria for a feature using "Given, when, then" or plain observable behavior.

**Recap:** A good PRD makes product decisions explicit before the agent writes code.

## 3. Split Features Across Multiple Context Windows With Multi Phase Plans

**Duration:** 12-15 minutes

**Outcome:** The learner can divide a feature into context-sized phases that survive long-running work.

**Video flow:**

- 0:00-1:00 - Explain the issue: one huge session loses detail and becomes hard to review.
- 1:00-3:00 - Define a multi-phase plan: a sequence of independent but connected slices.
- 3:00-5:00 - Teach phase design: each phase has a goal, inputs, outputs, checks, and handoff.
- 5:00-8:00 - Show how to split by risk: architecture first, then thin path, then expansion.
- 8:00-11:00 - Explain context-window boundaries: summarize before switching, carry decisions forward, drop noise.
- 11:00-15:00 - Build a sample phase plan from a PRD.

**Demo:** Split a dashboard feature into data contract, backend endpoint, UI shell, charts, tests, and polish.

**Exercise:** Create a three-phase plan where phase one proves the path end to end.

**Recap:** Multi-phase plans let you use fresh context without losing the project thread.

## 4. What Are Tracer Bullets

**Duration:** 10-12 minutes

**Outcome:** The learner understands tracer bullets as thin end-to-end slices that prove a path before full implementation.

**Video flow:**

- 0:00-1:00 - Define tracer bullet: the smallest end-to-end implementation that proves the architecture path.
- 1:00-3:00 - Contrast with prototypes: a tracer bullet goes through the real system, even if thin.
- 3:00-5:00 - Explain why tracer bullets help agents: they reveal integration points and reduce speculation.
- 5:00-8:00 - Show examples: one API field to database to UI, one command option through parser to output.
- 8:00-10:00 - Warn against fake tracer bullets that skip the risky integration.
- 10:00-12:00 - Explain how tracer bullets become the first phase of a plan.

**Demo:** Sketch a minimal end-to-end "save preference" feature with one field only.

**Exercise:** For a feature, identify the thinnest real end-to-end path.

**Recap:** A tracer bullet proves the path before you invest in full depth.

## 5. Use Tracer Bullets In Our Multi Phase Plan

**Duration:** 12-15 minutes

**Outcome:** The learner can place a tracer bullet inside a larger plan and use it to reduce execution risk.

**Video flow:**

- 0:00-1:00 - Explain that the first phase should answer the biggest integration question.
- 1:00-3:00 - Choose the tracer bullet based on risk, not ease.
- 3:00-6:00 - Add the tracer bullet to the plan with explicit success criteria.
- 6:00-9:00 - Explain what to defer: polish, edge cases, performance, and full coverage.
- 9:00-12:00 - Show how tracer results update later phases.
- 12:00-15:00 - Demonstrate a review gate after the tracer bullet.

**Demo:** Add a tracer-bullet phase to a multi-phase dashboard or API plan.

**Exercise:** Rewrite phase one of your plan so it proves one end-to-end path.

**Recap:** The tracer bullet is the plan's first evidence-producing slice.

## 6. Executing Our Multi Phase Plan

**Duration:** 12-15 minutes

**Outcome:** The learner can execute a plan phase by phase while preserving context and verification.

**Video flow:**

- 0:00-1:00 - State the rule: do not execute a multi-phase plan as one giant prompt.
- 1:00-3:00 - Start phase one with inputs, scope, and done condition.
- 3:00-6:00 - Ask the agent to inspect before editing and produce a short implementation checklist.
- 6:00-9:00 - Execute the phase, run validation, and review the diff.
- 9:00-12:00 - Write a phase handoff: completed, changed files, checks, decisions, risks, next phase.
- 12:00-15:00 - Decide whether to continue, revise the plan, or stop for human review.

**Demo:** Execute one phase from a sample plan and produce a handoff note.

**Exercise:** Take your three-phase plan and write the exact prompt for executing phase one.

**Recap:** Phase execution is a loop: scope, inspect, change, verify, hand off.

## 7. Ask User Question

**Duration:** 8-10 minutes

**Outcome:** The learner knows when an agent should ask the user a question instead of guessing.

**Video flow:**

- 0:00-1:00 - Open with the risk: agent guesses often become hidden product decisions.
- 1:00-3:00 - Define good question triggers: ambiguous requirements, conflicting constraints, risky scope expansion, missing credentials, or destructive actions.
- 3:00-5:00 - Teach what a good question includes: context, decision needed, options, tradeoff, and recommended default if appropriate.
- 5:00-7:00 - Show bad questions: vague, too many choices, or asking what the agent could inspect itself.
- 7:00-10:00 - Demonstrate converting uncertainty into a focused user question.

**Demo:** Rewrite "What should I do?" into "Should the new filter apply to archived records too? Option A..., Option B..."

**Exercise:** Write one user question for a requirement ambiguity in your planned feature.

**Recap:** Ask humans for decisions, not for information the agent can discover safely.
