import { Composition, Folder } from "remotion";
import { CourseVideo } from "./CourseVideo";
import data from "./video-data.json";
import type { CourseVideoData } from "./types";

const videos = data as CourseVideoData[];

export const RemotionRoot = () => {
  return (
    <Folder name="AI-Fundamentals">
      {videos.map((video) => (
        <Composition
          key={video.id}
          id={video.id}
          component={CourseVideo}
          durationInFrames={video.durationInFrames}
          fps={video.fps}
          width={video.width}
          height={video.height}
          defaultProps={{ video }}
        />
      ))}
    </Folder>
  );
};
