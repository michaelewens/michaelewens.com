import textProcessingImg from "@assets/generated_images/abstract_visualization_of_financial_text_processing.png";
import orderBookImg from "@assets/generated_images/limit_order_book_heatmap_visualization.png";
import macroDataImg from "@assets/generated_images/global_macroeconomic_data_connection_map.png";
import defiImg from "@assets/generated_images/defi_network_nodes_and_links.png";
import supplyChainImg from "@assets/generated_images/supply_chain_logistics_abstract.png";
import hftImg from "@assets/generated_images/high_frequency_trading_algorithmic_lines.png";

// Number of papers to feature on the homepage
export const FEATURED_COUNT = 2;

export interface Paper {
  id: string;
  title: string;
  authors: string[];
  journal?: string;
  journalUrl?: string;
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
  imageUrl?: string;
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
    authors: ["Michael Ewens", "Sarah Chen"],
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
    authors: ["Michael Ewens"],
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
    authors: ["Michael Ewens", "Michael Weber", "David Rossi"],
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
    authors: ["Michael Ewens", "John Doe"],
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
    url: "#",
    imageUrl: textProcessingImg
  },
  {
    id: "pr2",
    title: "OrderBookSim",
    description: "High-fidelity limit order book simulator for backtesting market making strategies.",
    language: "Rust",
    stars: 856,
    url: "#",
    imageUrl: orderBookImg
  },
  {
    id: "pr3",
    title: "MacroDataClean",
    description: "R package for harmonizing historical macroeconomic time series across different sources.",
    language: "R",
    stars: 342,
    url: "#",
    imageUrl: macroDataImg
  },
  {
    id: "pr4",
    title: "DeFi-Network-Graph",
    description: "Graph neural network tools for analyzing transaction flows in decentralized finance protocols.",
    language: "Python",
    stars: 620,
    url: "#",
    imageUrl: defiImg
  },
  {
    id: "pr5",
    title: "SupplyChain-Viz",
    description: "Interactive visualization dashboard for global supply chain disruptions and shock propagation.",
    language: "JavaScript",
    stars: 415,
    url: "#",
    imageUrl: supplyChainImg
  },
  {
    id: "pr6",
    title: "HFT-Algo-Lab",
    description: "Educational environment for simulating and visualizing high-frequency trading algorithms.",
    language: "C++",
    stars: 890,
    url: "#",
    imageUrl: hftImg
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
    code: "PE-VC",
    title: "Private Equity Value Creation",
    institution: "Columbia Business School",
    level: "Graduate",
    year: "2025–"
  },
  {
    id: "c2",
    code: "PE-FS",
    title: "Private Equity Field Study",
    institution: "Columbia Business School",
    level: "Graduate",
    year: "2024–"
  },
  {
    id: "c3",
    code: "PE-FIN",
    title: "Private Equity Finance",
    institution: "Columbia Business School",
    level: "Graduate",
    year: "2024–"
  },
  {
    id: "c4",
    code: "PE-ALL",
    title: "Private Equity Allocation",
    institution: "Columbia Business School",
    level: "Graduate",
    year: "2024"
  },
  {
    id: "c5",
    code: "PE-TOP",
    title: "Current Topics in Private Equity",
    institution: "Columbia Business School",
    level: "Graduate",
    year: "2023–2024"
  },
  {
    id: "c6",
    code: "REF",
    title: "Research in Entrepreneurial Finance",
    institution: "Columbia Business School",
    level: "PhD",
    year: "2023–"
  },
  {
    id: "c7",
    code: "ENT-FIN",
    title: "Entrepreneurial Finance",
    institution: "Columbia Business School",
    level: "Graduate",
    year: "2021, 2023, 2024"
  },
  {
    id: "c8",
    code: "NBER",
    title: "Race and Gender in Entrepreneurial Finance",
    institution: "NBER Entrepreneurship Bootcamp",
    level: "PhD",
    year: "2023–2024"
  },
  {
    id: "c9",
    code: "CORP-FIN",
    title: "Corporate Finance",
    institution: "Caltech",
    level: "Undergraduate",
    year: "2014–2019"
  },
  {
    id: "c10",
    code: "VC",
    title: "Venture Capital",
    institution: "Caltech",
    level: "Undergraduate",
    year: "2014–2019"
  },
  {
    id: "c11",
    code: "METHODS",
    title: "Applied Methods for the Social Sciences",
    institution: "Caltech",
    level: "PhD",
    year: "2014–2019"
  },
  {
    id: "c12",
    code: "ACCT",
    title: "Introduction to Financial Accounting",
    institution: "Caltech",
    level: "Undergraduate",
    year: "2014–2019"
  },
  {
    id: "c13",
    code: "NVF",
    title: "New Venture Finance",
    institution: "UCSD Rady School of Management",
    level: "Graduate",
    year: "2015"
  },
  {
    id: "c14",
    code: "PE-FIN",
    title: "Private Equity Finance",
    institution: "Carnegie Mellon Tepper",
    level: "Graduate",
    year: "2010–2014"
  },
  {
    id: "c15",
    code: "VC-FIN",
    title: "Venture Capital Finance",
    institution: "Carnegie Mellon Tepper",
    level: "Graduate",
    year: "2010–2014"
  },
  {
    id: "c16",
    code: "ENT-FIN",
    title: "Entrepreneurial Finance",
    institution: "Carnegie Mellon Tepper",
    level: "Undergraduate",
    year: "2010–2014"
  },
  {
    id: "c17",
    code: "EMP-METH",
    title: "Empirical Methods for Corporate Finance and Accounting",
    institution: "Carnegie Mellon Tepper",
    level: "PhD",
    year: "2010–2014"
  }
];
