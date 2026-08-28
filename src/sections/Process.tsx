import { useEffect, useRef, useState } from "react";
import { Reveal } from "@/components/Reveal";
import { SectionIndex } from "@/components/SectionIndex";
import { processSteps } from "@/data/processSteps";
import { useReveal } from "@/hooks/useReveal";
import { cn } from "@/lib/utils";
import type { ProcessStep } from "@/data/processSteps";

function Step({ step, index }: { step: ProcessStep; index: number }) {
  const { ref, visible } = useReveal<HTMLElement>(0.25);

  return (
    <article
      ref={ref}
      data-visible={visible}
      className="group grid grid-cols-1 gap-7 md:grid-cols-12 md:items-start md:gap-10"
    >
      <div className="flex items-baseline gap-5 md:col-span-2 md:block">
        <p
          className={cn(
            "font-mono text-[3.25rem] leading-none transition-[color,opacity,transform] duration-[1200ms] ease-obsidian md:text-[4rem]",
            visible ? "text-accent opacity-100" : "translate-y-3 text-ink-dim opacity-30",
          )}
        >
          {step.number}
        </p>
        <span
          aria-hidden="true"
          className={cn(
            "hidden h-px origin-left bg-accent/40 transition-transform duration-[1400ms] ease-obsidian md:mt-6 md:block md:w-16",
            visible ? "scale-x-100" : "scale-x-0",
          )}
        />
      </div>

      <div
        className={cn(
          "transition-[opacity,transform] duration-[1200ms] ease-obsidian md:col-span-4",
          visible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0",
        )}
        style={{ transitionDelay: "120ms" }}
      >
        <h3 className="display text-xl tracking-[-0.01em] md:text-3xl">{step.title}</h3>
        <p className="mt-4 max-w-[40ch] text-sm leading-[1.85] text-ink-dim">{step.description}</p>
        <p className="label mt-6 text-accent-dim">{step.meta}</p>
      </div>

      <div className="overflow-hidden md:col-span-6">
        <img
          src={step.image}
          alt={step.alt}
          width={1200}
          height={900}
          loading="lazy"
          decoding="async"
          style={{
            clipPath: visible ? "inset(0 0 0 0)" : "inset(0 0 20% 0)",
            transitionDelay: "200ms",
          }}
          className={cn(
            "aspect-[4/3] w-full object-cover transition-[clip-path,transform,opacity] duration-[1500ms] ease-obsidian",
            visible ? "scale-100 opacity-100" : "scale-[1.06] opacity-0",
            index % 2 !== 0 && "md:translate-y-10",
          )}
        />
      </div>
    </article>
  );
}

export function Process() {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    const measure = () => {
      frame = 0;
      const node = containerRef.current;
      if (!node) return;
      const rect = node.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.4;
      const passed = window.innerHeight * 0.6 - rect.top;
      setProgress(Math.min(1, Math.max(0, passed / Math.max(total, 1))));
    };
    const onScroll = () => {
      if (frame) return;
      frame = window.requestAnimationFrame(measure);
    };
    measure();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      if (frame) window.cancelAnimationFrame(frame);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <section id="processo" className="border-t border-line bg-bg py-24 md:py-36 lg:py-48">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <SectionIndex index="05 / 08" label="Processo" />
          <h2 className="display mt-9 text-[clamp(1.85rem,6vw,3.5rem)] leading-[1.02] md:mt-12">
            Quatro etapas,
            <br />
            nenhuma pulada
          </h2>
        </Reveal>

        <div className="mt-10 h-px w-full bg-line md:mt-14" aria-hidden="true">
          <div
            className="h-px bg-accent transition-[width] duration-700 ease-obsidian"
            style={{ width: `${progress * 100}%` }}
          />
        </div>

        <div ref={containerRef} className="mt-16 flex flex-col gap-20 md:mt-24 md:gap-32">
          {processSteps.map((step, index) => (
            <Step key={step.number} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
