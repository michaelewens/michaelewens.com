import { Switch, Route, Router as WouterRouter } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Research from "@/pages/Research";
import DataCode from "@/pages/DataCode";
import Contact from "@/pages/Contact";
import Teaching from "@/pages/Teaching";
import CV from "@/pages/CV";
import Search from "@/pages/Search";
import Projects from "@/pages/Projects";
import Media from "@/pages/Media";
import { useState, useEffect } from "react";

// Manual implementation of useHashLocation to ensure compatibility with GitHub Pages
// and avoid potential issues with wouter's submodule exports in some environments
const currentLocation = () => {
  const hash = window.location.hash.replace(/^#/, "") || "/";
  // Strip query parameters for route matching, but keep them in URL for pages to read
  return hash.split("?")[0];
};

const useHashLocation = () => {
  const [loc, setLoc] = useState(currentLocation());

  useEffect(() => {
    const handler = () => setLoc(currentLocation());

    // Subscribe to hash changes
    window.addEventListener("hashchange", handler);
    return () => window.removeEventListener("hashchange", handler);
  }, []);

  const navigate = (to: string) => {
    window.location.hash = to;
  };
  return [loc, navigate] as [string, (to: string) => void];
};

function Router() {
  return (
    <WouterRouter hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/research" component={Research} />
        <Route path="/data-code" component={DataCode} />
        <Route path="/contact" component={Contact} />
        <Route path="/teaching" component={Teaching} />
        <Route path="/cv" component={CV} />
        <Route path="/projects" component={Projects} />
        <Route path="/search" component={Search} />
        <Route path="/media" component={Media} />
        <Route component={NotFound} />
      </Switch>
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
