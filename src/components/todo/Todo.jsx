import Check from "../Check";
import Cross from "../Cross";
import IconButton from "../iconButton/IconButton";
import { TodoStyled } from "./TodoStyled";

const Todo = ({ task, id, done, onRemove, onComplete }) => {
  const handleRemove = (id) => onRemove(id);
  const handleComplete = (id) => onComplete(id);
  return (
    <TodoStyled>
      <IconButton aria-label="complete" onClick={() => handleComplete(id)}>
        {done && <Check />}
      </IconButton>
      <p>{task}</p>
      <IconButton aria-label="remove" onClick={() => handleRemove(id)}>
        <Cross />
      </IconButton>
    </TodoStyled>
  );
};
export default Todo;
