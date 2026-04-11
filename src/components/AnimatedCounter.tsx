import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
  dark?: boolean;
  numberClassName?: string;
}

const AnimatedCounter = ({ target, suffix = "", prefix = "", label, dark = false, numberClassName = "text-3xl md:text-4xl" }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStarted(true); obs.disconnect(); } },
      { threshold: 0.3 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1500;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
    return () => clearInterval(timer);
  }, [started, target]);

  return (
    <div ref={ref} className="text-center">
      <div className={`font-accent font-bold ${numberClassName} ${dark ? "text-secondary" : "text-primary"}`}>
        {prefix}{new Intl.NumberFormat('en-IN').format(count)}{suffix}
      </div>
      <div className={`text-sm mt-1 font-medium ${dark ? "text-white/60" : "text-foreground-secondary"}`}>{label}</div>
    </div>
  );
};

export default AnimatedCounter;
