import React from "react";
import styled from "styled-components";
//ANimations
import { motion } from "framer-motion";

const LineOne = () => {
  return (
    <>
      <LineOneSvg
        viewBox="0 0 850 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1.6 }}
          d="M53.1419 1.12999C46.803 44.489 68.837 166.873 26.294 312.148C-16.8462 498.173 -4.6064 537.465 73 630.057"
          stroke="#10ac02"
          strokeOpacity="0.5"
          strokeWidth="5"
        />
      </LineOneSvg>
    </>
  );
};

const LineOneSvg = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
`;

export default LineOne;
