import logoAsset from "@/assets/logo.png.asset.json";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background pt-16 pb-10">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          <div>
            <img
              src={logoAsset.url}
              alt="Badru's Bodyline"
              className="h-20 w-auto object-contain mb-5 drop-shadow-[0_8px_24px_rgba(234,88,12,0.35)]"
              loading="lazy"
              decoding="async"
            />
            <p className="text-sm text-muted-foreground max-w-xs">
              Salem's trusted gym, women gym, unisex gym & fitness centre — since 2000.
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Visit</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              KPR Complex, 1st Floor,<br />
              Opposite Forest Office, Cherry Road,<br />
              Salem – 636007, Tamil Nadu
            </p>
          </div>

          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-4">Hours</div>
            <ul className="text-sm text-muted-foreground space-y-1.5 tabular-nums">
              <li>Mon — Sat · 5:00 AM — 10:30 AM</li>
              <li>Mon — Sat · 4:00 PM — 8:00 PM</li>
              <li>Sunday · 5:00 AM — 10:30 AM</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6 pt-8 border-t border-border">
          <div className="text-display text-[18vw] sm:text-[14vw] lg:text-[180px] leading-none ember-gradient">
            BADRUS.
          </div>
        </div>
        <p className="mt-8 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Badrus Body Line · Salem. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
