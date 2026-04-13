import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { EVENTS_ARCHIVE } from "@/data/content";
import { Calendar, Award, Globe, Users } from "lucide-react";

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
      title="Events Archive"
      subtitle="A record of every competition, initiative, and milestone in Grandeur's journey, from SSCBS corridors to global stages."
    />

    <section className="section-padding">
      <div className="container-main max-w-4xl">
        {EVENTS_ARCHIVE.map((yearBlock, yi) => (
          <ScrollReveal key={yi} delay={yi * 0.1}>
            <div className="mb-14">
              {/* Year header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-lg">
                  <Calendar size={16} className="text-primary" />
                  <span className="font-heading font-bold text-primary">{yearBlock.year}</span>
                </div>
                <div className="flex-1 h-px bg-border" />
              </div>

              {/* Events grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pl-2">
                {yearBlock.events.map((event, ei) => (
                  <ScrollReveal key={ei} delay={ei * 0.06}>
                    <div className="card-base p-5 h-full flex flex-col">
                      <div className="flex items-center gap-2 mb-3">
                        <span className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full ${typeColor[event.type] || "bg-muted text-foreground-secondary"}`}>
                          {typeIcon[event.type]}
                          {event.type}
                        </span>
                      </div>
                      <h3 className="font-heading font-bold text-sm mb-2">{event.name}</h3>
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
