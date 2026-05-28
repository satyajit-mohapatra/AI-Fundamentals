# AI Fundamentals

This repository is organized as a lightweight study site that is meant to be read through GitHub Pages.

## Recommendation

Use `GitHub Pages`, not `GitHub Wiki`, as the primary reading surface for this repo.

`GitHub Pages` is the better fit here because:

- the content already lives in `docs/`
- it supports structured navigation and custom styling
- the reading experience is cleaner than a wiki
- the content stays versioned in the main repository instead of being split into a separate wiki repo

Use `GitHub Wiki` only if you want fast, informal notes with minimal structure. For curated learning material, `GitHub Pages` is easier to read.

## What changed

- Removed oversized generated output folders and local dependency trees.
- Added a `docs/` site for browser-based reading and navigation.
- Kept the repository focused on notes, examples, diagrams, and lightweight assets.

## Repository structure

```text
.
├── README.md
└── docs/
    ├── index.html
    ├── foundations.html
    ├── llms.html
    ├── roadmap.html
    └── assets/
        └── styles.css
```

## GitHub Pages setup

1. Push this repository to GitHub.
2. Open `Settings` -> `Pages`.
3. Under `Build and deployment`, set `Source` to `Deploy from a branch`.
4. Select your default branch and the `/docs` folder.
5. Save the settings.

GitHub will publish the site from `docs/index.html`.

## Content model

- `docs/index.html`: landing page and navigation hub
- `docs/foundations.html`: core AI and ML concepts
- `docs/llms.html`: LLM-specific concepts and workflows
- `docs/roadmap.html`: study flow and suggested repository growth

## Content guidelines

- Add notes or examples as new pages under `docs/`.
- Link each new topic from `docs/index.html`.
- Keep large generated assets and temporary build output outside the docs branch.
