import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Award, Flame, Users } from "lucide-react";
import { Reveal } from "./Reveal";
import founderAsset from "@/assets/badrudeen.png.asset.json";

export function Founder() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);
  const glow = useTransform(scrollYProgress, [0, 0.5, 1], [0.4, 0.8, 0.4]);

  return (
    <section id="founder" ref={ref} className="relative py-24 sm:py-32 lg:py-40 overflow-hidden">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-surface/30 to-background" />
      <motion.div
        style={{ opacity: glow }}
        className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 size-[60rem] rounded-full blur-3xl"
        aria-hidden
      >
        <div className="size-full rounded-full bg-[radial-gradient(circle_at_center,oklch(0.68_0.18_45/0.18),transparent_60%)]" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
        {/* Portrait */}
        <motion.div style={{ y }} className="lg:col-span-5 relative">
          <div className="relative group">
            {/* Decorative frame accents */}
            <div className="absolute -inset-3 sm:-inset-5 rounded-[2rem] bg-gradient-to-br from-primary/40 via-primary/10 to-transparent blur-2xl opacity-60 group-hover:opacity-90 transition-opacity duration-700" aria-hidden />
            <div className="absolute -top-4 -left-4 size-16 border-t-2 border-l-2 border-primary/70 rounded-tl-2xl" aria-hidden />
            <div className="absolute -bottom-4 -right-4 size-16 border-b-2 border-r-2 border-primary/70 rounded-br-2xl" aria-hidden />

            <div className="relative aspect-[4/5] rounded-[1.75rem] overflow-hidden border border-border/80 bg-surface shadow-card">
              <img
                src={founderAsset.url}
                alt="Mr. Badrudeen — Founder of Badrus Body Line"
                className="size-full object-cover object-top transition-transform duration-[1200ms] ease-out group-hover:scale-[1.04]"
                loading="lazy"
                decoding="async"
              />
              {/* Cinematic overlays */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,oklch(0.68_0.18_45/0.18),transparent_55%)]" />
              <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 rounded-[1.75rem]" />

              {/* Glass name plate */}
              <div className="absolute left-4 right-4 bottom-4 sm:left-6 sm:right-6 sm:bottom-6">
                <div className="backdrop-blur-xl bg-background/40 border border-white/10 rounded-2xl px-5 py-4 shadow-card">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-primary mb-1">Est. 2000</div>
                  <div className="text-display text-2xl sm:text-3xl leading-none">Mr. Badrudeen</div>
                  <div className="text-xs text-muted-foreground mt-1">Founder & Fitness Mentor</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <div className="lg:col-span-7">
          <Reveal>
            <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-primary mb-6">
              <span className="size-1.5 rounded-full bg-primary animate-pulse" />
              Meet the Founder
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
              The man behind <br />
              <span className="ember-gradient">the iron.</span>
            </h2>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-8 text-lg text-muted-foreground leading-relaxed max-w-xl">
              <span className="text-foreground font-semibold">Mr. Badrudeen</span> is the driving
              force behind Badrus Body Line — a fitness centre proudly serving the Salem community
              since <span className="text-foreground">2000</span>. A passionate fitness professional,
              he has dedicated his life to helping members build strength, discipline, confidence,
              and a healthier lifestyle through consistent training and personal guidance.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <p className="mt-5 text-base text-muted-foreground/90 leading-relaxed max-w-xl">
              His philosophy is simple: show up, train with intent, and let the results follow.
              That discipline has shaped generations of fit, focused members in Salem.
            </p>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-10 grid sm:grid-cols-3 gap-4">
              {[
                { icon: Award, label: "Since", value: "2000" },
                { icon: Flame, label: "Discipline", value: "Daily" },
                { icon: Users, label: "Guidance", value: "Personal" },
              ].map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="group/card relative rounded-2xl border border-border/80 bg-surface/40 backdrop-blur-md p-5 overflow-hidden hover:border-primary/40 transition-colors duration-500"
                >
                  <div className="absolute inset-0 -z-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover/card:from-primary/10 transition-colors duration-500" />
                  <Icon className="size-5 text-primary mb-3" aria-hidden />
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">{label}</div>
                  <div className="text-display text-2xl mt-1">{value}</div>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.5}>
            <figure className="mt-10 border-l-2 border-primary/70 pl-5 max-w-xl">
              <blockquote className="text-foreground/90 italic leading-relaxed">
                “Strength is built one honest rep at a time. Be consistent, and the body — and the
                mind — will follow.”
              </blockquote>
              <figcaption className="mt-2 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                — Mr. Badrudeen
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
