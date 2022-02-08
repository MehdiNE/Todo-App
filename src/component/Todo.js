import React from "react";
import "./Todo.css";
import { BsFillTrashFill } from "react-icons/bs";

const Todo = ({ todo, toggleComplete, removeTodo }) => {
  const handleCheckboxClick = () => {
    toggleComplete(todo.id);
  };

  const handleRemoveClick = () => {
    removeTodo(todo.id);
  };

  return (
    <div className="todo solid">
      <div className="checkbox-container">
        <input
          type="checkbox"
          onClick={handleCheckboxClick}
          className="checkbox"
        ></input>
      </div>
      <li
        className="list"
        style={{
          textDecoration: todo.completed ? "line-through" : null,
          opacity: todo.completed ? "0.7" : null,
        }}
      >
        {todo.task}
      </li>
      <div>
        <BsFillTrashFill onClick={handleRemoveClick} className="remove-icon" />
      </div>
    </div>
  );
};

export default Todo;
