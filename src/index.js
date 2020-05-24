import React from "react";
import ReactDom from "react-dom";
import "./index.css";
import TodoList from "./components/TodoList";

let destination = document.querySelector("#container");

ReactDom.render(
  <div>
    <TodoList />
  </div>,
  destination
);
