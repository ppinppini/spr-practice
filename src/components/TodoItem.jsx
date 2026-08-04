export default function TodoItem({ todo, onToggle, onRemove }) {
  return (
    <li className={todo.done ? 'todo-item done' : 'todo-item'}>
      <label>
        <input type="checkbox" checked={todo.done} onChange={() => onToggle(todo.id)} />
        <span>{todo.text}</span>
      </label>
      <button type="button" onClick={() => onRemove(todo.id)}>
        삭제
      </button>
    </li>
  );
}
