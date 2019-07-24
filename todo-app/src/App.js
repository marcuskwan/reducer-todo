import React, { useReducer } from "react";
import Form from "./components/Form";
import Todos from "./components/Todos";
import {
  initialState,
  reducer,
  ADD_TODO,
  TOGGLE_TODO,
  CLEAR_TODOS,
} from "./reducers";
import "./App.css";

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const addTodo = (event, newTodo) => {
    event.preventDefault();
    dispatch({ type: ADD_TODO, payload: newTodo });
  };
  const toggleTodo = (event, todoID) => {
    event.preventDefault();
    dispatch({ type: TOGGLE_TODO, payload: todoID });
  };

  const clearTodos = event => {
    event.preventDefault();
    dispatch({ type: CLEAR_TODOS });
  };
  return (
    <div className="App">
      <Form addTodo={addTodo}/>
      <Todos state={state} clearTodos={clearTodos} toggleTodo={toggleTodo} />
    </div>
  );
}

export default App;
