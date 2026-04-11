import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { JOIN_PROCESS, JOIN_WHAT_YOU_GET } from "@/data/content";
import { Briefcase, Trophy, BookOpen, Users, Mic, Star, ArrowRight } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase size={22} />,
  Trophy: <Trophy size={22} />,
  BookOpen: <BookOpen size={22} />,
  Users: <Users size={22} />,
  Mic: <Mic size={22} />,
  Star: <Star size={22} />,
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const fadeUp = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } } };

const Join = () => (
  <div>
    <PageHero
      title="Join Grandeur"
      subtitle="We recruit once a year. If you're a fresher at SSCBS who wants to do real work — not just attend meetings — this is for you."
      badge="Recruitment"
    />

    {/* Eligibility banner */}
    <section className="py-10 bg-background-alt border-b border-border/50">
      <div className="container-main max-w-3xl text-center">
        <p className="text-foreground-secondary leading-relaxed">
          Recruitment is open to <span className="text-foreground font-semibold">first-year students at SSCBS</span>. We don't look for specific grades or prior experience — we look for curiosity, work ethic, and genuine interest in business. Applications typically open in <span className="text-foreground font-semibold">August–September</span>.
        </p>
      </div>
    </section>

    {/* Selection process */}
    <section className="section-padding relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container-main max-w-3xl relative z-10">
        <SectionHeader title="Selection Process" subtitle="A simple, merit-based process designed to find people who love thinking about business problems." />
        <div className="relative mt-10">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-primary/50 to-transparent hidden md:block" />
          <div className="flex flex-col gap-8">
            {JOIN_PROCESS.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div
                  className="flex gap-6 items-start"
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg flex-shrink-0 relative z-10 shadow-lg shadow-primary/30">
                    {step.step}
                  </div>
                  <div className="glass-card rounded-xl p-6 flex-1">
                    <h3 className="font-heading font-bold text-base mb-1">{step.title}</h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed">{step.description}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* What you get */}
    <section className="section-padding bg-background-alt relative">
      <div className="absolute inset-0 dot-pattern opacity-15" />
      <div className="container-main relative z-10">
        <SectionHeader title="What You Get" subtitle="Membership in Grandeur is a commitment — and so is ours to you." />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {JOIN_WHAT_YOU_GET.map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <motion.div
                className="card-base p-6 h-full group"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary mb-4 border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                  {iconMap[item.icon]}
                </div>
                <h3 className="font-heading font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* Alumni destinations */}
    <section className="section-padding relative">
      <div className="container-main max-w-3xl text-center">
        <SectionHeader title="Where Members Go" subtitle="Grandeur alumni have gone on to some of the best firms and institutions in the world." />
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["IIM Calcutta", "Bain & Company", "Accenture Strategy", "Grant Thornton", "D.E. Shaw", "L.E.K. Consulting", "IIM Ahmedabad", "IIM Bangalore", "BCG", "McKinsey"].map((org, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="px-4 py-2 rounded-full bg-muted/50 text-foreground-secondary text-sm font-medium border border-border/50 hover:border-primary/30 hover:text-primary transition-all cursor-default"
            >
              {org}
            </motion.span>
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent" />
      <div className="container-main max-w-xl text-center relative z-10">
        <h2 className="font-heading text-2xl font-bold mb-3">Applications for 2025-26 are closed.</h2>
        <p className="text-foreground-secondary text-sm mb-6">Follow us on Instagram to be the first to know when the next cycle opens.</p>
        <div className="flex flex-wrap gap-3 justify-center">
          <a
            href="https://www.instagram.com/grandeur.sscbs/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all text-sm"
          >
            Follow @grandeur.sscbs
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </a>
          <Link
            to="/contact"
            className="px-8 py-3.5 border border-border text-foreground font-semibold rounded-lg hover:bg-muted transition-colors text-sm"
          >
            Ask a Question
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Join;
