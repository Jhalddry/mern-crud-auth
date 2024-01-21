import { useEffect } from "react";

import { useTask } from "../context/TaskContext";
import TaskCard from "../components/TaskCard";

function TaskPage() {
  const { getTask, task } = useTask();

  useEffect(() => {
    getTask();
  }, []);

  if (task.length === 0) return <h1>No Tasks</h1>;

  return (

    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
      {task.map((tasks) => (
        <TaskCard tasks={tasks} key={tasks._id}/>
      ))}
    </div>

  );
}

export default TaskPage;
