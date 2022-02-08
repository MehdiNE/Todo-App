import React, { useEffect, useState } from "react";
import "./App.css";
import TodoForm from "./component/TodoForm";
import TodoList from "./component/TodoList";
import "bootstrap/dist/css/bootstrap.min.css";

const LOCAL_STORAGE_KEY = "react-todos-list-todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const storageTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    if (storageTodos) {
      setTodos(storageTodos);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([todo, ...todos]);
  };

  function toggleComplete(id) {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  }

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="app-container App">
      <div className="bg-image">
        <img></img>
      </div>
      <main class="container__main">
        <aside class="container__left"></aside>
        <article class="container__middle">
          <TodoForm addTodo={addTodo}></TodoForm>
          <TodoList
            todos={todos}
            toggleComplete={toggleComplete}
            removeTodo={removeTodo}
          ></TodoList>
        </article>
        <nav class="container__right"></nav>
      </main>
    </div>
  );
}

export default App;
