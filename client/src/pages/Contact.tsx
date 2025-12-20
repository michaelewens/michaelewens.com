import Navigation from "@/components/Navigation";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 container mx-auto max-w-4xl">
        <div className="grid gap-12">
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
                  <p className="text-muted-foreground">michael.ewens@columbia.edu</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3">
                  <MapPin className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Office</h3>
                  <p className="text-muted-foreground">
                    Columbia Business School<br/>
                    665 W. 130th Street <br/>
                    Room 732, Kravis Hall<br/>
                    New York, NY 10027
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3">
                  <Phone className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+1 (610) 512-3820</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12 p-6 border border-border bg-secondary/20">
               <p className="text-sm text-muted-foreground italic">
                 For media inquiries, please contact the Press Office directly at jroach@skdknick.com.
               </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
