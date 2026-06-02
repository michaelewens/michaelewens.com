import { Switch, Route, Router as WouterRouter, Redirect, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import { useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

// Pages are imported statically (not via React.lazy) on purpose. GitHub Pages
// replaces the whole site on each deploy and caches index.html for 10 minutes,
// so per-route lazy chunks could 404 for stale/open clients and blank the page.
// A single bundle means navigation never fetches a chunk that can go missing.
import About from "@/pages/About";
import Research from "@/pages/Research";
import DataCode from "@/pages/DataCode";
import Contact from "@/pages/Contact";
import Teaching from "@/pages/Teaching";
import CV from "@/pages/CV";
import Search from "@/pages/Search";
import Projects from "@/pages/Projects";
import Media from "@/pages/Media";

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router() {
  return (
    <WouterRouter>
      <ScrollToTop />
      <Navigation />
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
        <Route path="/press">
          <Redirect to="/media" />
        </Route>
        <Route component={NotFound} />
      </Switch>
      <Footer />
    </WouterRouter>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <div>
          <ErrorBoundary>
            <Router />
          </ErrorBoundary>
        </div>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
