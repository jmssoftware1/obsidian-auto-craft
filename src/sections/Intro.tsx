import detailImage from "@/assets/detail.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionIndex } from "@/components/SectionIndex";

const principles = [
  {
    title: "Escala reduzida",
    body: "Poucos veículos em paralelo, para que nenhuma etapa dependa de pressa.",
  },
  {
    title: "Registro do processo",
    body: "Cada avaliação e correção é documentada e devolvida ao proprietário.",
  },
];

export function Intro() {
  return (
    <section className="relative border-t border-line bg-bg py-24 md:py-36 lg:py-48">
      <div className="shell grid grid-cols-1 gap-14 lg:grid-cols-12 lg:gap-x-6">
        <div className="lg:col-span-7">
          <Reveal>
            <SectionIndex index="02 / 08" label="Posicionamento" />
            <p className="display mt-9 max-w-[18ch] text-[clamp(1.85rem,6vw,3.5rem)] leading-[1.04] text-ink md:mt-12">
              Acabamento não se acelera.
            </p>
            <p className="mt-8 max-w-[46ch] text-[0.9375rem] leading-[1.85] text-ink-dim">
              O estúdio nasceu de uma decisão simples: recusar volume para manter controle. Cada
              veículo entra com avaliação registrada e sai com relatório do que foi corrigido e do
              que foi preservado — inclusive quando a resposta é não polir.
            </p>
          </Reveal>

          <div className="mt-14 grid grid-cols-1 gap-px border-t border-line sm:grid-cols-2 md:mt-20">
            {principles.map((item, i) => (
              <Reveal key={item.title} delay={120 + i * 120} className="pt-8 sm:pr-10">
                <p className="label text-accent">0{i + 1}</p>
                <h3 className="display mt-4 text-lg tracking-[-0.01em] text-ink md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-3 max-w-[34ch] text-sm leading-[1.8] text-ink-dim">{item.body}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={200} variant="veil" className="lg:col-span-5 lg:pt-4">
          <img
            src={detailImage}
            alt="Gotas de água sobre pintura preta espelhada"
            width={1920}
            height={1088}
            loading="lazy"
            decoding="async"
            className="aspect-[4/5] w-full object-cover md:aspect-[3/4] lg:aspect-[4/6]"
          />
          <p className="label mt-5">Superfície selada · repelência hidrofóbica</p>
        </Reveal>
      </div>
    </section>
  );
}
