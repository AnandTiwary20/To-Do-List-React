import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Don't add empty todos
    if (!inputValue.trim()) return;
    
    // Create a new todo object
    const newTodo = {
      id: Date.now(),
      text: inputValue,
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    // Add the new todo to the todos array
    setTodos([...todos, newTodo]);
    
    // Clear the input field
    setInputValue('');
  };

  return (
    <div className="app">
      <h1>My To-Do List</h1>
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Add a new task..."
          className="todo-input"
        />
        <button type="submit" className="add-button">
          Add Task
        </button>
      </form>
      
      <ul className="todo-list">
        {todos.map(todo => (
          <li key={todo.id} className="todo-item">
            <span className="todo-text">{todo.text}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;