import { useState } from "react";
import TodoInputStyled from "./TodoInputStyled";
import CheckButton from "../iconButton/CheckButton";

const TodoInput = ({ onComplete }) => {
  const [todo, setTodo] = useState("");
  const [isCompleted, setIsCompleted] = useState(false);
  const [isTodoEmpty, setIsTodoEmpty] = useState(false);

  const handleComplete = () => {
    if (todo.length > 0) {
      onComplete(todo);
      setIsCompleted(true);
      setIsTodoEmpty(false);
      setTodo("");
      setTimeout(() => {
        setIsCompleted(false);
      }, 700);
    }
    setIsTodoEmpty(true);
  };
  const handleKeyDown = (e) => {
    if (e.key.toLowerCase() === "enter") handleComplete();
  };
  return (
    <TodoInputStyled $empty={isTodoEmpty}>
      <CheckButton
        ariaLabel={"add-todo"}
        onClick={handleComplete}
        check={isCompleted}
      />

      <input
        autoFocus={true}
        type="text"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="enter your todo..."
      />
    </TodoInputStyled>
  );
};
export default TodoInput;
