import React, { useReducer } from "react";
import PropTypes from "prop-types";
import { initialState, reducer, TOGGLE_TODO } from "../reducers";

function Todo({ task, id }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const toggleTodo = (event, todoID) => {
    event.preventDefault();
    dispatch({ type: TOGGLE_TODO, payload: todoID });
  };

  return <div onClick={event=>toggleTodo(event,id)}>{task}</div>;
}

Todo.propTypes = {};

export default Todo;
