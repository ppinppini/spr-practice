import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import useTodos from './hooks/useTodos';

export default function App() {
  const { todos, remainingCount, addTodo, toggleTodo, removeTodo } = useTodos();

  return (
    <main className="app">
      <h1>TODO</h1>
      <h2>todo2</h2>
      <TodoInput onAdd={addTodo} />
      <TodoList todos={todos} onToggle={toggleTodo} onRemove={removeTodo} />
      {todos.length > 0 && (
        <p className="summary">남은 할 일 {remainingCount}개</p>
      )}
    </main>
  );
}
