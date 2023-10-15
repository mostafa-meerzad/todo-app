export const selectAll = (state) => state.todos;

export const selectCompleted = (state) => state.todos.filter((td) => td.isCompleted);

export const selectActive = (state) => state.todos.filter((td) => !td.isCompleted);

export const selectTodosLeft = (state) => state.todos.filter((td) => !td.isCompleted).length;
