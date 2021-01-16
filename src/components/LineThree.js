import React from "react";
import styled from "styled-components";
//ANimations
import { motion } from "framer-motion";

const LineThree = () => {
  return (
    <>
      <LineThreeSvg
        viewBox="0 0 850 450"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.path
          initial={{ pathLength: 0, pathOffset: 1 }}
          animate={{ pathLength: 1, pathOffset: 0 }}
          transition={{ duration: 1.5 }}
          d="M38.5 0.999984C49.5 53.5 10 201.5 84.5 377.5C159.867 602.817 138.057 650.309 0.5 762"
          stroke="#38d32a"
          strokeOpacity="0.5"
          strokeWidth="6"
        />
      </LineThreeSvg>
    </>
  );
};

const LineThreeSvg = styled.svg`
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
`;

export default LineThree;
