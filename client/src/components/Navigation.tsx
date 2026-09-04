import { useLocation, useSearch, Link } from "wouter";
import { Search, Menu, X, FileText, Code, GraduationCap, Mail, User, Lightbulb } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";

export default function Navigation() {
  const [location, setLocation] = useLocation();
  const search = useSearch();
  const urlQuery = new URLSearchParams(search).get("q") ?? "";
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState(urlQuery);
  const [mobileSearchOpen, setMobileSearchOpen] = useState(false);

  useEffect(() => {
    setSearchQuery(urlQuery);
  }, [urlQuery]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      setLocation(`/search?q=${encodeURIComponent(searchQuery)}`);
      setIsOpen(false);
    }
  };

  const navItems = [
    { name: "About", path: "/about", icon: User },
    { name: "Research", path: "/research", icon: FileText },
    { name: "CV", path: "/cv", icon: FileText },
    { name: "Data", path: "/data-code", icon: Code },
    { name: "Projects", path: "/projects", icon: Lightbulb },
    { name: "Teaching", path: "/teaching", icon: GraduationCap },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <nav
      aria-label="Main navigation"
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b",
        isScrolled
          ? "bg-background/95 backdrop-blur-md border-border py-4" 
          : "bg-background border-transparent py-6"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        {/* Brand */}
        <Link
          href="/"
          className="group block"
          aria-current={location === "/" ? "page" : undefined}
        >
          <h1 className={cn(
            "font-heading text-2xl font-bold tracking-tight transition-colors",
            location === "/" ? "text-primary" : "group-hover:text-primary"
          )}>
            Michael Ewens
          </h1>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors">
            Private Equity & Entrepreneurial Finance
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              aria-current={location === item.path ? "page" : undefined}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary relative after:content-[''] after:absolute after:left-0 after:bottom-[-4px] after:h-[1px] after:bg-primary after:transition-all after:duration-300",
                location === item.path
                  ? "text-primary after:w-full"
                  : "text-muted-foreground after:w-0 hover:after:w-full"
              )}
            >
              {item.name}
            </Link>
          ))}
          
          <div className="relative w-64 ml-4">
            <form onSubmit={handleSearch}>
              <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                aria-label="Search site"
                className="pl-8 h-9 bg-secondary/50 border-transparent focus:bg-background focus:border-border transition-all rounded-none font-mono text-xs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        </div>

        {/* Mobile Controls */}
        <div className="md:hidden flex items-center gap-1">
          <button
            className="p-2 text-muted-foreground hover:text-foreground transition-colors"
            onClick={() => { setMobileSearchOpen(!mobileSearchOpen); setIsOpen(false); }}
            aria-label="Search"
            aria-expanded={mobileSearchOpen}
          >
            <Search className="h-5 w-5" />
          </button>
          <button
            className="p-2 text-foreground"
            onClick={() => { setIsOpen(!isOpen); setMobileSearchOpen(false); }}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
            aria-controls="mobile-nav"
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar */}
      {mobileSearchOpen && (
        <div className="md:hidden border-b border-border bg-background px-6 py-3 animate-in slide-in-from-top-2">
          <form onSubmit={(e) => { handleSearch(e); setMobileSearchOpen(false); }} className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search..."
              aria-label="Search site"
              autoFocus
              className="pl-9 h-10 bg-secondary/50 rounded-none font-mono"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </form>
        </div>
      )}

      {/* Mobile Nav */}
      {isOpen && (
        <div id="mobile-nav" className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-4">
             <form onSubmit={handleSearch} className="relative w-full mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search..."
                aria-label="Search site"
                className="pl-9 h-10 bg-secondary/50 rounded-none font-mono"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            {navItems.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                aria-current={location === item.path ? "page" : undefined}
                className={cn(
                  "flex items-center space-x-3 text-lg font-medium py-2 border-l-2 pl-4 transition-colors",
                  location === item.path
                    ? "border-primary text-primary"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                <item.icon className="h-5 w-5" />
                <span>{item.name}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
