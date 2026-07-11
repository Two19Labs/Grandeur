import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { PROJECTS } from "@/data/content";
import { Briefcase, BarChart3, TrendingUp, Compass, Award } from "lucide-react";

const SERVICES_DATA = [
  {
    icon: Compass,
    title: "Strategy Consulting",
    description: "We design growth strategies, operational improvements, and go-to-market plans to help organizations scale and drive lasting corporate and social impact."
  },
  {
    icon: BarChart3,
    title: "Market Research",
    description: "We uncover market trends, customer behavior patterns, and competitor insights to inform smarter, data-backed strategic decisions."
  },
  {
    icon: TrendingUp,
    title: "Financial Advisory",
    description: "We deliver financial strategies, forecasting models, and pricing analysis that support corporate expansion and ensure sustainable operational growth."
  },
  {
    icon: Briefcase,
    title: "Growth & Marketing Strategy",
    description: "We shape compelling brand positionings and build multi-channel engagement strategies to strengthen market visibility and corporate value."
  }
];

const SPEAKER_SESSIONS = [
  { name: "Nishant Shekhar", role: "Boston Consulting Group (BCG)", desc: "Shared insights on strategic structured thinking and MECE frameworks in strategy consulting." },
  { name: "Soham Chakraborty", role: "Bain & Company", desc: "Delivered a workshop on business case interview preparation and problem cracking methods." },
  { name: "Lakshya Kumar", role: "McKinsey & Company", desc: "Interactive session on consulting lifecycle operations and market entry advisory." }
];

const WhatWeDo = () => {
  return (
    <div>
      <PageHero 
        title="What We Do" 
        subtitle="Bridging academic learning with corporate advisory through live consulting engagements, speaker sessions, and strategy events." 
      />

      {/* CORE SERVICES */}
      <section className="section-padding bg-background">
        <div className="container-main">
          <SectionHeader 
            title="Our Services" 
            subtitle="We provide comprehensive consulting capabilities to help organizations solve complex challenges and drive growth." 
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {SERVICES_DATA.map((srv, i) => {
              const Icon = srv.icon;
              return (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="card-base p-6 h-full border-t-4 border-t-primary bg-white hover:border-primary/45 transition-colors duration-200">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                      <Icon className="text-primary" size={22} />
                    </div>
                    <h3 className="font-heading text-lg font-bold mb-2 text-primary">{srv.title}</h3>
                    <p className="text-foreground-secondary leading-relaxed text-sm">
                      {srv.description}
                    </p>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* LIVE PROJECTS */}
      <section className="section-padding bg-background-alt border-y border-border">
        <div className="container-main">
          <SectionHeader 
            title="Live Projects" 
            subtitle="Real consulting engagements with leading companies across industries, delivering practical recommendations and measurable outcomes." 
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {PROJECTS.map((p, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="card-base p-6 h-full flex flex-col justify-between bg-white group hover:border-primary/45 transition-colors duration-200">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-primary bg-primary/10 px-3 py-1 rounded-full inline-block mb-3">
                      {p.role || "Consulting Team"}
                    </span>
                    <h4 className="font-heading font-extrabold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                      {p.company}
                    </h4>
                    <p className="text-[11px] text-slate-400 mb-3 font-semibold leading-relaxed">
                      {p.info}
                    </p>
                    <p className="text-foreground-secondary text-sm leading-relaxed">
                      {p.description}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* SPEAKER SESSIONS */}
      <section className="section-padding bg-background border-b border-border">
        <div className="container-main max-w-4xl">
          <SectionHeader 
            title="Speaker Sessions & Corporate Mentorship" 
            subtitle="Invited speakers from MBB consulting firms sharing strategic tools, operational insights, and frontline business learnings." 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPEAKER_SESSIONS.map((speaker, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="card-base p-5 h-full bg-white border-t-4 border-t-secondary/60 hover:border-primary/45 transition-colors duration-200 flex flex-col justify-between">
                  <div>
                    <h4 className="font-heading font-bold text-base text-foreground mb-1">
                      {speaker.name}
                    </h4>
                    <p className="text-xs text-primary font-bold mb-3">
                      {speaker.role}
                    </p>
                    <p className="text-foreground-secondary text-xs leading-relaxed">
                      {speaker.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* FLAGSHIP EVENTS */}
      <section className="section-padding bg-background-alt">
        <div className="container-main max-w-4xl">
          <SectionHeader 
            title="Flagship Initiatives" 
            subtitle="Flagship case competitions and simulation fests organized annually by Grandeur cell members." 
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { title: "INVICTA", type: "National Case Study", desc: "Flagship competition attracting 1200+ pan-India registrations, evaluating structured strategy submissions." },
              { title: "RANNEETI", type: "Intra-College Case", desc: "Annual freshers challenge introducing 300+ incoming students to case solving frameworks." },
              { title: "ECHELON", type: "Simulation Challenge", desc: "Strategy and simulation event hosted offline at SSCBS testing financial and operational decisions." }
            ].map((ev, i) => (
              <ScrollReveal key={i} delay={i * 0.08}>
                <div className="card-base p-5 h-full bg-white hover:border-primary/45 transition-colors duration-200 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] uppercase font-bold tracking-widest text-secondary block mb-2">{ev.type}</span>
                    <h4 className="font-heading font-extrabold text-base text-foreground mb-2 group-hover:text-primary transition-colors">
                      {ev.title}
                    </h4>
                    <p className="text-foreground-secondary text-xs leading-relaxed">
                      {ev.desc}
                    </p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default WhatWeDo;
