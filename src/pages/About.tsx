import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { FACULTY_ADVISORS } from "@/data/content";
import { Users, Building, GraduationCap, User, Globe, Award } from "lucide-react";

const About = () => (
  <div>
    <PageHero
      title="About Grandeur"
      subtitle="The Consulting and Knowledge Cell of Shaheed Sukhdev College of Business Studies"
    />

    {/* OUR STORY */}
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeader title="Our Story" />
          <div className="max-w-3xl mx-auto space-y-5 text-foreground-secondary leading-relaxed text-base">
            <p>
              Grandeur is the oldest consulting society in Delhi University. Established at Shaheed
              Sukhdev College of Business Studies — India's first collegiate business school, founded
              in 1987 under the University of Delhi — Grandeur was set up with the objective of
              benefiting the student community through consulting events, live industry projects,
              seminars, workshops, and self-development case practice sessions.
            </p>
            <p>
              Over the years, the cell has accomplished more than 50 projects in the domains of
              consulting, research, finance, and marketing. Our members have competed in and won at
              competitions hosted by IIM Ahmedabad, IIM Bangalore, IIM Kashipur, IIM Udaipur, IIM
              Raipur, IIT Delhi, IIT Bombay, SRCC, and many more — including international stages
              like the Global Microfinance Case Competition at the University of Melbourne, where our
              team was the only Indian representation in the international top 12.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* MISSION & VISION */}
    <section className="section-padding bg-background-alt">
      <div className="container-main">
        <SectionHeader title="Mission & Vision" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="card-base p-8 h-full border-t-4 border-t-primary">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                <Award className="text-primary" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-primary">Our Mission</h3>
              <p className="text-foreground-secondary leading-relaxed text-sm">
                To inculcate knowledge and skills among students from the eclectic fields of
                management, economics, law, technology, environment, and various other disciplines —
                through real-world consulting exposure and rigorous intellectual development.
              </p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="card-base p-8 h-full border-t-4 border-t-accent-blue">
              <div className="w-12 h-12 rounded-xl bg-accent-blue/10 flex items-center justify-center mb-5">
                <Globe className="text-accent-blue" size={24} />
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 text-accent-blue">Our Vision</h3>
              <p className="text-foreground-secondary leading-relaxed text-sm">
                To nurture students into future business leaders by bridging the gap between academic
                learning and corporate reality. We envision a community where every member develops
                the advisory acumen, strategic thinking, and professional confidence to excel in
                consulting and general management.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* WHY GRANDEUR */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeader title="Why Grandeur" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              Icon: Users,
              title: "Student-Run, Corporate-Facilitated",
              desc: "We operate independently as students but maintain deep ties with the corporate sector for live project opportunities and mentorship.",
            },
            {
              Icon: GraduationCap,
              title: "Faculty-Guided Excellence",
              desc: "Under the guidance of faculty advisors, our projects and initiatives maintain academic rigour alongside practical relevance.",
            },
            {
              Icon: Building,
              title: "Legacy of Leadership",
              desc: "Our alumni have gone on to Bain & Company, Grant Thornton, BCG, and top MBA programs at IIM Ahmedabad, IIM Calcutta, and more.",
            },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-base p-8 text-center h-full group hover:shadow-lg transition-shadow duration-300">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                  <item.Icon className="text-primary" size={26} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-3">{item.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* FACULTY ADVISORS */}
    <section className="section-padding bg-background-alt">
      <div className="container-main">
        <SectionHeader title="Faculty Advisors" />
        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
          {FACULTY_ADVISORS.map((f, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-base p-8 text-center w-56">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <User className="text-primary" size={30} />
                </div>
                <h3 className="font-heading font-bold text-base">{f.name}</h3>
                <p className="text-foreground-secondary text-xs mt-1 leading-snug">{f.designation}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ABOUT SSCBS */}
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeader title="About SSCBS" />
          <div className="max-w-3xl mx-auto">
            <p className="text-foreground-secondary leading-relaxed text-base mb-8">
              Shaheed Sukhdev College of Business Studies (SSCBS) is one of India's premier
              undergraduate business schools, established in 1987 as the first collegiate business
              college in India under the University of Delhi. Ranked #1 in India Today's "Best
              Colleges in BBA" in 2020 and 2021, accredited Grade A+ by NAAC with a CGPA of 3.46,
              and ranked 101–105 among colleges in NIRF Ranking 2025, SSCBS is renowned for its
              vibrant society culture — boasting around 30 active student societies, the highest in
              Delhi University.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { value: "#1", label: "BBA College", sub: "India Today 2020 & 2021" },
                { value: "A+", label: "NAAC Grade", sub: "CGPA 3.46" },
                { value: "101–105", label: "NIRF Rank", sub: "Among All Colleges" },
                { value: "30+", label: "Student Societies", sub: "Highest in DU" },
              ].map((stat, i) => (
                <ScrollReveal key={i} delay={i * 0.08}>
                  <div className="card-base p-5 text-center">
                    <div className="font-heading text-2xl font-bold text-primary mb-1">{stat.value}</div>
                    <div className="font-semibold text-sm text-foreground mb-0.5">{stat.label}</div>
                    <div className="text-foreground-secondary text-xs">{stat.sub}</div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default About;
