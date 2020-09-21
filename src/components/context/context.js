import React, { useState } from "react";

export const context = React.createContext();
const Provider = context.Provider;

const TodoContainer = (props) => {
  const [ToDo, setToDo] = useState([]);
  const [inprogress, setinprogress] = useState([]);
  const [done, setdone] = useState([]);
  const [todo, settodo] = useState([]);

  const addTodo = (item) => {
    let ntodo = ToDo;
    ntodo.push(item);
    setToDo(ntodo);
    let td = ToDo.filter((item) => item.status === "todo");
    settodo(td);
  };
  const removeitem = (item) => {
    let newtodo = ToDo.filter((it) => it.item !== item);
    setToDo(newtodo);
    let ip = ToDo.filter((item) => item.status === "inprogress");
    let dn = ToDo.filter((item) => item.status === "done");
    let td = ToDo.filter((item) => item.status === "todo");
    settodo(td);
    setinprogress(ip);
    setdone(dn);
  };

  const setStatus = (item, status) => {
    let index = ToDo.findIndex((list) => list.item === item);
    let nStatus = { item: item, status: status };
    let nTodo = ToDo;
    nTodo.splice(index, 1, nStatus);
    setToDo(nTodo);
    let ip = ToDo.filter((item) => item.status === "inprogress");
    let dn = ToDo.filter((item) => item.status === "done");
    let td = ToDo.filter((item) => item.status === "todo");
    settodo(td);
    setinprogress(ip);
    setdone(dn);
  };
  return (
    <Provider
      value={{
        ToDo: ToDo,
        todo: todo,
        inprogress: inprogress,
        done: done,
        addTodo: addTodo,
        removeitem: removeitem,
        setStatus: setStatus,
      }}>
      {props.children}
    </Provider>
  );
};

export default TodoContainer;
