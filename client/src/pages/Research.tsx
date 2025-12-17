import Navigation from "@/components/Navigation";
import ResearchList from "@/components/ResearchList";
import { papers } from "@/lib/data";

export default function Research() {
  const published = papers.filter(p => p.status === "Published");
  const working = papers.filter(p => p.status === "Working Paper");
  const forthcoming = papers.filter(p => p.status === "Forthcoming");

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 container mx-auto max-w-4xl">
        <header className="mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Research</h1>
          <p className="text-xl text-muted-foreground max-w-2xl leading-relaxed">
            My research focuses on understanding how information is incorporated into asset prices, with a focus on machine learning methods and non-traditional data sources.
          </p>
        </header>

        {forthcoming.length > 0 && (
          <section className="mb-20">
            <h2 className="font-mono text-sm font-bold tracking-widest text-primary uppercase mb-8 border-b border-border pb-2">
              Forthcoming
            </h2>
            <ResearchList papers={forthcoming} />
          </section>
        )}

        {working.length > 0 && (
          <section className="mb-20">
            <h2 className="font-mono text-sm font-bold tracking-widest text-primary uppercase mb-8 border-b border-border pb-2">
              Working Papers
            </h2>
            <ResearchList papers={working} />
          </section>
        )}

        {published.length > 0 && (
          <section className="mb-20">
             <h2 className="font-mono text-sm font-bold tracking-widest text-muted-foreground uppercase mb-8 border-b border-border pb-2">
              Published
            </h2>
            <ResearchList papers={published} />
          </section>
        )}
      </main>
    </div>
  );
}
