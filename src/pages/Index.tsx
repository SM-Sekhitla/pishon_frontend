import { Globe2, Users, ShieldCheck } from "lucide-react";
import { Helmet } from "react-helmet-async";
import PageMotion from "@/components/PageMotion";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import About from "@/components/About";
import TreeSpacer from "@/components/TreeSpacer";
import Process from "@/components/Process";
import WhyChooseUs from "@/components/WhyChooseUs";
import Industries from "@/components/Industries";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>Pishon Executive Search | Premier Executive Recruitment South Africa</title>
        <meta
          name="description"
          content="100% black female owned executive search and leadership advisory firm. We find exceptional CEOs, CFOs, and senior executives for corporates, SMEs, and public sector organizations across South Africa."
        />
        <meta
          name="keywords"
          content="executive search south africa, executive recruitment johannesburg, headhunting firms gauteng, CEO recruitment, CFO search, leadership advisory, diversity inclusion recruitment, black owned executive search"
        />
        <meta name="robots" content="index, follow" />
        <link rel="canonical" href="https://pishon.co.za" />
        
        {/* Open Graph */}
        <meta property="og:title" content="Pishon Executive Search | Find Leaders Who Transform Businesses" />
        <meta property="og:description" content="Premier executive recruitment and leadership advisory for South African organizations. 100% black female owned." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://pishon.co.za" />
        
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Organization",
            name: "Pishon Executive Search",
            url: "https://pishon.co.za",
            description:
              "100% black female owned executive search and leadership advisory firm in South Africa.",
            foundingDate: "2021",
            address: {
              "@type": "PostalAddress",
              streetAddress: "Spaces, Design Quarter, Leslie Rd",
              addressLocality: "Fourways Johannesburg",
              postalCode: "2191",
              addressCountry: "ZA",
            },
            contactPoint: {
              "@type": "ContactPoint",
              email: "info@pishon.co.za",
              telephone: "+27825617202",
              contactType: "customer service",
            },
          })}
        </script>
      </Helmet>

      <div className="min-h-screen">
        <Header />
        <main>
          <Hero />
          <div className="brand-strip">
            <div className="container mx-auto px-5 md:px-8 grid grid-cols-1 sm:grid-cols-3 gap-0 sm:gap-6 py-3 sm:py-0">
              <div className="brand-strip-item"><Users size={24} /><p>100% black female owned<span>A different perspective. A shared ambition.</span></p></div>
              <div className="brand-strip-item"><Globe2 size={24} /><p>South African expertise<span>Local insight. A broader outlook.</span></p></div>
              <div className="brand-strip-item"><ShieldCheck size={24} /><p>A considered partnership<span>Your next chapter starts with a conversation.</span></p></div>
            </div>
          </div>
          <PageMotion>
          <Services />
          <About />
          <TreeSpacer />
          <Process />
          <WhyChooseUs />
          <Industries />
          <Testimonials />
          <Contact />
          </PageMotion>
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;
