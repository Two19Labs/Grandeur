import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { PUBLICATIONS } from "@/data/content";
import { BookOpen, FileText, ArrowRight } from "lucide-react";
import pubGaming from "@/assets/pub-gaming.jpg";
import pubMeta from "@/assets/pub-meta.jpg";
import pubHealthcare from "@/assets/pub-healthcare.jpg";

const PUB_IMAGES = [pubGaming, pubMeta, pubHealthcare];

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

const Publications = () => (
  <div>
    <PageHero
      title="Publications"
      subtitle="In-depth research and analysis across industries and companies"
      badge="Research & Analysis"
    />

    <section className="section-padding relative">
      <div className="container-main">
        <ScrollReveal>
          <p className="text-foreground-secondary leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Grandeur has always believed in sharing knowledge in a comprehensive yet understandable form. Our publication series covers industry analysis, company deep-dives, and topical research reports — written by our members and reviewed by peers and faculty.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PUBLICATIONS.map((p, i) => (
            <motion.div key={i} variants={fadeUp}>
              <motion.div
                className="card-base overflow-hidden h-full flex flex-col group"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-44 overflow-hidden relative">
                  <img src={PUB_IMAGES[i]} alt={p.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-card to-transparent" />
                </div>
                <div className="p-6 flex flex-col flex-1">
                  <span className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">{p.category}</span>
                  <h3 className="font-heading font-bold text-lg mb-2">{p.title}</h3>
                  <p className="text-foreground-secondary text-sm leading-relaxed flex-1">{p.description}</p>
                  <button className="mt-4 group/btn inline-flex items-center gap-2 text-primary font-semibold text-sm transition-all">
                    Read Report
                    <ArrowRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
                  </button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ONGOING SERIES */}
    <section className="section-padding bg-background-alt relative">
      <div className="absolute inset-0 dot-pattern opacity-15" />
      <div className="container-main relative z-10">
        <SectionHeader title="Ongoing Series" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {[
            { title: "Industry Analysis Series", desc: "Regular deep-dives into high-growth sectors including gaming, fintech, EVs, and AI." },
            { title: "Company Analysis Series", desc: "Breakdowns of major corporations' strategies, financials, and competitive positioning." },
            { title: "Newsletter & News Analysis", desc: "Timely commentary on business events, market movements, and policy changes." },
          ].map((s, i) => (
            <motion.div key={i} variants={fadeUp}>
              <motion.div className="card-base p-6 text-center group" whileHover={{ y: -4 }}>
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <BookOpen className="text-primary" size={22} />
                </div>
                <h3 className="font-heading font-bold mb-1">{s.title}</h3>
                <p className="text-foreground-secondary text-sm">{s.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      <div className="container-main text-center relative z-10">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Have a research topic you'd like us to explore?</h2>
        <p className="text-foreground-secondary mb-8 max-w-md mx-auto">We're always looking for new industries and companies to analyze.</p>
        <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all text-sm">
          Suggest a Topic
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  </div>
);

export default Publications;
