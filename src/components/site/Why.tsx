import { motion } from "framer-motion";
import { ShieldCheck, BadgeCheck, Truck, HandCoins } from "lucide-react";

const points = [
  {
    icon: ShieldCheck,
    title: "Stringent QC",
    body: "Every device goes through a multi-point inspection — battery health, screen, cameras, ports, performance. Nothing ships unless it would pass for our own daily driver.",
  },
  {
    icon: BadgeCheck,
    title: "Honest grading",
    body: "We don't dress up scratches. Each listing tells you exactly what's mint, what's gently used and what carries character — with real photos, not stock shots.",
  },
  {
    icon: HandCoins,
    title: "Fair pricing",
    body: "Reseller margins kept lean so you save real money — typically 30-60% off new — without inheriting someone else's problems.",
  },
  {
    icon: Truck,
    title: "Shipped pan-India",
    body: "Pickup in Bengaluru or doorstep delivery anywhere in India, packed insured and tracked end-to-end.",
  },
];

export function Why() {
  return (
    <section id="why" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-16 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="lg:sticky lg:top-32 lg:self-start">
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--electric)]">
              The HS difference
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[1] sm:text-6xl">
              Used shouldn&rsquo;t mean
              <span className="block italic text-gradient">a leap of faith.</span>
            </h2>
            <p className="mt-6 max-w-md text-muted-foreground">
              Hiten Soni built HS Gadgets on a single belief — that buying a
              pre-owned device should feel as confident as walking out of a flagship
              store. Six years in, that&rsquo;s still the only KPI that matters.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {points.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7"
              >
                <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-[var(--electric)] to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <p.icon className="h-6 w-6 text-[var(--electric)]" />
                <div className="mt-6 font-display text-2xl">{p.title}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
