import { spawn } from "node:child_process";
import { mkdir, readFile } from "node:fs/promises";
import path from "node:path";

const projectRoot = path.resolve(import.meta.dirname, "..");
const outDir = path.join(projectRoot, "out");
const dataPath = path.join(projectRoot, "src", "video-data.json");
const remotionBin = path.join(projectRoot, "node_modules", ".bin", "remotion");

const videos = JSON.parse(await readFile(dataPath, "utf8"));
await mkdir(outDir, { recursive: true });

const run = (args) =>
  new Promise((resolve, reject) => {
    const child = spawn(remotionBin, args, {
      cwd: projectRoot,
      stdio: "inherit",
    });

    child.on("error", reject);
    child.on("exit", (code) => {
      if (code === 0) {
        resolve();
      } else {
        reject(new Error(`remotion exited with code ${code}`));
      }
    });
  });

for (const video of videos) {
  const output = path.join(outDir, `${video.id}.mp4`);
  console.log(`\nRendering ${video.id} -> ${path.relative(projectRoot, output)}`);
  await run([
    "render",
    "src/index.ts",
    video.id,
    output,
    "--codec=h264",
    "--pixel-format=yuv420p",
    "--concurrency=2",
    "--log=warn",
  ]);
}

console.log(`\nRendered ${videos.length} videos to ${path.relative(projectRoot, outDir)}.`);
