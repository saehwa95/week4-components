import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { addTodo } from "../redux/modules/todos";

const Create = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const todoId = useSelector((state) => state.todos.todos);
  const dispatch = useDispatch();

  // 제출을 위한 함수
  const todoSubmit = (e) => {
    e.preventDefault();
    dispatch(
      addTodo({
        id: todoId.length + 1,
        title,
        content,
        isDone: false,
      })
    );
  };

  //title 입력을 위한 함수
  const inputTitle = (e) => {
    setTitle(e.target.value);
  };

  //content 입력을 위한 함수
  const inputContent = (e) => {
    setContent(e.target.value);
  };

  return (
    <Wrap>
      <form onSubmit={todoSubmit}>
        <div>
          <span>제목</span>
          <input type="text" name="title" value={title} onChange={inputTitle} />
        </div>
        <div>
          <span>내용</span>
          <input
            type="text"
            name="content"
            value={content}
            onChange={inputContent}
          />
        </div>
        <button type="submit">추가하기</button>
      </form>
    </Wrap>
  );
};

export default Create;

const Wrap = styled.div`
  display: flex;
`;
