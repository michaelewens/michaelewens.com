export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-16 px-6">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h4 className="font-heading text-2xl font-bold mb-3 tracking-wide">
            Michael Ewens
          </h4>
          <p className="font-mono text-sm text-background/60">
            © 2025. All rights reserved.
          </p>
        </div>
        <div className="flex gap-8 font-mono text-sm font-medium text-background/80">
          <a
            href="https://www.linkedin.com/in/michaelewens/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary hover:text-white transition-colors"
          >
            LINKEDIN
          </a>
          <a
            href="https://scholar.google.com/citations?user=5OqolPMAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary hover:text-white transition-colors"
          >
            GOOGLE SCHOLAR
          </a>
          <a
            href="https://github.com/michaelewens"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary hover:text-white transition-colors"
          >
            GITHUB
          </a>
        </div>
      </div>
    </footer>
  );
}
