import detailImage from "@/assets/detail.jpg";
import { useSectionProgress } from "@/hooks/useParallax";
import { useReveal } from "@/hooks/useReveal";

export function Detail() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.2);
  const { ref: trackRef, progress } = useSectionProgress<HTMLDivElement>();

  return (
    <section className="relative bg-bg">
      <div ref={trackRef}>
        <div ref={ref} className="relative overflow-hidden">
          <img
            src={detailImage}
            alt="Macro de gotas sobre pintura escura recém selada, com reflexo de luz dura"
            width={1920}
            height={1088}
            loading="lazy"
            decoding="async"
            style={{
              transform: `translate3d(0, ${(progress - 0.5) * 48}px, 0) scale(${visible ? 1.04 : 1.1})`,
              opacity: visible ? 1 : 0,
            }}
            className="h-[58vh] w-full object-cover transition-[transform,opacity] duration-[1400ms] ease-obsidian will-change-transform md:h-[88vh]"
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,11,0.85),transparent_45%)]"
            aria-hidden="true"
          />
          <p className="label absolute bottom-6 left-[22px] max-w-[70%] text-ink md:bottom-12 md:left-20">
            Ângulo de contato &gt; 105° · medido 72 h após a cura
          </p>
        </div>
      </div>
    </section>
  );
}
