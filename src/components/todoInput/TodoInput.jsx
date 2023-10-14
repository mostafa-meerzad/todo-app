import { useState } from "react";
import TodoInputStyled from "./TodoInputStyled";
import Check from "../Check";
import CheckButton from "../iconButton/CheckButton";

const TodoInput = ({ onComplete }) => {
  const [todo, setTodo] = useState("");
  const handleComplete = (todo) => onComplete(todo);

  return (
    <TodoInputStyled>
      <CheckButton
      ariaLabel={"add-todo"}
        onClick={() => {
          setTodo("");
          handleComplete(todo);
        }}
      />

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
