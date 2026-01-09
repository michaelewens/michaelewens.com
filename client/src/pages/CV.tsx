import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Download, Building2, Badge, MapPin, GraduationCap, BookOpen, FileText, Award, Edit, Users, Briefcase } from "lucide-react";

export default function CV() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-primary/20">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 container mx-auto max-w-4xl">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-8">
          <div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-2 text-foreground">Curriculum Vitae</h1>
            <p className="text-xl text-muted-foreground">Michael Ewens</p>
          </div>
          <a href="/attached_assets/ewens_cv2025.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-none gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-wider">
              <Download className="h-4 w-4" /> Download PDF
            </Button>
          </a>
        </header>

        {/* Contact Information */}
        <div className="mb-10">
          <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
            <MapPin className="h-6 w-6 text-primary" /> Contact Information
          </h2>
          <div className="grid md:grid-cols-2 gap-4 text-muted-foreground">
            <div>
              <p>Columbia Business School</p>
              <p>Henry Kravis Hall, 732</p>
              <p>665 W 130th St</p>
              <p>New York, NY 10027 USA</p>
            </div>
            <div>
              <p>+1-619-512-3820</p>
              <p>michael.ewens@columbia.edu</p>
              <p>https://michaelewens.com</p>
            </div>
          </div>
        </div>

        {/* Academic Positions Held */}
        <div className="border-t border-border pt-10 mb-10">
          <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
            <Building2 className="h-6 w-6 text-primary" /> Academic Positions Held
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">David L. and Elsie M. Dodd Professor of Finance</h3>
                <p className="text-muted-foreground">Columbia Business School</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2022 – present</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">Prof. of Finance and Entrepreneurship</h3>
                <p className="text-muted-foreground">California Institute of Technology</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2019 – 2022</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">Assoc. Prof. of Finance and Entrepreneurship</h3>
                <p className="text-muted-foreground">California Institute of Technology</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2014 – 2019</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">Assistant Professor of Finance and Entrepreneurship</h3>
                <p className="text-muted-foreground">Tepper School of Business, Carnegie Mellon University</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2010 – 2014</span>
            </div>
          </div>
        </div>

        {/* Affiliations */}
        <div className="border-t border-border pt-10 mb-10">
          <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
            <Badge className="h-6 w-6 text-primary" /> Affiliations
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">Private Equity Program, Columbia Business School</h3>
                <p className="text-muted-foreground">Co-director</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2023 – present</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">AFA Junior Faculty Mentorship Program</h3>
                <p className="text-muted-foreground">Co-director</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2025 – present</span>
            </div>
            {/* AIF Global - uncomment when ready to publish
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">AIF Global</h3>
                <p className="text-muted-foreground">Academic Advisory Board Member</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2026 – present</span>
            </div>
            */}
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">National Bureau of Economic Research</h3>
                <p className="text-muted-foreground">Research Associate</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2019 – present</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">Institute for Private Capital</h3>
                <p className="text-muted-foreground">Private Equity Research Consortium Fellow</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2018 – present</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">Millstein Center, Columbia Law School</h3>
                <p className="text-muted-foreground">Millstein Center Faculty Fellow</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2022 – present</span>
            </div>
          </div>
        </div>

        {/* Visiting Positions */}
        <div className="border-t border-border pt-10 mb-10">
          <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" /> Visiting Positions
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">Visiting Professor</h3>
                <p className="text-muted-foreground">Yale University School of Management</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">Fall 2021</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">Senior Research Scholar</h3>
                <p className="text-muted-foreground">Yale Law School</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">Fall 2021</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">Visiting Associate Professor</h3>
                <p className="text-muted-foreground">Dartmouth College, Tuck School of Business</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">Fall 2018</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">Visiting Associate Professor</h3>
                <p className="text-muted-foreground">UCSD Rady School of Management</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">Spring 2015</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">Visiting Scholar</h3>
                <p className="text-muted-foreground">Stanford University GSB</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">Spring 2014</span>
            </div>
          </div>
        </div>

        {/* Non-Academic Positions */}
        <div className="border-t border-border pt-10 mb-10">
          <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
            <Briefcase className="h-6 w-6 text-primary" /> Non-Academic Positions Held
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">Quantitative Advisor</h3>
                <p className="text-muted-foreground">Correlation Ventures, San Diego, CA</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2006 – present</span>
            </div>
          </div>
        </div>

        {/* Education */}
        <div className="border-t border-border pt-10 mb-10">
          <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" /> Education
          </h2>
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">Ph.D., Economics</h3>
                <p className="text-muted-foreground">University of California, San Diego</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2010</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <div>
                <h3 className="font-bold text-lg text-foreground">B.A., Economics and Mathematics</h3>
                <p className="text-muted-foreground">Washington University in St. Louis</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2004</span>
            </div>
          </div>
        </div>

        {/* Publications */}
        <div className="border-t border-border pt-10 mb-10">
          <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
            <BookOpen className="h-6 w-6 text-primary" /> Publications
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">"Venture Capital and Startup Agglomeration", 2025, <span className="italic">Journal of Finance</span> (with Jun Chen)</p>
            <p className="text-muted-foreground leading-relaxed">"Board Dynamics over the Startup Lifecycle", 2024 Forthcoming, <span className="italic">Journal of Finance</span> (with Nadya Malenko)</p>
            <p className="text-muted-foreground leading-relaxed">"Founder-CEO Compensation and Selection into Venture Capital-Backed Entrepreneurship" (with Ramana Nanda and Christopher Stanton), <span className="italic">The Journal of Finance</span> 79.5 (2024): 3361-3405.</p>
            <p className="text-muted-foreground leading-relaxed">"Regulatory Costs of Being Public: Evidence from Bunching Estimation", 2024, <span className="italic">Journal of Financial Economics</span>, 153 (with Kairong Xiao and Ting Xu)</p>
            <p className="text-muted-foreground leading-relaxed">"Measuring Intangible Capital with Market Prices", (with Ryan Peters and Sean Wang) <span className="italic">Management Science</span> 71.1 (2024): 407-427.</p>
            <p className="text-muted-foreground leading-relaxed">"Race and Gender in Entrepreneurial Finance" (prepared for the <span className="italic">Handbook of the Economics of Corporate Finance, Private Equity and Entrepreneurial Finance</span> (Vol. 1), Editors Espen Eckbo, Gordon Phillips and Morten Sorensen)</p>
            <p className="text-muted-foreground leading-relaxed">"Private or Public Equity? The Evolving Entrepreneurial Finance Landscape" (with Joan Farre-Mensa) <span className="italic">Annual Review of Financial Economics</span> 2022 14:1, 271-293.</p>
            <p className="text-muted-foreground leading-relaxed">"Venture Capital Contracts" (with Alexander Gorbenko and Arthur Korteweg) <span className="italic">Journal of Financial Economics</span> 143.1 (2022):131–158.</p>
            <p className="text-muted-foreground leading-relaxed">"The Deregulation of the Private Equity Markets and the Decline in IPOs" (with Joan Farre-Mensa), <span className="italic">Review of Financial Studies</span> 33(12): 5463–5509. [Editor's Choice]</p>
            <p className="text-muted-foreground leading-relaxed">"Are Early Stage Investors Biased Against Women?" (with Richard Townsend) <span className="italic">Journal of Financial Economics</span> 135.3 (2020):653–677.</p>
            <p className="text-muted-foreground leading-relaxed">"Cost of Experimentation and the Evolution of Venture Capital" (with Ramana Nanda and Matthew Rhodes-Kropf) <span className="italic">Journal of Financial Economics</span> 128.3 (2018): 422-442.</p>
            <p className="text-muted-foreground leading-relaxed">"Founder Replacement and Startup Performance" (with Matt Marx) <span className="italic">Review of Financial Studies</span> 31.4 (2018): 1532–1565.</p>
            <p className="text-muted-foreground leading-relaxed">"Managing Performance Signals Through Delay: Evidence From Venture Capital Fundraising" (with Indraneel Chakraborty) <span className="italic">Management Science</span> 64.6 (2017): 2875-2900.</p>
            <p className="text-muted-foreground leading-relaxed">"Is the VC Partnership More than the Sum of its Partners?" (with M. Rhodes-Kropf) <span className="italic">Journal of Finance</span> 70.3 (2015): 1081-1114.</p>
            <p className="text-muted-foreground leading-relaxed">"Statistical Discrimination or Racial Prejudice? A Large Sample Field Study" (with Bryan Tomlin and Liang Wang) <span className="italic">Review of Economics and Statistics</span> 96.1 (2014): 119-134.</p>
            <p className="text-muted-foreground leading-relaxed">"The Price of Diversifiable Risk in Venture Capital and Private Equity" (with Charles Jones and Matthew Rhodes-Kropf) <span className="italic">Review of Financial Studies</span> 26.8 (2013): 1854-1889.</p>
          </div>
        </div>

        {/* Working Papers */}
        <div className="border-t border-border pt-10 mb-10">
          <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" /> Working Papers
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">"Corporate Hierarchy" (with Xavier Giroud)</p>
            <p className="text-muted-foreground leading-relaxed">"Local Journalism Under Private Equity Ownership", 2023 Revise & resubmit, <span className="italic">Review of Financial Studies</span> (with Arpit Gupta and Sabrina Howell)</p>
            <p className="text-muted-foreground leading-relaxed">"Irreplaceable Venture Capitalists", 2023, (with Denis Sosyura)</p>
            <p className="text-muted-foreground leading-relaxed">"Firm Age and Invention: A New Public-Access Dataset", 2024 (with Matt Marx)</p>
          </div>
        </div>

        {/* Other Publications */}
        <div className="border-t border-border pt-10 mb-10">
          <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" /> Other Publications
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">"JCF special issue on private equity editorial," <span className="italic">Journal of Corporate Finance</span>, Volume 81, 2023.</p>
            <p className="text-muted-foreground leading-relaxed">"Comment on 'Venture Capital and the Transformation of Private R&D for Agriculture: A First Look.'" <span className="italic">Economics of Research and Innovation in Agriculture</span>. University of Chicago Press, In Press.</p>
          </div>
        </div>

        {/* Cases */}
        <div className="border-t border-border pt-10 mb-10">
          <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
            <FileText className="h-6 w-6 text-primary" /> Cases
          </h2>
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">"SkinnyPop: Just Hot Air or a Great Investment?", Columbia Caseworks, May 2025 (Case 250315).</p>
            <p className="text-muted-foreground leading-relaxed">"Symeres, The Pharmaceutical Industry, and The Case for (and Against) a Growth Buyout", Columbia Caseworks, October 2025 (Case TBD).</p>
            <p className="text-muted-foreground leading-relaxed">"Private Equity's New Frontier: The Individual Investor Market", Columbia Caseworks, September 2025 (Case TBD).</p>
          </div>
        </div>

        {/* Grants and Awards */}
        <div className="border-t border-border pt-10 mb-10">
          <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
            <Award className="h-6 w-6 text-primary" /> Grants and Awards
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-foreground font-medium">Best paper, Finance Down Under Conference, University of Melbourne</p>
              <span className="font-mono text-sm text-muted-foreground">2024</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-foreground font-medium">Best paper, 31st Utah Winter Finance conference</p>
              <span className="font-mono text-sm text-muted-foreground">2022</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-foreground font-medium">CICF Conference Best Paper Award</p>
              <span className="font-mono text-sm text-muted-foreground">2021</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-foreground font-medium">Distinguished Referee, Review of Financial Studies</p>
              <span className="font-mono text-sm text-muted-foreground">2021</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-foreground font-medium">Editor's Choice (Review of Financial Studies)</p>
              <span className="font-mono text-sm text-muted-foreground">2020</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-foreground font-medium">National Science Foundation Grant SES-1949582</p>
              <span className="font-mono text-sm text-muted-foreground">2020–2023</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-foreground font-medium">Tuck School Outstanding Paper in VC and PE, Midwest Finance Association</p>
              <span className="font-mono text-sm text-muted-foreground">2019</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-foreground font-medium">Best Discussant Prize, ASU Sonoran Winter Finance Conference</p>
              <span className="font-mono text-sm text-muted-foreground">2018</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-foreground font-medium">Kauffman Junior Faculty Fellowship in Entrepreneurship Research</p>
              <span className="font-mono text-sm text-muted-foreground">2013–14</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-foreground font-medium">Berkman Junior Faculty Development Grant, CMU</p>
              <span className="font-mono text-sm text-muted-foreground">2013</span>
            </div>
          </div>
        </div>

        {/* Editorial Positions */}
        <div className="border-t border-border pt-10 mb-10">
          <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
            <Edit className="h-6 w-6 text-primary" /> Editorial Positions
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-muted-foreground">Associate Editor, <span className="italic">Management Science</span></p>
              <span className="font-mono text-sm text-muted-foreground">2024–</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-muted-foreground">Associate Editor, <span className="italic">Journal of Financial Economics</span></p>
              <span className="font-mono text-sm text-muted-foreground">2021–</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-muted-foreground">Associate Editor, <span className="italic">Journal of Corporate Finance</span></p>
              <span className="font-mono text-sm text-muted-foreground">2021–</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-muted-foreground">Associate Editor, <span className="italic">Review of Financial Studies</span></p>
              <span className="font-mono text-sm text-muted-foreground">2022–2025</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-muted-foreground">Co-Editor, <span className="italic">Journal of Economics & Management Strategy</span></p>
              <span className="font-mono text-sm text-muted-foreground">2020–2024</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-muted-foreground">Guest Editor for special issue "Private Equity", <span className="italic">Journal of Corporate Finance</span></p>
              <span className="font-mono text-sm text-muted-foreground">2022</span>
            </div>
          </div>
        </div>

        {/* Teaching Experience */}
        <div className="border-t border-border pt-10 mb-10">
          <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
            <GraduationCap className="h-6 w-6 text-primary" /> Teaching Experience
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="font-bold text-lg text-foreground mb-3">Columbia Business School</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Private Equity Value Creation (Scheduled 2025–, MBA elective)</li>
                <li>Private Equity Field Study (2024–, MBA elective)</li>
                <li>Private Equity Finance (2024–, MBA elective)</li>
                <li>Private Equity Allocation (2024, MBA elective)</li>
                <li>Current Topics in Private Equity (2023–2024, MBA elective)</li>
                <li>Research in Entrepreneurial Finance (2023–, PhD)</li>
                <li>Entrepreneurial Finance (2024, MBA elective; 2021, 2023 MBA, co-taught with Glenn Hubbard)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-3">National Bureau of Economic Research Entrepreneurship Bootcamp</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>PhD lecture "Race and Gender in Entrepreneurial Finance", 2023–2024.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-3">Caltech</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Corporate Finance (undergraduate), Venture Capital (undergraduate), Applied Methods for the Social Sciences (PhD), Introduction to Financial Accounting (undergraduate)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-3">UCSD Rady School of Management</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>New Venture Finance (MBA)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg text-foreground mb-3">Tepper School of Business, Carnegie Mellon University</h3>
              <ul className="space-y-2 text-muted-foreground">
                <li>Private Equity Finance (MBA), Venture Capital Finance (MBA), Entrepreneurial Finance (BA), Empirical Methods for Corporate Finance and Accounting (PhD)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Service and Activities */}
        <div className="border-t border-border pt-10 mb-10">
          <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" /> Service and Activities
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>Organizer: Summer PhD Workshop on Entrepreneurial Finance (Imperial College, 2024; Dauphine, 2025).</p>
            <p>Co-organizer (with Emmanuel Yimfor): Columbia Private Equity Conference, 2023–present.</p>
            <p>Co-organizer (with Camille Hebert, Song Ma and Melanie Wallskog): Workshop on Entrepreneurial Finance and Innovation (virtual), 2020–present.</p>
            <p>Co-organizer (with Arthur Korteweg, Rick Townsend and Xinxin Wang): Southern California Private Equity Finance Conference, 2015–2022.</p>
            <p>Private Equity Research Consortium Fellow, 2018–present.</p>
            <p>Associate Program Chair, Western Finance Association 2019–</p>
            <p>European Finance Association, PhD lecture "Private Equity", 2026</p>
            <p>Program Committee member: UNSW Corporate Finance Workshop 2025–, HKUST Finance Symposium 2025–, UIC Finance Conference 2024–, SFS Asia Pacific 2022–, Midwest Finance Association 2016–, European Finance Association 2018–, Washington University Corporate Finance and Financial Intermediation 2019–, SFS Cavalcade 2021–, UK Finance Conference 2021–, FOM Conference 2020–, Mitsui Finance Symposium 2023–, UIC Finance Conference 2023–, FIRS 2024–, European FMA 2025–, 2025 GSU-MS AI and FinTech conference, RCFS/RAPS Europe Conference.</p>
            <p className="pt-2">Ad-hoc referee: Journal of Finance, Journal of Financial Economics, Review of Financial Studies, American Economic Review, Journal of Political Economy, Quarterly Journal of Economics, Review of Economic Studies, Review of Economics and Statistics, Management Science, Review of Finance, Journal of Banking and Finance, Journal of Corporate Finance, Journal of Urban Economics, Economic Journal, European Economic Review, Journal of Labor Economics, Journal of Economics & Management Strategy, Journal of Finance and Quantitative Analysis, Journal of Human Resources, Science Advances, Review of Accounting Studies, The Accounting Review.</p>
          </div>
        </div>

        {/* PhD Supervision */}
        <div className="border-t border-border pt-10">
          <h2 className="font-heading text-3xl font-bold mb-6 flex items-center gap-3">
            <Users className="h-6 w-6 text-primary" /> PhD Supervision
          </h2>
          <div className="space-y-4">
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-muted-foreground">Yuqi Zhang (Columbia Business School, expected 2026)</p>
              <span className="font-mono text-sm text-muted-foreground">Chair</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-muted-foreground">Jerry Shi (Columbia University, Economics, expected 2026)</p>
              <span className="font-mono text-sm text-muted-foreground">Committee member</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-muted-foreground">Jeremias Huber (Columbia Business School, 2025. IFC)</p>
              <span className="font-mono text-sm text-muted-foreground">Chair</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between sm:items-baseline gap-1">
              <p className="text-muted-foreground">Jun Chen (Caltech, 2019. Univ. IL, Chicago)</p>
              <span className="font-mono text-sm text-muted-foreground">Co-chair</span>
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </div>
  );
}
