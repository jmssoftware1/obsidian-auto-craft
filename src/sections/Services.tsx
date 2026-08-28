import { Reveal } from "@/components/Reveal";
import { SectionIndex } from "@/components/SectionIndex";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="servicos" className="border-t border-line bg-bg-alt py-24 md:py-36 lg:py-48">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <SectionIndex index="03 / 08" label="Serviços" />
          <h2 className="display mt-9 text-[clamp(1.85rem,6vw,3.5rem)] leading-[1.02] md:mt-12">
            Cinco frentes,
            <br />
            um mesmo padrão
          </h2>
        </Reveal>
      </div>

      <div className="mt-14 md:mt-20">
        <ul
          className={cn(
            "group/list no-scrollbar flex snap-x snap-mandatory gap-5 overflow-x-auto px-[22px] pb-2 md:gap-6 md:px-10",
            "lg:grid lg:grid-cols-12 lg:gap-x-6 lg:gap-y-20 lg:overflow-visible lg:px-20",
          )}
        >
          {services.map((service, index) => (
            <li
              key={service.number}
              className={cn(
                "w-[82vw] shrink-0 snap-start sm:w-[58vw] md:w-[44vw] lg:w-auto lg:shrink",
                service.featured ? "lg:col-span-6 lg:row-span-2" : "lg:col-span-3",
                index === 0 && "lg:col-start-1",
              )}
            >
              <Reveal delay={index * 90} variant="veil">
                <article className="group/item transition-opacity duration-[900ms] ease-obsidian lg:group-hover/list:opacity-40 lg:hover:!opacity-100">
                  <div className="relative overflow-hidden bg-bg">
                    <img
                      src={service.image}
                      alt={service.alt}
                      width={1000}
                      height={1250}
                      loading="lazy"
                      decoding="async"
                      className={cn(
                        "w-full object-cover transition-transform duration-[1400ms] ease-obsidian group-hover/item:scale-[1.05]",
                        service.featured ? "aspect-[4/5] lg:aspect-[16/13]" : "aspect-[4/5]",
                      )}
                    />
                    <div
                      className="absolute inset-0 bg-bg/45 transition-opacity duration-[900ms] ease-obsidian group-hover/item:opacity-25"
                      aria-hidden="true"
                    />
                    <span className="absolute left-5 top-5 font-mono text-[0.625rem] tracking-[0.26em] text-accent">
                      {service.number}
                    </span>
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-accent transition-transform duration-[900ms] ease-obsidian group-hover/item:scale-x-100"
                    />
                  </div>

                  <h3 className="display mt-6 text-lg tracking-[-0.01em] text-ink-dim transition-[color,letter-spacing] duration-[900ms] ease-obsidian group-hover/item:tracking-[0.005em] group-hover/item:text-ink md:mt-7 md:text-2xl">
                    {service.name}
                  </h3>
                  <p className="mt-3.5 max-w-[42ch] text-sm leading-[1.8] text-ink-dim">
                    {service.description}
                  </p>
                  <p className="label mt-5 text-accent-dim transition-colors duration-[900ms] group-hover/item:text-accent">
                    {service.detail}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="shell label mt-8 lg:hidden">Arraste para o lado ·</p>
      </div>
    </section>
  );
}
