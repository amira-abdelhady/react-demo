import React, { useState } from "react";
import  './todo.css'
function Todo(props) {
  console.log("list", props.todos);
  /* const complete=(name)=>{
      console.log(name);
       props.todos.map(task => {
        return name===task.name?task.isComplete=true:task.isComplete;
      });
      console.log("filterd",props.todos);
  } */
 
  return (
    <div>
      {props.todos.map((task,i) => {
        return (
          <>
            <h1 className={task.isComplete?"strike":"text-secondary"} key={i}>{task.name}</h1>
            <button className="btn btn-success " onClick={()=>props.complete(i)}>complete</button>
            <button className="btn btn-danger " onClick={()=>props.deleteHandle(i)}>delete</button>
          </>
        );
      })}
    </div>
  );
}

export default Todo;
