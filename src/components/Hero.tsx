import { ChevronDown, Zap } from "lucide-react";
import heroImage from "@/assets/hero-electrical.jpg";

const Hero = () => {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center pt-32"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6 animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
            <Zap className="w-5 h-5 text-electric-light" />
            <span className="text-sm font-medium">Your Trusted Electrical Supply Partner</span>
          </div>

          <h1 className="font-heading font-bold text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-6 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            Powering South Africa's
            <span className="block text-electric-light mt-2">Electrical Infrastructure</span>
          </h1>

          <p className="text-lg sm:text-xl text-white/90 max-w-2xl mx-auto mb-8 animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
            Princess Power Electrical Wholesalers – supplying quality electrical products for industrial, commercial, and domestic applications since 2017.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
            <a
              href="#products"
              className="bg-gradient-electric text-white px-8 py-4 rounded-md font-heading font-semibold text-lg hover:opacity-90 transition-all shadow-electric hover:shadow-lg"
            >
              View Products
            </a>
            <a
              href="#contact"
              className="bg-white/10 backdrop-blur-sm border-2 border-white text-white px-8 py-4 rounded-md font-heading font-semibold text-lg hover:bg-white hover:text-primary transition-all"
            >
              Contact Us
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-16 animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
            {[
              { value: "15+", label: "Years Experience" },
              { value: "Level 1", label: "B-BBEE Status" },
              { value: "100%", label: "Black Owned" },
              { value: "135%", label: "BEE Recognition" },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="font-heading font-bold text-3xl sm:text-4xl text-electric-light">{stat.value}</div>
                <div className="text-sm sm:text-base text-white/80 mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <a href="#about" className="text-white/60 hover:text-white transition-colors">
            <ChevronDown className="w-8 h-8" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
