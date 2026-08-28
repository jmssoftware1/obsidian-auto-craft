import { Reveal } from "@/components/Reveal";
import { SectionIndex } from "@/components/SectionIndex";
import { services } from "@/data/services";
import { cn } from "@/lib/utils";

export function Services() {
  return (
    <section id="servicos" className="border-t border-line bg-bg-alt py-24 md:py-36 lg:py-44">
      <div className="shell">
        <Reveal className="grid grid-cols-1 gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <SectionIndex index="03 / 08" label="Serviços" />
            <h2 className="section-title mt-10 max-w-4xl font-display font-extrabold uppercase">Uma coleção<br /><span className="text-ink-dim">de precisão.</span></h2>
          </div>
          <p className="label max-w-xs md:col-span-4 md:justify-self-end md:pb-2">Do primeiro banho ao último reflexo. Cada serviço existe para revelar, corrigir ou preservar.</p>
        </Reveal>
      </div>
      <div className="shell mt-16 md:mt-24">
        <ul className="grid grid-cols-1 gap-x-6 gap-y-14 md:grid-cols-12 md:gap-y-24">
          {services.map((service, index) => (
            <li key={service.number} className={cn(service.featured ? "md:col-span-7 md:col-start-1" : index === 0 ? "md:col-span-4" : index === 2 ? "md:col-span-4 md:col-start-9 md:mt-28" : "md:col-span-4", index === 3 && "md:col-start-2")}>
              <Reveal delay={index * 80}>
                <article className="service-item group">
                  <div className="reveal-image relative overflow-hidden bg-bg">
                    <img src={service.image} alt={service.alt} width={1000} height={1250} loading="lazy" className={cn("service-image w-full object-cover", service.featured ? "aspect-[16/10]" : "aspect-[4/5]")} />
                    <div className="absolute inset-0 bg-gradient-to-t from-bg/60 via-transparent to-transparent opacity-80" aria-hidden="true" />
                    <span className="absolute left-5 top-5 label text-accent">{service.number}</span>
                    <span className="absolute bottom-5 right-5 label text-ink/80 transition-colors duration-500 group-hover:text-accent">ver detalhe ↗</span>
                  </div>
                  <div className="mt-5 flex items-start justify-between gap-5 border-t border-line pt-5">
                    <div><h3 className="font-display text-2xl font-extrabold uppercase tracking-[-0.02em] transition-transform duration-500 group-hover:translate-x-1 md:text-3xl">{service.name}</h3><p className="mt-3 max-w-md text-sm leading-6 text-ink-dim">{service.description}</p></div>
                    <span className="mt-1 hidden text-accent transition-transform duration-500 group-hover:translate-x-1 sm:block">↗</span>
                  </div>
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
