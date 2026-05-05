import { motion } from "framer-motion";
import { Smartphone, Laptop, Tablet, Headphones, Watch, Gamepad2, ArrowUpRight } from "lucide-react";

const cats = [
  { icon: Smartphone, title: "Smartphones", note: "iPhone · Samsung · OnePlus · Pixel" },
  { icon: Laptop, title: "Laptops", note: "MacBook · ThinkPad · Gaming rigs" },
  { icon: Tablet, title: "Tablets", note: "iPad · Galaxy Tab" },
  { icon: Headphones, title: "Audio", note: "AirPods · Sony · Bose" },
  { icon: Watch, title: "Wearables", note: "Apple Watch · Galaxy Watch" },
  { icon: Gamepad2, title: "Gaming & more", note: "Consoles · Cameras · Accessories" },
];

export function Catalogue() {
  return (
    <section id="catalogue" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--electric)]">
              The catalogue
            </div>
            <h2 className="mt-3 max-w-2xl font-display text-5xl leading-[1] sm:text-6xl">
              A living shelf of devices,
              <span className="italic text-gradient"> updated daily.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm text-muted-foreground">
            Stock moves fast. The freshest listings — with photos, condition notes
            and prices — live on our WhatsApp catalogue. One tap, you&rsquo;re in.
          </p>
        </div>

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cats.map((c, i) => (
            <motion.a
              key={c.title}
              href="https://wa.me/c/919945540050"
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              whileHover={{ y: -4 }}
              className="group relative overflow-hidden rounded-3xl border border-border bg-white p-7 transition-shadow hover:shadow-[0_30px_80px_-30px_oklch(0.55_0.27_260_/_0.35)]"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[var(--mist)] transition-transform duration-700 group-hover:scale-150" />
              <div className="relative flex items-center justify-between">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[var(--ink)] text-white">
                  <c.icon className="h-5 w-5" />
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-all group-hover:rotate-45 group-hover:text-[var(--electric)]" />
              </div>
              <div className="relative mt-10">
                <div className="font-display text-2xl">{c.title}</div>
                <div className="mt-1 text-sm text-muted-foreground">{c.note}</div>
              </div>
            </motion.a>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mt-14 overflow-hidden rounded-[2rem] border border-border bg-[var(--ink)] p-10 text-white sm:p-14"
        >
          <div className="aurora absolute -inset-[30%] opacity-50" />
          <div className="relative grid gap-6 md:grid-cols-[1.4fr_1fr] md:items-center">
            <div>
              <div className="text-xs uppercase tracking-[0.25em] text-white/60">
                Live inventory
              </div>
              <h3 className="mt-3 font-display text-4xl leading-tight sm:text-5xl">
                Open the WhatsApp catalogue —
                <span className="italic"> photos, prices, ready to ship.</span>
              </h3>
            </div>
            <a
              href="https://wa.me/c/919945540050"
              target="_blank"
              rel="noreferrer"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-white px-6 py-4 text-sm font-medium text-[var(--ink)] transition-all hover:gap-5"
            >
              See full catalogue
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
