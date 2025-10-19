
const TaskItem = ({ task }) => {

  const { id, title, description, createdAt, priority, tags } = task || {}


  // const date = createdAt ? new Date(createdAt) : null
  // const formattedDate = date ? date.toLocaleDateString() : "Unknown date"
  // const datetime = date ? date.toISOString() : ""

  return (
    <li className="taskitem" key={id}>
      <header>
        <span className="date">{createdAt}</span>
        <span className="priority">{priority}</span>
      </header>
      <main>
        <h3>{title}</h3>
        <p>{description}</p>
        {Array.isArray(tags) && tags.length > 0 && (
          <ul className="tags">
            {tags.map((tag, i) => (
              <li key={`${tag}-${i}`}>{tag}</li>
            ))}
          </ul>
        )}
      </main>
      <footer>
        <button type="button" aria-label={`Complete ${title}`}>Complete</button>
        <button type="button" aria-label={`Edit ${title}`}>Edit</button>
      </footer>
    </li>

  )
}

export default TaskItem