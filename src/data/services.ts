import service01 from "@/assets/service-01.jpg";
import service02 from "@/assets/service-02.jpg";
import service03 from "@/assets/service-03.jpg";
import service04 from "@/assets/service-04.jpg";
import service05 from "@/assets/service-05.jpg";

export type Service = {
  number: string;
  name: string;
  description: string;
  detail: string;
  image: string;
  alt: string;
  featured?: boolean;
};

export const services: Service[] = [
  {
    number: "01",
    name: "Estofados",
    description:
      "Extração profunda em tecido, couro e alcantara, com controle de umidade e secagem assistida.",
    detail: "Extração a quente · 4 a 6 h",
    image: service01,
    alt: "Pincel de detalhamento removendo resíduos de um banco automotivo escuro",
  },
  {
    number: "02",
    name: "Polimento Técnico",
    description:
      "Correção de verniz medida em micra, com leitura de espessura antes de cada passe.",
    detail: "Até 3 estágios · medição por camada",
    image: service02,
    alt: "Politriz corrigindo a pintura escura de um veículo sob luz de inspeção",
    featured: true,
  },
  {
    number: "03",
    name: "Vitrificação",
    description:
      "Coating cerâmico aplicado em ambiente controlado, com cura monitorada por temperatura.",
    detail: "Cura controlada · 24 h em box",
    image: service03,
    alt: "Aplicação de coating cerâmico com aplicador sobre capô preto brilhante",
  },
  {
    number: "04",
    name: "Proteção de Pintura",
    description:
      "Película PPF recortada por plotter para as áreas de maior impacto de estrada.",
    detail: "Recorte digital · frontal ou integral",
    image: service04,
    alt: "Técnico aplicando película de proteção de pintura em para-lama escuro",
  },
  {
    number: "05",
    name: "Acabamento",
    description:
      "Rodas, plásticos externos e vidros tratados individualmente antes da entrega.",
    detail: "Checklist final de 32 pontos",
    image: service05,
    alt: "Roda escura polida e pneu com acabamento fosco em piso reflexivo",
  },
];
