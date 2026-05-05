import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import { MessageCircle } from "lucide-react";

const links = [
  { label: "Catalogue", href: "#catalogue" },
  { label: "Why HS", href: "#why" },
  { label: "Reviews", href: "#reviews" },
  { label: "Visit", href: "#visit" },
];

export function Nav() {
  const { scrollY } = useScroll();
  const [solid, setSolid] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => setSolid(v > 24));

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        solid ? "py-3" : "py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <div
          className={`flex items-center gap-3 rounded-full px-4 py-2 transition-all duration-500 ${
            solid ? "glass" : ""
          }`}
        >
          <div className="grid h-8 w-8 place-items-center rounded-full bg-[var(--ink)] text-[10px] font-bold tracking-tighter text-white">
            HS
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg">HS Gadgets</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Bengaluru · est. trust
            </div>
          </div>
        </div>

        <nav
          className={`hidden items-center gap-1 rounded-full px-2 py-1.5 text-sm md:flex transition-all duration-500 ${
            solid ? "glass" : ""
          }`}
        >
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-full px-4 py-1.5 text-foreground/70 transition-colors hover:bg-[var(--mist)] hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href="https://wa.me/919945540050"
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-4 py-2 text-sm font-medium text-white transition-all hover:gap-3 hover:bg-[var(--electric)]"
        >
          <MessageCircle className="h-4 w-4" />
          <span className="hidden sm:inline">WhatsApp</span>
        </a>
      </div>
    </motion.header>
  );
}
