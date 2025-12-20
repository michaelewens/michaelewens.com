import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Mail, MapPin, BookOpen, GraduationCap, Newspaper, ArrowUpRight, Building2, Badge } from "lucide-react";
import headshot from "@assets/generated_images/ewens_arms.png";
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
                alt="Prof. Michael Ewens" 
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
                  Columbia Busiess School<br />
                  665 W. 130th Street<br />
                  732 Kravis Hall<br />
                  New York, NY 10027<br />
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
                I am the David L. and Elsie M. Dodd Professor of Finance at the Columbia Business School and co-director of the school's Private Equity Program. My research studies private equity, venture capital, and the financing of high-growth entrepreneurial firms. </p>
    
                <p className="mb-4"> My <a href="/research">research</a> investigate the interactions and differences between the public and private capital markets. It has appeared in the Journal of Finance, Journal of Financial Economics, Review of Financial Studies, and Management Science (among other). It has also appeared in the Economist, Bloomberg, and the New York Times. I am a Research Associate at the National Bureau of Economic Research and Associate Editor of the Journal of Financial Economics, Management Science and Journal of Coporate Finance. I edited the <a href="https://www.sciencedirect.com/journal/journal-of-corporate-finance/vol/81/suppl/C">JCF Special Issue on Private Equity</a> and was co-editor of the Journal of Economics & Management Strategy through 2024. </p>  
                 
                <p className="mb-4">I received a Ph.D. in economics from the University of California, San Diego. Since 2006, I have been a quantitative advisor for Correlation Ventures, a quantitative-focused venture capital firm.  I <a href="/teaching">teach</a> private equity and entrepreneurial finance at the Columbia Business School.   Prior to joining Columbia in 2022, I was on the faculty at the California Institute of Technology and Carnegie Mellon University's Tepper School of Business.
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
                  "Private Equity",
                  "Entrepreneurial Finance",
                  "Venture Capital",
                  "Corporate Hierarchy",
                  "Innovation",
                  "Entrepreneurship"
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
                    <h3 className="font-bold text-lg text-foreground">Ph.D. in Economics</h3>
                    <p className="text-muted-foreground">University of California San Diego</p>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">2010</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">B.A. in Mathematics and Economics</h3>
                    <p className="text-muted-foreground">Washington University in St. Louis</p>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">2004</span>
                </div>
              </div>
            </div>

            {/* Academic Positions Held */}
            <div className="border-t border-border pt-10">
              <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
                <Building2 className="h-6 w-6 text-primary" /> Academic Positions Held
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">David L. and Elsie M. Dodd Professor of Finance</h3>
                    <p className="text-muted-foreground">Columbia Business School</p>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">2022 – present</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Professor of Finance and Entrepreneurship</h3>
                    <p className="text-muted-foreground">California Institute of Technology</p>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">2019 – 2022</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Associate Professor of Finance and Entrepreneurship</h3>
                    <p className="text-muted-foreground">California Institute of Technology</p>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">2014 – 2019</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Assistant Professor of Finance and Entrepreneurship</h3>
                    <p className="text-muted-foreground">Tepper School of Business, Carnegie Mellon University</p>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">2010 – 2014</span>
                </div>
              </div>
            </div>

            {/* Affiliations */}
            <div className="border-t border-border pt-10">
              <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
                <Badge className="h-6 w-6 text-primary" /> Affiliations
              </h2>
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Private Equity Program</h3>
                    <p className="text-muted-foreground">Columbia Business School · Co-director</p>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">2023 – present</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">National Bureau of Economic Research</h3>
                    <p className="text-muted-foreground">Research Associate</p>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">2019 – present</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Institute for Private Capital</h3>
                    <p className="text-muted-foreground">Private Equity Research Consortium Fellow</p>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">2018 – present</span>
                </div>
                <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
                  <div>
                    <h3 className="font-bold text-lg text-foreground">Millstein Center</h3>
                    <p className="text-muted-foreground">Columbia Law School · Faculty Fellow</p>
                  </div>
                  <span className="font-mono text-sm text-muted-foreground">2022 – present</span>
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
      <Footer />
    </div>
  );
}
