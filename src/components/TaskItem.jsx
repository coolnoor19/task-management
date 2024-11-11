// src/components/TaskItem.jsx
import React, { useContext, useState } from 'react';
import { TaskContext } from '../context/TaskContext';
import { motion } from 'framer-motion';

const TaskItem = ({ task }) => {
  const { editTask, deleteTask, toggleTaskCompletion } = useContext(TaskContext);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);

  const handleUpdate = () => {
    editTask({ ...task, title });
    setIsEditing(false);
  };

  return (
    <motion.li
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 20 }}
      className="flex items-center justify-between p-2 mb-2 border rounded"
    >
      <div className="flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => toggleTaskCompletion(task.id)}
          className="mr-2"
        />
        {isEditing ? (
          <input
            className="px-2 py-1 border rounded"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        ) : (
          <span className={`${task.completed ? 'line-through text-gray-500' : ''}`}>
            {task.title}
          </span>
        )}
      </div>
      <div>
        {isEditing ? (
          <button
            onClick={handleUpdate}
            className="px-2 py-1 mr-2 text-white bg-green-500 rounded hover:bg-green-600"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setIsEditing(true)}
            className="px-2 py-1 mr-2 text-white bg-yellow-500 rounded hover:bg-yellow-600"
          >
            Edit
          </button>
        )}
        <button
          onClick={() => deleteTask(task.id)}
          className="px-2 py-1 text-white bg-red-500 rounded hover:bg-red-600"
        >
          Delete
        </button>
      </div>
    </motion.li>
  );
};

export default TaskItem;

