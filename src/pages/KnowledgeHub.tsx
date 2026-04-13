import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { KNOWLEDGE_RESOURCES } from "@/data/content";
import { BarChart2, Layers, BookOpen, ExternalLink, Download } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BarChart2: <BarChart2 size={22} />,
  Layers: <Layers size={22} />,
  BookOpen: <BookOpen size={22} />,
};

const tagColors: Record<string, string> = {
  Industry: "bg-blue-500/10 text-blue-400",
  Sector: "bg-purple-500/10 text-purple-400",
  Company: "bg-orange-500/10 text-orange-400",
  Framework: "bg-green-500/10 text-green-400",
  Guide: "bg-secondary/20 text-secondary",
};

const KnowledgeHub = () => (
  <div>
    <PageHero
      title="Knowledge Hub"
      subtitle="Industry reports, case frameworks, and consulting prep resources, built by Grandeur members, for the DU consulting community."
    />

    {/* Intro banner */}
    <section className="py-10 bg-background-alt border-b border-border">
      <div className="container-main flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="max-w-xl">
          <h2 className="font-heading text-xl font-bold mb-2">Open-Access Research & Resources</h2>
          <p className="text-foreground-secondary text-sm leading-relaxed">
            Everything here is produced by Grandeur members through live project experience, competition prep, and structured research. Use it, share it, build on it.
          </p>
        </div>
        <a
          href="https://drive.google.com/drive/folders/grandeur-reports"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm whitespace-nowrap"
        >
          <ExternalLink size={16} />
          View Full Report Drive
        </a>
      </div>
    </section>

    {/* Resource categories */}
    {KNOWLEDGE_RESOURCES.map((cat, ci) => (
      <section key={ci} className={`section-padding ${ci % 2 === 1 ? "bg-background-alt" : ""}`}>
        <div className="container-main">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
              {iconMap[cat.icon]}
            </div>
            <h2 className="font-heading text-2xl font-bold">{cat.category}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {cat.items.map((item, ii) => (
              <ScrollReveal key={ii} delay={ii * 0.08}>
                <div className="card-base p-6 h-full flex flex-col justify-between group hover:border-primary/30 transition-colors">
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${tagColors[item.tag] || "bg-muted text-foreground-secondary"}`}>
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="font-heading font-bold text-base mb-2">{item.title}</h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed">{item.description}</p>
                  </div>
                  <button className="mt-5 flex items-center gap-2 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    <Download size={14} />
                    Download PDF
                  </button>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="section-padding bg-primary/5 border-t border-border text-center">
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
