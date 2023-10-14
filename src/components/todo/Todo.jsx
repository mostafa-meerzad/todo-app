import Check from "../Check";
import Cross from "../Cross";
import CheckButton from "../iconButton/CheckButton";
import CrossButton from "../iconButton/CrossButton";
import { TodoStyled } from "./TodoStyled";

const Todo = ({ task, id, done, onRemove, onComplete }) => {
  const handleRemove = (id) => onRemove(id);
  const handleComplete = (id) => onComplete(id);
  return (
    <TodoStyled>
      <CheckButton aria-label="complete" onClick={() => handleComplete(id)}>
      </CheckButton>
      <p>{task}</p>
      <CrossButton aria-label="remove" onClick={() => handleRemove(id)}>
        <Cross />
      </CrossButton>
    </TodoStyled>
  );
};
export default Todo;
