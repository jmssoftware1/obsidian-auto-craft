import { useEffect, useState } from "react";
import { useActiveSection } from "@/hooks/useParallax";
import { brand, navigationItems, primaryCta } from "@/data/navigation";
import { cn } from "@/lib/utils";

const SECTION_IDS = ["top", "servicos", "processo", "contato"];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useActiveSection(SECTION_IDS);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
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
        "fixed inset-x-0 top-0 z-50 transition-[background-color,border-color] duration-700 ease-obsidian",
        scrolled || open ? "border-b border-line bg-bg/92" : "border-b border-transparent",
      )}
    >
      <div className="shell grid h-16 grid-cols-[minmax(0,1fr)_auto] items-center gap-6 md:flex md:justify-between lg:h-[5.5rem]">
        <a href="#top" className="group flex min-w-0 items-baseline gap-2.5">
          <span className="font-display text-[0.8rem] font-extrabold uppercase tracking-[0.34em] text-ink">
            {brand.wordmark}
          </span>
          <span className="label text-accent-dim transition-colors duration-500 group-hover:text-accent">
            {brand.wordmarkSuffix}
          </span>
        </a>

        <nav aria-label="Principal" className="hidden items-center gap-9 md:flex lg:gap-12">
          {navigationItems.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "label relative py-2 transition-colors duration-500",
                  isActive ? "text-ink" : "hover:text-ink",
                )}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={cn(
                    "absolute -bottom-0.5 left-0 h-px w-full origin-left bg-accent transition-transform duration-700 ease-obsidian",
                    isActive ? "scale-x-100" : "scale-x-0",
                  )}
                />
              </a>
            );
          })}
          <a
            href={primaryCta.href}
            className="label border border-accent/50 px-5 py-3 text-accent transition-colors duration-700 ease-obsidian hover:bg-accent hover:text-bg"
          >
            {primaryCta.label}
          </a>
        </nav>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          className="-mr-2 flex h-12 w-12 shrink-0 flex-col items-center justify-center gap-[7px] md:hidden"
        >
          <span
            className={cn(
              "h-px w-7 bg-ink transition-transform duration-500 ease-obsidian",
              open && "translate-y-[4px] rotate-45",
            )}
          />
          <span
            className={cn(
              "h-px w-7 bg-ink transition-transform duration-500 ease-obsidian",
              open && "-translate-y-[4px] -rotate-45",
            )}
          />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-0 top-16 z-40 bg-bg md:hidden">
          <nav aria-label="Menu móvel" className="shell flex h-full flex-col pt-14">
            {navigationItems.map((item, i) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                style={{ animationDelay: `${80 + i * 90}ms` }}
                className="enter display flex items-baseline gap-4 border-b border-line py-6 text-[2.25rem] text-ink"
              >
                <span className="label text-accent">0{i + 1}</span>
                {item.label}
              </a>
            ))}
            <a
              href={primaryCta.href}
              onClick={() => setOpen(false)}
              style={{ animationDelay: "380ms" }}
              className="enter label mt-10 self-start border border-accent/50 px-6 py-4 text-accent"
            >
              {primaryCta.label}
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
