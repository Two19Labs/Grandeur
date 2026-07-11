import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Briefcase, BookOpen, Clock3, FileText, MapPin, Mic, Target, Trophy } from "lucide-react";
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
import { EchelonCountdown } from "@/components/EchelonBanner";

import imgProjects from "@/assets/cornerstone-projects.png";
import imgLectures from "@/assets/cornerstone-lectures.png";
import imgCases from "@/assets/cornerstone-cases.png";
import imgResearch from "@/assets/cornerstone-research.png";
import imgEvents from "@/assets/cornerstone-events.png";

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

const ECHELON_REGISTRATION_DEADLINE = new Date("2026-04-20T12:00:00+05:30");
const isEchelonLive = () => new Date() < ECHELON_REGISTRATION_DEADLINE;

const ECHELON_ROUNDS = [
  {
    title: "Quiz Round",
    description: "30-minute Unstop elimination quiz with 25 MCQs across business awareness, logic, finance, strategy, and market concepts.",
    timeline: "Published on Unstop as the first stage",
  },
  {
    title: "Offline Round",
    description: "On-campus simulation challenge with a live business scenario, dynamic changes, and a final strategy presentation.",
    timeline: "Published on Unstop as the final stage",
  },
];

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
  const echelonLive = isEchelonLive();
  const { scrollY } = useScroll();
  const heroBgY = useTransform(scrollY, [0, 600], [0, 120]);

  const filteredActivities = CORNERSTONE_ACTIVITIES.filter(a => a.title !== "Invicta");
  const activityImages = [imgProjects, imgLectures, imgCases, imgResearch, imgEvents];

  return (
  <div>
    {/* DEFAULT HERO */}
    <section className="pt-36 pb-20 md:pt-44 md:pb-28 relative overflow-hidden">
      <motion.img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover blur-[3px] scale-105" style={{ y: heroBgY }} />
      <div className="absolute inset-0 bg-black/45" />
      <div className="container-main relative z-10">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center max-w-4xl mx-auto">
          <img src={grandeurLogoHero} alt="Grandeur" className="h-28 md:h-40 w-auto mx-auto mb-8 drop-shadow-2xl" />
          <p className="text-lg md:text-2xl text-white/70 font-medium mb-3">The Consulting & Knowledge Cell of SSCBS</p>
          <p className="text-white/60 text-base md:text-lg max-w-2xl mx-auto mb-8">Delhi University's Oldest Consulting Society</p>
        </motion.div>
      </div>
    </section>

    {/* PARTH EXECUTION BANNER — disappears at deadline */}
    {isParthLive() && <section className="relative overflow-hidden py-16 md:py-24" style={{ background: "linear-gradient(135deg, #0a0a0a 0%, #1a0a2e 40%, #0d1a3a 100%)" }}>
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

        <ScrollReveal variant="scaleUp" delay={0.3}>
          <ParthCountdown deadline={PARTH_DEADLINE} />
        </ScrollReveal>
      </div>
    </section>}

    {/* WHO WE ARE */}
    {echelonLive && (
      <section className="section-padding bg-background-alt">
        <div className="container-main">
          <ScrollReveal variant="scaleUp">
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-slate-950 px-6 py-8 md:px-10 md:py-12">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(59,130,246,0.28),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(249,115,22,0.24),_transparent_35%)]" />
              <div className="absolute inset-y-0 right-0 w-1/2 bg-[linear-gradient(135deg,transparent_0%,rgba(255,255,255,0.05)_100%)]" />

              <div className="relative z-10 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
                <div>
                  <span className="inline-flex items-center rounded-full border border-sky-400/25 bg-sky-400/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.28em] text-sky-200">
                    Coming Soon
                  </span>
                  <h2 className="mt-5 font-heading text-3xl font-bold text-white md:text-5xl">
                    Echelon: The Simulation Challenge
                  </h2>
                  <p className="mt-4 max-w-2xl text-base leading-7 text-white/72 md:text-lg">
                    Grandeur&apos;s latest competition is now live on Unstop with a quiz round followed by an on-campus simulation finale.
                  </p>

                  <div className="mt-6 flex flex-wrap gap-3 text-sm text-white/72">
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2">
                      <Clock3 size={16} className="text-sky-300" />
                      Registrations close 20 Apr&apos;26, 12:00 PM IST
                    </span>
                    <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/6 px-4 py-2">
                      <MapPin size={16} className="text-orange-300" />
                      SSCBS, Delhi
                    </span>
                  </div>

                  <div className="mt-8 grid gap-4 md:grid-cols-2">
                    {ECHELON_ROUNDS.map((round, index) => (
                      <div key={round.title} className="rounded-2xl border border-white/10 bg-white/6 p-5 backdrop-blur">
                        <div className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/85">
                          Round {index + 1}
                        </div>
                        <h3 className="mt-3 font-heading text-xl font-bold text-white">{round.title}</h3>
                        <p className="mt-3 text-sm leading-6 text-white/68">{round.description}</p>
                        <p className="mt-4 text-xs uppercase tracking-[0.22em] text-white/42">{round.timeline}</p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href="https://unstop.com/competitions/echelon-the-simulation-challenge-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1670580"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-6 py-3.5 text-sm font-semibold text-secondary-foreground transition-opacity hover:opacity-90"
                    >
                      View on Unstop
                      <ArrowUpRight size={16} />
                    </a>
                  </div>
                </div>

                <div className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 backdrop-blur md:p-7">
                  <p className="text-xs font-semibold uppercase tracking-[0.28em] text-sky-200/85">
                    Countdown
                  </p>
                  <h3 className="mt-3 font-heading text-2xl font-bold text-white md:text-3xl">
                    Until registrations close
                  </h3>
                  <p className="mt-3 text-sm leading-6 text-white/65">
                    This block follows the public Unstop timeline and hides itself automatically once that published window ends.
                  </p>
                  <div className="mt-6">
                    <EchelonCountdown deadline={ECHELON_REGISTRATION_DEADLINE} />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    )}

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

    {/* CORNERSTONE ACTIVITIES — moved higher and styled as asymmetrical collage */}
    <section className="section-padding bg-slate-950">
      <div className="container-main">
        <ScrollReveal variant="fadeUp">
          <SectionHeader title="Our Cornerstone Activities" dark subtitle="Empowering student growth and corporate success through Strategic Consulting, Market Research, Financial Advisory, and Growth Marketing." />
        </ScrollReveal>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-6 gap-6"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {filteredActivities.map((a, i) => {
            const Icon = ICONS[a.icon] || Briefcase;
            const img = activityImages[i];
            const gridSpans = [
              "md:col-span-3", // Projects
              "md:col-span-3", // Lectures
              "md:col-span-2", // Cases
              "md:col-span-2", // Research
              "md:col-span-2"  // Events (Ranneeti)
            ];
            return (
              <motion.div
                key={i}
                className={`relative overflow-hidden rounded-2xl h-80 group ${gridSpans[i]}`}
                variants={cardVariant}
              >
                {/* Background Image */}
                <img 
                  src={img} 
                  alt={a.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                {/* Dark Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-950/20 group-hover:via-slate-950/80 transition-all duration-300" />
                
                {/* Card Content */}
                <div className="absolute inset-0 p-6 flex flex-col justify-end z-10">
                  <div className="w-10 h-10 rounded-lg bg-secondary/90 flex items-center justify-center mb-3">
                    <Icon className="text-secondary-foreground" size={20} />
                  </div>
                  <h3 className="font-heading font-bold text-lg text-white mb-1 group-hover:text-secondary transition-colors">
                    {a.title}
                  </h3>
                  <p className="text-slate-300 text-xs leading-relaxed">
                    {a.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>

    <EchelonCountdown />

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

    {/* CTA SECTION — moved higher, keep just Partner With Us */}
    <section className="section-padding bg-primary text-center">
      <div className="container-main">
        <ScrollReveal variant="fadeUp" duration={0.7}>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-primary-foreground mb-4">Ready to solve real business problems?</h2>
          <p className="text-primary-foreground/80 text-lg mb-8">Collaborate with Grandeur for strategy, finance, and marketing solutions.</p>
          <motion.div
            className="flex justify-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <motion.div whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
              <Link to="/contact" className="px-8 py-3.5 bg-secondary text-secondary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity">
                Partner With Us
              </Link>
            </motion.div>
          </motion.div>
        </ScrollReveal>
      </div>
    </section>

    {/* COLLABORATORS MARQUEE */}
    <section className="py-20 border-y border-border overflow-hidden bg-background-alt">
      <ScrollReveal variant="fadeUp">
        <div className="container-main mb-10">
          <SectionHeader title="Our Collaborators" />
        </div>
      </ScrollReveal>
      <div className="relative overflow-hidden mask-horizontal-fade">
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
  </div>
  );
};

export default Home;
