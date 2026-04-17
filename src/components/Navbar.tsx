import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Mail } from "lucide-react";
import { NAV_LINKS } from "@/data/content";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location.pathname]);

  return (
    <nav className={` bg-background/95 backdrop-blur-sm transition-shadow ${scrolled ? "shadow-md border-b border-border" : ""}`}>
      <div className="flex items-center justify-between h-16 md:h-20 px-4 sm:px-6">
        <Link to="/" className="flex-shrink-0">
          <img src="/grandeur-logo.png" alt="Grandeur SSCBS" className="h-10 md:h-12 w-auto" />
        </Link>

        {/* Desktop nav */}
        <div className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map(link => (
            <Link
              key={link.path}
              to={link.path}
              className={`px-3 py-2 text-sm font-medium whitespace-nowrap transition-colors rounded-md hover:bg-muted ${
                location.pathname === link.path
                  ? "text-primary border-b-2 border-primary"
                  : "text-foreground-secondary hover:text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link
            to="/contact"
            className="ml-3 w-10 h-10 flex items-center justify-center rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            title="Get In Touch"
          >
            <Mail size={18} />
          </Link>
        </div>

        {/* Mobile toggle */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2 text-foreground">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="lg:hidden bg-background border-t border-border">
          <div className="container-main py-4 flex flex-col gap-1">
            {NAV_LINKS.map(link => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-3 rounded-lg text-sm font-medium ${
                  location.pathname === link.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground-secondary hover:bg-muted"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 px-4 py-3 bg-primary text-primary-foreground text-sm font-semibold rounded-lg text-center flex items-center justify-center gap-2"
            >
              <Mail size={16} /> Get In Touch
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
