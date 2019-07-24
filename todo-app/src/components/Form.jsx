import React, { useState } from "react";
import PropTypes from "prop-types";

function Form({ addTodo }) {
  const [todoInput, setTodoInput] = useState("");
  const handleInput = event => {
    event.preventDefault();
    setTodoInput(event.target.value);
  };
  return (
    <div>
      <form onSubmit={event => addTodo(event, todoInput)}>
        <input
          name="todo"
          placeholder="todo"
          value={todoInput}
          onChange={handleInput}
        />
        <button>add</button>
      </form>
    </div>
  );
}

Form.propTypes = {};

export default Form;
