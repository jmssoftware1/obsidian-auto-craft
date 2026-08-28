import { createFileRoute } from "@tanstack/react-router";
import { BeforeAfter } from "@/sections/BeforeAfter";
import { CTA } from "@/sections/CTA";
import { Detail } from "@/sections/Detail";
import { Footer } from "@/sections/Footer";
import { Hero } from "@/sections/Hero";
import { Intro } from "@/sections/Intro";
import { Navbar } from "@/sections/Navbar";
import { Process } from "@/sections/Process";
import { Results } from "@/sections/Results";
import { Services } from "@/sections/Services";

const title = "Obsidian Garage — Estética automotiva de precisão";
const description =
  "Estúdio conceitual de estética automotiva: correção de pintura medida em micra, vitrificação em box fechado e recuperação de interiores.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "AutoDetailing",
          name: "Obsidian Garage",
          description,
          areaServed: "Projeto conceitual",
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="bg-bg text-ink">
      <Navbar />
      <main>
        <Hero />
        <Intro />
        <Services />
        <Detail />
        <Process />
        <BeforeAfter />
        <Results />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
