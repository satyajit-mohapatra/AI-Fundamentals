import fs from "node:fs/promises";
import path from "node:path";
import { createRequire } from "node:module";
import { fileURLToPath } from "node:url";

const require = createRequire(import.meta.url);
const sharp = require("/Users/satyajitmohapatra/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/sharp");

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const slidesDir = path.join(__dirname, "slides");
const assetDir = path.join(__dirname, "assets");

const palette = {
  ink: "#17202A",
  muted: "#65717E",
  paper: "#F8F6F1",
  paper2: "#ECE7DC",
  green: "#1F7A5C",
  mint: "#B7E4D0",
  blue: "#2D5BFF",
  sky: "#BFD7FF",
  yellow: "#F2C94C",
  coral: "#E85D4A",
  violet: "#6C5CE7",
  line: "#D8D1C3",
  dark: "#111827",
};

function esc(text) {
  return String(text).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;");
}

function svgFrame(title, subtitle, body, mode = "flow") {
  const stage = {
    flow: flowSvg(),
    terminal: terminalSvg(),
    map: mapSvg(),
    steering: steeringSvg(),
    planning: planningSvg(),
    feedback: feedbackSvg(),
    afk: afkSvg(),
    hitl: hitlSvg(),
    capstone: capstoneSvg(),
    workbook: workbookSvg(),
  }[mode] || flowSvg();

  return `
  <svg xmlns="http://www.w3.org/2000/svg" width="960" height="540" viewBox="0 0 960 540">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="${palette.paper}"/>
        <stop offset="100%" stop-color="${palette.paper2}"/>
      </linearGradient>
      <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
        <feDropShadow dx="0" dy="10" stdDeviation="14" flood-color="#17202A" flood-opacity=".15"/>
      </filter>
    </defs>
    <rect width="960" height="540" fill="url(#bg)"/>
    <circle cx="822" cy="94" r="74" fill="${palette.mint}" opacity=".72"/>
    <circle cx="115" cy="453" r="86" fill="${palette.sky}" opacity=".55"/>
    <text x="56" y="70" font-family="Aptos, Arial" font-size="34" font-weight="700" fill="${palette.ink}">${esc(title)}</text>
    <text x="58" y="105" font-family="Aptos, Arial" font-size="17" fill="${palette.muted}">${esc(subtitle)}</text>
    ${stage}
    <rect x="56" y="442" width="848" height="52" rx="16" fill="#ffffff" opacity=".86" filter="url(#shadow)"/>
    <text x="82" y="474" font-family="Aptos, Arial" font-size="20" font-weight="700" fill="${palette.ink}">${esc(body)}</text>
  </svg>`;
}

function flowSvg() {
  const labels = ["Shape", "Plan", "Execute", "Verify", "Handoff"];
  return labels.map((label, i) => {
    const x = 92 + i * 158;
    const color = [palette.green, palette.blue, palette.violet, palette.coral, palette.yellow][i];
    const arrow = i < labels.length - 1 ? `<path d="M${x + 112} 265 H${x + 148}" stroke="${palette.ink}" stroke-width="4" marker-end="url(#none)"/>` : "";
    return `<rect x="${x}" y="220" width="112" height="78" rx="18" fill="${color}" opacity=".92"/><text x="${x + 56}" y="267" text-anchor="middle" font-family="Aptos, Arial" font-size="18" font-weight="700" fill="white">${label}</text>${arrow}`;
  }).join("");
}

function terminalSvg() {
  return `
    <rect x="92" y="158" width="520" height="248" rx="18" fill="${palette.dark}" filter="url(#shadow)"/>
    <circle cx="124" cy="188" r="7" fill="${palette.coral}"/><circle cx="148" cy="188" r="7" fill="${palette.yellow}"/><circle cx="172" cy="188" r="7" fill="${palette.green}"/>
    <text x="124" y="236" font-family="Aptos Mono, Menlo, monospace" font-size="17" fill="#B7E4D0">$ agent inspect repo --no-edits</text>
    <text x="124" y="274" font-family="Aptos Mono, Menlo, monospace" font-size="17" fill="#D1D5DB">files: app/, tests/, docs/</text>
    <text x="124" y="312" font-family="Aptos Mono, Menlo, monospace" font-size="17" fill="#D1D5DB">checks: test, lint, typecheck</text>
    <text x="124" y="350" font-family="Aptos Mono, Menlo, monospace" font-size="17" fill="#93C5FD">next: map lesson workflow</text>
    <rect x="650" y="180" width="190" height="66" rx="16" fill="${palette.blue}"/><text x="745" y="221" text-anchor="middle" font-family="Aptos, Arial" font-size="18" font-weight="700" fill="white">Context</text>
    <rect x="650" y="270" width="190" height="66" rx="16" fill="${palette.green}"/><text x="745" y="311" text-anchor="middle" font-family="Aptos, Arial" font-size="18" font-weight="700" fill="white">Permission</text>`;
}

function mapSvg() {
  return `
    <rect x="108" y="154" width="210" height="94" rx="18" fill="#fff" stroke="${palette.line}" stroke-width="2" filter="url(#shadow)"/>
    <text x="213" y="205" text-anchor="middle" font-family="Aptos" font-size="19" font-weight="700" fill="${palette.ink}">Entry point</text>
    <rect x="374" y="154" width="210" height="94" rx="18" fill="#fff" stroke="${palette.line}" stroke-width="2" filter="url(#shadow)"/>
    <text x="479" y="205" text-anchor="middle" font-family="Aptos" font-size="19" font-weight="700" fill="${palette.ink}">Core logic</text>
    <rect x="640" y="154" width="210" height="94" rx="18" fill="#fff" stroke="${palette.line}" stroke-width="2" filter="url(#shadow)"/>
    <text x="745" y="205" text-anchor="middle" font-family="Aptos" font-size="19" font-weight="700" fill="${palette.ink}">Tests</text>
    <path d="M318 201 H374 M584 201 H640" stroke="${palette.blue}" stroke-width="5"/>
    <rect x="180" y="300" width="600" height="92" rx="20" fill="${palette.green}" opacity=".94"/>
    <text x="480" y="355" text-anchor="middle" font-family="Aptos" font-size="24" font-weight="700" fill="white">File map before patch</text>`;
}

function steeringSvg() {
  return `
    <rect x="92" y="150" width="238" height="235" rx="20" fill="#fff" stroke="${palette.line}" stroke-width="2" filter="url(#shadow)"/>
    <text x="118" y="198" font-family="Aptos" font-size="24" font-weight="700" fill="${palette.ink}">Repo rules</text>
    <text x="118" y="238" font-family="Aptos" font-size="18" fill="${palette.muted}">commands</text>
    <text x="118" y="272" font-family="Aptos" font-size="18" fill="${palette.muted}">style rules</text>
    <text x="118" y="306" font-family="Aptos" font-size="18" fill="${palette.muted}">safety rails</text>
    <rect x="398" y="150" width="238" height="235" rx="20" fill="${palette.dark}" filter="url(#shadow)"/>
    <text x="424" y="198" font-family="Aptos" font-size="24" font-weight="700" fill="white">Workflows</text>
    <text x="424" y="238" font-family="Aptos" font-size="18" fill="#D1D5DB">diagnose</text>
    <text x="424" y="272" font-family="Aptos" font-size="18" fill="#D1D5DB">do work</text>
    <text x="424" y="306" font-family="Aptos" font-size="18" fill="#D1D5DB">handoff</text>
    <rect x="704" y="150" width="156" height="235" rx="20" fill="${palette.violet}" filter="url(#shadow)"/>
    <text x="782" y="242" text-anchor="middle" font-family="Aptos" font-size="24" font-weight="700" fill="white">Memory</text>
    <text x="782" y="278" text-anchor="middle" font-family="Aptos" font-size="16" fill="white">suggests</text>`;
}

function planningSvg() {
  return `
    <rect x="104" y="140" width="250" height="260" rx="22" fill="#fff" stroke="${palette.line}" stroke-width="2" filter="url(#shadow)"/>
    <text x="132" y="188" font-family="Aptos" font-size="24" font-weight="700" fill="${palette.ink}">PRD</text>
    <text x="132" y="230" font-family="Aptos" font-size="17" fill="${palette.muted}">problem</text>
    <text x="132" y="262" font-family="Aptos" font-size="17" fill="${palette.muted}">non-goals</text>
    <text x="132" y="294" font-family="Aptos" font-size="17" fill="${palette.muted}">acceptance</text>
    <path d="M376 270 H492" stroke="${palette.blue}" stroke-width="6"/>
    <rect x="504" y="160" width="130" height="70" rx="16" fill="${palette.blue}"/><text x="569" y="202" text-anchor="middle" font-family="Aptos" font-size="18" font-weight="700" fill="white">Phase 1</text>
    <rect x="504" y="250" width="130" height="70" rx="16" fill="${palette.green}"/><text x="569" y="292" text-anchor="middle" font-family="Aptos" font-size="18" font-weight="700" fill="white">Tracer</text>
    <rect x="504" y="340" width="130" height="70" rx="16" fill="${palette.violet}"/><text x="569" y="382" text-anchor="middle" font-family="Aptos" font-size="18" font-weight="700" fill="white">Phase 3</text>
    <rect x="700" y="204" width="160" height="150" rx="80" fill="${palette.yellow}" filter="url(#shadow)"/>
    <text x="780" y="286" text-anchor="middle" font-family="Aptos" font-size="22" font-weight="700" fill="${palette.ink}">Evidence</text>`;
}

function feedbackSvg() {
  return `
    <circle cx="480" cy="275" r="120" fill="#fff" stroke="${palette.line}" stroke-width="2" filter="url(#shadow)"/>
    <path d="M480 155 A120 120 0 0 1 594 238" fill="none" stroke="${palette.coral}" stroke-width="12"/>
    <path d="M594 312 A120 120 0 0 1 480 395" fill="none" stroke="${palette.green}" stroke-width="12"/>
    <path d="M378 340 A120 120 0 0 1 378 210" fill="none" stroke="${palette.blue}" stroke-width="12"/>
    <text x="480" y="257" text-anchor="middle" font-family="Aptos" font-size="24" font-weight="700" fill="${palette.ink}">Red</text>
    <text x="480" y="288" text-anchor="middle" font-family="Aptos" font-size="24" font-weight="700" fill="${palette.ink}">Green</text>
    <text x="480" y="319" text-anchor="middle" font-family="Aptos" font-size="24" font-weight="700" fill="${palette.ink}">Refactor</text>
    <rect x="116" y="214" width="190" height="78" rx="18" fill="${palette.dark}"/><text x="211" y="260" text-anchor="middle" font-family="Aptos" font-size="19" font-weight="700" fill="white">Pre-commit</text>
    <rect x="654" y="214" width="190" height="78" rx="18" fill="${palette.green}"/><text x="749" y="260" text-anchor="middle" font-family="Aptos" font-size="19" font-weight="700" fill="white">Verification</text>`;
}

function afkSvg() {
  return `
    <rect x="92" y="140" width="230" height="260" rx="20" fill="#fff" stroke="${palette.line}" stroke-width="2" filter="url(#shadow)"/>
    <text x="118" y="188" font-family="Aptos" font-size="24" font-weight="700" fill="${palette.ink}">Task envelope</text>
    <text x="118" y="232" font-family="Aptos" font-size="17" fill="${palette.muted}">scope</text>
    <text x="118" y="264" font-family="Aptos" font-size="17" fill="${palette.muted}">stop condition</text>
    <text x="118" y="296" font-family="Aptos" font-size="17" fill="${palette.muted}">validation</text>
    <path d="M346 270 H468" stroke="${palette.blue}" stroke-width="6"/>
    <rect x="488" y="164" width="160" height="84" rx="20" fill="${palette.blue}" filter="url(#shadow)"/><text x="568" y="214" text-anchor="middle" font-family="Aptos" font-size="21" font-weight="700" fill="white">AFK run</text>
    <rect x="488" y="300" width="160" height="84" rx="20" fill="${palette.green}" filter="url(#shadow)"/><text x="568" y="350" text-anchor="middle" font-family="Aptos" font-size="21" font-weight="700" fill="white">Report</text>
    <rect x="718" y="204" width="130" height="130" rx="65" fill="${palette.coral}" filter="url(#shadow)"/><text x="783" y="276" text-anchor="middle" font-family="Aptos" font-size="22" font-weight="700" fill="white">Review</text>`;
}

function hitlSvg() {
  const cols = ["Inbox", "Ready", "Running", "Review", "Done"];
  return cols.map((c, i) => {
    const x = 70 + i * 170;
    return `<rect x="${x}" y="148" width="140" height="244" rx="18" fill="#fff" stroke="${palette.line}" stroke-width="2" filter="url(#shadow)"/>
      <text x="${x + 70}" y="188" text-anchor="middle" font-family="Aptos" font-size="20" font-weight="700" fill="${palette.ink}">${c}</text>
      <rect x="${x + 22}" y="${222 + (i % 2) * 42}" width="96" height="46" rx="10" fill="${[palette.sky, palette.mint, "#FBE7A6", "#F8B4A8", "#C9C4FF"][i]}"/>
      <rect x="${x + 22}" y="${292 + ((i + 1) % 2) * 30}" width="96" height="46" rx="10" fill="${[palette.mint, "#FBE7A6", "#F8B4A8", "#C9C4FF", palette.sky][i]}"/>`;
  }).join("");
}

function capstoneSvg() {
  return `
    <rect x="90" y="150" width="780" height="240" rx="28" fill="${palette.dark}" filter="url(#shadow)"/>
    <text x="130" y="206" font-family="Aptos" font-size="26" font-weight="700" fill="white">CourseForge Capstone</text>
    <text x="130" y="258" font-family="Aptos" font-size="20" fill="#D1D5DB">Lesson script review workflow</text>
    <text x="130" y="306" font-family="Aptos" font-size="20" fill="#D1D5DB">PRD -> plan -> tracer bullet -> tests -> handoff</text>
    <rect x="650" y="206" width="150" height="112" rx="20" fill="${palette.green}"/>
    <text x="725" y="270" text-anchor="middle" font-family="Aptos" font-size="22" font-weight="700" fill="white">Verified</text>`;
}

function workbookSvg() {
  return `
    <rect x="144" y="132" width="290" height="300" rx="18" fill="#fff" stroke="${palette.line}" stroke-width="2" filter="url(#shadow)"/>
    <text x="176" y="188" font-family="Aptos" font-size="24" font-weight="700" fill="${palette.ink}">Workbook</text>
    <text x="176" y="238" font-family="Aptos" font-size="18" fill="${palette.muted}">artifact each day</text>
    <text x="176" y="278" font-family="Aptos" font-size="18" fill="${palette.muted}">verified change</text>
    <text x="176" y="318" font-family="Aptos" font-size="18" fill="${palette.muted}">bounded plan</text>
    <text x="176" y="358" font-family="Aptos" font-size="18" fill="${palette.muted}">final handoff</text>
    <rect x="524" y="170" width="250" height="220" rx="26" fill="${palette.green}" filter="url(#shadow)"/>
    <text x="649" y="268" text-anchor="middle" font-family="Aptos" font-size="28" font-weight="700" fill="white">Proof of work</text>`;
}

const images = [
  ["hero.png", "AI Coding Course", "For real engineering workflows", "Build reliable agent loops around production-style work", "flow"],
  ["courseforge.png", "CourseForge", "Sample app students build", "A course creation workspace for scripts, reviews, and publishing", "capstone"],
  ["harness.png", "Agent Harness Basics", "Sessions, prompts, shell commands", "Ask, inspect, approve, run, review, continue", "terminal"],
  ["fundamentals.png", "Day 1 Fundamentals", "LLM constraints and codebase exploration", "Explore before edit. Verify before merge.", "map"],
  ["steering.png", "Day 2 Steering", "Repo instructions, workflows, memory", "Persistent instructions turn prompts into process", "steering"],
  ["planning.png", "Day 3 Planning", "PRDs, phases, tracer bullets", "Reduce uncertainty before implementation", "planning"],
  ["feedback.png", "Day 4 Feedback Loops", "Pre-commit and red-green-refactor", "Code is cheap; verification is not", "feedback"],
  ["afk.png", "Day 5 AFK Agents", "Backlogs, issues, sandboxes", "Unattended does not mean unbounded", "afk"],
  ["hitl.png", "Day 6 HITL Patterns", "Research, prototypes, Kanban", "Use humans at decision boundaries", "hitl"],
  ["workbook.png", "Student Workbook", "Tasks, deliverables, capstone", "Every lesson ends with a concrete artifact", "workbook"],
];

const slides = [
  { title: "AI Coding for Real Engineers", kicker: "Course deck", claim: "Teach agents as engineering workflow, not magic code generation.", bullets: ["Two-week arc from setup to AFK/HITL workflows", "Running sample app: CourseForge", "Every day ends with a concrete student artifact"], image: "hero.png", layout: "hero" },
  { title: "The Course Thesis", kicker: "Why this matters", claim: "The winning workflow is the middle path between over-delegating and under-delegating.", bullets: ["Works across terminal, CLI, IDE, and hosted agent harnesses", "Delegate bounded work to move faster", "Keep product judgment and risk ownership human", "Use evidence loops to preserve codebase sense"], image: "hero.png", layout: "split" },
  { title: "Running Sample App: CourseForge", kicker: "Build thread", claim: "Students build a production-style course creation workspace in thin slices.", bullets: ["Courses, modules, lessons, scripts", "AI writing modes and review states", "Publishing tasks, backlog, Kanban, capstone"], image: "courseforge.png", layout: "imageRight" },
  { title: "Two-Week Learning Arc", kicker: "Course map", claim: "Week 1 builds control; Week 2 scales that control across agents and workflows.", bullets: ["Week 1: agent harness, fundamentals, steering, planning", "Week 2: feedback loops, AFK, HITL, research, architecture", "Capstone: Lesson Script Review Workflow"], image: "workbook.png", layout: "timeline" },
  { title: "01 - Before We Start", kicker: "Available May 18", claim: "Orient students around safety, setup, community, and the final workflow.", bullets: ["Set course expectations and Discord norms", "Set up repo, migrations, and your chosen harness", "Create first setup notes and migration checklist"], image: "hero.png", layout: "day" },
  { title: "Day 01 Student Tasks", kicker: "Artifacts", claim: "Students leave with a known baseline and a personal AI coding policy.", bullets: ["CourseForge setup notes", "Migration safety checklist for ScriptDraft", "Office-hours question template", "Personal risk statement: what stays human-owned"], image: "workbook.png", layout: "tasks" },
  { title: "02 - Getting To Know Your Agent Harness", kicker: "Available May 18", claim: "The agent becomes useful when sessions, prompts, commands, and permissions are explicit.", bullets: ["Manage current repo and session context", "Prompt with goal, scope, constraints, done condition", "Use shell commands as evidence"], image: "harness.png", layout: "day" },
  { title: "Agent Harness Practice", kicker: "CourseForge orientation", claim: "First contact with a repo should be read-only in any tool.", bullets: ["Translate the loop to your chosen harness", "Ask the agent to inspect CourseForge without edits", "Create a session-start worksheet", "Define a permission policy for risky actions"], image: "harness.png", layout: "imageRight" },
  { title: "03 - Day 1 Fundamentals", kicker: "Available June 1", claim: "Students learn to control LLM uncertainty with exploration, subagents, verification, and handoff.", bullets: ["LLMs are fluent, not automatically correct", "Subagents help with bounded side work", "Explore the codebase before building features"], image: "fundamentals.png", layout: "day" },
  { title: "Day 1 Example: Lesson Status Filter", kicker: "CourseForge feature slice", claim: "Build one small, verifiable feature after mapping the code path.", bullets: ["Map entry point, core logic, and test location", "Add a lesson status filter or duration display", "Run one check and write a handoff"], image: "fundamentals.png", layout: "split" },
  { title: "Grill, Execute, Clear", kicker: "Operating loop", claim: "The loop converts vague requests into repeatable progress.", bullets: ["Grill: scope, risks, acceptance, unknowns", "Execute: one bounded slice", "Clear: changed files, checks, risks, next step"], image: "fundamentals.png", layout: "process" },
  { title: "04 - Day 2 Steering", kicker: "Available June 1", claim: "Persistent instructions make agent behavior more reliable across sessions.", bullets: ["Write actionable repo instructions", "Use progressive disclosure to reduce context noise", "Package repeated work as reusable workflows"], image: "steering.png", layout: "day" },
  { title: "Steering Assets Students Create", kicker: "CourseForge controls", claim: "The repo starts teaching the agent how work should happen.", bullets: ["Repo instructions with setup, tests, style, safety", "Module-specific notes for lessons/scripts", "A first workflow candidate: do-work, diagnose, or handoff"], image: "steering.png", layout: "tasks" },
  { title: "05 - Day 3 Planning", kicker: "Available June 1", claim: "Large tasks become safe when they are decomposed into evidence-producing phases.", bullets: ["Write PRDs before implementation", "Split work across context windows", "Use tracer bullets to prove risky paths"], image: "planning.png", layout: "day" },
  { title: "Planning Example: AI Writing Assistant", kicker: "CourseForge larger feature", claim: "The first phase should prove the integration path, not polish the product.", bullets: ["PRD: hook, recap, exercise, rewrite modes", "Tracer bullet: script text -> hook suggestion -> saved draft note", "Defer full AI integration until the workflow is proven"], image: "planning.png", layout: "imageRight" },
  { title: "06 - Day 4 Feedback Loops", kicker: "Available June 8", claim: "Generated code is cheap; trusted code still needs evidence.", bullets: ["Build a reusable do-work workflow", "Use pre-commit for mechanical feedback", "Drive behavior with red-green-refactor"], image: "feedback.png", layout: "day" },
  { title: "Feedback Example: Publishing Readiness", kicker: "CourseForge rule", claim: "A lesson cannot move to recorded unless the latest script draft is approved.", bullets: ["Red: failing status-transition test", "Green: minimal guard rule", "Refactor: clearer status transition module"], image: "feedback.png", layout: "split" },
  { title: "07 - Day 5 AFK Agents", kicker: "Available June 8", claim: "AFK work is safe only when the task envelope is stronger than the agent's improvisation.", bullets: ["Sandcastle and sandboxing reduce blast radius", "Backlogs queue agent-ready tasks", "GitHub Issues make work traceable"], image: "afk.png", layout: "day" },
  { title: "AFK Candidate Queue", kicker: "CourseForge backlog", claim: "Unattended tasks should be boring, bounded, and verifiable.", bullets: ["Normalize empty-state copy", "Generate issue drafts from accepted PRD phases", "Update docs after a feature lands"], image: "afk.png", layout: "tasks" },
  { title: "08 - Day 6 HITL Patterns", kicker: "Available June 8", claim: "Humans belong at decision boundaries; agents belong on bounded execution paths.", bullets: ["Classify HITL versus AFK tasks", "Use research and prototypes before committing", "Improve architecture for AI navigability"], image: "hitl.png", layout: "day" },
  { title: "HITL Example: Script Review UI", kicker: "Prototype before production", claim: "UI work benefits from concrete options before implementation.", bullets: ["Prototype script review screen", "Compare clarity, density, workflow speed, accessibility", "Decide keep, change, discard"], image: "hitl.png", layout: "imageRight" },
  { title: "Capstone: Lesson Script Review Workflow", kicker: "End-to-end proof", claim: "Students demonstrate the full workflow from task definition through handoff.", bullets: ["Create and approve lesson script drafts", "Block recording until latest draft is approved", "Run tests and produce review-ready handoff"], image: "courseforge.png", layout: "capstone" },
  { title: "Workbook Deliverables", kicker: "Proof of learning", claim: "The course is complete when students can show artifacts, not just understanding.", bullets: ["One artifact from each module", "One verified agent-assisted change", "One bounded plan and one trusted AFK task", "One final capstone handoff"], image: "workbook.png", layout: "tasks" },
  { title: "Assessment Rubric", kicker: "What good looks like", claim: "Grade the workflow, not just the code.", bullets: ["Task framing: goal, scope, acceptance", "Steering: repo instructions, workflows, memory", "Execution: small steps, review gates, verification", "Handoff: files, decisions, risks, next steps"], image: "workbook.png", layout: "split" },
  { title: "Final Takeaway", kicker: "Course close", claim: "Choose the lightest workflow that controls the actual risk.", bullets: ["More autonomy requires stronger boundaries", "More ambiguity requires more human judgment", "Every agent claim should connect to evidence"], image: "hero.png", layout: "hero" },
];

const slideTemplate = `const C = {
  ink: "#17202A", muted: "#65717E", paper: "#F8F6F1", paper2: "#ECE7DC",
  green: "#1F7A5C", mint: "#B7E4D0", blue: "#2D5BFF", sky: "#BFD7FF",
  yellow: "#F2C94C", coral: "#E85D4A", violet: "#6C5CE7", line: "#D8D1C3", dark: "#111827"
};

function bg(slide, ctx) {
  ctx.addShape(slide, { x: 0, y: 0, w: 1280, h: 720, fill: C.paper, line: ctx.line() });
  ctx.addShape(slide, { x: 0, y: 636, w: 1280, h: 84, fill: C.dark, line: ctx.line() });
  ctx.addText(slide, { text: "AI Coding Course | CourseForge sample app", x: 56, y: 666, w: 520, h: 28, size: 15, color: "#F8F6F1" });
}

function titleBlock(slide, ctx, s, x = 56, y = 54, w = 520) {
  ctx.addText(slide, { text: s.kicker.toUpperCase(), x, y, w, h: 26, size: 14, bold: true, color: C.green });
  ctx.addText(slide, { text: s.title, x, y: y + 34, w, h: 78, size: 39, bold: true, color: C.ink, face: ctx.fonts.title });
  ctx.addText(slide, { text: s.claim, x, y: y + 126, w, h: 84, size: 23, bold: true, color: C.ink });
}

function bullets(slide, ctx, items, x, y, w, color = C.ink) {
  items.forEach((item, i) => {
    const yy = y + i * 50;
    ctx.addShape(slide, { x, y: yy + 8, w: 12, h: 12, geometry: "ellipse", fill: [C.green, C.blue, C.coral, C.violet][i % 4], line: ctx.line() });
    ctx.addText(slide, { text: item, x: x + 28, y: yy, w, h: 42, size: 21, color });
  });
}

async function image(slide, ctx, file, x, y, w, h) {
  ctx.addShape(slide, { x, y, w, h, fill: "#FFFFFF", line: { style: "solid", fill: C.line, width: 1 } });
  await ctx.addImage(slide, { path: ctx.assetDir + "/" + file, x, y, w, h, fit: "contain", alt: file });
}

async function renderSlide(presentation, ctx, s) {
  const slide = presentation.slides.add();
  bg(slide, ctx);
  if (s.layout === "hero") {
    await image(slide, ctx, s.image, 640, 54, 560, 430);
    titleBlock(slide, ctx, s, 56, 70, 540);
    bullets(slide, ctx, s.bullets, 68, 342, 500);
  } else if (s.layout === "day") {
    await image(slide, ctx, s.image, 56, 54, 540, 402);
    titleBlock(slide, ctx, s, 660, 70, 500);
    bullets(slide, ctx, s.bullets, 672, 332, 470);
  } else if (s.layout === "imageRight") {
    titleBlock(slide, ctx, s, 56, 68, 540);
    bullets(slide, ctx, s.bullets, 70, 340, 520);
    await image(slide, ctx, s.image, 670, 86, 520, 370);
  } else if (s.layout === "timeline") {
    titleBlock(slide, ctx, s, 56, 54, 640);
    await image(slide, ctx, s.image, 740, 70, 390, 260);
    const stages = ["Setup", "Fundamentals", "Steering", "Planning", "Feedback", "AFK/HITL"];
    stages.forEach((stage, i) => {
      const x = 80 + i * 176;
      ctx.addShape(slide, { x, y: 414, w: 138, h: 72, fill: [C.green, C.blue, C.violet, C.coral, C.yellow, C.dark][i], line: ctx.line() });
      ctx.addText(slide, { text: stage, x: x + 8, y: 434, w: 122, h: 28, size: 16, bold: true, color: i === 4 ? C.ink : "#FFFFFF", align: "center" });
    });
  } else if (s.layout === "process") {
    titleBlock(slide, ctx, s, 56, 54, 1050);
    await image(slide, ctx, s.image, 70, 260, 520, 250);
    bullets(slide, ctx, s.bullets, 660, 260, 470);
  } else if (s.layout === "tasks") {
    titleBlock(slide, ctx, s, 56, 54, 550);
    await image(slide, ctx, s.image, 760, 78, 360, 260);
    s.bullets.forEach((item, i) => {
      const y = 300 + i * 58;
      ctx.addShape(slide, { x: 74, y, w: 700, h: 42, fill: "#FFFFFF", line: { style: "solid", fill: C.line, width: 1 } });
      ctx.addText(slide, { text: item, x: 94, y: y + 8, w: 660, h: 24, size: 19, color: C.ink });
    });
  } else if (s.layout === "capstone") {
    await image(slide, ctx, s.image, 56, 54, 520, 430);
    titleBlock(slide, ctx, s, 640, 70, 520);
    bullets(slide, ctx, s.bullets, 654, 344, 480);
  } else {
    titleBlock(slide, ctx, s, 56, 54, 540);
    await image(slide, ctx, s.image, 680, 70, 470, 300);
    bullets(slide, ctx, s.bullets, 70, 330, 540);
  }
  return slide;
}
`;

await fs.mkdir(assetDir, { recursive: true });
await fs.mkdir(slidesDir, { recursive: true });

for (const [file, title, subtitle, body, mode] of images) {
  const svg = svgFrame(title, subtitle, body, mode);
  await sharp(Buffer.from(svg)).png().toFile(path.join(assetDir, file));
}

for (let i = 0; i < slides.length; i += 1) {
  const n = String(i + 1).padStart(2, "0");
  const slide = slides[i];
  const mod = `${slideTemplate}
const s = ${JSON.stringify(slide, null, 2)};
export async function slide${n}(presentation, ctx) {
  return renderSlide(presentation, ctx, s);
}
`;
  await fs.writeFile(path.join(slidesDir, `slide-${n}.mjs`), mod, "utf8");
}

await fs.writeFile(path.join(__dirname, "deck-outline.json"), `${JSON.stringify(slides, null, 2)}\n`, "utf8");
console.log(`Generated ${images.length} images and ${slides.length} slide modules.`);
