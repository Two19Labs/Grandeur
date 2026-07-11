import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { FileText } from "lucide-react";

// ─── ADD NEW RESOURCES HERE ───────────────────────────────────────────────────
// Categories: "Industry Report" | "Company Report" | "Sector Report" | "Casebook" | "Framework" | "Guide"
const RESOURCES = [
  {
    title: "Industry Primer 2026",
    category: "Industry Report",
    description: "Grandeur's flagship industry primer covering key sectors, business frameworks, and market insights to prepare you for consulting and case competitions.",
    file: "/industry-primer-2026.pdf",
    tag: "Industry Report",
  },
  {
    title: "Indian EdTech Industry Report",
    category: "Industry Report",
    description: "A comprehensive analysis of India's EdTech revolution - covering market growth, post-pandemic hurdles, sector snapshots, evolving tech landscape, investor trends, and future outlook. January 2025.",
    file: "/edtech-industry-report.pdf",
    tag: "Industry Report",
  },
  {
    title: "Pharmaceutical Industry Analysis",
    category: "Industry Report",
    description: "An in-depth analysis of India's pharmaceutical sector covering SWOT, Porter's Five Forces, major trends, COVID impact, revenue model, government initiatives, and key market players.",
    file: "/pharmaceutical-industry-analysis.pdf",
    tag: "Industry Report",
  },
  {
    title: "Meesho - Company Analysis",
    category: "Company Report",
    description: "A detailed breakdown of Meesho's journey from Fashnear to a social commerce giant - covering its business model, revenue streams, financials, competitor analysis, and traffic rankings.",
    file: "/meesho-company-analysis.pdf",
    tag: "Company Report",
  },
  {
    title: "Meta - Company Analysis",
    category: "Company Report",
    description: "A structured company analysis of Meta Platforms covering its timeline, business and revenue models, industry analysis, SWOT, future outlook, and financial statements.",
    file: "/meta-company-analysis.pdf",
    tag: "Company Report",
  },
  {
    title: "Groww - Company Report",
    category: "Company Report",
    description: "An analysis of Groww's business model, PESTEL framework, competitor landscape, and future prospects in India's share market and FinTech sector.",
    file: "/groww-company-report.pdf",
    tag: "Company Report",
  },
  {
    title: "AI in Health Industry",
    category: "Industry Report",
    description: "A deep dive into how AI is transforming healthcare — covering medical diagnosis, drug discovery, clinical operations, mental health applications, regulatory landscape, and market growth projections to 2030.",
    file: "/ai-health-industry-analysis.pdf",
    tag: "Industry Report",
  },
  {
    title: "E-Commerce Industry Analysis",
    category: "Industry Report",
    description: "A comprehensive look at India's e-commerce sector — Porter's Five Forces, SWOT analysis, revenue models, growth trends, COVID-19 impact, government initiatives, and setup cost breakdown.",
    file: "/ecommerce-industry-analysis.pdf",
    tag: "Industry Report",
  },
  {
    title: "Gaming Industry Analysis",
    category: "Industry Report",
    description: "An in-depth analysis of the global gaming industry covering market size projections to 2030, Porter's Five Forces, revenue models, setup costs, key investments, and the impact of COVID-19 on consumer behaviour.",
    file: "/gaming-industry-analysis.pdf",
    tag: "Industry Report",
  },
  {
    title: "Flipkart - Company Analysis",
    category: "Company Report",
    description: "A detailed profile of India's largest e-commerce retailer — founders' journey, SWOT analysis, competitive strengths, supply chain breakdown, and industry comparison against Amazon and IndiaMart.",
    file: "/flipkart-company-analysis.pdf",
    tag: "Company Report",
  },
  {
    title: "GlaxoSmithKline (GSK) - Company Analysis",
    category: "Company Report",
    description: "A structured analysis of GSK covering its history, CEO profile, SWOT, value chain (primary and secondary activities), competitive advantages, and group turnover breakdown by business and geography.",
    file: "/gsk-company-analysis.pdf",
    tag: "Company Report",
  },
  {
    title: "MediBuddy - Company Analysis",
    category: "Company Report",
    description: "An analysis of India's leading digital healthcare platform — founders, history, services offered, SWOT, funding rounds, competitive landscape, and comparison against Practo, Tata 1mg, and Netmeds.",
    file: "/medibuddy-company-analysis.pdf",
    tag: "Company Report",
  },
];
// ─────────────────────────────────────────────────────────────────────────────

const ResourceCard = ({ r }: { r: typeof RESOURCES[0] }) => (
  <div className="card-base p-6 h-full flex flex-col group hover:border-primary/20 transition-all duration-300 bg-white">
    <div className="flex items-center justify-between mb-4">
      <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 px-2.5 py-1 rounded-full">
        {r.tag}
      </span>
    </div>
    <h3 className="font-heading font-extrabold text-base mb-2 text-foreground group-hover:text-primary transition-colors duration-300">
      {r.title}
    </h3>
    <p className="text-foreground-secondary text-sm leading-relaxed flex-1">
      {r.description}
    </p>
    <div className="mt-5 pt-4 border-t border-border flex items-center justify-between">
      <span className="text-xs text-slate-400 font-semibold">PDF Document</span>
      <a
        href={r.file}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1 text-xs text-primary font-extrabold hover:underline"
      >
        Read Here →
      </a>
    </div>
  </div>
);

const KnowledgeHub = () => (
  <div>
    <PageHero
      title="Knowledge Hub"
      subtitle="Reports, publications, casebooks, and frameworks, all produced by Grandeur members. Free for the entire consulting community."
    />

    {/* Intro */}
    <section className="py-10 bg-background-alt border-b border-border">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="font-heading text-xl font-bold mb-2">Open-Access Research and Resources</h2>
          <p className="text-foreground-secondary text-sm leading-relaxed">
            Everything here is produced by Grandeur members through live project experience, competition prep, and structured research. Use it, share it, build on it.
          </p>
        </div>
        <div className="flex items-center gap-2 px-5 py-3 bg-primary/10 text-primary rounded-lg text-sm font-semibold">
          <FileText size={16} />
          {RESOURCES.length} {RESOURCES.length === 1 ? "Resource" : "Resources"} Available
        </div>
      </div>
    </section>

    {/* Resources grid */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeader title="All Resources" />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {RESOURCES.map((r, i) => (
            <ScrollReveal key={i} delay={i * 0.07}>
              <ResourceCard r={r} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>



    {/* CTA */}
    <section className="section-padding border-t border-border text-center">
      <div className="container-main max-w-2xl">
        <SectionHeader
          title="Contribute to the Hub"
          subtitle="Grandeur members are encouraged to submit research, frameworks, and case write-ups. Every resource here was written by a student just like you."
        />
        <a
          href="/contact"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
        >
          Submit Your Work
        </a>
      </div>
    </section>
  </div>
);

export default KnowledgeHub;
