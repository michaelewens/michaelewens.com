import Navigation from "@/components/Navigation";
import { press } from "@/lib/data";
import { ArrowUpRight } from "lucide-react";

export default function Press() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 container mx-auto max-w-4xl">
        <header className="mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Press Coverage</h1>
        </header>

        <div className="space-y-0 border-t border-border">
          {press.map((item) => (
            <a 
              key={item.id} 
              href={item.url}
              className="group block border-b border-border py-8 hover:bg-secondary/20 transition-colors px-4 -mx-4"
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4">
                <div className="flex-1">
                  <div className="text-xs font-mono text-primary font-bold mb-2 uppercase tracking-wider">
                    {item.outlet}
                  </div>
                  <h3 className="font-heading text-2xl md:text-3xl font-bold group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground shrink-0">
                  <span className="font-mono text-sm">{item.date}</span>
                  <ArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </main>
    </div>
  );
}
