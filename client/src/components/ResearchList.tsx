import { Paper } from "@/lib/data";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { FileDown, Github } from "lucide-react";
import { cn } from "@/lib/utils";

interface ResearchListProps {
  papers: Paper[];
  showAbstract?: boolean;
  className?: string;
}

export default function ResearchList({ papers, showAbstract = true, className }: ResearchListProps) {
  return (
    <div className={cn("space-y-8", className)}>
      {papers.map((paper) => (
        <div 
          key={paper.id} 
          className="group relative border-l-2 border-transparent hover:border-primary pl-6 transition-all duration-300 py-2"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
            <div className="flex-1 space-y-2">
              <div className="flex flex-wrap items-center gap-2 mb-1">
                <Badge variant={paper.status === "Published" ? "default" : "outline"} className="rounded-none font-mono text-xs uppercase tracking-wider">
                  {paper.status}
                </Badge>
                <span className="text-sm font-mono text-muted-foreground">{paper.year}</span>
              </div>
              
              <h3 className="font-heading text-xl md:text-2xl font-bold leading-tight group-hover:text-primary transition-colors">
                {paper.title}
              </h3>
              
              <p className="text-sm text-muted-foreground italic">
                {paper.authors.map((author, i) => (
                  <span key={i} className={author === "Alex Sterling" ? "font-semibold text-foreground" : ""}>
                    {author}{i < paper.authors.length - 1 ? ", " : ""}
                  </span>
                ))}
              </p>

              {showAbstract && (
                <p className="text-muted-foreground leading-relaxed max-w-3xl mt-2">
                  {paper.abstract}
                </p>
              )}
              
              <div className="flex flex-wrap gap-2 mt-4 pt-2">
                {paper.tags.map(tag => (
                  <span key={tag} className="text-xs font-mono text-muted-foreground/60 bg-secondary/30 px-2 py-1">
                    #{tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex md:flex-col gap-2 shrink-0">
              <Button variant="outline" size="sm" className="rounded-none gap-2 font-mono text-xs border-primary/20 hover:border-primary hover:bg-primary/5">
                <FileDown className="h-3 w-3" />
                PDF
              </Button>
              {paper.codeUrl && (
                <Button variant="ghost" size="sm" className="rounded-none gap-2 font-mono text-xs text-muted-foreground hover:text-foreground">
                  <Github className="h-3 w-3" />
                  Code
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
