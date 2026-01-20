import { useState } from "react";
import { Menu, X, Phone, Mail } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#products", label: "Products" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm shadow-sm">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2">
        <div className="container mx-auto px-4 flex justify-center sm:justify-between items-center text-sm">
          <div className="hidden sm:flex items-center gap-6">
            <a href="tel:+27678489517" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Phone className="w-4 h-4" />
              <span>Contact Us Today</span>
            </a>
            <a href="mailto:info@princesspower.co.za" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <Mail className="w-4 h-4" />
              <span>info@princesspower.co.za</span>
            </a>
          </div>
          <span className="text-xs sm:text-sm">Proudly South African | Level 1 B-BBEE</span>
        </div>
      </div>

      {/* Main nav */}
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Desktop nav - left */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(0, 3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Centered Logo */}
          <a href="#home" className="flex items-center">
            <img 
              src={logo} 
              alt="Princess Power Electrical (PTY) LTD" 
              className="h-11 sm:h-13 w-auto"
            />
          </a>

          {/* Desktop nav - right */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.slice(3).map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="font-heading font-medium text-foreground hover:text-primary transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="bg-gradient-electric text-primary-foreground px-6 py-2 rounded-md font-heading font-semibold hover:opacity-90 transition-opacity shadow-electric"
            >
              Get Quote
            </a>
          </div>

          {/* Mobile placeholder for balance */}
          <div className="lg:hidden w-10" />
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-border pt-4 animate-fade-in">
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="font-heading font-medium text-foreground hover:text-primary transition-colors py-2"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="bg-gradient-electric text-primary-foreground px-6 py-3 rounded-md font-heading font-semibold text-center hover:opacity-90 transition-opacity"
              >
                Get Quote
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
