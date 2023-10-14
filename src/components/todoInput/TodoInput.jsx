import { useState } from "react";
import TodoInputStyled from "./TodoInputStyled";
import Check from "../Check";
import IconButton from "../iconButton/IconButton";

const TodoInput = ({ onComplete }) => {
  const [todo, setTodo] = useState("");
  const handleComplete = (todo) => onComplete(todo);
  
  return (
    <TodoInputStyled>
      <IconButton onClick={() =>{
        setTodo("");
        handleComplete(todo)
      }}>
        <Check />
      </IconButton>
      <input
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        placeholder="enter your todo..."
      />
    </TodoInputStyled>
  );
};
export default TodoInput;
