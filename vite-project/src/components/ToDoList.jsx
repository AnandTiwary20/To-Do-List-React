import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onToggleComplete, onDelete }) => {
  return (
    <ul className="todo-list">
      {todos.length === 0 ? (
        <li className="empty-state">No tasks to display. Add a new task above!</li>
      ) : (
        todos.map(todo => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </ul>
  );
};

export default ToDoList;
