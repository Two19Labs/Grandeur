import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { FACULTY_ADVISORS, JOURNEY_MILESTONES } from "@/data/content";
import { Users, Building, GraduationCap, User, Globe, Award, FileText, Download } from "lucide-react";

const About = () => (
  <div>
    <PageHero
      title="About Grandeur"
      subtitle="The Consulting and Knowledge Cell of Shaheed Sukhdev College of Business Studies"
    />

    {/* OUR STORY */}
    <section className="section-padding relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-main">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <SectionHeader title="Our Story" align="left" className="mb-0" />
              <div className="space-y-4 text-foreground-secondary leading-relaxed text-base">
                <p>
                  Grandeur is the oldest consulting society in Delhi University. Established at Shaheed
                  Sukhdev College of Business Studies, India's first collegiate business school, founded
                  in 1987 under the University of Delhi. Grandeur was set up with the objective of
                  benefiting the student community through consulting events, live industry projects,
                  seminars, workshops, and self-development case practice sessions.
                </p>
                <p>
                  Over the years, the cell has accomplished more than 50 projects in the domains of
                  consulting, research, finance, and marketing. Our members have competed in and won at
                  competitions hosted by IIM Ahmedabad, IIM Bangalore, IIM Kashipur, IIM Udaipur, IIM
                  Raipur, IIT Delhi, IIT Bombay, SRCC, and many more, including international stages
                  like the Global Microfinance Case Competition at the University of Melbourne, where our
                  team was the only Indian representation in the international top 12.
                </p>
              </div>
            </div>
            
            {/* Elegant placeholder image container */}
            <div className="lg:col-span-5 relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-primary/30 to-secondary/30 rounded-2xl blur opacity-30" />
              <div className="relative aspect-[4/3] rounded-2xl border border-border/80 bg-slate-900 overflow-hidden flex flex-col items-center justify-center p-6 shadow-xl">
                <div 
                  className="absolute inset-0 opacity-[0.03]" 
                  style={{ 
                    backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", 
                    backgroundSize: "16px 16px" 
                  }} 
                />
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="text-secondary" size={26} />
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-full mb-2">
                  Image Placeholder
                </span>
                <p className="text-slate-400 text-xs text-center max-w-xs leading-relaxed">
                  Grandeur Core Team & Founders Legacy Photo
                </p>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* MISSION & VISION */}
    <section className="section-padding bg-background-alt border-y border-border">
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
                management, economics, law, technology, environment, and various other disciplines,
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

    {/* ANNUAL REPORTS */}
    <section className="section-padding bg-background border-y border-border">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeader title="Our Annual Reports" subtitle="Review our academic chapter performance, consulting case summaries, and operational milestones." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              { year: "2024 - 2025", pages: "18 pages", size: "2.4 MB" },
              { year: "2023 - 2024", pages: "15 pages", size: "1.9 MB" }
            ].map((report, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="p-5 rounded-lg bg-white border border-border flex items-start gap-4 hover:border-primary/45 transition-colors duration-200 group">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 transition-transform">
                    <FileText size={20} />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-heading font-extrabold text-sm text-foreground mb-0.5">Annual Report {report.year}</h4>
                    <p className="text-xs text-foreground-secondary mb-2">{report.pages} · PDF · {report.size}</p>
                    <a 
                      href="#" 
                      className="inline-flex items-center gap-1.5 text-xs text-primary font-extrabold hover:underline"
                    >
                      <Download size={12} /> Download Report
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
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
              <div className="card-base p-6 text-center h-full hover:border-primary/45 transition-colors duration-200">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <item.Icon className="text-primary" size={24} />
                </div>
                <h3 className="font-heading font-bold text-base mb-2">{item.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">{item.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* FACULTY ADVISORS */}
    <section className="section-padding bg-background-alt border-y border-border">
      <div className="container-main">
        <SectionHeader title="Faculty Advisors" />
        <div className="flex flex-wrap justify-center gap-6 max-w-2xl mx-auto">
          {FACULTY_ADVISORS.map((f, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-base p-6 text-center w-52 hover:border-primary/45 transition-colors duration-200">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <User className="text-primary" size={26} />
                </div>
                <h3 className="font-heading font-bold text-base">{f.name}</h3>
                <p className="text-foreground-secondary text-xs mt-1 leading-snug">{f.designation}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* OUR JOURNEY TIMELINE */}
    <section className="section-padding border-b border-border">
      <div className="container-main max-w-3xl">
        <ScrollReveal>
          <SectionHeader title="Our Journey" subtitle="Key milestones in our growth, consulting impact, and legacy since establishment." />
          <div className="relative border-l border-primary/20 pl-6 md:pl-10 ml-4 md:ml-8 space-y-12">
            {JOURNEY_MILESTONES.map((item, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="relative">
                  {/* Timeline marker */}
                  <div className="absolute -left-[31px] md:-left-[47px] top-1.5 w-4 h-4 rounded-full bg-primary border-4 border-background z-10" />
                  
                  <div className="flex flex-col md:flex-row md:items-center gap-2 mb-2">
                    <span className="font-accent font-extrabold text-sm text-primary bg-primary/10 px-3 py-1 rounded-md self-start">
                      {item.year}
                    </span>
                    <h4 className="font-heading font-bold text-base text-foreground">
                      {item.title}
                    </h4>
                  </div>
                  <p className="text-foreground-secondary text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* ABOUT SSCBS */}
    <section className="section-padding relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-secondary/5 rounded-full blur-3xl pointer-events-none" />
      <div className="container-main">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Elegant placeholder image container */}
            <div className="lg:col-span-5 order-last lg:order-first relative">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-accent-blue/30 to-accent-red/30 rounded-2xl blur opacity-30" />
              <div className="relative aspect-[4/3] rounded-2xl border border-border/80 bg-slate-900 overflow-hidden flex flex-col items-center justify-center p-6 shadow-xl">
                <div 
                  className="absolute inset-0 opacity-[0.03]" 
                  style={{ 
                    backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", 
                    backgroundSize: "16px 16px" 
                  }} 
                />
                <div className="w-14 h-14 rounded-full bg-accent-blue/10 flex items-center justify-center mb-4">
                  <Building className="text-accent-blue" size={26} />
                </div>
                <span className="text-xs font-semibold px-3 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-full mb-2">
                  Image Placeholder
                </span>
                <p className="text-slate-400 text-xs text-center max-w-xs leading-relaxed">
                  SSCBS Campus, PSP Area IV, Rohini
                </p>
              </div>
            </div>

            <div className="lg:col-span-7 space-y-6">
              <SectionHeader title="About SSCBS" align="left" className="mb-0" />
              <p className="text-foreground-secondary leading-relaxed text-base">
                Shaheed Sukhdev College of Business Studies (SSCBS) is one of India's premier
                undergraduate business schools, established in 1987 as the first collegiate business
                college in India under the University of Delhi. Ranked #1 in India Today's "Best
                Colleges in BBA" in 2020 and 2021, accredited Grade A+ by NAAC with a CGPA of 3.46,
                and ranked 101-105 among colleges in NIRF Ranking 2025, SSCBS is renowned for its
                vibrant society culture, boasting around 30 active student societies, the highest in
                Delhi University.
              </p>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "#1", label: "BBA College", sub: "India Today 2020 & 2021" },
                  { value: "A+", label: "NAAC Grade", sub: "CGPA 3.46" },
                  { value: "101-105", label: "NIRF Rank", sub: "Among All Colleges" },
                  { value: "30+", label: "Student Societies", sub: "Highest in DU" },
                ].map((stat, i) => {
                  const borderColors = [
                    "border-t-primary",
                    "border-t-secondary",
                    "border-t-accent-blue",
                    "border-t-accent-red"
                  ];
                  const borderColor = borderColors[i % borderColors.length];
                  return (
                    <ScrollReveal key={i} delay={i * 0.08}>
                      <div className={`card-base p-5 text-center border-t-4 ${borderColor} group hover:shadow-md transition-all duration-300 bg-white/80`}>
                        <div className="font-heading text-2xl font-bold text-primary mb-1 transition-transform duration-300 group-hover:scale-110 inline-block">{stat.value}</div>
                        <div className="font-semibold text-sm text-foreground mb-0.5">{stat.label}</div>
                        <div className="text-foreground-secondary text-xs">{stat.sub}</div>
                      </div>
                    </ScrollReveal>
                  );
                })}
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default About;
