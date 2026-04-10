import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { ACHIEVEMENTS, ACHIEVEMENT_STATS, NOTABLE_ALUMNI, INSTITUTION_LOGOS } from "@/data/content";
import { Award, Trophy, Star, User } from "lucide-react";

const AchievementsPage = () => (
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

    {/* NOTABLE WINS */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeader title="Notable Wins" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {ACHIEVEMENTS.map((a, i) => (
            <ScrollReveal key={i} delay={i * 0.05}>
              <div className="card-base p-5 flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center flex-shrink-0">
                  <Trophy className="text-secondary" size={18} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm">{a.title}</h3>
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
    <section className="py-16 border-y border-border overflow-hidden">
      <div className="container-main mb-8">
        <SectionHeader title="Where We've Competed & Won" />
      </div>
      <div className="relative">
        <div className="flex animate-marquee w-max">
          {[...INSTITUTION_LOGOS, ...INSTITUTION_LOGOS].map((inst, i) => (
            <div key={i} className="mx-4 px-6 py-3 rounded-lg bg-muted text-foreground-secondary font-medium text-sm whitespace-nowrap">
              {inst}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ALUMNI */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeader title="Where Our Members Go" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {NOTABLE_ALUMNI.map((a, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-base p-6 text-center h-full">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <User className="text-muted-foreground" size={28} />
                </div>
                <h3 className="font-heading font-bold mb-2">{a.name}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">{a.details}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default AchievementsPage;
