import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Home, Package, Truck, Zap, Sofa, Box, Phone, ArrowRight } from "lucide-react";
import { CONTACT, buildWhatsAppLink } from "@/lib/contact";

const services = [
  {
    icon: Home,
    title: "Full House Removals",
    desc: "Complete house clearance and relocation. From packing your kitchen to placing furniture in your new home — we handle every step. Ideal for studio flats up to 4-bed houses.",
    bullets: ["Disassemble & reassemble furniture", "Protective blankets & straps", "Single trip for most properties"],
  },
  {
    icon: Sofa,
    title: "Furniture & Large Item Transport",
    desc: "Specialist handling for sofas, beds, wardrobes, dining tables and any oversized items. Fully insured and carefully transported by an experienced driver.",
    bullets: ["Sofas, beds, wardrobes, appliances", "Stairs & narrow doorways no problem", "Two-man service available on request"],
  },
  {
    icon: Truck,
    title: "Store-to-Door Delivery",
    desc: "Bought furniture online or in-store? We collect from any UK retailer — IKEA, DFS, John Lewis, Wayfair, Facebook Marketplace — and deliver straight to your door.",
    bullets: ["Any retailer, anywhere in the UK", "Same-day collection available", "We handle the heavy lifting"],
  },
  {
    icon: Zap,
    title: "Urgent / Same-Day Courier",
    desc: "Last-minute move? Time-sensitive delivery? Call us for priority dispatch. We work evenings and weekends to fit around your schedule.",
    bullets: ["Same-day priority slots", "Evening & weekend availability", "Direct route — no shared loads"],
  },
  {
    icon: Box,
    title: "Single-Item Courier",
    desc: "Need to send a single piece of furniture or a fragile item across town or across the country? One-off delivery jobs welcomed.",
    bullets: ["No job too small", "Door-to-door pickup & drop", "Real-time updates"],
  },
  {
    icon: Package,
    title: "Office & Business Moves",
    desc: "Small office relocations, equipment moves, and business deliveries. Discreet, prompt and professional service.",
    bullets: ["Out-of-hours moves available", "Desks, chairs, IT equipment", "Invoice on completion"],
  },
];

const Services = () => {
  return (
    <Layout>
      <section className="bg-gradient-dark text-white py-20">
        <div className="container-tight text-center">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Our Services</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold mb-4">Everything we move</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Whether it's one sofa or a whole house, you'll get the same care, the same driver, and the same straightforward pricing.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-tight grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <article key={s.title} className="bg-card border border-border rounded-xl p-7 shadow-card hover:shadow-elegant transition-smooth">
              <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5">
                <s.icon className="w-7 h-7" />
              </div>
              <h2 className="font-display text-2xl font-bold mb-3">{s.title}</h2>
              <p className="text-muted-foreground mb-4 leading-relaxed">{s.desc}</p>
              <ul className="space-y-2 mb-5">
                {s.bullets.map((b) => (
                  <li key={b} className="flex gap-2 text-sm text-foreground/80">
                    <span className="text-primary font-bold">›</span> {b}
                  </li>
                ))}
              </ul>
              <Button asChild variant="ghost" className="text-primary hover:text-primary-glow p-0 h-auto font-semibold">
                <a href={buildWhatsAppLink(`Hi, I'd like a quote for: ${s.title}`)} target="_blank" rel="noopener noreferrer">
                  Get a quote for this service <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </article>
          ))}
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="container-tight text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Not sure which service you need?</h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">Just give us a call and tell us what you need moved — we'll point you in the right direction.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-glow h-14 px-8">
              <a href={`tel:${CONTACT.phone}`}><Phone className="w-4 h-4" /> Call {CONTACT.phoneDisplay}</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-secondary">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Services;
