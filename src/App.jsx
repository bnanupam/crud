import { useState } from "react";
import "./App.css";

function App() {
  const [todo, setTodo] = useState([]);
  const [data, setData] = useState("");
  const handleSubmit = () => {
    setTodo((previous) => [...previous, data]);
    setData('')
  };
  const handleChange = (e) => {
    const task = e.target.value;
    setData(task);
  };
  const handleEdit = (data)=>{
    console.log(data)
    setData(data);
  }
  const handleDelete = (id)=>{
    console.log(id)
    setTodo(todo.filter(taskId=> taskId !== id))
  }
  return (
    <>
      <div className="main__container">
        <h1>TODO LIST</h1>
        <hr />
        <div>
          <input
            type="text"
            onChange={handleChange}
            placeholder="add item..."
            value={data}
          />
          <p>
            <button onClick={handleSubmit} type="button" disabled={data === ''} >
              ADD
            </button>
          </p>
        </div>
        <div className="taskList">
          {todo.map((data, index) => (
            <div className="task-item" key={index}>
              <div className="task"> {data} </div>
              <div className="crud-operation">
                <button onClick={()=> handleDelete(data)}>Delete</button>
                <button onClick={()=> handleEdit(data)} >Edit</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
