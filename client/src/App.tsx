import { Switch, Route, Router as WouterRouter, Redirect, useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import HeadSync from "@/components/HeadSync";
import { useEffect } from "react";
// Pages are imported statically (one bundle), never via React.lazy. This is Michael's
// standing decision: in-site navigation stays instant, and a deploy cannot leave an open
// tab requesting a route chunk that no longer exists (the June 2026 blank-page bug, 4ee5b8d).
// Code reviews that suggest route splitting are declined; do not reintroduce it.
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

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function Router({ ssrPath }: { ssrPath?: string }) {
  return (
    <WouterRouter ssrPath={ssrPath} ssrSearch={ssrPath === undefined ? undefined : ""}>
      <ScrollToTop />
      <HeadSync />
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

function App({ ssrPath }: { ssrPath?: string }) {
  return (
    <ErrorBoundary>
      <Router ssrPath={ssrPath} />
    </ErrorBoundary>
  );
}

export default App;
