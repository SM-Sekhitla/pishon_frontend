import { Shield, MapPin, Globe, Award, Users2, Sparkles } from "lucide-react";
import baobabBg from "@/assets/baobab-tree.png";

const reasons = [
  {
    icon: Shield,
    title: "Confidential Search",
    description: "Discrete, confidential approach protecting your organization and candidates throughout the process.",
  },
  {
    icon: Globe,
    title: "Local Expertise",
    description: "Deep understanding of the South African market, culture, and regulatory landscape.",
  },
  {
    icon: Users2,
    title: "Diversity Focus",
    description: "Committed to B-BBEE compliance and building diverse, inclusive leadership teams.",
  },
  {
    icon: MapPin,
    title: "Geographical Reach",
    description: "Connecting organizations with exceptional leadership talent through our market knowledge and professional networks.",
  },
  {
    icon: Award,
    title: "Quality Guarantee",
    description: "Replacement guarantee on all placements, demonstrating our confidence in our process.",
  },
  {
    icon: Sparkles,
    title: "Personalized Approach",
    description: "Every search is tailored to your unique needs—no cookie-cutter solutions.",
  },
];

const WhyChooseUs = () => {
  return (
    <section id="why-pishon" className="py-16 md:py-28 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="about-landscape" aria-hidden="true">
        <img src={baobabBg} alt="" loading="lazy" decoding="async" />
      </div>
      <div className="about-green-overlay" aria-hidden="true" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left self-center">
            <span className="inline-block text-gold-light font-medium tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">
              Why Pishon
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6 text-cream">
              A Partner You Can <span className="text-primary">Trust</span>
            </h2>
            <p className="text-cream/80 text-base md:text-lg mb-0 px-2 lg:px-0">
              Pishon Executive Search has been the trusted partner 
              for South Africa's leading organizations seeking exceptional leadership 
              talent. Our deep market knowledge, extensive networks, and commitment 
              to excellence set us apart.
            </p>

          </div>

          {/* Right Content - Reasons Grid */}
          <div className="grid grid-cols-2 gap-3 md:gap-6">
            {reasons.map((reason) => (
              <div
                key={reason.title}
                className="p-4 md:p-6 rounded-lg bg-background/10 backdrop-blur-sm border border-cream/10 hover:bg-background/20 transition-colors duration-300"
              >
                <reason.icon className="w-6 h-6 md:w-8 md:h-8 text-primary mb-2 md:mb-4" />
                <h3 className="text-sm md:text-lg font-heading font-semibold text-cream mb-1 md:mb-2">
                  {reason.title}
                </h3>
                <p className="text-cream/70 text-xs md:text-sm line-clamp-2 md:line-clamp-none">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
