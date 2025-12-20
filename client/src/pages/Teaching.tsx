import Navigation from "@/components/Navigation";
import { courses } from "@/lib/data";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";

export default function Teaching() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 container mx-auto max-w-5xl">
        <header className="mb-16">
          <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Teaching</h1>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Course materials, lecture notes, and syllabi for current and past courses.
          </p>
        </header>

        <div className="border border-border">
          <Table>
            <TableHeader className="bg-secondary/30">
              <TableRow className="hover:bg-transparent border-border">
                <TableHead className="font-mono font-bold uppercase text-foreground">Course Title</TableHead>
                <TableHead className="font-mono font-bold uppercase text-foreground hidden md:table-cell">Institution</TableHead>
                <TableHead className="font-mono font-bold uppercase text-foreground hidden md:table-cell">Level</TableHead>
                <TableHead className="font-mono font-bold uppercase text-foreground">Year</TableHead>
                <TableHead className="font-mono font-bold uppercase text-foreground text-right">Syllabus</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {courses.map((course) => (
                <TableRow key={course.id} className="border-border hover:bg-secondary/10 group">
                  <TableCell className="font-heading text-lg font-semibold group-hover:text-primary transition-colors">
                    {course.title}
                  </TableCell>
                  <TableCell className="text-muted-foreground hidden md:table-cell">{course.institution}</TableCell>
                  <TableCell className="hidden md:table-cell">
                    <span className="inline-block px-2 py-1 bg-secondary rounded-none text-xs font-mono uppercase">
                      {course.level}
                    </span>
                  </TableCell>
                  <TableCell className="font-mono text-sm">{course.year}</TableCell>
                  <TableCell className="text-right">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0 rounded-none hover:bg-primary hover:text-primary-foreground">
                      <FileText className="h-4 w-4" />
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </main>
    </div>
  );
}
