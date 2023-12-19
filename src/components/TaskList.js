import React, { useState } from 'react';
import UpdateTaskForm from './UpdateTaskForm';
import { deleteTask } from '../reducers/taskReducer';
import { useSelector, useDispatch } from 'react-redux';

const TaskList = () => {
  const [editTaskId, setEditTaskId] = useState(null);

  const dispatch = useDispatch();
  const taskList = useSelector((state) => state.tasks);

  const handleEditTask = (taskId) => {
    setEditTaskId(taskId);
  };

  const handleCancelEdit = () => {
    setEditTaskId(null);
  };

  const handleDelete = (taskId) => {
    dispatch(deleteTask(taskId));
  };

  return (
    <>
      <h3>Task List - {taskList.length}</h3>
      <ul>
        {taskList.map((task) => (
          <li key={task.id}>
            {editTaskId === task.id ? (
              // If the task is being edited, show the UpdateTaskForm.
              <UpdateTaskForm task={task} onCancelEdit={handleCancelEdit} />
            ) : (
              // If not, show task details with Edit and Delete buttons.
              <>
                <div>
                  <strong>{task.title}</strong>
                </div>
                <div>{task.description}</div>
                <button onClick={() => handleEditTask(task.id)}>Edit Task</button>
                <button onClick={() => handleDelete(task.id)}>Delete Task</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
};

export default TaskList;
