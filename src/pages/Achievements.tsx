import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedCounter from "@/components/AnimatedCounter";
import { ACHIEVEMENTS, ACHIEVEMENT_STATS, NOTABLE_ALUMNI, INSTITUTION_LOGOS } from "@/data/content";
import { Trophy, User } from "lucide-react";

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.06 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } };

const AchievementsPage = () => (
  <div>
    <PageHero title="Achievements" subtitle="41 podium finishes. 60+ competitions. One relentless team." badge="Track Record" />

    {/* STATS */}
    <section className="py-16 section-dark relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="container-main relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ACHIEVEMENT_STATS.map((s, i) => (
            <AnimatedCounter key={i} target={s.value} suffix={s.suffix || ""} label={s.label} dark />
          ))}
        </div>
      </div>
    </section>

    {/* NOTABLE WINS */}
    <section className="section-padding relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-secondary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container-main relative z-10">
        <SectionHeader title="Notable Wins" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div key={i} variants={fadeUp}>
              <motion.div
                className="card-base p-5 flex items-start gap-4 group"
                whileHover={{ y: -3, x: 3 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0 border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                  <Trophy className="text-secondary" size={18} />
                </div>
                <div>
                  <h3 className="font-heading font-bold text-sm">{a.title}</h3>
                  {a.institution && <p className="text-foreground-secondary text-sm">{a.institution}</p>}
                  {a.note && <p className="text-xs text-primary font-medium mt-0.5">{a.note}</p>}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* INSTITUTION MARQUEE */}
    <section className="py-16 border-y border-border/50 overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background pointer-events-none z-10" />
      <div className="container-main mb-8">
        <SectionHeader title="Where We've Competed & Won" />
      </div>
      <div className="relative">
        <div className="flex animate-marquee w-max">
          {[...INSTITUTION_LOGOS, ...INSTITUTION_LOGOS].map((inst, i) => (
            <div key={i} className="mx-3 px-5 py-2.5 rounded-lg bg-muted/50 text-foreground-secondary font-medium text-sm whitespace-nowrap border border-border/50">
              {inst}
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ALUMNI */}
    <section className="section-padding relative">
      <div className="container-main">
        <SectionHeader title="Where Our Members Go" subtitle="Grandeur alumni are at the world's best firms and institutions." />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {NOTABLE_ALUMNI.map((a, i) => (
            <motion.div key={i} variants={fadeUp}>
              <motion.div
                className="card-base p-6 text-center h-full group"
                whileHover={{ y: -4 }}
              >
                <div className="w-16 h-16 rounded-full bg-muted/50 flex items-center justify-center mx-auto mb-4 border border-border group-hover:border-primary/30 transition-colors">
                  <User className="text-muted-foreground" size={28} />
                </div>
                <h3 className="font-heading font-bold mb-2">{a.name}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">{a.details}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  </div>
);

export default AchievementsPage;
