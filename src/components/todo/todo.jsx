import React, { useContext, useState } from "react";
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
    <div className="container-fluid mt-5">
      <div className="row">
        <div
          className="col border border-warning m-2"
          style={{ borderRadius: "20px", background: "whitesmoke" }}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, "todo")}>
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

          <div className="container todocontainer pb-2 ">
            {value.todo.map((item) => (
              <div
                draggable
                className="card mt-1 md-1"
                onDragStart={(e) => onDragStart(e, item.item)}>
                {" "}
                <h5>{item.item}</h5>
              </div>
            ))}
          </div>
        </div>

        <div
          className="col border border-success m-2"
          style={{ borderRadius: "20px", background: "whitesmoke" }}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, "inprogress")}>
          <h3>In Progress</h3>
          <hr />
          <div className="container ipcontainer  pb-2 ">
            {value.inprogress.map((item) => (
              <div
                className="card mt-1 md-1"
                draggable
                onDragStart={(e) => onDragStart(e, item.item)}>
                {" "}
                <h5 className="mt-0.5 ">{item.item}</h5>
              </div>
            ))}
          </div>
        </div>

        <div
          className="col border border-primary  m-2"
          style={{ borderRadius: "20px", background: "whitesmoke" }}
          onDragOver={(e) => onDragOver(e)}
          onDrop={(e) => onDrop(e, "done")}>
          <h3>Done</h3>
          <hr />
          <div className="container donecontainer  pb-2  ">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default ToDo;
