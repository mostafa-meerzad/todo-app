import styled from "styled-components";
import { motion } from "framer-motion";
const CrossButtonStyled = styled(motion.button)`
  width: 1rem;
  height: 1rem;
  padding: 0;
  background-color: transparent;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (hover: none) {
    opacity: 1 !important;
  }
`;

export default CrossButtonStyled;
