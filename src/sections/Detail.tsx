import detailImage from "@/assets/detail.jpg";
import { useReveal } from "@/hooks/useReveal";

export function Detail() {
  const { ref, visible } = useReveal<HTMLDivElement>(0.25);

  return (
    <section className="relative bg-bg">
      <div ref={ref} className="relative overflow-hidden">
        <img
          src={detailImage}
          alt="Macro de gotas sobre pintura escura recém selada, com reflexo de luz dura"
          width={1920}
          height={1088}
          loading="lazy"
          style={{
            transform: visible ? "scale(1)" : "scale(1.06)",
            opacity: visible ? 1 : 0,
          }}
          className="h-[60vh] w-full object-cover transition-[transform,opacity] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] md:h-[85vh]"
        />
        <p className="label absolute bottom-6 left-6 text-ink md:bottom-10 md:left-20">
          Ângulo de contato &gt; 105° · medido 72 h após a cura
        </p>
      </div>
    </section>
  );
}
