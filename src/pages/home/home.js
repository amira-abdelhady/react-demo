import React, { useState,useEffect } from "react";
import Todo from "../../components/todo/todo";

function Home() {
  const [task, setTask] = useState({});
  const [todo, setTodo] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    /*  todo.push(task) //or
            setTodo(todo) */
    todo.push(task);
    let newArr = todo.slice();
    setTodo(newArr);
    console.log("submit", todo, task);
  };
  const handleChange = (e) => {
      console.log(e.target.value);
    setTask({ name: e.target.value, isComplete: false });
    console.log(task);
  };
  useEffect(() => {
    console.log(task,'afffff');
  }, [task])
  const complete = ( i) => {
    // console.log(name);
    const newArr = todo.slice();
    // if (type === "remove") newArr.splice(i, 1);
    newArr[i].isComplete = true;

     setTodo(newArr);
    console.log("filterd", todo);
  };
  const deleteHandle=(i)=>{
    const newArr = todo.slice();
    newArr.splice(i, 1);

     setTodo(newArr);
    console.log("delete", todo);
}
  return (
    <div className="container">
      <form className={"row"} onSubmit={handleSubmit}>
        <input
          type="task"
          name="task"
          value={task.name}
          onChange={handleChange}
        />
       
        <div className="row">
          <button className="btn btn-success " type="submit">
            add
          </button>
        </div>
      </form>
      <Todo todos={todo} complete={complete} deleteHandle={deleteHandle}/>
    </div>
  );
}

export default Home;
