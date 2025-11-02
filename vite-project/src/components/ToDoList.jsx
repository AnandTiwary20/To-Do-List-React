import React from 'react';
import ToDoItem from './ToDoItem';

const ToDoList = ({ todos, onToggleComplete, onDelete }) => {

  if(todos.length ==0){
    return<p className ="Empty - Message Please Add A task "> No Task Yet</p>
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
