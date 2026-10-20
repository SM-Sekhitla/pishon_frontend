import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import industrialImg from "@/assets/industries/industrial.jpg";
import educationImg from "@/assets/industries/education.jpg";
import miningImg from "@/assets/industries/mining.jpg";
import governmentImg from "@/assets/industries/government.jpg";
import mediaImg from "@/assets/industries/media.jpg";
import healthcareImg from "@/assets/industries/healthcare.jpg";
import consumerImg from "@/assets/industries/consumer.jpg";
import telecomImg from "@/assets/industries/telecom.jpg";
import financeImg from "@/assets/industries/finance.jpg";
import engineeringImg from "@/assets/industries/engineering.jpg";

const industries = [
  { image: industrialImg, name: "Industrial" },
  { image: educationImg, name: "Education & Nonprofit" },
  { image: miningImg, name: "Mining" },
  { image: governmentImg, name: "Government" },
  { image: mediaImg, name: "Media" },
  { image: healthcareImg, name: "Healthcare" },
  { image: consumerImg, name: "Consumer" },
  { image: telecomImg, name: "Telecommunications & Technology" },
  { image: financeImg, name: "Financial Services" },
  { image: engineeringImg, name: "Engineering" },
];

const Industries = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScrollability = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (scrollContainer) {
      scrollContainer.addEventListener("scroll", checkScrollability);
      checkScrollability();
      return () => scrollContainer.removeEventListener("scroll", checkScrollability);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = 320;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="industries" className="py-16 md:py-28 bg-background overflow-hidden">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-8 md:mb-12">
          <span className="inline-block text-primary font-medium tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">
            Sector Expertise
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
            Industries We <span className="text-primary">Serve</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Deep experience across South Africa's key economic sectors.
          </p>
        </div>

        {/* Navigation Buttons */}
        <div className="flex justify-end gap-2 mb-4 md:mb-6 max-w-7xl mx-auto">
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground disabled:opacity-30"
          >
            <ChevronLeft className="w-4 h-4 md:w-5 md:h-5" />
          </Button>
          <Button
            variant="outline"
            size="icon"
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="w-8 h-8 md:w-10 md:h-10 rounded-full border-primary/30 hover:bg-primary hover:text-primary-foreground disabled:opacity-30"
          >
            <ChevronRight className="w-4 h-4 md:w-5 md:h-5" />
          </Button>
        </div>

        {/* Horizontal Scroll Container */}
        <div
          ref={scrollRef}
          className="flex gap-3 md:gap-5 overflow-x-auto scrollbar-hide pb-4 snap-x snap-mandatory scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {industries.map((industry, index) => (
            <div
              key={industry.name}
              className="group relative flex-shrink-0 w-[160px] md:w-[300px] rounded-xl md:rounded-2xl overflow-hidden shadow-card hover:shadow-hover transition-all duration-500 snap-start"
              style={{ 
                animationDelay: `${index * 100}ms`,
                animation: "fade-in-up 0.6s ease-out forwards",
                opacity: 0,
              }}
            >
              <div className="aspect-[3/4] md:aspect-[4/5] relative">
                <img
                  src={industry.image}
                  alt={industry.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
                
                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-3 md:p-6 transform transition-transform duration-300 group-hover:translate-y-[-8px]">
                  <h3 className="text-xs md:text-lg font-heading font-semibold text-cream mb-1">
                    {industry.name}
                  </h3>
                  <div className="w-0 group-hover:w-8 md:group-hover:w-12 h-0.5 bg-primary transition-all duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-6 gap-1">
          {industries.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-primary/20 transition-colors duration-300"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
