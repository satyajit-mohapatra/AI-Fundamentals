# LLM Learning Guide

This guide expands the points from the LLMs summary page into a fuller learning document. The goal is to explain not just what the pieces are, but how they work together in real systems.

## Why this guide matters

Large language models are easy to misunderstand because the interface looks simple: type text, get text. But most production value does not come from the model alone. It comes from the surrounding system.

That means you should study LLMs at three levels:

- the model itself
- the prompt and context you provide
- the broader application system that wraps the model

## Model, prompt, and system

### Model

The model is the probability engine that predicts token sequences.

Its behavior depends on:

- training data
- architecture
- context length
- alignment and post-training
- inference settings

The model gives you general capability, but not reliable product behavior by itself.

### Prompt

The prompt is the full input package:

- task instruction
- constraints
- examples
- retrieved context
- tool outputs
- formatting requirements

Prompting can improve consistency and steer the model into more useful output shapes, but it cannot make the model know facts it was never given or reliably reason through a task with missing context.

### System

The system is everything around the model:

- retrieval
- tools
- memory
- permissions
- evaluation
- guardrails
- user interface
- logging and observability

This is where most quality comes from. A mediocre raw prompt on a well-designed system often beats a brilliant prompt on an unsupported system.

## Key concepts

### Tokens

Models do not think in human-visible words or ideas. They consume and generate tokens, which are chunks of text or code.

Why this matters:

- cost is often token-based
- long prompts increase latency and price
- formatting changes can affect token usage
- context limits are measured in tokens, not documents

### Context window

The context window is the total amount of input and output the model can consider in one interaction segment.

This matters because:

- too much context can crowd out the instructions that matter
- too little context causes missing information and brittle behavior
- systems must choose what to include, compress, retrieve, or omit

Large context windows help, but they do not remove the need for judgment.

### Embeddings

Embeddings are vector representations of text, code, or other data that preserve semantic similarity.

They are commonly used for:

- semantic search
- document retrieval
- clustering related content
- finding similar examples

Embeddings do not generate answers. They help the system find relevant context.

### RAG

Retrieval-augmented generation adds a retrieval step before or during model generation.

The flow is usually:

1. turn the question into a query
2. retrieve relevant documents or snippets
3. insert them into the prompt
4. ask the model to answer using that context

RAG is useful when truth must come from current or local documents rather than only from model pretraining.

### Tools

Tools are external functions or APIs the model can call.

Examples:

- search the repo
- run tests
- read a database record
- send a message
- create a ticket

Tool use is how a model stops being only a text generator and starts acting inside a workflow.

## Practical failure modes

### Hallucinated facts

The model sounds confident even when it lacks grounding.

What to do:

- give retrieval when accuracy depends on documents
- give tools when accuracy depends on external state
- require citations or evidence in high-trust workflows

### Prompt brittleness

Small wording changes can alter output quality.

What to do:

- keep prompts structured
- provide examples
- test prompts across variants
- avoid magical one-line prompts for critical tasks

### Context overflow

Important instructions or evidence can get pushed out by too much input.

What to do:

- summarize old context
- retrieve only relevant content
- keep instructions stable and prominent
- avoid dumping whole repos or documents when a search result would do

### Bad tool selection or tool arguments

The model may choose the wrong tool or call the right tool poorly.

What to do:

- design clear tool descriptions
- constrain expected input shapes
- validate arguments
- capture tool errors and let the model recover explicitly

### Evaluation gaps

Teams often test only whether the model produced something plausible, not whether the workflow actually improved.

What to do:

- evaluate against real tasks
- keep adversarial or edge-case tests
- compare outputs over time
- track review burden, not just first-pass quality

## Useful mental model

Treat the model as a probabilistic reasoning engine, not as a guaranteed truth source.

That means:

- generation is easy
- verification is essential
- strong systems reduce ambiguity
- human trust should be earned through evidence, not fluency

## Prompting patterns

Prompting works best when it is systematic rather than decorative.

Useful patterns include:

### Role and objective framing

Tell the model what job it is doing and what success looks like.

Example:

- "Review this change for behavioral regressions and missing tests."

### Constraint-first prompting

Put the boundaries near the top:

- do not edit files
- use only local repo context
- answer in bullet points
- cite failing test names

### Example-driven prompting

Show the desired format or reasoning shape with one or two examples.

### Decomposition prompting

Ask the model to separate:

- requirements
- assumptions
- plan
- implementation
- verification

Prompting patterns matter because they convert vague interaction into repeatable workflow.

## RAG architecture in practical terms

A useful RAG system usually has these stages:

1. content ingestion
2. chunking
3. embedding
4. indexing
5. query transformation
6. retrieval
7. prompt assembly
8. answer generation
9. citation or evidence display

Common failure points:

- chunks are too large or too small
- retrieval returns lexically similar but semantically wrong content
- the prompt does not force the model to use retrieved evidence
- outdated or duplicate documents pollute the index

RAG is not "search plus model" by magic. It is an information architecture problem.

## Task-specific scorecards

Different tasks need different evaluation scorecards.

Examples:

### Q&A over documents

- factual correctness
- citation quality
- answer completeness
- refusal quality when evidence is missing

### Code generation

- tests passing
- behavior correctness
- style and maintainability
- scope control

### Summarization

- factual retention
- omission risk
- structure and readability
- faithfulness to source emphasis

### Agentic workflows

- tool choice accuracy
- recovery from errors
- permission handling
- end-to-end task completion

The point of a scorecard is to stop treating all model output as one generic quality problem.

## Safety: data leakage and tool misuse

### Data leakage

Leakage happens when sensitive information appears in prompts, logs, retrieval results, or outputs where it does not belong.

Risk areas:

- secret values in repo context
- private user data in prompts
- copied internal documents in chat history
- training or evaluation datasets that expose sensitive fields

Controls:

- redact secrets
- scope retrieval carefully
- separate public and private indexes
- define logging rules

### Tool misuse

A model with tool access can do the wrong thing faster.

Examples:

- deleting or overwriting files
- using the wrong environment
- sending messages to the wrong audience
- performing expensive external actions with bad parameters

Controls:

- permission gates
- dry-run modes
- confirmation for destructive actions
- narrow tool interfaces
- audit logs

Safety is not a side topic. It is part of system design.

## Study prompts

- Pick one LLM workflow you use. Separate the model layer from the system layer.
- Rewrite a vague prompt into a constraint-first prompt with an explicit done condition.
- Sketch a small RAG architecture for course notes or repo documentation.
- Design a scorecard for one agentic task you care about.
- List one data leakage risk and one tool misuse risk in a coding-agent workflow.

## Final mental model

The durable lesson is that LLM products are systems, not just prompts. Better prompt phrasing helps, but better system design helps more.
