import { useState } from "react";
import ResearchList from "@/components/ResearchList";
import { papers, projects, FEATURED_COUNT } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import headshot from "@assets/optimized/michael_ewens_headshot.webp";

import wefiImage from "@assets/optimized/wefi.webp";
import wefiImageMd from "@assets/optimized/wefi_md.webp";
import wefiImageSm from "@assets/optimized/wefi_sm.webp";
import phdWorkshopImage from "@assets/optimized/academic_workshop_abstract.webp";
import phdWorkshopImageMd from "@assets/optimized/academic_workshop_abstract_md.webp";
import phdWorkshopImageSm from "@assets/optimized/academic_workshop_abstract_sm.webp";
import foundingPatentsImage from "@assets/optimized/founding_patents.webp";
import foundingPatentsImageMd from "@assets/optimized/founding_patents_md.webp";
import foundingPatentsImageSm from "@assets/optimized/founding_patents_sm.webp";
import headshotMd from "@assets/optimized/michael_ewens_headshot_md.webp";
import headshotSm from "@assets/optimized/michael_ewens_headshot_sm.webp";

export default function Home() {
  const featuredPapers = papers.slice(0, FEATURED_COUNT);
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const allTags = Array.from(new Set(projects.flatMap((p) => p.language))).sort();
  const filteredProjects = activeTag
    ? projects.filter((p) => p.language.includes(activeTag))
    : projects;

  const updates = [
    {
      id: "u7",
      text: "[July 2026] Guest on the Improving Alpha podcast (Vidrio) discussing the public-private markets debate and its impact on allocators",
      url: "https://www.vidrio.com/blog/improving-alpha-the-public-private-debate-its-impact-on-allocators"
    },
    {
      id: "u6",
      text: "[May 2026] The Regulatory Costs of Being Public cited in SEC proposed rule on Semiannual Reporting (Release No. 33-11414)",
      url: "https://www.sec.gov/files/rules/proposed/2026/33-11414.pdf"
    },
    {
      id: "u5",
      text: "[May 2026] Quoted in MarketWatch on Google's SpaceX and Anthropic stakes",
      url: "https://www.marketwatch.com/story/google-is-now-a-glorified-venture-capital-fund-thanks-to-its-spacex-and-anthropic-stakes-b13f3d56"
    },
    {
      id: "u4",
      text: "[Feb 2026] What the Data Reveals About Startup Boards and Private Equity (Boardroom Governance with Evan Epstein)",
      url: "https://podcasts.apple.com/us/podcast/michael-ewens-columbia-business-school-what-the-data/id1513064579?i=1000747864227"
    }
  ];

  const initiatives = [
    {
      id: "proj11",
      title: "Founding Patents",
      description: "Explore startup innovation through a unique connection between firm formation and patent data.",
      image: foundingPatentsImage,
      imageMd: foundingPatentsImageMd,
      imageSm: foundingPatentsImageSm,
      link: "https://foundingpatents.com/",
    },
    {
      id: "wefi",
      title: "WEFI",
      description:
        "I co-organize the online seminar, Workshop on Entrepreneurial Finance and Innovation.",
      image: wefiImage,
      imageMd: wefiImageMd,
      imageSm: wefiImageSm,
      link: "https://workshop-efi.com/",
    },
    {
      id: "phd-workshop",
      title: "Entrepreneurial Finance PhD Workshop",
      description: "PhD workshop in entrepreneurial finance.",
      image: phdWorkshopImage,
      imageMd: phdWorkshopImageMd,
      imageSm: phdWorkshopImageSm,
      link: "https://entrepreneurial.finance/summer-phd-workshop/",
    },
  ];

  return (
    <>
      <title>Michael Ewens | Professor of Finance, Columbia Business School</title>
      <main className="min-h-screen bg-background font-sans selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 border-b border-border overflow-hidden flex flex-col items-start text-left">
        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-start gap-8">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="relative group shrink-0 mx-auto md:mx-0">
              <div className="absolute inset-0 bg-primary/10 rounded-full blur-sm transform translate-y-1 translate-x-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"></div>
              <img
                src={headshotSm}
                srcSet={`${headshotSm} 320w, ${headshotMd} 480w, ${headshot} 966w`}
                sizes="(max-width: 768px) 128px, 160px"
                alt="Prof. Michael Ewens"
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background ring-1 ring-primary/20 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl"
              />
            </div>

            <div className="space-y-2">
              <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                Michael Ewens
              </h1>
              <p className="font-mono text-sm tracking-widest uppercase text-primary font-bold pl-1">
                David L. and Elsie M. Dodd Professor of Finance, Columbia Business School
              </p>
            </div>
          </div>

          <div className="w-full pl-2">
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed font-light">
              Researching Private Equity, Venture Capital, and Entrepreneurial Finance.
            </p>
          </div>

          <div className="flex gap-4 pt-2 pl-2">
            <Button
              asChild
              size="lg"
              className="rounded-none font-mono text-xs tracking-wider h-12 px-8 bg-foreground text-background hover:bg-primary shadow-lg hover:shadow-xl transition-all"
            >
              <Link href="/research">
                VIEW RESEARCH <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-none font-mono text-xs tracking-wider h-12 px-8 border-foreground/20 hover:bg-secondary"
            >
              <Link href="/contact">CONTACT</Link>
            </Button>
          </div>
        </div>

        {/* Decorative background elements - Simplified */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/20 -skew-x-12 -z-0 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-3xl -z-0 translate-y-1/4 -translate-x-1/4" />
      </section>

      {/* Latest Updates */}
      <section className="border-b border-border bg-secondary/30 py-4">
        <div className="container mx-auto px-6">
          <div className="flex items-start gap-4">
            <span className="shrink-0 font-mono text-xs font-bold bg-primary text-primary-foreground px-2 py-1 shadow-sm mt-0.5">
              LATEST
            </span>
            <ul className="flex flex-wrap items-center gap-x-6 gap-y-1" role="list">
              {updates.map((update, i) => (
                <li key={update.id} className="flex items-center gap-x-6">
                  <a
                    href={update.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-mono text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {update.text}
                  </a>
                  {i < updates.length - 1 && (
                    <span className="text-border hidden sm:inline" aria-hidden="true">|</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-end justify-between mb-16 border-b border-border pb-4">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-2">
                Selected Research
              </h2>
              <p className="text-muted-foreground">
                Recent publications and working papers.
              </p>
            </div>

            <Link
              href="/research"
              className="hidden md:flex items-center text-sm font-mono text-primary hover:text-foreground transition-colors group"
            >
              VIEW ALL{" "}
              <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <ResearchList papers={featuredPapers} />

          <div className="mt-12 flex justify-center md:justify-start">
            <Button
              asChild
              variant="outline"
              size="lg"
              className="w-full md:w-auto rounded-none font-mono text-xs tracking-wider h-12 px-8 border-foreground/20 hover:bg-secondary"
            >
              <Link href="/research">VIEW ALL</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="bg-secondary/5 py-20 border-t border-border">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-16 border-b border-border pb-4">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-2">
                Projects
              </h2>
              <p className="text-muted-foreground">
                Ongoing initiatives supporting PhD students and junior faculty.
              </p>
            </div>

            <Link
              href="/projects"
              className="hidden md:flex items-center text-sm font-mono text-primary hover:text-foreground transition-colors group"
            >
              VIEW ALL{" "}
              <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {initiatives.map((item) => (
              <div
                key={item.id}
                className="group relative h-64 overflow-hidden border border-border bg-background"
              >
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img
                    src={item.imageSm}
                    srcSet={`${item.imageSm} 640w, ${item.imageMd} 800w, ${item.image} 1024w`}
                    sizes="(max-width: 767px) calc(100vw - 3rem), (max-width: 1151px) calc((100vw - 6rem) / 3), 352px"
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125 opacity-40 group-hover:opacity-30"
                  />
                  <div className="absolute inset-0 bg-background/80 transition-opacity duration-500 group-hover:opacity-70" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-center items-center p-6 text-center z-10">
                  <h3 className="font-heading text-3xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground mb-6 max-w-xs">
                    {item.description}
                  </p>
                  <Button
                    asChild
                    size="sm"
                    className="rounded-none font-mono text-xs tracking-wider bg-foreground text-background hover:bg-primary transition-all"
                  >
                    <a href={item.link}>LEARN MORE</a>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data & Code Section */}
      <section className="bg-secondary/10 py-20 md:py-32 border-t border-border">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="flex items-end justify-between mb-16 border-b border-border pb-4">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-2">
                Data & Code
              </h2>
              <p className="text-muted-foreground">
                Open source tools and datasets.
              </p>
            </div>

            <Link
              href="/data-code"
              className="hidden md:flex items-center text-sm font-mono text-primary hover:text-foreground transition-colors group"
            >
              VIEW ALL{" "}
              <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="flex flex-wrap gap-2 mb-8">
            <button
              onClick={() => setActiveTag(null)}
              className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border transition-colors ${
                activeTag === null
                  ? "bg-foreground text-background border-foreground"
                  : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
              }`}
            >
              All
            </button>
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setActiveTag(activeTag === tag ? null : tag)}
                className={`px-3 py-1.5 text-xs font-mono font-bold uppercase tracking-wider border transition-colors ${
                  activeTag === tag
                    ? "bg-foreground text-background border-foreground"
                    : "bg-transparent text-muted-foreground border-border hover:border-foreground hover:text-foreground"
                }`}
              >
                {tag}
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group relative aspect-[4/3] overflow-hidden border border-border bg-background"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-background/90 transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.language.map((lang) => (
                        <span key={lang} className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider">
                          {lang}
                        </span>
                      ))}
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <Button
                      asChild
                      variant="outline"
                      size="sm"
                      className="rounded-none gap-2 font-mono text-xs border-primary/20 hover:bg-primary hover:text-primary-foreground w-full"
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        VIEW PROJECT <ExternalLink className="h-3 w-3" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 md:hidden">
            <Button asChild variant="outline" className="w-full rounded-none">
              <Link href="/data-code">VIEW ALL</Link>
            </Button>
          </div>
        </div>
      </section>

    </main>
    </>
  );
}
