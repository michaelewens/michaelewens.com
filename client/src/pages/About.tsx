import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, Award, BookOpen, GraduationCap, Newspaper, ArrowUpRight } from "lucide-react";
import headshot from "@assets/generated_images/professional_academic_headshot_of_economics_professor.png";
import { Link } from "wouter";
import { press } from "@/lib/data";

export default function About() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navigation />

      <main className="pt-32 pb-20 px-6 container mx-auto max-w-5xl">
        <div className="grid md:grid-cols-[1fr_2fr] gap-12 items-start">
          {/* Sidebar / Photo Column */}
          <div className="space-y-8 sticky top-32">
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 rounded-sm transform translate-y-2 translate-x-2 -z-10"></div>
              <img 
                src={headshot} 
                alt="Prof. Alex Sterling" 
                className="w-full aspect-[3/4] object-cover rounded-sm border border-border shadow-sm grayscale group-hover:grayscale-0 transition-all duration-700"
              />
            </div>

            <div className="space-y-4">
              <Button asChild className="w-full rounded-none font-mono uppercase tracking-wider gap-2">
                <Link href="/contact">
                  <Mail className="h-4 w-4" /> Contact Me
                </Link>
              </Button>
              <Button asChild variant="outline" className="w-full rounded-none font-mono uppercase tracking-wider gap-2">
                <Link href="/cv">
                  <Download className="h-4 w-4" /> Download CV
                </Link>
              </Button>
            </div>

            <div className="space-y-4 text-sm text-muted-foreground font-mono border-t border-border pt-6">
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                <p>
                  Room 402, Social Sciences Bldg<br />
                  University of Economics<br />
                  Cambridge, MA 02138
                </p>
              </div>
            </div>
          </div>

          {/* Main Content Column */}
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            <div>
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6 text-foreground">About Me</h1>
              <div className="prose prose-lg text-muted-foreground leading-relaxed max-w-none">
                <p className="text-xl text-foreground font-light mb-6">
                  I am an Assistant Professor of Finance at the University of Economics. My research focuses on Asset Pricing, Market Microstructure, and the application of Machine Learning in Finance.
                </p>
                <p className="mb-4">
                  In my work, I combine economic theory with novel data sources and computational methods to understand how information is incorporated into asset prices. I am particularly interested in the role of unstructured data—such as news text and earnings calls—in financial markets.
                </p>
                <p>
                  Prior to joining the University of Economics, I completed my Ph.D. at Top Tier University, where my dissertation on High-Frequency Trading was awarded the Best Thesis Prize. I hold a B.S. in Mathematics and Economics from State University.
                </p>
              </div>
            </div>

            {/* Research Interests */}
            <div className="border-t border-border pt-10">
              <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
                <BookOpen className="h-6 w-6 text-primary" /> Research Interests
              </h2>
              <ul className="grid sm:grid-cols-2 gap-4">
                {[
                  "Asset Pricing",
                  "Market Microstructure",
                  "Machine Learning in Finance",
                  "Natural Language Processing",
                  "Fintech & DeFi",
                  "Macro-Finance"
                ].map((interest) => (
                  <li key={interest} className="flex items-center gap-2 text-muted-foreground">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/60" />
                    {interest}
                  </li>
                ))}
              </ul>
            </div>

            {/* Education Short */}
            <div className="border-t border-border pt-10">
              <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
                <GraduationCap className="h-6 w-6 text-primary" /> Education
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Ph.D. in Financial Economics</h3>
                    <p className="text-muted-foreground">Top Tier University</p>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">2022</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">B.S. in Mathematics and Economics</h3>
                    <p className="text-muted-foreground">State University</p>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">2017</span>
                </div>
              </div>
            </div>

            {/* Awards Short */}
            <div className="border-t border-border pt-10">
              <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
                <Award className="h-6 w-6 text-primary" /> Selected Awards
              </h2>
              <div className="space-y-4">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <p className="text-foreground font-medium">AFA Best Paper Award (Finalist)</p>
                  <span className="font-mono text-sm text-muted-foreground">2024</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <p className="text-foreground font-medium">NSF Graduate Research Fellowship</p>
                  <span className="font-mono text-sm text-muted-foreground">2019 - 2022</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <p className="text-foreground font-medium">University Graduate Fellowship</p>
                  <span className="font-mono text-sm text-muted-foreground">2017</span>
                </div>
              </div>
            </div>

            {/* Press Coverage - Moved from standalone page */}
            <div className="border-t border-border pt-10">
              <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
                <Newspaper className="h-6 w-6 text-primary" /> Press Coverage
              </h2>
              <div className="space-y-0">
                {press.map((item) => (
                  <a 
                    key={item.id} 
                    href={item.url}
                    className="group block border-b border-border py-4 hover:bg-secondary/20 transition-colors px-4 -mx-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-baseline justify-between gap-2 sm:gap-4">
                      <div className="flex-1">
                        <div className="text-xs font-mono text-primary font-bold mb-1 uppercase tracking-wider">
                          {item.outlet}
                        </div>
                        <h3 className="font-heading text-xl font-bold group-hover:text-primary transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground shrink-0 mt-1 sm:mt-0">
                        <span className="font-mono text-sm">{item.date}</span>
                        <ArrowUpRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}
