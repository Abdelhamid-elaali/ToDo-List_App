import React, { useState } from 'react';
import './App.css';
import CreateTask from './CreateTask.js.jsx';
import TaskList from './TaskList.js.jsx';
import { ADD_NEW_TASK, MARK_AS_IN_PROGRESS, MARK_AS_DONE } from './actionType';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName, taskDescription) => {
    const newTask = { id: Date.now(), name: taskName, description: taskDescription, status: ADD_NEW_TASK };
    setTasks([...tasks, newTask]);
  };

  const updateTaskStatus = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) => {
        if (task.id === id) {
          if (task.status === ADD_NEW_TASK) return { ...task, status: MARK_AS_IN_PROGRESS };
          if (task.status === MARK_AS_IN_PROGRESS) return { ...task, status: MARK_AS_DONE };
        }
        return task;
      })
    );
  };

  return (
    <div>
      <h1>Todo List</h1>
      <CreateTask onAddTask={addTask} />
      <TaskList tasks={tasks} onStatusUpdate={updateTaskStatus} />
    </div>
  );
};

export default App;
