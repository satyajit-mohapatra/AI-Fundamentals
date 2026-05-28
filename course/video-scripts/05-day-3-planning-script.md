# 05 - Day 3 Planning: Detailed Video Scripts

Available from June 1, 2026

## 1. How To Tackle Massive Tasks

**Recording target:** 12-15 minutes, planning scratchpad demo.

**Presenter script:**

- **0:00-1:00 - Hook:** "Massive tasks fail when the agent guesses too early."
- **1:00-3:00 - Define massive:** Unclear requirements, many files, unknown architecture, multi-step integrations, or multi-day work.
- **3:00-6:00 - Decomposition stack:** Goal, constraints, unknowns, phases, tracer bullet, execution slices.
- **6:00-9:00 - Discovery before implementation:** Ask the agent to inspect code, find integration points, and list open questions before editing.
- **9:00-12:00 - Risk controls:** Every phase needs a done condition, validation step, review gate, and stop condition.
- **12:00-15:00 - Example:** Turn "add team billing" into discovery, data model, API, UI, tests, rollout.

**Screen direction:** Markdown plan with sections for unknowns, constraints, phases, validation.

**On-screen text:** "Reduce uncertainty before implementation."

**Demo steps:** Write broad request, list unknowns, add constraints, split phases, choose first tracer bullet.

**Exercise prompt:** "Pick a large feature and write the goal, five unknowns, three constraints, and a three-phase plan."

**Closing recap:** "Big work becomes safe when you shrink uncertainty before asking for code."

## 2. Write Great PRDs With A Reusable Workflow

**Recording target:** 12-15 minutes, PRD shaping demo.

**Presenter script:**

- **0:00-1:00 - Hook:** "Agents cannot rescue unclear product thinking."
- **1:00-3:00 - Practical PRD:** Problem, users, scope, non-goals, acceptance criteria, risks, rollout.
- **3:00-6:00 - PRD workflow behavior:** It interviews the user, exposes ambiguity, and forces tradeoffs before implementation.
- **6:00-9:00 - Acceptance criteria:** Convert fuzzy wishes into observable behavior.
- **9:00-12:00 - Keep it small:** A PRD should sharpen work, not become a novel.
- **12:00-15:00 - Operational use:** PRD feeds plan, issues, and execution prompts.

**Screen direction:** Convert a vague feature request into PRD sections.

**On-screen text:** "PRD = product decisions made explicit."

**Demo steps:** Start with vague idea, fill PRD, rewrite three acceptance criteria, convert to task plan.

**Exercise prompt:** "Write three observable acceptance criteria for one feature."

**Closing recap:** "A good PRD reduces the number of decisions the agent has to guess."

## 3. Split Features Across Multiple Context Windows With Multi Phase Plans

**Recording target:** 12-15 minutes, phase table walkthrough.

**Presenter script:**

- **0:00-1:00 - Hook:** "One huge session loses detail and becomes hard to review."
- **1:00-3:00 - Multi-phase plan:** Connected slices that can run in separate context windows.
- **3:00-5:00 - Phase design:** Each phase needs goal, inputs, outputs, checks, and handoff.
- **5:00-8:00 - Split by risk:** Architecture or contract first, thin path next, expansion later.
- **8:00-11:00 - Context boundaries:** Summarize decisions before switching windows.
- **11:00-15:00 - Example:** Dashboard feature split into data contract, endpoint, UI shell, charts, tests, polish.

**Screen direction:** Table with Phase, Goal, Inputs, Outputs, Checks, Handoff.

**On-screen text:** "Design for context boundaries."

**Demo steps:** Take a PRD, create phase table, add checks, write handoff sentence per phase.

**Exercise prompt:** "Create a three-phase plan where phase one proves the path end to end."

**Closing recap:** "Multi-phase plans let you use fresh context without losing the thread."

## 4. What Are Tracer Bullets

**Recording target:** 10-12 minutes, architecture path sketch.

**Presenter script:**

- **0:00-1:00 - Hook:** "A tracer bullet is the thinnest real end-to-end path through the system."
- **1:00-3:00 - Contrast prototype:** A prototype can be disposable; a tracer bullet touches the real layers.
- **3:00-5:00 - Why it helps:** It exposes integration points and reduces speculation.
- **5:00-8:00 - Examples:** One API field from request to DB to UI; one CLI flag from parser to output.
- **8:00-10:00 - Fake tracer warning:** If it skips the risky integration, it did not prove the path.
- **10:00-12:00 - Planning role:** The tracer bullet is often phase one.

**Screen direction:** Draw request -> service -> database -> UI and highlight the thinnest path.

**On-screen text:** "Thinnest real end-to-end path."

**Demo steps:** Identify risky boundary, choose minimal slice, define success criteria.

**Exercise prompt:** "Identify the thinnest real end-to-end path for one feature."

**Closing recap:** "A tracer bullet proves the path before you invest in depth."

## 5. Use Tracer Bullets In Our Multi Phase Plan

**Recording target:** 12-15 minutes, rewrite phase one.

**Presenter script:**

- **0:00-1:00 - Hook:** "Phase one should answer the biggest integration question."
- **1:00-3:00 - Choose by risk:** The easiest slice is not always the best first slice.
- **3:00-6:00 - Add success criteria:** Define exactly what must be true for the tracer to count.
- **6:00-9:00 - Defer deliberately:** Polish, edge cases, performance, and full coverage come later.
- **9:00-12:00 - Update plan:** Use tracer results to revise later phases.
- **12:00-15:00 - Review gate:** Inspect diff, verify behavior, decide whether the plan still holds.

**Screen direction:** Open phase table, rewrite first phase as tracer bullet, add review checklist.

**On-screen text:** "Choose risk, not convenience."

**Demo steps:** Select riskiest unknown, define tracer, add deferrals, write post-tracer questions.

**Exercise prompt:** "Rewrite phase one of your plan so it proves one end-to-end path and defers the rest."

**Closing recap:** "The tracer bullet turns uncertainty into evidence."

## 6. Executing Our Multi Phase Plan

**Recording target:** 12-15 minutes, one phase execution demo.

**Presenter script:**

- **0:00-1:00 - Hook:** "Do not execute a multi-phase plan as one giant prompt."
- **1:00-3:00 - Phase prompt:** Give only the current phase plus necessary context, scope, and done condition.
- **3:00-6:00 - Inspect first:** Ask for a short implementation checklist after file inspection.
- **6:00-9:00 - Execute and verify:** Make the change, run the phase check, inspect the diff.
- **9:00-12:00 - Phase handoff:** Completed, changed files, checks, decisions, risks, next phase.
- **12:00-15:00 - Continue or revise:** Let evidence update the plan.

**Screen direction:** Phase plan, agent prompt, diff, validation output, handoff note.

**On-screen text:** "Scope -> Inspect -> Change -> Verify -> Handoff"

**Demo steps:** Write phase prompt, inspect files, run change, verify, write handoff.

**Exercise prompt:** "Write the exact prompt you would use to execute phase one of your plan."

**Closing recap:** "Each phase must leave behind evidence."

## 7. Ask User Question

**Recording target:** 8-10 minutes, ambiguity-to-question rewrite.

**Presenter script:**

- **0:00-1:00 - Hook:** "When an agent guesses, ambiguity becomes a hidden product decision."
- **1:00-3:00 - Question triggers:** Ambiguous requirements, conflicting constraints, scope expansion, missing credentials, destructive actions.
- **3:00-5:00 - Good question shape:** Context, decision needed, options, tradeoff, recommended default if appropriate.
- **5:00-7:00 - Bad questions:** Vague, too broad, or asking what the agent can safely inspect.
- **7:00-10:00 - Rewrite demo:** Turn "What should I do?" into a specific two-option decision.

**Screen direction:** Show vague ambiguity and rewrite into an answerable question.

**On-screen text:** "Ask humans for decisions, not discoverable facts."

**Demo steps:** Identify ambiguity, write options, name tradeoff, ask final question.

**Exercise prompt:** "Write one user question for a requirement ambiguity in your planned feature."

**Closing recap:** "Good questions keep the plan honest."
