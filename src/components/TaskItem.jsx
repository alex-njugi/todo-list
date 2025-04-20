import React, { useState } from 'react';

function TaskItem({ task, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newTitle, setNewTitle] = useState(task.title);

  function handleDelete() {
    deleteTask(task.id);
  }

  function handleEdit() {
    if (isEditing) {
      editTask(task.id, { title: newTitle });
    }
    setIsEditing(!isEditing);
  }

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
        />
      ) : (
        <span>{task.title}</span>
      )}
      <button onClick={handleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
}

export default TaskItem;
