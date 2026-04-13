import { useState } from "react";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ScrollReveal from "@/components/ScrollReveal";
import { FACULTY_ADVISORS, TEAM_DATA } from "@/data/content";
import { Linkedin, User, X } from "lucide-react";
import teamTushar from "@/assets/team-tushar-marwaha.jpg";
import teamSushmita from "@/assets/team-sushmita.jpg";

const FACULTY_IMAGES: Record<string, string> = {
  "team-tushar-marwaha": teamTushar,
  "team-sushmita": teamSushmita,
};

interface Member {
  name: string;
  role?: string;
  linkedin?: string;
  image?: string;
  designation?: string;
}

// Lightbox
const Lightbox = ({ src, name, role, onClose }: { src: string; name: string; role: string; onClose: () => void }) => (
  <div
    className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4"
    onClick={onClose}
  >
    <div
      className="relative max-w-sm w-full bg-background rounded-2xl overflow-hidden shadow-2xl"
      onClick={e => e.stopPropagation()}
    >
      <button
        onClick={onClose}
        className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-black/50 flex items-center justify-center text-white hover:bg-black/70 transition-colors"
      >
        <X size={16} />
      </button>
      <img src={src} alt={name} className="w-full object-cover max-h-[70vh]" />
      <div className="px-5 py-4 text-center">
        <h3 className="font-heading font-bold text-base">{name}</h3>
        <p className="text-foreground-secondary text-sm mt-0.5">{role}</p>
      </div>
    </div>
  </div>
);

interface TeamCardProps {
  member: Member;
  size?: "lg" | "md" | "sm";
  onImageClick?: (src: string, name: string, role: string) => void;
}

const TeamCard = ({ member, size = "md", onImageClick }: TeamCardProps) => {
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
        <div
          className={`${imgSize} rounded-full overflow-hidden border-2 border-border group-hover:border-primary/40 transition-colors flex-shrink-0 bg-muted flex items-center justify-center ${image && !isPlaceholder ? "cursor-zoom-in" : ""}`}
          onClick={() => image && !isPlaceholder && onImageClick?.(image, name, role)}
        >
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

const FacultyCard = ({ member, onImageClick }: { member: Member; onImageClick?: (src: string, name: string, role: string) => void }) => {
  const imgSrc = member.image ? FACULTY_IMAGES[member.image] : "";
  return (
    <div className="card-base overflow-hidden group hover:border-primary/30 transition-all duration-300">
      <div className="pt-8 pb-4 flex flex-col items-center bg-gradient-to-b from-muted/60 to-transparent">
        <div
          className={`w-24 h-24 rounded-full overflow-hidden border-2 border-border group-hover:border-primary/40 transition-colors bg-muted flex items-center justify-center ${imgSrc ? "cursor-zoom-in" : ""}`}
          onClick={() => imgSrc && onImageClick?.(imgSrc, member.name, member.designation || "")}
        >
          {imgSrc ? (
            <img src={imgSrc} alt={member.name} className="w-full h-full object-cover object-top" />
          ) : (
            <User className="text-muted-foreground" size={30} />
          )}
        </div>
      </div>
      <div className="px-5 pb-6 text-center">
        <h3 className="font-heading font-bold text-base">{member.name}</h3>
        <p className="text-foreground-secondary text-xs mt-0.5">{member.designation}</p>
      </div>
    </div>
  );
};

const Team = () => {
  const [lightbox, setLightbox] = useState<{ src: string; name: string; role: string } | null>(null);

  const openLightbox = (src: string, name: string, role: string) => setLightbox({ src, name, role });
  const closeLightbox = () => setLightbox(null);

  return (
    <div>
      {lightbox && <Lightbox {...lightbox} onClose={closeLightbox} />}

      <PageHero title="Our Team" subtitle="The people behind the legacy." />

      {/* FACULTY */}
      <section className="section-padding">
        <div className="container-main">
          <SectionHeader title="Faculty In-Charge" subtitle="The mentors who guide Grandeur." />
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-sm mx-auto sm:max-w-lg">
            {FACULTY_ADVISORS.map((f, i) => (
              <ScrollReveal key={i} delay={i * 0.1}>
                <FacultyCard member={f} onImageClick={openLightbox} />
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
              <TeamCard member={TEAM_DATA.president} size="lg" onImageClick={openLightbox} />
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
                <TeamCard member={m} size="lg" onImageClick={openLightbox} />
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
                <TeamCard member={m} size="md" onImageClick={openLightbox} />
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
                <TeamCard member={m} size="md" onImageClick={openLightbox} />
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
                <TeamCard member={m} size="sm" onImageClick={openLightbox} />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
