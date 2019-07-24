import React from "react";
import PropTypes from "prop-types";

function Todo({ task, completed, id, toggleTodo }) {
  return <div className={completed && "completed"}onClick={event=>toggleTodo(event,id)}>{task}</div>;
}

Todo.propTypes = {};

export default Todo;
