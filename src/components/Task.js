import React from 'react'

const Task = ({task, onDelete, onToggle}) => {
  return (
    <div className = {`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={() => onToggle(task.id)}>
        <h3>
            {task.text}
            <span className="material-symbols-outlined" onClick = {() => onDelete(task.id)} >
                close
            </span>
        </h3>
        <p>{task.day}</p>
    </div>
  )
}

export default Task