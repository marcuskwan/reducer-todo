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
      const newTodo = {
        task: action.payload,
        completed: false,
        id: Date.now(),
      };
      console.log(newTodo)
      return {
        todos: [...state.todos, newTodo],
      };
    default:
      return state;
  }
};
