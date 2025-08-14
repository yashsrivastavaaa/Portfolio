import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profile from "../../assets/photo.jpg";

const About = () => {
  return (
    <section className="min-h-screen py-10 px-4 sm:px-6 lg:px-8 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        {/* Animated Name */}
        <div className="mb-12 text-center">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-600"
          >
            Hi! I am Yash Srivastava
          </motion.h1>


        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-6"
          >
            <h3 className=" font-mono text-3xl font-bold text-white text-center md:text-left">
              About Me
            </h3>
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              Currently pursuing B.Tech in Computer Science and Engineering (Artificial Intelligence). I specialize in modern technologies like React.js, Next.js, TypeScript, JavaScript, React Native and Java, with strong foundations in programming and problem-solving.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed text-justify">
              My academic journey has equipped me with both technical knowledge
              and practical skills to build efficient, user-friendly
              applications. I'm constantly learning and applying new
              technologies to real-world projects.
            </p>

            {/* Resume Button */}
            <a
              href="https://drive.google.com/file/d/1X5qMqoz8CEzZz5gQLydMwojXxopQ77zf/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-6 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold text-sm shadow-lg hover:shadow-blue-500/40 transition-transform transform hover:scale-105"
            >
              View Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex justify-center"
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-blue-400 shadow-lg shadow-blue-500/30 transition-all duration-500 hover:scale-105  hover:shadow-blue-500/60">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-blue-500 mix-blend-overlay opacity-10"></div>
            </div>
          </motion.div>
        </div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold mb-8 text-center text-blue-300">
            Education
          </h3>

          <div className="space-y-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 p-5 rounded-xl border border-gray-700 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-xl font-semibold">
                    Bachelor of Technology in Computer Science
                  </h4>
                  <p className="text-blue-300">
                    G.L. Bajaj Institute of Technology and Management, Greater
                    Noida, U.P
                  </p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    Nov 2022 - June 2026(Expected)
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-xl font-semibold">Intermediate (12th)</h4>
                  <p className="text-blue-300">
                    Vanita Public School, Varanasi, U.P
                  </p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    2021 - 2022
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h4 className="text-xl font-semibold">
                    Matriculation (10th)
                  </h4>
                  <p className="text-blue-300">Vanita Public School, Varanasi, U.P</p>
                </div>
                <div className="mt-2 md:mt-0 md:text-right">
                  <span className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-full text-sm">
                    2019 - 2020
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
