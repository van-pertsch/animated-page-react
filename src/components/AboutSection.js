import React from "react";
import flower1 from "../img/flower1.png";
//ANimations
import { motion } from "framer-motion";
import { titleAnim, fade, photoAnim } from "../animation";

import LineOne from "./LineOne";
import LineTwo from "./LineTwo";
import LineThree from "./LineThree";

//Style
import { SectionStyle, Description, Image, Hide } from "../styles";

const AboutSection = () => {
  return (
    <SectionStyle>
      <Description>
        <motion.div className="title">
          <Hide>
            <motion.h2 variants={titleAnim}>We work </motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>to make your</motion.h2>
          </Hide>
          <Hide>
            <motion.h2 variants={titleAnim}>
              <span>plants</span> grow.
            </motion.h2>
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
          src={flower1}
          alt="camera guy"
        />
      </Image>

      <LineOne />
      <LineTwo />
      <LineThree />
    </SectionStyle>
  );
};

//Styled Component

export default AboutSection;
