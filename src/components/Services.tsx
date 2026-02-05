import { motion } from "framer-motion";
import { Globe, Share2, Palette, Megaphone, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Website Design & Development",
    description:
      "Custom, responsive websites built to convert visitors into customers. From landing pages to full e-commerce solutions.",
    features: ["Custom Design", "Responsive", "SEO Optimized", "Fast Loading"],
  },
  {
    icon: Share2,
    title: "Social Media Strategy",
    description:
      "Grow your audience with data-driven social media management. Content creation, scheduling, and community engagement.",
    features: ["Content Strategy", "Analytics", "Growth Tactics", "Engagement"],
  },
  {
    icon: Palette,
    title: "Graphic & Thumbnail Design",
    description:
      "Eye-catching visuals that stand out. YouTube thumbnails, social media graphics, and marketing materials.",
    features: ["Thumbnails", "Social Graphics", "Banners", "Print Ready"],
  },
  {
    icon: Megaphone,
    title: "Content & Branding Solutions",
    description:
      "Build a memorable brand identity. Logo design, brand guidelines, and cohesive visual storytelling.",
    features: ["Logo Design", "Brand Identity", "Guidelines", "Collateral"],
  },
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-section-light">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Everything You Need to{" "}
            <span className="text-gradient">Grow Online</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Comprehensive digital solutions tailored to your business goals.
            We handle the tech so you can focus on what you do best.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="group h-full bg-card rounded-2xl p-8 shadow-card hover:shadow-xl transition-all duration-300 border border-border hover:border-accent/30">
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-gradient-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-7 h-7 text-accent-foreground" />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold text-foreground mb-3">
                  {service.title}
                </h3>
                <p className="text-muted-foreground mb-6">{service.description}</p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="px-3 py-1 bg-secondary text-secondary-foreground text-xs font-medium rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-accent font-semibold group-hover:gap-3 transition-all"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;