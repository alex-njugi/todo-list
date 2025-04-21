import { useState } from 'react';
import './index.css';
import AddTaskForm from './components/AddTaskForm';
import TaskItem from './components/TaskItem';

function App() {
  const [tasks, setTasks] = useState([]);

  const handleAddTask = (newTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleDeleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const handleUpdateTask = (id, updatedTask) => {
    setTasks(tasks.map(task => task.id === id ? updatedTask : task));
  };

  const toggleTask = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  return (
    <div className="container">
      <header>
        <h1>Task Tracker</h1>
        <p>Track your to-dos effortlessly</p>
      </header>

      <AddTaskForm addTask={handleAddTask} />

      <div className="tasks-header">Tasks</div>

      <div id="tasks-list">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onDelete={handleDeleteTask}
            onUpdate={handleUpdateTask}
            toggleTask={toggleTask}
          />
        ))}
      </div>

      <div className="task-stats">
        {tasks.length === 0 ? 'No tasks yet' : `${tasks.length} task(s) total`}
      </div>
    </div>
  );
}

export default App;
