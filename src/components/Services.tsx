import { RefreshCw, UserCheck, Heart, ClipboardList, Briefcase, Award, ArrowUpRight } from "lucide-react";

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
    <section id="services" className="executive-services py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="expertise-layout">
          <div className="expertise-intro">
            <span className="section-eyebrow">What We Do</span>
            <h2 className="text-4xl md:text-5xl font-heading leading-tight mt-5 mb-6 text-secondary">Our <span className="text-primary">Services</span></h2>
            <p className="text-muted-foreground leading-relaxed">Comprehensive talent solutions designed to help South African organizations build exceptional leadership teams.</p>
            <a href="#about" className="expertise-link inline-flex items-center gap-4 mt-8 text-sm text-secondary">About Us <ArrowUpRight size={16} /></a>
          </div>
          <div className="expertise-grid">
            {services.map((service, index) => (
              <div key={service.title} className="service-card executive-service group" style={{ animationDelay: `${index * 80}ms` }}>
                <div className="flex items-center justify-between mb-5">
                  <service.icon className="w-6 h-6 text-secondary" strokeWidth={1.3} />
                  <span className="service-number">0{index + 1}</span>
                </div>
                <h3 className="text-xl font-heading text-secondary mb-3">{service.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
