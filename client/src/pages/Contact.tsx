import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 container mx-auto max-w-6xl">
        <div className="grid lg:grid-cols-2 gap-20">
          <div>
            <header className="mb-12">
              <h1 className="font-heading text-5xl md:text-6xl font-bold mb-6">Get in Touch</h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                I am always interested in discussing new research ideas, potential collaborations, or speaking opportunities.
              </p>
            </header>

            <div className="space-y-8 font-mono text-sm">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Email</h3>
                  <p className="text-muted-foreground">alex.sterling@university.edu</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Office</h3>
                  <p className="text-muted-foreground">
                    Department of Economics<br/>
                    Room 402, Social Sciences Building<br/>
                    123 University Ave<br/>
                    Cambridge, MA 02138
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (617) 555-0123</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 border border-border bg-secondary/20">
               <p className="text-sm text-muted-foreground italic">
                 For media inquiries, please contact the University Press Office directly at press@university.edu.
               </p>
            </div>
          </div>

          <div className="bg-card p-8 border border-border md:mt-12">
            <h2 className="font-heading text-2xl font-bold mb-6">Send a Message</h2>
            <form className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">First Name</label>
                  <Input className="rounded-none bg-background" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">Last Name</label>
                  <Input className="rounded-none bg-background" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">Email</label>
                <Input className="rounded-none bg-background" placeholder="jane@example.com" type="email" />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">Subject</label>
                 <Input className="rounded-none bg-background" placeholder="Research Inquiry..." />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-muted-foreground">Message</label>
                <Textarea className="rounded-none bg-background min-h-[150px]" placeholder="Your message here..." />
              </div>

              <Button className="w-full rounded-none font-mono tracking-wider bg-foreground hover:bg-primary">
                SEND MESSAGE
              </Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}
