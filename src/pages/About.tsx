import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { FACULTY_ADVISORS } from "@/data/content";
import { Users, Building, GraduationCap, User, Globe, Target } from "lucide-react";
import teamTushar from "@/assets/team-tushar-marwaha.jpg";
import teamSushmita from "@/assets/team-sushmita.jpg";

const FACULTY_IMAGES: Record<string, string> = {
  "team-tushar-marwaha": teamTushar,
  "team-sushmita": teamSushmita,
};

const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } } };

const About = () => (
  <div>
    <PageHero
      title="About Grandeur"
      subtitle="The Consulting and Knowledge Cell of Shaheed Sukhdev College of Business Studies — Delhi University's oldest consulting society."
      badge="Est. at SSCBS, University of Delhi"
    />

    {/* STORY */}
    <section className="section-padding relative">
      <div className="absolute top-0 right-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="container-main relative z-10">
        <ScrollReveal>
          <SectionHeader title="Our Story" />
          <div className="max-w-3xl mx-auto text-foreground-secondary leading-relaxed space-y-5 text-base">
            <p>
              Grandeur is the oldest consulting society in the Delhi University circuit. Established at Shaheed Sukhdev College of Business Studies — India's first collegiate business school, founded in 1987 under the University of Delhi — Grandeur was set up with the objective of benefiting the student community through consulting events, live industry projects, seminars, workshops, and self-development case practice sessions.
            </p>
            <p>
              The cell operates as a student-run, corporate-facilitated, and faculty-guided body with a singular mission: to prepare students for the complexities of real-world consulting and strategic problem-solving. Over the years, it has completed more than 50 live projects across consulting, research, finance, and marketing domains.
            </p>
            <p>
              Our members have competed in and won at competitions hosted by IIM Ahmedabad, IIM Bangalore, IIM Calcutta, IIM Kashipur, IIM Udaipur, IIM Raipur, IIT Delhi, IIT Bombay, SRCC, and more — including international stages like the Global Microfinance Case Competition at the University of Melbourne, where our team was the only Indian representation in the global top 12. More recently, a team from SSCBS won the first position at BrAINWARS 2024, organized by Bain & Company, earning Pre-Placement Interview (PPI) opportunities with the Bain Capability Network.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* MISSION & VISION */}
    <section className="section-padding bg-background-alt relative">
      <div className="absolute inset-0 dot-pattern opacity-20" />
      <div className="container-main relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
            <motion.div
              className="glass-card rounded-xl p-8 h-full relative overflow-hidden group"
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-primary/0" />
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 border border-primary/20">
                <Target className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">Our Mission</h3>
              <p className="text-foreground-secondary leading-relaxed">
                To inculcate knowledge and skills among students from the eclectic fields of management, economics, law, technology, environment, and various other disciplines, through real-world consulting exposure and rigorous intellectual development. We aim to bridge the gap between classroom theory and corporate practice.
              </p>
            </motion.div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <motion.div
              className="glass-card rounded-xl p-8 h-full relative overflow-hidden group"
              whileHover={{ y: -4 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent-blue to-accent-blue/0" />
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-5 border border-accent-blue/20">
                <Globe className="text-accent-blue" size={24} />
              </div>
              <h3 className="font-heading text-2xl font-bold mb-4 text-foreground">Our Vision</h3>
              <p className="text-foreground-secondary leading-relaxed">
                To nurture students into future business leaders by bridging the gap between academic learning and corporate reality. We envision a community where every member develops the advisory acumen, strategic thinking, and professional confidence to excel in consulting and general management on the world stage.
              </p>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* WHY GRANDEUR */}
    <section className="section-padding relative">
      <div className="container-main">
        <SectionHeader title="Why Grandeur" />
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {[
            { Icon: Users, title: "Student-Run, Corporate-Facilitated", desc: "We operate independently as students but maintain deep ties with the corporate sector for live project opportunities and mentorship from industry leaders." },
            { Icon: GraduationCap, title: "Faculty-Guided Excellence", desc: "Under the guidance of dedicated faculty advisors, our projects and initiatives maintain academic rigor alongside practical relevance." },
            { Icon: Building, title: "Legacy of Leadership", desc: "Our alumni have gone on to Bain & Company, Grant Thornton, Accenture Strategy, D.E. Shaw, L.E.K. Consulting, and top MBA programs at IIM Calcutta, IIM Ahmedabad, and more." },
          ].map((item, i) => (
            <motion.div key={i} variants={fadeUp}>
              <motion.div
                className="card-base p-8 text-center h-full group"
                whileHover={{ y: -4 }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 border border-primary/20 group-hover:bg-primary/20 transition-colors">
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

    {/* FACULTY ADVISORS */}
    <section className="section-padding bg-background-alt">
      <div className="container-main">
        <SectionHeader title="Faculty Advisors" subtitle="The mentors who guide Grandeur." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
          {FACULTY_ADVISORS.map((f, i) => {
            const imgSrc = f.image ? FACULTY_IMAGES[f.image] : "";
            return (
              <ScrollReveal key={i} delay={i * 0.1}>
                <motion.div className="card-base overflow-hidden group" whileHover={{ y: -4 }}>
                  <div className="pt-8 pb-4 flex flex-col items-center bg-gradient-to-b from-muted/30 to-transparent">
                    <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/40 transition-colors bg-muted flex items-center justify-center">
                      {imgSrc ? (
                        <img src={imgSrc} alt={f.name} className="w-full h-full object-cover object-top" />
                      ) : (
                        <User className="text-muted-foreground" size={30} />
                      )}
                    </div>
                  </div>
                  <div className="px-5 pb-6 text-center">
                    <h3 className="font-heading font-bold text-base">{f.name}</h3>
                    <p className="text-foreground-secondary text-xs mt-0.5">{f.designation}</p>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>

    {/* ABOUT SSCBS */}
    <section className="section-padding relative">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeader title="About SSCBS" />
          <div className="max-w-3xl mx-auto">
            <motion.div
              className="glass-card rounded-xl p-8 md:p-10 relative overflow-hidden"
              whileHover={{ y: -2 }}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-secondary via-secondary/50 to-transparent" />
              <div className="text-foreground-secondary leading-relaxed space-y-4">
                <p>
                  <strong className="text-foreground">Shaheed Sukhdev College of Business Studies (SSCBS)</strong> is one of India's premier undergraduate business schools, established in 1987 as the first collegiate business college in India under the University of Delhi.
                </p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-6">
                  {[
                    { label: "NAAC Grade", value: "A+" },
                    { label: "CGPA", value: "3.46" },
                    { label: "NIRF Rank", value: "101-105" },
                    { label: "Active Societies", value: "30+" },
                  ].map((stat, i) => (
                    <div key={i} className="text-center p-3 rounded-lg bg-muted/50 border border-border/50">
                      <div className="font-accent font-bold text-lg text-primary">{stat.value}</div>
                      <div className="text-xs text-foreground-secondary">{stat.label}</div>
                    </div>
                  ))}
                </div>
                <p>
                  Ranked #1 in India Today's "Best Colleges in BBA" in 2020 and 2021, SSCBS is renowned for its vibrant society culture, boasting around 30 active student societies — the highest in Delhi University. The college consistently produces graduates who go on to top consulting firms, investment banks, and prestigious MBA programs worldwide.
                </p>
              </div>
            </motion.div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default About;
