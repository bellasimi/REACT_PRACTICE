const Todo = ({ todo, onRemove, onChange }) => {
  const handleRemoveTodo = () => {
    onRemove(todo.id);
  };
  const handleDoneTodo = () => {
    onChange(todo.id);
  };
  return (
    <li>
      <div>{todo.content}</div>
      {todo.isCompleted ? (
        <button onClick={handleRemoveTodo}>삭제</button>
      ) : (
        <button onClick={handleDoneTodo}>완료</button>
      )}
    </li>
  );
};

export default Todo;
