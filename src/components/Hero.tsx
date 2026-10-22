import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, ChevronLeft, ChevronRight, Pause, Play } from "lucide-react";
import boardroomBg from "@/assets/executive-boardroom.png";
import baobabBg from "@/assets/baobab-tree.png";

const slides = [
  {
    image: boardroomBg,
    eyebrow: "Experience. Diversity. Inclusion.",
    title: "Exceptional leaders.",
    accent: "Lasting impact.",
    description: "Connecting South African organisations with the people who move them forward. Executive search grounded in expertise, purpose and possibility.",
    action: "Find your next leader",
    href: "#contact",
    caption: "01 / Executive search",
  },
  {
    image: baobabBg,
    eyebrow: "A fresh perspective on leadership",
    title: "Different perspectives.",
    accent: "Stronger futures.",
    description: "Build a leadership team ready for what comes next. Discover a considered approach to diversity, succession and leadership advisory.",
    action: "Explore our expertise",
    href: "#services",
    caption: "02 / Leadership advisory",
  },
];

const Hero = () => {
  const [active, setActive] = useState(0);
  const [playing, setPlaying] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setPlaying(!preference.matches);
    sync();
    preference.addEventListener("change", sync);
    return () => preference.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!playing || hovered) return;
    const timer = window.setInterval(() => setActive(current => (current + 1) % slides.length), 7500);
    return () => window.clearInterval(timer);
  }, [playing, hovered, active]);

  const select = (index: number) => {
    setActive((index + slides.length) % slides.length);
    setPlaying(false);
  };

  return (
    <section
      className="hero-slider executive-hero relative isolate overflow-hidden bg-charcoal text-cream"
      aria-roledescription="carousel"
      aria-label="Pishon leadership services"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocusCapture={event => {
        if (!(event.target as HTMLElement).closest("[data-playback]")) setPlaying(false);
      }}
      onKeyDown={event => {
        if (event.key === "ArrowLeft") { event.preventDefault(); select(active - 1); }
        if (event.key === "ArrowRight") { event.preventDefault(); select(active + 1); }
      }}
    >
      {slides.map((slide, index) => (
        <div key={slide.title} className={`hero-backdrop ${active === index ? "is-active" : ""}`} aria-hidden="true">
          <img src={slide.image} alt="" className="h-full w-full object-cover object-center" fetchPriority={index === 0 ? "high" : "auto"} />
        </div>
      ))}
      <div className="executive-hero-shade absolute inset-0 -z-10" />
      <div className="hero-inner container mx-auto px-5 md:px-8 relative">
        <div aria-live={playing ? "off" : "polite"} aria-atomic="true">
          {slides.map((slide, index) => active === index && (
            <div key={slide.title} className="hero-copy max-w-2xl" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${slides.length}`}>
              <p className="hero-enter flex items-center gap-3 text-xs md:text-sm tracking-[0.22em] uppercase text-gold-light mb-7">
                <span className="h-px w-10 bg-primary" />{slide.eyebrow}
              </p>
              <h1 className="hero-enter text-[clamp(2.8rem,4.7vw,4.75rem)] font-heading leading-[1.08] tracking-tight font-medium mb-7">
                {slide.title}<br /><span className="text-gold-light">{slide.accent}</span>
              </h1>
              <p className="hero-enter max-w-lg text-base md:text-lg leading-relaxed text-cream/80 mb-9">{slide.description}</p>
              <div className="hero-enter flex flex-wrap items-center gap-4">
                <Button asChild size="xl" className="group executive-button"><a href={slide.href}>{slide.action}<ArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" /></a></Button>
                <a href="#about" className="group inline-flex items-center gap-3 px-3 py-3 text-sm text-cream/90">Meet Pishon <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" /></a>
              </div>
            </div>
          ))}
        </div>
        <div className="absolute bottom-8 left-5 right-5 md:left-8 md:right-8 border-t border-white/20 pt-6 flex items-center justify-between gap-5">
          <div className="flex items-center gap-3 md:gap-6">
            {slides.map((slide, index) => (
              <button key={slide.caption} aria-label={`Show slide ${index + 1}: ${slide.caption.slice(5)}`} aria-current={active === index ? "true" : undefined} onClick={() => select(index)} className={`hero-tab text-left py-2 ${active === index ? "text-cream" : "text-cream/50"}`}>
                <span className="text-xs tracking-widest uppercase">{slide.caption}</span>
                <span className="block mt-3 h-0.5 w-full bg-white/20 overflow-hidden"><span key={`${active}-${playing}`} className={`block h-full bg-primary ${active === index ? playing ? "hero-progress" : "w-full" : "w-0"}`} style={{ animationPlayState: hovered ? "paused" : "running" }} /></span>
              </button>
            ))}
          </div>
          <div className="flex gap-1 md:gap-2">
            <button className="hero-control" onClick={() => select(active - 1)} aria-label="Previous slide"><ChevronLeft size={18} /></button>
            <button data-playback className="hero-control" onClick={() => setPlaying(value => !value)} aria-label={playing ? "Pause slideshow" : "Play slideshow"}>{playing ? <Pause size={16} /> : <Play size={16} />}</button>
            <button className="hero-control" onClick={() => select(active + 1)} aria-label="Next slide"><ChevronRight size={18} /></button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
