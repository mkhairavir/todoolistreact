import React from "react";

const Todoo = ({ todo, indeks, removeTodo, editTodo, completeTodo }) => {

  console.log( "ini todoo",todo)
  return (
    <div style={{ textDecoration: todo.isComplete ? "line-through" : "" }} className="mt-3">
      <h3>{todo.text}</h3>
      <button onClick={() => completeTodo(indeks)} className="btn btn-success mr-1">Complete</button>
      <button onClick={() => removeTodo(indeks)}className="btn btn-danger mr-1">Remove</button>
      <button onClick={() => editTodo(indeks)}className="btn btn-warning mr-1">Edit</button>
    </div>
  );
};


export default Todoo;