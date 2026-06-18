import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { ArrowDown, MapPin } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { SplitWords } from "./Reveal";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative isolate min-h-dvh w-full overflow-hidden"
    >
      <motion.div style={{ y, scale }} className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Athlete training at Badrus Body Line gym"
          width={1920}
          height={1080}
          fetchPriority="high"
          className="size-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/60 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/20 to-transparent" />
      </motion.div>

      <motion.div style={{ opacity }} className="relative z-10 mx-auto flex min-h-dvh max-w-7xl flex-col justify-end px-5 sm:px-8 pb-24 pt-32">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.6, duration: 0.8 }}
          className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-muted-foreground mb-6"
        >
          <span className="size-2 rounded-full bg-primary animate-pulse-ring" />
          Salem · Est. 2000
        </motion.div>

        <h1 className="text-display text-[14vw] sm:text-[10vw] md:text-[8vw] lg:text-[140px] xl:text-[160px] leading-[0.88] max-w-[14ch]">
          <SplitWords text="Forge your" />
          <br />
          <span className="ember-gradient inline-block overflow-hidden">
            <motion.span
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1, delay: 2.7, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block"
            >
              strongest
            </motion.span>
          </span>{" "}
          <SplitWords text="self." />
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.2, duration: 0.9 }}
          className="mt-10 flex flex-col sm:flex-row sm:items-center gap-6 sm:gap-10"
        >
          <p className="max-w-md text-base sm:text-lg text-muted-foreground leading-relaxed">
            Salem's trusted strength &amp; conditioning home since 2000. Experienced
            coaches, serious equipment, real results — for everyone.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#visit"
              className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 font-semibold hover:scale-105 active:scale-95 transition-transform"
            >
              <MapPin className="size-4" />
              Plan your visit
            </a>
            <a
              href="#services"
              className="text-sm text-foreground/80 hover:text-primary transition-colors underline underline-offset-8 decoration-1"
            >
              Explore training
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3.6 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted-foreground"
      >
        <span>Scroll</span>
        <ArrowDown className="size-4 animate-scroll-hint" aria-hidden />
      </motion.div>
    </section>
  );
}
