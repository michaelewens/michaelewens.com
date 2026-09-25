// Build-time SEO and agent-readability outputs: per-route <head> tags, JSON-LD,
// sitemap.xml, robots.txt, llms.txt, and JSON copies of the site data.
import {
  papers,
  press,
  courses,
  projects,
  projectItems,
  sortPressByDate,
} from "../client/src/lib/data";

import { SITE, NAME, JOB_TITLE, BIO, ROUTES, type RouteMeta } from "../client/src/lib/routes";

export { SITE, ROUTES };

// Site-relative links (e.g. /attached_assets/...) become absolute, so records stay usable out of context.
const abs = (u: string) => (u.startsWith("/") ? `${SITE}${u}` : u);
const URL_FIELDS = new Set(["url", "pdfUrl", "codeUrl", "slidesUrl", "appendixUrl", "journalUrl", "syllabusUrl", "imageUrl"]);
const absolutize = <T extends object>(rows: T[]): T[] =>
  rows.map(
    (row) =>
      Object.fromEntries(
        Object.entries(row).map(([k, v]) => [k, URL_FIELDS.has(k) && typeof v === "string" ? abs(v) : v]),
      ) as T,
  );

const esc = (s: string) =>
  s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

const person = {
  "@type": "Person",
  "@id": `${SITE}/#person`,
  name: NAME,
  url: SITE,
  jobTitle: JOB_TITLE,
  worksFor: {
    "@type": "CollegeOrUniversity",
    name: "Columbia Business School",
    url: "https://business.columbia.edu",
  },
  image: `${SITE}/opengraph.jpg`,
  knowsAbout: ["Private equity", "Venture capital", "Entrepreneurial finance"],
  sameAs: [
    "https://business.columbia.edu/faculty/people/michael-ewens",
    "https://scholar.google.com/citations?user=5OqolPMAAAAJ",
    "https://www.linkedin.com/in/michaelewens/",
    "https://github.com/michaelewens",
    "https://x.com/startupecon",
  ],
};

function jsonLd(route: RouteMeta): object {
  const graph: object[] = [
    person,
    {
      "@type": "WebPage",
      "@id": `${SITE}${route.path}`,
      url: `${SITE}${route.path}`,
      name: route.title,
      description: route.description,
      about: { "@id": `${SITE}/#person` },
    },
  ];
  if (route.path === "/research") {
    graph.push({
      "@type": "ItemList",
      name: "Research papers by Michael Ewens",
      itemListElement: papers.map((p, i) => ({
        "@type": "ListItem",
        position: i + 1,
        item: {
          "@type": "ScholarlyArticle",
          headline: p.title,
          name: p.title,
          author: p.authors.map((a) => ({ "@type": "Person", name: a })),
          // Year only, and only for published work; no finer date is recorded.
          ...(p.status === "Published" ? { datePublished: String(p.year) } : {}),
          abstract: p.abstract,
          keywords: p.tags.join(", "),
          creativeWorkStatus: p.status,
          ...(p.pdfUrl ? { url: abs(p.pdfUrl) } : {}),
          // journalUrl is the article's publisher page, not the journal's.
          ...(p.journalUrl ? { sameAs: p.journalUrl } : {}),
          ...(p.journal ? { isPartOf: { "@type": "Periodical", name: p.journal } } : {}),
        },
      })),
    });
  }
  return { "@context": "https://schema.org", "@graph": graph };
}

// Rewrites the template <head> for one route.
export function applyHead(html: string, route: RouteMeta): string {
  const url = `${SITE}${route.path}`;
  const t = esc(route.title);
  const d = esc(route.description);
  let out = html
    .replace(/<title>[^<]*<\/title>/, `<title>${t}</title>`)
    .replace(/(<meta property="og:title" content=")[^"]*"/, `$1${t}"`)
    .replace(/(<meta name="twitter:title" content=")[^"]*"/, `$1${t}"`)
    .replace(/(<meta property="og:description" content=")[^"]*"/, `$1${d}"`)
    .replace(/(<meta name="twitter:description" content=")[^"]*"/, `$1${d}"`)
    .replace(/content="\/opengraph\.jpg"/g, `content="${SITE}/opengraph.jpg"`);
  const extra = [
    `<meta name="description" content="${d}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:url" content="${url}" />`,
    route.noindex ? `<meta name="robots" content="noindex, follow" />` : "",
    `<link rel="describedby" type="text/markdown" href="${SITE}/llms.txt" title="Site summary for AI agents" />`,
    `<script type="application/ld+json" data-path="${route.path}">${JSON.stringify(jsonLd(route)).replace(/</g, "\\u003c")}</script>`,
  ]
    .filter(Boolean)
    .join("\n    ");
  return out.replace("</head>", `    ${extra}\n  </head>`);
}

export function sitemapXml(): string {
  const urls = ROUTES.filter((r) => r.sitemap)
    .map((r) => `  <url><loc>${SITE}${r.path}</loc></url>`)
    .join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`;
}

export function robotsTxt(): string {
  return `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`;
}

export const DATA_FILES: Record<string, unknown> = {
  "papers.json": absolutize(papers),
  "press.json": absolutize(sortPressByDate(press)),
  "courses.json": absolutize(courses),
  "data-code.json": absolutize(projects),
  "projects.json": absolutize(projectItems),
};

function paperLine(p: (typeof papers)[number]): string {
  const venue = p.journal ? `${p.journal}` : p.status;
  const link = p.pdfUrl ? `[${p.title}](${abs(p.pdfUrl)})` : p.title;
  return `- ${link}: ${p.authors.join(", ")} (${p.year}). ${venue}.`;
}

export function llmsTxt(): string {
  const pages = ROUTES.filter((r) => r.sitemap)
    .map((r) => `- [${r.title.split(" | ")[0]}](${SITE}${r.path}): ${r.description}`)
    .join("\n");
  const data = Object.keys(DATA_FILES)
    .map((f) => `- [${f}](${SITE}/data/${f})`)
    .join("\n");
  const byStatus = (s: string) => papers.filter((p) => p.status === s).sort((a, b) => b.year - a.year);
  const section = (label: string, list: typeof papers) =>
    list.length ? `## ${label}\n\n${list.map(paperLine).join("\n")}\n` : "";
  return [
    `# ${NAME}`,
    "",
    `> ${BIO}`,
    "",
    "## Pages",
    "",
    pages,
    "",
    "## Structured data (JSON)",
    "",
    data,
    `- [CV (PDF)](${SITE}/ewens_cv.pdf)`,
    "",
    section("Forthcoming papers", byStatus("Forthcoming")),
    section("Working papers", byStatus("Working Paper")),
    section("Published", byStatus("Published")),
  ]
    .join("\n")
    .replace(/\n{3,}/g, "\n\n");
}
