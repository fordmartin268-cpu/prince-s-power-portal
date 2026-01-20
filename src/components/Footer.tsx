import { Zap } from "lucide-react";
import logo from "@/assets/logo.jpeg";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-4 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-12">
          {/* Company Info */}
          <div className="sm:col-span-2 lg:col-span-1">
            <img 
              src={logo} 
              alt="Princess Power Electrical" 
              className="h-16 sm:h-20 w-auto mb-4 sm:mb-6 bg-white rounded-lg p-2"
            />
            <p className="text-white/70 mb-4 text-sm sm:text-base">
              Your trusted partner for quality electrical supply components in South Africa.
            </p>
            <div className="flex items-center gap-2 text-electric-light text-sm sm:text-base">
              <Zap className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0" />
              <span className="font-heading font-semibold">Level 1 B-BBEE | 135%</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-4 sm:mb-6">Quick Links</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                { href: "#home", label: "Home" },
                { href: "#about", label: "About Us" },
                { href: "#products", label: "Products" },
                { href: "#services", label: "Services" },
                { href: "#contact", label: "Contact" },
              ].map((link) => (
                <li key={link.href}>
                  <a 
                    href={link.href}
                    className="text-white/70 hover:text-electric-light transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-4 sm:mb-6">Products</h4>
            <ul className="space-y-2 sm:space-y-3">
              {[
                "Cables & Wiring",
                "Transformers",
                "Circuit Breakers",
                "Overhead Line Materials",
                "Prepaid Meters",
                "Safety Equipment",
              ].map((product) => (
                <li key={product}>
                  <a 
                    href="#products"
                    className="text-white/70 hover:text-electric-light transition-colors"
                  >
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-heading font-semibold text-base sm:text-lg mb-4 sm:mb-6">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 text-white/70 text-sm sm:text-base">
              <li>Gauteng, South Africa</li>
              <li>
                <a 
                  href="mailto:info@princesspower.co.za"
                  className="hover:text-electric-light transition-colors"
                >
                  info@princesspower.co.za
                </a>
              </li>
              <li>
                <a 
                  href="mailto:nicolet@princesspower.co.za"
                  className="hover:text-electric-light transition-colors"
                >
                  nicolet@princesspower.co.za
                </a>
              </li>
              <li>
                <a 
                  href="tel:+27678489517"
                  className="hover:text-electric-light transition-colors"
                >
                  +27 67 848 9517
                </a>
              </li>
              <li>
                <a 
                  href="tel:+27798892652"
                  className="hover:text-electric-light transition-colors"
                >
                  +27 79 889 2652
                </a>
              </li>
              <li>
                <a 
                  href="https://www.princesspower.co.za"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-electric-light transition-colors"
                >
                  www.princesspower.co.za
                </a>
              </li>
            
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row justify-between items-center gap-3 sm:gap-4">
          <p className="text-white/60 text-xs sm:text-sm text-center sm:text-left">
            © {currentYear} Princess Power Electrical (PTY) LTD. All rights reserved.
          </p>
          <p className="text-white/60 text-xs sm:text-sm text-center sm:text-right">
            Black Owned | Proudly South African
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
