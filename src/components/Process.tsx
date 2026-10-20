import { MessageCircle, Search, Users, CheckCircle2, Heart } from "lucide-react";

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "Discovery",
    description:
      "We begin with an in-depth consultation to understand your organization's culture, strategic objectives, and specific leadership requirements.",
  },
  {
    icon: Search,
    number: "02",
    title: "Research & Sourcing",
    description:
      "Our team conducts comprehensive market research and leverages our extensive network to identify exceptional candidates.",
  },
  {
    icon: Users,
    number: "03",
    title: "Assessment & Shortlist",
    description:
      "Rigorous evaluation including competency interviews, reference checks, and psychometric assessments to present the best candidates.",
  },
  {
    icon: CheckCircle2,
    number: "04",
    title: "Selection & Placement",
    description:
      "We facilitate the interview process, assist with offer negotiation, and ensure a smooth transition for your new leader.",
  },
  {
    icon: Heart,
    number: "05",
    title: "Integration Support",
    description:
      "Post-placement support to ensure successful onboarding and long-term success for both the candidate and your organization.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-16 md:py-28 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block text-primary font-medium tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">
            How We Work
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
            Our Proven <span className="text-primary">Search Process</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg px-2">
            A methodical and transparent approach that consistently delivers 
            exceptional leadership talent.
          </p>
        </div>

        {/* Process Steps */}
        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-0.5 bg-border" />
          
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-4 md:gap-8">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className={`relative text-center ${index === steps.length - 1 ? 'col-span-2 lg:col-span-1 max-w-[200px] mx-auto' : ''}`}
              >
                {/* Icon Container */}
                <div className="relative inline-flex flex-col items-center">
                  <div className="w-14 h-14 md:w-20 md:h-20 rounded-full bg-background border-2 md:border-4 border-primary flex items-center justify-center shadow-elegant relative z-10">
                    <step.icon className="w-5 h-5 md:w-8 md:h-8 text-primary" />
                  </div>
                  <span className="absolute -bottom-2 bg-primary text-primary-foreground text-[10px] md:text-xs font-bold px-1.5 md:px-2 py-0.5 md:py-1 rounded-full">
                    {step.number}
                  </span>
                </div>

                {/* Content */}
                <div className="mt-5 md:mt-8">
                  <h3 className="text-sm md:text-lg font-heading font-semibold mb-1 md:mb-2">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-xs md:text-sm line-clamp-3 md:line-clamp-none">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;
