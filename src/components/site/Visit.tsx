import { motion } from "framer-motion";
import { MapPin, Phone, Mail, MessageCircle, Clock } from "lucide-react";

export function Visit() {
  return (
    <section id="visit" className="relative py-28">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr]">
          <motion.div
            initial={{ opacity: 0, scale: 0.97 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[2rem] border border-border glow-ring"
          >
            <iframe
              title="HS Gadgets location"
              src="https://www.google.com/maps?q=HS+Gadgets+Bengaluru&z=16&output=embed"
              className="h-[480px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>

          <div>
            <div className="text-xs uppercase tracking-[0.25em] text-[var(--electric)]">
              Visit · call · message
            </div>
            <h2 className="mt-3 font-display text-5xl leading-[1] sm:text-6xl">
              Come say hi —
              <span className="block italic text-gradient">we&rsquo;re in Bengaluru.</span>
            </h2>
            <p className="mt-5 max-w-md text-muted-foreground">
              Walk in to handle a device in person, or skip the trip — most of our
              customers buy entirely over WhatsApp with delivery to their door.
            </p>

            <div className="mt-10 space-y-3">
              <Row
                icon={MapPin}
                label="Location"
                value="HS Gadgets, Bengaluru, Karnataka"
                href="https://maps.google.com/?q=HS+Gadgets+Bengaluru"
              />
              <Row
                icon={Phone}
                label="Call"
                value="+91 99455 40050"
                href="tel:+919945540050"
              />
              <Row
                icon={MessageCircle}
                label="WhatsApp"
                value="Chat with Hiten"
                href="https://wa.me/919945540050"
              />
              <Row
                icon={Mail}
                label="Email"
                value="hitensoni@hsgadgets.in"
                href="mailto:hitensoni@hsgadgets.in"
              />
              <Row icon={Clock} label="Hours" value="Mon – Sat · 10:30 am – 8:30 pm" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Row({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: string;
  href?: string;
}) {
  const Tag = (href ? "a" : "div") as "a";
  return (
    <Tag
      href={href}
      target={href?.startsWith("http") ? "_blank" : undefined}
      rel="noreferrer"
      className="group flex items-center gap-4 rounded-2xl border border-border bg-white p-4 transition-all hover:-translate-y-0.5 hover:border-[var(--electric)]/40 hover:shadow-[0_20px_40px_-20px_oklch(0.55_0.27_260_/_0.3)]"
    >
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-[var(--mist)] text-[var(--electric)] transition-colors group-hover:bg-[var(--ink)] group-hover:text-white">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <div className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
          {label}
        </div>
        <div className="font-display text-lg text-[var(--ink)]">{value}</div>
      </div>
    </Tag>
  );
}
