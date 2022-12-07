import React from "react";
import Create from "../components/Create";
import Header from "../components/Header";
import TodoList from "../components/TodoList";

const Main = () => {
  return (
    <>
      <Header />
      <Create />
      <TodoList />
    </>
  );
};

export default Main;
