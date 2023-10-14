export const selectAll = (state) => state.todos;

export const selectCompleted = (state) => state.todos.filter((td) => td.done);

export const selectActive = (state) => state.todos.filter((td) => !td.done);

export const selectTodosLeft = (state) => state.todos.filter((td) => !td.done).length;
