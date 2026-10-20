import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message Sent!",
      description: "We'll be in touch within 24 hours.",
    });

    setIsSubmitting(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="contact" className="py-16 md:py-28 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-20">
          {/* Left - Contact Info */}
          <div className="text-center lg:text-left">
            <span className="inline-block text-primary font-medium tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">
              Get In Touch
            </span>
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
              Let's Start a <span className="text-primary">Conversation</span>
            </h2>
            <p className="text-muted-foreground text-base md:text-lg mb-8 md:mb-10 px-2 lg:px-0">
              Whether you're looking to hire exceptional talent or exploring new 
              career opportunities, we'd love to hear from you.
            </p>

            {/* Contact Details */}
            <div className="grid grid-cols-2 lg:grid-cols-1 gap-4 md:gap-6">
              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-4 p-4 lg:p-0 bg-card lg:bg-transparent rounded-lg lg:rounded-none">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="font-heading font-semibold text-sm md:text-base mb-1">Visit Us</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Design Quarter, Leslie Rd<br />
                    Fourways, 2191
                  </p>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-4 p-4 lg:p-0 bg-card lg:bg-transparent rounded-lg lg:rounded-none">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="font-heading font-semibold text-sm md:text-base mb-1">Email Us</h4>
                  <a
                    href="mailto:info@pishon.co.za"
                    className="text-primary hover:underline text-xs md:text-sm"
                  >
                    info@pishon.co.za
                  </a>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-4 p-4 lg:p-0 bg-card lg:bg-transparent rounded-lg lg:rounded-none">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="font-heading font-semibold text-sm md:text-base mb-1">Call Us</h4>
                  <a
                    href="tel:+27825617202"
                    className="text-primary hover:underline text-xs md:text-sm"
                  >
                    +27 82 561 7202
                  </a>
                </div>
              </div>

              <div className="flex flex-col lg:flex-row items-center lg:items-start gap-2 lg:gap-4 p-4 lg:p-0 bg-card lg:bg-transparent rounded-lg lg:rounded-none">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-lg bg-accent flex items-center justify-center flex-shrink-0">
                  <Clock className="w-4 h-4 md:w-5 md:h-5 text-primary" />
                </div>
                <div className="text-center lg:text-left">
                  <h4 className="font-heading font-semibold text-sm md:text-base mb-1">Hours</h4>
                  <p className="text-muted-foreground text-xs md:text-sm">
                    Mon - Fri: 8AM - 5PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Contact Form */}
          <div className="bg-card rounded-2xl p-5 md:p-10 shadow-card">
            <h3 className="text-lg md:text-xl font-heading font-semibold mb-4 md:mb-6">
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input
                    required
                    placeholder="Your name"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Company / Organisation
                  </label>
                  <Input
                    placeholder="Company name"
                    className="bg-background"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="your@email.com"
                    className="bg-background"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone
                  </label>
                  <Input
                    type="tel"
                    placeholder="+27 00 000 0000"
                    className="bg-background"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Subject *
                </label>
                <Input
                  required
                  placeholder="How can we help you?"
                  className="bg-background"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <Textarea
                  required
                  rows={4}
                  placeholder="Tell us about your requirements..."
                  className="bg-background resize-none"
                />
              </div>

              <Button
                type="submit"
                variant="gold"
                size="xl"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <Send className="w-5 h-5 ml-2" />
                  </>
                )}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
