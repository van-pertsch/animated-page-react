import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

import plant from "../img/plant.png";
import sunflower from "../img/sunflower.png";
import flower3 from "../img/flower3.png";

//ANimations
import { motion } from "framer-motion";
import {
  pageAnimation,
  fade,
  photoAnim,
  lineAnim,
  slider,
  sliderContainer,
} from "../animation";
import { useScroll } from "../components/useScroll";

const OurWork = () => {
  const [element, controls] = useScroll();
  const [element2, controls2] = useScroll();
  return (
    <StyledWork
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
    >
      <motion.div variants={sliderContainer}>
        <Frame1 variants={slider}></Frame1>
        <Frame2 variants={slider}></Frame2>
        <Frame3 variants={slider}></Frame3>
        <Frame4 variants={slider}></Frame4>
      </motion.div>
      <Movie>
        <motion.h2 variants={fade} initial="hidden" animate="show">
          A Plant
        </motion.h2>
        <motion.div
          variants={lineAnim}
          initial="hidden"
          animate="show"
          className="line"
        ></motion.div>
        <Link to="/work/the-plant">
          <Hide>
            <motion.img
              variants={photoAnim}
              initial="hidden"
              animate="show"
              src={plant}
              alt="plant"
            />
          </Hide>
        </Link>
      </Movie>
      <Movie>
        <h2>Sunflower</h2>
        <div className="line"></div>
        <Link to="/work/sunflower">
          <img src={sunflower} alt="sunflower" />
        </Link>
      </Movie>
      <Movie>
        <h2>Troll</h2>
        <div className="line"></div>
        <Link to="/work/the-troll">
          <img src={flower3} alt="Troll" />
        </Link>
      </Movie>
    </StyledWork>
  );
};

const StyledWork = styled(motion.div)`
  min-height: 100vh;
  overflow: hidden;
  padding: 5rem 8rem;
  display: flex;
  justify-content: space-between;

  h2 {
    padding: 1rem 0rem;
    text-transform: uppercase;
  }
`;

const Movie = styled(motion.div)`
  width: 28%;

  padding-bottom: 10rem;
  .line {
    height: 0.5rem;
    background: #10ac02;
    margin-bottom: 3rem;
  }
  img {
    width: auto;
    height: 70vh;
    object-fit: fill;
  }
`;
const Hide = styled.div`
  overflow: hidden;
`;

//Frame Animation
const Frame1 = styled(motion.div)`
  position: fixed;
  left: 0;
  top: 10%;
  width: 100%;
  height: 100%;
  background: #fffebf;
  z-index: 2;
`;
const Frame2 = styled(Frame1)`
  background: #6fffff;
`;
const Frame3 = styled(Frame1)`
  background: #7687d3;
`;
const Frame4 = styled(Frame1)`
  background: #ee6fff;
`;

export default OurWork;
