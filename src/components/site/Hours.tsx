import { Reveal } from "./Reveal";

const schedule = [
  { day: "Mon — Sat", slots: ["5:00 AM — 10:30 AM", "4:00 PM — 8:00 PM"] },
  { day: "Sunday", slots: ["5:00 AM — 10:30 AM"] },
];

export function Hours() {
  return (
    <section id="hours" className="relative py-24 sm:py-32 lg:py-40 bg-surface/40">
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5">
            <Reveal><div className="text-xs uppercase tracking-[0.3em] text-primary mb-6">Open Hours</div></Reveal>
            <Reveal delay={0.1}>
              <h2 className="text-display text-5xl sm:text-6xl md:text-7xl leading-[0.95]">
                Train when it <span className="ember-gradient">fits</span> your day.
              </h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="mt-8 text-muted-foreground max-w-md">
                Two daily windows on weekdays for early risers and after-work athletes alike.
                Sunday mornings stay open for the dedicated.
              </p>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <ul className="divide-y divide-border border-y border-border">
              {schedule.map((row, i) => (
                <Reveal key={row.day} delay={i * 0.1}>
                  <li className="grid grid-cols-12 items-center py-8 gap-4 group">
                    <span className="col-span-12 sm:col-span-4 text-display text-3xl sm:text-4xl text-foreground group-hover:text-primary transition-colors">
                      {row.day}
                    </span>
                    <span className="col-span-12 sm:col-span-8 flex flex-wrap gap-x-8 gap-y-2">
                      {row.slots.map((s) => (
                        <span key={s} className="text-base sm:text-lg text-muted-foreground tabular-nums">
                          {s}
                        </span>
                      ))}
                    </span>
                  </li>
                </Reveal>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
