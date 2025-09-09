import React from "react";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section id="hero" className="hero">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Creative Digital Solutions
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        We craft modern and engaging experiences for brands worldwide.
      </motion.p>
      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        Get Started
      </motion.button>
    </section>
  );
}

export default Hero;
