export interface Paper {
  id: string;
  title: string;
  authors: string[];
  journal?: string;
  year: number;
  status: "Working Paper" | "Published" | "Forthcoming";
  abstract: string;
  pdfUrl: string;
  codeUrl?: string;
  slidesUrl?: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  language: string;
  stars?: number;
  url: string;
}

export interface PressItem {
  id: string;
  outlet: string;
  title: string;
  date: string;
  url: string;
}

export interface Course {
  id: string;
  code: string;
  title: string;
  institution: string;
  level: "Undergraduate" | "Graduate" | "PhD";
  year: string;
  syllabusUrl?: string;
}

export const papers: Paper[] = [
  {
    id: "p1",
    title: "Asset Pricing in Information-Rich Markets: A Machine Learning Approach",
    authors: ["Alex Sterling", "Sarah Chen"],
    journal: "Journal of Finance",
    year: 2024,
    status: "Published",
    abstract: "We propose a novel machine learning framework to extract asset pricing factors from unstructured text data. Our model outperforms standard benchmarks in out-of-sample return prediction.",
    pdfUrl: "#",
    codeUrl: "#",
    slidesUrl: "#",
    tags: ["Asset Pricing", "Machine Learning", "NLP"]
  },
  {
    id: "p2",
    title: "The Microstructure of Decentralized Exchanges",
    authors: ["Alex Sterling"],
    year: 2025,
    status: "Working Paper",
    abstract: "This paper analyzes the liquidity provision mechanisms in automated market makers (AMMs). We find that impermanent loss is systematically underpriced by retail liquidity providers.",
    pdfUrl: "#",
    slidesUrl: "#",
    tags: ["Market Microstructure", "DeFi", "Crypto"]
  },
  {
    id: "p3",
    title: "Global Supply Chains and Exchange Rate Pass-Through",
    authors: ["Alex Sterling", "Michael Weber", "David Rossi"],
    journal: "American Economic Review",
    year: 2023,
    status: "Forthcoming",
    abstract: "We document a structural break in exchange rate pass-through elasticities following the post-2020 supply chain disruptions. Evidence suggests a shift in pricing-to-market behavior.",
    pdfUrl: "#",
    tags: ["Macro-Finance", "International Finance"]
  },
  {
    id: "p4",
    title: "High-Frequency Trading and Market Stability: New Evidence",
    authors: ["Alex Sterling", "John Doe"],
    journal: "Review of Financial Studies",
    year: 2022,
    status: "Published",
    abstract: "Using granular order book data, we show that HFT activity stabilizes prices during normal market conditions but exacerbates volatility during flash crashes.",
    pdfUrl: "#",
    codeUrl: "#",
    tags: ["Market Microstructure", "HFT"]
  }
];

export const projects: Project[] = [
  {
    id: "pr1",
    title: "FinText-Embeddings",
    description: "Pre-trained NLP models optimized for financial texts and earnings call transcripts.",
    language: "Python",
    stars: 1240,
    url: "#"
  },
  {
    id: "pr2",
    title: "OrderBookSim",
    description: "High-fidelity limit order book simulator for backtesting market making strategies.",
    language: "Rust",
    stars: 856,
    url: "#"
  },
  {
    id: "pr3",
    title: "MacroDataClean",
    description: "R package for harmonizing historical macroeconomic time series across different sources.",
    language: "R",
    stars: 342,
    url: "#"
  }
];

export const press: PressItem[] = [
  {
    id: "n1",
    outlet: "The Wall Street Journal",
    title: "Why AI Won't Replace Your Financial Advisor Just Yet",
    date: "October 12, 2024",
    url: "#"
  },
  {
    id: "n2",
    outlet: "Bloomberg",
    title: "DeFi Markets Show Signs of Maturing, Says New Study",
    date: "August 5, 2024",
    url: "#"
  },
  {
    id: "n3",
    outlet: "Financial Times",
    title: "The Hidden Risks of Passive Investing",
    date: "March 22, 2023",
    url: "#"
  }
];

export const courses: Course[] = [
  {
    id: "c1",
    code: "FIN 401",
    title: "Advanced Asset Pricing",
    institution: "University of Economics",
    level: "PhD",
    year: "Fall 2024",
    syllabusUrl: "#"
  },
  {
    id: "c2",
    code: "FIN 302",
    title: "Fintech and Blockchain",
    institution: "University of Economics",
    level: "Graduate",
    year: "Spring 2024",
    syllabusUrl: "#"
  },
  {
    id: "c3",
    code: "ECO 201",
    title: "Introduction to Financial Markets",
    institution: "University of Economics",
    level: "Undergraduate",
    year: "Fall 2023",
    syllabusUrl: "#"
  }
];
