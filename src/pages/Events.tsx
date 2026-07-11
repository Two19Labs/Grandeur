import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { EVENTS_ARCHIVE } from "@/data/content";
import { Calendar, Award, Globe, Users } from "lucide-react";
import { EchelonCountdown } from "@/components/EchelonBanner";

const typeIcon: Record<string, React.ReactNode> = {
  "Case Competition": <Award size={16} />,
  "Intra-College Competition": <Users size={16} />,
  "External Competition": <Award size={16} />,
  "International": <Globe size={16} />,
};

const typeColor: Record<string, string> = {
  "Case Competition": "bg-primary/10 text-primary",
  "Intra-College Competition": "bg-green-500/10 text-green-400",
  "External Competition": "bg-secondary/20 text-secondary",
  "International": "bg-purple-500/10 text-purple-400",
};

const Events = () => (
  <div>
    <PageHero
      title="Events & Initiatives"
      subtitle="A record of every competition, initiative, and milestone in Grandeur's journey, from flagship national stages to intra-college platforms."
    />

    {/* FLAGSHIP EVENTS */}
    <section className="section-padding relative overflow-hidden bg-background">
      <div className="container-main">
        <ScrollReveal variant="fadeUp">
          <SectionHeader 
            title="Our Flagship Events" 
            subtitle="The core annual events hosted by Grandeur that define our presence and engage the national student community." 
          />
        </ScrollReveal>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "INVICTA",
              subtitle: "The Ultimate Case Study Competition",
              desc: "Our national case study competition attracting 1200+ registrations across top colleges in India. Teams tackle complex corporate conundrums judged by industry panels.",
              tag: "National",
              stats: "1200+ Registrations",
              link: "https://unstop.com/competitions/invicta-2026-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1642243",
              accent: "border-t-secondary"
            },
            {
              title: "RANNEETI",
              subtitle: "The Introductory Case Competition",
              desc: "An intra-college challenge designed for incoming first-years to introduce them to structured problem-solving, MECE framework, and consulting presentations.",
              tag: "Intra-College",
              stats: "300+ Freshers",
              link: null,
              accent: "border-t-primary"
            },
            {
              title: "ECHELON",
              subtitle: "The Simulation Challenge",
              desc: "A high-stakes strategy and simulation challenge testing students on financial analysis, market growth, and strategic decisions in a dynamic, live business game.",
              tag: "National Simulation",
              stats: "SSCBS Campus Finale",
              link: "https://unstop.com/competitions/echelon-the-simulation-challenge-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1670580",
              accent: "border-t-accent-blue"
            }
          ].map((ev, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <div className={`card-base p-8 h-full flex flex-col border-t-4 ${ev.accent} group hover:shadow-lg transition-all duration-300 bg-white/80`}>
                <div className="flex justify-between items-center mb-4">
                  <span className="text-xs font-semibold px-2.5 py-1 bg-primary/10 text-primary rounded-full">{ev.tag}</span>
                  <span className="text-xs font-semibold text-secondary">{ev.stats}</span>
                </div>
                <h3 className="font-heading font-extrabold text-xl mb-1 group-hover:text-primary transition-colors">{ev.title}</h3>
                <p className="text-sm font-semibold text-foreground-secondary mb-4 leading-snug">{ev.subtitle}</p>
                <p className="text-foreground-secondary text-sm leading-relaxed flex-1 mb-6">{ev.desc}</p>
                {ev.link ? (
                  <a
                    href={ev.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-sm font-bold text-primary hover:opacity-80 transition-opacity"
                  >
                    View on Unstop <Award size={14} />
                  </a>
                ) : (
                  <span className="text-xs font-semibold text-muted-foreground italic">Annual Freshers Event</span>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    <EchelonCountdown />

    <section className="section-padding">
      <div className="container-main max-w-4xl relative border-l border-primary/20 pl-6 md:pl-10 ml-4 md:ml-8">
        {EVENTS_ARCHIVE.map((yearBlock, yi) => (
          <ScrollReveal key={yi} delay={yi * 0.1}>
            <div className="relative mb-14">
              {/* Timeline dot */}
              <div className="absolute -left-[31px] md:-left-[47px] top-2.5 w-4 h-4 rounded-full bg-primary border-4 border-background z-10 shadow-sm animate-pulse" />
              
              {/* Year header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg group hover:bg-primary/20 transition-all duration-300">
                  <Calendar size={16} className="text-primary" />
                  <span className="font-heading font-bold text-primary">{yearBlock.year}</span>
                </div>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Events grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-2">
                {yearBlock.events.map((event, ei) => (
                  <ScrollReveal key={ei} delay={ei * 0.06}>
                    <div className="card-base p-5 h-full flex flex-col group hover:shadow-lg transition-all duration-300">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${typeColor[event.type] || "bg-muted text-foreground-secondary"}`}>
                          {typeIcon[event.type]}
                          {event.type}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-sm mb-2 group-hover:text-primary transition-colors duration-300">{event.name}</h3>
                      <p className="text-foreground-secondary text-xs leading-relaxed flex-1">{event.description}</p>
                      {event.highlight && (
                        <div className="mt-3 pt-3 border-t border-border">
                          <span className="text-xs font-semibold text-secondary">{event.highlight}</span>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>

    {/* CTA */}
    <section className="py-14 bg-background-alt border-t border-border text-center">
      <div className="container-main max-w-xl">
        <SectionHeader
          title="Stay in the Loop"
          subtitle="Follow us on Instagram for real-time updates on upcoming events, competitions, and sessions."
        />
        <a
          href="https://www.instagram.com/grandeur.sscbs/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:opacity-90 transition-opacity text-sm"
        >
          @grandeur.sscbs
        </a>
      </div>
    </section>
  </div>
);

export default Events;
