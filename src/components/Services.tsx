import { RefreshCw, UserCheck, Heart, ClipboardList, Briefcase, Award } from "lucide-react";

const services = [
  {
    icon: RefreshCw,
    title: "Executive Search",
    description:
      "We identify, attract, and retain senior leaders who align with your strategy, culture, and long-term goals.",
  },
  {
    icon: UserCheck,
    title: "Specialised Recruitment",
    description:
      "Targeted recruitment solutions for specialized roles requiring unique skills and industry expertise.",
  },
  {
    icon: Heart,
    title: "Diversity & Inclusion",
    description:
      "Committed to building diverse leadership teams that reflect South Africa's rich cultural landscape with B-BBEE compliance.",
  },
  {
    icon: ClipboardList,
    title: "Leadership Consulting",
    description:
      "Strategic guidance on organizational design, succession planning, and leadership development.",
  },
  {
    icon: Briefcase,
    title: "Executive Assessment",
    description:
      "Comprehensive psychometric assessments and leadership evaluations for top candidates in partnership with Larona Consulting.",
  },
  {
    icon: Award,
    title: "Board Services",
    description:
      "Expert guidance in building effective boards through Non-Executive Director searches and board evaluations.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block text-primary font-medium tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">
            What We Do
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
            Our <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg px-2">
            Comprehensive talent solutions designed to help South African organizations 
            build exceptional leadership teams.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="service-card group bg-card rounded-xl p-4 md:p-8 shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 md:w-14 md:h-14 rounded-lg bg-primary/10 flex items-center justify-center mb-3 md:mb-6 group-hover:bg-primary transition-colors duration-300">
                <service.icon className="w-5 h-5 md:w-7 md:h-7 text-primary group-hover:text-primary-foreground transition-colors duration-300" />
              </div>
              
              <h3 className="text-sm md:text-xl font-heading font-semibold mb-2 md:mb-3">
                {service.title}
              </h3>
              
              <p className="text-muted-foreground text-xs md:text-base line-clamp-3 md:line-clamp-none">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
