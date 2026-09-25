// Per-route metadata shared by the build (static <head>, sitemap, llms.txt)
// and the client (keeps <head> in sync on in-app navigation).
export const SITE = "https://michaelewens.com";
export const NAME = "Michael Ewens";
export const JOB_TITLE = "David L. and Elsie M. Dodd Professor of Finance";
export const BIO =
  "David L. and Elsie M. Dodd Professor of Finance at Columbia Business School and director of the school's Private Equity Program. Research on private equity, venture capital, and the financing of high-growth entrepreneurial firms.";

export interface RouteMeta {
  path: string;
  file: string; // output file under dist/public
  title: string;
  description: string;
  sitemap: boolean;
  noindex?: boolean;
}

export const ROUTES: RouteMeta[] = [
  {
    path: "/",
    file: "index.html",
    title: "Michael Ewens | Professor of Finance, Columbia Business School",
    description: `Michael Ewens is the ${BIO}`,
    sitemap: true,
  },
  {
    path: "/about",
    file: "about.html",
    title: "About | Michael Ewens",
    description: `Biography of Michael Ewens, ${JOB_TITLE} at Columbia Business School and director of the school's Private Equity Program.`,
    sitemap: true,
  },
  {
    path: "/research",
    file: "research.html",
    title: "Research | Michael Ewens",
    description:
      "Published articles, forthcoming papers, and working papers by Michael Ewens on private equity, venture capital, and entrepreneurship.",
    sitemap: true,
  },
  {
    path: "/data-code",
    file: "data-code.html",
    title: "Data & Code | Michael Ewens",
    description: "Data and code released with Michael Ewens's research papers.",
    sitemap: true,
  },
  {
    path: "/teaching",
    file: "teaching.html",
    title: "Teaching | Michael Ewens",
    description: "Courses taught by Michael Ewens, with links to syllabi.",
    sitemap: true,
  },
  {
    path: "/cv",
    file: "cv.html",
    title: "CV | Michael Ewens",
    description: "Curriculum vitae of Michael Ewens, Columbia Business School.",
    sitemap: true,
  },
  {
    path: "/projects",
    file: "projects.html",
    title: "Projects | Michael Ewens",
    description: "Ongoing projects, conferences, and programs.",
    sitemap: true,
  },
  {
    path: "/media",
    file: "media.html",
    title: "Media | Michael Ewens",
    description: "Press coverage and media mentions of Michael Ewens's research.",
    sitemap: true,
  },
  {
    path: "/contact",
    file: "contact.html",
    title: "Contact | Michael Ewens",
    description: "Contact information for Michael Ewens.",
    sitemap: true,
  },
  {
    path: "/search",
    file: "search.html",
    title: "Search | Michael Ewens",
    description: "Search Michael Ewens's research, press, and teaching.",
    sitemap: false,
    noindex: true,
  },
];
