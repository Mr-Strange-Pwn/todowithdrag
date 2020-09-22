import React from "react";

function Newstyle() {
  return (
    <div className="container-fluid mt-5">
      <div className="row">
        <div className="col border border-primary m-2">
          <h3>To Do</h3>
          <hr />
          <input
            type="text"
            placeholder="add a item "
            style={{ width: "100%" }}
          />
          <hr />

          <div className="container ">
            <div draggable className="card mt-1 md-1">
              <h5>item list</h5>
            </div>
            <div draggable className="card mt-1 md-1">
              {" "}
              <h5>item list</h5>
            </div>
          </div>
        </div>

        <div className="col border  border-warning m-2">
          <h3>In Progress</h3>
          <hr />
          <div className="container ">
            <div draggable className="card mt-1 md-1">
              {" "}
              <h5>item list</h5>
            </div>
            <div draggable className="card mt-1 md-1">
              {" "}
              <h5>item list</h5>
            </div>
          </div>
        </div>

        <div className="col border border-success m-2">
          <h3>done</h3>
          <hr />
          <div className="container ">
            <div draggable className="card mt-1 md-1">
              {" "}
              <h5>item list</h5>
            </div>
            <div draggable className="card mt-1 md-1">
              {" "}
              <h5>item list</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Newstyle;
