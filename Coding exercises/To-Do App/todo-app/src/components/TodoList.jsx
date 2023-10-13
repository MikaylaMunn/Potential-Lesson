import React from 'react';
import TodoItem from './TodoItem'; // Importing the TodoItem component.

// Defining the TodoList functional component that takes 'todos' and 'onRemove' as props.
const TodoList = ({ todos, onRemove }) => {
  return (
    <div>
      <h2>Todo List</h2> {/* Displaying a heading for the todo list. */}
      <ul>
        {todos.map((todo) => ( 
          // Mapping through the 'todos' array and rendering a TodoItem component for each 'todo'.
          <TodoItem key={todo.id} todo={todo} onRemove={onRemove} /> 
          // Passing 'key' (a unique identifier for React), 'todo', and 'onRemove' as props to TodoItem.
        ))}
      </ul>
    </div>
  );
};

export default TodoList; // Exporting the TodoList component.
