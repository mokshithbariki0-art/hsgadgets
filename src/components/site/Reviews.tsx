import { motion } from "framer-motion";
import { Star } from "lucide-react";

const reviews = [
  {
    name: "Arjun M.",
    role: "iPhone 13 Pro buyer",
    text: "Genuinely the smoothest used-phone purchase I&rsquo;ve had. Battery at 96%, zero scratches, packed like a luxury unboxing. Hiten replied within minutes on WhatsApp.",
  },
  {
    name: "Priya S.",
    role: "MacBook Air M2",
    text: "I was nervous buying a laptop online. He sent video, invoice, even AppleCare details. Showed up exactly as promised. Already recommended to two friends.",
  },
  {
    name: "Rahul K.",
    role: "iPad + Apple Pencil",
    text: "Saved almost ₹25k vs new. Condition: 10/10. The transparency is what sells it — no hidden surprises, no upselling. Will be back.",
  },
  {
    name: "Sneha R.",
    role: "Galaxy S23 Ultra",
    text: "Easily the best price I found in Bengaluru after a week of comparing. Picked up from his place — clean shop, honest conversation, fair deal.",
  },
  {
    name: "Mohit V.",
    role: "AirPods Pro 2",
    text: "Quick exchange when I wanted a different colour. That kind of after-sale care is rare. 5 stars and then some.",
  },
  {
    name: "Anita D.",
    role: "Apple Watch Series 9",
    text: "Loved the buying experience. Hiten patiently explained every detail and even helped me set it up. Feels brand new.",
  },
];

export function Reviews() {
  return (
    <section id="reviews" className="relative overflow-hidden py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="flex flex-col items-end justify-between gap-6 md:flex-row">
          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--electric)]">
              From the customers
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[1] sm:text-6xl">
              4.9 on Google.
              <span className="block italic text-gradient">Earned, one phone at a time.</span>
            </h2>
          </div>
          <a
            href="https://www.google.com/maps/place/HS+Gadgets/@13.0040616,77.548953,17z"
            target="_blank"
            rel="noreferrer"
            className="text-sm text-muted-foreground underline-offset-4 hover:underline"
          >
            Read all reviews on Google →
          </a>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="relative flex flex-col rounded-3xl border border-border bg-white p-7"
            >
              <div className="flex gap-0.5 text-[var(--electric)]">
                {Array.from({ length: 5 }).map((_, k) => (
                  <Star key={k} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <blockquote
                className="mt-5 flex-1 font-display text-xl leading-snug text-[var(--ink)]"
                dangerouslySetInnerHTML={{ __html: `&ldquo;${r.text}&rdquo;` }}
              />
              <figcaption className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-[var(--mist)] font-display text-base text-[var(--ink)]">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
