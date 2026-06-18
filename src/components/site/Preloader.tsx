import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import logoAsset from "@/assets/logo.png.asset.json";

export function Preloader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 1800);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] bg-background flex items-center justify-center"
          exit={{ y: "-100%" }}
          transition={{ duration: 0.9, ease: [0.85, 0, 0.15, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.div
              animate={{ opacity: [0.4, 0.9, 0.4], scale: [0.9, 1.05, 0.9] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 -m-10 rounded-full bg-primary/20 blur-3xl"
              aria-hidden
            />
            <img
              src={logoAsset.url}
              alt="Badru's Bodyline"
              className="relative h-44 sm:h-56 md:h-64 w-auto object-contain drop-shadow-[0_10px_40px_rgba(234,88,12,0.45)]"
              decoding="async"
            />
          </motion.div>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1.4, ease: "easeInOut" }}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary origin-left"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
