import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { JOIN_PROCESS, JOIN_WHAT_YOU_GET } from "@/data/content";
import { Briefcase, Trophy, BookOpen, Users, Mic, Star } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  Briefcase: <Briefcase size={22} />,
  Trophy: <Trophy size={22} />,
  BookOpen: <BookOpen size={22} />,
  Users: <Users size={22} />,
  Mic: <Mic size={22} />,
  Star: <Star size={22} />,
};

const Join = () => (
  <div>
    <PageHero
      title="Join Grandeur"
      subtitle="We recruit once a year. If you're a fresher at SSCBS who wants to do real work, not just attend meetings - this is for you."
    />

    {/* Eligibility banner */}
    <section className="py-10 bg-background-alt border-b border-border">
      <div className="container-main max-w-3xl text-center">
        <p className="text-foreground-secondary leading-relaxed">
          Recruitment is open to <span className="text-foreground font-semibold">first-year students at SSCBS</span>. We don't look for specific grades or prior experience - we look for curiosity, work ethic, and genuine interest in business. Applications typically open in <span className="text-foreground font-semibold">August-September</span>.
        </p>
      </div>
    </section>

    {/* Selection process */}
    <section className="section-padding">
      <div className="container-main max-w-3xl">
        <SectionHeader title="Selection Process" subtitle="A simple, merit-based process designed to find people who love thinking about business problems." />
        <div className="relative mt-10">
          {/* Vertical line */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border hidden md:block" />
          <div className="flex flex-col gap-8">
            {JOIN_PROCESS.map((step, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-heading font-bold text-lg flex-shrink-0 relative z-10">
                    {step.step}
                  </div>
                  <div className="card-base p-6 flex-1">
                    <h3 className="font-heading font-bold text-base mb-1">{step.title}</h3>
                    <p className="text-foreground-secondary text-sm leading-relaxed">{step.description}</p>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>

    {/* What you get */}
    <section className="section-padding bg-background-alt border-y border-border">
      <div className="container-main">
        <SectionHeader title="What You Get" subtitle="Membership in Grandeur is a commitment, and so is ours to you." />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {JOIN_WHAT_YOU_GET.map((item, i) => (
            <ScrollReveal key={i} delay={i * 0.08}>
              <div className="card-base p-6 h-full">
                <div className="w-10 h-10 rounded-lg bg-secondary/20 flex items-center justify-center text-secondary mb-4">
                  {iconMap[item.icon]}
                </div>
                <h3 className="font-heading font-bold text-sm mb-2">{item.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">{item.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* Alumni destinations */}
    <section className="section-padding">
      <div className="container-main max-w-3xl text-center">
        <SectionHeader title="Where Members Go" subtitle="Grandeur alumni have gone on to some of the best firms and institutions in the world." />
        <div className="flex flex-wrap justify-center gap-3 mt-6">
          {["IIM Calcutta", "Bain & Company", "Accenture Strategy", "Grant Thornton", "D.E. Shaw", "L.E.K. Consulting", "IIM Ahmedabad", "IIM Bangalore"].map((org, i) => (
            <span key={i} className="px-4 py-2 rounded-full bg-muted text-foreground-secondary text-sm font-medium">
              {org}
            </span>
          ))}
        </div>
      </div>
    </section>

    {/* Recruitment Form */}
    <section className="section-padding bg-primary/5 border-t border-border">
      <div className="container-main max-w-3xl">
        <SectionHeader
          title="Recruitment Form"
          subtitle="Fill out the form below to apply. We'll get back to you once applications are reviewed."
        />
        <div className="mt-8 rounded-xl overflow-hidden border border-border shadow-sm bg-background">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSeOrkizBxnXaeodqKC4bHrbcKPEQnDCcCum3bwUlX9mWMKFAw/viewform?embedded=true"
            width="100%"
            height="2712"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title="Grandeur Recruitment Form"
            className="block"
          >
            Loading…
          </iframe>
        </div>
      </div>
    </section>
  </div>
);

export default Join;
