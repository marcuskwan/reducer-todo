import React, { useReducer, useState } from "react";
import PropTypes from "prop-types";
import { initialState, reducer, ADD_TODO } from "../reducers";

function Form(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [todoInput, setTodoInput] = useState("");
  const addTodo = (event, newTodo) => {
    event.preventDefault();
    dispatch({ type: ADD_TODO, payload: newTodo });
  };
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
