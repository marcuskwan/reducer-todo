import React from "react";
import PropTypes from "prop-types";

function Todo({ task, id, toggleTodo }) {
  return <div onClick={event=>toggleTodo(event,id)}>{task}</div>;
}

Todo.propTypes = {};

export default Todo;
