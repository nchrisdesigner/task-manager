
const TaskItem = ({ task }) => {
  return (
    <li className="taskitem" key={task.id}>
      <header>
        <span className="date">{task.createdAt}</span>
        <span className="priority">{task.priority}</span>
      </header>
      <main>
        <h3>{task.title}</h3>
        <p>{task.description}</p>
        {task.tags.length > 0 && (
          <ul>
            {task.tags.map((tag, i) => {
              return (
                <li key={i}>{tag}</li>
              )
            })}

          </ul>
        )}
      </main>
      <footer>
        <button>Complete</button>
        <button>Edit</button>
      </footer>
    </li>

  )
}

export default TaskItem