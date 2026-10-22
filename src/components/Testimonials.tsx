import { useState } from "react";
import { Star, Quote, Send, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const testimonials = [
  {
    quote:
      "Pishon understood exactly what we needed and delivered exceptional candidates within weeks. Our new CEO has transformed our organization.",
    author: "Thabo Mokoena",
  },
  {
    quote:
      "Their discretion and professionalism throughout the process was outstanding. They found us a CFO who exceeded all expectations.",
    author: "Sarah van der Berg",
  },
  {
    quote:
      "As a candidate, I was impressed by their thorough understanding of my career aspirations. They matched me with the perfect opportunity.",
    author: "Nomvula Dlamini",
  },
];

const Testimonials = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Testimonial Submitted!",
      description: "Thank you for your feedback. We'll review it shortly.",
    });

    setIsSubmitting(false);
    setIsOpen(false);
    (e.target as HTMLFormElement).reset();
  };

  return (
    <section id="testimonials" className="py-16 md:py-28 bg-cream-dark">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16">
          <span className="inline-block text-primary font-medium tracking-widest uppercase text-xs md:text-sm mb-3 md:mb-4">
            Client Success
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-heading font-bold mb-4 md:mb-6">
            What Our Clients <span className="text-primary">Say</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Trusted by leading organizations across South Africa.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto mb-10 md:mb-12">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative bg-card rounded-xl p-5 md:p-8 shadow-card hover:shadow-hover transition-all duration-300"
            >
              {/* Quote Icon */}
              <div className="absolute -top-3 md:-top-4 left-5 md:left-8">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-primary flex items-center justify-center">
                  <Quote className="w-4 h-4 md:w-5 md:h-5 text-primary-foreground" />
                </div>
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-3 md:mb-4 pt-3 md:pt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 md:w-4 md:h-4 fill-primary text-primary" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground text-sm md:text-base mb-4 md:mb-6 italic">
                "{testimonial.quote}"
              </blockquote>

              {/* Author */}
              <div className="border-t border-border pt-3 md:pt-4">
                <div className="font-heading font-semibold text-foreground text-sm md:text-base">
                  {testimonial.author}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Add Testimonial Button */}
        <div className="text-center">
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button variant="goldOutline" size="lg">
                <Plus className="w-5 h-5 mr-2" />
                Share Your Experience
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="font-heading text-xl">
                  Share Your Testimonial
                </DialogTitle>
              </DialogHeader>
              <form onSubmit={handleSubmit} className="space-y-4 mt-4">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <Input required placeholder="Your name" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Email *
                  </label>
                  <Input required type="email" placeholder="your@email.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Your Experience *
                  </label>
                  <Textarea
                    required
                    rows={4}
                    placeholder="Tell us about your experience working with Pishon..."
                    className="resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  variant="gold"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Testimonial
                      <Send className="w-4 h-4 ml-2" />
                    </>
                  )}
                </Button>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
