import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

let savedTodo;
let initialTodo = [];

try {
  savedTodo = JSON.parse(localStorage.getItem("todo"));
  if (savedTodo) initialTodo = savedTodo;
} catch (e) {
  alert("Something went wrong. Could not load Todos from localStorage!");
  console.log("something went wrong: ", e);
}

const saveTodos = (todos) => {
  const stringifiedTodo = JSON.stringify(todos);
  localStorage.setItem("todo", stringifiedTodo);
};

export const todoSlice = createSlice({
  name: "todo",
  initialState: {
    todos: initialTodo,
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuidv4(),
        task: action.payload,
        isCompleted: false,
      };

      state.todos.unshift(todo);
      console.log(state.todos);
      saveTodos(state.todos);
    },

    completeTodo: (state, action) => {
      const todo = state.todos.find((td) => {
        if (td.id === action.payload) return td;
      });

      if (todo) todo.isCompleted = true;

      state.todos = [...state.todos];
      saveTodos(state.todos);
    },

    removeTodo: (state, action) => {
      const todo = state.todos.find((td) => {
        if (td.id === action.payload) return td;
      });

      const todoIndex = state.todos.indexOf(todo);

      state.todos.splice(todoIndex, 1);

      state.todos = [...state.todos];
      saveTodos(state.todos);
    },
    removeAll: (state) => {
      // set todos to "[]" in order to clear all todos and also set localStorage to "[]"

      state.todos = [];
      saveTodos([]);
    },
  },
});

export const { addTodo, completeTodo, removeAll, removeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
