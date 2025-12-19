import { Switch, Route } from "wouter";
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
import Press from "@/pages/Press";
import Teaching from "@/pages/Teaching";
import CV from "@/pages/CV";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/research" component={Research} />
      <Route path="/data-code" component={DataCode} />
      <Route path="/contact" component={Contact} />
      <Route path="/press" component={Press} />
      <Route path="/teaching" component={Teaching} />
      <Route path="/cv" component={CV} />
      <Route component={NotFound} />
    </Switch>
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
