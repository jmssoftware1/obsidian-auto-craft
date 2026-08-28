import step01 from "@/assets/process-01.jpg";
import step02 from "@/assets/process-02.jpg";
import step03 from "@/assets/process-03.jpg";
import step04 from "@/assets/process-04.jpg";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
  meta: string;
  image: string;
  alt: string;
};

export const processSteps: ProcessStep[] = [
  {
    number: "01",
    title: "Preparar",
    description:
      "Descontaminação química e mecânica da superfície. Nada é corrigido antes da pintura estar realmente limpa.",
    meta: "Lavagem em dois baldes · pH neutro",
    image: step01,
    alt: "Veículo escuro coberto de espuma em box de lavagem",
  },
  {
    number: "02",
    title: "Corrigir",
    description:
      "Leitura de espessura e mapeamento de defeitos sob luz direcionada, com registro do que foi removido.",
    meta: "Medição em micra · mapa de defeitos",
    image: step02,
    alt: "Técnico inspecionando a pintura com lanterna de inspeção",
  },
  {
    number: "03",
    title: "Proteger",
    description:
      "Aplicação da camada de proteção definida na avaliação, em ambiente fechado e sem circulação de pó.",
    meta: "Box fechado · cura monitorada",
    image: step03,
    alt: "Frasco de coating cerâmico e aplicador sobre bancada escura",
  },
  {
    number: "04",
    title: "Entregar",
    description:
      "Conferência final ponto a ponto, registro fotográfico e orientação de manutenção para o proprietário.",
    meta: "32 pontos · registro fotográfico",
    image: step04,
    alt: "Acabamento final do painel interno de um veículo",
  },
];
