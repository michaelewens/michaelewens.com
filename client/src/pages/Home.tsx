import Navigation from "@/components/Navigation";
import ResearchList from "@/components/ResearchList";
import { papers, projects, FEATURED_COUNT } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight, ExternalLink } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/abstract_geometric_financial_network_visualization.png";
import headshot from "@assets/generated_images/michael_ewens_headshot.png";

import wefiImage from "@assets/generated_images/abstract_finance_innovation_network.png";
import phdWorkshopImage from "@assets/generated_images/academic_workshop_abstract.png";
import afaImage from "@assets/generated_images/mentorship_and_guidance_abstract.png";

export default function Home() {
  const featuredPapers = papers.slice(0, FEATURED_COUNT);

  const initiatives = [
    {
      id: "wefi",
      title: "WEFI",
      description: "Workshop on Entrepreneurial Finance and Innovation.",
      image: wefiImage,
      link: "#"
    },
    {
      id: "phd-workshop",
      title: "Entrepreneurial finance PhD Workshop",
      description: "I teach the annual workshop for doctoral students in entrepreneurial finance.",
      image: phdWorkshopImage,
      link: "#"
    },
    {
      id: "afa-mentoring",
      title: "AFA Junior Faculty Mentoring",
      description: "I co-chair the junior faculty mentorship program run by the AFA.",
      image: afaImage,
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 px-6 border-b border-border overflow-hidden flex flex-col items-start text-left">
        <div className="container mx-auto max-w-5xl relative z-10 flex flex-col items-start gap-8">
          
          <div className="flex flex-row items-center gap-8 animate-in fade-in slide-in-from-bottom-4 duration-700">
             <div className="relative group shrink-0">
               <div className="absolute inset-0 bg-primary/10 rounded-full blur-sm transform translate-y-1 translate-x-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"></div>
               <img 
                src={headshot} 
                alt="Prof. Alex Sterling" 
                className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-background ring-1 ring-primary/20 grayscale group-hover:grayscale-0 transition-all duration-700 shadow-xl"
              />
            </div>
            
            <div className="space-y-2">
              <h1 className="font-heading text-5xl md:text-7xl font-bold tracking-tight text-foreground">
                Prof. Alex Sterling
              </h1>
              <p className="font-mono text-sm tracking-widest uppercase text-primary font-bold pl-1">
                Academic Portfolio
              </p>
            </div>
          </div>

          <div className="animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 w-full pl-2">
            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed font-light whitespace-nowrap">
              Research at the intersection of Asset Pricing, Market Microstructure, and Machine Learning.
            </p>
          </div>

          <div className="flex gap-4 pt-2 pl-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <Button asChild size="lg" className="rounded-none font-mono text-xs tracking-wider h-12 px-8 bg-foreground text-background hover:bg-primary shadow-lg hover:shadow-xl transition-all">
              <Link href="/research">
                VIEW RESEARCH <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            
            <Button asChild variant="outline" size="lg" className="rounded-none font-mono text-xs tracking-wider h-12 px-8 border-foreground/20 hover:bg-secondary">
              <Link href="/contact">
                CONTACT
              </Link>
            </Button>
          </div>
        </div>

        {/* Decorative background elements - Simplified */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/20 -skew-x-12 -z-0 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-primary/5 rounded-full blur-3xl -z-0 translate-y-1/4 -translate-x-1/4" />
      </section>

      {/* Latest Updates / News Ticker vibe */}
      <section className="border-b border-border bg-secondary/30 py-4 overflow-hidden group">
        <div className="container mx-auto px-6 flex items-center">
          <div className="shrink-0 z-20 pr-4 bg-secondary/30 relative">
            <span className="font-mono text-xs font-bold bg-primary text-primary-foreground px-2 py-1 shadow-sm">LATEST</span>
          </div>
          <div className="flex-1 overflow-hidden relative">
             <div className="flex items-center gap-8 animate-marquee whitespace-nowrap hover:[animation-play-state:paused]">
              <span className="font-mono text-sm text-muted-foreground inline-flex items-center">
                [Oct 2024] New working paper "The Microstructure of Decentralized Exchanges" is now available.
              </span>
              <span className="text-primary">•</span>
              <span className="font-mono text-sm text-muted-foreground inline-flex items-center">
                [Sep 2024] Presenting at NBER Asset Pricing meeting.
              </span>
              <span className="text-primary">•</span>
              <span className="font-mono text-sm text-muted-foreground inline-flex items-center">
                [Aug 2024] Accepted to Journal of Finance: "Asset Pricing in Information-Rich Markets".
              </span>
              <span className="text-primary">•</span>
              {/* Duplicate content for seamless loop */}
              <span className="font-mono text-sm text-muted-foreground inline-flex items-center">
                [Oct 2024] New working paper "The Microstructure of Decentralized Exchanges" is now available.
              </span>
              <span className="text-primary">•</span>
              <span className="font-mono text-sm text-muted-foreground inline-flex items-center">
                [Sep 2024] Presenting at NBER Asset Pricing meeting.
              </span>
              <span className="text-primary">•</span>
              <span className="font-mono text-sm text-muted-foreground inline-flex items-center">
                [Aug 2024] Accepted to Journal of Finance: "Asset Pricing in Information-Rich Markets".
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Research */}
      <section className="py-20 md:py-32 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="flex items-end justify-between mb-16 border-b border-border pb-4">
            <div>
              <h2 className="font-heading text-4xl font-bold mb-2">Selected Research</h2>
              <p className="text-muted-foreground">Recent publications and working papers.</p>
            </div>
            
            <Link href="/research" className="hidden md:flex items-center text-sm font-mono text-primary hover:text-foreground transition-colors group">
              VIEW ALL <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
          
          <ResearchList papers={featuredPapers} />
          
          <div className="mt-12 flex justify-center md:justify-start">
            <Button asChild variant="outline" size="lg" className="w-full md:w-auto rounded-none font-mono text-xs tracking-wider h-12 px-8 border-foreground/20 hover:bg-secondary">
              <Link href="/research">
                VIEW ALL RESEARCH
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="bg-secondary/5 py-20 border-t border-border">
        <div className="container mx-auto max-w-6xl px-6">
          <div className="grid md:grid-cols-3 gap-6">
            {initiatives.map((item) => (
              <div key={item.id} className="group relative h-64 overflow-hidden border border-border bg-background">
                {/* Background Image */}
                <div className="absolute inset-0">
                  <img 
                    src={item.image} 
                    alt={item.title} 
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
                  <Button asChild size="sm" className="rounded-none font-mono text-xs tracking-wider bg-foreground text-background hover:bg-primary transition-all">
                    <a href={item.link}>
                      LEARN MORE
                    </a>
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
              <h2 className="font-heading text-4xl font-bold mb-2">Data & Code</h2>
              <p className="text-muted-foreground">Open source tools and datasets.</p>
            </div>
            
            <Link href="/data-code" className="hidden md:flex items-center text-sm font-mono text-primary hover:text-foreground transition-colors group">
              VIEW ALL <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div 
                key={project.id} 
                className="group relative aspect-[4/3] overflow-hidden border border-border bg-background"
              >
                {/* Background Image with Overlay */}
                <div className="absolute inset-0">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125"
                  />
                  <div className="absolute inset-0 bg-background/90 transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
                </div>

                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div className="transform transition-transform duration-500 group-hover:-translate-y-1">
                    <span className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider mb-3">
                      {project.language}
                    </span>
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  <div className="pt-4 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                    <Button asChild variant="outline" size="sm" className="rounded-none gap-2 font-mono text-xs border-primary/20 hover:bg-primary hover:text-primary-foreground w-full">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
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
              <Link href="/data-code">View All Projects</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-16 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h4 className="font-heading text-2xl font-bold mb-3 tracking-wide">Alex Sterling</h4>
            <p className="font-mono text-sm text-background/60">© 2025. All rights reserved.</p>
          </div>
          <div className="flex gap-8 font-mono text-sm font-medium text-background/80">
            <a href="#" className="hover:text-primary hover:text-white transition-colors">TWITTER</a>
            <a href="#" className="hover:text-primary hover:text-white transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-primary hover:text-white transition-colors">SSRN</a>
            <a href="#" className="hover:text-primary hover:text-white transition-colors">GITHUB</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
