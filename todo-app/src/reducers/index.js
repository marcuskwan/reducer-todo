// const uuidv4 = require("uuid/v4");
export const ADD_TODO = "ADD_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const CLEAR_TODOS = "CLEAR_TODOS";

export const initialState = {
  todos: [
    {
      task: "Learn about reducers",
      completed: false,
      id: Date.now(),
    },
  ],
};

export const reducer = (state, action) => {
  switch (action.type) {
    case ADD_TODO:
      const newTaskName = action.payload;
      const newTodo = {
        task: newTaskName,
        completed: false,
        id: Date.now(),
      };
      return {
        todos: [...state.todos, newTodo],
      };
    case TOGGLE_TODO:
      const id = action.payload;
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo,
        ),
      };
    case CLEAR_TODOS:
      return {
        ...state,
        todos: state.todos.filter(todo => !todo.completed),
      };
    default:
      return state;
  }
};
