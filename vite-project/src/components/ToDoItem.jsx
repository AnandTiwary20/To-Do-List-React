import React from 'react';

const ToDoItem = ({ todo, onToggleComplete, onDelete }) => {
  return (
    <li className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
        className="todo-checkbox"
      />
      <span className={`todo-text ${todo.completed ? 'completed' : ''}`}>
        {todo.text}
      </span>
      <button 
        onClick={() => onDelete(todo.id)}
        className="delete-button"
        aria-label="Delete task"
      >
        ×
      </button>
    </li>
  );
};

export default ToDoItem;
