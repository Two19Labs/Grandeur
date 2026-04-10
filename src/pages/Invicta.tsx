import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { INVICTA_STEPS, INVICTA_SKILLS } from "@/data/content";
import { Zap } from "lucide-react";

const Invicta = () => (
  <div>
    {/* HERO */}
    <section className="gradient-invicta pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="container-main text-center">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
          <span className="text-secondary font-accent font-semibold text-sm uppercase tracking-widest">Flagship Event</span>
          <h1 className="font-heading text-5xl md:text-7xl font-extrabold text-foreground mt-3 mb-4 tracking-tight">INVICTA</h1>
          <p className="text-xl md:text-2xl text-foreground-secondary font-medium mb-2">The Ultimate Case Study Competition</p>
          <p className="text-foreground-secondary max-w-xl mx-auto">Where the brightest minds tackle real corporate conundrums.</p>
        </motion.div>
      </div>
    </section>

    {/* OVERVIEW */}
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <p className="text-foreground-secondary leading-relaxed max-w-3xl mx-auto text-center text-lg">
            Invicta is one of the most anticipated case competitions in the Delhi University circuit, hosted annually by Grandeur at SSCBS. The competition operates in both online and offline capacity across pan-India, presenting a corporate conundrum in the form of a case study and urging trailblazing solutions.
          </p>
        </ScrollReveal>
      </div>
    </section>

    {/* HOW IT WORKS */}
    <section className="section-padding bg-background-alt">
      <div className="container-main">
        <SectionHeader title="How It Works" />
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {INVICTA_STEPS.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 font-accent font-bold text-lg">{s.step}</div>
                <h3 className="font-heading font-bold mb-1">{s.title}</h3>
                <p className="text-foreground-secondary text-sm">{s.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* KEY STATS */}
    <section className="py-16 border-y border-border">
      <div className="container-main">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <AnimatedCounter target={1200} suffix="+" label="Registrations" />
          <AnimatedCounter target={8} label="Finalist Teams" />
          <AnimatedCounter target={20000} suffix="+" label="Cash Prizes (₹)" />
          <AnimatedCounter target={100000} suffix="+" label="Overall Prizes (₹)" />
        </div>
      </div>
    </section>

    {/* WHAT IT TESTS */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeader title="What Invicta Tests" />
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {INVICTA_SKILLS.map((s, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="card-base p-5 text-center">
                <Zap className="text-secondary mx-auto mb-2" size={20} />
                <span className="font-heading font-semibold text-sm">{s}</span>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* RANNEETI */}
    <section className="section-padding bg-background-alt">
      <div className="container-main">
        <ScrollReveal>
          <div className="card-base p-8 md:p-12 max-w-3xl mx-auto text-center">
            <h2 className="font-heading text-2xl font-bold mb-3">Ranneeti - The Introductory Case Competition</h2>
            <p className="text-foreground-secondary leading-relaxed">An intra-college case competition designed to introduce first-year students to the world of case-solving. With 300+ participants annually, Ranneeti equips freshers with foundational problem-solving skills and a taste of competitive consulting.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA */}
    <section className="section-padding">
      <div className="container-main text-center">
        <h2 className="font-heading text-3xl font-bold mb-3">Invicta 2026 is here.</h2>
        <p className="text-foreground-secondary mb-8">March 18, 2026</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a href="#" className="px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">Register Now</a>
          <a href="#" className="px-8 py-3.5 border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary/5 transition-colors">View Past Case Studies</a>
        </div>
      </div>
    </section>
  </div>
);

export default Invicta;
