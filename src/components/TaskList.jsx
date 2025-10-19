import tasks from "../data"
import TaskItem from "./TaskItem"

const TaskList = ({ onCompleteTask, onEditTask }) => {
  return (
    <div className="tasklist-container">
      <ul className="tasklist">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}            // <- key moved here
            task={task}
            onComplete={() => onCompleteTask && onCompleteTask(task.id)}
            onEdit={() => onEditTask && onEditTask(task.id)}
          />
        ))}
      </ul>
    </div>
  )
}

export default TaskList