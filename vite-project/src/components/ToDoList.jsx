import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onToggleComplete, onDelete }) => {

  if(todos.length ==0){
   return <p className="empty-message">No tasks yet. Please add one!</p>;
  }
  return (
    <ul className="todo-list">
   {todos.map((todo , index) => (
       
          <ToDoItem
            key={todo.id}
            todo={todo}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        )
      )}
    </ul>
  );
};

export default ToDoList;
