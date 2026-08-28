import { brand, contact, navigationItems, socialLinks } from "@/data/navigation";

export function Footer() {
  return (
    <footer className="border-t border-line bg-bg-alt py-12">
      <div className="shell flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="min-w-0">
          <p className="font-display text-sm font-extrabold uppercase tracking-[0.28em]">
            {brand.wordmark} <span className="text-accent-dim">{brand.wordmarkSuffix}</span>
          </p>
          <p className="label mt-3">{contact.studio}</p>
          <p className="mt-3 text-xs leading-6 text-ink-dim">{contact.address}</p>
        </div>

        <nav aria-label="Rodapé" className="flex flex-col gap-3">
          {navigationItems.map((item) => (
            <a key={item.href} href={item.href} className="label hover:text-ink">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          {socialLinks.map((item) => (
            <a key={item.label} href={item.href} className="label hover:text-ink">
              {item.label}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <a href={`mailto:${contact.email}`} className="label hover:text-ink">
            {contact.email}
          </a>
          <span className="label">{contact.phone}</span>
          <span className="label text-ink-dim/70">
            © {new Date().getFullYear()} — projeto conceitual fictício
          </span>
        </div>
      </div>
    </footer>
  );
}
