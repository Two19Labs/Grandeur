import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

type AnimVariant = "fadeUp" | "fadeLeft" | "fadeRight" | "scaleUp" | "fadeIn" | "flipUp";

const variants: Record<AnimVariant, Variants> = {
  fadeUp: {
    hidden: { opacity: 0, y: 48 },
    visible: { opacity: 1, y: 0 },
  },
  fadeLeft: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 },
  },
  fadeRight: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 },
  },
  scaleUp: {
    hidden: { opacity: 0, scale: 0.82 },
    visible: { opacity: 1, scale: 1 },
  },
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  },
  flipUp: {
    hidden: { opacity: 0, rotateX: 18, y: 40 },
    visible: { opacity: 1, rotateX: 0, y: 0 },
  },
};

interface ScrollRevealProps {
  children: ReactNode;
  delay?: number;
  variant?: AnimVariant;
  duration?: number;
}

const ScrollReveal = ({
  children,
  delay = 0,
  variant = "fadeUp",
  duration = 0.55,
}: ScrollRevealProps) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-60px" }}
    transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    variants={variants[variant]}
    style={{ perspective: 1000 }}
  >
    {children}
  </motion.div>
);

export default ScrollReveal;
