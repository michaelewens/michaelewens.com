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
  appendixUrl?: string;
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  language: string[];
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
  title: string;
  institution: string;
  level: "Undergraduate" | "MBA" | "PhD";
  year: string;
  syllabusUrl?: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  url: string;
  imageUrl?: string;
}

export const papers: Paper[] = [
  {
    id: "p17",
    title: "Corporate Hierarchy",
    authors: ["Michael Ewens", "Xavier Giroud"],
    year: 2025,
    status: "Working Paper",
    abstract: "We study the structure and evolution of corporate hierarchies.",
    pdfUrl: "https://osf.io/preprints/socarxiv/yj4he_v2",
    tags: ["Corporate Finance", "Organization", "Hierarchy"]
  },
  {
    
    id: "p1",
    title: "Venture Capital and Startup Agglomeration",
    authors: ["Michael Ewens", "Jun Chen"],
    journal: "Journal of Finance",
    journalUrl: "https://onlinelibrary.wiley.com/doi/10.1111/jofi.13451",
    year: 2025,
    status: "Published",
    abstract: "We study how venture capital investment and startup activity cluster geographically and the implications for entrepreneurial finance.",
    pdfUrl: "https://osf.io/download/607362fc51f7ae0483f50a1b/",
    tags: ["Venture Capital", "Entrepreneurship", "Geography"],
    codeUrl: "https://github.com/michaelewens/Banks-In-VC"
  },
  {
    id: "p2",
    title: "Board Dynamics over the Startup Life Cycle",
    authors: ["Michael Ewens", "Nadya Malenko"],
    journal: "Journal of Finance",
    year: 2024,
    status: "Forthcoming",
    abstract: "We examine how startup boards evolve from founding through exit, documenting the changing composition and roles of board members.",
    pdfUrl: "https://osf.io/preprints/socarxiv/t96yq/",
    codeUrl: "https://github.com/michaelewens/vc_backed_boards",
    slidesUrl: "https://michaelewens.com/wp-content/uploads/2025/02/Slides_Board_Dynamics_Over_Startup_Life_Cycle.pdf",
    tags: ["Corporate Governance", "Startups", "Venture Capital"]
  },
  {
    id: "p3",
    title: "Regulatory Costs of Being Public: Evidence from Bunching Estimation",
    authors: ["Michael Ewens", "Kairong Xiao", "Ting Xu"],
    journal: "Journal of Financial Economics",
    journalUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0304405X23002155"
    year: 2023,
  dataURL: "https://github.com/michaelewens/public_float_regulation",
    status: "Published",
    abstract: "We estimate the regulatory costs of being a public company using bunching estimation techniques.",
    pdfUrl: "https://osf.io/preprints/socarxiv/pdv8n/",
    tags: ["Regulation", "IPO", "Public Markets"]
  },
  {
    id: "p4",
    title: "Founder-CEO Compensation and Selection into Venture Capital-Backed Entrepreneurship",
    authors: ["Michael Ewens", "Ramana Nanda", "Christopher Stanton"],
    journal: "Journal of Finance",
    journalUrl: "https://onlinelibrary.wiley.com/doi/10.1111/jofi.13383",
    year: 2024,
    status: "Published",
    abstract: "We study how founder-CEO compensation evolves and its role in selection into venture capital-backed entrepreneurship.",
    pdfUrl: "https://osf.io/preprints/socarxiv/rku3m",
    tags: ["Entrepreneurship", "Compensation", "Venture Capital"]
  },
  {
    id: "p5",
    title: "Measuring Intangible Capital with Market Prices",
    authors: ["Michael Ewens", "Ryan Peters", "Sean Wang"],
    journal: "Management Science",
    year: 2023,
    status: "Published",
    abstract: "We develop new measures of intangible capital using market prices and provide code to construct knowledge and organization capital stocks.",
    pdfUrl: "https://osf.io/preprints/socarxiv/kvp2f/",
    codeUrl: "https://github.com/michaelewens/intangible_capital",
    tags: ["Intangible Capital", "Valuation", "Corporate Finance"]
  },
  {
    id: "p6",
    title: "Race and Gender in Entrepreneurial Finance",
    authors: ["Michael Ewens"],
    year: 2024,
    status: "Published",
    abstract: "A comprehensive review of research on race and gender in entrepreneurial finance for the Handbook of the Economics of Corporate Finance.",
    pdfUrl: "https://osf.io/preprints/socarxiv/djf8z/",
    tags: ["Diversity", "Entrepreneurship", "Venture Capital"]
  },
  {
    id: "p7",
    title: "Private or Public Equity? The Evolving Entrepreneurial Finance Landscape",
    authors: ["Michael Ewens", "Joan Farre-Mensa"],
    journal: "Annual Review of Financial Economics",
    year: 2022,
    status: "Published",
    abstract: "We document and explain the dramatic shift in entrepreneurial finance from public to private markets.",
    pdfUrl: "https://osf.io/preprints/socarxiv/67uzb/",
    tags: ["Private Equity", "IPO", "Entrepreneurship"]
  },
  {
    id: "p8",
    title: "Venture Capital Contracts",
    authors: ["Michael Ewens", "Alex Gorbenko", "Arthur Korteweg"],
    journal: "Journal of Financial Economics",
    year: 2022,
    status: "Published",
    abstract: "We study the structure and evolution of venture capital contracts.",
    pdfUrl: "https://osf.io/preprints/socarxiv/hk38u/",
    tags: ["Venture Capital", "Contracts", "Corporate Finance"]
  },
  {
    id: "p9",
    title: "The Deregulation of the Private Equity Markets and the Decline in IPOs",
    authors: ["Michael Ewens", "Joan Farre-Mensa"],
    journal: "Review of Financial Studies",
    journalUrl: "https://academic.oup.com/rfs/advance-article-abstract/doi/10.1093/rfs/hhaa053/5835291",
    year: 2020,
    status: "Published",
    abstract: "We show how deregulation of private markets contributed to the decline in IPOs. Editor's Choice.",
    pdfUrl: "https://osf.io/preprints/socarxiv/67uzb/",
    tags: ["Regulation", "IPO", "Private Equity"]
  },
  {
    id: "p10",
    title: "Are Early Stage Investors Biased Against Women?",
    authors: ["Michael Ewens", "Rick Townsend"],
    journal: "Journal of Financial Economics",
    journalUrl: "https://www.sciencedirect.com/science/article/abs/pii/S0304405X19301758",
    year: 2020,
    status: "Published",
    abstract: "We study gender bias in early-stage venture capital investment decisions.",
    pdfUrl: "https://osf.io/preprints/socarxiv/x3syb/",
    tags: ["Gender", "Venture Capital", "Bias"]
  },
  {
    id: "p11",
    title: "Founder Replacement and Startup Performance",
    authors: ["Michael Ewens", "Matt Marx"],
    journal: "Review of Financial Studies",
    year: 2018,
    status: "Published",
    abstract: "We examine the causes and consequences of founder-CEO replacement in venture-backed startups.",
    pdfUrl: "https://ewens.sites.caltech.edu/documents/3660/exec-replace-vc.pdf",
    codeUrl: "https://github.com/michaelewens/noncompete_laws",
    tags: ["Founders", "Startups", "Corporate Governance"]
  },
  {
    id: "p12",
    title: "Cost of Experimentation and the Evolution of Venture Capital",
    authors: ["Michael Ewens", "Ramana Nanda", "Matthew Rhodes-Kropf"],
    journal: "Journal of Financial Economics",
    year: 2018,
    status: "Published",
    abstract: "We show how declining experimentation costs have transformed the venture capital industry.",
    pdfUrl: "https://ewens.sites.caltech.edu/documents/3654/vc_evolve-1.pdf",
    tags: ["Venture Capital", "Innovation", "Experimentation"]
  },
  {
    id: "p13",
    title: "Managing Performance Signals Through Delay: Evidence from Venture Capital",
    authors: ["Michael Ewens", "Indraneel Chakraborty"],
    journal: "Management Science",
    journalUrl: "http://pubsonline.informs.org/doi/full/10.1287/mnsc.2016.2662",
    year: 2017,
    status: "Published",
    abstract: "We study how venture capitalists strategically time fundraising to manage performance signals.",
    pdfUrl: "https://ewens.sites.caltech.edu/documents/3656/vc-delay.pdf",
    tags: ["Venture Capital", "Signaling", "Fundraising"]
  },
  {
    id: "p14",
    title: "Is the VC Partnership Greater than the Sum of its Partners?",
    authors: ["Michael Ewens", "Matthew Rhodes-Kropf"],
    journal: "Journal of Finance",
    journalUrl: "http://onlinelibrary.wiley.com/doi/10.1111/jofi.12249/abstract",
    year: 2015,
    status: "Published",
    abstract: "We decompose VC performance into partner skill and firm effects.",
    pdfUrl: "https://ewens.sites.caltech.edu/documents/3657/vc-partners.pdf",
    tags: ["Venture Capital", "Performance", "Human Capital"]
  },
  {
    id: "p15",
    title: "Statistical Discrimination or Prejudice? A Large Sample Field Experiment",
    authors: ["Michael Ewens", "Bryan Tomlin", "Liang Choon Wang"],
    journal: "Review of Economics and Statistics",
    journalUrl: "http://www.mitpressjournals.org/doi/abs/10.1162/REST_a_00365",
    year: 2014,
    status: "Published",
    abstract: "We use a large-scale field experiment to distinguish between statistical discrimination and prejudice.",
    pdfUrl: "https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=1816702",
    dataUrl: "http://thedata.harvard.edu/dvn/faces/study/StudyPage.xhtml?globalId=doi:10.7910/DVN/26410&studyListingIndex=0_bb1bba6601d1f75d6c9119a4be7d"
    tags: ["Discrimination", "Field Experiment", "Labor"]
  },
  {
    id: "p16",
    title: "The Price of Diversifiable Risk in Venture Capital and Private Equity",
    authors: ["Michael Ewens", "Charles Jones", "Matthew Rhodes-Kropf"],
    journal: "Review of Financial Studies",
    journalUrl: "http://rfs.oxfordjournals.org/content/26/8/1854.abstract",
    year: 2013,
    status: "Published",
    abstract: "We ask whether idiosyncratic risk is priced in VC and PE investments.",
    pdfUrl: "https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=342841",
    tags: ["Venture Capital", "Private Equity", "Asset Pricing"]
  },
  {
    id: "p18",
    title: "Local Journalism Under Private Equity Ownership",
    authors: ["Michael Ewens", "Arpit Gupta", "Sabrina Howell"],
    year: 2025,
    status: "Working Paper",
    abstract: "We examine the impacts of private equity ownership on local journalism.",
    pdfUrl: "https://osf.io/preprints/socarxiv/6ynf4",
    tags: ["Private Equity", "Media", "Journalism"]
  },
  {
    id: "p19",
    title: "Insider Financing and Venture Capital Returns",
    authors: ["Michael Ewens", "Matthew Rhodes-Kropf", "Ilya Strebulaev"],
    year: 2016,
    status: "Working Paper",
    abstract: "We study the role of insider financing in venture capital returns.",
    pdfUrl: "https://papers.ssrn.com/sol3/Delivery.cfm?abstractid=2849681",
    tags: ["Venture Capital", "Returns", "Insider Financing"]
  }
];

export const projects: Project[] = [
  {
    id: "pr1",
    title: "Startup Board Composition Data",
    description: "Composition of 7800 VC-backed startup boards from first VC financing to exit (or 2017). From Ewens and Malenko (2025), 'Board Dynamics over the Startup Lifecycle', Journal of Finance.",
    language: ["Data", "Stata"],
    url: "https://github.com/michaelewens/vc_backed_boards"
  },
  {
    id: "pr2",
    title: "Intangible Valuations from Purchase Price Allocations",
    description: "Acquired intangible valuations from Ewens, Peters, and Wang (2024). When a public firm acquires a significant target, it must disclose assets and liabilities in the purchase price allocation.",
    language: ["Data"],
    url: "https://github.com/michaelewens/Purchased-intangibles"
  },
  {
    id: "pr3",
    title: "Intangible Capital Stocks",
    description: "Parameter estimates for intangible capital accumulation and estimated knowledge and organization capital stocks. From Ewens, Peters and Wang (2024), 'Measuring Intangible Capital with Market Prices', Management Science.",
    language: ["Stata", "Code"],
    url: "https://github.com/michaelewens/Intangible-capital-stocks"
  },
  {
    id: "pr4",
    title: "Non-Compete Law Changes and Court Decisions",
    description: "State-level law changes in the U.S. from 1995-2016 to study the impact of founder replacement on startup outcomes. From Ewens and Marx (2017), 'Founder Replacement and Startup Performance', RFS.",
    language: ["Data", "Code"],
    url: "https://github.com/michaelewens/Non-compete-Law-Changes"
  },
  {
    id: "pr5",
    title: "Mapping SDC to Compustat, 1996-2023",
    description: "A mapping file between SDC's 'sdc_dealno' to 'gvkey'. Connects SDC's M&A database to Compustat using name and date matching with fuzzy string search.",
    language: ["Data"],
    url: "https://github.com/michaelewens/SDC-to-Compustat-Mapping"
  },
  {
    id: "pr6",
    title: "Venture Capital Revenue Reported by US Banks",
    description: "Data on U.S. bank 'venture capital revenue' used in 'Venture Capital and Startup Agglomeration' (Chen and Ewens 2023) to assess the importance of banking institutions as limited partners in VC.",
    language: ["Data"],
    url: "https://github.com/michaelewens/Banks-In-VC"
  },
  {
    id: "pr7",
    title: "Regulatory Public Float and 10-K Information",
    description: "Public float data from firms' 10-K filings disclosing the market value of outstanding common equity held by non-affiliates. From Ewens, Xiao and Xu (2023), 'Regulatory Costs of Being Public', JFE.",
    language: ["Data"],
    url: "https://github.com/michaelewens/public_float_regulation"
  },
  {
    id: "pr8",
    title: "10-K MD&A Sections and Parser",
    description: "Index file and code to process raw MD&A data from 10-K filings. Build your own panel database of public firm MD&A text. From Ewens, Peters and Wang (2024).",
    language: ["Python", "Data"],
    url: "https://github.com/michaelewens/MD-A-10-K-data"
  },
  {
    id: "pr9",
    title: "Form D Filings Events 1992-2008",
    description: "Form D filings data from a FOIA request with the SEC. Used in 'The Deregulation of the Private Equity Markets and the Decline in IPOs' by Ewens and Farre-Mensa (2020), RFS.",
    language: ["Data"],
    url: "https://github.com/michaelewens/Form-D-filing-events-1992-2008"
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
    title: "Private Equity Value Creation",
    institution: "Columbia Business School",
    level: "MBA",
    year: "2025–",
    syllabusUrl:"https://courses.business.columbia.edu/B8329"
  },
  {
    id: "c2",
    title: "Private Equity Field Study",
    institution: "Columbia Business School",
    level: "MBA",
    year: "2024–",
    syllabusUrl:"https://business.columbia.edu/privateequity/private-equity-field-study"
  },
  {
    id: "c3",
    title: "Private Equity Finance",
    institution: "Columbia Business School",
    level: "MBA",
    year: "2024–"
  },
  {
    id: "c4",
    title: "Private Equity Allocation",
    institution: "Columbia Business School",
    level: "MBA",
    year: "2024",
    syllabusUrl: "https://courses.business.columbia.edu/B8335"
  },
  {
    id: "c5",
    title: "Current Topics in Private Equity",
    institution: "Columbia Business School",
    level: "MBA",
    year: "2023–2024"
  },
  {
    id: "c6",
    title: "Research in Entrepreneurial Finance",
    institution: "Columbia Business School",
    level: "PhD",
    year: "2023–",
    syllabusUrl: "https://entrepreneurial.finance/"
  },
  {
    id: "c7",
    title: "Entrepreneurial Finance",
    institution: "Columbia Business School",
    level: "MBA",
    year: "2021, 2023, 2024"
  },
  {
    id: "c8",
    title: "Race and Gender in Entrepreneurial Finance",
    institution: "NBER Entrepreneurship Bootcamp",
    level: "PhD",
    year: "2023–2024",
    syllabusUrl: "https://www.nber.org/conferences/entrepreneurship-research-boot-camp-summer-2024"
  },
  {
    id: "c9",
    title: "Corporate Finance",
    institution: "Caltech",
    level: "Undergraduate",
    year: "2014–2019"
  },
  {
    id: "c10",
    title: "Venture Capital",
    institution: "Caltech",
    level: "Undergraduate",
    year: "2014–2019"
  },
  {
    id: "c11",
    title: "Applied Methods for the Social Sciences",
    institution: "Caltech",
    level: "PhD",
    year: "2014–2019"
  },
  {
    id: "c12",
    title: "Introduction to Financial Accounting",
    institution: "Caltech",
    level: "Undergraduate",
    year: "2016–2019"
  },
  {
    id: "c13",
    title: "New Venture Finance",
    institution: "UCSD Rady School of Management",
    level: "MBA",
    year: "2015"
  },
  {
    id: "c14",
    title: "Private Equity Finance",
    institution: "Carnegie Mellon Tepper",
    level: "MBA",
    year: "2014"
  },
  {
    id: "c15",
    title: "Venture Capital Finance",
    institution: "Carnegie Mellon Tepper",
    level: "MBA",
    year: "2010–2014"
  },
  {
    id: "c16",
    title: "Entrepreneurial Finance",
    institution: "Carnegie Mellon Tepper",
    level: "Undergraduate",
    year: "2010–2014"
  },
  {
    id: "c17",
    title: "Empirical Methods for Corporate Finance and Accounting",
    institution: "Carnegie Mellon Tepper",
    level: "PhD",
    year: "2011–2014"
  }
];

export const projectItems: ProjectItem[] = [
  {
    id: "proj1",
    title: "Gender Equity in Private Equity",
    description: "We are building a comprehensive database of private equity professionals, their demographics and career trajectories. The goal: to describe gender representation and understand the constraints faced by under-represented workers in the industry. The draft report was released in September 2024.",
    url: "https://genderequityinpe.com/"
  },
  {
    id: "proj2",
    title: "Blue Sky Law Data",
    description: "This website provides the background and data for the NSF-funded 'The Impact of Securities Regulation on Financial Development and Entrepreneurship'. The project aims to document the history of state securities laws from 1948 to 1980, characterize the stringency of those laws over time, and connect the laws' characteristics to economic outcomes.",
    url: "https://blueskylaws.org/"
  },
  {
    id: "proj3",
    title: "Summer PhD Workshop on Entrepreneurial Finance",
    description: "This week-long workshop follows the structure of the Entrepreneurial Finance Ph.D. course with modifications. We cover major topics from the 6-week in-person course and highlight key institutional details required for successful entrepreneurial finance research. Students have ample opportunities to interact with peers and participating faculty.",
    url: "https://entrepreneurial.finance/summer-phd-workshop-on-entrepreneurial-finance/"
  },
  {
    id: "proj4",
    title: "Entrepreneurial Finance: A PhD Course",
    description: "The course aims to provide an overview of modern research in entrepreneurial finance and, more importantly, provide the foundation for success in producing research: mastering institutional details. These include definitions, industry norms, regulations, laws, databases, disclosure rules, and more.",
    url: "https://entrepreneurial.finance/"
  },
  {
    id: "proj5",
    title: "Workshop on Entrepreneurial Finance and Innovation (WEFI)",
    description: "A virtual workshop (held on Mondays) featuring research in entrepreneurial finance and innovation. We also hold lectures and student-led conferences. Co-organizers are Camille Hebert (Univ. of Toronto), Song Ma (Yale) and Melanie Wallskog (Duke).",
    url: "https://workshop-efi.com/"
  },
  {
    id: "proj6",
    title: "Gender, Race and Entrepreneurship Lecture",
    description: "A review of the economics of discrimination with a focus on the unique ways it manifests itself in firm formation and financing decisions. The presentation covers recent advances in testing alternative explanations for differential treatment by race and proposes a framework for future research.",
    url: "https://www.workshop-efi.com/lecture-series/gender-race-and-entrepreneurship"
  },
  {
    id: "proj7",
    title: "Race and Gender in Entrepreneurial Finance",
    description: "This website is the companion to 'Race and Gender in Entrepreneurial Finance' prepared for the Handbook on the Economics of Corporate Finance. The site details statistics related to race and gender in entrepreneurship, data used in the paper, references, and teaching slides.",
    url: "https://foundinggaps.com/"
  },
  {
    id: "proj8",
    title: "Columbia Private Equity Conference",
    description: "This two-day conference (formerly the 'Southern California Private Equity Conference') brings together leading academics studying private equity, venture capital and entrepreneurial finance. Co-organizers are Tabina Babina (Columbia), Song Ma (Yale), and Emmanuel Yimfor (Columbia).",
    url: "https://columbiapeconference.com/"
  },
  {
    id: "proj9",
    title: "Private or Public Equity?",
    description: "This website is the companion to 'Private or Public Equity? The Evolving Entrepreneurial Finance Landscape' joint with Joan Farre-Mensa. The site provides detail on the data used in the paper, references, presentation slides and teaching slides.",
    url: "https://privatepublicmkts.com/"
  },
  {
    id: "proj10",
    title: "Website Advice for Ph.D. Job Candidates",
    description: "Recruiting season for econ and finance PhDs is about preparing your job market paper, writing your research statement, and practicing your job talk. You should also have a website, but not just any website. Email me for slides that I made for my students that job market candidates may find helpful.",
    url: "mailto:michael.ewens@columbia.edu"
  }
];
