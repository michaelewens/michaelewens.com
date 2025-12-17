import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download, Briefcase, GraduationCap } from "lucide-react";

export default function CV() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 container mx-auto max-w-4xl">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-8">
          <div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-2">Curriculum Vitae</h1>
            <p className="text-xl text-muted-foreground">Updated: October 2024</p>
          </div>
          <Button size="lg" className="rounded-none gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-wider">
            <Download className="h-4 w-4" /> Download PDF
          </Button>
        </header>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-3xl font-bold">Academic Appointments</h2>
          </div>
          
          <div className="space-y-8 border-l border-border ml-3 pl-8 relative">
            <div className="relative">
              <span className="absolute -left-[39px] top-2 h-3 w-3 bg-primary rounded-full ring-4 ring-background" />
              <h3 className="text-xl font-bold">Assistant Professor of Finance</h3>
              <p className="text-lg text-primary font-medium">University of Economics</p>
              <p className="font-mono text-sm text-muted-foreground mt-1">2023 - Present</p>
            </div>
             <div className="relative">
              <span className="absolute -left-[39px] top-2 h-3 w-3 bg-border rounded-full ring-4 ring-background" />
              <h3 className="text-xl font-bold">Postdoctoral Fellow</h3>
              <p className="text-lg text-primary font-medium">Institute for Financial Studies</p>
              <p className="font-mono text-sm text-muted-foreground mt-1">2022 - 2023</p>
            </div>
          </div>
        </section>

        <section className="mb-16">
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-3xl font-bold">Education</h2>
          </div>
          
          <div className="space-y-8 border-l border-border ml-3 pl-8 relative">
            <div className="relative">
              <span className="absolute -left-[39px] top-2 h-3 w-3 bg-border rounded-full ring-4 ring-background" />
              <h3 className="text-xl font-bold">Ph.D. in Financial Economics</h3>
              <p className="text-lg text-primary font-medium">Top Tier University</p>
              <p className="font-mono text-sm text-muted-foreground mt-1">2017 - 2022</p>
              <p className="text-muted-foreground mt-2 italic">Thesis: "Essays on High-Frequency Trading"</p>
            </div>
             <div className="relative">
              <span className="absolute -left-[39px] top-2 h-3 w-3 bg-border rounded-full ring-4 ring-background" />
              <h3 className="text-xl font-bold">B.S. in Mathematics and Economics</h3>
              <p className="text-lg text-primary font-medium">State University</p>
              <p className="font-mono text-sm text-muted-foreground mt-1">2013 - 2017</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
