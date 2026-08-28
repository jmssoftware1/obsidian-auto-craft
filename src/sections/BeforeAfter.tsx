import { useCallback, useEffect, useRef, useState } from "react";
import afterImage from "@/assets/after.jpg";
import beforeImage from "@/assets/before.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionIndex } from "@/components/SectionIndex";
import { cn } from "@/lib/utils";

export function BeforeAfter() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(52);
  const [dragging, setDragging] = useState(false);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const node = frameRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const pct = ((clientX - rect.left) / rect.width) * 100;
    setPosition(Math.min(100, Math.max(0, pct)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX);
    };
    const up = () => {
      draggingRef.current = false;
      setDragging(false);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    window.addEventListener("pointercancel", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
      window.removeEventListener("pointercancel", up);
    };
  }, [setFromClientX]);

  return (
    <section className="border-t border-line bg-bg-alt py-24 md:py-36 lg:py-48">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <SectionIndex index="06 / 08" label="Antes e depois" />
          <h2 className="display mt-9 text-[clamp(1.85rem,6vw,3.5rem)] leading-[1.02] md:mt-12">
            O mesmo capô,
            <br />
            duas leituras de luz
          </h2>
        </Reveal>
      </div>

      <Reveal delay={120} variant="veil" className="mt-12 md:mt-20">
        <div
          ref={frameRef}
          onPointerDown={(e) => {
            draggingRef.current = true;
            setDragging(true);
            setFromClientX(e.clientX);
          }}
          className={cn(
            "relative h-[56vh] w-full touch-none select-none overflow-hidden md:h-[80vh]",
            dragging ? "cursor-grabbing" : "cursor-ew-resize",
          )}
        >
          <img
            src={afterImage}
            alt="Capô escuro corrigido, com reflexo espelhado das luzes do estúdio"
            width={1600}
            height={1000}
            loading="lazy"
            decoding="async"
            style={{ transform: `scale(${dragging ? 1.015 : 1})` }}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1200ms] ease-obsidian"
          />
          <div
            className="absolute inset-0 h-full w-full"
            style={{
              clipPath: `inset(0 ${100 - position}% 0 0)`,
              transition: dragging ? "none" : "clip-path 700ms cubic-bezier(0.16,1,0.3,1)",
            }}
          >
            <img
              src={beforeImage}
              alt="Capô escuro opaco, com riscos circulares e manchas antes da correção"
              width={1600}
              height={1000}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </div>

          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,11,0.5),transparent_30%,transparent_70%,rgba(10,10,11,0.55))]"
            aria-hidden="true"
          />

          <span className="label absolute left-[22px] top-6 text-ink md:left-10">Antes</span>
          <span className="label absolute right-[22px] top-6 text-ink md:right-10">Depois</span>

          <div
            className="pointer-events-none absolute inset-y-0 w-px bg-accent/70"
            style={{
              left: `${position}%`,
              transition: dragging ? "none" : "left 700ms cubic-bezier(0.16,1,0.3,1)",
            }}
            aria-hidden="true"
          />
          <div
            className={cn(
              "pointer-events-none absolute top-1/2 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center border border-accent/70 bg-bg/60 transition-[transform,border-color,background-color] duration-500 ease-obsidian",
              dragging && "scale-[1.08] border-accent bg-bg/80",
            )}
            style={{
              left: `${position}%`,
              transition: dragging ? "none" : "left 700ms cubic-bezier(0.16,1,0.3,1)",
            }}
            aria-hidden="true"
          >
            <span className="font-mono text-[0.625rem] tracking-[0.3em] text-accent">‹ ›</span>
          </div>

          <input
            type="range"
            min={0}
            max={100}
            step={0.5}
            value={position}
            onChange={(e) => setPosition(Number(e.target.value))}
            aria-label="Comparar antes e depois"
            className="absolute inset-x-0 bottom-0 h-20 w-full cursor-ew-resize opacity-0"
          />
        </div>
        <p className="shell label mt-6 text-ink-dim">
          Arraste para comparar · correção em dois estágios
        </p>
      </Reveal>
    </section>
  );
}
