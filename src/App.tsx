import { useEffect, useState } from "react";
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

export function App() {
  const [scroll, setScroll] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScroll(max > 0 ? window.scrollY / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);
  return <div className="min-h-screen overflow-x-clip bg-bg text-ink">
    <div className="fixed inset-x-0 top-0 z-[70] h-px bg-line" aria-hidden="true"><div className="h-full origin-left bg-accent" style={{ transform: `scaleX(${scroll})` }} /></div>
    <Navbar /><main><Hero /><Intro /><Services /><Detail /><Process /><BeforeAfter /><Results /><CTA /></main><Footer />
    <div className="pointer-events-none fixed bottom-5 right-5 z-40 hidden items-center gap-2 mix-blend-difference md:flex" aria-hidden="true"><span className="h-1.5 w-1.5 rounded-full bg-ink" /><span className="label text-ink">scroll / explore</span></div>
  </div>;
}