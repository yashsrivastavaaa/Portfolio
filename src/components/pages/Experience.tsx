import React from "react";
import { motion } from "framer-motion";
import { FiBriefcase } from "react-icons/fi";
import { experience } from "../../Data";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-10 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white"
    >
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
              Experience
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and real-world experience
          </p>
        </motion.div>

        {/* Experience Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {experience.map((exp) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: exp.id * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-gray-800/50 rounded-xl overflow-hidden border border-gray-700 hover:border-blue-400 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Header */}
                <div className="flex items-start mb-4">
                  <FiBriefcase className="text-3xl text-blue-400 mr-3" />
                  <div>
                    <h3 className="text-2xl font-bold">{exp.role}</h3>
                    <p className="text-gray-400 text-sm">
                      {exp.company} • {exp.location}
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 mb-5">{exp.description}</p>

                {/* Tech Stack */}
                <div className="mt-auto">
                  <h4 className="text-sm font-semibold text-blue-300 mb-2 uppercase tracking-wider">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 rounded-full text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">
            Want to know more about my work or collaborate?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center px-6 py-3 rounded-md text-white bg-gradient-to-r from-purple-600 to-blue-500 hover:from-purple-700 hover:to-blue-600 transition-all duration-300"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience;
