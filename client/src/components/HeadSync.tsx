import { useEffect, useRef } from "react";
import { useLocation } from "wouter";
import { ROUTES, SITE } from "@/lib/routes";

// The build writes each page's canonical, description, social tags, robots and JSON-LD
// into static HTML. This keeps them matched to the current page after in-app navigation.
// Page titles are handled by each page's own <title>.
function setAttr(selector: string, attr: string, value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value);
}

export default function HeadSync() {
  const [location] = useLocation();
  // The build's JSON-LD describes the page that was first loaded; detached on other pages.
  const jsonLd = useRef<HTMLScriptElement | null>(null);

  useEffect(() => {
    const route = ROUTES.find((r) => r.path === location);
    const url = `${SITE}${location}`;

    if (route) {
      setAttr('meta[name="description"]', "content", route.description);
      setAttr('meta[property="og:description"]', "content", route.description);
      setAttr('meta[name="twitter:description"]', "content", route.description);
      setAttr('meta[property="og:title"]', "content", route.title);
      setAttr('meta[name="twitter:title"]', "content", route.title);
      setAttr('meta[property="og:url"]', "content", url);
      setAttr('link[rel="canonical"]', "href", url);
    }

    let robots = document.head.querySelector<HTMLMetaElement>('meta[name="robots"]');
    if (!route || route.noindex) {
      if (!robots) {
        robots = document.createElement("meta");
        robots.name = "robots";
        document.head.appendChild(robots);
      }
      robots.content = "noindex, follow";
    } else {
      robots?.remove();
    }

    if (!jsonLd.current) {
      jsonLd.current = document.head.querySelector('script[type="application/ld+json"]');
    }
    const ld = jsonLd.current;
    if (ld) {
      if (ld.dataset.path === location) {
        if (!ld.isConnected) document.head.appendChild(ld);
      } else {
        ld.remove();
      }
    }
  }, [location]);

  return null;
}
