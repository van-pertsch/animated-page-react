import styled from "styled-components";
import { motion } from "framer-motion";

export const SectionStyle = styled(motion.div)`
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5rem 10rem;
  color: white;
`;
export const Description = styled.div`
  flex: 1;
  padding-right: 5rem;
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.div`
  flex: 1;
  overflow: hidden;
  img {
    max-width: 100%;
    height: auto;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
