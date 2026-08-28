import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionIndex } from "@/components/SectionIndex";
import { processSteps } from "@/data/processSteps";

export function Process() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const node = containerRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const total = Math.max(rect.height - innerHeight * 0.55, 1);
      const passed = innerHeight * 0.45 - rect.top;
      const value = Math.min(1, Math.max(0, passed / total));
      setProgress(value);
      setActive(Math.min(processSteps.length - 1, Math.max(0, Math.round(value * (processSteps.length - 1)))));
    };
    onScroll();
    addEventListener("scroll", onScroll, { passive: true });
    addEventListener("resize", onScroll);
    return () => { removeEventListener("scroll", onScroll); removeEventListener("resize", onScroll); };
  }, []);

  return (
    <section id="processo" className="border-t border-line bg-bg py-24 md:py-36 lg:py-44">
      <div className="shell">
        <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8"><SectionIndex index="05 / 08" label="Processo" /><h2 className="section-title mt-10 font-display font-extrabold uppercase">Nada acontece<br /><span className="text-ink-dim">por acaso.</span></h2></div>
          <p className="label max-w-xs md:col-span-4 md:justify-self-end">Quatro movimentos. Uma única intenção: deixar o carro melhor do que encontramos.</p>
        </Reveal>
        <div className="mt-14 h-px bg-line"><div className="h-px origin-left bg-accent transition-transform duration-300" style={{ transform: `scaleX(${progress})` }} /></div>
        <div ref={containerRef} className="mt-14 space-y-20 md:mt-20 md:space-y-36">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={50}>
              <article className="grid grid-cols-1 gap-8 md:grid-cols-12 md:gap-10">
                <div className="md:col-span-2"><span className={`font-mono text-5xl leading-none transition-all duration-700 md:text-7xl ${active === index ? "text-accent opacity-100" : "text-ink/20"}`}>{step.number}</span></div>
                <div className="md:col-span-4"><h3 className={`font-display text-3xl font-extrabold uppercase tracking-[-0.03em] transition-all duration-700 md:text-4xl ${active === index ? "translate-x-0 text-ink" : "translate-x-0 text-ink-dim"}`}>{step.title}</h3><p className="mt-5 max-w-sm text-sm leading-7 text-ink-dim">{step.description}</p><p className="label mt-6 text-accent-dim">{step.meta}</p></div>
                <div className="reveal-image md:col-span-6"><img src={step.image} alt={step.alt} width={1200} height={900} loading="lazy" className={`aspect-[4/3] w-full object-cover transition-transform duration-[1400ms] ${active === index ? "scale-100" : "scale-[1.045]"}`} /></div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
