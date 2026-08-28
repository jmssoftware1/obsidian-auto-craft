import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionIndex } from "@/components/SectionIndex";
import { processSteps } from "@/data/processSteps";

export function Process() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const node = containerRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.4;
      const passed = window.innerHeight * 0.6 - rect.top;
      setProgress(Math.min(1, Math.max(0, passed / Math.max(total, 1))));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="processo" className="border-t border-line bg-bg py-20 md:py-32 lg:py-40">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <SectionIndex index="05 / 08" label="Processo" />
          <h2 className="mt-8 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.02em]">
            Quatro etapas,
            <br />
            nenhuma pulada
          </h2>
        </Reveal>

        <div className="mt-6 h-px w-full bg-line" aria-hidden="true">
          <div
            className="h-px bg-accent transition-[width] duration-300 ease-out"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div ref={containerRef} className="mt-16 flex flex-col gap-20 md:gap-28">
          {processSteps.map((step, index) => (
            <Reveal key={step.number} delay={40}>
              <article className="grid grid-cols-1 gap-8 md:grid-cols-12 md:items-start md:gap-10">
                <p className="font-mono text-5xl leading-none text-accent md:col-span-2 md:text-6xl">
                  {step.number}
                </p>
                <div className="md:col-span-4">
                  <h3 className="font-display text-2xl font-extrabold uppercase tracking-tight md:text-3xl">
                    {step.title}
                  </h3>
                  <p className="mt-4 max-w-sm text-sm leading-7 text-ink-dim">
                    {step.description}
                  </p>
                  <p className="label mt-5 text-accent-dim">{step.meta}</p>
                </div>
                <div className="md:col-span-6">
                  <img
                    src={step.image}
                    alt={step.alt}
                    width={1200}
                    height={900}
                    loading="lazy"
                    className={
                      index % 2 === 0
                        ? "aspect-[4/3] w-full object-cover"
                        : "aspect-[4/3] w-full object-cover md:translate-y-8"
                    }
                  />
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
