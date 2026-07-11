import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { ACHIEVEMENTS, ACHIEVEMENT_STATS, INSTITUTION_LOGOS } from "@/data/content";
import { Award, Trophy, Star, User } from "lucide-react";

import imgIITB from "@/assets/achieve-iitb.png";
import imgSRCC from "@/assets/achieve-srcc.png";
import imgMelbourne from "@/assets/achieve-melbourne.png";
import imgNSUT from "@/assets/achieve-nsut.png";

const CAROUSEL_ITEMS = [
  {
    title: "Winner - Jack of All Trades",
    institution: "IIT Bombay",
    description: "Podium finish at IIT Bombay's flagship management fest competition, solving an intensive business scenario strategy case.",
    image: imgIITB
  },
  {
    title: "Winner - Office Voyage",
    institution: "SRCC",
    description: "Secured first place in SRCC's premier case study event, demonstrating rigorous structured problem-solving under pressure.",
    image: imgSRCC
  },
  {
    title: "Global Heats Qualifier - GMCC",
    institution: "University of Melbourne",
    description: "Stood as the only Indian team to qualify for the global top 12 heats, representing Grandeur and SSCBS globally.",
    image: imgMelbourne
  },
  {
    title: "Winner - National Case Competition",
    institution: "E-Cell NSUT",
    description: "Triumphed over 2000+ teams nationwide in NSUT's flagship startup growth strategy competition.",
    image: imgNSUT
  }
];

const InstitutionBadge = ({ name }: { name: string }) => {
  return (
    <div className="mx-4 px-5 py-3 rounded-xl bg-white border border-border/80 flex items-center gap-3 shadow-sm hover:border-primary/30 transition-all duration-300">
      <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 border border-slate-200">
        <svg className="w-4.5 h-4.5 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        </svg>
      </div>
      <span className="text-foreground font-bold text-sm whitespace-nowrap">{name}</span>
    </div>
  );
};

const AchievementsPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const nextSlide = () => setActiveIndex((prev) => (prev + 1) % CAROUSEL_ITEMS.length);
  const prevSlide = () => setActiveIndex((prev) => (prev - 1 + CAROUSEL_ITEMS.length) % CAROUSEL_ITEMS.length);

  return (
    <div>
      <PageHero title="Achievements" subtitle="41 podium finishes. 60+ competitions. One relentless team." />

      {/* STATS */}
      <section className="py-16 bg-background-alt border-b border-border">
        <div className="container-main">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {ACHIEVEMENT_STATS.map((s, i) => (
              <AnimatedCounter key={i} target={s.value} suffix={s.suffix || ""} label={s.label} />
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED WINS CAROUSEL */}
      <section className="section-padding relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,_rgba(30,58,138,0.15),_transparent_40%)]" />
        <div className="container-main">
          <SectionHeader title="Notable Placements & Wins" dark subtitle="Swipe through some of our flagship competition victories and podium finishes." />
          
          <div className="relative max-w-4xl mx-auto h-[450px] overflow-hidden rounded-2xl shadow-2xl group border border-white/10 bg-slate-900">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full"
              >
                {/* Background Image */}
                <img 
                  src={CAROUSEL_ITEMS[activeIndex].image} 
                  alt={CAROUSEL_ITEMS[activeIndex].title} 
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20" />
                
                {/* Content overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12 z-10 flex flex-col justify-end h-full">
                  <span className="text-secondary font-accent font-semibold text-xs uppercase tracking-widest mb-2">Flagship Win</span>
                  <h3 className="font-heading font-extrabold text-2xl md:text-4xl text-white mb-2">
                    {CAROUSEL_ITEMS[activeIndex].title}
                  </h3>
                  <p className="text-secondary font-semibold text-sm md:text-base mb-4">
                    {CAROUSEL_ITEMS[activeIndex].institution}
                  </p>
                  <p className="text-slate-300 text-xs md:text-sm max-w-2xl leading-relaxed">
                    {CAROUSEL_ITEMS[activeIndex].description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/80 border border-white/10 text-white flex items-center justify-center hover:bg-slate-900 transition-colors z-20"
            >
              ←
            </button>
            <button 
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-slate-950/80 border border-white/10 text-white flex items-center justify-center hover:bg-slate-900 transition-colors z-20"
            >
              →
            </button>
            
            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
              {CAROUSEL_ITEMS.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`w-2 h-2 rounded-full transition-colors ${activeIndex === i ? "bg-secondary" : "bg-white/40"}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ALL PODIUM FINISHES */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader title="Podium Record" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
            {ACHIEVEMENTS.map((a, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="card-base p-5 flex items-start gap-4 group hover:shadow-lg transition-all duration-300">
                  <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
                    <Trophy className="text-secondary transition-transform duration-300 group-hover:scale-105" size={18} />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-sm transition-colors duration-300 group-hover:text-primary">{a.title}</h3>
                    {a.institution && <p className="text-foreground-secondary text-sm">{a.institution}</p>}
                    {a.note && <p className="text-xs text-primary font-medium mt-0.5">{a.note}</p>}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* INSTITUTION MARQUEE */}
      <section className="py-16 border-y border-border overflow-hidden bg-background-alt">
        <div className="container-main mb-8">
          <SectionHeader title="Where We've Competed & Won" />
        </div>
        <div className="relative overflow-hidden mask-horizontal-fade">
          <div className="flex animate-marquee w-max py-2">
            {[...INSTITUTION_LOGOS, ...INSTITUTION_LOGOS].map((inst, i) => (
              <InstitutionBadge key={i} name={inst} />
            ))}
          </div>
        </div>
      </section>

      {/* WALL OF ALUMNI - Placeholder Grid */}
      <section className="section-padding bg-background border-t border-border">
        <div className="container-main">
          <SectionHeader 
            title="Wall of Alumni" 
            subtitle="Our alumni have graduated to establish successful careers in top consulting firms, investment banks, and global corporations." 
          />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { firm: "Bain & Company", roles: "Associate / Analyst", count: 8 },
              { firm: "McKinsey & Company", roles: "Business Analyst", count: 4 },
              { firm: "Boston Consulting Group (BCG)", roles: "Associate / Intern", count: 3 },
              { firm: "Grant Thornton", roles: "Associate Consultant", count: 12 },
              { firm: "IIM Calcutta / Ahmedabad / Bangalore", roles: "MBA Candidate", count: 15 },
              { firm: "D. E. Shaw & Co.", roles: "Financial Analyst", count: 5 },
              { firm: "EY / PwC / KPMG", roles: "Consultant", count: 18 },
              { firm: "Corporate Strategy (Mamaearth, Krafton)", roles: "Strategy Intern / Manager", count: 7 },
            ].map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.05}>
                <div className="card-base p-6 text-center h-full flex flex-col items-center justify-center bg-white border-dashed border-2 border-border/80 hover:border-primary/20 group transition-all duration-300">
                  <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <User className="text-muted-foreground" size={22} />
                  </div>
                  <h4 className="font-heading font-extrabold text-sm text-foreground mb-1">{item.firm}</h4>
                  <p className="text-xs text-slate-400 mb-3 leading-tight">{item.roles}</p>
                  <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                    {item.count} Members
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AchievementsPage;
