import React from "react";
//PAge components
import AboutSection from "../components/AboutSection.js";
import ServicesSection from "../components/ServicesSection.js";
import FaqSection from "../components/FaqSection";

//ANimations
import { motion } from "framer-motion";
import { pageAnimation } from "../animation";

const AboutUs = () => {
  return (
    <motion.div
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <AboutSection />
      <ServicesSection />
      <FaqSection />
    </motion.div>
  );
};

export default AboutUs;
