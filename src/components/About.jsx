import React from "react";
import { motion } from "framer-motion";
import { useAnimations } from "../hooks/useAnimations";

const About = () => {
  const { containerVariants, itemVariants } = useAnimations();

  return (
    <section id="about" className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
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
          About Me
        </motion.h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="glass-card p-6 space-y-4"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold gradient-text">
                Professional Journey
              </h3>
              <p className="text-lg text-text-dark leading-relaxed">
                Former Backend Developer at Orbico Group d.o.o, where I honed my
                skills in building scalable enterprise applications. My passion
                lies in solving complex problems through elegant code solutions.
              </p>
              <p className="text-lg text-text-dark leading-relaxed">
                Currently focused on full-stack development, bringing together
                modern frontend technologies with robust backend architectures
                to create seamless user experiences.
              </p>
            </motion.div>

            <motion.div
              className="glass-card p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Tech Philosophy
              </h3>
              <p className="text-lg text-text-dark leading-relaxed">
                I believe in writing clean, maintainable code that solves
                real-world problems. My approach combines technical excellence
                with creative problem-solving.
              </p>
            </motion.div>
          </motion.div>

          <motion.div variants={itemVariants} className="space-y-6">
            <motion.div
              className="glass-card p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Key Achievements
              </h3>
              <ul className="space-y-4">
                {[
                  "Developed a comprehensive REST API from scratch for enterprise resource management",
                  "Implemented secure authentication and authorization systems using JWT and OAuth",
                  "Optimized database queries resulting in 40% faster response times",
                  "Created detailed technical documentation and API specifications",
                ].map((achievement, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start space-x-3"
                  >
                    <motion.span
                      className="text-accent"
                      whileHover={{ scale: 1.2, rotate: 180 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                    </motion.span>
                    <span className="text-lg text-text-dark">
                      {achievement}
                    </span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="glass-card p-6"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <h3 className="text-2xl font-bold gradient-text mb-4">
                Certifications
              </h3>
              <div className="space-y-3">
                {[
                  "Secure Coding Practices : CST-02 Secure Coding",
                  "Full Stack Development Specialization",
                ].map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ x: 10 }}
                    className="flex items-center space-x-2 text-text-dark"
                  >
                    <span className="text-primary">▹</span>
                    <span>{cert}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default About;
