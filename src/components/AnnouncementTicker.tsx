const message = "Industry Primer 2026 Out Now!";
const repeated = Array(12).fill(message);

const AnnouncementTicker = () => (
  <div className="w-full overflow-hidden py-2 relative z-50" style={{ backgroundColor: "#0f1f3d" }}>
    <div className="flex animate-ticker w-max">
      {repeated.map((msg, i) => (
        <a
          key={i}
          href="/industry-primer-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 text-sm font-semibold whitespace-nowrap text-white/90 hover:text-white transition-colors"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-white/40 inline-block" />
          {msg}
        </a>
      ))}
    </div>
  </div>
);

export default AnnouncementTicker;
