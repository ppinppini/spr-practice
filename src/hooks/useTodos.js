import { useState } from 'react';

let nextId = 1;

export default function useTodos() {
  const [todos, setTodos] = useState([]);

  const addTodo = (text) => {
    setTodos([...todos, { id: nextId++, text, done: false }]);
  };

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const remainingCount = todos.filter((todo) => !todo.done).length;

  return { todos, remainingCount, addTodo, toggleTodo, removeTodo };
}
