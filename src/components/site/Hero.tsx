import { motion } from "framer-motion";
import { ArrowUpRight, ShieldCheck, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-devices.jpg";
import { Aurora } from "./Aurora";

export function Hero() {
  return (
    <section className="relative isolate min-h-[100svh] overflow-hidden pt-32">
      <Aurora />
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-5 pb-24 lg:grid-cols-[1.1fr_1fr] lg:pb-32">
        <div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-[var(--azure)]/30 bg-white/60 px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--electric)] backdrop-blur"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Pre-loved · Pristine · Priced right
          </motion.div>

          <h1 className="mt-6 font-display text-[clamp(3rem,7.5vw,6.5rem)] leading-[0.95] tracking-tight">
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05 }}
              className="block text-[var(--ink)]"
            >
              Premium gadgets,
            </motion.span>
            <motion.span
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.15 }}
              className="block italic text-gradient"
            >
              honest prices.
            </motion.span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-6 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            A Bengaluru-based reseller obsessed with one thing — handing you a
            device that feels brand new, at a price that doesn&rsquo;t. Each phone,
            laptop and tablet is hand-inspected by Hiten before it reaches you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.7 }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <a
              href="https://wa.me/c/919945540050"
              target="_blank"
              rel="noreferrer"
              className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-[var(--ink)] px-6 py-3.5 text-sm font-medium text-white glow-ring"
            >
              <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-[var(--electric)] via-[var(--azure)] to-[var(--electric)] transition-transform duration-700 group-hover:translate-x-0" />
              <span className="relative">Browse WhatsApp catalogue</span>
              <ArrowUpRight className="relative h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
            <a
              href="#why"
              className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/15 bg-white/60 px-6 py-3.5 text-sm font-medium text-[var(--ink)] backdrop-blur transition-colors hover:bg-white"
            >
              <ShieldCheck className="h-4 w-4" /> Why people trust us
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 1 }}
            className="mt-10 flex items-center gap-6 text-xs text-muted-foreground"
          >
            <Stat n="4.9★" l="Google rating" />
            <div className="h-8 w-px bg-border" />
            <Stat n="1000+" l="Happy customers" />
            <div className="h-8 w-px bg-border" />
            <Stat n="6+ yrs" l="Reselling craft" />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92, rotate: -4 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="float relative aspect-square overflow-hidden rounded-[2rem] glow-ring">
            <img
              src={heroImg}
              alt="Refurbished iPhone and MacBook from HS Gadgets"
              width={1024}
              height={1024}
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-2xl glass px-4 py-3">
              <div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  This week
                </div>
                <div className="font-display text-base">iPhone · MacBook · iPad</div>
              </div>
              <div className="rounded-full bg-[var(--ink)] px-3 py-1 text-[10px] uppercase tracking-widest text-white">
                In stock
              </div>
            </div>
          </div>
          <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-[var(--azure)] opacity-30 blur-2xl" />
          <div className="absolute -bottom-8 -right-6 h-32 w-32 rounded-full bg-[var(--electric)] opacity-30 blur-3xl" />
        </motion.div>
      </div>

      <Marquee />
    </section>
  );
}

function Stat({ n, l }: { n: string; l: string }) {
  return (
    <div>
      <div className="font-display text-2xl text-[var(--ink)]">{n}</div>
      <div className="uppercase tracking-[0.2em]">{l}</div>
    </div>
  );
}

function Marquee() {
  const items = [
    "iPhone",
    "MacBook",
    "iPad",
    "AirPods",
    "Apple Watch",
    "Samsung Galaxy",
    "OnePlus",
    "Pixel",
    "Gaming laptops",
    "Accessories",
  ];
  const row = [...items, ...items];
  return (
    <div className="relative border-y border-border/60 bg-white/40 py-5 backdrop-blur">
      <div className="marquee flex w-max gap-12 whitespace-nowrap font-display text-2xl text-[var(--ink)]/70 sm:text-3xl">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            {t}
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--electric)]" />
          </span>
        ))}
      </div>
    </div>
  );
}
