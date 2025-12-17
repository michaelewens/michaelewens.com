import Navigation from "@/components/Navigation";
import ResearchList from "@/components/ResearchList";
import { papers } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ArrowRight, MoveRight } from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/abstract_geometric_financial_network_visualization.png";
import headshot from "@assets/generated_images/professional_academic_headshot_of_economics_professor.png";

export default function Home() {
  const featuredPapers = papers.slice(0, 2);

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 border-b border-border overflow-hidden">
        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-5 border-b border-primary/20 pb-6 w-fit animate-in fade-in slide-in-from-bottom-4 duration-700">
                <div className="relative group">
                  <div className="absolute inset-0 bg-primary/10 rounded-full blur-sm transform translate-y-1 translate-x-1 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform"></div>
                  <img 
                    src={headshot} 
                    alt="Prof. Alex Sterling" 
                    className="relative w-20 h-20 rounded-full object-cover border-2 border-background ring-1 ring-primary/20 grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-heading text-xl font-bold">Prof. Alex Sterling</h3>
                  <span className="font-mono text-xs tracking-widest uppercase text-primary font-bold">
                    Academic Portfolio
                  </span>
                </div>
              </div>
              
              <h1 className="font-heading text-5xl md:text-7xl font-bold leading-[1.1] tracking-tight text-foreground">
                Deciphering <br/>
                <span className="text-muted-foreground italic">Market Signals</span> <br/>
                in Noise.
              </h1>
              
              <p className="text-xl text-muted-foreground max-w-md leading-relaxed">
                Research at the intersection of Asset Pricing, Market Microstructure, and Machine Learning.
              </p>

              <div className="flex gap-4 pt-4">
                <Button asChild size="lg" className="rounded-none font-mono text-xs tracking-wider h-12 px-8 bg-foreground text-background hover:bg-primary">
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

            <div className="relative aspect-square md:aspect-[4/5] bg-secondary/30 border border-border p-4 hidden md:block rotate-3 hover:rotate-0 transition-transform duration-700">
               <img 
                src={heroImage} 
                alt="Abstract Financial Visualization" 
                className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700 contrast-125"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/10 backdrop-blur-sm border border-primary/20 p-4 flex items-center justify-center">
                <div className="font-mono text-xs text-primary text-center">
                  DATA <br/> DRIVEN <br/> INSIGHTS
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-secondary/20 -skew-x-12 -z-0 translate-x-1/4" />
      </section>

      {/* Latest Updates / News Ticker vibe */}
      <section className="border-b border-border bg-secondary/30 py-4 overflow-hidden relative group">
        <div className="container mx-auto px-6 flex items-center gap-4 absolute inset-0 z-20 pointer-events-none">
          <span className="font-mono text-xs font-bold bg-primary text-primary-foreground px-2 py-1 shrink-0 pointer-events-auto">LATEST</span>
        </div>
        <div className="flex items-center gap-8 animate-marquee whitespace-nowrap min-w-full pl-32 hover:[animation-play-state:paused]">
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
          
          <div className="mt-12 md:hidden">
            <Button asChild variant="outline" className="w-full rounded-none">
              <Link href="/research">View All Research</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-12 px-6">
        <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-center md:text-left">
            <h4 className="font-heading text-xl font-bold mb-2">Alex Sterling</h4>
            <p className="font-mono text-xs text-muted-foreground/60">© 2025. All rights reserved.</p>
          </div>
          <div className="flex gap-6 font-mono text-xs text-muted-foreground/80">
            <a href="#" className="hover:text-primary transition-colors">TWITTER</a>
            <a href="#" className="hover:text-primary transition-colors">LINKEDIN</a>
            <a href="#" className="hover:text-primary transition-colors">SSRN</a>
            <a href="#" className="hover:text-primary transition-colors">GITHUB</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
