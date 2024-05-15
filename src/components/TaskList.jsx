import React from 'react';

function TaskList({ tasks, updateTask, deleteTask }) {
  const handleUpdate = (updatedTask) => {
    updateTask(updatedTask);
  };

  const handleDelete = (taskId) => {
    deleteTask(taskId);
  };

  return (
    <div>
      <h2>Tasks</h2>
      <ul>
        {tasks.map(task => (
          <li key={task.id}>
            <div>{task.title}</div>
            <div>{task.description}</div>
            <div>{task.status}</div>
            <button onClick={() => handleUpdate({ ...task, status: ' completed' })}>Yes Done?</button>
            <button onClick={() => handleDelete(task.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
