export function Footer() {
  return (
    <footer className="border-t border-border bg-[var(--ink)] text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-3">
            <div className="grid h-10 w-10 place-items-center rounded-full bg-white text-[10px] font-bold tracking-tighter text-[var(--ink)]">
              HS
            </div>
            <div>
              <div className="font-display text-2xl text-white">HS Gadgets</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                Bengaluru · since 2019
              </div>
            </div>
          </div>
          <p className="mt-5 max-w-sm text-sm text-white/60">
            Hand-picked, quality-tested pre-owned devices from a reseller who
            actually answers the phone.
          </p>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">Reach us</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="tel:+919945540050" className="hover:text-white">+91 99455 40050</a></li>
            <li><a href="https://wa.me/919945540050" target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp</a></li>
            <li><a href="mailto:hitensoni@hsgadgets.in" className="hover:text-white">hitensoni@hsgadgets.in</a></li>
          </ul>
        </div>

        <div>
          <div className="text-[10px] uppercase tracking-[0.25em] text-white/50">Browse</div>
          <ul className="mt-4 space-y-2 text-sm">
            <li><a href="https://wa.me/c/919945540050" target="_blank" rel="noreferrer" className="hover:text-white">WhatsApp catalogue</a></li>
            <li><a href="#reviews" className="hover:text-white">Reviews</a></li>
            <li><a href="#visit" className="hover:text-white">Visit shop</a></li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-5 py-6 text-xs text-white/40 sm:flex-row">
          <div>© {new Date().getFullYear()} HS Gadgets. All rights reserved.</div>
          <div>Crafted with care in Bengaluru.</div>
        </div>
      </div>
    </footer>
  );
}
