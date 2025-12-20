import Navigation from "@/components/Navigation";
import { Button } from "@/components/ui/button";
import { Download, Building2, Badge, MapPin, GraduationCap, BookOpen, FileText, Award, Edit, Users, Briefcase } from "lucide-react";

export default function CV() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main className="pt-32 pb-20 px-6 container mx-auto max-w-4xl">
        <header className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-end gap-6 border-b border-border pb-8">
          <div>
            <h1 className="font-heading text-5xl md:text-6xl font-bold mb-2">Curriculum Vitae</h1>
            <p className="text-xl text-muted-foreground">Michael Ewens</p>
          </div>
          <a href="/attached_assets/ewens_cv2025.pdf" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="rounded-none gap-2 bg-primary hover:bg-primary/90 text-primary-foreground font-mono uppercase tracking-wider">
              <Download className="h-4 w-4" /> Download PDF
            </Button>
          </a>
        </header>

        {/* Contact Information */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <MapPin className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">Contact Information</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4 text-muted-foreground pl-9">
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
        </section>

        {/* Academic Positions Held */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Building2 className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">Academic Positions Held</h2>
          </div>
          <div className="space-y-4 pl-9">
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">David L. and Elsie M. Dodd Professor of Finance</p>
                <p className="text-muted-foreground text-sm">Columbia Business School</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2022 – present</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">Prof. of Finance and Entrepreneurship</p>
                <p className="text-muted-foreground text-sm">California Institute of Technology</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2019 – 2022</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">Assoc. Prof. of Finance and Entrepreneurship</p>
                <p className="text-muted-foreground text-sm">California Institute of Technology</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2014 – 2019</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">Assistant Professor of Finance and Entrepreneurship</p>
                <p className="text-muted-foreground text-sm">Tepper School of Business, Carnegie Mellon University</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2010 – 2014</span>
            </div>
          </div>
        </section>

        {/* Affiliations */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Badge className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">Affiliations</h2>
          </div>
          <div className="space-y-4 pl-9">
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">Private Equity Program, Columbia Business School</p>
                <p className="text-muted-foreground text-sm">Co-director</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2023 – present</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">National Bureau of Economic Research</p>
                <p className="text-muted-foreground text-sm">Research Associate</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2019 – present</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">Institute for Private Capital</p>
                <p className="text-muted-foreground text-sm">Private Equity Research Consortium Fellow</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2018 – present</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">Millstein Center, Columbia Law School</p>
                <p className="text-muted-foreground text-sm">Millstein Center Faculty Fellow</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2022 – present</span>
            </div>
          </div>
        </section>

        {/* Visiting Positions */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">Visiting Positions</h2>
          </div>
          <div className="space-y-4 pl-9">
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">Visiting Professor</p>
                <p className="text-muted-foreground text-sm">Yale University School of Management</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">Fall 2021</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">Senior Research Scholar</p>
                <p className="text-muted-foreground text-sm">Yale Law School</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">Fall 2021</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">Visiting Associate Professor</p>
                <p className="text-muted-foreground text-sm">Dartmouth College, Tuck School of Business</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">Fall 2018</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">Visiting Associate Professor</p>
                <p className="text-muted-foreground text-sm">UCSD Rady School of Management</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">Spring 2015</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">Visiting Scholar</p>
                <p className="text-muted-foreground text-sm">Stanford University GSB</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">Spring 2014</span>
            </div>
          </div>
        </section>

        {/* Non-Academic Positions */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Briefcase className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">Non-Academic Positions Held</h2>
          </div>
          <div className="space-y-4 pl-9">
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">Quantitative Advisor</p>
                <p className="text-muted-foreground text-sm">Correlation Ventures, San Diego, CA</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2006 – present</span>
            </div>
          </div>
        </section>

        {/* Education */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">Education</h2>
          </div>
          <div className="space-y-4 pl-9">
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">Ph.D., Economics</p>
                <p className="text-muted-foreground text-sm">University of California, San Diego</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2010</span>
            </div>
            <div className="flex flex-col sm:flex-row justify-between gap-1">
              <div>
                <p className="font-medium">B.A., Economics and Mathematics</p>
                <p className="text-muted-foreground text-sm">Washington University in St. Louis</p>
              </div>
              <span className="font-mono text-sm text-muted-foreground shrink-0">2004</span>
            </div>
          </div>
        </section>

        {/* Publications */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <BookOpen className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">Publications</h2>
          </div>
          <div className="space-y-4 pl-9">
            <p className="text-muted-foreground">"Venture Capital and Startup Agglomeration", 2025, <span className="italic">Journal of Finance</span> (with Jun Chen)</p>
            <p className="text-muted-foreground">"Board Dynamics over the Startup Lifecycle", 2024 Forthcoming, <span className="italic">Journal of Finance</span> (with Nadya Malenko)</p>
            <p className="text-muted-foreground">"Founder-CEO Compensation and Selection into Venture Capital-Backed Entrepreneurship" (with Ramana Nanda and Christopher Stanton), <span className="italic">The Journal of Finance</span> 79.5 (2024): 3361-3405.</p>
            <p className="text-muted-foreground">"Regulatory Costs of Being Public: Evidence from Bunching Estimation", 2024, <span className="italic">Journal of Financial Economics</span>, 153 (with Kairong Xiao and Ting Xu)</p>
            <p className="text-muted-foreground">"Measuring Intangible Capital with Market Prices", (with Ryan Peters and Sean Wang) <span className="italic">Management Science</span> 71.1 (2024): 407-427.</p>
            <p className="text-muted-foreground">"Race and Gender in Entrepreneurial Finance" (prepared for the <span className="italic">Handbook of the Economics of Corporate Finance, Private Equity and Entrepreneurial Finance</span> (Vol. 1), Editors Espen Eckbo, Gordon Phillips and Morten Sorensen)</p>
            <p className="text-muted-foreground">"Private or Public Equity? The Evolving Entrepreneurial Finance Landscape" (with Joan Farre-Mensa) <span className="italic">Annual Review of Financial Economics</span> 2022 14:1, 271-293.</p>
            <p className="text-muted-foreground">"Venture Capital Contracts" (with Alexander Gorbenko and Arthur Korteweg) <span className="italic">Journal of Financial Economics</span> 143.1 (2022):131–158.</p>
            <p className="text-muted-foreground">"The Deregulation of the Private Equity Markets and the Decline in IPOs" (with Joan Farre-Mensa), <span className="italic">Review of Financial Studies</span> 33(12): 5463–5509. [Editor's Choice]</p>
            <p className="text-muted-foreground">"Are Early Stage Investors Biased Against Women?" (with Richard Townsend) <span className="italic">Journal of Financial Economics</span> 135.3 (2020):653–677.</p>
            <p className="text-muted-foreground">"Cost of Experimentation and the Evolution of Venture Capital" (with Ramana Nanda and Matthew Rhodes-Kropf) <span className="italic">Journal of Financial Economics</span> 128.3 (2018): 422-442.</p>
            <p className="text-muted-foreground">"Founder Replacement and Startup Performance" (with Matt Marx) <span className="italic">Review of Financial Studies</span> 31.4 (2018): 1532–1565.</p>
            <p className="text-muted-foreground">"Managing Performance Signals Through Delay: Evidence From Venture Capital Fundraising" (with Indraneel Chakraborty) <span className="italic">Management Science</span> 64.6 (2017): 2875-2900.</p>
            <p className="text-muted-foreground">"Is the VC Partnership More than the Sum of its Partners?" (with M. Rhodes-Kropf) <span className="italic">Journal of Finance</span> 70.3 (2015): 1081-1114.</p>
            <p className="text-muted-foreground">"Statistical Discrimination or Racial Prejudice? A Large Sample Field Study" (with Bryan Tomlin and Liang Wang) <span className="italic">Review of Economics and Statistics</span> 96.1 (2014): 119-134.</p>
            <p className="text-muted-foreground">"The Price of Diversifiable Risk in Venture Capital and Private Equity" (with Charles Jones and Matthew Rhodes-Kropf) <span className="italic">Review of Financial Studies</span> 26.8 (2013): 1854-1889.</p>
          </div>
        </section>

        {/* Working Papers */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">Working Papers</h2>
          </div>
          <div className="space-y-4 pl-9">
            <p className="text-muted-foreground">"Corporate Hierarchy" (with Xavier Giroud)</p>
            <p className="text-muted-foreground">"Local Journalism Under Private Equity Ownership", 2023 Revise & resubmit, <span className="italic">Review of Financial Studies</span> (with Arpit Gupta and Sabrina Howell)</p>
            <p className="text-muted-foreground">"Irreplaceable Venture Capitalists", 2023, (with Denis Sosyura)</p>
            <p className="text-muted-foreground">"Firm Age and Invention: A New Public-Access Dataset", 2024 (with Matt Marx)</p>
          </div>
        </section>

        {/* Other Publications */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">Other Publications</h2>
          </div>
          <div className="space-y-4 pl-9">
            <p className="text-muted-foreground">"JCF special issue on private equity editorial," <span className="italic">Journal of Corporate Finance</span>, Volume 81, 2023.</p>
            <p className="text-muted-foreground">"Comment on 'Venture Capital and the Transformation of Private R&D for Agriculture: A First Look.'" <span className="italic">Economics of Research and Innovation in Agriculture</span>. University of Chicago Press, In Press.</p>
          </div>
        </section>

        {/* Cases */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <FileText className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">Cases</h2>
          </div>
          <div className="space-y-4 pl-9">
            <p className="text-muted-foreground">"SkinnyPop: Just Hot Air or a Great Investment?", Columbia Caseworks, May 2025 (Case 250315).</p>
            <p className="text-muted-foreground">"Symeres, The Pharmaceutical Industry, and The Case for (and Against) a Growth Buyout", Columbia Caseworks, October 2025 (Case TBD).</p>
            <p className="text-muted-foreground">"Private Equity's New Frontier: The Individual Investor Market", Columbia Caseworks, September 2025 (Case TBD).</p>
          </div>
        </section>

        {/* Grants and Awards */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Award className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">Grants and Awards</h2>
          </div>
          <ul className="space-y-3 pl-9 list-disc list-inside text-muted-foreground">
            <li>Best paper, Finance Down Under Conference, University of Melbourne, 2024.</li>
            <li>Best paper, 31st Utah Winter Finance conference, 2022. "Regulatory Costs of Being Public: Evidence from Bunching Estimation"</li>
            <li>2021 CICF Conference Best Paper Award "Regulatory Costs of Being Public: Evidence from Bunching Estimation" (joint w/ Kairong Xiao and Ting Xu)</li>
            <li>2021 Distinguished Referee, Review of Financial Studies</li>
            <li>Editor's Choice (Review of Financial Studies) "The Deregulation of the Private Equity Markets and the Decline in IPOs" (with Joan Farre-Mensa)</li>
            <li>National Science Foundation Grant SES-1949582 "The Impact of Securities Regulation on Financial Development and Entrepreneurship", 2020–2023</li>
            <li>"Venture Capital Contracts": Winner of Tuck School Outstanding Paper in Venture Capital and Private Equity (Sponsor), Midwest Finance Association 2019.</li>
            <li>Best Discussant Prize, ASU Sonoran Winter Finance Conference, 2018</li>
            <li>Kauffman Junior Faculty Fellowship in Entrepreneurship Research, 2013–14</li>
            <li>Berkman Junior Faculty Development Grant, CMU, 2013</li>
          </ul>
        </section>

        {/* Editorial Positions */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Edit className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">Editorial Positions</h2>
          </div>
          <div className="space-y-3 pl-9 text-muted-foreground">
            <p>Associate Editor, <span className="italic">Management Science</span>, 2024–</p>
            <p>Associate Editor, <span className="italic">Journal of Financial Economics</span>, 2021–</p>
            <p>Associate Editor, <span className="italic">Journal of Corporate Finance</span>, 2021–</p>
            <p>Associate Editor, <span className="italic">Review of Financial Studies</span>, 2022–2025</p>
            <p>Co-Editor, <span className="italic">Journal of Economics & Management Strategy</span> 2020 – 2024</p>
            <p>Guest Editor for special issue "Private Equity", <span className="italic">Journal of Corporate Finance</span> (2022)</p>
          </div>
        </section>

        {/* Teaching Experience */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">Teaching Experience</h2>
          </div>
          <div className="space-y-6 pl-9">
            <div>
              <h3 className="font-bold text-lg mb-2">Columbia Business School</h3>
              <ul className="space-y-1 text-muted-foreground text-sm">
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
              <h3 className="font-bold text-lg mb-2">National Bureau of Economic Research Entrepreneurship Bootcamp</h3>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>PhD lecture "Race and Gender in Entrepreneurial Finance", 2023–2024.</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Caltech</h3>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>Corporate Finance (undergraduate), Venture Capital (undergraduate), Applied Methods for the Social Sciences (PhD), Introduction to Financial Accounting (undergraduate)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">UCSD Rady School of Management</h3>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>New Venture Finance (MBA)</li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-2">Tepper School of Business, Carnegie Mellon University</h3>
              <ul className="space-y-1 text-muted-foreground text-sm">
                <li>Private Equity Finance (MBA), Venture Capital Finance (MBA), Entrepreneurial Finance (BA), Empirical Methods for Corporate Finance and Accounting (PhD)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Service and Activities */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">Service and Activities</h2>
          </div>
          <div className="space-y-3 pl-9 text-muted-foreground text-sm">
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
        </section>

        {/* PhD Supervision */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <Users className="h-6 w-6 text-primary" />
            <h2 className="font-heading text-2xl font-bold">PhD Supervision</h2>
          </div>
          <div className="space-y-3 pl-9 text-muted-foreground">
            <p>Yuqi Zhang (Columbia Business School, expected 2026), chair.</p>
            <p>Jerry Shi (Columbia University, Economics, expected 2026), committee member.</p>
            <p>Jeremias Huber (Columbia Business School, 2025), chair.</p>
          </div>
        </section>

      </main>
    </div>
  );
}
