import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { projects } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Database, ExternalLink } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DataCode() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 container mx-auto max-w-6xl">
        <header className="mb-16 border-b border-border pb-12">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Data & Code</h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Data and code releases from my research. All repositories are available on{" "}
            <a href="https://github.com/michaelewens" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
              my GitHub profile
            </a>.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="rounded-none border-border shadow-none hover:border-primary transition-colors group bg-secondary/10 flex flex-col">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Database className="h-8 w-8 text-primary/80" />
                  <div className="flex gap-2">
                    {project.language.map((lang) => (
                      <Badge key={lang} variant="secondary" className="font-mono rounded-none">
                        {lang}
                      </Badge>
                    ))}
                  </div>
                </div>
                <CardTitle className="font-heading text-xl group-hover:text-primary transition-colors leading-tight">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground leading-relaxed text-sm">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="border-t border-border/50 pt-4">
                <Button asChild variant="outline" size="sm" className="rounded-none gap-2 font-mono text-xs w-full">
                  <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.url.includes("github.com") ? (
                      <>
                        <Github className="h-4 w-4" />
                        View on GitHub
                      </>
                    ) : (
                      <>
                        <ExternalLink className="h-4 w-4" />
                        View Dataset
                      </>
                    )}
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        {/* Additional Info Section */}
        <section className="mt-20 p-8 bg-secondary/30 border border-border">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="font-heading text-2xl font-bold mb-4">Replication Policy</h3>
              <p className="text-muted-foreground">
                I am committed to research transparency. Replication packages for many of my published papers are available on the journal websites, and when possible, the main datasets in my GitHub repositories. If you encounter any issues running the code, please open an issue on Github or email me.
              </p>
            </div>
            <Button asChild className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
              <a href="https://github.com/michaelewens" target="_blank" rel="noopener noreferrer">
                Visit GitHub Profile
              </a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
