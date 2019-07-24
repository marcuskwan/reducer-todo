import React from "react";
import PropTypes from "prop-types";
import Todo from "./Todo";

function Todos({state,toggleTodo,clearTodos}) {
  return (
    <div>
      {state.todos.map(todo => (
        <Todo key={todo.id} task={todo.task} id={todo.id} toggleTodo={toggleTodo}/>
      ))}
      <button onClick={clearTodos}>clear</button>
    </div>
  );
}

Todos.propTypes = {};

export default Todos;
