import React from "react";

import VisibleTodoList from "./TodoList";
import Footer from "./Footer";
import AddTodo from "./AddTodo";

const TodoApp = () => {
  return (
    <>
      <AddTodo />
      <VisibleTodoList />
      <Footer />
    </>
  );
};

export default TodoApp;
