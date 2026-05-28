const catalog = window.AI_FUNDAMENTALS_CATALOG || [];
const totalDocs = catalog.reduce((sum, section) => sum + section.items.length, 0);

const summary = document.getElementById("library-summary");
const root = document.getElementById("library-root");

if (summary) {
  summary.textContent = `${totalDocs} published documents across ${catalog.length} collections.`;
}

if (root) {
  root.innerHTML = catalog
    .map(
      (section) => `
        <section class="panel content-panel section-stack" id="${section.id}">
          <div class="section-heading">
            <div>
              <p class="eyebrow">${section.title}</p>
              <h2>${section.title}</h2>
            </div>
            <p>${section.description}</p>
          </div>
          <div class="library-grid">
            ${section.items
              .map(
                (item) => `
                  <a class="library-card" href="reader.html?path=${encodeURIComponent(item.path)}">
                    <span class="card-kicker">${item.kind}</span>
                    <h3>${item.title}</h3>
                    <p>${item.blurb}</p>
                    <span class="library-link">Open document</span>
                  </a>
                `
              )
              .join("")}
          </div>
        </section>
      `
    )
    .join("");
}
