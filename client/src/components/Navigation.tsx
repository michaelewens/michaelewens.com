import { Link, useLocation } from "wouter";
import { Search, Menu, X, FileText, Code, GraduationCap, Mail, Newspaper, User } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Navigation() {
  const [location, setLocation] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

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
    { name: "Data & Code", path: "/data-code", icon: Code },
    { name: "Teaching", path: "/teaching", icon: GraduationCap },
    { name: "Contact", path: "/contact", icon: Mail },
  ];

  return (
    <nav 
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
        >
          <h1 className="font-heading text-2xl font-bold tracking-tight group-hover:text-primary transition-colors">
            Alex Sterling
          </h1>
          <p className="text-xs font-mono text-muted-foreground uppercase tracking-widest group-hover:text-foreground transition-colors">
            Financial Economics
          </p>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link 
              key={item.path} 
              href={item.path}
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
                placeholder="Search research..." 
                className="pl-8 h-9 bg-secondary/50 border-transparent focus:bg-background focus:border-border transition-all rounded-none font-mono text-xs"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
          </div>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-foreground"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border p-6 animate-in slide-in-from-top-5">
          <div className="flex flex-col space-y-4">
             <form onSubmit={handleSearch} className="relative w-full mb-4">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search..." 
                className="pl-9 h-10 bg-secondary/50 rounded-none font-mono"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </form>
            {navItems.map((item) => (
              <Link 
                key={item.path} 
                href={item.path}
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
