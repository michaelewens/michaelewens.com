export default function Footer() {
  return (
    <footer className="bg-foreground text-background py-10 px-6">
      <div className="container mx-auto max-w-6xl flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <h4 className="font-heading text-xl font-bold mb-2 tracking-wide">
            Michael Ewens
          </h4>
          <p className="font-mono text-xs text-background/60">
            © 2025. All rights reserved.
          </p>
        </div>
        <div className="flex gap-6 font-mono text-xs font-medium text-background/80">
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
          <a
            href="https://business.columbia.edu/faculty/people/michael-ewens"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-primary hover:text-white transition-colors"
          >
            COLUMBIA PROFILE
          </a>
        </div>
      </div>
    </footer>
  );
}
