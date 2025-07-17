import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editTask, deleteTask } from '../redux/todoSlice';

const Task = ({ task }) => {
  const dispatch = useDispatch();

  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);
  const [newCategory, setNewCategory] = useState(task.category);

  const handleEdit = () => {
    dispatch(editTask({
      id: task.id,
      newTask: { text: newText, category: newCategory },
    }));
    setIsEditing(false);
  };

  return (
    <li>
      {isEditing ? (
        <div>
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
          />
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value)}
          >
            <option value="Personal">Personal</option>
            <option value="Work">Work</option>
          </select>
          <button onClick={handleEdit}>Save</button>
        </div>
      ) : (
        <div>
          <span>{task.text} ({task.category})</span>
          <button onClick={() => setIsEditing(true)}>Edit</button>
          <button onClick={() => dispatch(deleteTask(task.id))}>Delete</button>
        </div>
      )}
    </li>
  );
};

export default Task;
