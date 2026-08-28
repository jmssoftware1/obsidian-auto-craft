import { useCallback, useEffect, useRef, useState } from "react";
import afterImage from "@/assets/after.jpg";
import beforeImage from "@/assets/before.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionIndex } from "@/components/SectionIndex";

export function BeforeAfter() {
  const frameRef = useRef<HTMLDivElement | null>(null);
  const [position, setPosition] = useState(50);
  const dragging = useRef(false);
  const setFromClientX = useCallback((x: number) => {
    const node = frameRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    setPosition(Math.min(100, Math.max(0, ((x - rect.left) / rect.width) * 100)));
  }, []);
  useEffect(() => {
    const move = (event: PointerEvent) => { if (dragging.current) setFromClientX(event.clientX); };
    const up = () => { dragging.current = false; };
    addEventListener("pointermove", move, { passive: true });
    addEventListener("pointerup", up);
    return () => { removeEventListener("pointermove", move); removeEventListener("pointerup", up); };
  }, [setFromClientX]);

  return (
    <section id="antes-depois" className="border-t border-line bg-bg-alt py-24 md:py-36 lg:py-44">
      <div className="shell">
        <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8"><SectionIndex index="06 / 08" label="Antes e depois" /><h2 className="section-title mt-10 font-display font-extrabold uppercase">A luz não<br /><span className="text-ink-dim">mente.</span></h2></div>
          <p className="label max-w-xs md:col-span-4 md:justify-self-end">Arraste para comparar. O mesmo painel, antes e depois da correção.</p>
        </Reveal>
      </div>
      <Reveal delay={120} className="shell mt-14 md:mt-20">
        <div ref={frameRef} onPointerDown={(event) => { dragging.current = true; setFromClientX(event.clientX); }} className="comparison group relative aspect-[4/5] w-full cursor-ew-resize touch-none select-none overflow-hidden sm:aspect-[16/9]">
          <img src={afterImage} alt="Capô escuro corrigido, com reflexo espelhado" width={1600} height={1000} loading="lazy" className="absolute inset-0 h-full w-full object-cover transition-[filter] duration-700 group-hover:brightness-105" />
          <div className="absolute inset-y-0 left-0 overflow-hidden" style={{ width: `${position}%` }}><img src={beforeImage} alt="Capô escuro opaco antes da correção" width={1600} height={1000} loading="lazy" className="h-full w-full max-w-none object-cover" style={{ width: frameRef.current?.clientWidth ?? "100%" }} /></div>
          <div className="absolute inset-x-0 top-5 flex justify-between px-5"><span className="label bg-bg/60 px-2 py-1 text-ink backdrop-blur-sm">Antes</span><span className="label bg-bg/60 px-2 py-1 text-ink backdrop-blur-sm">Depois</span></div>
          <div className="pointer-events-none absolute inset-y-0 w-px bg-accent shadow-[0_0_18px_rgba(255,255,255,.18)] transition-[left] duration-100 ease-out" style={{ left: `${position}%` }} />
          <div className="pointer-events-none absolute top-1/2 grid h-14 w-14 -translate-x-1/2 -translate-y-1/2 place-items-center border border-accent bg-bg/80 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110" style={{ left: `${position}%` }}><span className="font-mono text-[10px] tracking-[0.15em] text-accent">←→</span></div>
          <input type="range" min="0" max="100" step="0.5" value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-label="Comparar antes e depois" className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
        </div>
      </Reveal>
    </section>
  );
}
