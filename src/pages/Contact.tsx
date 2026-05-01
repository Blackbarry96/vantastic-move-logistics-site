import { Layout } from "@/components/Layout";
import { QuoteForm } from "@/components/QuoteForm";
import { Phone, Mail, MessageCircle, Clock, MapPin } from "lucide-react";
import { CONTACT, buildWhatsAppLink } from "@/lib/contact";

const Contact = () => {
  return (
    <Layout>
      <section className="bg-gradient-dark text-white py-16">
        <div className="container-tight text-center">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Get In Touch</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold mb-4">Request a Quote</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Fill in the form and we'll get back to you with a bespoke quote — usually within the hour.
          </p>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container-tight grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <QuoteForm />
          </div>

          <aside className="space-y-4">
            <div className="bg-secondary text-white rounded-xl p-6 shadow-card">
              <h2 className="font-display text-xl font-bold mb-4">Speak to us directly</h2>
              <ul className="space-y-4 text-sm">
                <li>
                  <a href={`tel:${CONTACT.phone}`} className="flex items-start gap-3 hover:text-primary transition-smooth">
                    <Phone className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-base">{CONTACT.phoneDisplay}</p>
                      <p className="text-white/60 text-xs">Tap to call</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={buildWhatsAppLink("Hi Direct Movers, I'd like a quote please.")} target="_blank" rel="noopener noreferrer" className="flex items-start gap-3 hover:text-primary transition-smooth">
                    <MessageCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-base">WhatsApp</p>
                      <p className="text-white/60 text-xs">Fastest response</p>
                    </div>
                  </a>
                </li>
                <li>
                  <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-3 hover:text-primary transition-smooth">
                    <Mail className="w-5 h-5 text-primary mt-0.5 shrink-0" />
                    <div>
                      <p className="font-semibold text-base break-all">{CONTACT.email}</p>
                      <p className="text-white/60 text-xs">Email us anytime</p>
                    </div>
                  </a>
                </li>
              </ul>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              <h3 className="font-display text-lg font-bold mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-primary" /> Hours
              </h3>
              <ul className="text-sm space-y-2 text-foreground/80">
                <li className="flex justify-between"><span>Mon – Fri</span><span className="font-semibold">7am – 9pm</span></li>
                <li className="flex justify-between"><span>Saturday</span><span className="font-semibold">8am – 8pm</span></li>
                <li className="flex justify-between"><span>Sunday</span><span className="font-semibold">9am – 6pm</span></li>
              </ul>
              <p className="mt-3 text-xs text-muted-foreground">Same-day & emergency moves available outside these hours — just call.</p>
            </div>

            <div className="bg-card border border-border rounded-xl p-6 shadow-card">
              <h3 className="font-display text-lg font-bold mb-3 flex items-center gap-2">
                <MapPin className="w-5 h-5 text-primary" /> Service Area
              </h3>
              <p className="text-sm text-muted-foreground">Nationwide UK coverage — England, Scotland, Wales & Northern Ireland.</p>
            </div>
          </aside>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
