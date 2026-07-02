import { motion } from "framer-motion";

const FloatingGlow = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none">
      {/* Glow Blob 1 - Top Left (accent-blue / primary) */}
      <motion.div
        className="absolute w-[350px] md:w-[600px] h-[350px] md:h-[600px] rounded-full bg-accent-blue/5 blur-[80px] md:blur-[120px]"
        style={{ top: "-10%", left: "-10%" }}
        animate={{
          x: [0, 50, -30, 0],
          y: [0, -30, 40, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Glow Blob 2 - Middle Right (secondary gold) */}
      <motion.div
        className="absolute w-[300px] md:w-[500px] h-[300px] md:h-[500px] rounded-full bg-secondary/[0.04] blur-[80px] md:blur-[120px]"
        style={{ top: "35%", right: "-10%" }}
        animate={{
          x: [0, -40, 30, 0],
          y: [0, 50, -30, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Glow Blob 3 - Bottom Left (accent-red) */}
      <motion.div
        className="absolute w-[320px] md:w-[550px] h-[320px] md:h-[550px] rounded-full bg-accent-red/[0.025] blur-[80px] md:blur-[120px]"
        style={{ bottom: "-10%", left: "15%" }}
        animate={{
          x: [0, 40, -40, 0],
          y: [0, -40, 30, 0],
          scale: [1, 1.05, 0.9, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
      />
    </div>
  );
};

export default FloatingGlow;
