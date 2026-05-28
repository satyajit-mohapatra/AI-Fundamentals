# Foundations Learning Guide

This guide expands the points from the Foundations summary page into a fuller learning document. The goal is to move from short definitions to working judgment.

## Why this guide matters

The foundations page is intentionally short. That is useful for orientation, but not enough for durable understanding. Real AI work depends on a few basic questions:

- What task are we actually solving?
- What data is the system learning from or operating on?
- What does the model do at training time versus inference time?
- How will we know whether the system is useful in the real world?

If those questions stay vague, teams end up with impressive demos that do not survive contact with real users.

## Core pipeline

### 1. Define the task clearly

Before talking about models, define the job.

A bad task definition sounds like:

- "Use AI to improve support."
- "Build a smarter search."
- "Make the product more personalized."

A better task definition sounds like:

- "Classify inbound support tickets into five routing categories with high recall for urgent cases."
- "Rank internal docs by relevance to an engineering question."
- "Draft a first-pass lesson summary from a longer transcript."

Clear task definitions need:

- Input: what the system receives
- Output: what the system must produce
- User or operator: who consumes the result
- Decision rule: what makes the result acceptable
- Constraints: latency, cost, explainability, review requirements, or safety boundaries

If the task definition is weak, every downstream choice becomes weaker too.

### 2. Collect or prepare representative data

Data is not just "a lot of examples." It has to resemble the work the system will face after deployment.

Representative data means:

- the same kinds of inputs real users produce
- the same distribution of easy, average, and difficult cases
- the same formatting noise, missing fields, or edge cases
- labels that match the actual business decision

Poor data preparation produces false confidence. For example:

- clean lab data does not prepare the model for messy production inputs
- labels made by rushed reviewers can teach the wrong behavior
- training only on common cases hides failure on rare but important ones

Data preparation often matters more than model novelty.

### 3. Train or select a model

Sometimes you train a model from scratch. More often, you select a pre-trained model or foundation model and adapt it with prompting, retrieval, fine-tuning, or workflow design.

Model selection questions include:

- What problem class is this: classification, ranking, generation, retrieval, forecasting?
- What accuracy level is required?
- How expensive is training or usage?
- How easy is the model to operate and monitor?
- Does the model need transparency or auditability?

Choosing the best model on paper is less important than choosing a model that fits the task, data, and operating constraints.

### 4. Run inference on new inputs

Inference is the moment the trained or selected model is used on unseen inputs.

This stage is operational, not academic. You care about:

- speed
- reliability
- input validation
- fallback behavior
- output formatting
- downstream integration

Many systems look good in notebooks and break during inference because production inputs are noisier than training data or because no one defined what should happen when the model is uncertain.

### 5. Evaluate outputs against the real goal

Evaluation is where the system proves it deserves trust.

Evaluation should answer:

- Is the system correct often enough?
- Is it correct on the cases that matter most?
- Does it fail safely?
- Is the performance worth the cost?
- Does it improve the human workflow or just look interesting?

The core rule is simple: the system should be judged against the real task, not against a convenient demo metric.

## Essential distinctions

### AI

AI is the broad umbrella. It includes systems that perform tasks associated with reasoning, perception, language, prediction, or decision support.

This matters because people often use "AI" to mean only large language models. That is too narrow. Search ranking, anomaly detection, recommender systems, computer vision, forecasting, and speech systems all sit inside the broader field.

### Machine learning

Machine learning is a way of building systems that learn patterns from data instead of relying only on handwritten rules.

Traditional software says:

- if `x`, then do `y`

Machine learning says:

- learn a function from examples, then apply that function to new cases

That shift is powerful, but it introduces statistical uncertainty. Model behavior is learned, not guaranteed.

### Deep learning

Deep learning is a subset of machine learning built on multi-layer neural networks.

It matters because modern AI advances in language, images, audio, and multimodal systems are largely deep learning advances. But teams should not treat deep learning as automatically better. It is one tool class with specific strengths and costs.

### Inference

Inference is not training. It is the use of a trained model to produce an output for a new input.

This distinction matters in operations:

- training is where the model learns
- inference is where the product behaves in front of users

Many engineering concerns such as latency, cost per request, caching, fallbacks, rate limiting, and output review belong to inference-time design.

## Evaluation matters more than demos

A good demo proves possibility. It does not prove reliability.

Real evaluation often needs multiple dimensions:

- quality: accuracy, precision, recall, ranking quality, or human-rated usefulness
- speed: latency and throughput
- cost: training cost, storage cost, and per-request cost
- robustness: behavior under noisy, incomplete, or adversarial input
- human acceptability: whether the output is trustworthy, clear, and usable

### Why task-metric alignment matters

If the metric is detached from the real task, the system learns or appears to optimize the wrong thing.

Examples:

- A summarizer that produces fluent output but drops critical facts may look good to casual readers while failing its actual job.
- A classifier with high overall accuracy may still fail on rare but high-impact cases.
- A fast model may save money while creating so much review work that the total workflow becomes worse.

Evaluation should reflect the real decision, not just the easiest number to calculate.

## Data quality checklist

### Is the data representative of real inputs?

Ask whether the training and evaluation data looks like actual usage:

- same language patterns
- same formatting issues
- same missing fields
- same class imbalance
- same kinds of hard cases

If not, the model will be tuned to a world that does not exist in production.

### Are labels correct and consistent?

Labels define the target behavior.

Common problems:

- reviewers interpret categories differently
- rushed labeling introduces noise
- labels reflect proxy goals instead of real goals
- label instructions are incomplete

If the labels are inconsistent, the model learns inconsistency.

### Is there leakage from training into evaluation?

Leakage happens when evaluation data accidentally contains information the model has already effectively seen.

Examples:

- the same user or entity appears in both train and test in a way that makes the task easier
- summary targets appear in the prompt context
- features encode the answer indirectly

Leakage creates fake success.

### Are edge cases present or missing?

The average case is rarely the only case that matters.

You need to know:

- which cases are rare but costly
- whether the data includes them
- whether the model is acceptable on them

A system can be "good on average" and still be unsafe or useless where it matters most.

## Supervised vs. unsupervised learning

Supervised learning uses labeled examples. The system learns from input-output pairs.

Examples:

- classify tickets into categories
- predict churn risk
- detect spam

Unsupervised learning looks for structure without fixed labels.

Examples:

- cluster similar users
- group related documents
- detect unusual patterns

The practical difference is not just academic. Supervised work needs trustworthy labels. Unsupervised work needs careful interpretation because the groupings or latent patterns are not automatically meaningful to the business.

## Classification vs. regression

Classification predicts categories.

Examples:

- fraud or not fraud
- urgent or not urgent
- route to sales, support, or engineering

Regression predicts a continuous value.

Examples:

- forecast demand next week
- estimate delivery time
- predict house price

The distinction matters because you choose different metrics, error tolerances, and user expectations for each problem type.

## Glossary for common evaluation metrics

### Accuracy

The fraction of predictions that are correct. Useful when classes are balanced and mistakes have similar cost.

### Precision

When the system predicts a positive class, how often is it right?

Important when false positives are costly.

### Recall

Out of all real positive cases, how many did the system catch?

Important when false negatives are costly.

### F1 score

A combined precision-recall measure. Useful when you want balance rather than only one side.

### Latency

How long the system takes to return a result.

### Cost

What the system costs to train, run, or review.

Metrics should be selected because they reflect the task, not because they are fashionable.

## Training vs. fine-tuning vs. prompting

### Training

Training from scratch builds the model weights on a large dataset. This is expensive and usually reserved for model creators or very specialized organizations.

### Fine-tuning

Fine-tuning adapts an existing model using additional task-specific examples. It is useful when the task has stable patterns the base model does not reliably follow.

### Prompting

Prompting changes the instructions and examples given at inference time. It is usually the fastest way to improve a system, but it does not create new underlying knowledge.

### Practical rule

Use the smallest intervention that solves the problem:

- start with prompting and workflow design
- add retrieval or tools if knowledge is missing
- fine-tune when behavior must become more consistent across many cases
- train from scratch only when the economics and requirements truly demand it

## Study prompts

- Pick one AI product you use and rewrite its task definition in concrete terms.
- Take one real dataset you know. List two ways it might fail the representativeness test.
- Choose a metric you have seen in a dashboard. Explain what important business risk it does not capture.
- Compare one task that should use classification with one that should use regression.

## Final mental model

The foundation layer is less about model hype and more about disciplined system thinking. Clear tasks, representative data, careful evaluation, and correct distinctions are what make later AI work reliable.
