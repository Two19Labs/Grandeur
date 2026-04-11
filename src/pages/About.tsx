import { Link } from "react-router-dom";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { FACULTY_ADVISORS } from "@/data/content";
import { Users, Building, GraduationCap, User } from "lucide-react";

const About = () => (
  <div>
    <PageHero title="About Grandeur" subtitle="The Consulting and Knowledge Cell of Shaheed Sukhdev College of Business Studies" />

    {/* STORY */}
    <section className="section-padding">
      <div className="container-main">
        <ScrollReveal>
          <SectionHeader title="Our Story" />
          <div className="max-w-3xl mx-auto text-foreground-secondary leading-relaxed space-y-4">
            <p>Grandeur is the oldest consulting society in Delhi University. <p>Grandeur is the oldest consulting society in Delhi University. Established at Shaheed Sukhdev College of Business Studies, India's first collegiate business school, founded in 1987 under the University of Delhi, Grandeur was set up with the objective of benefiting the student community through consulting events, live industry projects, seminars, workshops, and self-development case practice sessions.</p> was set up with the objective of benefiting the student community through consulting events, live industry projects, seminars, workshops, and self-development case practice sessions.</p>
            <p>Over the years, the cell has accomplished more than 50 projects in the domains of consulting, research, finance, and marketing. Our members have competed in and won at competitions hosted by IIM Ahmedabad, IIM Bangalore, IIM Kashipur, IIM Udaipur, IIM Raipur, IIT Delhi, IIT Bombay, SRCC, <p>Over the years, the cell has accomplished more than 50 projects in the domains of consulting, research, finance, and marketing. Our members have competed in and won at competitions hosted by IIM Ahmedabad, IIM Bangalore, IIM Kashipur, IIM Udaipur, IIM Raipur, IIT Delhi, IIT Bombay, SRCC, and many more, including international stages like the Global Microfinance Case Competition at the University of Melbourne, where our team was the only Indian representation in the international top 12.</p> like the Global Microfinance Case Competition at the University of Melbourne, where our team was the only Indian representation in the international top 12.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>

    {/* MISSION & VISION */}
    <section className="section-padding bg-background-alt">
      <div className="container-main">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ScrollReveal>
            <div className="card-base p-8 h-full">
              <h3 className="font-heading text-2xl font-bold mb-4 text-primary">Our Mission</h3>
              <p className="text-foreground-secondary leading-relaxed">To inculcate knowledge and skills among students from the eclectic fields of management, economics, law, technology, environment, <p className="text-foreground-secondary leading-relaxed">To inculcate knowledge and skills among students from the eclectic fields of management, economics, law, technology, environment, and various other disciplines, through real-world consulting exposure and rigorous intellectual development.</p> consulting exposure and rigorous intellectual development.</p>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <div className="card-base p-8 h-full">
              <h3 className="font-heading text-2xl font-bold mb-4 text-accent-blue">Our Vision</h3>
              <p className="text-foreground-secondary leading-relaxed">To nurture students into future business leaders by bridging the gap between academic learning and corporate reality. We envision a community where every member develops the advisory acumen, strategic thinking, and professional confidence to excel in consulting and general management.</p>
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
            { Icon: Users, title: "Student-Run, Corporate-Facilitated", desc: "We operate independently as students but maintain deep ties with the corporate sector for live project opportunities and mentorship." },
            { Icon: GraduationCap, title: "Faculty-Guided Excellence", desc: "Under the guidance of faculty advisors, our projects and initiatives maintain academic rigor alongside practical relevance." },
            { Icon: Building, title: "Legacy of Leadership", desc: "Our alumni have gone on to Bain & Company, Grant Thornton, BCG, and top MBA programs at IIM Ahmedabad, IIM Calcutta, and more." },
          ].map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-base p-8 text-center h-full">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <item.Icon className="text-primary" size={26} />
                </div>
                <h3 className="font-heading font-bold text-lg mb-2">{item.title}</h3>
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
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
          {FACULTY_ADVISORS.map((f, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className="card-base p-6 text-center">
                <div className="w-20 h-20 rounded-full bg-muted flex items-center justify-center mx-auto mb-4">
                  <User className="text-muted-foreground" size={32} />
                </div>
                <h3 className="font-heading font-bold">{f.name}</h3>
                <p className="text-foreground-secondary text-sm">{f.designation}</p>
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
          <div className="max-w-3xl mx-auto text-foreground-secondary leading-relaxed">
            <p>Shaheed Sukhdev College of Business Studies (SSCBS) is one of India's premier undergraduate business schools, established in 1987 as the first collegiate business college in India under the University of Delhi. Ranked #1 in India Today's "Best Colleges in BBA" in 2020 and 2021, accredited Grade A+ by NAAC with a CGPA of 3.46, and ranked 101-105 among colleges in NIRF Ranking 2025, SSCBS is <p>Shaheed Sukhdev College of Business Studies (SSCBS) is one of India's premier undergraduate business schools, established in 1987 as the first collegiate business college in India under the University of Delhi. Ranked #1 in India Today's "Best Colleges in BBA" in 2020 and 2021, accredited Grade A+ by NAAC with a CGPA of 3.46, and ranked 101-105 among colleges in NIRF Ranking 2025, SSCBS is renowned for its vibrant society culture, boasting around 30 active student societies, the highest in Delhi University.</p> around 30 active student societies, the highest in Delhi University.</p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
);

export default About;
