import { Users, Wind, Dumbbell, Accessibility, HeartHandshake, ShieldCheck } from "lucide-react";
import { motion } from "motion/react";
import { Reveal } from "./Reveal";

const highlights = [
  { icon: Users, title: "Experienced Trainers", desc: "Coaches who've shaped Salem's fitness scene for two decades." },
  { icon: HeartHandshake, title: "Personal Attention", desc: "Real form checks. Real progress. Never a number in a queue." },
  { icon: Wind, title: "Well Ventilated", desc: "Open, airy training floor designed for long, comfortable sessions." },
  { icon: Dumbbell, title: "Wide Range of Equipment", desc: "Free weights, machines, cardio and functional zones under one roof." },
  { icon: Accessibility, title: "Wheelchair Accessible", desc: "Step-free entrance and exit so everyone can train." },
  { icon: ShieldCheck, title: "Unisex Floor", desc: "Dedicated, respectful space for men and women alike." },
];

export function Facility() {
  return (
    <section id="facility" className="relative py-24 sm:py-32 lg:py-40">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="max-w-3xl mb-16">
          <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">The Facility</div></Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
              Built for the work. <span className="ember-gradient">Made for everyone.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden">
          {highlights.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: i * 0.06 }}
              className="group bg-background p-8 lg:p-10 relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/0 to-primary/0 group-hover:from-primary/10 group-hover:to-transparent transition-colors duration-700" />
              <h.icon className="size-8 text-primary mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500" aria-hidden />
              <h3 className="text-xl font-semibold mb-2 text-foreground">{h.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{h.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
