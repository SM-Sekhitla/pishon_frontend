import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import sectorImages from "@/assets/industries/executive-sectors.png";

const industries = [
  { name: "Industrial", cell: 0 },
  { name: "Education & Nonprofit", cell: 1 },
  { name: "Financial Services", cell: 2 },
  { name: "Mining", cell: 3 },
  { name: "Government", cell: 4 },
  { name: "Media", cell: 5 },
  { name: "Healthcare", cell: 6 },
  { name: "Consumer", cell: 7 },
  { name: "Telecommunications & Technology", cell: 8 },
  { name: "Engineering", cell: 9 },
];

const Industries = () => {
  const [viewport, carousel] = useEmblaCarousel({ loop: true, align: "start", duration: 45 });
  const [selected, setSelected] = useState(0);
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setReducedMotion(preference.matches);
    sync();
    preference.addEventListener("change", sync);
    return () => {
      preference.removeEventListener("change", sync);
    };
  }, []);

  const updateSelected = useCallback(() => {
    if (carousel) setSelected(carousel.selectedScrollSnap());
  }, [carousel]);

  useEffect(() => {
    if (!carousel) return;
    updateSelected();
    carousel.on("select", updateSelected).on("reInit", updateSelected);
    return () => {
      carousel.off("select", updateSelected).off("reInit", updateSelected);
    };
  }, [carousel, updateSelected]);

  useEffect(() => {
    if (!carousel) return;
    const timer = window.setInterval(() => carousel.scrollNext(reducedMotion), 3000);
    return () => window.clearInterval(timer);
  }, [carousel, reducedMotion]);

  const navigate = (direction: "previous" | "next") => {
    if (direction === "previous") carousel?.scrollPrev(reducedMotion);
    else carousel?.scrollNext(reducedMotion);
  };

  return (
    <section
      id="industries"
      className="sector-section py-16 md:py-24 overflow-hidden"
      aria-labelledby="sectors-heading"
      aria-roledescription="carousel"
    >
      <div className="container mx-auto px-4">
        <div className="sector-heading">
          <div>
            <span className="section-eyebrow">Sector Expertise</span>
            <h2 id="sectors-heading" className="text-4xl md:text-5xl text-secondary mt-4 mb-5">Industries We <span className="text-primary">Serve</span></h2>
            <p className="text-muted-foreground text-base">Deep experience across South Africa's key economic sectors.</p>
          </div>
          <div className="sector-controls" aria-label="Industry carousel controls">
            <button className="sector-control" onClick={() => navigate("previous")} aria-label="Previous industry"><ArrowLeft size={18} /></button>
            <button className="sector-control" onClick={() => navigate("next")} aria-label="Next industry"><ArrowRight size={18} /></button>
          </div>
        </div>
        <div ref={viewport} className="sector-viewport" role="group" aria-label="Industry cards">
          <div className="sector-track">
            {industries.map((industry, index) => (
              <article className="sector-slide" key={industry.name} role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${industries.length}: ${industry.name}`}>
                <div className="sector-card">
                  <div className="sector-image-window" aria-hidden="true">
                    <div className="sector-image" style={{ backgroundImage: `url(${sectorImages})`, backgroundPosition: `${(industry.cell % 5) * 25}% ${Math.floor(industry.cell / 5) * 100}%` }} />
                    <div className="sector-photo-shade" />
                    <span className="sector-index">{String(index + 1).padStart(2, "0")}</span>
                  </div>
                  <div className="sector-caption"><span className="sector-gold-rule" /><h3>{industry.name}</h3></div>
                </div>
              </article>
            ))}
          </div>
        </div>
        <div className="sector-footer">
          <p aria-live="off" aria-atomic="true"><span>{String(selected + 1).padStart(2, "0")}</span> / {industries.length}</p>
          <div className="sector-pagination" aria-label="Choose an industry">
            {industries.map((industry, index) => (
              <button key={industry.name} className={selected === index ? "is-active" : ""} aria-label={`Show ${industry.name}`} aria-current={selected === index ? "true" : undefined} onClick={() => carousel?.scrollTo(index, reducedMotion)} />
            ))}
          </div>
          <span className="sector-footer-label">Executive search. Across sectors.</span>
        </div>
      </div>
    </section>
  );
};

export default Industries;
