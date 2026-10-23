import { Card, CardContent } from "@/components/ui/card";
import { AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <main className="flex flex-col min-h-screen bg-background">
      <div className="flex-1 w-full flex items-center justify-center px-6">
        <Card className="w-full max-w-md rounded-none border-border">
          <CardContent className="pt-6">
            <div className="flex mb-4 gap-2">
              <AlertCircle className="h-8 w-8 text-primary" />
              <h1 className="text-2xl font-bold text-foreground">404 Page Not Found</h1>
            </div>

            <p className="mt-4 text-sm text-muted-foreground">
              This page doesn&apos;t exist. <a href="/" className="text-primary hover:underline">Go to the homepage</a>.
            </p>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
