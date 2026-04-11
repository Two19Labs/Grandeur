import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { INVICTA_STEPS, INVICTA_SKILLS } from "@/data/content";
import { Zap, Award, ArrowRight, Users, Target, Brain, Lightbulb, TrendingUp, Presentation } from "lucide-react";

const skillIcons: Record<string, React.ElementType> = {
  "Logical Thinking": Brain,
  "Analytical Skills": TrendingUp,
  "Business Acumen": Lightbulb,
  "Financial Knowledge": Target,
  "Creative Problem-Solving": Zap,
  "Presentation Skills": Presentation,
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

const Invicta = () => (
  <div>
    {/* CUSTOM HERO */}
    <section className="relative pt-36 pb-20 md:pt-48 md:pb-28 overflow-hidden noise-overlay">
      <div className="absolute inset-0 bg-gradient-to-br from-background via-primary/5 to-secondary/5" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/8 rounded-full blur-[100px] pointer-events-none" />

      <div className="container-main text-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-accent font-semibold text-xs uppercase tracking-widest mb-6">
            <Award size={14} />
            Flagship Event
          </span>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-4">
            <span className="text-gradient-primary">INVICTA</span>
          </h1>
          <p className="text-xl md:text-2xl text-foreground-secondary font-medium mb-2">The Ultimate Case Study Competition</p>
          <p className="text-foreground-secondary/60 max-w-xl mx-auto">Where the brightest minds from across India tackle real corporate conundrums.</p>
        </motion.div>
      </div>
    </section>

    {/* OVERVIEW */}
    <section className="section-padding relative">
      <div className="container-main">
        <ScrollReveal>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-foreground-secondary leading-relaxed text-lg">
              Invicta is one of the most anticipated case competitions in the Delhi University circuit, hosted annually by Grandeur at SSCBS. The competition operates in both online and offline capacity across pan-India, presenting a corporate conundrum in the form of a case study and urging trailblazing solutions. Every edition attracts 1200+ registrations from top colleges nationwide.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* HOW IT WORKS — Timeline */}
    <section className="section-padding bg-background-alt relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="container-main relative z-10">
        <SectionHeader title="How It Works" />
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
            <div className="flex flex-col gap-8">
              {INVICTA_STEPS.map((s, i) => (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <motion.div
                    className="flex gap-6 items-start"
                    whileHover={{ x: 4 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg flex-shrink-0 relative z-10 shadow-lg shadow-primary/30">
                      {s.step}
                    </div>
                    <div className="glass-card rounded-xl p-6 flex-1">
                      <h3 className="font-heading font-bold text-base mb-1">{s.title}</h3>
                      <p className="text-foreground-secondary text-sm leading-relaxed">{s.description}</p>
                    </div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* KEY STATS */}
    <section className="py-16 section-dark relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="container-main relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter target={1200} suffix="+" label="Registrations" dark numberClassName="text-3xl md:text-5xl" />
          <AnimatedCounter target={8} label="Finalist Teams" dark numberClassName="text-3xl md:text-5xl" />
          <AnimatedCounter target={20000} prefix="₹" suffix="+" label="Cash Prize" dark numberClassName="text-3xl md:text-5xl" />
          <AnimatedCounter target={100000} prefix="₹" suffix="+" label="Overall Prize" dark numberClassName="text-3xl md:text-5xl" />
        </div>
      </div>
    </section>

    {/* WHAT IT TESTS */}
    <section className="section-padding relative">
      <div className="container-main">
        <SectionHeader title="What Invicta Tests" />
        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {INVICTA_SKILLS.map((s, i) => {
            const Icon = skillIcons[s] || Zap;
            return (
              <motion.div key={i} variants={fadeUp}>
                <motion.div
                  className="card-base p-5 text-center group"
                  whileHover={{ y: -4 }}
                >
                  <Icon className="text-secondary mx-auto mb-3 group-hover:scale-110 transition-transform" size={22} />
                  <span className="font-heading font-semibold text-sm">{s}</span>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>

    {/* RANNEETI */}
    <section className="section-padding bg-background-alt">
      <div className="container-main">
        <ScrollReveal>
          <motion.div
            className="glass-card rounded-2xl p-8 md:p-12 max-w-3xl mx-auto text-center relative overflow-hidden"
            whileHover={{ y: -3 }}
          >
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-secondary to-transparent" />
            <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mx-auto mb-5 border border-secondary/20">
              <Users className="text-secondary" size={26} />
            </div>
            <h2 className="font-heading text-2xl font-bold mb-3">Ranneeti — The Introductory Case Competition</h2>
            <p className="text-foreground-secondary leading-relaxed max-w-lg mx-auto">
              An intra-college case competition designed to introduce first-year students to the world of case-solving. With 300+ participants annually, Ranneeti equips freshers with foundational problem-solving skills and a taste of competitive consulting.
            </p>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-secondary/5" />
      <div className="container-main text-center relative z-10">
        <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">Invicta 2026</h2>
        <p className="text-foreground-secondary mb-8">The next edition coming soon. Stay tuned.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="https://unstop.com/competitions/invicta-2026-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1642243" target="_blank" rel="noopener noreferrer" className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all text-sm">
            Register on Unstop
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <Link to="/contact" className="px-8 py-3.5 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-all text-sm">
            Sponsor Invicta
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Invicta;
