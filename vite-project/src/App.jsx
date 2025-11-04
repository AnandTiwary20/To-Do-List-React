import { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  const [todos, setTodos] = useState(() => {
    // Load todos from localStorage if available
    const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });
  const [inputValue, setInputValue] = useState('');

  // Save todos to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  // Add a new todo
  const addTodo = (e) => {
    e.preventDefault();
    
    if (!inputValue.trim()) return;
    
    const newTodo = {
      id: Date.now(),
      text: inputValue.trim(),
      completed: false,
      createdAt: new Date().toISOString()
    };
    
    setTodos([...todos, newTodo]);
    setInputValue('');
  };

  // Toggle todo completion status
  const toggleComplete = (id) => {
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Delete a todo
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Update a todo
  const updateTodo = (id, newText) => {
    if (!newText.trim()) return;
    setTodos(todos.map(todo => 
      todo.id === id ? { ...todo, text: newText.trim() } : todo
    ));
  };

  return (
    <div className="app-container">
      <Header />
      
      <main className="main-content">
        <form onSubmit={addTodo} className="todo-form">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Add a new task..."
            className="todo-input"
            aria-label="Add a new task"
          />
          <button type="submit" className="add-button">
            Add Task
          </button>
        </form>
        
        <ToDoList 
          todos={todos}
          onToggleComplete={toggleComplete}
          onDelete={deleteTodo}
          onUpdateTodo={updateTodo}
        />
      </main>
    </div>
  );
}

export default App;