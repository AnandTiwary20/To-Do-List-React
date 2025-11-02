import { useState } from 'react';
import './App.css';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  return (
    <div className="app">
      <h1>My To-Do List</h1>
      <form className="todo-form">
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
        {/* Todo items will be rendered here */}
      </ul>
    </div>
  );
}

export default App;