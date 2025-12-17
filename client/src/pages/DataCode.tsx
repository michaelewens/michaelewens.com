import Navigation from "@/components/Navigation";
import { projects } from "@/lib/data";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star, Code } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export default function DataCode() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 container mx-auto max-w-6xl">
        <header className="mb-16 border-b border-border pb-12">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Data & Code</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Open source tools, datasets, and replication code for my research projects.
            All resources are available under MIT license unless otherwise noted.
          </p>
        </header>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card key={project.id} className="rounded-none border-border shadow-none hover:border-primary transition-colors group bg-secondary/10">
              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <Code className="h-8 w-8 text-primary/80" />
                  <Badge variant="secondary" className="font-mono rounded-none">
                    {project.language}
                  </Badge>
                </div>
                <CardTitle className="font-heading text-2xl group-hover:text-primary transition-colors">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed h-24">
                  {project.description}
                </p>
              </CardContent>
              <CardFooter className="flex justify-between border-t border-border/50 pt-4">
                <div className="flex items-center text-sm text-muted-foreground font-mono">
                  <Star className="h-3 w-3 mr-1" /> {project.stars}
                </div>
                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="rounded-none h-8 w-8 p-0">
                    <Github className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="rounded-none h-8 w-8 p-0">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
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
                I am committed to research transparency. Replication packages for all published papers are available on my GitHub repositories or Dataverse. If you encounter any issues running the code, please open an issue.
              </p>
            </div>
            <Button className="rounded-none bg-primary text-primary-foreground hover:bg-primary/90">
              Visit GitHub Profile
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
}
