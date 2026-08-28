import { useEffect, useState } from "react";
import { brand, navigationItems, primaryCta } from "@/data/navigation";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 48); onScroll(); window.addEventListener("scroll", onScroll, { passive: true }); return () => window.removeEventListener("scroll", onScroll); }, []);
  useEffect(() => { document.body.style.overflow = open ? "hidden" : ""; return () => { document.body.style.overflow = ""; }; }, [open]);
  return <header className={cn("fixed inset-x-0 top-0 z-50 border-b transition-all duration-500", scrolled || open ? "border-line bg-bg/88 backdrop-blur-xl" : "border-transparent bg-transparent")}>
    <div className="shell flex h-[72px] items-center justify-between lg:h-20">
      <a href="#top" className="group flex items-baseline gap-2" aria-label="Obsidian Garage — início"><span className="font-display text-sm font-extrabold uppercase tracking-[0.28em]">{brand.wordmark}</span><span className="label text-accent-dim transition-colors duration-300 group-hover:text-accent">{brand.wordmarkSuffix}</span></a>
      <nav aria-label="Principal" className="hidden items-center gap-9 md:flex">{navigationItems.map((item) => <a key={item.href} href={item.href} className="nav-link label">{item.label}</a>)}<a href={primaryCta.href} className="label border border-accent/60 px-5 py-3 text-accent transition-all duration-500 hover:bg-accent hover:text-bg">{primaryCta.label}</a></nav>
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label={open ? "Fechar menu" : "Abrir menu"} className="relative flex h-11 w-11 items-center justify-center md:hidden"><span className={cn("absolute h-px w-6 bg-ink transition-transform duration-500", open ? "rotate-45" : "-translate-y-[4px]")} /><span className={cn("absolute h-px w-6 bg-ink transition-transform duration-500", open ? "-rotate-45" : "translate-y-[4px]")} /></button>
    </div>
    <div className={cn("fixed inset-0 top-[72px] bg-bg transition-[opacity,visibility] duration-500 md:hidden", open ? "visible opacity-100" : "invisible opacity-0")}><nav aria-label="Menu móvel" className="shell flex flex-col pt-16">{navigationItems.map((item, index) => <a key={item.href} href={item.href} onClick={() => setOpen(false)} className="mobile-nav-link border-t border-line py-5 font-display text-[clamp(2rem,10vw,3.5rem)] font-extrabold uppercase tracking-tight" style={{ transitionDelay: `${index * 50}ms` }}><span className="mr-4 font-mono text-xs font-normal tracking-[0.18em] text-accent">0{index + 1}</span>{item.label}</a>)}<a href={primaryCta.href} onClick={() => setOpen(false)} className="label mt-8 self-start border border-accent px-6 py-4 text-accent">{primaryCta.label}</a></nav></div>
  </header>;
}