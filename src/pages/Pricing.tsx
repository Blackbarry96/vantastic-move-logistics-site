import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { CreditCard, ShieldCheck, Phone, MessageCircle, Calendar, Truck, CheckCircle2 } from "lucide-react";
import { CONTACT, buildWhatsAppLink } from "@/lib/contact";

const steps = [
  { icon: MessageCircle, title: "1. Get in touch", desc: "Call, WhatsApp, or fill the quote form. Tell us what's moving and from where to where." },
  { icon: Calendar, title: "2. Confirm & book", desc: "We give you a clear, upfront price. A 50% deposit secures your slot." },
  { icon: Truck, title: "3. We move it", desc: "On the day, we arrive on time, handle everything carefully and update you throughout." },
  { icon: CheckCircle2, title: "4. Pay on completion", desc: "Once everything's safely delivered, you settle the remaining 50%. Simple." },
];

const Pricing = () => {
  return (
    <Layout>
      <section className="bg-gradient-dark text-white py-20">
        <div className="container-tight text-center">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">Pricing & Booking</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold mb-4">Transparent & Secure Pricing</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            No hidden fees. No surprises. Just honest, upfront pricing you can trust.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-tight">
          <div className="grid md:grid-cols-2 gap-6 mb-16">
            <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-card">
              <CreditCard className="w-12 h-12 mx-auto text-primary mb-4" />
              <p className="font-display text-6xl font-bold mb-3">50%</p>
              <p className="text-muted-foreground text-lg">Deposit required upon booking to secure your slot</p>
            </div>
            <div className="bg-card border border-border rounded-2xl p-8 text-center shadow-card">
              <ShieldCheck className="w-12 h-12 mx-auto text-primary mb-4" />
              <p className="font-display text-6xl font-bold mb-3">50%</p>
              <p className="text-muted-foreground text-lg">Remaining balance payable upon successful job completion</p>
            </div>
          </div>

          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-3">How it works</h2>
            <p className="text-muted-foreground text-lg">Booking a move with Vantastic is straightforward — here's exactly what happens.</p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((s) => (
              <div key={s.title} className="bg-card border border-border rounded-xl p-6 shadow-card">
                <div className="w-12 h-12 rounded-lg bg-secondary text-primary flex items-center justify-center mb-4">
                  <s.icon className="w-6 h-6" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted">
        <div className="container-tight max-w-3xl">
          <h2 className="font-display text-3xl font-bold mb-8 text-center">What affects the price?</h2>
          <div className="space-y-4">
            {[
              ["Distance", "Mileage between pickup and drop-off — we keep fuel costs fair and transparent."],
              ["Volume of items", "A single sofa costs less than a 3-bed house. We size the job accurately upfront."],
              ["Access", "Stairs, narrow doorways, lift access or parking restrictions can affect time on the job."],
              ["Urgency", "Standard bookings are cheaper than same-day priority dispatch."],
              ["Time of day", "Weekends and evenings may carry a small premium — we'll tell you upfront."],
            ].map(([title, desc]) => (
              <div key={title} className="bg-card border border-border rounded-lg p-5 flex gap-4">
                <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-semibold mb-1">{title}</h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="container-tight text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Ready to get a quote?</h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">Free, no-obligation quote. Get a price in minutes.</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button asChild size="lg" className="bg-primary hover:bg-primary-glow h-14 px-8">
              <Link to="/contact">Request a Quote</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-secondary">
              <a href={buildWhatsAppLink("Hi Vantastic, I'd like a quote please.")} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="h-14 px-8 bg-white/10 border-white/30 text-white hover:bg-white hover:text-secondary">
              <a href={`tel:${CONTACT.phone}`}><Phone className="w-4 h-4" /> {CONTACT.phoneDisplay}</a>
            </Button>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Pricing;
