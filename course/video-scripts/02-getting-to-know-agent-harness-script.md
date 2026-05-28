# 02 - Getting To Know Your Agent Harness: Detailed Video Scripts

Available from May 18, 2026

## 1. Intro

**Recording target:** 8-10 minutes, terminal intro plus simple slides.

**Presenter script:**

- **0:00-0:45 - Hook:** "An agent harness is not just a chatbot that knows programming. It is a repo-aware collaborator that can inspect files, run commands, make edits, and explain what changed."
- **0:45-2:00 - Mental model:** Explain that the value comes from connecting language, local files, shell commands, and review.
- **2:00-4:00 - Basic loop:** "Ask, inspect, approve, run, review, continue." Walk through each word and what the learner does.
- **4:00-6:00 - What this module covers:** Session management, terminal prompting, IDE integration, moving through history, bash commands, and permissions.
- **6:00-8:00 - Human accountability:** "The agent can propose and execute, but you own the repo, the review, and the decision to ship."
- **8:00-10:00 - Transition:** Show the first safe prompt and set up the next lesson on sessions.

**Screen direction:** Open your chosen agent harness in a repo. Ask for repo organization with no edits.

**On-screen text:** "Agent harness = repo context + tools + review loop"

**Demo steps:**

1. Launch your chosen agent harness in a repo.
2. Ask: "Inspect this project and tell me how it is organized. Do not edit files."
3. Review the response as orientation, not truth.

**Exercise prompt:** "Run or write your first repo-safe prompt. It should ask for inspection only and forbid edits."

**Closing recap:** "An agent harness becomes useful when you pair its speed with your review loop."

## 2. Managing Your Agent Session

**Recording target:** 10-13 minutes, live terminal session.

**Presenter script:**

- **0:00-0:45 - Hook:** "An agent session is not just a conversation. It is the working memory for the task."
- **0:45-2:00 - Start correctly:** Confirm current directory, repo name, branch, and task. Explain that the wrong starting directory causes wrong assumptions.
- **2:00-4:00 - Session context:** Name what the session should hold: goal, scope, files inspected, commands run, decisions, and open questions.
- **4:00-6:30 - Keeping it focused:** When the agent drifts, restate the task and current facts instead of restarting emotionally.
- **6:30-9:00 - When to reset:** Use a new session for unrelated tasks, polluted context, wrong repo, or a major direction change.
- **9:00-11:30 - Session summary:** Teach the habit: before pausing, ask for a concise status summary with changed files, checks, and next step.
- **11:30-13:00 - Transition:** "Next, we will make the prompts themselves concrete enough for the session to act on."

**Screen direction:** Show a session start checklist in one pane and terminal in another.

**On-screen text:** "Path. Goal. Scope. State. Next step."

**Demo steps:**

1. Run `pwd` or equivalent.
2. Ask the agent to summarize repo context.
3. Redirect it to one folder.
4. Ask for a session summary.

**Exercise prompt:** "Create a session-start checklist with path, goal, scope, git state, and first safe prompt."

**Closing recap:** "A focused session gives the agent fewer chances to guess."

## 3. Prompting In The Terminal

**Recording target:** 12-15 minutes, prompt rewrite workshop.

**Presenter script:**

- **0:00-0:45 - Hook:** "A prompt is a task contract. If the contract is vague, the agent fills in the blanks."
- **0:45-3:00 - Four-part structure:** Teach goal, scope, constraints, and done condition. Give a one-sentence example of each.
- **3:00-5:30 - Weak to strong:** Rewrite "fix the login bug" into "reproduce the failing login test, identify the smallest cause, patch only auth files unless evidence requires otherwise, and run the targeted test."
- **5:30-8:00 - Prompt modes:** Explain explore-only, plan-only, edit, review, debug, and verify prompts. Each mode produces a different kind of output.
- **8:00-10:30 - Command output prompts:** Show how to paste or reference a command failure and ask the agent to reason from the evidence.
- **10:30-13:00 - Interrupting drift:** Give correction language: "Stop. Keep the existing findings. Do not edit further. Narrow to the parser module and explain the next smallest step."
- **13:00-15:00 - Practice framing:** Walk through one more example and let the learner pause to rewrite it.

**Screen direction:** Show a table with weak prompt, problem, stronger prompt.

**On-screen text:** "Goal + Scope + Constraints + Done"

**Demo steps:**

1. Type a vague request.
2. Predict likely bad behavior.
3. Rewrite it with four parts.
4. Send the improved prompt.

**Exercise prompt:** "Rewrite three prompts from your own work using goal, scope, constraints, and done condition."

**Closing recap:** "The agent can only optimize for success if you define success."

## 4. Your Agent Harness And Your IDE

**Recording target:** 10-12 minutes, split screen terminal and IDE.

**Presenter script:**

- **0:00-0:45 - Hook:** "The agent can move quickly, but your IDE is where you should slow down and inspect."
- **0:45-2:00 - Division of labor:** The agent searches, explains, edits, and runs commands. The IDE helps you navigate, compare diffs, inspect symbols, and review.
- **2:00-4:30 - File discovery:** Ask the agent to identify relevant files, then open them yourself.
- **4:30-7:00 - Diff review:** Show changed lines, surrounding code, tests, and possible side effects.
- **7:00-9:00 - Correction loop:** Notice an overbroad edit and steer the agent: "Keep the behavior change, but revert the unrelated style cleanup."
- **9:00-11:00 - Review habit:** Read the diff before reading the agent's confident final summary.
- **11:00-12:00 - Transition:** "Next we will make sure we can move forward and backward safely."

**Screen direction:** Split terminal and IDE diff view. Use callouts on changed files and review notes.

**On-screen text:** "Agent executes. IDE reviews."

**Demo steps:**

1. Ask the agent where a behavior lives.
2. Open identified files.
3. Review one diff.
4. Send one correction.

**Exercise prompt:** "Review one agent change in your IDE and write one risk before accepting the summary."

**Closing recap:** "The IDE is not replaced by the agent. It becomes your control panel."

## 5. Going Forwards And Backwards In Time

**Recording target:** 10-13 minutes, git and diff workflow.

**Presenter script:**

- **0:00-0:45 - Hook:** "Agent work can move faster than your memory. Time travel keeps that speed from becoming chaos."
- **0:45-2:30 - Tools:** Introduce `git status`, diff views, commits, branches, stashes, editor undo, and session summaries.
- **2:30-5:00 - Inspect after edits:** Show how to look at what changed before giving another instruction.
- **5:00-7:00 - Checkpoints:** Explain why known-good states matter before broad changes, migrations, or refactors.
- **7:00-9:30 - Moving forward:** Accept small verified changes, then continue with the next bounded step.
- **9:30-12:00 - Moving backward:** Prefer explicit reversions or patch review over panic resets. Warn against destroying user changes.
- **12:00-13:00 - Close:** "Your confidence comes from recoverability."

**Screen direction:** Terminal with git status and IDE diff.

**On-screen text:** "Checkpoint before risk. Inspect before continue."

**Demo steps:**

1. Make a tiny change.
2. Inspect status and diff.
3. Create a checkpoint or note.
4. Show how to revert that one change intentionally.

**Exercise prompt:** "Write your checkpoint rule: when will you commit, stash, or stop for review?"

**Closing recap:** "If you can inspect and recover, you can let agents move faster without losing control."

## 6. Running Bash Commands

**Recording target:** 12-15 minutes, terminal command workflow.

**Presenter script:**

- **0:00-0:45 - Hook:** "Commands turn the agent's story into evidence."
- **0:45-2:30 - Safe categories:** Show read-only inspection, search, targeted tests, lint, typecheck, and local app startup.
- **2:30-5:00 - Risky categories:** Deletion, resets, network installs, migrations, production commands, credential access, and anything irreversible.
- **5:00-7:30 - Read-only demo:** Ask the agent to run or suggest a search command and summarize what it proves.
- **7:30-10:00 - Failing command demo:** Run a failing test or mocked failure. Ask the agent to reason from actual output.
- **10:00-12:30 - Command intent:** Every command should gather context, verify behavior, or perform a deliberate step.
- **12:30-15:00 - Approval discipline:** Approve narrow commands. Ask why a command is needed before broad or risky execution.

**Screen direction:** Terminal with commands and a side note listing command categories.

**On-screen text:** "Read. Search. Test. Verify. Be careful with irreversible commands."

**Demo steps:**

1. Run a search command.
2. Run a targeted test.
3. Inspect failure output.
4. Ask the agent for the next smallest diagnostic command.

**Exercise prompt:** "List five commands you are comfortable approving and five that require explicit review."

**Closing recap:** "Bash is where claims become checkable."

## 7. Permissions

**Recording target:** 10-13 minutes, permission decision examples.

**Presenter script:**

- **0:00-0:45 - Hook:** "Permission prompts are not friction. They are your chance to control blast radius."
- **0:45-2:30 - Categories:** File reads, file writes, shell commands, network access, browser access, credentials, and external services.
- **2:30-5:00 - Low versus high risk:** Compare reading a local file with deleting generated files, installing packages, running migrations, or calling production APIs.
- **5:00-7:30 - Permission decision checklist:** What will it touch? Why is it needed? What could go wrong? Is there a narrower alternative?
- **7:30-10:00 - Approve narrowly:** Demonstrate denying "run setup" and approving "run the test command from package.json."
- **10:00-12:30 - Personal policy:** Create rules for network, destructive commands, migrations, and broad edits.
- **12:30-13:00 - Close:** "Permissions are how your workflow expresses trust."

**Screen direction:** Show a permission request example and annotate the decision.

**On-screen text:** "What will it touch? Why now? What could go wrong?"

**Demo steps:**

1. Show broad permission request.
2. Ask the agent to narrow it.
3. Approve the narrow action.
4. Record the policy in course notes.

**Exercise prompt:** "Write approval rules for network access, destructive commands, migrations, and broad file edits."

**Closing recap:** "Good permissions let the agent help while keeping irreversible decisions with you."
