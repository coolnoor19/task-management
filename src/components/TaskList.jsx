// src/components/TaskList.jsx
import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import TaskItem from './TaskItem';
import FilterButtons from './FilterButtons';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);
  const [filter, setFilter] = useState('All');

  const filterTasks = () => {
    if (filter === 'Completed') return tasks.filter((task) => task.completed);
    if (filter === 'Pending') return tasks.filter((task) => !task.completed);
    return tasks;
  };

  return (
    <div>
      <FilterButtons filter={filter} setFilter={setFilter} />
      <ul className="mt-4">
        {filterTasks().map((task) => (
          <TaskItem key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
