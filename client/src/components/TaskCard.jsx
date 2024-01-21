import { Link } from "react-router-dom";
import { useTask } from "../context/TaskContext";
import days from "dayjs";
import utc from "dayjs/plugin/utc";
days.extend(utc);

function TaskCard({ tasks }) {
  const { title, description, date, _id: id } = tasks;

  const { deleteTask } = useTask();

  return (
    <div className="bg-zinc-800 max-w-md w-full p-10 rounded-md">
      <header className="flex justify-between">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex gap-x-2 items-center">
          <button
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md"
            onClick={() => {
              deleteTask(id);
            }}
          >
            Delete
          </button>

          <Link to={`/task/${id}`}
            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
          >Edit</Link>
        </div>
      </header>
      <p className="text-slate-300">{description}</p>
      <p>{days(date).utc().format("DD/MM/YYYY")}</p>
    </div>
  );
}

export default TaskCard;
