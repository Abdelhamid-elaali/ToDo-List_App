import React, { useState } from 'react';

const CreateTask = ({ onAddTask }) => {
  const [taskName, setTaskName] = useState('');
  const [taskDescription, setTaskDescription] = useState('');

  const handleAddTask = () => {
    if (taskName && taskDescription) {
      onAddTask(taskName, taskDescription);
      setTaskName('');
      setTaskDescription('');
    }
  };

  return (
    <div>
      <input
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Task Name"
      />
      <input
        type="text"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="Task Description"
      />
      <button onClick={handleAddTask}>Add Task</button>
    </div>
  );
};

export default CreateTask;
