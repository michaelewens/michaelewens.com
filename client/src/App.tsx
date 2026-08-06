import { Switch, Route, Router as WouterRouter, Redirect, useLocation } from "wouter";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ErrorBoundary from "@/components/ErrorBoundary";
import { lazy, Suspense, useEffect } from "react";
import NotFound from "@/pages/not-found";
import Home from "@/pages/Home";

const About = lazy(() => import("@/pages/About"));
const Research = lazy(() => import("@/pages/Research"));
const DataCode = lazy(() => import("@/pages/DataCode"));
const Contact = lazy(() => import("@/pages/Contact"));
const Teaching = lazy(() => import("@/pages/Teaching"));
const CV = lazy(() => import("@/pages/CV"));
const Search = lazy(() => import("@/pages/Search"));
const Projects = lazy(() => import("@/pages/Projects"));
const Media = lazy(() => import("@/pages/Media"));

function ScrollToTop() {
  const [location] = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);
  return null;
}

function RouteFallback() {
  return <main className="min-h-screen bg-background" aria-busy="true" />;
}

function Router({ ssrPath }: { ssrPath?: string }) {
  return (
    <WouterRouter ssrPath={ssrPath}>
      <ScrollToTop />
      <Navigation />
      <Suspense fallback={<RouteFallback />}>
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
      </Suspense>
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
