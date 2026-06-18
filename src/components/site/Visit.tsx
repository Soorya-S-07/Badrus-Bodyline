import { MapPin, Star, Building2, Phone } from "lucide-react";
import { Reveal } from "./Reveal";

const address = "KPR Complex, 1st Floor, Opposite Forest Office, Cherry Road, Salem – 636007, Tamil Nadu";
const mapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Badrus Body Line " + address)}`;

export function Visit() {
  return (
    <section id="visit" className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface/40 to-background" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Find Us</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
              Walk in. <br /><span className="ember-gradient">Train hard.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 space-y-6">
              <div className="flex items-start gap-4">
                <span className="grid place-items-center size-11 rounded-full bg-primary/15 text-primary shrink-0">
                  <MapPin className="size-5" aria-hidden />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Address</div>
                  <p className="text-foreground leading-relaxed max-w-md">
                    KPR Complex, 1st Floor,<br />
                    Opposite Forest Office, Cherry Road,<br />
                    Salem – 636007, Tamil Nadu
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid place-items-center size-11 rounded-full bg-primary/15 text-primary shrink-0">
                  <Phone className="size-5" aria-hidden />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Call Us</div>
                  <a href="tel:+919786014148" className="text-foreground hover:text-primary transition-colors">
                    <span className="text-display text-3xl tracking-wide">97860 14148</span>
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid place-items-center size-11 rounded-full bg-primary/15 text-primary shrink-0">
                  <Star className="size-5 fill-current" aria-hidden />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Rating</div>
                  <p className="text-foreground">
                    <span className="text-display text-3xl mr-2">4.7</span>
                    <span className="text-muted-foreground text-sm">from 54 ratings</span>
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="grid place-items-center size-11 rounded-full bg-primary/15 text-primary shrink-0">
                  <Building2 className="size-5" aria-hidden />
                </span>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground mb-1">Type</div>
                  <p className="text-foreground">Unisex Gym · Women Gym · Fitness Centre</p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.3}>
            <a
              href={mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-7 py-4 font-semibold hover:scale-105 active:scale-95 transition-transform"
            >
              Open in Google Maps
              <span aria-hidden>→</span>
            </a>
          </Reveal>
        </div>

        <Reveal delay={0.2} className="relative">
          <div className="relative aspect-square rounded-2xl overflow-hidden border border-border bg-surface shadow-card">
            <iframe
              title="Badrus Body Line on the map"
              src={`https://www.google.com/maps?q=${encodeURIComponent("KPR Complex Cherry Road Salem 636007")}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 size-full grayscale-[40%] contrast-110"
              style={{ border: 0 }}
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border rounded-2xl" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
