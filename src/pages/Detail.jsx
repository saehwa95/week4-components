import React from "react";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";

const Detail = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const todoList = useSelector((state) => state.todos.todos);
  const detailTodo = todoList.filter((todo) => todo.id === +id)[0];

  return (
    <div>
      <div>ID : {detailTodo.id}</div>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        이전으로
      </button>
      <h1>{detailTodo.title}</h1>
      <span>{detailTodo.content}</span>
    </div>
  );
};

export default Detail;
