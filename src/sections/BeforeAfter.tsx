import { useCallback, useEffect, useRef, useState } from "react";
import afterImage from "@/assets/after.jpg";
import beforeImage from "@/assets/before.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionIndex } from "@/components/SectionIndex";

export function BeforeAfter() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const node = frameRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!dragging.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => {
      dragging.current = false;
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  return (
    <section className="border-t border-line bg-bg-alt py-20 md:py-32 lg:py-40">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <SectionIndex index="06 / 08" label="Antes e depois" />
          <h2 className="mt-8 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.02em]">
            O mesmo capô,
            <br />
            duas leituras de luz
          </h2>
        </Reveal>
      </div>

      <Reveal delay={120} className="mt-12 md:mt-16">
        <div
          ref={frameRef}
          onPointerDown={(e) => {
            dragging.current = true;
            setFromClientX(e.clientX);
          }}
          className="relative h-[52vh] w-full touch-none select-none overflow-hidden md:h-[78vh]"
        >
          <img
            src={afterImage}
            alt="Capô escuro corrigido, com reflexo espelhado das luzes do estúdio"
            width={1600}
            height={1000}
            loading="lazy"
            className="absolute inset-0 h-full w-full object-cover"
          />
          <div
            className="absolute inset-0 h-full w-full"
            style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
          >
            <img
              src={beforeImage}
              alt="Capô escuro opaco, com riscos circulares e manchas antes da correção"
              width={1600}
              height={1000}
              loading="lazy"
              className="h-full w-full object-cover"
            />
          </div>

          <span className="label absolute left-5 top-5 text-ink">Antes</span>
          <span className="label absolute right-5 top-5 text-ink">Depois</span>

          <div
            className="absolute inset-y-0 w-px bg-accent"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          />
          <input
            type="range"
            min={0}
            max={100}
            step={0.5}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            aria-label="Comparar antes e depois"
            className="absolute inset-x-0 bottom-0 h-16 w-full cursor-ew-resize opacity-0"
          />
          <div
            className="pointer-events-none absolute top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-accent bg-bg/70"
            style={{ left: `${position}%` }}
            aria-hidden="true"
          >
            <span className="font-mono text-xs tracking-[0.2em] text-accent">||</span>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
