import ctaBg from "@/assets/cta-bg.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionIndex } from "@/components/SectionIndex";
import { primaryCta } from "@/data/navigation";

export function CTA() {
  return (
    <section id="contato" className="relative overflow-hidden border-t border-line bg-bg">
      <img
        src={ctaBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover opacity-40"
      />
      <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

      <div className="shell relative py-24 md:py-40">
        <Reveal className="max-w-3xl">
          <SectionIndex index="08 / 08" label="Agendamento" />
          <h2 className="mt-8 font-display text-[clamp(2.25rem,6vw,4.5rem)] font-extrabold uppercase leading-[0.98] tracking-[-0.02em]">
            Traga o carro para
            <br />
            uma avaliação sob luz
          </h2>
          <p className="mt-8 max-w-md text-sm leading-7 text-ink-dim">
            A avaliação leva cerca de 40 minutos: medimos a pintura, mostramos o que dá para
            recuperar e o que não vale tocar. Sem pacote fechado antes disso.
          </p>
          <a
            href="#top"
            className="label mt-12 inline-block border border-accent px-8 py-4 text-accent transition-colors duration-500 hover:bg-accent hover:text-bg"
          >
            {primaryCta.label}
          </a>
        </Reveal>
      </div>
    </section>
  );
}
