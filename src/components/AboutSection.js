import React from "react";
import home1 from "../img/home1.png";
//ANimations
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";
import Wave from "./Wave";

//Style
import { SectionStyle, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <SectionStyle>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work to make</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              your <span>dreams</span> come
            </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>true</motion.h2>
          </Hide>
        </motion.div>
        <motion.p variants={fade}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati,
          necessitatibus. Possimus unde a porro itaque.
        </motion.p>
        <motion.button variants={fade}>Contact us</motion.button>
      </Description>
      <Image>
        <motion.img
          variants={photoAnim}
          initial="hidden"
          animate="show"
          src={home1}
          alt="camera guy"
        />
      </Image>
      <Wave />
    </SectionStyle>
  );
};

//Styled Component

export default AboutSection;
