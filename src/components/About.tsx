import { Award, Users, Target, Shield } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 md:py-28 bg-secondary text-secondary-foreground relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 md:w-96 h-64 md:h-96 bg-forest-light/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 md:w-96 h-64 md:h-96 bg-gold/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div>
            <span className="inline-block text-gold-light font-medium tracking-widest uppercase text-xs md:text-sm mb-4">
              About Us
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-6 text-cream">
              Planted by the Rivers of <span className="text-primary">Living Waters</span>
            </h2>
            <p className="text-cream/80 text-lg mb-6">
              At Pishon, we believe that we have been called into the world of Executive Search 
              to partner with clients & candidates to effect Diversity & Inclusion in the business world.
            </p>
            <p className="text-cream/70 mb-6">
              Proudly 100% black female owned management consulting company, led by a leader with 
              more than 20 years' experience in executive search. Although established in 2021, 
              our knowledge of the industry speaks for itself.
            </p>
            <p className="text-cream/70 mb-8">
              We are committed to providing professional, quality-driven service to both employers 
              and candidates. We are fully aware of our responsibility to make our country a better 
              place by facilitating the process of getting the right people at the top, in 
              organizations of all sorts.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-3 md:gap-6">
              <div className="text-center p-4 md:p-6 rounded-lg bg-forest-light/30">
                <div className="text-2xl md:text-4xl font-heading font-bold text-primary mb-1">20+</div>
                <div className="text-cream/70 text-xs md:text-sm">Years Experience</div>
              </div>
              <div className="text-center p-4 md:p-6 rounded-lg bg-forest-light/30">
                <div className="text-2xl md:text-4xl font-heading font-bold text-primary mb-1">100%</div>
                <div className="text-cream/70 text-xs md:text-sm">Black Female Owned</div>
              </div>
            </div>
          </div>

          {/* Right - Values */}
          <div className="space-y-4 md:space-y-6">
            <div className="flex gap-4 p-4 md:p-6 rounded-lg bg-background/10 backdrop-blur-sm border border-cream/10 hover:bg-background/20 transition-colors duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Award className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm md:text-lg text-cream mb-1 md:mb-2">Quality-Driven Service</h3>
                <p className="text-cream/70 text-xs md:text-sm">
                  Our consulting team provides sound recommendations with timely, practical and 
                  cost-effective solutions.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 md:p-6 rounded-lg bg-background/10 backdrop-blur-sm border border-cream/10 hover:bg-background/20 transition-colors duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Users className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm md:text-lg text-cream mb-1 md:mb-2">Diversity & Inclusion</h3>
                <p className="text-cream/70 text-xs md:text-sm">
                  Committed to building diverse leadership teams that reflect South Africa's 
                  rich cultural landscape.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 md:p-6 rounded-lg bg-background/10 backdrop-blur-sm border border-cream/10 hover:bg-background/20 transition-colors duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm md:text-lg text-cream mb-1 md:mb-2">Strong Track Record</h3>
                <p className="text-cream/70 text-xs md:text-sm">
                  Our completion rate and repeat business are indicators of a strong commitment 
                  to our clients.
                </p>
              </div>
            </div>

            <div className="flex gap-4 p-4 md:p-6 rounded-lg bg-background/10 backdrop-blur-sm border border-cream/10 hover:bg-background/20 transition-colors duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-primary/20 flex items-center justify-center flex-shrink-0">
                <Shield className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>
              <div>
                <h3 className="font-heading font-semibold text-sm md:text-lg text-cream mb-1 md:mb-2">12-Month Guarantee</h3>
                <p className="text-cream/70 text-xs md:text-sm">
                  If a candidate leaves within 12 months, we restart the search without 
                  additional professional fees.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
