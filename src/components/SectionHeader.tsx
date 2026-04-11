import { motion } from "framer-motion";

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  dark?: boolean;
  gradient?: boolean;
}

const SectionHeader = ({ title, subtitle, centered = true, dark = false, gradient = false }: SectionHeaderProps) => (
  <div className={`mb-12 ${centered ? "text-center" : ""}`}>
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`font-heading text-3xl md:text-4xl font-bold mb-4 ${
        gradient ? "text-gradient-primary" : dark ? "text-white" : "text-foreground"
      }`}
    >
      {title}
    </motion.h2>
    <motion.div
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`w-16 h-0.5 rounded-full mb-5 origin-left ${centered ? "mx-auto" : ""}`}
      style={{
        background: dark
          ? "linear-gradient(90deg, hsl(45 96% 56%), transparent)"
          : "linear-gradient(90deg, hsl(263 70% 58%), hsl(280 70% 60%), transparent)"
      }}
    />
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className={`max-w-2xl text-lg leading-relaxed ${centered ? "mx-auto" : ""} ${
          dark ? "text-white/60" : "text-foreground-secondary"
        }`}
      >
        {subtitle}
      </motion.p>
    )}
  </div>
);

export default SectionHeader;
