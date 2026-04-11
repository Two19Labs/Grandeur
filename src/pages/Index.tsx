import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Trophy, BookOpen, Mic, FileText, Target, ArrowRight, Award, ChevronRight } from "lucide-react";
import grandeurLogoHero from "@/assets/grandeur-logo-hero.png";
import heroBg from "@/assets/hero-bg.jpeg";
import collabKrg from "@/assets/collab-krg.png";
import collabSkilledSapiens from "@/assets/collab-skilled-sapiens.png";
import collabUpsurge from "@/assets/collab-upsurge.png";
import collabAtmoz from "@/assets/collab-atmoz.png";
import collabKrafton from "@/assets/collab-krafton.png";
import collabHonasa from "@/assets/collab-honasa.png";
import collabThev from "@/assets/collab-thev.png";
import collabMamaearth from "@/assets/collab-mamaearth.png";
import SectionHeader from "@/components/SectionHeader";
import AnimatedCounter from "@/components/AnimatedCounter";
import ScrollReveal from "@/components/ScrollReveal";
import { STATS, CORNERSTONE_ACTIVITIES, COLLABORATORS, PROJECTS, PUBLICATIONS } from "@/data/content";

const COLLAB_LOGOS: Record<string, string> = {
  "KRG Consultancy": collabKrg,
  "Skilled Sapiens": collabSkilledSapiens,
  "Upsurge.club": collabUpsurge,
  "Atmoz": collabAtmoz,
  "Krafton": collabKrafton,
  "Honasa Consumer (Mamaearth)": collabHonasa,
  "THEV": collabThev,
};

const ICONS: Record<string, React.ElementType> = { Briefcase, Trophy, BookOpen, Mic, FileText, Target };

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 30, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Home = () => {
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 600], [0, 120]);
  const heroOpacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
  <div>
    {/* ═══ HERO SECTION ═══ */}
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax background */}
      <motion.img
        src={heroBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover scale-110"
        style={{ y: heroBgY }}
      />
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-background" />
      {/* Ambient purple glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-primary/15 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        style={{ opacity: heroOpacity }}
        className="container-main relative z-10 text-center py-32"
      >
        <motion.img
          src={grandeurLogoHero}
          alt="Grandeur"
          className="h-24 md:h-36 w-auto mx-auto mb-8 drop-shadow-2xl"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-5">
            <span className="text-gradient-white">Grandeur</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/70 font-medium mb-2">
            The Consulting & Knowledge Cell
          </p>
          <p className="text-white/40 text-base md:text-lg mb-3">
            Shaheed Sukhdev College of Business Studies • University of Delhi
          </p>
          <p className="text-primary/80 text-sm font-accent font-semibold tracking-wider uppercase mb-10">
            Delhi University's Oldest Consulting Society
          </p>
        </motion.div>

        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <Link
            to="/about"
            className="group inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 text-sm"
          >
            Explore Grandeur
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-3.5 border border-white/20 text-white font-semibold rounded-lg hover:bg-white/10 transition-all duration-300 text-sm"
          >
            View Our Work
          </Link>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
        >
          <motion.div
            className="w-6 h-10 rounded-full border-2 border-white/20 flex items-start justify-center p-1.5"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="w-1.5 h-1.5 rounded-full bg-primary"
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </motion.div>
    </section>

    {/* ═══ WHO WE ARE ═══ */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container-main relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionHeader
            title="Who We Are"
            subtitle="Grandeur is a student-run, corporate-facilitated, and faculty-guided consulting cell at SSCBS — India's first collegiate business school, established in 1987 under the University of Delhi."
          />
        </ScrollReveal>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-2"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {[
            { Icon: Briefcase, title: "Live Industry Projects", desc: "50+ projects across consulting, research, finance, and marketing with real companies solving real business problems.", stat: "50+" },
            { Icon: Trophy, title: "Competition Excellence", desc: "41 podium finishes at 60+ national and international case competitions — IIMs, IITs, and global stages.", stat: "41" },
            { Icon: BookOpen, title: "Research & Publications", desc: "In-depth industry primers, company analyses, and sector reports published regularly for the knowledge community.", stat: "15+" },
          ].map((item, i) => (
            <motion.div key={i} variants={cardVariant}>
              <motion.div
                className="glass-card rounded-xl p-8 text-center h-full relative overflow-hidden group"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.25 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative z-10">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 border border-primary/20">
                    <item.Icon className="text-primary" size={26} />
                  </div>
                  <div className="font-accent text-3xl font-bold text-primary mb-2">{item.stat}</div>
                  <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-foreground-secondary text-sm leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ═══ STATS BAR ═══ */}
    <section className="py-16 section-dark relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-30" />
      <div className="container-main relative z-10">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-5 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {STATS.map((s, i) => (
            <motion.div key={i} variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }}>
              <AnimatedCounter target={s.value} suffix={s.suffix} label={s.label} dark />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* ═══ INVICTA TEASER ═══ */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-main relative z-10">
        <ScrollReveal variant="scaleUp">
          <motion.div
            className="rounded-2xl p-8 md:p-14 border border-border/50 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, hsl(263 30% 12% / 0.6) 0%, hsl(45 40% 20% / 0.2) 100%)"
            }}
            whileHover={{ scale: 1.005 }}
            transition={{ duration: 0.3 }}
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="max-w-3xl relative z-10">
              <ScrollReveal variant="fadeLeft" delay={0.1}>
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-accent font-semibold text-xs uppercase tracking-widest mb-4">
                  <Award size={12} />
                  Flagship Event
                </span>
              </ScrollReveal>
              <ScrollReveal variant="fadeLeft" delay={0.2}>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-4 text-foreground">
                  INVICTA — The Ultimate Case Study Competition
                </h2>
              </ScrollReveal>
              <ScrollReveal variant="fadeLeft" delay={0.3}>
                <p className="text-foreground-secondary text-lg mb-8">
                  Our flagship pan-India case competition challenging the brightest minds from across the country to solve real corporate conundrums. Invicta has become one of the most anticipated consulting events in the Delhi University circuit.
                </p>
              </ScrollReveal>
              <div className="flex flex-wrap gap-8 mb-8">
                {[{ v: "1200+", l: "Registrations" }, { v: "₹20K+", l: "Cash Prizes" }, { v: "₹1L+", l: "Overall Prizes" }].map((s, i) => (
                  <ScrollReveal key={i} delay={0.35 + i * 0.1} variant="scaleUp">
                    <div className="text-center">
                      <div className="font-accent text-2xl font-bold text-secondary">{s.v}</div>
                      <div className="text-sm text-foreground-secondary">{s.l}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <Link to="/invicta" className="group inline-flex items-center gap-2 text-primary font-semibold transition-all">
                Learn More About Invicta
                <ChevronRight size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>

    {/* ═══ LIVE PROJECTS ═══ */}
    <section className="section-padding bg-background-alt relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="container-main">
        <ScrollReveal variant="fadeUp">
          <SectionHeader title="Our Live Projects" subtitle="Real problems. Real companies. Real impact." />
        </ScrollReveal>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PROJECTS.slice(0, 3).map((p, i) => (
            <motion.div key={i} variants={cardVariant}>
              <motion.div
                className="card-base p-6 h-full flex flex-col group"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-4 border border-accent-blue/20 group-hover:bg-accent-blue/20 transition-colors">
                  <Briefcase className="text-accent-blue" size={22} />
                </div>
                <h3 className="font-heading font-bold mb-1">{p.company}</h3>
                <span className="text-xs text-primary font-semibold mb-2">{p.role} · {p.duration}</span>
                <p className="text-foreground-secondary text-sm leading-relaxed flex-1">{p.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/projects" className="group inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
            View All Projects
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* ═══ PUBLICATIONS ═══ */}
    <section className="section-padding relative">
      <div className="container-main">
        <ScrollReveal variant="fadeUp">
          <SectionHeader title="Latest Publications" subtitle="In-depth research and analysis across industries and companies" />
        </ScrollReveal>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {PUBLICATIONS.map((p, i) => (
            <motion.div
              key={i}
              variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 } } }}
            >
              <motion.div
                className="card-base p-6 h-full flex flex-col group"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-36 rounded-lg bg-muted/50 flex items-center justify-center mb-4 border border-border/50 group-hover:border-primary/30 transition-colors">
                  <FileText className="text-muted-foreground group-hover:text-primary transition-colors" size={32} />
                </div>
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">{p.category}</span>
                <h3 className="font-heading font-bold mb-2">{p.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed flex-1">{p.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/publications" className="group inline-flex items-center gap-2 text-primary font-semibold transition-all">
            View All Publications
            <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>

    {/* ═══ CORNERSTONE ACTIVITIES ═══ */}
    <section className="section-padding section-dark-alt relative overflow-hidden">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="container-main relative z-10">
        <ScrollReveal variant="fadeUp">
          <SectionHeader title="Our Cornerstone Activities" dark />
        </ScrollReveal>
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {CORNERSTONE_ACTIVITIES.map((a, i) => {
            const Icon = ICONS[a.icon] || Briefcase;
            return (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 } } }}
              >
                <motion.div
                  className="p-6 rounded-xl bg-white/[0.03] border border-white/[0.06] h-full backdrop-blur-sm group hover:bg-white/[0.06] transition-all duration-300"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 border border-secondary/20 group-hover:bg-secondary/20 transition-colors">
                    <Icon className="text-secondary" size={22} />
                  </div>
                  <h3 className="font-heading font-bold mb-2 text-white">{a.title}</h3>
                  <p className="text-white/50 text-sm leading-relaxed">{a.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>

    {/* ═══ COLLABORATORS MARQUEE ═══ */}
    <section className="py-20 border-y border-border/50 overflow-hidden bg-background-alt relative">
      <div className="absolute inset-0 bg-gradient-to-r from-background-alt via-transparent to-background-alt pointer-events-none z-10" />
      <ScrollReveal variant="fadeUp">
        <div className="container-main mb-10">
          <SectionHeader title="Our Collaborators" subtitle="Industry partners who trust Grandeur with their real business challenges." />
        </div>
      </ScrollReveal>
      <div className="relative">
        <div className="flex animate-marquee w-max items-center">
          {[...COLLABORATORS, ...COLLABORATORS].map((c, i) => (
            <div key={i} className="mx-6 px-10 py-8 rounded-xl glass-card flex flex-col items-center gap-4 whitespace-nowrap min-w-[240px]">
              <div className="flex items-center gap-3">
                <img src={COLLAB_LOGOS[c]} alt={c} className="h-20 w-20 object-contain" />
                {c === "Honasa Consumer (Mamaearth)" && <img src={collabMamaearth} alt="Mamaearth" className="h-20 w-20 object-contain" />}
              </div>
              <span className="text-foreground font-semibold text-sm">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* ═══ TESTIMONIAL ═══ */}
    <section className="section-padding section-dark relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/8 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-main text-center relative z-10">
        <ScrollReveal variant="scaleUp" duration={0.8}>
          <motion.blockquote className="max-w-3xl mx-auto">
            <motion.p
              className="text-2xl md:text-3xl font-heading font-bold text-white italic leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              "We solely believe in bringing out the best capabilities that a student possesses."
            </motion.p>
            <motion.cite
              className="block mt-6 text-primary/80 font-accent font-medium not-italic text-sm uppercase tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              — Grandeur, SSCBS
            </motion.cite>
          </motion.blockquote>
        </ScrollReveal>
      </div>
    </section>

    {/* ═══ CTA ═══ */}
    <section className="section-padding relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="container-main text-center relative z-10">
        <ScrollReveal variant="fadeUp" duration={0.7}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to solve real business problems?
          </h2>
          <p className="text-foreground-secondary text-lg mb-10 max-w-lg mx-auto">
            Join Grandeur or collaborate with us on your next consulting challenge.
          </p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { to: "/join", label: "Join Grandeur", primary: true },
              { to: "/contact", label: "Partner With Us", primary: false },
            ].map((btn, i) => (
              <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.12 } } }}>
                <Link
                  to={btn.to}
                  className={`inline-flex items-center gap-2 px-8 py-3.5 font-semibold rounded-lg text-sm transition-all duration-300 ${
                    btn.primary
                      ? "bg-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/25"
                      : "border border-border text-foreground hover:bg-muted"
                  }`}
                >
                  {btn.label}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </ScrollReveal>
      </div>
    </section>
  </div>
  );
};

export default Home;
