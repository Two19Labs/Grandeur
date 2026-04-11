import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { EVENTS_ARCHIVE } from "@/data/content";
import { Calendar, Award, Globe, Users, ArrowRight } from "lucide-react";

const typeIcon: Record<string, React.ReactNode> = {
  "Case Competition": <Award size={14} />,
  "Intra-College Competition": <Users size={14} />,
  "External Competition": <Award size={14} />,
  "International": <Globe size={14} />,
};

const typeColor: Record<string, string> = {
  "Case Competition": "bg-primary/10 text-primary border-primary/20",
  "Intra-College Competition": "bg-green-500/10 text-green-400 border-green-500/20",
  "External Competition": "bg-secondary/10 text-secondary border-secondary/20",
  "International": "bg-purple-500/10 text-purple-400 border-purple-500/20",
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } };

const Events = () => (
  <div>
    <PageHero
      title="Events Archive"
      subtitle="A record of every competition, initiative, and milestone in Grandeur's journey — from SSCBS corridors to global stages."
      badge="Our Journey"
    />

    <section className="section-padding relative">
      <div className="container-main max-w-4xl">
        {EVENTS_ARCHIVE.map((yearBlock, yi) => (
          <ScrollReveal key={yi} delay={yi * 0.1}>
            <div className="mb-14">
              {/* Year header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 border border-primary/20">
                  <Calendar size={16} className="text-primary" />
                  <span className="font-heading font-bold text-primary">{yearBlock.year}</span>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-border to-transparent" />
              </div>

              {/* Events grid */}
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-2"
                variants={stagger}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-60px" }}
              >
                {yearBlock.events.map((event, ei) => (
                  <motion.div key={ei} variants={fadeUp}>
                    <motion.div
                      className="card-base p-5 h-full flex flex-col group"
                      whileHover={{ y: -4 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full border ${typeColor[event.type] || "bg-muted text-foreground-secondary border-border"}`}>
                          {typeIcon[event.type]}
                          {event.type}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-sm mb-2">{event.name}</h3>
                      <p className="text-foreground-secondary text-xs leading-relaxed flex-1">{event.description}</p>
                      {event.highlight && (
                        <div className="mt-3 pt-3 border-t border-border/50">
                          <span className="text-xs font-semibold text-secondary">{event.highlight}</span>
                        </div>
                      )}
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 bg-background-alt border-t border-border/50 text-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-transparent" />
      <div className="container-main max-w-xl relative z-10">
        <SectionHeader
          title="Stay in the Loop"
          subtitle="Follow us on Instagram for real-time updates on upcoming events, competitions, and sessions."
        />
        <a
          href="https://www.instagram.com/grandeur.sscbs/"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all text-sm"
        >
          @grandeur.sscbs
          <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  </div>
);

export default Events;
