import { Link } from "react-router-dom";
import { Phone, Mail, ShieldCheck, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";
import { CONTACT, buildWhatsAppLink } from "@/lib/contact";

export const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gradient-dark text-white/80 mt-0">
      <div className="container-tight py-14">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <Logo variant="dark" />
            <p className="mt-4 max-w-sm text-sm leading-relaxed">
              Professional furniture transport, removals & courier services across the entire UK.
              Owner-operated. Fully insured. Pay on completion.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 text-xs uppercase tracking-wider text-primary font-semibold">
              <ShieldCheck className="w-4 h-4" /> Pay on Completion Guarantee
            </div>
          </div>

          <div>
            <h3 className="text-white font-display text-lg mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/services" className="hover:text-primary transition-smooth">Full House Removals</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-smooth">Furniture Transport</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-smooth">Store-to-Door Delivery</Link></li>
              <li><Link to="/services" className="hover:text-primary transition-smooth">Same-Day Courier</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-display text-lg mb-4">Get In Touch</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 hover:text-primary transition-smooth">
                  <Phone className="w-4 h-4 text-primary" /> {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 hover:text-primary transition-smooth break-all">
                  <Mail className="w-4 h-4 text-primary shrink-0" /> {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={buildWhatsAppLink("Hi Direct Movers, I'd like a quote please.")} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 hover:text-primary transition-smooth">
                  <MessageCircle className="w-4 h-4 text-primary" /> WhatsApp us
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/50">
          <p>© {year} {CONTACT.businessName}. All rights reserved.</p>
          <p>Nationwide UK Coverage · Fully Insured · DBS Checked Driver</p>
        </div>
      </div>
    </footer>
  );
};
