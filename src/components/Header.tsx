import { useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT } from "@/lib/contact";
import { Button } from "./ui/button";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/services", label: "Services" },
  { to: "/pricing", label: "Pricing" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Get a Quote" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-secondary/95 backdrop-blur-md border-b border-secondary-foreground/10">
      <div className="container-tight flex items-center justify-between h-16 md:h-20">
        <Link to="/" onClick={() => setOpen(false)} aria-label="Direct Movers home">
          <Logo variant="dark" />
        </Link>

        <nav className="hidden lg:flex items-center gap-1" aria-label="Main">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === "/"}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-semibold rounded-md transition-smooth ${
                  isActive
                    ? "text-primary bg-white/5"
                    : "text-white/80 hover:text-white hover:bg-white/5"
                }`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <Button
            asChild
            size="sm"
            className="hidden sm:inline-flex bg-primary hover:bg-primary-glow text-primary-foreground font-semibold shadow-red animate-pulse-red"
          >
            <a href={`tel:${CONTACT.phone}`} aria-label={`Call ${CONTACT.phoneDisplay}`}>
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">{CONTACT.phoneDisplay}</span>
              <span className="md:hidden">Call Now</span>
            </a>
          </Button>

          <button
            className="lg:hidden p-2 text-white"
            onClick={() => setOpen((o) => !o)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden bg-secondary border-t border-white/10">
          <nav className="container-tight py-4 flex flex-col gap-1" aria-label="Mobile">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-4 py-3 text-base font-semibold rounded-md transition-smooth ${
                    isActive
                      ? "text-primary bg-white/5"
                      : "text-white/85 hover:text-white hover:bg-white/5"
                  }`
                }
              >
                {item.label}
              </NavLink>
            ))}
            <a
              href={`tel:${CONTACT.phone}`}
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 bg-primary text-primary-foreground rounded-md font-semibold flex items-center gap-2 justify-center"
            >
              <Phone className="w-4 h-4" /> Call {CONTACT.phoneDisplay}
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
