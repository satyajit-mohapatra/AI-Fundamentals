# 07 - Day 5 AFK Agents

Available from June 8, 2026

## 1. What Is An AFK Agent

**Duration:** 10-12 minutes

**Outcome:** The learner understands AFK agents as bounded unattended workers, not autonomous employees.

**Video flow:**

- 0:00-1:00 - Define AFK: away-from-keyboard work where the agent continues without constant interaction.
- 1:00-3:00 - Compare interactive, semi-autonomous, and AFK workflows.
- 3:00-5:00 - Explain good AFK tasks: repetitive, bounded, verifiable, and low ambiguity.
- 5:00-8:00 - Explain bad AFK tasks: high-risk product decisions, destructive actions, unclear requirements, or broad rewrites.
- 8:00-10:00 - Teach the AFK task envelope: objective, scope, budget, stop condition, validation, and report.
- 10:00-12:00 - Set the safety rule: unattended does not mean unbounded.

**Demo:** Compare "clean up the repo" with a bounded AFK task that updates one pattern in one folder and runs checks.

**Exercise:** Write a five-line AFK task envelope for a safe maintenance task.

**Recap:** AFK agents work best when the task is small enough to finish and clear enough to verify.

## 2. Sandcastle

**Duration:** 10-13 minutes

**Outcome:** The learner understands a sandcastle environment as a disposable place for agents to work safely.

**Video flow:**

- 0:00-1:00 - Explain the metaphor: build in a safe temporary space before touching the real castle.
- 1:00-3:00 - Define the purpose: isolate changes, experiments, generated code, or risky commands.
- 3:00-5:00 - Show sandcastle ingredients: separate branch, copy, container, worktree, temporary database, and limited credentials.
- 5:00-8:00 - Explain what makes it safe: no production data, no destructive access, easy reset, clear diff boundary.
- 8:00-11:00 - Demonstrate moving useful work back after review.
- 11:00-13:00 - Warn that a sandbox still needs validation.

**Demo:** Create a temporary branch or worktree for an experimental agent task.

**Exercise:** Design a sandcastle setup for your practice repo: files, data, credentials, and reset path.

**Recap:** A sandcastle lets agents experiment without putting important state at risk.

## 3. Trying HITL Agents

**Duration:** 10-12 minutes

**Outcome:** The learner can run a human-in-the-loop agent workflow with explicit approval points.

**Video flow:**

- 0:00-1:00 - Define HITL: the agent works, but the human approves decisions at key boundaries.
- 1:00-3:00 - Identify approval points: plan approval, broad edit approval, command approval, merge approval.
- 3:00-6:00 - Run a simple task where the agent must pause after inspection and before editing.
- 6:00-8:00 - Show how to approve, reject, or redirect the plan.
- 8:00-10:00 - Explain how HITL differs from micromanaging every line.
- 10:00-12:00 - Connect HITL to later AFK work: gates first, autonomy later.

**Demo:** Ask an agent to inspect a bug and propose a fix, then pause for approval before applying it.

**Exercise:** Add two approval gates to a task you would normally give an agent.

**Recap:** HITL works when the human is placed at decision boundaries, not every keystroke.

## 4. Sandboxing

**Duration:** 12-15 minutes

**Outcome:** The learner understands sandboxing as a technical control for limiting agent blast radius.

**Video flow:**

- 0:00-1:00 - Explain blast radius: what can go wrong if the agent acts outside the intended area.
- 1:00-3:00 - Define sandboxing: restricting filesystem, network, credentials, commands, or environment.
- 3:00-5:00 - Compare social constraints in prompts with technical constraints in sandboxes.
- 5:00-8:00 - Show sandbox examples: read-only mode, workspace-only writes, no network, test database, containerized commands.
- 8:00-11:00 - Explain permission escalation: why a request appears and how to evaluate it.
- 11:00-15:00 - Teach the review question: "What can this action affect if it goes wrong?"

**Demo:** Run a read-only exploration, then contrast it with a write-enabled task in a limited folder.

**Exercise:** List the resources your agent should not access without explicit approval.

**Recap:** Sandboxing makes safety enforceable instead of relying only on good intentions.

## 5. Setting Up And Trying AFK Agents

**Duration:** 12-15 minutes

**Outcome:** The learner can configure and run a small AFK agent task with validation and reporting.

**Video flow:**

- 0:00-1:00 - State the goal: one unattended task that ends with evidence.
- 1:00-3:00 - Choose a safe task: docs cleanup, test name update, lint fix, or small repeated refactor.
- 3:00-5:00 - Write the task envelope: scope, commands allowed, files allowed, stop conditions, report format.
- 5:00-8:00 - Start the agent and let it work without interrupting.
- 8:00-11:00 - Review its final report: files changed, checks run, failures, and questions.
- 11:00-15:00 - Decide whether the task was well-shaped or needs a tighter envelope.

**Demo:** Queue a bounded docs or formatting task and review the result.

**Exercise:** Run one AFK task that touches no production code and requires a final verification report.

**Recap:** Start AFK practice with low-risk tasks and a strong report requirement.

## 6. Using Backlogs To Queue Tasks For AFK Agents

**Duration:** 10-13 minutes

**Outcome:** The learner can turn a backlog into a queue of agent-ready tasks.

**Video flow:**

- 0:00-1:00 - Explain why AFK agents need queues: unattended work needs prepared tasks.
- 1:00-3:00 - Define an agent-ready backlog item: objective, context, scope, acceptance criteria, commands, and labels.
- 3:00-5:00 - Show the difference between a human idea and an agent-ready issue.
- 5:00-8:00 - Explain prioritization: low ambiguity, high confidence, good tests, and isolated files first.
- 8:00-11:00 - Build a small backlog queue with three tasks.
- 11:00-13:00 - Add review states: ready, running, blocked, review, done.

**Demo:** Convert three TODOs into structured backlog items for AFK execution.

**Exercise:** Write one backlog item with enough detail for an agent to start without asking a question.

**Recap:** AFK throughput depends on backlog quality.

## 7. Setting Up Our Repo For GitHub Issues

**Duration:** 12-15 minutes

**Outcome:** The learner can prepare a repo so GitHub Issues become an effective task source for agents.

**Video flow:**

- 0:00-1:00 - Explain GitHub Issues as shared task contracts.
- 1:00-3:00 - Show issue templates: bug, feature, refactor, docs, chore, and investigation.
- 3:00-5:00 - Add labels for agent readiness: needs-info, ready-for-agent, good-first-agent, blocked, review-needed.
- 5:00-8:00 - Explain what fields agents need: context, scope, acceptance criteria, validation, links, and non-goals.
- 8:00-11:00 - Demonstrate creating a well-formed issue.
- 11:00-15:00 - Discuss security: avoid secrets, private data, or production credentials in issues.

**Demo:** Create a feature issue template that includes acceptance criteria and verification commands.

**Exercise:** Draft one GitHub Issue for a small agent task.

**Recap:** Good issues make agent work reviewable before it starts.

## 8. Hooking Up Agents To Your Backlog

**Duration:** 12-15 minutes

**Outcome:** The learner understands how to connect agent execution to backlog items without losing control.

**Video flow:**

- 0:00-1:00 - Explain the goal: agents pull from prepared work, not random ideas.
- 1:00-3:00 - Define the workflow: select issue, inspect context, create branch or work area, execute, verify, report back.
- 3:00-6:00 - Show how an agent should claim or reference an issue.
- 6:00-9:00 - Explain status updates: started, blocked, questions, checks run, PR or diff ready.
- 9:00-12:00 - Add human gates: before broad scope, before merge, before production-impacting changes.
- 12:00-15:00 - Show how to close the loop by updating the issue with final evidence.

**Demo:** Take one issue from "ready-for-agent" to "review-needed" with a final report.

**Exercise:** Define your backlog state machine for agent work.

**Recap:** Backlog-connected agents need traceability from issue to change to verification.

## 9. Updating Our PRD And Plan Workflow To Use GitHub

**Duration:** 12-15 minutes

**Outcome:** The learner can adapt PRD and planning workflows so their outputs become GitHub-ready issues.

**Video flow:**

- 0:00-1:00 - Explain the bridge: planning is only useful if it turns into executable work.
- 1:00-3:00 - Review PRD outputs: problem, scope, acceptance, risks, and rollout.
- 3:00-6:00 - Convert PRD sections into issue fields and labels.
- 6:00-9:00 - Convert multi-phase plans into linked issues or milestones.
- 9:00-12:00 - Add agent-specific fields: allowed scope, validation command, stop condition, and review owner.
- 12:00-15:00 - Show how to keep GitHub as the source of truth.

**Demo:** Take one PRD and produce three linked GitHub Issues from it.

**Exercise:** Update your planning template so every phase can become an issue.

**Recap:** PRDs and plans become operational when they feed the backlog.
