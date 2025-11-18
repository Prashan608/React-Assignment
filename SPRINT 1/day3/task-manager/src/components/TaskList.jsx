import "../App.css";
import TaskItem from "./TaskItem";

function TaskList({ tasks }) {
  if (tasks.length == 0) {
    return <p>No Tasks</p>;
  }

  return (
    <div>
      {
        tasks.map((task) => (
          <TaskItem 
            key={task.id} 
            task={task} 
          />
        ))
      }
    </div>
  );
}

export default TaskList;
