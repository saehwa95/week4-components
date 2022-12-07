import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { deleteTodo, updateTodo } from "../redux/modules/todos";

const Card = ({ todo }) => {
  const dispatch = useDispatch();

  const deleteBtn = () => {
    dispatch(deleteTodo(todo.id));
  };

  const editBtn = () => {
    dispatch(updateTodo(todo.id));
  };
  return (
    <CardWrap>
      <Link to={`detail/${todo.id}`}>상세보기</Link>
      <h1>{todo.title}</h1>
      <div>{todo.content}</div>
      <div>
        <button onClick={deleteBtn}>삭제하기</button>
        <button onClick={editBtn}>
          {todo.isDone ? "취소하기" : "완료하기"}
        </button>
      </div>
    </CardWrap>
  );
};

export default Card;

const CardWrap = styled.div`
  border: 1px solid green;
`;
