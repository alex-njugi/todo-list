import React, { useState } from 'react';
import AddTaskForm from './components/AddTaskForm';
import TaskItem from './components/TaskItem';

function App() {
  const [tasks, setTasks] = useState([]);
  
  function addTask(task) {
    setTasks([...tasks, task]);
  }

  function deleteTask(id) {
    setTasks(tasks.filter(task => task.id !== id));
  }

  function editTask(id, updatedTask) {
    setTasks(
      tasks.map(task => (task.id === id ? { ...task, ...updatedTask } : task))
    );
  }

  return (
    <div>
      <h1>TaskTrackr</h1>
      <AddTaskForm addTask={addTask} />
      <div>
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            deleteTask={deleteTask}
            editTask={editTask}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
