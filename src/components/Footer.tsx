import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin, ArrowUpRight, Mail, MapPin } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from "@/data/content";
import grandeurLogo from "@/assets/grandeur-logo-white.png";

const quickLinks = NAV_LINKS.filter(l => ["Home", "About", "Projects", "Invicta", "Team"].includes(l.label));
const resourceLinks = NAV_LINKS.filter(l => ["Publications", "Knowledge Hub", "Events", "Achievements", "Join Us"].includes(l.label));

const Footer = () => (
  <footer className="relative border-t border-border/50 noise-overlay">
    <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-black/40 pointer-events-none" />
    <div className="container-main relative z-10 pt-16 pb-8">
      {/* Top section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
        {/* Brand */}
        <div className="lg:col-span-1">
          <Link to="/" className="inline-block mb-4">
            <img src={grandeurLogo} alt="Grandeur" className="h-12 w-auto mix-blend-screen" />
          </Link>
          <p className="text-foreground-secondary text-sm leading-relaxed mb-3">
            The Consulting & Knowledge Cell of Shaheed Sukhdev College of Business Studies, University of Delhi.
          </p>
          <p className="text-xs text-primary font-accent font-semibold tracking-wider uppercase">
            Est. at India's First Collegiate Business School
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading font-bold text-xs mb-5 uppercase tracking-wider text-foreground-secondary">Quick Links</h4>
          <div className="flex flex-col gap-2.5">
            {quickLinks.map(link => (
              <Link key={link.path} to={link.path} className="text-sm text-foreground-secondary hover:text-primary transition-colors flex items-center gap-1 group">
                {link.label}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Resources */}
        <div>
          <h4 className="font-heading font-bold text-xs mb-5 uppercase tracking-wider text-foreground-secondary">Resources</h4>
          <div className="flex flex-col gap-2.5">
            {resourceLinks.map(link => (
              <Link key={link.path} to={link.path} className="text-sm text-foreground-secondary hover:text-primary transition-colors flex items-center gap-1 group">
                {link.label}
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>

        {/* Connect */}
        <div>
          <h4 className="font-heading font-bold text-xs mb-5 uppercase tracking-wider text-foreground-secondary">Connect</h4>
          <div className="flex gap-2 mb-5">
            {[
              { href: SOCIAL_LINKS.instagram, Icon: Instagram, label: "Instagram" },
              { href: SOCIAL_LINKS.facebook, Icon: Facebook, label: "Facebook" },
              { href: SOCIAL_LINKS.linkedin, Icon: Linkedin, label: "LinkedIn" },
            ].map(s => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg bg-muted/60 flex items-center justify-center text-foreground-secondary hover:bg-primary/20 hover:text-primary transition-all duration-200"
                aria-label={s.label}
              >
                <s.Icon size={16} />
              </a>
            ))}
          </div>
          <div className="space-y-3">
            <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center gap-2 text-sm text-foreground-secondary hover:text-primary transition-colors">
              <Mail size={14} />
              {CONTACT_INFO.email}
            </a>
            <div className="flex items-start gap-2 text-sm text-foreground-secondary">
              <MapPin size={14} className="flex-shrink-0 mt-0.5" />
              <span className="leading-relaxed text-xs">{CONTACT_INFO.address}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/50 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-foreground-secondary/60">
          © {new Date().getFullYear()} Grandeur — SSCBS, University of Delhi. All rights reserved.
        </p>
        <p className="text-xs text-foreground-secondary/40">
          The Oldest Consulting Society in Delhi University
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
