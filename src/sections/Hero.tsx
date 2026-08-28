import heroImage from "@/assets/hero.jpg";

export function Hero() {
  return (
    <section id="top" className="relative min-h-[100svh] w-full overflow-hidden bg-bg">
      <div className="absolute inset-0 lg:left-[32%]">
        <img
          src={heroImage}
          alt="Sedã preto sob iluminação lateral dramática em estúdio escuro"
          width={1408}
          height={1808}
          fetchPriority="high"
          className="h-full w-full object-cover object-center"
        />
        <div
          className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,10,11,0.95),rgba(10,10,11,0.35)_45%,rgba(10,10,11,0.55))]"
          aria-hidden="true"
        />
      </div>

      <div className="shell relative flex min-h-[100svh] flex-col justify-end pb-16 pt-28 lg:justify-center lg:pb-0">
        <div className="max-w-xl">
          <div className="flex items-center gap-4">
            <span className="label text-accent">01 / 08</span>
            <span className="h-px w-12 bg-line" aria-hidden="true" />
            <span className="label">Estúdio de estética automotiva</span>
          </div>

          <h1 className="mt-8 font-display text-[clamp(2.75rem,8vw,5.5rem)] font-extrabold uppercase leading-[0.92] tracking-[-0.02em] text-ink">
            Verniz lido
            <br />
            em micra,
            <br />
            <span className="text-accent">não em achismo</span>
          </h1>

          <p className="mt-8 max-w-md font-mono text-xs leading-relaxed tracking-[0.08em] text-ink-dim">
            Correção de pintura, vitrificação e recuperação de interiores em box fechado, com
            medição antes e depois de cada etapa.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-8">
            <a
              href="#processo"
              className="label border border-accent/60 px-6 py-3.5 text-accent transition-colors duration-500 hover:bg-accent hover:text-bg"
            >
              Ver o processo
            </a>
            <a
              href="#servicos"
              className="label border-b border-transparent pb-1 transition-colors duration-300 hover:border-ink hover:text-ink"
            >
              Serviços
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
