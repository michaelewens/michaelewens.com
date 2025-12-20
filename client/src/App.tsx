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
import { useState, useEffect } from "react";

// Manual implementation of useHashLocation to ensure compatibility with GitHub Pages
// and avoid potential issues with wouter's submodule exports in some environments
const currentLocation = () => {
  return window.location.hash.replace(/^#/, "") || "/";
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
