import { useEffect } from "react";

type LightboxService = {
  name: string;
  image: string;
  alt: string;
};

type ImageLightboxProps = {
  service: LightboxService | null;
  onClose: () => void;
};

export function ImageLightbox({ service, onClose }: ImageLightboxProps) {
  useEffect(() => {
    if (!service) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [service, onClose]);

  if (!service) return null;

  return (
    <div className="lightbox-backdrop fixed inset-0 z-[100] grid place-items-center p-5 md:p-10" role="dialog" aria-modal="true" aria-label={`Detalhe: ${service.name}`} onMouseDown={onClose}>
      <div className="relative flex max-h-full max-w-6xl flex-col items-center" onMouseDown={(event) => event.stopPropagation()}>
        <button type="button" onClick={onClose} className="absolute right-0 top-0 z-10 grid h-11 w-11 translate-x-1/2 -translate-y-1/2 place-items-center rounded-full border border-white/20 bg-bg text-ink transition-colors hover:border-accent hover:text-accent" aria-label="Fechar detalhe">
          <span className="absolute h-px w-5 rotate-45 bg-current" />
          <span className="absolute h-px w-5 -rotate-45 bg-current" />
        </button>
        <img src={service.image} alt={service.alt} className="max-h-[82svh] w-auto max-w-full object-contain" />
        <div className="mt-4 flex w-full items-center justify-between gap-6 border-t border-white/10 pt-3">
          <span className="font-display text-lg font-extrabold uppercase tracking-[-0.02em]">{service.name}</span>
          <span className="label text-accent">detalhe / ampliar</span>
        </div>
      </div>
    </div>
  );
}
