import React from "react";
import { useSelector } from "react-redux";
import Card from "../elements/Card";

const TodoList = () => {
  const todos = useSelector((state) => state.todos.todos);

  return (
    <div>
      <h1>해결하자</h1>
      {todos.map((todo) => {
        return !todo?.isDone ? (
          <Card key={`card${todo.id}`} todo={todo} />
        ) : null;
      })}

      <h1>해결했다</h1>
      {todos.map((todo) => {
        return todo?.isDone ? (
          <Card key={`card${todo.id}`} todo={todo} />
        ) : null;
      })}
    </div>
  );
};

export default TodoList;
