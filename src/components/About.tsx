import { motion } from "framer-motion";
import { CheckCircle2, Users, Target, Lightbulb } from "lucide-react";

const values = [
  {
    icon: Target,
    title: "Results-Driven",
    description: "Every decision we make is focused on achieving measurable results for your business.",
  },
  {
    icon: Users,
    title: "Client-Focused",
    description: "Your success is our success. We work as an extension of your team.",
  },
  {
    icon: Lightbulb,
    title: "Innovation First",
    description: "We stay ahead of trends to give you a competitive edge in the digital landscape.",
  },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-6">
              We're the Digital Partner{" "}
              <span className="text-gradient">You've Been Looking For</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              Founded with a passion for digital excellence, Nexus Creative has
              spent over 5 years helping businesses of all sizes achieve their
              online goals. We combine creativity with strategy to deliver
              results that matter.
            </p>
            <p className="text-muted-foreground mb-8">
              Our team of designers, developers, and strategists work together
              to create cohesive digital experiences that engage your audience
              and drive conversions. We don't just build websites – we build
              digital success stories.
            </p>

            {/* Checkmarks */}
            <div className="space-y-4">
              {[
                "Custom solutions tailored to your business needs",
                "Transparent communication throughout every project",
                "Ongoing support and optimization after launch",
                "Proven track record with 150+ successful projects",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Cards */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 shadow-card hover:shadow-xl transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-accent flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-foreground mb-1">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {value.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Experience Badge */}
            <div className="p-6 rounded-2xl bg-gradient-primary text-primary-foreground">
              <div className="flex items-center justify-between">
                <div>
                  <div className="font-display text-4xl font-bold">5+</div>
                  <div className="text-primary-foreground/80">Years of Experience</div>
                </div>
                <div className="text-right">
                  <div className="font-display text-4xl font-bold">20+</div>
                  <div className="text-primary-foreground/80">Projects Completed</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;