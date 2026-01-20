import { MapPin, Phone, Mail, Clock, Globe } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 lg:py-28 bg-muted">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-primary font-heading font-semibold text-sm uppercase tracking-wider">Get In Touch</span>
          <h2 className="font-heading font-bold text-3xl sm:text-4xl lg:text-5xl text-foreground mt-3 mb-6">
            Contact Us Today
          </h2>
          <p className="text-muted-foreground text-lg">
            Ready to power your next project? Reach out to our team for quotes, product inquiries, or partnership opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <h3 className="font-heading font-bold text-2xl text-foreground mb-8">
              Let's Connect
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-card">
                <div className="w-12 h-12 bg-gradient-electric rounded-lg flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-1">Location</h4>
                  <p className="text-muted-foreground">
                    Gauteng, South Africa<br />
                    Serving all South African provinces and neighbouring countries
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-card">
                <div className="w-12 h-12 bg-gradient-electric rounded-lg flex items-center justify-center flex-shrink-0">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-1">Website</h4>
                  <a 
                    href="https://www.princesspower.co.za" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-primary hover:underline"
                  >
                    www.princesspower.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-card">
                <div className="w-12 h-12 bg-gradient-electric rounded-lg flex items-center justify-center flex-shrink-0">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-1">Email</h4>
                  <a 
                    href="mailto:info@princesspower.co.za" 
                    className="text-primary hover:underline"
                  >
                    info@princesspower.co.za
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4 p-6 bg-background rounded-xl shadow-card">
                <div className="w-12 h-12 bg-gradient-electric rounded-lg flex items-center justify-center flex-shrink-0">
                  <Clock className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h4 className="font-heading font-semibold text-lg text-foreground mb-1">Business Hours</h4>
                  <p className="text-muted-foreground">
                    Monday - Friday: 8:00 AM - 5:00 PM<br />
                    Saturday: 8:00 AM - 1:00 PM
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-background rounded-2xl p-8 shadow-card">
            <h3 className="font-heading font-bold text-2xl text-foreground mb-6">
              Request a Quote
            </h3>
            <form className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-foreground mb-2">
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="Your company"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="you@company.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                    placeholder="+27 ..."
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                  Subject
                </label>
                <select
                  id="subject"
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                >
                  <option value="">Select a subject</option>
                  <option value="quote">Request a Quote</option>
                  <option value="product">Product Inquiry</option>
                  <option value="partnership">Partnership Opportunity</option>
                  <option value="support">Customer Support</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-input bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-electric text-white py-4 rounded-lg font-heading font-semibold text-lg hover:opacity-90 transition-all shadow-electric"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
