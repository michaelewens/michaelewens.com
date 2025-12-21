import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ResearchList from "@/components/ResearchList";
import { papers, projects } from "@/lib/data";
import { Button } from "@/components/ui/button";
import { ExternalLink, Search as SearchIcon } from "lucide-react";

export default function Search() {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const extractQuery = () => {
      const hash = window.location.hash;
      const match = hash.match(/\?q=([^&]*)/);
      const q = match ? decodeURIComponent(match[1]) : "";
      setQuery(q);
    };

    // Extract on mount
    extractQuery();

    // Listen for hash changes to update when search query changes
    window.addEventListener("hashchange", extractQuery);
    return () => window.removeEventListener("hashchange", extractQuery);
  }, []);

  // Filter papers
  const filteredPapers = papers.filter(paper => {
    const searchContent = `${paper.title} ${paper.abstract} ${paper.authors} ${paper.journal || ""} ${paper.status}`.toLowerCase();
    return searchContent.includes(query.toLowerCase());
  });

  // Filter projects
  const filteredProjects = projects.filter(project => {
    const searchContent = `${project.title} ${project.description} ${project.language.join(" ")}`.toLowerCase();
    return searchContent.includes(query.toLowerCase());
  });

  const hasResults = filteredPapers.length > 0 || filteredProjects.length > 0;

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 container mx-auto max-w-4xl">
        <header className="mb-12">
          <h1 className="font-heading text-5xl font-bold mb-6 flex items-center gap-4">
            <SearchIcon className="h-10 w-10 text-primary" />
            Search Results
          </h1>
          <p className="text-xl text-muted-foreground">
            {query ? (
              <>
                Showing results for <span className="text-foreground font-bold">"{query}"</span>
              </>
            ) : (
              "Enter a search term to find research and projects."
            )}
          </p>
        </header>

        {!query ? (
           <div className="p-12 border border-dashed border-border bg-secondary/10 text-center">
            <p className="text-muted-foreground">Please enter a search term in the navigation bar.</p>
           </div>
        ) : !hasResults ? (
          <div className="p-12 border border-dashed border-border bg-secondary/10 text-center">
            <p className="text-muted-foreground">No results found for "{query}". Try a different search term.</p>
          </div>
        ) : (
          <div className="space-y-16">
            {filteredPapers.length > 0 && (
              <section>
                <h2 className="font-mono text-sm font-bold tracking-widest text-primary uppercase mb-8 border-b border-border pb-2">
                  Research Papers ({filteredPapers.length})
                </h2>
                <ResearchList papers={filteredPapers} />
              </section>
            )}

            {filteredProjects.length > 0 && (
              <section>
                <h2 className="font-mono text-sm font-bold tracking-widest text-primary uppercase mb-8 border-b border-border pb-2">
                  Data & Code ({filteredProjects.length})
                </h2>
                <div className="grid gap-6">
                  {filteredProjects.map((project) => (
                     <div 
                      key={project.id} 
                      className="group border border-border bg-card hover:shadow-lg transition-all duration-300"
                    >
                      <div className="p-6">
                        <div className="flex justify-between items-start mb-4">
                          <div className="flex gap-2">
                            {project.language.map((lang) => (
                              <span key={lang} className="inline-block px-2 py-1 bg-primary/10 text-primary text-xs font-mono font-bold uppercase tracking-wider">
                                {lang}
                              </span>
                            ))}
                          </div>
                          <Button asChild variant="ghost" size="sm" className="h-8 w-8 p-0 opacity-50 group-hover:opacity-100">
                            <a href={project.url} target="_blank" rel="noopener noreferrer">
                              <ExternalLink className="h-4 w-4" />
                            </a>
                          </Button>
                        </div>
                        
                        <h3 className="font-heading text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground leading-relaxed mb-6">
                          {project.description}
                        </p>

                         <Button asChild variant="outline" size="sm" className="rounded-none gap-2 font-mono text-xs w-full">
                          <a href={project.url} target="_blank" rel="noopener noreferrer">
                            VIEW PROJECT
                          </a>
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
}