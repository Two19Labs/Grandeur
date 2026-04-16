import ScrollReveal from "@/components/ScrollReveal";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import { FileText, Download, BookOpen, BarChart2, Layers, ExternalLink } from "lucide-react";

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
];
// ─────────────────────────────────────────────────────────────────────────────

const TAG_COLORS: Record<string, string> = {
  "Industry Report": "bg-blue-500/10 text-blue-600 border-blue-200",
  "Company Report":  "bg-orange-500/10 text-orange-600 border-orange-200",
  "Sector Report":   "bg-purple-500/10 text-purple-600 border-purple-200",
  "Casebook":        "bg-green-500/10 text-green-600 border-green-200",
  "Framework":       "bg-yellow-500/10 text-yellow-600 border-yellow-200",
  "Guide":           "bg-secondary/10 text-secondary border-secondary/20",
};

const ResourceCard = ({ r }: { r: typeof RESOURCES[0] }) => (
  <div className="card-base p-6 h-full flex flex-col group hover:border-primary/30 transition-all duration-300">
    <div className="flex items-start justify-between mb-4">
      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
        <FileText className="text-primary" size={18} />
      </div>
      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${TAG_COLORS[r.tag] || "bg-muted text-foreground-secondary border-border"}`}>
        {r.tag}
      </span>
    </div>
    <h3 className="font-heading font-bold text-base mb-2">{r.title}</h3>
    <p className="text-foreground-secondary text-sm leading-relaxed flex-1">{r.description}</p>
    <div className="mt-5 flex gap-3">
      <a
        href={r.file}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-1.5 text-sm text-foreground-secondary hover:text-primary transition-colors font-medium"
      >
        <ExternalLink size={14} /> View
      </a>
      <a
        href={r.file}
        download
        className="flex items-center gap-1.5 text-sm text-primary font-semibold hover:opacity-80 transition-opacity"
      >
        <Download size={14} /> Download
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

    {/* Framework & Consulting Prep — kept from original */}
    <section className="section-padding bg-background-alt border-t border-border">
      <div className="container-main">
        <SectionHeader title="Case Frameworks and Consulting Prep" subtitle="Structured tools to sharpen your case-solving skills." />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { icon: <Layers size={22} />, title: "Market Entry Framework", desc: "A structured approach to evaluating new market opportunities end-to-end.", tag: "Framework" },
            { icon: <BarChart2 size={22} />, title: "Profitability Analysis", desc: "Diagnosing revenue and cost levers for turnaround and growth cases.", tag: "Framework" },
            { icon: <BookOpen size={22} />, title: "Case Interview Primer", desc: "From MECE thinking to structured communication, a complete beginner guide.", tag: "Guide" },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="card-base p-6 h-full flex flex-col group hover:border-primary/30 transition-colors">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                  {item.icon}
                </div>
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border self-start mb-3 ${TAG_COLORS[item.tag]}`}>
                  {item.tag}
                </span>
                <h3 className="font-heading font-bold text-base mb-2">{item.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed flex-1">{item.desc}</p>
                <p className="text-xs text-muted-foreground mt-4 italic">Coming soon</p>
              </div>
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
