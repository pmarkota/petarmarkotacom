import React from "react";
import { motion } from "framer-motion";
import { useAnimations } from "../hooks/useAnimations";

const skillsData = {
  Frontend: [
    { name: "React", level: 90, experience: "2 years" },
    { name: "TypeScript", level: 85, experience: "1.5 years" },
    { name: "Tailwind CSS", level: 90, experience: "1 year" },
    { name: "Next.js", level: 80, experience: "1 year" },
  ],
  Backend: [
    { name: "ASP.NET", level: 85, experience: "2 years" },
    { name: "C#", level: 90, experience: "2 years" },
    { name: "PostgreSQL", level: 85, experience: "2 years" },
    { name: "Node.js", level: 75, experience: "1 year" },
  ],
  Tools: [
    { name: "Git", level: 90, experience: "2 years" },
    { name: "Docker", level: 75, experience: "1 year" },
    { name: "Azure", level: 80, experience: "1.5 years" },
    { name: "VS Code", level: 95, experience: "2 years" },
  ],
};

const SkillCard = ({ category, skills, delay }) => {
  const { itemVariants } = useAnimations();

  return (
    <motion.div
      variants={itemVariants}
      className="glass-card p-6 relative group"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-primary/50 to-accent/50 rounded-xl opacity-0 group-hover:opacity-100 -z-10 blur-xl transition-opacity duration-500"></div>

      <motion.h3
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: delay * 0.2 }}
        className="text-2xl font-bold gradient-text mb-6"
      >
        {category}
      </motion.h3>

      <div className="space-y-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: delay * 0.2 + index * 0.1 }}
            className="space-y-2"
          >
            <div className="flex justify-between items-center">
              <div>
                <span className="text-text-light font-medium">
                  {skill.name}
                </span>
                <span className="text-xs text-accent-light ml-2">
                  {skill.experience}
                </span>
              </div>
              <span className="text-sm text-text-dark">{skill.level}%</span>
            </div>
            <div className="h-2 bg-surface-dark rounded-full overflow-hidden">
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: skill.level / 100 }}
                transition={{ duration: 1, delay: delay * 0.2 + index * 0.1 }}
                className="skill-bar origin-left h-full"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const { ref, containerVariants } = useAnimations();

  return (
    <section id="skills" className="relative">
      <div className="absolute inset-0 -z-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1 }}
          className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="absolute bottom-0 left-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
        />
      </div>

      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="section-container"
      >
        <motion.h2 variants={containerVariants} className="section-title">
          Skills & Expertise
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skillsData).map(([category, skills], index) => (
            <SkillCard
              key={category}
              category={category}
              skills={skills}
              delay={index}
            />
          ))}
        </div>

        <motion.div variants={containerVariants} className="mt-16">
          <h3 className="text-2xl font-bold text-center gradient-text mb-8">
            Other Technologies
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              "REST APIs",
              "GraphQL",
              "Redis",
              "MongoDB",
              "AWS",
              "CI/CD",
              "Microservices",
              "Testing",
              "Agile",
            ].map((tech, index) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 rounded-full bg-surface-light border border-primary/20
                hover:border-primary/40 transition-colors duration-300"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Skills;
