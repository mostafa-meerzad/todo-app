import { useDispatch, useSelector } from "react-redux";
import { addTodo, removeTodo, removeAll, completeTodo } from "./todoSlice";

import {
  selectActive,
  selectAll,
  selectCompleted,
  selectTodosLeft,
} from "./todoSelectors.js";

import { useState } from "react";
import {
  // OptionsContainer,
  TodoWrapperStyled,
} from "./TodoWrapperStyled";
import Todo from "../../components/todo/Todo";
import TodoInput from "../../components/todoInput/TodoInput";
import Footer from "../../components/footer/Footer";

const TodoWrapper = () => {
  const dispatch = useDispatch();

  const [filter, setFilter] = useState("all");
  // filter the todos based on user selection
  const todos = useSelector((state) => {
    if (filter === "completed") return selectCompleted(state);
    else if (filter === "active") return selectActive(state);
    return selectAll(state);
  });

  const todosLeft = useSelector(selectTodosLeft);

  const handleShowAll = () => setFilter("all");
  const handleShowCompleted = () => setFilter("completed");
  const handleShowActives = () => setFilter("active");
  const handleRemoveAll = () => {
    dispatch(removeAll());
    setFilter("all");
  };

  return (
    <TodoWrapperStyled>
      <TodoInput onComplete={(todo) => dispatch(addTodo(todo))} />
      <ul>
        {todos.map(({ id, task, isCompleted }) => (
          <Todo
            key={id}
            id={id}
            task={task}
            isCompleted={isCompleted}
            onRemove={(id) => dispatch(removeTodo(id))}
            onComplete={(id) => dispatch(completeTodo(id))}
          />
        ))}
        <Footer
          onRemoveAll={handleRemoveAll}
          onShowActives={handleShowActives}
          onShowAll={handleShowAll}
          onShowCompleted={handleShowCompleted}
          todosLeft={todosLeft}
          filter={filter}
        />
      </ul>
    </TodoWrapperStyled>
  );
};
export default TodoWrapper;
