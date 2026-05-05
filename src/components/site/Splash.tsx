import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Splash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (sessionStorage.getItem("hs-splash-seen")) {
      setShow(false);
      return;
    }
    const t = setTimeout(() => {
      sessionStorage.setItem("hs-splash-seen", "1");
      setShow(false);
    }, 2200);
    return () => clearTimeout(t);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, filter: "blur(20px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
          style={{
            background:
              "radial-gradient(at 30% 30%, oklch(0.55 0.27 260 / 0.9), transparent 55%), radial-gradient(at 70% 70%, oklch(0.7 0.2 230 / 0.9), transparent 55%), oklch(0.12 0.06 260)",
          }}
        >
          <div className="aurora absolute inset-0 opacity-70" />
          <div className="absolute inset-0 grid-bg opacity-20" />

          <div className="relative flex flex-col items-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="absolute -inset-10 rounded-full bg-[var(--azure)]/40 blur-3xl" />
              <div className="relative flex h-24 w-24 items-center justify-center rounded-3xl bg-white/10 backdrop-blur-xl ring-1 ring-white/30">
                <span className="font-display text-5xl italic text-white">HS</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="mt-8 font-display text-2xl tracking-wide text-white/90"
            >
              HS Gadgets
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="mt-2 text-[10px] uppercase tracking-[0.4em] text-white/60"
            >
              Premium · Pre-loved · Pristine
            </motion.div>

            <div className="mt-10 h-[2px] w-40 overflow-hidden rounded-full bg-white/15">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "100%" }}
                transition={{ duration: 1.8, ease: "easeInOut" }}
                className="h-full w-1/2 bg-gradient-to-r from-transparent via-white to-transparent"
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
