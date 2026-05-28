const C = {
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

const s = {
  "title": "07 - Day 5 AFK Agents",
  "kicker": "Available June 8",
  "claim": "AFK work is safe only when the task envelope is stronger than the agent's improvisation.",
  "bullets": [
    "Sandcastle and sandboxing reduce blast radius",
    "Backlogs queue agent-ready tasks",
    "GitHub Issues make work traceable"
  ],
  "image": "afk.png",
  "layout": "day"
};
export async function slide18(presentation, ctx) {
  return renderSlide(presentation, ctx, s);
}
