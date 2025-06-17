import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900  border-gray-600 text-gray-400">
      {/* Copyright */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
        className="border-t border-gray-800 font-bold mt-12 pt-8 text-sm text-center"
      >
        <p>© {currentYear} Yash Srivastava. All rights reserved.</p>
      </motion.div>
      <div className="border-t border-gray-700 mt-6  text-sm text-center"></div>
    </footer>
  );
};

export default Footer;
