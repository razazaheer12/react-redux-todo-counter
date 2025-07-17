import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addTask, editTask, deleteTask } from '../redux/todoSlice';
import Task from './Task';

const ToDo = () => {
  const tasks = useSelector((state) => state.todo.tasks);
  const dispatch = useDispatch();

  const [taskText, setTaskText] = useState('');
  const [category, setCategory] = useState('Personal');

  const handleAddTask = () => {
    if (taskText) {
      dispatch(addTask({
        id: Date.now(),
        text: taskText,
        category,
      }));
      setTaskText('');
    }
  };

  return (
    <div>
      <h2>ToDo App</h2>
      <input
        type="text"
        value={taskText}
        onChange={(e) => setTaskText(e.target.value)}
        placeholder="Enter task"
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        <option value="Personal">Personal</option>
        <option value="Work">Work</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </ul>
    </div>
  );
};

export default ToDo;