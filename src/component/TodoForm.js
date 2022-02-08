import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import "./TodoForm.css";

import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";

const TodoForm = ({ addTodo }) => {
  const [todo, setTodo] = useState({
    id: "",
    task: "",
    completed: false,
  });

  const handleTaskInputChange = (e) => {
    setTodo({ ...todo, task: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (todo.task.trim()) {
      addTodo({ ...todo, id: uuidv4() });
      setTodo({ ...todo, task: "" });
    }
  };

  return (
    <div className="form-containerr">
      <Form onSubmit={handleSubmit} className="form">
        <Form.Control
          autoFocus
          placeholder="Take a Note"
          className="margin"
          name="task"
          type="text"
          value={todo.task}
          onChange={handleTaskInputChange}
          maxlength="180"
        ></Form.Control>
        <Button variant="primary" className="button" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

export default TodoForm;
