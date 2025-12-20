import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projectItems } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 container mx-auto max-w-5xl">
        <header className="mb-16 border-b border-border pb-12">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Projects</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Beyond my research, I co-organize conferences and disseminate data and code.
          </p>
        </header>

        <div className="space-y-12">
          {projectItems.map((project, index) => (
            <article 
              key={project.id}
              className="group border border-border hover:border-primary transition-colors bg-card"
            >
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3 bg-secondary/30 flex items-center justify-center p-8 md:p-12">
                  <div className="w-full aspect-video md:aspect-square bg-primary/10 flex items-center justify-center">
                    <span className="font-heading text-6xl font-bold text-primary/30">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                <div className="md:w-2/3 p-8 flex flex-col justify-center">
                  <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  <div>
                    <Button asChild variant="outline" className="rounded-none gap-2 font-mono text-xs uppercase tracking-wider">
                      <a href={project.url} target="_blank" rel="noopener noreferrer">
                        Visit Project <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
}
