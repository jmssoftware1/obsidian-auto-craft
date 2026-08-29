import { useEffect, useState } from "react";
import { primaryCta } from "@/data/navigation";

export function StickyCTA() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => {
      const contact = document.getElementById("contato");
      const contactVisible = contact
        ? contact.getBoundingClientRect().top < window.innerHeight * 0.78
        : false;

      setVisible(window.scrollY > 220 && !contactVisible);
    };

    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);

    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <div
      className={`sticky-cta ${visible ? "sticky-cta-visible" : ""}`}
      aria-hidden={!visible}
    >
      <div className="sticky-cta-inner">
        <span className="sticky-cta-label">Estética automotiva de precisão</span>
        <a href={primaryCta.href} tabIndex={visible ? 0 : -1}>
          {primaryCta.label}
          <span aria-hidden="true">↗</span>
        </a>
      </div>
    </div>
  );
}
