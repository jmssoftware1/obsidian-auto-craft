import result01 from "@/assets/result-01.jpg";
import result02 from "@/assets/result-02.jpg";
import service05 from "@/assets/service-05.jpg";
import { Reveal } from "@/components/Reveal";
import { SectionIndex } from "@/components/SectionIndex";

export function Results() {
  return (
    <section className="border-t border-line bg-bg py-20 md:py-32 lg:py-40">
      <div className="shell">
        <Reveal>
          <SectionIndex index="07 / 08" label="Resultados" />
        </Reveal>

        <div className="mt-12 grid grid-cols-1 gap-12 md:mt-20 md:grid-cols-12 md:gap-x-6 md:gap-y-24">
          <Reveal className="md:col-span-7">
            <figure>
              <img
                src={result01}
                alt="Coupé escuro finalizado em estúdio com iluminação lateral"
                width={1200}
                height={1500}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="label mt-4">
                Coupé · correção em dois estágios + coating
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120} className="md:col-span-5 md:self-end">
            <figure>
              <img
                src={result02}
                alt="Interior automotivo finalizado, volante e painel limpos"
                width={1500}
                height={1000}
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="label mt-4">Interior · higienização completa</figcaption>
            </figure>
          </Reveal>

          <Reveal delay={80} className="md:col-span-4 md:col-start-8">
            <figure>
              <img
                src={service05}
                alt="Roda escura e pneu com acabamento após tratamento"
                width={1000}
                height={1250}
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="label mt-4">Rodas · limpeza técnica e selagem</figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
