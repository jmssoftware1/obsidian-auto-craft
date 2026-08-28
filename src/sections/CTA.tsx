import ctaBg from "@/assets/cta-bg.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionIndex } from "@/components/SectionIndex";
import { useSectionProgress } from "@/hooks/useParallax";
import { contact, primaryCta } from "@/data/navigation";

export function CTA() {
  const { ref, progress } = useSectionProgress<HTMLElement>();

  return (
    <section
      id="contato"
      ref={ref}
      className="relative overflow-hidden border-t border-line bg-bg"
    >
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        loading="lazy"
        decoding="async"
        style={{
          transform: `translate3d(0, ${(progress - 0.5) * 56}px, 0) scale(${1.1 - progress * 0.04})`,
        }}
        className="absolute inset-0 h-full w-full object-cover object-[65%_center] opacity-60 will-change-transform"
      />
      <div className="absolute inset-0 bg-bg/55" aria-hidden="true" />
      <div
        className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,10,11,0.9),rgba(10,10,11,0.15)_75%)]"
        aria-hidden="true"
      />

      <div className="shell relative py-28 md:py-44 lg:py-56">
        <Reveal className="max-w-4xl">
          <SectionIndex index="08 / 08" label="Agendamento" />
          <h2 className="display mt-9 text-[clamp(1.9rem,5.4vw,4rem)] leading-[0.95] md:mt-12">
            <span className="block">Traga o carro para</span>
            <span className="block">uma avaliação</span>
            <span className="block text-accent">sob luz</span>
          </h2>
          <p className="mt-9 max-w-[44ch] text-[0.9375rem] leading-[1.85] text-ink-dim md:mt-12">
            A avaliação leva cerca de 40 minutos: medimos a pintura, mostramos o que dá para
            recuperar e o que não vale tocar. Sem pacote fechado antes disso.
          </p>

          <div className="mt-12 flex flex-wrap items-center gap-x-10 gap-y-5 md:mt-16">
            <a
              href="#top"
              className="label border border-accent/60 px-9 py-5 text-accent transition-colors duration-700 ease-obsidian hover:bg-accent hover:text-bg"
            >
              {primaryCta.label}
            </a>
            <span className="label max-w-[30ch]">{contact.studio}</span>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
