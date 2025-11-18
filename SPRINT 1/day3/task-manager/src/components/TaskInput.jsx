import { useState } from "react";
import "../App.css";


function TaskInput ({addTask}) {
  
    const [title,setTitle] = useState("");
    const [priority,setPriority] = useState("High");
   
    function handleSubmit (e) {
      e.preventDefault();
      addTask(title,priority);
      setTitle("");
      setPriority("High")
    }
    return (
        
         <form onSubmit={handleSubmit}>

         <label>Enter Task</label>
         <input type="text" placeholder="Enter Task" name="task" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <br />

         <label> Choose Option</label>
         <select name="option" onChange={(e)=> setPriority(e.target.value)}>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
         </select>
         <br />

         <input type="submit"/>


         </form>


    
    )
}

export default TaskInput;
