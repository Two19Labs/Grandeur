import { motion } from "framer-motion";

interface PageHeroProps {
  title: string;
  subtitle: string;
}

const PageHero = ({ title, subtitle }: PageHeroProps) => (
  <section className="relative overflow-hidden pt-28 pb-12 md:pt-36 md:pb-16 gradient-hero border-b border-primary/20">
    {/* Clean blue theme with subtle opacity overlay */}
    <div className="absolute inset-0 bg-black/10" />
    <div 
      className="absolute inset-0 opacity-[0.03]" 
      style={{ 
        backgroundImage: "radial-gradient(#ffffff 1px, transparent 1px)", 
        backgroundSize: "20px 20px" 
      }} 
    />
    
    <div className="container-main text-center relative z-10">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 100, damping: 15 }}
        className="font-heading text-3xl md:text-4xl lg:text-5xl font-extrabold text-white tracking-tight mb-3"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, type: "spring", stiffness: 100, damping: 15 }}
        className="text-sm md:text-base text-white/80 max-w-2xl mx-auto font-medium leading-relaxed px-4"
      >
        {subtitle}
      </motion.p>
      
      {/* Decorative gold line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="w-16 h-[2px] bg-secondary mx-auto mt-5 rounded-full"
      />
    </div>
  </section>
);

export default PageHero;
