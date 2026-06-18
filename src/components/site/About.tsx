import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import equipment from "@/assets/equipment.jpg";
import { Reveal } from "./Reveal";

export function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section id="about" className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <div className="lg:col-span-5 order-2 lg:order-1">
          <div ref={ref} className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-surface">
            <motion.img
              style={{ y }}
              src={equipment}
              alt="Dumbbell rack at Badrus Body Line"
              width={1280}
              height={1280}
              loading="lazy"
              className="absolute inset-0 size-full object-cover scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-2">Since</div>
              <div className="text-display text-7xl text-primary">2000</div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 order-1 lg:order-2">
          <Reveal>
            <div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">About the Gym</div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
              A quarter century of <span className="ember-gradient">honest training</span> in Salem.
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-8 text-base sm:text-lg text-muted-foreground leading-relaxed max-w-2xl">
              Badrus Body Line is a unisex fitness centre on Cherry Road serving men and women
              with dedicated training zones, experienced coaches, and a wide range of equipment.
              No hype. No shortcuts. Just focused work in a well-ventilated, accessible space.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <dl className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 border-t border-border pt-8">
              {[
                { k: "25+", v: "Years strong" },
                { k: "4.7★", v: "Rated by members" },
                { k: "5+", v: "Training disciplines" },
                { k: "All", v: "Levels welcome" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="text-display text-3xl sm:text-4xl text-foreground">{s.k}</dt>
                  <dd className="mt-1 text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
