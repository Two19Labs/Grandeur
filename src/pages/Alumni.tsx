import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { ALUMNI_DIRECTORY } from "@/data/content";
import { Linkedin, User } from "lucide-react";

const Alumni = () => {
  return (
    <div>
      <PageHero 
        title="Alumni Network" 
        subtitle="Our alumni have graduated to establish successful careers in top consulting firms, investment banks, and premier MBA programs globally." 
      />

      <section className="section-padding">
        <div className="container-main max-w-5xl">
          <SectionHeader 
            title="The Grandeur Legacy" 
            subtitle="Meet the past members who shaped the vision and legacy of our consulting cell." 
          />

          <div className="space-y-16">
            {ALUMNI_DIRECTORY.map((batchBlock, bi) => (
              <ScrollReveal key={bi} delay={bi * 0.1}>
                <div>
                  {/* Batch Header */}
                  <div className="flex items-center gap-4 mb-8">
                    <h3 className="font-heading font-extrabold text-lg text-primary bg-primary/10 px-4 py-2 rounded-lg">
                      {batchBlock.batch}
                    </h3>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  {/* Members Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {batchBlock.members.map((member, mi) => (
                      <ScrollReveal key={mi} delay={mi * 0.05}>
                        <div className="card-base p-6 h-full flex flex-col group hover:shadow-lg transition-all duration-300">
                          <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center flex-shrink-0 border border-slate-200 group-hover:scale-105 transition-transform duration-300">
                              <User className="text-muted-foreground" size={20} />
                            </div>
                            <div>
                              <h4 className="font-heading font-bold text-base transition-colors duration-300 group-hover:text-primary">
                                {member.name}
                              </h4>
                              <p className="text-xs text-foreground-secondary">{member.role}</p>
                            </div>
                          </div>

                          <div className="flex-1">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-secondary block mb-1">
                              Placement / Destination
                            </span>
                            <p className="text-foreground-secondary text-sm leading-relaxed">
                              {member.placement}
                            </p>
                          </div>

                          {member.linkedin && (
                            <div className="mt-4 pt-4 border-t border-border flex justify-end">
                              <a
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-1.5 text-xs text-foreground-secondary hover:text-[#0077B5] transition-colors duration-300 font-medium"
                              >
                                <Linkedin size={13} />
                                Connect
                              </a>
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
        </div>
      </section>
    </div>
  );
};

export default Alumni;
