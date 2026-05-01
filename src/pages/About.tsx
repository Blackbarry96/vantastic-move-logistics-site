import { Link } from "react-router-dom";
import { Layout } from "@/components/Layout";
import { Button } from "@/components/ui/button";
import { Heart, ShieldCheck, Clock, Users, Phone } from "lucide-react";
import { CONTACT } from "@/lib/contact";
import vanInterior from "@/assets/van-interior.jpg";

const values = [
  { icon: Heart, title: "Care first", desc: "Your belongings get treated like our own. Wrapped, strapped, secured." },
  { icon: ShieldCheck, title: "Trust built in", desc: "Fully insured, transparent pricing, pay on completion guarantee." },
  { icon: Clock, title: "On time, every time", desc: "We respect your schedule. If we say 9am, we mean 9am." },
  { icon: Users, title: "Real human service", desc: "No call centres. You speak to the driver directly from quote to completion." },
];

const About = () => {
  return (
    <Layout>
      <section className="bg-gradient-dark text-white py-20">
        <div className="container-tight text-center">
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-3">About Us</p>
          <h1 className="font-display text-4xl sm:text-6xl font-bold mb-4">Driven by passion. Trusted by families.</h1>
          <p className="text-white/75 text-lg max-w-2xl mx-auto">
            Direct Movers is a family-minded, owner-operated UK courier and removals service.
          </p>
        </div>
      </section>

      <section className="py-20 bg-background">
        <div className="container-tight grid lg:grid-cols-2 gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-elegant">
            <img
              src={vanInterior}
              alt="Inside a Direct Movers van loaded carefully with furniture"
              loading="lazy"
              width={1280}
              height={960}
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="font-display text-3xl sm:text-4xl font-bold mb-5">Our story</h2>
            <div className="space-y-4 text-foreground/85 leading-relaxed">
              <p>
                Direct Movers was built on one simple idea: moving your stuff shouldn't be stressful.
                Too many big removal companies treat customers like a number — late arrivals, hidden fees, broken
                furniture and zero accountability.
              </p>
              <p>
                We do things differently. As an owner-operated business, every job is handled personally. You speak
                to the driver from your first phone call right through to completion. No middlemen, no surprises,
                no excuses.
              </p>
              <p>
                Whether you're moving a single sofa across town or relocating a whole home across the country, you'll
                get the same level of care, the same honest pricing, and the same friendly service every time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-muted">
        <div className="container-tight">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary font-bold uppercase tracking-widest text-sm mb-2">Our Values</p>
            <h2 className="font-display text-3xl sm:text-5xl font-bold">What we stand for</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-card border border-border rounded-xl p-6 text-center shadow-card">
                <div className="w-14 h-14 rounded-full bg-primary/10 text-primary flex items-center justify-center mx-auto mb-4">
                  <v.icon className="w-7 h-7" />
                </div>
                <h3 className="font-display text-lg font-bold mb-2">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary text-white">
        <div className="container-tight text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-bold mb-4">Let's get your stuff moving</h2>
          <p className="text-white/75 mb-8 max-w-xl mx-auto">Friendly, professional, nationwide. Call or request a quote today.</p>
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

export default About;
