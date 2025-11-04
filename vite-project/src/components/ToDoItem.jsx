import React, { useState } from 'react';

const ToDoItem = ({ todo, onToggleComplete, onDelete, onUpdateTodo }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(todo.text);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    onUpdateTodo(todo.id, editText);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSave(e);
    } else if (e.key === 'Escape') {
      setEditText(todo.text);
      setIsEditing(false);
    }
  };
  return (
    <li className={`todo-item ${isEditing ? 'editing' : ''}`}>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggleComplete(todo.id)}
        className="todo-checkbox"
        disabled={isEditing}
      />
      
      {isEditing ? (
        <form onSubmit={handleSave} className="edit-form">
          <input
            type="text"
            value={editText}
            onChange={(e) => setEditText(e.target.value)}
            onBlur={handleSave}
            onKeyDown={handleKeyDown}
            className="edit-input"
            autoFocus
          />
        </form>
      ) : (
        <span 
          className={`todo-text ${todo.completed ? 'completed' : ''}`}
          onDoubleClick={handleEdit}
        >
          {todo.text}
        </span>
      )}
      
      <div className="todo-actions">
        {!isEditing && (
          <button 
            onClick={handleEdit}
            className="edit-button"
            aria-label="Edit task"
            disabled={todo.completed}
          >
            ✎
          </button>
        )}
        <button 
          onClick={() => onDelete(todo.id)}
          className="delete-button"
          aria-label="Delete task"
          disabled={isEditing}
        >
          ×
        </button>
      </div>
    </li>
  );
};

export default ToDoItem;
