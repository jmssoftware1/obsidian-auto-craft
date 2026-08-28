import heroImage from "@/assets/hero.jpg";
import { useSectionProgress } from "@/hooks/useParallax";

export function Hero() {
  const { ref, progress } = useSectionProgress<HTMLElement>();

  return (
    <section
      id="top"
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-bg"
    >
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Sedã preto sob iluminação lateral dramática em estúdio escuro"
          width={1408}
          height={1808}
          fetchPriority="high"
          decoding="async"
          style={{
            transform: `translate3d(0, ${progress * 64}px, 0) scale(${1.08 - progress * 0.03})`,
          }}
          className="h-[112%] w-full object-cover object-[64%_center] will-change-transform lg:object-[72%_center]"
        />
        {/* readability veil: horizontal falloff + top/bottom vignette, no color shift */}
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,10,11,0.97),rgba(10,10,11,0.9)_28%,rgba(10,10,11,0.45)_62%,rgba(10,10,11,0.72))]"
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,10,11,0.75),transparent_28%,transparent_58%,rgba(10,10,11,0.9))]"
          aria-hidden="true"
        />
      </div>

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-20 pt-32 lg:justify-center lg:pb-0">
        <div className="max-w-[58rem]">
          <div
            className="enter flex min-w-0 items-center gap-4"
            style={{ animationDelay: "120ms" }}
          >
            <span className="label shrink-0 text-accent">01 / 08</span>
            <span className="hidden h-px w-10 shrink-0 bg-accent/40 sm:block md:w-16" aria-hidden="true" />
            <span className="label truncate">Estúdio de estética automotiva</span>
          </div>

          <h1
            className="enter display mt-7 text-[clamp(2rem,6vw,4.25rem)] text-ink md:mt-9"
            style={{ animationDelay: "240ms" }}
          >
            <span className="block">Verniz lido</span>
            <span className="block">em micra,</span>
            <span className="block text-accent">não em achismo</span>
          </h1>

          <p
            className="enter mt-8 max-w-[34rem] font-mono text-[0.7rem] leading-[1.9] tracking-[0.08em] text-ink-dim md:text-xs"
            style={{ animationDelay: "380ms" }}
          >
            Correção de pintura, vitrificação e recuperação de interiores em box fechado, com
            medição antes e depois de cada etapa.
          </p>

          <div
            className="enter mt-10 flex flex-wrap items-center gap-x-8 gap-y-4 md:mt-12"
            style={{ animationDelay: "520ms" }}
          >
            <a
              href="#processo"
              className="label border border-accent/50 px-7 py-4 text-accent transition-colors duration-700 ease-obsidian hover:bg-accent hover:text-bg"
            >
              Ver o processo
            </a>
            <a
              href="#servicos"
              className="label border-b border-transparent px-1 py-3 transition-colors duration-500 hover:border-ink hover:text-ink"
            >
              Serviços
            </a>
          </div>
        </div>
      </div>

      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 hidden h-px bg-line lg:block"
        aria-hidden="true"
      />
    </section>
  );
}
