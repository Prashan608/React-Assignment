import "../App.css"
import { useState } from "react"

function ToDoList () {

    const [tasks,setTask] = useState(["buy milk"," Study React"]);
    const [newTask , setNewTask] = useState("");

    function handleInput (e) {
      setNewTask(e.target.value);
    }

    function addTask () {
        if(!newTask) return alert("please add value first");
        else {
           setTask([...tasks,newTask]);
           setNewTask("");
        }
    }

    function clearAll () {
        setTask([]);
        setNewTask("");
    }

   return (
      <div>
        <h1>Todo List</h1>
        <input type="text" value={newTask} onChange={handleInput} placeholder="Enter task..." />
        <button onClick={addTask}>Add Tasks</button>
        <button onClick={clearAll}>Clear All</button>

        {tasks.length === 0 && <p>No tasks available</p>}

        {tasks.map((ele,idx)=>(
            <ul key={idx}>
                <li>{ele}</li>
            </ul>
        ))}
      </div>
   );
}

export default ToDoList;
