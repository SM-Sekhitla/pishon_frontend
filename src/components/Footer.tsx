import { Linkedin, Mail, Phone } from "lucide-react";
import logo from "@/assets/pishon-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="executive-footer bg-secondary text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img
              src={logo}
              alt="Pishon Executive Search"
              className="h-16 w-auto mb-6"
            />
            <p className="text-cream/70 text-sm mb-6">
              Proudly 100% black female owned executive search and leadership advisory 
              firm. Planted by the Rivers of Living Waters.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/company/pishon-executive-search/home/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@pishon.co.za"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
              <a
                href="tel:+27825617202"
                className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-primary transition-colors"
                aria-label="Phone"
              >
                <Phone className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#services" className="text-cream/70 hover:text-primary transition-colors text-sm">
                  Executive Search
                </a>
              </li>
              <li>
                <a href="/#services" className="text-cream/70 hover:text-primary transition-colors text-sm">
                  Specialised Recruitment
                </a>
              </li>
              <li>
                <a href="/#services" className="text-cream/70 hover:text-primary transition-colors text-sm">
                  Diversity & Inclusion
                </a>
              </li>
              <li>
                <a href="/#services" className="text-cream/70 hover:text-primary transition-colors text-sm">
                  Leadership Consulting
                </a>
              </li>
              <li>
                <a href="/#services" className="text-cream/70 hover:text-primary transition-colors text-sm">
                  Executive Assessment
                </a>
              </li>
              <li>
                <a href="/#services" className="text-cream/70 hover:text-primary transition-colors text-sm">
                  Board Services
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              <li>
                <a href="/#about" className="text-cream/70 hover:text-primary transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="/#team" className="text-cream/70 hover:text-primary transition-colors text-sm">
                  Our Team
                </a>
              </li>
              <li>
                <a href="/#process" className="text-cream/70 hover:text-primary transition-colors text-sm">
                  Our Process
                </a>
              </li>
              <li>
                <a href="/#industries" className="text-cream/70 hover:text-primary transition-colors text-sm">
                  Industries
                </a>
              </li>
              <li>
                <a href="/#testimonials" className="text-cream/70 hover:text-primary transition-colors text-sm">
                  Testimonials
                </a>
              </li>
              <li>
                <a href="/#contact" className="text-cream/70 hover:text-primary transition-colors text-sm">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-lg mb-6">Contact</h4>
            <ul className="space-y-3">
              <li className="text-cream/70 text-sm">
                Spaces, Design Quarter, Leslie Rd<br />
                Fourways Johannesburg, 2191
              </li>
              <li>
                <a
                  href="mailto:info@pishon.co.za"
                  className="text-cream/70 hover:text-primary transition-colors text-sm"
                >
                  info@pishon.co.za
                </a>
              </li>
              <li>
                <a
                  href="tel:+27825617202"
                  className="text-cream/70 hover:text-primary transition-colors text-sm"
                >
                  +27 82 561 7202
                </a>
              </li>
              <li className="text-cream/70 text-sm">
                Reg# 2021/832484/07
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-cream/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/50 text-sm">
            © {currentYear} Pishon Executive Search. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
