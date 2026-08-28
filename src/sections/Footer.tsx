import { brand, contact, navigationItems, socialLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-alt py-16 md:py-20">
      <div className="shell grid grid-cols-2 gap-x-6 gap-y-12 md:grid-cols-12">
        <div className="col-span-2 min-w-0 md:col-span-5">
          <p className="font-display text-[0.8rem] font-extrabold uppercase tracking-[0.34em]">
            {brand.wordmark} <span className="text-accent-dim">{brand.wordmarkSuffix}</span>
          </p>
          <p className="label mt-5">{contact.studio}</p>
          <p className="mt-4 max-w-[34ch] text-xs leading-[1.9] text-ink-dim">{contact.address}</p>
        </div>

        <nav aria-label="Rodapé" className="flex flex-col gap-4 md:col-span-2">
          {navigationItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="label transition-colors duration-500 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-4 md:col-span-2">
          {socialLinks.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="label transition-colors duration-500 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="col-span-2 flex flex-col gap-4 md:col-span-3">
          <a
            href={`mailto:${contact.email}`}
            className="label break-all transition-colors duration-500 hover:text-ink"
          >
            {contact.email}
          </a>
          <span className="label">{contact.phone}</span>
          <span className="label text-ink-dim/60">
            © {new Date().getFullYear()} — projeto conceitual fictício
          </span>
        </div>
      </div>
    </footer>
  );
}
