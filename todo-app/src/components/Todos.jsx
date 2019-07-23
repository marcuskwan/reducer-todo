import React, { useReducer } from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";
import { initialState, reducer, CLEAR_TODOS } from "../reducers";

function Todos() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const clearTodos = event => {
    event.preventDefault();
    dispatch({ type: CLEAR_TODOS });
  };
  return (
    <div>
      {state.todos.map(todo => (
        <Todo key={todo.id} task={todo.task} id={todo.id} />
      ))}
      <button onClick={clearTodos}>clear</button>
    </div>
  );
}

Todos.propTypes = {};

export default Todos;
