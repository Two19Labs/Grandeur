import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { PROJECTS } from "@/data/content";
import { Briefcase } from "lucide-react";

const Projects = () => (
  <div>
    <PageHero title="Live Projects" subtitle="Real companies. Real problems. Real consulting experience." />

    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <p className="text-foreground-secondary leading-relaxed max-w-3xl mx-auto text-center mb-12">
            Live Projects (LPs) are the backbone of Grandeur's hands-on learning philosophy. Each project pairs our members with real companies to solve Live Projects (LPs) are the backbone of Grandeur's hands-on learning philosophy. Each project pairs our members with real companies to solve actual business problems, from market research and growth strategy to HR consulting and financial analysis. and growth strategy to HR consulting and financial analysis.
          </p>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS.map((p, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="card-base p-6 h-full flex flex-col group hover:shadow-lg transition-all duration-300">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:scale-110 group-hover:bg-primary/20 group-hover:rotate-3 transition-all duration-300">
                  <Briefcase className="text-primary transition-transform duration-300 group-hover:scale-105" size={22} />
                </div>
                <h3 className="font-heading font-bold text-lg transition-colors duration-300 group-hover:text-primary">{p.company}</h3>
                <p className="text-xs text-foreground-secondary mb-1">{p.info}</p>
                <div className="flex gap-2 my-3">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full group-hover:shadow-[0_0_12px_rgba(30,58,138,0.2)] transition-shadow duration-300">{p.role}</span>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-muted text-foreground-secondary rounded-full">{p.duration}</span>
                </div>
                <p className="text-foreground-secondary text-sm leading-relaxed flex-1">{p.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <section className="py-16 bg-background-alt border-y border-border">
      <div className="container-main flex flex-col items-center">
        <AnimatedCounter target={50} suffix="+" label="Projects Completed" />
        <p className="text-foreground-secondary text-sm mt-2">Across consulting, research, finance, and marketing</p>
      </div>
    </section>

    <section className="section-padding">
      <div className="container-main text-center">
        <h2 className="font-heading text-2xl font-bold mb-4">Want to collaborate with Grandeur on a live project?</h2>
        <Link to="/contact" className="inline-block px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">Partner With Us</Link>
      </div>
    </section>
  </div>
);

export default Projects;
