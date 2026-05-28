const catalogSections = window.AI_FUNDAMENTALS_CATALOG || [];
const catalogItems = catalogSections.flatMap((section) =>
  section.items.map((item) => ({ ...item, sectionId: section.id, sectionTitle: section.title }))
);

const defaultPath = "content/README.md";
const params = new URLSearchParams(window.location.search);
const requestedPath = decodeURIComponent(params.get("path") || defaultPath).replace(/^\/+/, "");
const path = requestedPath.startsWith("content/") ? requestedPath : defaultPath;
const entry = catalogItems.find((item) => item.path === path);

const titleNode = document.getElementById("doc-title");
const kickerNode = document.getElementById("doc-kicker");
const summaryNode = document.getElementById("doc-summary");
const metaNode = document.getElementById("doc-meta");
const tocNode = document.getElementById("toc");
const bodyNode = document.getElementById("article-body");
const sourceNode = document.getElementById("source-link");
const prevNode = document.getElementById("prev-doc");
const nextNode = document.getElementById("next-doc");

function slugify(text) {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function toSourcePath(contentPath) {
  if (contentPath.startsWith("content/course/")) {
    return contentPath.replace(/^content\//, "");
  }

  if (contentPath === "content/README.md") {
    return "README.md";
  }

  return `docs/${contentPath}`;
}

function rewriteContentLinks(basePath) {
  const baseUrl = new URL(basePath, window.location.href);

  bodyNode.querySelectorAll('a[href]').forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("http://") || href.startsWith("https://") || href.startsWith("#")) {
      return;
    }

    if (href.endsWith(".md")) {
      const resolved = new URL(href, baseUrl);
      const resolvedPath = resolved.pathname.replace(/^\//, "");
      link.setAttribute("href", `reader.html?path=${encodeURIComponent(resolvedPath)}`);
      return;
    }

    const resolved = new URL(href, baseUrl);
    link.setAttribute("href", resolved.pathname.replace(/^\//, ""));
  });
}

function buildToc() {
  const headings = Array.from(bodyNode.querySelectorAll("h1, h2, h3"));
  if (headings.length === 0) {
    tocNode.innerHTML = '<p class="muted-note">No headings found in this document.</p>';
    return;
  }

  headings.forEach((heading, index) => {
    const text = heading.textContent.trim();
    heading.id = heading.id || `${slugify(text) || "section"}-${index + 1}`;
  });

  tocNode.innerHTML = headings
    .map(
      (heading) => `
        <a class="toc-link toc-${heading.tagName.toLowerCase()}" href="#${heading.id}">
          ${heading.textContent}
        </a>
      `
    )
    .join("");
}

function renderPager() {
  const currentIndex = catalogItems.findIndex((item) => item.path === path);
  const prev = currentIndex > 0 ? catalogItems[currentIndex - 1] : null;
  const next = currentIndex >= 0 && currentIndex < catalogItems.length - 1 ? catalogItems[currentIndex + 1] : null;

  if (prev) {
    prevNode.href = `reader.html?path=${encodeURIComponent(prev.path)}`;
    prevNode.textContent = `Previous: ${prev.title}`;
  } else {
    prevNode.removeAttribute("href");
    prevNode.textContent = "Previous: none";
    prevNode.classList.add("disabled-link");
  }

  if (next) {
    nextNode.href = `reader.html?path=${encodeURIComponent(next.path)}`;
    nextNode.textContent = `Next: ${next.title}`;
  } else {
    nextNode.removeAttribute("href");
    nextNode.textContent = "Next: none";
    nextNode.classList.add("disabled-link");
  }
}

async function renderDocument() {
  const activeEntry = entry || {
    title: path.split("/").pop(),
    kind: "Document",
    blurb: "Published markdown content from the repository.",
    sectionTitle: "Published Content"
  };

  document.title = `${activeEntry.title} | AI Fundamentals`;
  titleNode.textContent = activeEntry.title;
  kickerNode.textContent = activeEntry.kind;
  summaryNode.textContent = activeEntry.blurb;
  metaNode.textContent = `${activeEntry.sectionTitle} • ${path}`;
  sourceNode.href = `https://github.com/satyajit-mohapatra/AI-Fundamentals/blob/main/${toSourcePath(path)}`;

  try {
    const response = await fetch(path);
    if (!response.ok) {
      throw new Error(`Failed to load ${path}`);
    }

    const markdown = await response.text();
    const html = window.marked.parse(markdown, {
      breaks: false,
      gfm: true,
      headerIds: false,
      mangle: false
    });

    bodyNode.innerHTML = window.DOMPurify ? window.DOMPurify.sanitize(html) : html;
    rewriteContentLinks(path);
    buildToc();
    renderPager();
  } catch (error) {
    bodyNode.innerHTML = `
      <div class="callout">
        Could not load <code>${path}</code>. Open the <a href="library.html">library</a> and pick another document.
      </div>
    `;
    tocNode.innerHTML = "";
  }
}

renderDocument();
