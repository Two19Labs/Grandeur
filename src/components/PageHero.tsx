import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
  badge?: string;
}

const PageHero = ({ title, subtitle, badge }: PageHeroProps) => (
  <section className="gradient-hero pt-36 pb-16 md:pt-48 md:pb-24 relative overflow-hidden noise-overlay">
    {/* Ambient glow effects */}
    <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent-red/5 rounded-full blur-[100px] pointer-events-none" />

    <div className="container-main text-center relative z-10">
      {badge && (
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary font-accent font-semibold text-xs uppercase tracking-widest mb-5"
        >
          {badge}
        </motion.span>
      )}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="font-heading text-4xl md:text-5xl lg:text-6xl font-extrabold text-foreground mb-4 tracking-tight"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-lg md:text-xl text-foreground-secondary max-w-2xl mx-auto leading-relaxed"
      >
        {subtitle}
      </motion.p>
    </div>
  </section>
);

export default PageHero;
