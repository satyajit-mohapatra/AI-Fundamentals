# Generative AI Foundations For AI Coding

This primer gives students the shared vocabulary they need before using AI coding agents on production-style software work. It uses the AI Hero course page as the course-positioning reference, then grounds the technical concepts in vendor and standards documentation.

## Reference Positioning

Primary course reference: [AI Coding for Real Engineers](https://www.aihero.dev/cohorts/ai-coding-for-real-engineers-m0k0w)

The source page frames AI coding as an engineering workflow, not a shortcut around engineering. The course should preserve that stance:

- AI coding tools can accelerate development, tests, research, and review, but they also accelerate technical debt and unsafe changes when used without process.
- The target behavior is a proactive middle path: neither delegating everything nor refusing to delegate useful work.
- The durable skills are engineering skills: communication, anticipation, planning, decomposition, delegation, feedback loops, parallel work, and review.
- Claude Code is one example harness, but the concepts transfer to Codex, Copilot, Cursor, Windsurf, IDE agents, hosted coding agents, and future tools.

## Concept Map

Artificial intelligence is the broad field. Machine learning is a common way to build AI systems by learning patterns from data. Deep learning uses large neural networks. Foundation models are large pre-trained models that can be adapted to many tasks. Generative AI is the class of AI systems that create new text, code, images, audio, video, or structured data. Large language models are generative models focused on language and code.

For this course:

- **AI** means software that performs tasks associated with human reasoning, perception, language, prediction, or decision support.
- **Generative AI** means AI that produces new content from a prompt or other input.
- **Foundation model** means a broadly trained model that can be reused across many downstream tasks.
- **LLM** means a language-focused model that predicts and generates token sequences.
- **Prompt** means the full input package sent to the model.
- **Context** means the information currently available to the model inside its context window.
- **Harness** means the product or runtime that wraps the model with files, tools, permissions, memory, terminal access, review flows, and UI.
- **Agent** means a model-driven workflow that can take steps toward a goal, often using tools and observing results before continuing.

## AI, ML, Deep Learning, And Foundation Models

AI is an umbrella term, not one technology. In practical software teams, modern AI usually shows up through machine learning models, especially deep learning models trained on large datasets.

Machine learning differs from traditional rule-based software because the behavior is learned from examples and optimization rather than fully hand-coded as explicit rules. That means model behavior is statistical: useful, pattern-sensitive, and often powerful, but not guaranteed in the way a deterministic function is.

Foundation models are important because they changed the cost of reuse. Instead of training a narrow model for each task, teams can use a broadly trained base model and adapt it through prompting, retrieval, tool use, fine-tuning, or product workflow. AWS describes foundation models as large deep learning neural networks trained on massive datasets that can perform a range of tasks across domains. Google Cloud similarly treats generative AI systems as part of a broader AI and ML stack.

For engineers, the practical consequence is simple: the model is not "the app." The app is the complete system around the model: data, prompt, retrieval, tools, permissions, evaluation, UX, observability, and fallback behavior.

## Generative AI

Generative AI creates content rather than only classifying, ranking, or predicting a fixed label. Common outputs include:

- Text: summaries, explanations, drafts, documentation, plans, and messages.
- Code: functions, tests, refactors, migrations, scripts, and reviews.
- Images and video: concept art, thumbnails, mockups, motion drafts, or generated media.
- Audio: voiceover, music, sound effects, transcription, and translation.
- Structured data: JSON, tables, test cases, outlines, and configuration.

Generative AI is useful when the output can be reviewed, verified, constrained, or regenerated. It is risky when the output is accepted as truth, used without review, or allowed to act in high-impact systems without controls.

The core course rule: generation is cheap, but trust is earned. Every generated artifact needs a review path appropriate to its risk.

## Large Language Models

An LLM works with tokens, not human-visible "thoughts." Tokens are chunks of text or code. The model receives input tokens and produces output tokens. It predicts likely continuations based on training, instructions, examples, retrieved context, tool outputs, and the conversation so far.

Important properties:

- **Probabilistic output:** The same prompt can produce different valid answers. This is useful for brainstorming and dangerous for exact workflows.
- **Context-sensitive behavior:** Small changes in instructions, file snippets, examples, or requested format can change the result.
- **No automatic truth guarantee:** A fluent answer can still be wrong, stale, fabricated, incomplete, or unsafe.
- **Limited working memory:** The model can only use what is inside the current context window, plus any external tools or retrieval the harness provides.
- **Strong pattern completion:** LLMs are very good at following local patterns in code and prose when relevant examples are included.
- **Weak hidden assumptions:** LLMs often fill missing requirements with plausible defaults. Engineers must make constraints explicit.

In AI coding, the model should be treated like a fast junior-to-mid teammate with broad recall, no product accountability, and no inherent sense of your current repo unless the harness gives it that context.

## Tokens And Context Windows

A context window is the maximum amount of input and output the model can process in one request or session segment. Google Cloud's glossary defines it as the number of tokens a foundation model can process in a prompt. Anthropic's documentation emphasizes that prompt tokens and output tokens both count against model limits.

For coding work, context windows matter because repositories are larger than a single prompt. A harness must choose what to include:

- Current user request
- System and developer instructions
- Repo instructions such as `AGENTS.md`
- Open files, diffs, selected snippets, or search results
- Prior conversation
- Tool results
- Error logs and test output
- Plans, checklists, and handoff notes

More context is not automatically better. Too little context causes guessing. Too much context creates noise, cost, slower turns, and conflicts. The course goal is to keep the agent in a useful working range: enough relevant context to act, little enough irrelevant context to stay precise.

Good context management includes:

- Start with the goal, constraints, and definition of done.
- Add the smallest useful files or snippets.
- Prefer current command output over paraphrased errors.
- Use repo instructions for durable rules.
- Use handoff notes when a session gets long.
- Clear or compact when the conversation starts carrying stale assumptions.
- Ask the model to state uncertainty and missing context before editing risky code.

## Prompting

A prompt is not just the sentence typed by the user. In a coding harness, the prompt is the full input package: system instructions, repo instructions, user request, selected files, retrieved docs, tool output, previous conversation, and desired output format.

OpenAI's prompt guidance emphasizes clear instructions, useful context, examples, and explicit output expectations. Anthropic's prompt guidance similarly recommends making the task, context, constraints, and desired behavior clear.

A strong engineering prompt usually includes:

- **Goal:** What outcome should exist when the task is complete?
- **Context:** What repo, feature, user problem, ticket, or architecture decision matters?
- **Constraints:** What files, APIs, style rules, data risks, security boundaries, or deadlines apply?
- **Workflow:** Should the agent inspect first, plan first, write tests first, edit directly, or stay read-only?
- **Verification:** What commands, tests, screenshots, or review checks prove the work?
- **Output:** Should the agent produce a patch, summary, PR description, issue, plan, or explanation?
- **Risk posture:** What needs human approval before running, deleting, migrating, deploying, or pushing?

Weak prompt:

```text
Fix auth.
```

Stronger prompt:

```text
Inspect the login flow and identify why valid users are redirected back to /login.
Do not edit files yet. Report the route, middleware, and session state involved.
Include exact files and the smallest test or reproduction command you would use.
```

Good prompting is less about magic wording and more about task design. The best prompt is often a scoped engineering brief.

## Context Engineering

Prompting asks, "What should I say?" Context engineering asks, "What information and tools should the model have available at this step?"

For AI coding, context engineering includes:

- Selecting relevant files instead of pasting the whole repository.
- Giving current test failures instead of old summaries.
- Supplying business rules before implementation details.
- Keeping examples close to the task.
- Using retrieval or search when facts may be stale.
- Separating durable rules from one-off task instructions.
- Avoiding contradictory instructions from old chat history.
- Splitting large work into context-window-sized slices.

The practical pattern is:

1. Orient: inspect the repo and task.
2. Narrow: identify the files and contracts that matter.
3. Act: make the smallest coherent change.
4. Verify: run deterministic checks.
5. Handoff: summarize decisions, files, tests, and risks.

## AI Coding Harnesses

An AI coding harness is the environment that connects the model to real software work. The model alone cannot read your repo, run tests, inspect a browser, edit files, open issues, or create pull requests. The harness supplies those abilities.

Common harness capabilities:

- File search and reading
- Patch editing
- Terminal commands
- Test and lint execution
- Browser inspection
- Image and screenshot review
- Git diff, branch, commit, and PR workflows
- Tool integrations through APIs or MCP servers
- Persistent memory or project instructions
- Permissions and approval prompts
- Sandboxed execution
- Background or AFK job execution
- Subagents for research, review, QA, or parallel exploration

Examples include terminal coding agents, IDE chat agents, GitHub Copilot agent mode, Copilot coding agent, Codex, Claude Code, Cursor, Windsurf, Devin-style hosted agents, and internal company harnesses.

The harness changes the risk profile. A chat-only LLM can give a bad suggestion. A harness with terminal, file, database, browser, and Git access can make real changes. That is why permissions, review gates, sandboxing, and rollback plans belong in the curriculum.

## Agents, Agent Mode, And AFK Work

An agentic coding workflow gives the model a goal and lets it take multiple steps. GitHub's Copilot coding agent documentation describes an asynchronous agent that can work in a GitHub Actions-powered environment, complete assigned tasks, and open pull requests. Local agent modes usually operate inside an IDE or terminal and can inspect files, edit, run commands, and iterate.

Useful distinction:

- **Assistant:** answers or suggests.
- **Agent mode:** takes multi-step actions in your current environment.
- **Coding agent:** can work more autonomously on a scoped task, often in a branch or cloud environment.
- **AFK agent:** works while the human is away, usually from an issue backlog with strict boundaries.
- **HITL workflow:** keeps the human in the loop for decisions, approvals, and review.

AFK is not "no review." It means review happens at designed checkpoints instead of every model turn.

## Retrieval, Grounding, And RAG

LLMs are trained on broad data, but software work often depends on private, current, or local information. Grounding is the practice of anchoring model output in supplied information such as documents, code, search results, database rows, tickets, or tool output. Retrieval-augmented generation, often called RAG, retrieves relevant information and includes it in the prompt so the model can answer from that context.

For course work, grounding means:

- Use repo files for code behavior, not memory.
- Use current docs for APIs and library versions.
- Use exact terminal output for failures.
- Use tickets and PRDs for product intent.
- Cite source material when producing research notes.
- Do not let the model invent requirements when the source is missing.

## Reliability And Evaluation

Generative AI output should be judged by evidence, not confidence. Common evaluation methods:

- Unit, integration, and end-to-end tests
- Type checks and linting
- Snapshot and visual regression checks
- Manual review of diffs
- Security review for auth, data, injection, and secrets
- Reproduction steps for bug fixes
- Acceptance criteria for product work
- Benchmarks for performance-sensitive changes
- Human review for UX, product, legal, security, and data-risk decisions

Good AI coding workflows make verification cheaper than blind trust. The agent should help run checks, but the human owns whether the checks are sufficient.

## Core Risks

NIST's AI Risk Management Framework and Generative AI Profile are useful because they treat AI risk as socio-technical, not merely a model-quality problem. For this course, students should repeatedly connect AI coding to these risks:

- **Hallucination:** plausible but false claims, APIs, files, or behaviors.
- **Stale knowledge:** wrong assumptions about current libraries, pricing, laws, or product behavior.
- **Nondeterminism:** different outputs from similar prompts.
- **Prompt injection:** malicious or irrelevant text in files, webpages, tickets, or docs that tries to steer the model.
- **Data leakage:** exposing private code, secrets, logs, customer data, or credentials.
- **Security regression:** auth bypasses, injection bugs, unsafe dependencies, or overbroad permissions.
- **Silent scope creep:** extra features, refactors, files, or tests outside the task.
- **Test theater:** tests that pass but do not protect the behavior that matters.
- **Loss of codebase sense:** the team no longer understands the system because changes arrive faster than review.
- **Automation bias:** accepting model output because it is fluent or because the tool completed many steps.

The mitigation is not fear. The mitigation is process: scope, context, permissions, tests, review, source references, and rollback.

## Practical Decision Rules

- Use AI for exploration when the cost of reading is high, but verify the map against files.
- Use AI for implementation when the task is scoped, the contracts are visible, and checks are available.
- Use AI for planning when the plan can be decomposed into reviewable slices.
- Use AI for research when it cites sources and separates facts from inference.
- Use AI for tests when the behavior under test is explicit and the tests can fail for the right reason.
- Do not use AFK automation for destructive operations, migrations, secrets, payments, production deployments, or ambiguous product decisions without explicit guardrails.
- Prefer small verified loops over large unreviewed batches.
- When in doubt, ask the agent to inspect and report before editing.

## Glossary

**Agent:** A workflow that uses a model to take multiple steps toward a goal, often with tools.

**AI:** A broad category of systems that perform tasks associated with intelligence, such as language, prediction, classification, planning, and decision support.

**AFK agent:** A background or autonomous agent workflow designed to continue while the human is away, usually with sandboxing and review gates.

**Context:** The information currently available to the model for the next response.

**Context window:** The token budget the model can process for input plus output.

**Embedding:** A numeric representation of text, code, image, or other data used for similarity search and retrieval.

**Foundation model:** A broadly trained model that can be adapted or prompted for many tasks.

**Generative AI:** AI that creates new content such as text, code, images, audio, video, or structured data.

**Grounding:** Supplying authoritative context so the model's answer is anchored in current, relevant information.

**Harness:** The app, CLI, IDE, or platform that connects a model to tools, files, permissions, memory, and workflow.

**HITL:** Human-in-the-loop. A workflow where the human remains part of decision, approval, review, or verification steps.

**LLM:** Large language model. A model trained to process and generate language-like token sequences, including natural language and code.

**Prompt:** The full instruction and context package sent to the model.

**RAG:** Retrieval-augmented generation. A pattern that retrieves relevant source material and includes it in the prompt.

**Token:** A unit of text or code processed by a model.

**Tool use:** The model or harness calling an external function, such as file search, shell execution, browser inspection, database query, or API call.

## Research Sources

- [AI Coding for Real Engineers](https://www.aihero.dev/cohorts/ai-coding-for-real-engineers-m0k0w) - course positioning, production-style AI coding risks, and module themes.
- [Google Cloud: What is Artificial Intelligence?](https://cloud.google.com/learn/what-is-artificial-intelligence) - AI, ML, and deep learning framing.
- [Google Cloud: Generative AI glossary](https://docs.cloud.google.com/docs/generative-ai/glossary) - terms such as context window, embeddings, grounding, and generative AI.
- [AWS: What are Foundation Models?](https://aws.amazon.com/what-is/foundation-models/) - foundation model definition and reuse pattern.
- [OpenAI: Prompting guide](https://platform.openai.com/docs/guides/prompting) - prompt structure, context, and model interaction guidance.
- [OpenAI Academy: Prompting fundamentals](https://openai.com/academy/prompting/) - beginner-level prompt clarity and iteration guidance.
- [Anthropic: Context windows](https://docs.anthropic.com/en/docs/build-with-claude/context-windows) - context window behavior and token budgeting.
- [GitHub Docs: About Copilot coding agent](https://docs.github.com/en/copilot/concepts/about-copilot-coding-agent) - asynchronous coding-agent workflow and PR-oriented task execution.
- [NIST AI Risk Management Framework](https://www.nist.gov/itl/ai-risk-management-framework) - AI risk management framing.
- [NIST AI 600-1: Generative AI Profile](https://nvlpubs.nist.gov/nistpubs/ai/NIST.AI.600-1.pdf) - generative AI risk profile and governance perspective.
