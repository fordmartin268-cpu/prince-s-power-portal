import { Target, Eye, Heart, Shield, Users, Award, LucideBookImage } from "lucide-react";
import industrialImage from "@/assets/industrial.jpg";

const About = () => {
  const values = [
    { icon: Shield, title: "Integrity", description: "Honest and ethical business practices" },
    { icon: Eye, title: "Transparency", description: "Clear and open communication" },
    { icon: Award, title: "Quality", description: "Excellence in products and service" },
    { icon: Users, title: "Reliability", description: "Consistent delivery you can count on" },
    { icon: Heart, title: "Affordability", description: "Competitive pricing without compromise" },
    { icon: Target, title: "Innovation", description: "Forward-thinking solutions" },
  ];

  return (
    <section id="about" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">Who We Are</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            Your Partner in Electrical Excellence
          </h2>
          <p className="text-muted-foreground text-lg">
            We listen, we care, and we continue to uphold our long-standing tradition of not only meeting but exceeding our customer's expectations.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-20">
          {/* Image */}
          <div className="relative">
            <img 
              src={industrialImage} 
              alt="Industrial electrical equipment" 
              className="rounded-lg shadow-card w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-6 -right-6 bg-gradient-electric text-white p-6 rounded-lg shadow-electric hidden sm:block">
              <div className="font-heading font-bold text-4xl">2017</div>
              <div className="text-sm opacity-90">Founded</div>
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground mb-6">
              A Legacy of Quality & Trust
            </h3>
            <div className="space-y-4 text-muted-foreground">
              <p>
                <strong className="text-foreground">Princess Power Electrical Wholesalers</strong> was founded in 2017 by a black woman as the sole owner of the company. With a dedicated team, we aim to build long-term relationships with our clients through regular surveys to ensure complete satisfaction with our products and service offerings.
              </p>
              <p>
                We supply electrical products for industrial, commercial, and domestic infrastructures. Based in <strong className="text-foreground">Gauteng</strong>, we supply products throughout South Africa and neighbouring countries. Our management team has been in the electrical distribution industry for more than 15 years.
              </p>
              <p>
                <strong className="text-foreground">Princess Power Electrical Wholesalers is one of South Africa's black owned electrical wholesalers</strong>, with a Level 1 and 135% BEE status.
              </p>
            </div>

            {/* Vision & Mission */}
            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              <div className="bg-secondary rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-electric rounded-full flex items-center justify-center mb-4">
                  <Eye className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2">Our Vision</h4>
                <p className="text-muted-foreground text-sm">
                  To be the leading distributor in the electrical industry by providing integrated solutions through best service to our clients.
                </p>
              </div>
              <div className="bg-secondary rounded-lg p-6">
                <div className="w-12 h-12 bg-gradient-electric rounded-full flex items-center justify-center mb-4">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2">Our Mission</h4>
                <p className="text-muted-foreground text-sm">
                  Ensuring customer satisfaction, maintaining productive relationships, and continually offering quality products with environmentally friendly practices.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="bg-secondary rounded-2xl p-8 lg:p-12">
          <h3 className="font-heading font-bold text-2xl sm:text-3xl text-foreground text-center mb-10">
            Our Core Values
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-background rounded-lg p-6 shadow-card hover:shadow-electric transition-shadow group"
              >
                <div className="w-12 h-12 bg-secondary group-hover:bg-gradient-electric rounded-lg flex items-center justify-center mb-4 transition-all">
                  <value.icon className="w-6 h-6 text-primary group-hover:text-white transition-colors" />
                </div>
                <h4 className="font-heading font-semibold text-lg text-foreground mb-2">{value.title}</h4>
                <p className="text-muted-foreground text-sm">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
