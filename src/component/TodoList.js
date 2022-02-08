import React from "react";
import Todo from "./Todo";

import "./TodoList.css";

const TodoList = ({ todos, toggleComplete, removeTodo }) => {
  return (
    <ul className="todo-list" style={{ paddingLeft: 0 }}>
      {todos.map((todo) => (
        <div>
          {" "}
          <Todo
            key={todo.id}
            todo={todo}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          ></Todo>
          <div
            style={{
              borderTop: "2px solid #fff ",
              marginLeft: 20,
              marginRight: 20,
              opacity: "0.4",
            }}
          ></div>
        </div>
      ))}
    </ul>
  );
};

export default TodoList;
