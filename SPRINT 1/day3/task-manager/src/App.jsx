import './App.css'
import { useState } from 'react';
import TaskInput from './components/TaskInput';

function App() {
  
 const [tasks,setTasks] = useState([]);
 const [priorityFilter,setPriorityFilter] = useState("All");
 const [statusFilter
,setStatusFilter] = useState("All");

 function addTask ( title,priority) {
    
 const newTask = {
    id : Date.now(),
    title : title,
    priority : priority,
    completed : false
  }
  setTasks([...tasks,newTask]);
 }

  function filteredTasks() {

  }

  return (
    <>
      <TaskInput addTask={addTask} />
      <TaskList tasks={filteredTasks}/>


    </>
  )
}

export default App
