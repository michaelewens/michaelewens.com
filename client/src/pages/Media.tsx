import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { ArrowUpRight } from "lucide-react";
import { press } from "@/lib/data";

export default function Media() {
  const sortedPress = [...press].sort(
    (a, b) => parseInt(b.id.replace('n', '')) - parseInt(a.id.replace('n', ''))
  );

  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navigation />

      <main className="pt-32 pb-20 px-6 container mx-auto max-w-4xl">
        <h1 className="font-heading text-5xl md:text-6xl font-bold mb-4 text-foreground">
          Media Coverage
        </h1>
        <p className="text-xl text-muted-foreground mb-12">
          Press mentions and media appearances
        </p>

        <div className="space-y-0">
          {sortedPress.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border-b border-border py-5 hover:bg-secondary/20 transition-colors px-4 -mx-4"
              data-testid={`media-item-${item.id}`}
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
      </main>

      <Footer />
    </div>
  );
}
