import { Truck, Shield, Users, Clock, CheckCircle, HeadphonesIcon } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Truck,
      title: "Guaranteed Deliverability",
      description: "We realise your order has to be there on time, and our reputation is built upon that promise. We're so confident of our proven track record that we guarantee delivery on time.",
    },
    {
      icon: Shield,
      title: "Quality Control",
      description: "Quality and reliability are paramount. Princess Power Electrical is considered amongst our suppliers as the growing business on the block, pursuing to be the industry supplier for reliability.",
    },
    {
      icon: Users,
      title: "Project Teams",
      description: "Your personal Project Team will look after your job from start to finish, ensuring efficient workflow to deliver the required materials on time.",
    },
    {
      icon: CheckCircle,
      title: "Preferred Supplier Arrangements",
      description: "Our arrangements ensure clients receive SABS approved materials and services the market has to offer, with complete quality assurance.",
    },
    {
      icon: Clock,
      title: "Complete Control",
      description: "We maintain complete control of customer service and delivery. By maintaining this total control, we are confident that your delivery will arrive in time and as per your order.",
    },
    {
      icon: HeadphonesIcon,
      title: "Customer Satisfaction",
      description: "We are constantly looking for feedback on ways to improve our services. Customers are surveyed regularly to ensure complete satisfaction with our product and service offerings.",
    },
  ];

  return (
    <section id="services" className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">Why Choose Us</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            Your Wise, Caring Advisor
          </h2>
          <p className="text-muted-foreground text-lg italic">
            "You know your destination. You need a wise, caring advisor alongside you."
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="group p-8 bg-background border border-border rounded-xl hover:border-primary/30 hover:shadow-electric transition-all duration-300"
            >
              <div className="w-16 h-16 bg-gradient-electric rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="font-heading font-semibold text-xl text-foreground mb-4">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* Target Market */}
        <div className="mt-20 bg-gradient-electric rounded-2xl p-8 lg:p-12 text-white">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="font-heading font-bold text-2xl sm:text-3xl mb-6">
                Supply & Target Market
              </h3>
              <p className="text-white/90 mb-6 leading-relaxed">
                Princess Power Electrical Wholesalers supplies nationally to all electrical contractors big or small, municipalities, mines, construction, and the agricultural sector.
              </p>
              <p className="text-white/90 leading-relaxed">
                We develop long-term, mutually beneficial partnerships with companies that require our core product and service offerings. Our consultative approach sets us apart from other suppliers.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                "Electrical Contractors",
                "Municipalities",
                "Mining Sector",
                "Construction",
                "Agriculture",
                "Industrial",
                "Commercial",
                "Domestic",
              ].map((market, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg p-4"
                >
                  <CheckCircle className="w-5 h-5 flex-shrink-0" />
                  <span className="font-medium text-sm">{market}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
