import React, { useState } from 'react';
import './todo.css';

const TodoList = () => { // State to store the list of todos
  const [todos, setTodos] = useState([]); // State to store the current todo item being entered by the user
  const [todoInput, setTodoInput] = useState('');
  
  // Function to handle adding a new todo
  const addTodo = () => {
    if (todoInput.trim() !== '') {
      setTodos([...todos, todoInput]); // Add new todo to the list
      setTodoInput(''); // Clear input field
    }
  };

  // Function to handle removing a todo
  const removeTodo = (index) => {
    const updatedTodos = todos.filter((_, i) => i !== index); // Filter out the todo to be removed
    setTodos(updatedTodos); // Update the todos state
  };

  return (
    <div className="todo-list-container">
      <h2>Todo List</h2>
      <input
        className="todo-input"
        type="text"
        value={todoInput}
        onChange={(e) => setTodoInput(e.target.value)}
        placeholder="Enter a new todo"
      />
      <button className="todo-button" onClick={addTodo}>Add Todo</button>
      <ul>
        {todos.map((todo, index) => (
          <li key={index} className="todo-item">
            {todo}
            <button className="todo-remove-button" onClick={() => removeTodo(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
