export type NavItem = { label: string; href: string };

export const navigationItems: NavItem[] = [
  { label: "Serviços", href: "#servicos" },
  { label: "Processo", href: "#processo" },
  { label: "Contato", href: "#contato" },
];

export const brand = {
  wordmark: "OBSIDIAN",
  wordmarkSuffix: "GARAGE",
  tagline: "Estúdio de estética automotiva",
};

export const primaryCta = {
  label: "Agendar avaliação",
  href: "#contato",
};

export const contact = {
  studio: "Estúdio conceitual · atendimento com hora marcada",
  address: "Av. Exemplo, 1200 — Distrito Industrial (endereço fictício)",
  email: "contato@obsidiangarage.example",
  phone: "+55 (00) 0000-0000",
};

export const socialLinks: NavItem[] = [
  { label: "Instagram", href: "#" },
  { label: "YouTube", href: "#" },
  { label: "WhatsApp", href: "#" },
];
