import React from "react";
import styled from "styled-components";
//ANimations
import { motion } from "framer-motion";

const LineTwo = () => {
  return (
    <>
      <LineTwoSvg
        viewBox="0 0 850 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1.8 }}
          d="M40.5 1.00002C45.3489 42.8649 -23.4788 253.948 9.46035 394.275C42.7566 573.933 79.5595 602.346 18.5 691.5"
          stroke="#1f9414"
          strokeOpacity="0.5"
          strokeWidth="4"
        />
      </LineTwoSvg>
    </>
  );
};

const LineTwoSvg = styled.svg`
  position: absolute;
  left: 2%;
  top: 0;
  z-index: -1;
`;

export default LineTwo;
