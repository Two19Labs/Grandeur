import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { KNOWLEDGE_RESOURCES } from "@/data/content";
import { BarChart2, Layers, BookOpen, ExternalLink, Download, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  BarChart2: <BarChart2 size={22} />,
  Layers: <Layers size={22} />,
  BookOpen: <BookOpen size={22} />,
};

const tagColors: Record<string, string> = {
  Industry: "bg-accent-blue/10 text-accent-blue border-accent-blue/20",
  Sector: "bg-purple-500/10 text-purple-400 border-purple-500/20",
  Company: "bg-orange-500/10 text-orange-400 border-orange-500/20",
  Framework: "bg-green-500/10 text-green-400 border-green-500/20",
  Guide: "bg-secondary/10 text-secondary border-secondary/20",
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } };

const KnowledgeHub = () => (
  <div>
    <PageHero
      title="Knowledge Hub"
      subtitle="Industry reports, case frameworks, and consulting prep resources — built by Grandeur members, for the DU consulting community."
      badge="Open-Access Resources"
    />

    {/* Intro banner */}
    <section className="py-10 bg-background-alt border-b border-border/50">
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
          className="group inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all text-sm whitespace-nowrap"
        >
          <ExternalLink size={16} />
          View Full Report Drive
          <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>

    {/* Resource categories */}
    {KNOWLEDGE_RESOURCES.map((cat, ci) => (
      <section key={ci} className={`section-padding ${ci % 2 === 1 ? "bg-background-alt" : ""} relative`}>
        {ci % 2 === 0 && <div className="absolute top-0 right-0 w-72 h-72 bg-primary/3 rounded-full blur-[100px] pointer-events-none" />}
        <div className="container-main relative z-10">
          <div className="flex items-center gap-3 mb-8">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary border border-primary/20">
              {iconMap[cat.icon]}
            </div>
            <h2 className="font-heading text-2xl font-bold">{cat.category}</h2>
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
          >
            {cat.items.map((item, ii) => (
              <motion.div key={ii} variants={fadeUp}>
                <motion.div
                  className="card-base p-6 h-full flex flex-col justify-between group"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div>
                    <div className="flex items-start justify-between mb-3">
                      <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${tagColors[item.tag] || "bg-muted text-foreground-secondary border-border"}`}>
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
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    ))}

    {/* CTA */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      <div className="container-main max-w-2xl text-center relative z-10">
        <SectionHeader
          title="Contribute to the Hub"
          subtitle="Grandeur members are encouraged to submit research, frameworks, and case write-ups. Every resource here was written by a student just like you."
        />
        <Link
          to="/contact"
          className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all text-sm"
        >
          Submit Your Work
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  </div>
);

export default KnowledgeHub;
