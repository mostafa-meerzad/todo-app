import { motion } from "framer-motion";
import styled from "styled-components";

export const TodoStyled = styled(motion.li)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-height: 3.5rem;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.background};
  border-bottom: 1px solid ${({ theme }) => theme.borderColor};
  color: ${({ theme }) => theme.text};

  & > p {
    width: 80%;
    word-wrap: break-word;
    text-decoration: ${({ $isCompleted }) =>
      $isCompleted ? "line-through" : "none"};
    color: ${({ $isCompleted, theme }) =>
      $isCompleted ? theme.textCrossed : ""};
  }

`;
