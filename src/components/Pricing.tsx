import { motion } from "framer-motion";
import { Check, Zap, Star, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    name: "Starter",
    icon: Zap,
    price: "₹5000",
    description: "Perfect for small businesses just getting started online.",
    features: [
      "5-page responsive website",
      "Mobile-optimized design",
      "Basic SEO setup",
      "Contact form integration",
      "1 month support",
      "2 revision rounds",
    ],
    cta: "Get Started",
    popular: false,
  },
  {
    name: "Professional",
    icon: Star,
    price: "₹10000",
    description: "Ideal for growing businesses ready to scale their presence.",
    features: [
      "10-page custom website",
      "Advanced responsive design",
      "Full SEO optimization",
      "Social media integration",
      "Blog/CMS setup",
      "Analytics dashboard",
      "3 months support",
      "5 revision rounds",
    ],
    cta: "Choose Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    icon: Crown,
    price: "Custom",
    description: "Comprehensive solutions for established businesses.",
    features: [
      "Unlimited pages",
      "Custom functionality",
      "E-commerce integration",
      "Social media management",
      "Content strategy",
      "Priority support",
      "Dedicated account manager",
      "Unlimited revisions",
    ],
    cta: "Contact Sales",
    popular: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="py-24 bg-background">
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
            Pricing
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Simple, <span className="text-gradient">Transparent Pricing</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Choose the package that fits your needs. All packages include our
            commitment to quality and results.
          </p>
        </motion.div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl ${
                plan.popular
                  ? "bg-gradient-primary text-primary-foreground scale-105 shadow-xl"
                  : "bg-card text-foreground border border-border shadow-card"
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="px-4 py-1 bg-gradient-accent text-accent-foreground text-sm font-semibold rounded-full shadow-accent">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="p-8">
                {/* Icon */}
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 ${
                    plan.popular ? "bg-primary-foreground/20" : "bg-gradient-accent"
                  }`}
                >
                  <plan.icon
                    className={`w-6 h-6 ${
                      plan.popular ? "text-primary-foreground" : "text-accent-foreground"
                    }`}
                  />
                </div>

                {/* Plan Info */}
                <h3 className="font-display text-2xl font-bold mb-2">{plan.name}</h3>
                <p
                  className={`text-sm mb-6 ${
                    plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"
                  }`}
                >
                  {plan.description}
                </p>

                {/* Price */}
                <div className="mb-8">
                  <span className="font-display text-4xl font-bold">{plan.price}</span>
                  {plan.price !== "Custom" && (
                    <span
                      className={`text-sm ${
                        plan.popular ? "text-primary-foreground/70" : "text-muted-foreground"
                      }`}
                    >
                      {" "}
                      / project
                    </span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <Check
                        className={`w-5 h-5 flex-shrink-0 ${
                          plan.popular ? "text-accent" : "text-accent"
                        }`}
                      />
                      <span
                        className={`text-sm ${
                          plan.popular ? "text-primary-foreground/90" : "text-foreground"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant={plan.popular ? "accent" : "outline"}
                  size="lg"
                  className="w-full"
                >
                  {plan.cta}
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Custom Quote */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-16"
        >
          <p className="text-muted-foreground">
            Need something custom?{" "}
            <a href="#contact" className="text-accent font-semibold hover:underline">
              Contact us for a tailored quote
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Pricing;