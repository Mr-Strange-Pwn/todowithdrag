import React, { useContext, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { context } from "../context/context";

const ToDo = () => {
  const [input, setinput] = useState("");
  const value = useContext(context);

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDragStart = (e, id) => {
    console.log("dragstart:", id);
    e.dataTransfer.setData("id", id);
  };

  const onDrop = (e, name) => {
    let id = e.dataTransfer.getData("id");

    value.setStatus(id, name);
  };
  const inputHandler = (e) => {
    if (e.key === "Enter") {
      let todo = { item: input, status: "todo" };
      value.addTodo(todo);
      setinput("");
    }
  };

  return (
    <Container className="mt-5 ">
      <Row>
        <Col
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, "todo")}
          className="todocontainer">
          <h3>To Do</h3>
          <hr />
          <input
            type="text"
            value={input}
            placeholder="add a item "
            style={{ width: "100%" }}
            onChange={(e) => setinput(e.target.value)}
            onKeyDown={(e) => inputHandler(e)}
          />
          <hr />
          <Container>
            {value.todo.map((item) => (
              <div
                draggable
                className="card mt-1 md-1"
                onDragStart={(e) => onDragStart(e, item.item)}>
                {" "}
                <h5>{item.item}</h5>
              </div>
            ))}
          </Container>
        </Col>
        <Col
          className="ipcontainer"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, "inprogress")}>
          <h3>In Progress</h3>
          <hr />
          <Container>
            {value.inprogress.map((item) => (
              <div
                className="card mt-1 md-1"
                draggable
                onDragStart={(e) => onDragStart(e, item.item)}>
                {" "}
                <h5 className="mt-0.5 ">{item.item}</h5>
              </div>
            ))}
          </Container>
        </Col>
        <Col
          className="donecontainer"
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, "done")}>
          <h2>Done</h2>
          <hr />
          <Container>
            {value.done.map((item) => (
              <div
                className="card mt-1 md-1"
                draggable
                onDoubleClick={() => value.removeitem(item.item)}
                onDragStart={(e) => onDragStart(e, item.item)}>
                {" "}
                <h5>{item.item}</h5>{" "}
              </div>
            ))}
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default ToDo;
