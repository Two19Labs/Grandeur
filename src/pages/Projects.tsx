import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { PROJECTS } from "@/data/content";
import { Briefcase, ArrowRight } from "lucide-react";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

const Projects = () => (
  <div>
    <PageHero
      title="Live Projects"
      subtitle="Real companies. Real problems. Real consulting experience."
      badge="Industry Engagements"
    />

    <section className="section-padding relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-accent-blue/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container-main relative z-10">
        <ScrollReveal>
          <p className="text-foreground-secondary leading-relaxed max-w-3xl mx-auto text-center mb-14">
            Live Projects are the backbone of Grandeur's hands-on learning philosophy. Each project pairs our members with real companies to solve actual business problems — from market research and growth strategy to HR consulting and financial analysis. These engagements give students a true taste of the consulting world.
          </p>
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PROJECTS.map((p, i) => (
            <motion.div key={i} variants={fadeUp}>
              <motion.div
                className="card-base p-6 h-full flex flex-col group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 border border-primary/20 group-hover:bg-primary/20 transition-colors">
                  <Briefcase className="text-primary" size={22} />
                </div>
                <h3 className="font-heading font-bold text-lg">{p.company}</h3>
                <p className="text-xs text-foreground-secondary mb-2">{p.info}</p>
                <div className="flex gap-2 mb-3">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full border border-primary/20">{p.role}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-muted text-foreground-secondary rounded-full">{p.duration}</span>
                </div>
                <p className="text-foreground-secondary text-sm leading-relaxed flex-1">{p.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16 section-dark relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="container-main relative z-10 flex flex-col items-center">
        <AnimatedCounter target={50} suffix="+" label="Projects Completed" dark numberClassName="text-4xl md:text-6xl" />
        <p className="text-white/40 text-sm mt-3">Across consulting, research, finance, and marketing</p>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      <div className="container-main text-center relative z-10">
        <h2 className="font-heading text-2xl md:text-3xl font-bold mb-4">Want to collaborate with Grandeur?</h2>
        <p className="text-foreground-secondary mb-8 max-w-lg mx-auto">Partner with us on a live consulting project and leverage the analytical power of India's oldest collegiate consulting cell.</p>
        <Link to="/contact" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all text-sm">
          Partner With Us
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </section>
  </div>
);

export default Projects;
