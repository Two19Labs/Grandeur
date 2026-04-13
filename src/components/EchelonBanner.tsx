import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

// Disappears after April 26 2026, 12:00 AM IST (UTC+5:30 = April 25 18:30 UTC)
const EXPIRY = new Date("2026-04-25T18:30:00Z");
const REGISTER_URL = "https://unstop.com/competitions/echelon-the-simulation-challenge-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1670580";

type TimeLeft = { days: number; hours: number; minutes: number; seconds: number };

const getTimeLeft = (): TimeLeft | null => {
  const diff = EXPIRY.getTime() - Date.now();
  if (diff <= 0) return null;
  return {
    days: Math.floor(diff / 86400000),
    hours: Math.floor((diff % 86400000) / 3600000),
    minutes: Math.floor((diff % 3600000) / 60000),
    seconds: Math.floor((diff % 60000) / 1000),
  };
};

const Pad = ({ n }: { n: number }) => <span>{String(n).padStart(2, "0")}</span>;

export const EchelonCountdown = () => {
  const [time, setTime] = useState<TimeLeft | null>(getTimeLeft);

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  if (!time) return null;

  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-main">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 rounded-full bg-white/20 text-xs font-semibold tracking-widest uppercase mb-4">
              Upcoming Event
            </span>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              Echelon: The Simulation Challenge
            </h2>
            <p className="text-primary-foreground/80 text-sm md:text-base max-w-xl mx-auto">
              Grandeur's strategy and simulation competition hosted at SSCBS, University of Delhi. Test your business acumen through quizzes and offline simulation rounds.
            </p>
          </div>

          {/* Countdown */}
          <div className="flex justify-center gap-4 md:gap-8 mb-10">
            {[
              { label: "Days", val: time.days },
              { label: "Hours", val: time.hours },
              { label: "Minutes", val: time.minutes },
              { label: "Seconds", val: time.seconds },
            ].map(({ label, val }) => (
              <div key={label} className="text-center">
                <div className="w-16 md:w-20 h-16 md:h-20 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center mb-2">
                  <span className="font-heading text-2xl md:text-3xl font-bold tabular-nums">
                    <Pad n={val} />
                  </span>
                </div>
                <p className="text-xs text-primary-foreground/70 font-medium uppercase tracking-wide">{label}</p>
              </div>
            ))}
          </div>

          {/* Details grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
            {[
              { label: "Team Size", value: "1 - 3 Members" },
              { label: "Location", value: "SSCBS, University of Delhi" },
              { label: "Eligibility", value: "Open to all — UG, PG, Engineering, Law, Arts & more" },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/10 border border-white/15 rounded-xl px-5 py-4 text-center">
                <p className="text-xs text-primary-foreground/60 font-semibold uppercase tracking-wide mb-1">{label}</p>
                <p className="text-sm font-medium text-primary-foreground">{value}</p>
              </div>
            ))}
          </div>

          {/* Stages */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            <div className="bg-white/10 border border-white/15 rounded-xl px-5 py-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">1</span>
                <div>
                  <p className="font-heading font-bold text-sm">Quiz Round</p>
                  <p className="text-xs text-primary-foreground/60">Online on Unstop</p>
                </div>
              </div>
              <p className="text-xs text-primary-foreground/70 leading-relaxed">
                General Assessment Round - Apr 20, 6:00 PM to 11:59 PM IST
              </p>
            </div>
            <div className="bg-white/10 border border-white/15 rounded-xl px-5 py-4">
              <div className="flex items-center gap-3 mb-2">
                <span className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold">2</span>
                <div>
                  <p className="font-heading font-bold text-sm">Offline Round</p>
                  <p className="text-xs text-primary-foreground/60">On-campus at SSCBS</p>
                </div>
              </div>
              <p className="text-xs text-primary-foreground/70 leading-relaxed">
                Simulation Challenge - Apr 23, 10:00 AM to 3:00 PM IST
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <a
              href={REGISTER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-primary font-bold rounded-lg hover:bg-white/90 transition-opacity text-sm"
            >
              Register on Unstop
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EchelonCountdown;
