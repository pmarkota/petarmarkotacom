import React from "react";
import { motion } from "framer-motion";
import { useAnimations } from "../hooks/useAnimations";

const TimelineItem = ({ year, title, company, description, delay }) => {
  const { itemVariants } = useAnimations();

  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      transition={{ delay: delay * 0.2 }}
      className="relative pl-8 pb-12 group"
    >
      {/* Timeline line */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        transition={{ duration: 0.5, delay: delay * 0.2 }}
        className="absolute left-0 top-0 w-0.5 bg-gradient-to-b from-primary to-accent"
      />
      {/* Timeline dot */}
      <motion.div
        initial={{ scale: 0 }}
        whileInView={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, delay: delay * 0.2 }}
        className="absolute left-0 top-0 w-3 h-3 -translate-x-1/3 rounded-full bg-primary
        ring-4 ring-background-dark group-hover:scale-150 transition-transform duration-300"
      />

      <motion.div
        whileHover={{ x: 10 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="glass-card p-6 ml-4"
      >
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: delay * 0.2 + 0.2 }}
          className="text-sm text-accent font-medium"
        >
          {year}
        </motion.span>
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay * 0.2 + 0.3 }}
          className="text-xl font-bold mt-1"
        >
          {title}
        </motion.h3>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay * 0.2 + 0.4 }}
          className="text-primary-light font-medium"
        >
          {company}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: delay * 0.2 + 0.5 }}
          className="mt-2 text-text-dark"
        >
          {description}
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

const Resume = () => {
  const { containerVariants, itemVariants } = useAnimations();

  return (
    <section id="resume" className="relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1 }}
          className="absolute left-1/4 top-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.2, scale: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="absolute right-1/4 bottom-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
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
          Experience & Education
        </motion.h2>

        <motion.div
          variants={itemVariants}
          className="flex justify-center mb-12"
        >
          <motion.a
            href="/resume.pdf"
            className="btn-primary inline-flex items-center space-x-2 group"
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Download Full Resume</span>
            <motion.svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              animate={{ y: [0, 3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </motion.svg>
          </motion.a>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold gradient-text mb-8">
              Work Experience
            </h3>
            <div className="space-y-6">
              <TimelineItem
                year="2023 - 2024 (current)"
                title="Backend Developer"
                company="Orbico Group d.o.o"
                description="Led backend development for enterprise applications, optimized database performance, and implemented secure API architectures."
                delay={0}
              />
            </div>
          </motion.div>

          {/* Education */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold gradient-text mb-8">Education</h3>
            <div className="space-y-6">
              <TimelineItem
                year="2021 - 2024. (Expected)"
                title="Bachelor's in Computer Science"
                company="University of Algebra"
                description="Focused on software engineering, algorithms, and database systems. Graduated with honors. "
                delay={0.4}
              />
              <TimelineItem
                year="2023"
                title="Advanced Certifications"
                company="Span Cyber Security Center"
                description="CST-02 SECURE CODING. - This certification is designed to provide participants with the knowledge and skills to write secure code and identify and mitigate security vulnerabilities."
                delay={0.6}
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
