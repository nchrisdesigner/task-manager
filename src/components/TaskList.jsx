import tasks from "../data"
import TaskItem from "./TaskItem"

const TaskList = () => {
  return (
    <div className="tasklist-container">
      <ul className="tasklist">
        {tasks.map((task, index) => {
          return (
            <TaskItem task={task} />
          )
        })}

      </ul>
    </div>
  )
}

export default TaskList