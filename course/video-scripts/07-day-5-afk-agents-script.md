# 07 - Day 5 AFK Agents: Detailed Video Scripts

Available from June 8, 2026

## 1. What Is An AFK Agent

**Recording target:** 10-12 minutes, concept plus prompt rewrite.

**Presenter script:** 0:00-1:00 define AFK as away-from-keyboard agent work; 1:00-3:00 compare interactive, semi-autonomous, and AFK modes; 3:00-5:00 explain good AFK tasks: bounded, repetitive, low ambiguity, verifiable; 5:00-8:00 explain bad AFK tasks: broad rewrites, product decisions, destructive commands, unclear requirements; 8:00-10:00 introduce the task envelope: objective, scope, budget, stop condition, validation, report; 10:00-12:00 close with "unattended does not mean unbounded."

**Screen direction:** Rewrite "clean up the repo" into a bounded AFK task with folder scope and validation.

**On-screen text:** "AFK = unattended, not unbounded."

**Demo steps:** Show vague prompt, add task envelope, add stop condition, add report format.

**Exercise prompt:** "Write a five-line AFK task envelope for one safe maintenance task."

**Closing recap:** "AFK agents are useful when the work is narrow enough to finish and verify."

## 2. Sandcastle

**Recording target:** 10-13 minutes, isolated workspace demo.

**Presenter script:** 0:00-1:00 introduce sandcastle as a disposable work area; 1:00-3:00 list forms: branch, copy, worktree, container, temporary DB, limited credentials; 3:00-5:00 explain use cases: experiments, generated code, risky commands; 5:00-8:00 explain safety: no production data, easy reset, clear diff boundary, small blast radius; 8:00-11:00 show how useful work moves back after review; 11:00-13:00 remind that sandboxing still needs validation.

**Screen direction:** Show a temporary branch or worktree and compare it with the untouched main working area.

**On-screen text:** "Disposable work area. Clear boundary. Easy reset."

**Demo steps:** Create safe work area, run experiment, inspect diff, decide what to keep.

**Exercise prompt:** "Design a sandcastle setup for your practice repo: files, data, credentials, and reset path."

**Closing recap:** "A sandcastle lets agents experiment without risking important state."

## 3. Trying HITL Agents

**Recording target:** 10-12 minutes, approval-gate demo.

**Presenter script:** 0:00-1:00 define human-in-the-loop; 1:00-3:00 name approval points: plan, broad edit, risky command, merge; 3:00-6:00 run a task where the agent inspects and pauses before editing; 6:00-8:00 show approve, reject, redirect; 8:00-10:00 distinguish HITL from micromanagement; 10:00-12:00 connect HITL gates to later AFK confidence.

**Screen direction:** Agent produces a plan and stops. Human narrows scope before continuing.

**On-screen text:** "Approval at decision boundaries."

**Demo steps:** Prompt with pause rule, inspect plan, approve with changes, continue.

**Exercise prompt:** "Add two approval gates to a task you would normally give an agent."

**Closing recap:** "HITL works when humans review decisions, not every keystroke."

## 4. Sandboxing

**Recording target:** 12-15 minutes, permissions and blast-radius lesson.

**Presenter script:** 0:00-1:00 define blast radius; 1:00-3:00 define sandboxing as technical restriction; 3:00-5:00 contrast prompt-only safety with enforced boundaries; 5:00-8:00 show read-only mode, workspace-only writes, no network, containers, test data; 8:00-11:00 explain permission escalation; 11:00-15:00 evaluate access with "what can this affect if it goes wrong?"

**Screen direction:** Show read-only exploration, then a limited write task with an escalation prompt.

**On-screen text:** "Sandboxing makes safety enforceable."

**Demo steps:** Restrict scope, request access, evaluate risk, approve or deny narrowly.

**Exercise prompt:** "List resources your agent should not access without explicit approval."

**Closing recap:** "Sandboxing turns safety from hope into a boundary."

## 5. Setting Up And Trying AFK Agents

**Recording target:** 12-15 minutes, first AFK run.

**Presenter script:** 0:00-1:00 state goal: one unattended task ending with evidence; 1:00-3:00 choose safe task; 3:00-5:00 write envelope with scope, commands, files, stop conditions, report; 5:00-8:00 start agent and avoid interrupting; 8:00-11:00 review report: files, checks, failures, questions; 11:00-15:00 judge whether the envelope was strong enough.

**Screen direction:** Queue a docs cleanup or lint fix and review the final report.

**On-screen text:** "Start small. Require evidence."

**Demo steps:** Choose task, write envelope, run agent, review report, tighten envelope.

**Exercise prompt:** "Run one AFK task that touches no production code and requires a final verification report."

**Closing recap:** "Begin AFK work with low risk and strong reporting."

## 6. Using Backlogs To Queue Tasks For AFK Agents

**Recording target:** 10-13 minutes, backlog shaping.

**Presenter script:** 0:00-1:00 explain queues need prepared tasks; 1:00-3:00 define agent-ready backlog item: objective, context, scope, acceptance, commands, labels; 3:00-5:00 compare human idea with executable task; 5:00-8:00 prioritize low ambiguity, strong tests, isolated files; 8:00-11:00 build three-item queue; 11:00-13:00 add ready, running, blocked, review, done states.

**Screen direction:** Turn raw TODOs into structured backlog items.

**On-screen text:** "AFK throughput depends on backlog quality."

**Demo steps:** Pick TODO, add context, add acceptance, add validation, label readiness.

**Exercise prompt:** "Write one backlog item detailed enough for an agent to start without asking."

**Closing recap:** "Prepared tasks make unattended work possible."

## 7. Setting Up Our Repo For GitHub Issues

**Recording target:** 12-15 minutes, GitHub Issues setup.

**Presenter script:** 0:00-1:00 define issues as shared task contracts; 1:00-3:00 show templates for bug, feature, refactor, docs, chore, investigation; 3:00-5:00 add labels: needs-info, ready-for-agent, good-first-agent, blocked, review-needed; 5:00-8:00 list fields agents need: context, scope, acceptance, validation, links, non-goals; 8:00-11:00 create a well-formed issue; 11:00-15:00 avoid secrets, private data, production credentials.

**Screen direction:** Fill issue template and apply labels.

**On-screen text:** "Issue = task contract."

**Demo steps:** Create template, fill issue, add validation command, label readiness.

**Exercise prompt:** "Draft one GitHub Issue for a small agent task."

**Closing recap:** "Good issues are reviewable before work starts."

## 8. Hooking Up Agents To Your Backlog

**Recording target:** 12-15 minutes, issue-to-workflow trace.

**Presenter script:** 0:00-1:00 explain agents should pull from prepared work; 1:00-3:00 workflow: select issue, inspect, branch/work area, execute, verify, report; 3:00-6:00 show claiming or referencing issue; 6:00-9:00 status updates: started, blocked, questions, checks, PR/diff ready; 9:00-12:00 human gates before broad scope, merge, production impact; 12:00-15:00 close issue loop with final evidence.

**Screen direction:** Move one issue from ready to review with updates.

**On-screen text:** "Issue -> Change -> Evidence."

**Demo steps:** Select issue, start branch, run work, update status, add final report.

**Exercise prompt:** "Define your backlog state machine for agent work."

**Closing recap:** "Traceability connects backlog, code, and verification."

## 9. Updating Our PRD And Plan Workflow To Use GitHub

**Recording target:** 12-15 minutes, PRD-to-issues conversion.

**Presenter script:** 0:00-1:00 planning must become executable; 1:00-3:00 review PRD outputs: problem, scope, acceptance, risks, rollout; 3:00-6:00 convert PRD sections into issue fields and labels; 6:00-9:00 convert multi-phase plans into linked issues or milestones; 9:00-12:00 add agent fields: allowed scope, validation command, stop condition, review owner; 12:00-15:00 keep GitHub as source of truth.

**Screen direction:** Convert PRD excerpt into three linked issues.

**On-screen text:** "PRD -> Plan -> Issues -> Agent work."

**Demo steps:** Select PRD section, create issue fields, link phases, add agent constraints.

**Exercise prompt:** "Update your planning template so every phase can become an issue."

**Closing recap:** "Plans become operational when they feed the backlog."
