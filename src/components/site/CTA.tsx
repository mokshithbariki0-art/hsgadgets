import { motion } from "framer-motion";
import { Aurora } from "./Aurora";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-24">
      <div className="mx-auto max-w-6xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative isolate overflow-hidden rounded-[2.5rem] border border-border bg-white px-8 py-20 text-center sm:px-16"
        >
          <Aurora className="opacity-60" />
          <div className="relative">
            <div className="text-xs uppercase tracking-[0.3em] text-[var(--electric)]">
              Your next device
            </div>
            <h2 className="mx-auto mt-4 max-w-3xl font-display text-[clamp(2.5rem,6vw,5rem)] leading-[0.95]">
              Tell us what you&rsquo;re looking for.
              <span className="block italic text-gradient">We probably already have it.</span>
            </h2>
            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href="https://wa.me/919945540050"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-2 rounded-full bg-[var(--ink)] px-7 py-4 text-sm font-medium text-white glow-ring transition-all hover:gap-3"
              >
                Message on WhatsApp
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:rotate-45" />
              </a>
              <a
                href="https://wa.me/c/919945540050"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[var(--ink)]/15 px-7 py-4 text-sm font-medium text-[var(--ink)] transition-colors hover:bg-[var(--mist)]"
              >
                Open catalogue
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
