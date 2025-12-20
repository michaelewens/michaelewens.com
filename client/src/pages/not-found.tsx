import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <div className="flex-1 w-full flex items-center justify-center px-6">
        <Card className="w-full max-w-md rounded-none border-border">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">404 Page Not Found</h1>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              Did you forget to add the page to the router?
            </p>
          </CardContent>
        </Card>
      </div>
      <Footer />
    </div>
  );
}
