import { motion } from "motion/react";
import strength from "@/assets/strength.jpg";
import crossfit from "@/assets/crossfit.jpg";
import cardio from "@/assets/cardio.jpg";
import personal from "@/assets/personal.jpg";
import { Reveal } from "./Reveal";

const items = [
  { tag: "01", title: "Strength Training", desc: "Free weights, racks and progressive programming to build lasting muscle and force.", img: strength },
  { tag: "02", title: "CrossFit", desc: "High-intensity functional workouts that test conditioning, power and endurance.", img: crossfit },
  { tag: "03", title: "Cardio", desc: "Treadmills and cardio machines for fat loss, heart health and stamina.", img: cardio },
  { tag: "04", title: "Personal Training", desc: "1-on-1 attention from experienced coaches who tailor each session to your goal.", img: personal },
  { tag: "05", title: "Gym Training", desc: "Open floor access with the full range of equipment for self-guided members.", img: strength },
];

export function Services() {
  return (
    <section id="services" className="relative py-24 sm:py-32 lg:py-40 bg-surface/40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Training</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-display text-5xl sm:text-6xl md:text-7xl max-w-2xl leading-[0.95]">
                Five ways to <span className="ember-gradient">build</span> you.
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.2}>
            <p className="text-muted-foreground max-w-md">
              Whether you walk in to lift, sweat, sprint or learn — there's a place for you on the floor.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {items.map((it, i) => (
            <motion.article
              key={it.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6 }}
              className={`group relative overflow-hidden rounded-2xl bg-card border border-border ${
                i === 0 ? "sm:col-span-2 lg:col-span-2 lg:row-span-2" : ""
              }`}
            >
              <div className={`relative ${i === 0 ? "aspect-[16/10] lg:aspect-auto lg:h-full" : "aspect-[4/5]"} overflow-hidden`}>
                <img
                  src={it.img}
                  alt={it.title}
                  loading="lazy"
                  className="absolute inset-0 size-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              </div>
              <div className="absolute inset-0 p-6 sm:p-8 flex flex-col justify-between">
                <div className="text-[10px] uppercase tracking-[0.3em] text-primary/90">{it.tag}</div>
                <div>
                  <h3 className="text-display text-3xl sm:text-4xl mb-2">{it.title}</h3>
                  <p className="text-sm text-muted-foreground max-w-sm opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    {it.desc}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
