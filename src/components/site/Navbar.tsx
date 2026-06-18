import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react";
import { Menu, X } from "lucide-react";
import logoAsset from "@/assets/logo.png.asset.json";

const links = [
  { href: "#about", label: "About" },
  { href: "#services", label: "Training" },
  { href: "#facility", label: "Facility" },
  { href: "#hours", label: "Hours" },
  { href: "#visit", label: "Visit" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 32));

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: 2.4, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-background/70 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 sm:px-8 h-16 sm:h-20">
          <a href="#top" className="flex items-center gap-3 group" aria-label="Badru's Bodyline — Home">
            <img
              src={logoAsset.url}
              alt="Badru's Bodyline"
              width={160}
              height={160}
              className="h-10 sm:h-12 w-auto object-contain transition-transform duration-500 group-hover:scale-105 drop-shadow-[0_4px_18px_rgba(234,88,12,0.35)]"
              loading="eager"
              decoding="async"
            />
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="relative px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors group"
                >
                  {l.label}
                  <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-primary origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#visit"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-5 py-2.5 text-sm font-semibold hover:scale-105 active:scale-95 transition-transform"
          >
            Visit Us
          </a>

          <button
            onClick={() => setOpen(true)}
            className="md:hidden p-2 -mr-2 text-foreground"
            aria-label="Open menu"
          >
            <Menu className="size-6" />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-background md:hidden"
          >
            <div className="flex items-center justify-between px-5 h-16">
              <img src={logoAsset.url} alt="Badru's Bodyline" className="h-10 w-auto object-contain" />
              <button onClick={() => setOpen(false)} aria-label="Close menu" className="p-2 -mr-2">
                <X className="size-6" />
              </button>
            </div>
            <ul className="flex flex-col gap-2 px-6 pt-10">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, x: 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.06 }}
                >
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="text-display text-5xl block py-3 hover:text-primary transition-colors"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
              <motion.li
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="pt-8"
              >
                <a
                  href="#visit"
                  onClick={() => setOpen(false)}
                  className="inline-flex items-center justify-center w-full rounded-full bg-primary text-primary-foreground px-6 py-4 font-semibold"
                >
                  Visit the Gym
                </a>
              </motion.li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
