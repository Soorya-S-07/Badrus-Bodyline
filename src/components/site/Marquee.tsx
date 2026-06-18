const words = ["Strength", "Discipline", "CrossFit", "Cardio", "Personal Training", "Since 2000"];

export function Marquee() {
  const row = [...words, ...words];
  return (
    <div className="border-y border-border bg-surface/40 overflow-hidden py-6">
      <div className="flex gap-12 whitespace-nowrap animate-marquee w-max">
        {row.map((w, i) => (
          <span key={i} className="text-display text-3xl sm:text-5xl text-muted-foreground/40 flex items-center gap-12">
            {w}
            <span className="size-2 rounded-full bg-primary inline-block" aria-hidden />
          </span>
        ))}
      </div>
    </div>
  );
}
