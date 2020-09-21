import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import ToDo from "./components/todo/todo";
import TodoContainer from "./components/context/context";

function App() {
  return (
    <TodoContainer>
      <ToDo />
    </TodoContainer>
  );
}

export default App;
