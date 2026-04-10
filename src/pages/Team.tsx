import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { FACULTY_ADVISORS, TEAM_DATA } from "@/data/content";
import { Linkedin, User } from "lucide-react";

interface Member {
  name: string;
  role?: string;
  linkedin?: string;
  image?: string;
  designation?: string;
}

interface TeamCardProps {
  member: Member;
  size?: "lg" | "md" | "sm";
}

const TeamCard = ({ member, size = "md" }: TeamCardProps) => {
  const name = member.name;
  const role = member.role || member.designation || "";
  const linkedin = member.linkedin || "";
  const image = member.image || "";
  const isPlaceholder = name === "Placeholder";

  const imgSize = size === "lg" ? "w-28 h-28" : size === "md" ? "w-20 h-20" : "w-16 h-16";
  const iconSize = size === "lg" ? 32 : size === "md" ? 24 : 18;

  return (
    <div className="card-base overflow-hidden group hover:border-primary/30 transition-all duration-300">
      <div className={`relative ${size === "lg" ? "pt-8 pb-4" : "pt-6 pb-3"} flex flex-col items-center bg-gradient-to-b from-muted/60 to-transparent`}>
        <div className={`${imgSize} rounded-full overflow-hidden border-2 border-border group-hover:border-primary/40 transition-colors flex-shrink-0 bg-muted flex items-center justify-center`}>
          {image ? (
            <img src={image} alt={name} className="w-full h-full object-cover object-top" />
          ) : (
            <User className="text-muted-foreground" size={iconSize} />
          )}
        </div>
      </div>
      <div className={`${size === "lg" ? "px-5 pb-5" : "px-4 pb-4"} text-center`}>
        <h3 className={`font-heading font-bold ${size === "lg" ? "text-base" : "text-sm"} ${isPlaceholder ? "text-muted-foreground" : ""}`}>
          {isPlaceholder ? "Coming Soon" : name}
        </h3>
        <p className="text-foreground-secondary text-xs mt-0.5">{role}</p>
        {!isPlaceholder && linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 mt-3 text-xs text-foreground-secondary hover:text-[#0077B5] transition-colors font-medium"
          >
            <Linkedin size={13} />
            LinkedIn
          </a>
        )}
      </div>
    </div>
  );
};

const FacultyCard = ({ member }: { member: Member }) => (
  <div className="card-base overflow-hidden group hover:border-primary/30 transition-all duration-300">
    <div className="pt-8 pb-4 flex flex-col items-center bg-gradient-to-b from-muted/60 to-transparent">
      <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/40 transition-colors bg-muted flex items-center justify-center">
        <User className="text-muted-foreground" size={30} />
      </div>
    </div>
    <div className="px-5 pb-6 text-center">
      <h3 className="font-heading font-bold text-base">{member.name}</h3>
      <p className="text-foreground-secondary text-xs mt-0.5">{member.designation}</p>
    </div>
  </div>
);

const Team = () => (
  <div>
    <PageHero title="Our Team" subtitle="The people behind the legacy." />

    {/* FACULTY */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeader title="Faculty In-Charge" subtitle="The mentors who guide Grandeur." />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-sm mx-auto sm:max-w-lg">
          {FACULTY_ADVISORS.map((f, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <FacultyCard member={f} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* PRESIDENT */}
    <section className="section-padding bg-background-alt border-y border-border">
      <div className="container-main">
        <SectionHeader title="President" />
        <div className="max-w-xs mx-auto">
          <ScrollReveal>
            <TeamCard member={TEAM_DATA.president} size="lg" />
          </ScrollReveal>
        </div>
      </div>
    </section>

    {/* COORDINATORS */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeader title="Coordinators" />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-lg mx-auto">
          {TEAM_DATA.coordinators.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.1}>
              <TeamCard member={m} size="lg" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ADVISORY */}
    <section className="section-padding bg-background-alt border-y border-border">
      <div className="container-main">
        <SectionHeader title="Advisory Committee" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 max-w-4xl mx-auto">
          {TEAM_DATA.advisory.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <TeamCard member={m} size="md" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* CORE */}
    <section className="section-padding">
      <div className="container-main">
        <SectionHeader title="Core Committee" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {TEAM_DATA.core.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <TeamCard member={m} size="md" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>

    {/* ORGANIZING */}
    <section className="section-padding bg-background-alt border-y border-border">
      <div className="container-main">
        <SectionHeader title="Organizing Committee" />
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {TEAM_DATA.organizing.map((m, i) => (
            <ScrollReveal key={i} delay={i * 0.06}>
              <TeamCard member={m} size="sm" />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Team;
