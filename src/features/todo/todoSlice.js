import { v4 as uuidv4 } from "uuid";
import { createSlice } from "@reduxjs/toolkit";

const initialState = [];
export const todoSlice = createSlice({
  name: "todo",
  initialState:{
    todos:[]
  },
  reducers: {
    addTodo: (state, action) => {
      const todo = {
        id: uuidv4(),
        task: action.payload,
        done: false,
      };

      state.todos.unshift(todo);
    },

    completeTodo: (state, action) => {
      const todo = state.todos.find((td) => {
        if (td.id === action.payload) return td;
      });

      if (todo) todo.done = true;

      state.todos = [...state.todos];
    },

    removeTodo: (state, action) => {
      const todo = state.todos.find((td) => {
        if (td.id === action.payload) return td;
      });

      const todoIndex = state.todos.indexOf(todo);

      state.todos.splice(todoIndex, 1);

      state.todos = [...state.todos];
    },
    removeAll: (state) => {
      state.todos = initialState;
    },
  },
});

export const { addTodo, completeTodo, removeAll, removeTodo } =
  todoSlice.actions;

export default todoSlice.reducer;
