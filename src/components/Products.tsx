import { ArrowRight } from "lucide-react";
import cablesImage from "@/assets/cables.jpg";
import transformerImage from "@/assets/transformer.jpg";
import circuitBreakersImage from "@/assets/circuit-breakers.jpg";
import powerLinesImage from "@/assets/power-lines.jpg";

const Products = () => {
  const productCategories = [
    {
      title: "Cables & Wiring",
      description: "XLPE, Airdac, Interdac, Optic Fibre, House Wire, Welding Cable, Trailing Cable, Cabtyre",
      image: cablesImage,
    },
    {
      title: "Transformers & Substations",
      description: "Distribution Class Transformers, Mini-Subs, Pole-top Boxes, Meter Kiosks",
      image: transformerImage,
    },
    {
      title: "Circuit Protection",
      description: "Surge Arrestors, Drop-out Fuse Switches, Isolators, Thermal Overload Relays",
      image: circuitBreakersImage,
    },
    {
      title: "Overhead Line Materials",
      description: "MV & LV materials, Insulators, Cross-arms, Stay Assemblies, Galvanised Steel Fittings",
      image: powerLinesImage,
    },
  ];

  const additionalProducts = [
    "Electrical Power Cables",
    "Prepaid Meters",
    "Ready Boards",
    "Disc & Pin Insulators",
    "Electrical Testers",
    "Fuse Links & Bases",
    "Lighting Arresters",
    "Cable Accessories",
    "Joint Kits",
    "Glands & Lugs",
    "Ferrules",
    "Cable Cutters & Crimpers",
    "Safety Equipment",
    "Tools & Ladders",
    "Wire-formed Products",
    "Screw-Pin-Shackle-Anchor",
  ];

  return (
    <section id="products" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">Our Products</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            Comprehensive Product Range
          </h2>
          <p className="text-muted-foreground text-lg">
            Quality electrical products for industrial, commercial, and domestic applications. SABS approved materials from trusted suppliers.
          </p>
        </div>

        {/* Main Product Categories */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {productCategories.map((product, index) => (
            <div 
              key={index} 
              className="group bg-background rounded-xl overflow-hidden shadow-card hover:shadow-electric transition-all duration-300"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="font-heading font-semibold text-xl text-foreground mb-2 group-hover:text-primary transition-colors">
                  {product.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {product.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Products Grid */}
        <div className="bg-background rounded-2xl p-8 lg:p-12">
          <h3 className="font-heading font-bold text-2xl text-foreground mb-8 text-center">
            We Also Supply
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {additionalProducts.map((product, index) => (
              <div 
                key={index}
                className="flex items-center gap-3 p-4 bg-secondary rounded-lg hover:bg-primary hover:text-primary-foreground transition-colors group"
              >
                <ArrowRight className="w-4 h-4 text-primary group-hover:text-primary-foreground flex-shrink-0" />
                <span className="text-sm font-medium">{product}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 bg-gradient-electric text-white px-8 py-4 rounded-md font-heading font-semibold text-lg hover:opacity-90 transition-all shadow-electric"
          >
            Request Product Catalogue
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Products;
