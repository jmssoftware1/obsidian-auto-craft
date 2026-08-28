import detailImage from "@/assets/detail.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionIndex } from "@/components/SectionIndex";

export function Intro() {
  return (
    <section className="relative border-t border-line bg-bg py-20 md:py-32 lg:py-40">
      <div className="shell grid grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionIndex index="02 / 08" label="Posicionamento" />
            <p className="mt-10 font-display text-[clamp(1.75rem,4vw,3.25rem)] font-extrabold uppercase leading-[1.05] tracking-[-0.015em] text-ink">
              Trabalhamos com poucos carros por semana porque acabamento não se acelera.
            </p>
            <p className="mt-8 max-w-lg text-sm leading-7 text-ink-dim">
              O estúdio nasceu de uma decisão simples: recusar volume para manter controle. Cada
              veículo entra com avaliação registrada, sai com relatório do que foi corrigido e do
              que foi preservado — inclusive quando a resposta é não polir.
            </p>
          </Reveal>

          <Reveal delay={120} className="mt-16 flex flex-wrap gap-16 border-t border-line pt-10">
            <div>
              <p className="font-mono text-4xl text-accent md:text-5xl">184</p>
              <p className="label mt-3">Veículos atendidos por ano</p>
            </div>
            <div>
              <p className="font-mono text-4xl text-ink md:text-5xl">6</p>
              <p className="label mt-3">Vagas por semana</p>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="lg:col-span-5">
          <img
            src={detailImage}
            alt="Gotas de água sobre pintura preta espelhada"
            width={1920}
            height={1088}
            loading="lazy"
            className="h-64 w-full object-cover md:h-96 lg:h-[520px]"
          />
          <p className="label mt-4">Superfície selada · repelência hidrofóbica</p>
        </Reveal>
      </div>
    </section>
  );
}
