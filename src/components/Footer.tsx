import { Link } from "react-router-dom";
import { Instagram, Facebook, Linkedin } from "lucide-react";
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from "@/data/content";
import grandeurLogo from "@/assets/grandeur-logo.png";

const Footer = () => (
  <footer className="bg-foreground text-background py-16">
    <div className="container-main">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
        <div className="md:col-span-2">
          <img src="/grandeur-logo-new.png" alt="Grandeur" className="h-12 w-auto mb-4 brightness-0 invert" />
          <p className="text-background/70 text-sm leading-relaxed max-w-md">
            The Consulting and Knowledge Cell of Shaheed Sukhdev College of Business Studies, University of Delhi.
          </p>
          <p className="text-secondary font-accent text-sm mt-3 font-semibold">
            The Oldest Consulting Society in Delhi University
          </p>
        </div>
        <div>
          <h4 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider text-background/50">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {NAV_LINKS.map(link => (
              <Link key={link.path} to={link.path} className="text-sm text-background/70 hover:text-secondary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-heading font-bold text-sm mb-4 uppercase tracking-wider text-background/50">Connect</h4>
          <div className="flex gap-3 mb-4">
            <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-background/10 hover:bg-secondary/20 transition-colors">
              <Instagram size={18} />
            </a>
            <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-background/10 hover:bg-secondary/20 transition-colors">
              <Facebook size={18} />
            </a>
            <a href={SOCIAL_LINKS.linkedin} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-background/10 hover:bg-secondary/20 transition-colors">
              <Linkedin size={18} />
            </a>
          </div>
          <p className="text-sm text-background/70">{CONTACT_INFO.email}</p>
          <p className="text-sm text-background/50 mt-2 leading-relaxed">{CONTACT_INFO.address}</p>
        </div>
      </div>
      <div className="border-t border-background/10 pt-6 text-center text-sm text-background/40">
        © {new Date().getFullYear()} Grandeur - SSCBS. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
