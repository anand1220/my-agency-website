import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowUpRight } from "lucide-react";
import portfolioWeb from "@/assets/portfolio-web.jpg";
import portfolioSocial from "@/assets/portfolio-social.jpg";
import portfolioDesign from "@/assets/portfolio-design.jpg";
import portfolioBrand from "@/assets/portfolio-brand.jpg";

const categories = ["All", "Websites", "Social Media", "Design", "Branding"];

const projects = [
  {
    id: 1,
    title: "TechFlow SaaS Platform",
    category: "Websites",
    image: portfolioWeb,
    client: "TechFlow Inc.",
    results: "+180% conversions",
  },
  {
    id: 2,
    title: "FitLife Social Campaign",
    category: "Social Media",
    image: portfolioSocial,
    client: "FitLife Gym",
    results: "+45K followers in 3 months",
  },
  {
    id: 3,
    title: "YouTube Channel Rebrand",
    category: "Design",
    image: portfolioDesign,
    client: "Creator Academy",
    results: "+220% CTR on thumbnails",
  },
  {
    id: 4,
    title: "Luxury Real Estate Brand",
    category: "Branding",
    image: portfolioBrand,
    client: "Premier Properties",
    results: "Complete brand identity",
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mt-3 mb-4">
            Featured <span className="text-gradient">Case Studies</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Real results for real clients. See how we've helped businesses
            transform their digital presence.
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category
                  ? "bg-gradient-accent text-accent-foreground shadow-accent"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
              >
                <div className="group relative overflow-hidden rounded-2xl bg-card border border-border">
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <a
                          href="#"
                          className="inline-flex items-center gap-2 text-primary-foreground font-semibold"
                        >
                          View Project
                          <ArrowUpRight className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <span className="text-accent text-sm font-medium">
                      {project.category}
                    </span>
                    <h3 className="font-display text-xl font-bold text-foreground mt-1 mb-2">
                      {project.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">
                        {project.client}
                      </span>
                      <span className="text-success font-semibold">
                        {project.results}
                      </span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-xl hover:bg-primary/90 transition-all hover:gap-3"
          >
            View All Projects
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;