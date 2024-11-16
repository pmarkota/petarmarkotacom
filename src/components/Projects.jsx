import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAnimations } from "../hooks/useAnimations";

const Projects = () => {
  const { containerVariants, itemVariants } = useAnimations();

  return (
    <section id="projects" className="relative">
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="section-container"
      >
        <motion.h2 variants={itemVariants} className="section-title">
          Featured Project
        </motion.h2>

        <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
          <motion.div
            className="glass-card p-8 relative overflow-hidden"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            {/* Project Header */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 space-y-4 md:space-y-0">
              <h3 className="text-3xl font-bold gradient-text">
                Nutri - Meal Planning Platform
              </h3>
              <span className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary-light">
                In Development
              </span>
            </div>

            {/* Project Description */}
            <p className="text-text-dark text-lg leading-relaxed mb-8">
              A comprehensive full-stack meal planning application with recipe
              management, nutritional tracking, and shopping list generation.
              Built with modern technologies and best practices.
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-8">
              {[
                "React",
                "ASP.NET Core",
                "PostgreSQL",
                "C#",
                "Entity Framework",
                "Google OAuth",
                "Stripe",
                "Azure",
              ].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="px-3 py-1 text-sm rounded-full bg-primary/10 text-primary-light"
                >
                  {tech}
                </motion.span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-wrap gap-4">
              <button
                className="btn-secondary text-sm opacity-50 cursor-not-allowed inline-flex items-center space-x-2"
                disabled
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
                <span>Code coming soon</span>
              </button>
              <Link
                to="/project/nutri"
                className="btn-primary inline-flex items-center space-x-2"
              >
                <span>View Project Details</span>
                <span className="transform group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
            </div>
          </motion.div>

          {/* Coming Soon Section */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 space-y-6"
          >
            <div className="inline-block">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                More Projects Coming Soon
              </h3>
              <div className="flex justify-center gap-2">
                <span className="animate-bounce delay-100">•</span>
                <span className="animate-bounce delay-200">•</span>
                <span className="animate-bounce delay-300">•</span>
              </div>
            </div>
            <p className="text-text-dark text-lg max-w-2xl mx-auto">
              Currently focused on developing Nutri. More exciting projects will
              be showcased here soon!
            </p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Projects;
