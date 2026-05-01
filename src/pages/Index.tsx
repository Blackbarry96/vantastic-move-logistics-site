import { Link } from "react-router-dom";
import { Phone, ShieldCheck, Truck, Home as HomeIcon, Package, Zap, Star, MapPin, Clock, ArrowRight, Quote } from "lucide-react";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CONTACT } from "@/lib/contact";
import heroVan from "@/assets/hero-van.jpg";
import moversSofa from "@/assets/movers-sofa.jpg";

const services = [
  { icon: HomeIcon, title: "Full House Removals", desc: "Complete home moves — packed, loaded, transported and placed at your new address." },
  { icon: Package, title: "Furniture Transport", desc: "Sofas, beds, wardrobes & oversized items handled with care and protective wrapping." },
  { icon: Truck, title: "Store-to-Door Delivery", desc: "Bought new furniture? We collect from any UK retailer and deliver straight to you." },
  { icon: Zap, title: "Same-Day Courier", desc: "Urgent or last-minute moves. Call now for priority dispatch anywhere in the UK." },
];

const trust = [
  { icon: ShieldCheck, label: "Fully Insured" },
  { icon: Clock, label: "Same-Day Available" },
  { icon: MapPin, label: "Nationwide UK" },
  { icon: Star, label: "Pay on Completion" },
];

const reasons = [
  { title: "Owner-operated", desc: "You speak directly to the driver — no middlemen, no call centres, no surprises." },
  { title: "Careful handling", desc: "Blankets, straps and years of experience moving fragile furniture without damage." },
  { title: "Transparent pricing", desc: "Clear quote upfront. 50% deposit to book, 50% on successful completion." },
  { title: "Flexible hours", desc: "Evenings and weekends available. We work around your schedule, not ours." },
];

const testimonials = [
  { name: "Sarah W.", location: "Manchester", quote: "Picked up my new sofa from London and delivered same day. Brilliant communication throughout." },
  { name: "James O.", location: "Birmingham", quote: "Helped us move the whole flat. Careful, quick and great value. Would 100% use again." },
  { name: "Priya K.", location: "Leeds", quote: "Booked last minute for a same-day move. Showed up on time, super professional." },
];

const Index = () => {
  return (
    <Layout>
      {/* HERO */}
      <section className="relative min-h-[88vh] flex items-center justify-center overflow-hidden">
        <img
          src={heroVan}
          alt="Long-wheelbase Ford Transit van for furniture removals on a UK street"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1280}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative container-tight py-20 text-center text-white">
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/20 border border-primary/40 text-primary-foreground text-xs font-bold uppercase tracking-widest mb-6">
            Nationwide Furniture Transport & Removals
          </span>
          <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-bold leading-[1.05] mb-6 max-w-4xl mx-auto">
            Vantastic Moves. <span className="text-primary">Door‑to‑Door.</span> Anywhere in the UK.
          </h1>
          <p className="text-lg sm:text-xl text-white/85 max-w-2xl mx-auto mb-8">
            Furniture, removals & courier runs handled by a real driver who genuinely cares about your stuff.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-glow text-primary-foreground font-bold h-14 px-8 text-base shadow-red">
              <Link to="/contact">Get a Free Quote <ArrowRight className="w-4 h-4" /></Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base bg-white/10 backdrop-blur border-white/30 text-white hover:bg-white hover:text-secondary">
              <a href={`tel:${CONTACT.phone}`}>
                <Phone className="w-4 h-4" /> Call {CONTACT.phoneDisplay}
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="bg-secondary text-white py-6">
        <div className="container-tight grid grid-cols-2 md:grid-cols-4 gap-6">
          {trust.map((t) => (
            <div key={t.label} className="flex items-center gap-3 justify-center">
              <t.icon className="w-5 h-5 text-primary shrink-0" />
              <span className="font-semibold text-sm sm:text-base">{t.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="py-20 bg-background">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">What We Do</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4">Professional logistics tailored to your needs.</h2>
            <p className="text-muted-foreground text-lg">From single items to full house removals — one driver, one promise: your stuff gets there safely.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((s) => (
              <div key={s.title} className="bg-card rounded-xl p-6 shadow-card hover:shadow-elegant transition-smooth border border-border group">
                <div className="w-14 h-14 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-5 group-hover:bg-primary group-hover:text-primary-foreground transition-smooth">
                  <s.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-2">{s.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline" size="lg">
              <Link to="/services">See all services <ArrowRight className="w-4 h-4" /></Link>
            </Button>
          </div>
        </div>
      </section>

      {/* WHY US — split with image */}
      <section className="py-20 bg-muted">
        <div className="container-tight grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative rounded-2xl overflow-hidden shadow-elegant">
            <img
              src={moversSofa}
              alt="Professional mover carefully transporting a wrapped sofa"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 right-4 bg-secondary/90 text-white p-4 rounded-lg backdrop-blur">
              <p className="font-display text-lg">Real driver. Real care. Real results.</p>
            </div>
          </div>
          <div>
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Why Vantastic</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-6">Built on trust. Powered by experience.</h2>
            <div className="space-y-5">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-4">
                  <div className="w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center shrink-0 font-bold text-sm">✓</div>
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{r.title}</h3>
                    <p className="text-muted-foreground">{r.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* COVERAGE */}
      <section className="py-20 bg-secondary text-white">
        <div className="container-tight text-center">
          <MapPin className="w-12 h-12 mx-auto text-primary mb-4" />
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-4">100% UK Coverage</h2>
          <p className="text-white/75 text-lg max-w-2xl mx-auto mb-10">
            From London to Edinburgh, Cardiff to Belfast — no distance is too far. We operate across the entire United Kingdom.
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto">
            {["England", "Scotland", "Wales", "N. Ireland"].map((r) => (
              <div key={r} className="bg-white/5 border border-white/10 rounded-lg py-4 font-semibold hover:bg-primary/20 hover:border-primary transition-smooth">
                {r}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-background">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Customer Stories</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold">What our customers say</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-card border border-border rounded-xl p-6 shadow-card">
                <Quote className="w-8 h-8 text-primary mb-4" />
                <p className="text-foreground/90 italic mb-5 leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-semibold">{t.name} <span className="text-muted-foreground font-normal">· {t.location}</span></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-16 bg-gradient-red text-primary-foreground">
        <div className="container-tight text-center">
          <Zap className="w-12 h-12 mx-auto mb-4" />
          <h2 className="font-display text-3xl sm:text-5xl font-bold mb-3">Need it moved today?</h2>
          <p className="text-lg sm:text-xl text-white/90 mb-8 max-w-xl mx-auto">
            Urgent & same-day delivery available. Call now for priority dispatch.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-secondary hover:bg-black text-white h-14 px-8 text-base">
              <a href={`tel:${CONTACT.phone}`}>
                <Phone className="w-4 h-4" /> Call {CONTACT.phoneDisplay}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 text-base bg-white text-primary border-white hover:bg-white/90">
              <Link to="/contact">Request a Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
