import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery & Strategy",
    description:
      "We dive deep into your business, goals, and target audience to create a tailored digital strategy.",
  },
  {
    icon: PenTool,
    step: "02",
    title: "Design & Prototype",
    description:
      "Our designers craft beautiful, user-focused mockups and prototypes for your review and feedback.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development",
    description:
      "We build your solution using modern technologies, ensuring speed, security, and scalability.",
  },
  {
    icon: Rocket,
    step: "04",
    title: "Launch & Growth",
    description:
      "After thorough testing, we launch and provide ongoing support to help you grow and succeed.",
  },
];

const Process = () => {
  return (
    <section id="process" className="py-24 bg-section-dark text-primary-foreground">
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
            Our Process
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold mt-3 mb-4">
            How We <span className="text-gradient">Bring Ideas to Life</span>
          </h2>
          <p className="text-primary-foreground/70 text-lg max-w-2xl mx-auto">
            A proven, streamlined process that delivers exceptional results
            every time. Transparency and collaboration at every step.
          </p>
        </motion.div>

        {/* Process Steps */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-1/2 w-full h-0.5 bg-gradient-to-r from-accent/50 to-transparent" />
              )}

              <div className="relative z-10 text-center">
                {/* Icon */}
                <div className="relative inline-flex mb-6">
                  <div className="w-20 h-20 rounded-2xl bg-gradient-accent flex items-center justify-center mx-auto">
                    <step.icon className="w-10 h-10 text-accent-foreground" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary-foreground text-primary font-display font-bold text-sm flex items-center justify-center">
                    {step.step}
                  </span>
                </div>

                {/* Content */}
                <h3 className="font-display text-xl font-bold mb-3">
                  {step.title}
                </h3>
                <p className="text-primary-foreground/70 text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;