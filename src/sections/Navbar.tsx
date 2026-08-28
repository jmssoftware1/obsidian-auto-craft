import { useEffect, useState } from "react";
import { brand, navigationItems, primaryCta } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color,backdrop-filter] duration-300",
        scrolled || open
          ? "border-b border-line bg-bg-alt/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <div className="shell flex h-16 items-center justify-between gap-6 lg:h-20">
        <a href="#top" className="group flex items-baseline gap-2">
          <span className="font-display text-sm font-extrabold uppercase tracking-[0.28em] text-ink">
            {brand.wordmark}
          </span>
          <span className="label text-accent-dim transition-colors group-hover:text-accent">
            {brand.wordmarkSuffix}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-10 md:flex">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label transition-colors duration-300 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
          <a
            href={primaryCta.href}
            className="label border border-accent/60 px-4 py-2 text-accent transition-colors duration-300 hover:bg-accent hover:text-bg"
          >
            {primaryCta.label}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="flex h-10 w-10 flex-col items-center justify-center gap-[6px] md:hidden"
        >
          <span
            className={cn(
              "h-px w-6 bg-ink transition-transform duration-300",
              open && "translate-y-[3.5px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-px w-6 bg-ink transition-transform duration-300",
              open && "-translate-y-[3.5px] -rotate-45",
            )}
          />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 top-16 z-40 bg-bg md:hidden">
          <nav aria-label="Menu móvel" className="shell flex flex-col gap-8 pt-16">
            {navigationItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="font-display text-3xl font-extrabold uppercase tracking-tight text-ink"
              >
                {item.label}
              </a>
            ))}
            <a
              href={primaryCta.href}
              onClick={() => setOpen(false)}
              className="label mt-4 self-start border border-accent/60 px-5 py-3 text-accent"
            >
              {primaryCta.label}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
