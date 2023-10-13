import React, { useState } from 'react';
import './App.css';
import TodoList from './components/TodoList';

function App() {
  // State for managing todos
  const [todos, setTodos] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build a To-Do app', completed: false },
    // Add your initial todos here if needed
  ]);

  // State for adding new todos
  const [newTodo, setNewTodo] = useState('');

  // State for tracking the selected todo to be removed
  const [selectedTodoId, setSelectedTodoId] = useState(null);

  // Function to add a new todo
  const addTodo = () => {
    if (newTodo.trim() !== '') {
      const newTodoItem = {
        id: todos.length + 1,
        text: newTodo,
        completed: false,
      };
      setTodos([...todos, newTodoItem]);
      setNewTodo('');
    }
  };

  // Function to remove a todo by ID
  const handleRemove = (id) => {
    setSelectedTodoId(id); // Set the selected todo ID to initiate removal
  };

  // Function to confirm and remove the selected todo
  const confirmRemoveTodo = () => {
    if (selectedTodoId !== null) {
      const updatedTodos = todos.filter((todo) => todo.id !== selectedTodoId);
      setTodos(updatedTodos); // Remove the selected todo from the list
      setSelectedTodoId(null); // Clear the selected todo
    }
  };

  // Function to mark a todo as done
  const markAsDone = (id) => {
    const updatedTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: true } : todo
    );
    setTodos(updatedTodos);
  };

  return (
    <div className="App">
      <h1>My To-Do App</h1>

      {/* Input and button for adding new todos */}
      <div className="add-todo">
        <input
          type="text"
          placeholder="Add a new todo"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
        />
        <button onClick={addTodo}>Add</button>
      </div>

      {/* List of todos */}
      <TodoList
        todos={todos}
        onRemove={handleRemove}
        onMarkAsDone={markAsDone}
      />

      {/* Remove item pop-up */}
      {selectedTodoId !== null && (
        <div className="remove-item-popup">
          <p>Do you want to remove this item?</p>
          <button onClick={confirmRemoveTodo}>Yes</button>
          <button onClick={() => setSelectedTodoId(null)}>No</button>
        </div>
      )}
    </div>
  );
}

export default App;
