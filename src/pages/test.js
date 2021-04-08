import React, { useEffect, useState } from "react";

import { Form, Button, Table } from "react-bootstrap";

export default function TodolistComponent(props) {
  const [taskName, setTask] = useState("");

  const name = props.name || "Ahmed";

  const [arr, setArr] = useState([]);

  const taskChanged = (e) => {
    setTask(e.target.value);
  };

  const addNewTask = () => {
    // let test = arr;

    // test.push(taskName)

    arr.push(taskName);

    let test = arr.slice();

    setArr(test);

    console.log(arr);

    console.log(test);
  };

  useEffect(() => {
    console.log("Hello from user Effect",arr);
  }, []);
  return (
    <div className="w-50 bg-light mx-auto p-3 my-5">
      <div className="container">
        <h2 className="text-center text-secondary">Welcome {name}</h2>

        <h5 className="text-info">To do list</h5>

        <input
          type="text"
          placeholder="Enter Task"
          value={taskName}
          onChange={taskChanged}
          autoComplete="off"
          required
        />

        <div className="text-center my-3">
          <Button className="mx-3 btn btn-link text-white" onClick={addNewTask}>
            Add
          </Button>
        </div>

        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>

              <th>Task Name</th>

              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>1</td>

              <td>Mark</td>

              <td>test</td>
            </tr>

            {arr.map((ele, index) => {
              return (
                <tr>
                  <td>{index + 1}</td>

                  <td>{ele}</td>

                  <td>TestButton</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </div>
  );
}
