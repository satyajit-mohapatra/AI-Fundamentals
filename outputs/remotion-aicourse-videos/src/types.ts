export type Chapter = {
  title: string;
  target: string;
  onScreenText: string;
  screenDirection: string;
  demoSteps: string[];
  exercisePrompt: string;
  recap: string;
  beats: string[];
  from: number;
  duration: number;
};

export type CourseVideoData = {
  id: string;
  title: string;
  subtitle: string;
  sourceFile: string;
  fps: number;
  width: number;
  height: number;
  durationInFrames: number;
  chapters: Chapter[];
};
