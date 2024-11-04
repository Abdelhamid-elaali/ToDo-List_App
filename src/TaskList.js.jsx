import React from 'react';
import { ADD_NEW_TASK, MARK_AS_IN_PROGRESS, MARK_AS_DONE } from './actionType';
import './App.css';

const TaskList = ({ tasks, onStatusUpdate }) => {

  const getTaskClass = (status) => {
    switch (status) {
      case ADD_NEW_TASK:
        return 'task-card todo';
      case MARK_AS_IN_PROGRESS:
        return 'task-card in-progress';
      case MARK_AS_DONE:
        return 'task-card done';
      default:
        return 'task-card';
    }
  };

  return (
    <div className="container">
      {tasks.map((task) => (
        <div key={task.id} className={getTaskClass(task.status)}>
          <h3>{task.name}</h3>
          <p>{task.description}</p>
          <p>Status: {task.status}</p>
          {task.status !== MARK_AS_DONE && (
            <button onClick={() => onStatusUpdate(task.id)}>
              {task.status === ADD_NEW_TASK ? 'Start' : 'Complete'}
            </button>
          )}
        </div>
      ))}
    </div>
  );
};

export default TaskList;
 