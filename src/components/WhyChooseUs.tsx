import { Shield, Clock, Globe, Award, Users2, Sparkles } from "lucide-react";

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
    icon: Clock,
    title: "Speed to Hire",
    description: "Efficient processes without compromising quality—typical placements in 6-8 weeks.",
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
    <section id="about" className="py-16 md:py-28 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-forest-light/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-gold-light font-medium tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">
              Why Pishon
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6 text-cream">
              A Partner You Can <span className="text-primary">Trust</span>
            </h2>
            <p className="text-cream/80 text-base md:text-lg mb-6 md:mb-8 px-2 lg:px-0">
              For over 15 years, Pishon Executive Search has been the trusted partner 
              for South Africa's leading organizations seeking exceptional leadership 
              talent. Our deep market knowledge, extensive networks, and commitment 
              to excellence set us apart.
            </p>

            <div className="grid grid-cols-2 gap-3 md:gap-6">
              <div className="text-center p-4 md:p-6 rounded-lg bg-forest-light/30">
                <div className="text-2xl md:text-4xl font-heading font-bold text-primary mb-1">500+</div>
                <div className="text-cream/70 text-xs md:text-sm">Successful Placements</div>
              </div>
              <div className="text-center p-4 md:p-6 rounded-lg bg-forest-light/30">
                <div className="text-2xl md:text-4xl font-heading font-bold text-primary mb-1">15+</div>
                <div className="text-cream/70 text-xs md:text-sm">Years in Business</div>
              </div>
              <div className="text-center p-4 md:p-6 rounded-lg bg-forest-light/30">
                <div className="text-2xl md:text-4xl font-heading font-bold text-primary mb-1">95%</div>
                <div className="text-cream/70 text-xs md:text-sm">Client Retention</div>
              </div>
              <div className="text-center p-4 md:p-6 rounded-lg bg-forest-light/30">
                <div className="text-2xl md:text-4xl font-heading font-bold text-primary mb-1">50+</div>
                <div className="text-cream/70 text-xs md:text-sm">Industry Sectors</div>
              </div>
            </div>
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
