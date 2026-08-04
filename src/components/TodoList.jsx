import TodoItem from './TodoItem';

export default function TodoList({ todos, onToggle, onRemove }) {
  if (todos.length === 0) {
    return <p className="empty">할 일이 없습니다.</p>;
  }

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onRemove={onRemove} />
      ))}
    </ul>
  );
}
