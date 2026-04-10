import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Briefcase, Trophy, BookOpen, Mic, FileText, Target } from "lucide-react";
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

const INVICTA_DEADLINE = new Date("2026-03-11T18:00:00+05:30");
const isInvictaLive = () => new Date() <= INVICTA_DEADLINE;

// PARTH EXECUTION — 11:47 AM IST April 6 2026
const PARTH_DEADLINE = new Date("2026-04-06T11:47:00+05:30");
const isParthLive = () => new Date() < PARTH_DEADLINE;

const useCountdown = (deadline: Date) => {
  const calc = () => {
    const diff = Math.max(0, deadline.getTime() - Date.now());
    return {
      days: Math.floor(diff / 86400000),
      hours: Math.floor((diff % 86400000) / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [time, setTime] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setTime(calc()), 1000);
    return () => clearInterval(id);
  }, []);
  return time;
};

// Stagger container for groups of cards
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariant = {
  hidden: { opacity: 0, y: 40, scale: 0.95 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

const ParthCountdown = ({ deadline }: { deadline: Date }) => {
  const calc = () => {
    const diff = Math.max(0, deadline.getTime() - Date.now());
    return {
      hours: Math.floor(diff / 3600000),
      minutes: Math.floor((diff % 3600000) / 60000),
      seconds: Math.floor((diff % 60000) / 1000),
    };
  };
  const [t, setT] = useState(calc);
  useEffect(() => {
    const id = setInterval(() => setT(calc()), 1000);
    return () => clearInterval(id);
  }, []);

  const isDone = t.hours === 0 && t.minutes === 0 && t.seconds === 0;

  const units = [
    { value: t.hours, label: "Hours" },
    { value: t.minutes, label: "Minutes" },
    { value: t.seconds, label: "Seconds" },
  ];

  return (
    <div className="flex flex-col items-center gap-6">
      <div className="flex items-center gap-4 md:gap-8">
        {units.map((u, i) => (
          <div key={u.label} className="flex items-center gap-4 md:gap-8">
            <div className="flex flex-col items-center">
              <motion.div
                key={u.value}
                initial={{ rotateX: -90, opacity: 0 }}
                animate={{ rotateX: 0, opacity: 1 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
                style={{ perspective: 600 }}
                className="relative"
              >
                <div
                  className="flex items-center justify-center rounded-2xl font-heading font-extrabold tabular-nums"
                  style={{
                    fontSize: "clamp(3rem, 10vw, 7rem)",
                    width: "clamp(100px, 18vw, 200px)",
                    height: "clamp(90px, 16vw, 180px)",
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid rgba(192,132,252,0.3)",
                    color: isDone ? "#f472b6" : "#ffffff",
                    boxShadow: "0 0 40px rgba(139,0,255,0.15)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  {String(u.value).padStart(2, "0")}
                </div>
              </motion.div>
              <span className="mt-3 text-xs md:text-sm font-semibold uppercase tracking-widest" style={{ color: "#c084fc" }}>
                {u.label}
              </span>
            </div>
            {i < units.length - 1 && (
              <motion.span
                className="font-heading font-bold self-start mt-4"
                style={{ fontSize: "clamp(2rem, 6vw, 5rem)", color: "rgba(192,132,252,0.5)" }}
                animate={{ opacity: [1, 0.3, 1] }}
                transition={{ duration: 1.2, repeat: Infinity }}
              >
                :
              </motion.span>
            )}
          </div>
        ))}
      </div>
      {isDone && (
        <motion.p
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="text-2xl font-heading font-bold"
          style={{ color: "#f472b6" }}
        >
          Time's up. ⚡
        </motion.p>
      )}
    </div>
  );
};

const Home = () => {
  const invictaLive = isInvictaLive();
  const countdown = useCountdown(INVICTA_DEADLINE);
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 600], [0, 120]);

  return (
  <div>
    {/* INVICTA 2026 LIVE BANNER — parallax hero */}
    {invictaLive && (
      <motion.section
        className="pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.img
          src={heroBg}
          alt=""
          className="absolute inset-0 w-full h-full object-cover blur-[3px] scale-105"
          style={{ y: heroBgY }}
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="container-main relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-4xl mx-auto"
          >
            <img src={grandeurLogoHero} alt="Grandeur" className="h-28 md:h-40 w-auto mx-auto mb-8 drop-shadow-2xl" />
            <motion.span
              className="inline-block px-4 py-1.5 rounded-full bg-secondary/30 text-secondary font-accent font-semibold text-sm uppercase tracking-widest mb-6 animate-pulse"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
            >
              🔴 Live Now
            </motion.span>
            <motion.h1
              className="font-heading text-5xl md:text-7xl font-extrabold text-white tracking-tight mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35, duration: 0.7 }}
            >
              INVICTA 2026
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-white/70 font-medium mb-3"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              The Ultimate National Case Study Competition
            </motion.p>
            <motion.p
              className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              Presented by Grandeur - The Consulting & Knowledge Cell of SSCBS
            </motion.p>
            <motion.div
              className="flex justify-center gap-6 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.65 }}
            >
              {[
                { value: countdown.days, label: "Days" },
                { value: countdown.hours, label: "Hours" },
                { value: countdown.minutes, label: "Minutes" },
                { value: countdown.seconds, label: "Seconds" },
              ].map((unit) => (
                <div key={unit.label} className="flex flex-col items-center">
                  <span className="font-accent text-2xl md:text-3xl font-bold text-white">{String(unit.value).padStart(2, "0")}</span>
                  <span className="text-xs text-white/60 mt-1.5 font-medium uppercase tracking-wider">{unit.label}</span>
                </div>
              ))}
            </motion.div>
            <motion.p
              className="text-sm text-white/60 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              Registrations close <strong className="text-white">11th March 2026, 6:00 PM</strong>
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.75 }}
            >
              <a href="https://unstop.com/competitions/invicta-2026-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1642243" target="_blank" rel="noopener noreferrer" className="px-8 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">
                Register Now on Unstop
              </a>
              <Link to="/invicta" className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">
                Learn More
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>
    )}

    {/* DEFAULT HERO (when Invicta is not live) */}
    {!invictaLive && (
    <section className="pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">
      <motion.img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover blur-[3px] scale-105" style={{ y: heroBgY }} />
      <div className="absolute inset-0 bg-black/45" />
      <div className="container-main relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
          <img src={grandeurLogoHero} alt="Grandeur" className="h-28 md:h-40 w-auto mx-auto mb-8 drop-shadow-2xl" />
          <h1 className="font-body text-5xl md:text-7xl font-semibold text-white tracking-wide mb-3">Grandeur</h1>
          <p className="text-lg md:text-2xl text-white/70 font-medium mb-3">The Consulting & Knowledge Cell of SSCBS</p>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8">Delhi University's Oldest Consulting Society</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/projects" className="px-8 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm">Our Projects</Link>
            <Link to="/invicta" className="px-8 py-3.5 border-2 border-white/30 text-white font-semibold rounded-lg hover:bg-white/10 transition-colors text-sm">Invicta</Link>
          </div>
        </motion.div>
      </div>
    </section>
    )}

    {/* PARTH EXECUTION BANNER — disappears at deadline */}
    {isParthLive() && <section className="relative overflow-hidden py-16 md:py-24" style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 40%, #0d1a3a 100%)" }}>
      {/* Animated background blobs */}
      <motion.div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(139,0,255,0.25) 0%, transparent 70%)", filter: "blur(60px)" }}
        animate={{ scale: [1, 1.15, 1], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-0 right-1/4 w-80 h-80 rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,30,80,0.2) 0%, transparent 70%)", filter: "blur(50px)" }}
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      <div className="container-main relative z-10 text-center">
        <ScrollReveal variant="scaleUp">
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-6 text-xs font-bold uppercase tracking-widest"
            style={{ background: "rgba(139,0,255,0.2)", border: "1px solid rgba(139,0,255,0.5)", color: "#c084fc" }}
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <span className="w-2 h-2 rounded-full bg-purple-400 animate-ping inline-block" />
            Live Event
          </motion.div>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.1}>
          <motion.h2
            className="font-heading font-extrabold uppercase tracking-tight mb-2"
            style={{ fontSize: "clamp(3rem, 10vw, 7rem)", background: "linear-gradient(135deg, #ffffff 0%, #c084fc 50%, #f472b6 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}
            animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
            transition={{ duration: 5, repeat: Infinity }}
          >
            Parth Execution
          </motion.h2>
        </ScrollReveal>

        <ScrollReveal variant="fadeUp" delay={0.2}>
          <p className="text-white/50 text-lg mb-12 font-medium">Countdown to zero.</p>
        </ScrollReveal>

        {/* Big Timer */}
        <ScrollReveal variant="scaleUp" delay={0.3}>
          <ParthCountdown deadline={PARTH_DEADLINE} />
        </ScrollReveal>
      </div>
    </section>}

    {/* WHO WE ARE — fade left/right split */}
    <section className="section-padding bg-background-alt">
      <div className="container-main">
        <ScrollReveal variant="fadeUp">
          <SectionHeader title="Who We Are" subtitle="Grandeur is a student-run, corporate-facilitated, and faculty-guided consulting cell at Shaheed Sukhdev College of Business Studies (SSCBS), University of Delhi. We prepare students for the real world through live industry projects, research publications, case competitions, and knowledge sharing sessions." />
        </ScrollReveal>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {[
            { Icon: Briefcase, title: "Live Projects", desc: "50+ projects completed across consulting, research, finance, and marketing" },
            { Icon: Trophy, title: "Competition Wins", desc: "41 podium finishes across 60+ inter-college competitions" },
            { Icon: BookOpen, title: "Publications", desc: "In-depth industry and company analysis reports across sectors" },
          ].map((item, i) => (
            <motion.div key={i} variants={cardVariant}>
              <motion.div
                className="card-base p-8 text-center h-full"
                whileHover={{ y: -6, boxShadow: "0 16px 40px rgba(0,0,0,0.12)" }}
                transition={{ duration: 0.25 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.Icon className="text-primary" size={26} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>

    {/* STATS BAR — count-up with fade */}
    <section className="py-16 section-dark">
      <div className="container-main">
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

    {/* INVICTA TEASER — scale + glow */}
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal variant="scaleUp">
          <motion.div
            className="gradient-invicta rounded-2xl p-8 md:p-14 border border-border"
            whileHover={{ scale: 1.01 }}
            transition={{ duration: 0.3 }}
          >
            <div className="max-w-3xl">
              <ScrollReveal variant="fadeLeft" delay={0.1}>
                <span className="text-secondary font-accent font-semibold text-sm uppercase tracking-widest">Flagship Event</span>
              </ScrollReveal>
              <ScrollReveal variant="fadeLeft" delay={0.2}>
                <h2 className="font-heading text-3xl md:text-4xl font-bold mt-3 mb-4">INVICTA - The Ultimate Case Study Competition</h2>
              </ScrollReveal>
              <ScrollReveal variant="fadeLeft" delay={0.3}>
                <p className="text-foreground-secondary text-lg mb-6">Our flagship pan-India case competition challenging the brightest minds to solve real corporate conundrums.</p>
              </ScrollReveal>
              <div className="flex flex-wrap gap-6 mb-8">
                {[{ v: "1200+", l: "Registrations" }, { v: "₹20K+", l: "Cash Prizes" }, { v: "₹1L+", l: "Overall Prizes" }].map((s, i) => (
                  <ScrollReveal key={i} delay={0.35 + i * 0.1} variant="scaleUp">
                    <div className="text-center">
                      <div className="font-accent text-2xl font-bold text-primary">{s.v}</div>
                      <div className="text-sm text-foreground-secondary">{s.l}</div>
                    </div>
                  </ScrollReveal>
                ))}
              </div>
              <Link to="/invicta" className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all">
                Learn More About Invicta →
              </Link>
            </div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>

    {/* LIVE PROJECTS — alternating left/right */}
    <section className="section-padding bg-background-alt">
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
                className="card-base p-6 h-full flex flex-col"
                whileHover={{ y: -5, borderColor: "hsl(var(--primary) / 0.4)" }}
                transition={{ duration: 0.2 }}
              >
                <div className="w-12 h-12 rounded-lg bg-accent-blue/10 flex items-center justify-center mb-4">
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
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/projects" className="text-primary font-semibold hover:underline">View All Projects →</Link>
        </motion.div>
      </div>
    </section>

    {/* PUBLICATIONS — flip-up cards */}
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal variant="fadeUp">
          <SectionHeader title="Latest Publications" />
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
              variants={{ hidden: { opacity: 0, y: 50, rotateX: 12 }, visible: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: i * 0.12 } } }}
              style={{ perspective: 900 }}
            >
              <motion.div
                className="card-base p-6 h-full flex flex-col"
                whileHover={{ y: -6 }}
                transition={{ duration: 0.2 }}
              >
                <div className="h-36 rounded-lg bg-muted flex items-center justify-center mb-4">
                  <FileText className="text-muted-foreground" size={32} />
                </div>
                <span className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">{p.category}</span>
                <h3 className="font-heading font-bold mb-2">{p.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed flex-1">{p.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
        <motion.div
          className="text-center mt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <Link to="/publications" className="text-primary font-semibold hover:underline">View All Publications →</Link>
        </motion.div>
      </div>
    </section>

    {/* CORNERSTONE ACTIVITIES — stagger with hover lift */}
    <section className="section-padding section-dark-alt">
      <div className="container-main">
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
                variants={{ hidden: { opacity: 0, x: i % 2 === 0 ? -30 : 30, y: 20 }, visible: { opacity: 1, x: 0, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], delay: i * 0.08 } } }}
              >
                <motion.div
                  className="p-6 rounded-xl bg-white/5 border border-white/10 h-full"
                  whileHover={{ backgroundColor: "rgba(255,255,255,0.10)", y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-secondary/20 flex items-center justify-center mb-4">
                    <Icon className="text-secondary" size={22} />
                  </div>
                  <h3 className="font-heading font-bold mb-2 text-white">{a.title}</h3>
                  <p className="text-white/60 text-sm leading-relaxed">{a.description}</p>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>

    {/* COLLABORATORS MARQUEE */}
    <section className="py-20 border-y border-border overflow-hidden bg-background-alt">
      <ScrollReveal variant="fadeUp">
        <div className="container-main mb-10">
          <SectionHeader title="Our Collaborators" />
        </div>
      </ScrollReveal>
      <div className="relative">
        <div className="flex animate-marquee w-max items-center">
          {[...COLLABORATORS, ...COLLABORATORS].map((c, i) => (
            <div key={i} className="mx-10 px-14 py-12 rounded-2xl bg-background shadow-lg border border-border flex flex-col items-center gap-6 whitespace-nowrap min-w-[280px]">
              <div className="flex items-center gap-4">
                <img src={COLLAB_LOGOS[c]} alt={c} className="h-40 w-40 object-contain" />
                {c === "Honasa Consumer (Mamaearth)" && <img src={collabMamaearth} alt="Mamaearth" className="h-40 w-40 object-contain" />}
              </div>
              <span className="text-foreground font-bold text-xl">{c}</span>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* TESTIMONIAL — dramatic fade */}
    <section className="section-padding section-dark">
      <div className="container-main text-center">
        <ScrollReveal variant="scaleUp" duration={0.8}>
          <motion.blockquote
            className="max-w-3xl mx-auto"
            whileInView={{ opacity: 1 }}
          >
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
              className="block mt-4 text-white/60 font-medium not-italic"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              - Grandeur, SSCBS
            </motion.cite>
          </motion.blockquote>
        </ScrollReveal>
      </div>
    </section>

    {/* CTA — slide up */}
    <section className="section-padding bg-primary">
      <div className="container-main text-center">
        <ScrollReveal variant="fadeUp" duration={0.7}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to solve real business problems?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">Join Grandeur or collaborate with us.</p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              { to: "/contact", label: "Join Us", style: "px-8 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity" },
              { to: "/contact", label: "Partner With Us", style: "px-8 py-3.5 border-2 border-primary-foreground text-primary-foreground font-semibold rounded-lg hover:bg-primary-foreground/10 transition-colors" },
            ].map((btn, i) => (
              <motion.div key={i} variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45, delay: i * 0.12 } } }}>
                <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
                  <Link to={btn.to} className={btn.style}>{btn.label}</Link>
                </motion.div>
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
