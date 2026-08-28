import result01 from "@/assets/result-01.jpg";
import result02 from "@/assets/result-02.jpg";
import service05 from "@/assets/service-05.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionIndex } from "@/components/SectionIndex";

export function Results() {
  return (
    <section className="border-t border-line bg-bg py-24 md:py-36 lg:py-48">
      <div className="shell">
        <Reveal className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <SectionIndex index="07 / 08" label="Resultados" />
            <h2 className="display mt-9 max-w-[16ch] text-[clamp(1.85rem,6vw,3.5rem)] leading-[1.02] md:mt-12">
              Registro do que saiu do box
            </h2>
          </div>
          <p className="label max-w-[28ch] md:text-right">
            Seleção conceitual · fotografia sob luz controlada
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-12 md:mt-24 md:grid-cols-12 md:gap-x-6 md:gap-y-28">
          <Reveal variant="veil" className="md:col-span-7">
            <figure>
              <img
                src={result01}
                alt="Coupé escuro finalizado em estúdio com iluminação lateral"
                width={1200}
                height={1500}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover md:aspect-[5/6]"
              />
              <figcaption className="label mt-5 flex items-baseline gap-4">
                <span className="text-accent">A</span>
                Coupé · correção em dois estágios + coating
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={140} variant="veil" className="md:col-span-5 md:self-end md:pb-10">
            <figure>
              <img
                src={result02}
                alt="Interior automotivo finalizado, volante e painel limpos"
                width={1500}
                height={1000}
                loading="lazy"
                decoding="async"
                className="aspect-[3/2] w-full object-cover md:aspect-[4/5]"
              />
              <figcaption className="label mt-5 flex items-baseline gap-4">
                <span className="text-accent">B</span>
                Interior · higienização completa
              </figcaption>
            </figure>
          </Reveal>

          <Reveal
            delay={80}
            variant="veil"
            className="md:col-span-5 md:col-start-4 lg:col-span-4 lg:col-start-5"
          >
            <figure>
              <img
                src={service05}
                alt="Roda escura e pneu com acabamento após tratamento"
                width={1000}
                height={1250}
                loading="lazy"
                decoding="async"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="label mt-5 flex items-baseline gap-4">
                <span className="text-accent">C</span>
                Rodas · limpeza técnica e selagem
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
