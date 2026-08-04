import { useState } from 'react';

let nextId = 1;

export default function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    const trimmed = text.trim();
    if (!trimmed) return;
    setTodos([...todos, { id: nextId++, text: trimmed, done: false }]);
    setText('');
  };

  const handleToggle = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, done: !todo.done } : todo)));
  };

  const handleRemove = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const remainingCount = todos.filter((todo) => !todo.done).length;

  return (
    <main className="app">
      <h1>TODO</h1>

      <form className="todo-input" onSubmit={handleSubmit}>
        <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          placeholder="할 일을 입력하세요"
        />
        <button type="submit">추가</button>
      </form>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className={todo.done ? 'todo-item done' : 'todo-item'}>
            <label>
              <input type="checkbox" checked={todo.done} onChange={() => handleToggle(todo.id)} />
              <span>{todo.text}</span>
            </label>
            <button type="button" onClick={() => handleRemove(todo.id)}>
              삭제
            </button>
          </li>
        ))}
      </ul>

      {todos.length === 0 ? (
        <p className="empty">할 일이 없습니다.</p>
      ) : (
        <p className="summary">남은 할 일 {remainingCount}개</p>
      )}
    </main>
  );
}
