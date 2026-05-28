import React from "react";
import {
  AbsoluteFill,
  Easing,
  interpolate,
  Sequence,
  useCurrentFrame,
  useVideoConfig,
} from "remotion";
import type { Chapter, CourseVideoData } from "./types";

type CourseVideoProps = {
  video: CourseVideoData;
};

const palette = {
  ink: "#171717",
  paper: "#f7f4ee",
  panel: "#fffdfa",
  line: "#242424",
  muted: "#686058",
  blue: "#265a8f",
  green: "#367053",
  red: "#9d3c38",
  yellow: "#d8aa3b",
};

const fitText = (text: string, max = 170) =>
  text.length > max ? `${text.slice(0, max - 1).trim()}...` : text;

const splitTitle = (title: string) => {
  const cleaned = title.replace(/^\d+\.\s*/, "");
  if (cleaned.length <= 48) return cleaned;
  const midpoint = Math.floor(cleaned.length / 2);
  const leftSpace = cleaned.lastIndexOf(" ", midpoint);
  const rightSpace = cleaned.indexOf(" ", midpoint);
  const splitAt = leftSpace > 20 ? leftSpace : rightSpace;
  return splitAt > 0
    ? `${cleaned.slice(0, splitAt)}\n${cleaned.slice(splitAt + 1)}`
    : cleaned;
};

const resolveActiveChapter = (chapters: Chapter[], frame: number) => {
  return (
    chapters.find(
      (chapter) => frame >= chapter.from && frame < chapter.from + chapter.duration,
    ) ?? chapters[chapters.length - 1]
  );
};

const useChapterProgress = (chapter: Chapter) => {
  const frame = useCurrentFrame();
  const localFrame = Math.max(0, frame - chapter.from);
  return {
    localFrame,
    progress: Math.min(1, localFrame / Math.max(1, chapter.duration)),
  };
};

const Intro = ({ video }: CourseVideoProps) => {
  const frame = useCurrentFrame();
  const { fps } = useVideoConfig();
  const opacity = interpolate(frame, [0, fps * 0.6], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const y = interpolate(frame, [0, fps], [36, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });

  return (
    <AbsoluteFill style={{ opacity, transform: `translateY(${y}px)` }}>
      <div style={styles.introLabel}>AI Coding Course</div>
      <h1 style={styles.introTitle}>{video.title}</h1>
      <p style={styles.introSubtitle}>{video.subtitle}</p>
      <div style={styles.chapterRail}>
        {video.chapters.map((chapter, index) => (
          <div key={chapter.title} style={styles.chapterRailItem}>
            <span style={styles.railNumber}>{String(index + 1).padStart(2, "0")}</span>
            <span>{chapter.title.replace(/^\d+\.\s*/, "")}</span>
          </div>
        ))}
      </div>
    </AbsoluteFill>
  );
};

const BeatPanel = ({ chapter }: { chapter: Chapter }) => {
  const { progress } = useChapterProgress(chapter);
  const beatIndex = Math.min(
    chapter.beats.length - 1,
    Math.floor(progress * Math.max(1, chapter.beats.length)),
  );
  const beat = chapter.beats[beatIndex] ?? chapter.recap;

  return (
    <div style={styles.beatPanel}>
      <div style={styles.panelKicker}>Presenter Script</div>
      <div style={styles.beatText}>{fitText(beat, 178)}</div>
    </div>
  );
};

const DemoPanel = ({ chapter }: { chapter: Chapter }) => (
  <div style={styles.demoPanel}>
    <div style={styles.panelKicker}>Demo Steps</div>
    <div style={styles.demoList}>
      {chapter.demoSteps.slice(0, 4).map((step, index) => (
        <div key={step} style={styles.demoRow}>
          <span style={styles.demoNumber}>{index + 1}</span>
          <span>{fitText(step, 96)}</span>
        </div>
      ))}
    </div>
  </div>
);

const ChapterScene = ({
  chapter,
  index,
  total,
  video,
}: {
  chapter: Chapter;
  index: number;
  total: number;
  video: CourseVideoData;
}) => {
  const { localFrame, progress } = useChapterProgress(chapter);
  const { fps } = useVideoConfig();
  const intro = interpolate(localFrame, [0, fps * 0.8], [0, 1], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const cardY = interpolate(localFrame, [0, fps], [42, 0], {
    extrapolateLeft: "clamp",
    extrapolateRight: "clamp",
    easing: Easing.bezier(0.16, 1, 0.3, 1),
  });
  const progressWidth = `${Math.round(progress * 100)}%`;

  return (
    <AbsoluteFill style={styles.scene}>
      <div style={styles.topBar}>
        <div style={styles.courseMark}>AI Coding Course</div>
        <div style={styles.sourceMark}>{video.sourceFile}</div>
      </div>

      <div style={styles.chapterMeta}>
        <span>Chapter {index + 1}</span>
        <span>{total} chapters</span>
        <span>{chapter.target}</span>
      </div>

      <div style={{ ...styles.heroBlock, opacity: intro, transform: `translateY(${cardY}px)` }}>
        <div style={styles.chapterNumber}>{String(index + 1).padStart(2, "0")}</div>
        <h2 style={styles.chapterTitle}>{splitTitle(chapter.title)}</h2>
        <p style={styles.onScreenText}>{fitText(chapter.onScreenText, 120)}</p>
      </div>

      <div style={styles.grid}>
        <BeatPanel chapter={chapter} />
        <div style={styles.directionPanel}>
          <div style={styles.panelKicker}>Screen Direction</div>
          <p style={styles.directionText}>{fitText(chapter.screenDirection, 170)}</p>
        </div>
        <DemoPanel chapter={chapter} />
        <div style={styles.exercisePanel}>
          <div style={styles.panelKicker}>Learner Action</div>
          <p style={styles.exerciseText}>{fitText(chapter.exercisePrompt, 150)}</p>
        </div>
      </div>

      <div style={styles.recapBar}>
        <span style={styles.recapLabel}>Recap</span>
        <span>{fitText(chapter.recap, 160)}</span>
      </div>

      <div style={styles.progressTrack}>
        <div style={{ ...styles.progressFill, width: progressWidth }} />
      </div>
    </AbsoluteFill>
  );
};

export const CourseVideo = ({ video }: CourseVideoProps) => {
  const introFrames = video.fps * 5;

  return (
    <AbsoluteFill style={styles.background}>
      <Sequence durationInFrames={introFrames}>
        <Intro video={video} />
      </Sequence>
      {video.chapters.map((chapter, index) => (
        <Sequence
          key={chapter.title}
          from={introFrames + chapter.from}
          durationInFrames={chapter.duration}
        >
          <ChapterScene
            chapter={{ ...chapter, from: 0 }}
            index={index}
            total={video.chapters.length}
            video={video}
          />
        </Sequence>
      ))}
    </AbsoluteFill>
  );
};

const styles: Record<string, React.CSSProperties> = {
  background: {
    background: palette.paper,
    color: palette.ink,
    fontFamily:
      'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  },
  introLabel: {
    position: "absolute",
    top: 118,
    left: 120,
    fontSize: 30,
    fontWeight: 800,
    color: palette.green,
    textTransform: "uppercase",
    letterSpacing: 0,
  },
  introTitle: {
    position: "absolute",
    left: 118,
    top: 176,
    width: 1260,
    margin: 0,
    fontSize: 88,
    lineHeight: 1.04,
    letterSpacing: 0,
    whiteSpace: "pre-line",
  },
  introSubtitle: {
    position: "absolute",
    left: 124,
    top: 392,
    width: 1050,
    margin: 0,
    color: palette.muted,
    fontSize: 34,
    lineHeight: 1.35,
  },
  chapterRail: {
    position: "absolute",
    left: 120,
    right: 120,
    bottom: 110,
    display: "grid",
    gridTemplateColumns: "repeat(4, 1fr)",
    gap: 14,
  },
  chapterRailItem: {
    minHeight: 86,
    borderTop: `4px solid ${palette.line}`,
    paddingTop: 16,
    fontSize: 25,
    lineHeight: 1.18,
    fontWeight: 700,
  },
  railNumber: {
    display: "block",
    marginBottom: 8,
    color: palette.red,
    fontSize: 20,
  },
  scene: {
    padding: "70px 96px 72px",
  },
  topBar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    fontSize: 24,
    fontWeight: 800,
  },
  courseMark: {
    color: palette.green,
    textTransform: "uppercase",
  },
  sourceMark: {
    color: palette.muted,
    fontWeight: 650,
  },
  chapterMeta: {
    marginTop: 32,
    display: "flex",
    gap: 18,
    color: palette.muted,
    fontSize: 22,
    fontWeight: 700,
  },
  heroBlock: {
    marginTop: 18,
    display: "grid",
    gridTemplateColumns: "140px 1fr",
    columnGap: 36,
    alignItems: "start",
  },
  chapterNumber: {
    height: 108,
    width: 108,
    border: `5px solid ${palette.line}`,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 44,
    fontWeight: 900,
    color: palette.red,
  },
  chapterTitle: {
    margin: 0,
    fontSize: 68,
    lineHeight: 1.03,
    whiteSpace: "pre-line",
    letterSpacing: 0,
  },
  onScreenText: {
    gridColumn: "2",
    margin: "20px 0 0",
    fontSize: 33,
    lineHeight: 1.25,
    color: palette.blue,
    fontWeight: 850,
  },
  grid: {
    marginTop: 44,
    display: "grid",
    gridTemplateColumns: "1.25fr 0.95fr",
    gridTemplateRows: "254px 254px",
    gap: 22,
  },
  beatPanel: {
    border: `4px solid ${palette.line}`,
    background: palette.panel,
    padding: 30,
  },
  panelKicker: {
    color: palette.red,
    fontSize: 20,
    fontWeight: 900,
    marginBottom: 18,
    textTransform: "uppercase",
  },
  beatText: {
    fontSize: 29,
    lineHeight: 1.18,
    fontWeight: 760,
  },
  directionPanel: {
    border: `4px solid ${palette.blue}`,
    background: "#edf4f7",
    padding: 30,
  },
  directionText: {
    margin: 0,
    fontSize: 28,
    lineHeight: 1.2,
    fontWeight: 720,
  },
  demoPanel: {
    border: `4px solid ${palette.green}`,
    background: "#eef5ef",
    padding: 30,
  },
  demoList: {
    display: "grid",
    gap: 12,
  },
  demoRow: {
    display: "grid",
    gridTemplateColumns: "40px 1fr",
    columnGap: 13,
    alignItems: "start",
    fontSize: 27,
    lineHeight: 1.22,
    fontWeight: 700,
  },
  demoNumber: {
    color: palette.green,
    fontWeight: 900,
  },
  exercisePanel: {
    border: `4px solid ${palette.yellow}`,
    background: "#fbf5df",
    padding: 30,
  },
  exerciseText: {
    margin: 0,
    fontSize: 29,
    lineHeight: 1.2,
    fontWeight: 760,
  },
  recapBar: {
    position: "absolute",
    left: 96,
    right: 96,
    bottom: 42,
    display: "flex",
    alignItems: "center",
    gap: 20,
    borderTop: `4px solid ${palette.line}`,
    paddingTop: 20,
    fontSize: 25,
    fontWeight: 760,
  },
  recapLabel: {
    color: palette.red,
    textTransform: "uppercase",
    fontWeight: 900,
  },
  progressTrack: {
    position: "absolute",
    left: 0,
    bottom: 0,
    height: 12,
    right: 0,
    background: "#ded7cb",
  },
  progressFill: {
    height: 12,
    background: palette.green,
  },
};
