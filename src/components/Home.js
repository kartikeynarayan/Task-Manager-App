import React from 'react';
import TaskList from './TaskList';
import AddTaskForm from './AddTaskForm';

const Home = () => {
  return (
    <>
      <AddTaskForm />
      <TaskList />
    </>
  );
};

export default Home;
