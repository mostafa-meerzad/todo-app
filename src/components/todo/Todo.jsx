import { useState } from "react";
import Cross from "../Cross";
import CheckButton from "../iconButton/CheckButton";
import CrossButton from "../iconButton/CrossButton";
import { TodoStyled } from "./TodoStyled";
import { motion } from "framer-motion";

const Todo = ({ task, id, isCompleted, onRemove, onComplete }) => {
  const [isHovered, setIsHovered] = useState(false);
  const handleRemove = () => onRemove(id);
  const handleComplete = () => onComplete(id);

  const taskChars = task.split("");

  return (
    <TodoStyled
      $isCompleted={isCompleted}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0.0 }}
      transition={{ duration: 0.25 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <CheckButton
        aria-label="complete"
        onClick={handleComplete}
        showTick={isCompleted}
      ></CheckButton>
      <p>
        {taskChars.map((char, index) => {
          if (isCompleted)
            return (
              <motion.span
                key={index + char}
                initial={{ opacity: 0.1, textDecoration: "none" }}
                animate={{ opacity: 1, textDecoration: "line-through" }}
                transition={{ delay: index * 0.02 }}
              >
                {char}
              </motion.span>
            );

          return <span key={index + char}>{char}</span>;
        })}
      </p>
      <CrossButton aria-label="remove" onClick={handleRemove} hover={isHovered}>
        <Cross />
      </CrossButton>
    </TodoStyled>
  );
};
export default Todo;
