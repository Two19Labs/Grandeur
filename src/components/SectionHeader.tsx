interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
}

const SectionHeader = ({ title, subtitle, centered = true, dark = false }: SectionHeaderProps) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <h2 className={`font-heading text-3xl md:text-4xl font-bold mb-3 ${dark ? "text-white" : "text-foreground"}`}>{title}</h2>
    <div className={`w-16 h-1 rounded-full mb-4 ${centered ? "mx-auto" : ""} ${dark ? "bg-secondary" : "bg-primary"}`} />
    {subtitle && <p className={`max-w-2xl text-lg leading-relaxed ${centered ? "mx-auto" : ""} ${dark ? "text-white/60" : "text-foreground-secondary"}`}>{subtitle}</p>}
  </div>
);

export default SectionHeader;
