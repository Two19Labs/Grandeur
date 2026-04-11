const message = "Industry Primer 2026 Out Now!";
const repeated = Array(12).fill(message);

const AnnouncementTicker = () => (
  <div className="w-full overflow-hidden py-2 relative z-50 bg-gradient-to-r from-primary/20 via-primary/10 to-primary/20 border-b border-primary/10">
    <div className="flex animate-ticker w-max">
      {repeated.map((msg, i) => (
        <a
          key={i}
          href="/industry-primer-2026.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 px-8 text-xs font-semibold whitespace-nowrap text-foreground/80 hover:text-primary transition-colors font-accent tracking-wide"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse inline-block" />
          {msg}
        </a>
      ))}
    </div>
  </div>
);

export default AnnouncementTicker;
