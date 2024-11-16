import React from "react";
import { motion } from "framer-motion";
import { useAnimations } from "../hooks/useAnimations";
import { Link } from "react-router-dom";
import nutri1 from "../assets/nutri1.png";
import nutri2 from "../assets/nutri2.png";
import nutri3 from "../assets/nutri3.png";
import nutri4 from "../assets/nutri4.png";

const ProjectDetails = () => {
  const { containerVariants, itemVariants } = useAnimations();

  const projectDetails = {
    title: "Nutri - Meal Planning Platform",
    description:
      "A comprehensive full-stack meal planning application designed to help users manage their nutrition and meal planning needs efficiently.",
    timeline: "In Development (Expected Q2 2025)",
    overview: [
      "User-friendly meal planning interface",
      "Personalized recipe recommendations",
      "Automated shopping list generation",
      "Nutritional tracking and analytics",
      "Subscription-based premium features",
    ],
    techStack: {
      Frontend: ["React", "Tailwind CSS", "Framer Motion"],
      Backend: ["ASP.NET Core", "C#", "Entity Framework"],
      Database: ["PostgreSQL", "Redis"],
      Authentication: ["Google OAuth", "JWT"],
      Deployment: ["Azure", "Docker"],
      Payment: ["Stripe"],
    },
    keyFeatures: [
      {
        title: "User Authentication & Profiles",
        description:
          "Secure authentication using Google OAuth with JWT tokens. Users can set dietary preferences and nutritional goals.",
        icon: "🔐",
      },
      {
        title: "Recipe Management",
        description:
          "CRUD operations for recipes with detailed nutritional information and categorization.",
        icon: "📝",
      },
      {
        title: "Meal Planning",
        description:
          "Interactive calendar for meal planning with drag-and-drop functionality.",
        icon: "📅",
      },
      {
        title: "Shopping List Generation",
        description:
          "Automated creation of shopping lists based on selected meal plans.",
        icon: "🛒",
      },
      {
        title: "Subscription Management",
        description:
          "Premium features access through Stripe payment integration.",
        icon: "💳",
      },
    ],
    development: {
      current: "API Development, Stripe Payment Integration",
      next: "Frontend implementation and payment integration",
      progress: 35, // percentage
    },
  };

  return (
    <section className="relative min-h-screen pt-28">
      {/* Floating background elements */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute -top-20 -left-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.3, 1],
          }}
          transition={{ duration: 25, repeat: Infinity }}
          className="absolute -bottom-20 -right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container"
      >
        {/* Back button */}
        <motion.div variants={itemVariants} className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 text-text-dark hover:text-primary transition-colors"
          >
            <motion.span whileHover={{ x: -3 }} className="text-xl">
              ←
            </motion.span>
            <span>Back to Projects</span>
          </Link>
        </motion.div>

        {/* Project Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 text-6xl"
          >
            🥗
          </motion.div>
          <h1 className="text-4xl md:text-5xl font-bold gradient-text mb-6">
            {projectDetails.title}
          </h1>
          <p className="text-xl text-text-dark max-w-3xl mx-auto mb-6">
            {projectDetails.description}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <span className="px-4 py-2 rounded-full bg-primary/10 text-primary-light">
              {projectDetails.timeline}
            </span>
            <motion.div
              className="px-4 py-2 rounded-full bg-accent/10 text-accent-light"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {projectDetails.development.progress}% Complete
            </motion.div>
          </div>
        </motion.div>

        {/* Development Progress */}
        <motion.div
          variants={itemVariants}
          className="glass-card p-8 mb-12 relative overflow-hidden"
        >
          <div className="absolute inset-0 -z-10">
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
              animate={{
                x: ["-100%", "100%"],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
          </div>

          <h2 className="text-2xl font-bold gradient-text mb-6">
            Development Status
          </h2>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-text-dark">Overall Progress</span>
                <span className="text-primary-light">
                  {projectDetails.development.progress}%
                </span>
              </div>
              <div className="h-2 bg-surface-dark rounded-full overflow-hidden">
                <motion.div
                  className="h-full bg-gradient-to-r from-primary to-accent"
                  initial={{ width: 0 }}
                  animate={{ width: `${projectDetails.development.progress}%` }}
                  transition={{ duration: 1, delay: 0.5 }}
                />
              </div>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-primary-light mb-2">
                  Current Phase
                </h3>
                <p className="text-text-dark">
                  {projectDetails.development.current}
                </p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-accent-light mb-2">
                  Next Steps
                </h3>
                <p className="text-text-dark">
                  {projectDetails.development.next}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Project Screenshots */}
        <motion.div
          variants={itemVariants}
          className="glass-card p-8 mb-12 overflow-hidden"
        >
          <h2 className="text-2xl font-bold gradient-text mb-8">
            Project Gallery
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[nutri1, nutri2, nutri3, nutri4].map((image, index) => (
              <motion.div
                key={index}
                className="relative group rounded-xl overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                whileHover={{ scale: 1.02 }}
              >
                <img
                  src={image}
                  alt={`Nutri Project Screenshot ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl"
                />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-t from-background-dark/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center p-4"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                >
                  <p className="text-text-light text-center font-medium">
                    {index === 0 && "Dashboard Overview"}
                    {index === 1 && "Recipe Management"}
                    {index === 2 && "Meal Planning Calendar"}
                    {index === 3 && "Shopping List Generator"}
                  </p>
                </motion.div>

                {/* Glowing border effect on hover */}
                <motion.div
                  className="absolute inset-0 rounded-xl"
                  initial={{ opacity: 0 }}
                  whileHover={{
                    opacity: 1,
                    boxShadow: "0 0 20px rgba(128, 90, 213, 0.3)",
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Image navigation dots */}
          <div className="flex justify-center space-x-2 mt-6">
            {[0, 1, 2, 3].map((_, index) => (
              <motion.div
                key={index}
                className="w-2 h-2 rounded-full bg-primary/50"
                whileHover={{ scale: 1.2 }}
                animate={{
                  scale: [1, 1.2, 1],
                  transition: {
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.2,
                  },
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Tech Stack */}
        <motion.div variants={itemVariants} className="glass-card p-8 mb-12">
          <h2 className="text-2xl font-bold gradient-text mb-6">
            Technology Stack
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Object.entries(projectDetails.techStack).map(
              ([category, techs], categoryIndex) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.1 }}
                  className="space-y-4"
                >
                  <h3 className="text-xl font-semibold text-primary-light">
                    {category}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {techs.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{
                          delay: categoryIndex * 0.1 + techIndex * 0.05,
                        }}
                        whileHover={{ scale: 1.1 }}
                        className="px-3 py-1 text-sm rounded-full bg-surface-light border border-primary/20
                      hover:border-primary/40 transition-colors duration-300"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </motion.div>
              )
            )}
          </div>
        </motion.div>

        {/* Key Features */}
        <motion.div variants={itemVariants} className="mb-12">
          <h2 className="text-2xl font-bold gradient-text mb-8 text-center">
            Key Features
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {projectDetails.keyFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 relative group"
              >
                <motion.div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="flex items-start space-x-4">
                  <motion.span
                    className="text-3xl"
                    animate={{ rotate: [0, 10, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    {feature.icon}
                  </motion.span>
                  <div>
                    <h3 className="text-xl font-semibold text-primary-light mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-text-dark">{feature.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ProjectDetails;
