const ECHELON_EXPIRY = new Date("2026-04-25T18:30:00Z");
const ECHELON_URL = "https://unstop.com/competitions/echelon-the-simulation-challenge-shaheed-sukhdev-college-of-business-studies-sscbs-du-delhi-1670580";

const isEchelonLive = () => Date.now() < ECHELON_EXPIRY.getTime();

const echelonMsg = "Echelon: The Simulation Challenge - Register Now on Unstop!";
const primerMsg = "Industry Primer 2026 Out Now!";

const buildMessages = () => {
  const msgs: { text: string; href: string }[] = [];
  if (isEchelonLive()) {
    msgs.push({ text: echelonMsg, href: ECHELON_URL });
  }
  msgs.push({ text: primerMsg, href: "/industry-primer-2026.pdf" });
  // repeat to fill ticker
  const repeated = Array(12).fill(null).map((_, i) => msgs[i % msgs.length]);
  return repeated;
};

const AnnouncementTicker = () => {
  const messages = buildMessages();
  return (
    <div className="w-full overflow-hidden py-2 relative z-50" style={{ backgroundColor: "#0f1f3d" }}>
      <div className="flex animate-ticker w-max">
        {messages.map((msg, i) => (
          <a
            key={i}
            href={msg.href}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 text-sm font-semibold whitespace-nowrap text-white/90 hover:text-white transition-colors"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />
            {msg.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementTicker;
