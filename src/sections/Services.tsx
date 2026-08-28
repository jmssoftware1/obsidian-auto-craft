import { Reveal } from "@/components/Reveal";
import { SectionIndex } from "@/components/SectionIndex";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="servicos" className="border-t border-line bg-bg-alt py-20 md:py-32 lg:py-40">
      <div className="shell">
        <Reveal className="max-w-2xl">
          <SectionIndex index="03 / 08" label="Serviços" />
          <h2 className="mt-8 font-display text-[clamp(2rem,5vw,3.5rem)] font-extrabold uppercase leading-[1] tracking-[-0.02em]">
            Cinco frentes,
            <br />
            um mesmo padrão
          </h2>
        </Reveal>
      </div>

      <div className="mt-16 md:mt-20">
        <ul
          className={cn(
            "group/list flex snap-x snap-mandatory gap-6 overflow-x-auto px-6 pb-4",
            "lg:grid lg:grid-cols-12 lg:gap-x-6 lg:gap-y-16 lg:overflow-visible lg:px-20",
          )}
        >
          {services.map((service, index) => (
            <li
              key={service.number}
              className={cn(
                "w-[78vw] shrink-0 snap-start sm:w-[52vw] lg:w-auto lg:shrink",
                service.featured ? "lg:col-span-6 lg:row-span-2" : "lg:col-span-3",
                index === 0 && "lg:col-start-1",
              )}
            >
              <Reveal delay={index * 80}>
                <article className="group/item transition-opacity duration-500 lg:group-hover/list:opacity-55 lg:hover:!opacity-100">
                  <div className="relative overflow-hidden bg-bg">
                    <img
                      src={service.image}
                      alt={service.alt}
                      width={1000}
                      height={1250}
                      loading="lazy"
                      className="aspect-[4/5] w-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/item:scale-[1.04]"
                    />
                    <div
                      className="absolute inset-0 bg-black/45 transition-opacity duration-700 group-hover/item:opacity-60"
                      aria-hidden="true"
                    />
                    <span className="absolute left-4 top-4 font-mono text-xs tracking-[0.22em] text-accent">
                      {service.number}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-xl font-extrabold uppercase tracking-tight text-ink-dim transition-colors duration-500 group-hover/item:text-ink md:text-2xl">
                    {service.name}
                  </h3>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-ink-dim">
                    {service.description}
                  </p>
                  <p className="label mt-4 text-accent-dim">{service.detail}</p>
                </article>
              </Reveal>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
