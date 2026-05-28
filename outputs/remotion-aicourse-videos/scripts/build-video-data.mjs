import { readdir, readFile, writeFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const workspaceRoot = path.resolve(projectRoot, "..", "..");
const sourceDir = path.join(workspaceRoot, "course", "video-scripts");
const outputPath = path.join(projectRoot, "src", "video-data.json");

const fps = 12;
const width = 1920;
const height = 1080;
const introSeconds = 5;

const stripMarkdown = (value = "") =>
  value
    .replace(/`([^`]+)`/g, "$1")
    .replace(/\*\*([^*]+)\*\*/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/^[-*]\s+/, "")
    .replace(/^["“”]+|["“”]+$/g, "")
    .replace(/\s+/g, " ")
    .trim();

const slugify = (value) =>
  value
    .toLowerCase()
    .replace(/\.md$/, "")
    .replace(/-script$/, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

const getInlineField = (body, label) => {
  const match = body.match(new RegExp(`\\*\\*${label}:\\*\\*\\s*([^\\n]+)`, "i"));
  return stripMarkdown(match?.[1] ?? "");
};

const getBlock = (body, label) => {
  const match = body.match(
    new RegExp(`\\*\\*${label}:\\*\\*\\s*\\n+([\\s\\S]*?)(?=\\n\\*\\*[^\\n]+:\\*\\*|\\n##\\s|$)`, "i"),
  );
  return match?.[1] ?? "";
};

const getPresenterBeats = (body) => {
  const block = getBlock(body, "Presenter script");
  const beats = block
    .split("\n")
    .filter((line) => line.trim().startsWith("-"))
    .map((line) =>
      stripMarkdown(
        line
          .replace(/^-\s*/, "")
          .replace(/^\*\*[^*]+:\*\*\s*/, "")
          .replace(/^[^:]{1,80}:\s*/, ""),
      ),
    )
    .filter(Boolean);

  return beats.length > 0 ? beats.slice(0, 5) : ["Use this chapter to move from concept to concrete practice."];
};

const getDemoSteps = (body) => {
  const block = getBlock(body, "Demo steps");
  const steps = block
    .split("\n")
    .filter((line) => /^\s*\d+\.\s+/.test(line))
    .map((line) => stripMarkdown(line.replace(/^\s*\d+\.\s+/, "")))
    .filter(Boolean);

  return steps.length > 0 ? steps : ["Show the concept", "Connect it to the course workflow", "End with the learner action"];
};

const getSections = (markdown) => {
  const matches = [...markdown.matchAll(/^##\s+(.+)$/gm)];
  return matches.map((match, index) => {
    const start = match.index + match[0].length;
    const end = matches[index + 1]?.index ?? markdown.length;
    return {
      title: stripMarkdown(match[1]),
      body: markdown.slice(start, end).trim(),
    };
  });
};

const getVideoTitle = (markdown, file) => {
  const h1 = markdown.match(/^#\s+(.+)$/m)?.[1];
  return stripMarkdown(h1 ?? file.replace(/-script\.md$/, ""));
};

const getSubtitle = (markdown) => {
  const availability = markdown.match(/^Available from\s+(.+)$/m)?.[1];
  return availability ? `Script-driven draft video. Available from ${availability}.` : "Script-driven draft video.";
};

const secondsForChapter = (beats, demoSteps) => {
  const seconds = 26 + beats.length * 8 + Math.min(4, demoSteps.length) * 3;
  return Math.max(42, Math.min(70, seconds));
};

const buildChapter = (section, offsetFrames) => {
  const beats = getPresenterBeats(section.body);
  const demoSteps = getDemoSteps(section.body);
  const seconds = secondsForChapter(beats, demoSteps);
  const duration = seconds * fps;

  return {
    title: section.title,
    target: getInlineField(section.body, "Recording target") || "Scripted course lesson",
    onScreenText: getInlineField(section.body, "On-screen text") || section.title,
    screenDirection: getInlineField(section.body, "Screen direction") || "Show the lesson concept, then move into the concrete workflow.",
    demoSteps,
    exercisePrompt: getInlineField(section.body, "Exercise prompt") || "Pause and apply this chapter to your own repo or course journal.",
    recap: getInlineField(section.body, "Closing recap") || "Capture the takeaway before moving to the next chapter.",
    beats,
    from: offsetFrames,
    duration,
  };
};

const buildVideo = async (file) => {
  const markdown = await readFile(path.join(sourceDir, file), "utf8");
  const sections = getSections(markdown);
  let offsetFrames = 0;
  const chapters = sections.map((section) => {
    const chapter = buildChapter(section, offsetFrames);
    offsetFrames += chapter.duration;
    return chapter;
  });

  return {
    id: slugify(file),
    title: getVideoTitle(markdown, file),
    subtitle: getSubtitle(markdown),
    sourceFile: file,
    fps,
    width,
    height,
    durationInFrames: introSeconds * fps + offsetFrames,
    chapters,
  };
};

const files = (await readdir(sourceDir))
  .filter((file) => file.endsWith("-script.md"))
  .sort();

const videos = await Promise.all(files.map(buildVideo));
await writeFile(outputPath, `${JSON.stringify(videos, null, 2)}\n`);

console.log(`Wrote ${videos.length} Remotion video definitions to ${path.relative(projectRoot, outputPath)}.`);
for (const video of videos) {
  const seconds = Math.round(video.durationInFrames / video.fps);
  console.log(`- ${video.id}: ${video.chapters.length} chapters, ${seconds}s`);
}
