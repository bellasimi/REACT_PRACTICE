import Todo from "./Todo";
import useLocalStorage from "hook/useLocalStorage";
import { useState } from "react";
const MAX_LENGTH = 15;
const MIN_LENGTH = 1;

const TodoList = () => {
  const [todoList, setTodoList] = useLocalStorage("todoList", []);
  const [content, setContent] = useState("");

  const validateContent = (e) => {
    const { value } = e.target;
    if (value.length > MAX_LENGTH || value.length < MIN_LENGTH) {
      alert("할 일은 1-15자 사이로 입력해주세요.");
      return;
    }
    setContent(value);
  };

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (content === "") {
      alert("할 일을 정확히 입력해주세요");
      return;
    }
    const date = new Date();
    const newTodo = {
      id: date.getTime(),
      content,
      isCompleted: false,
    };

    setTodoList([...todoList, newTodo]);
  };
  const handleRemoveTodo = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };
  const handleDoneTodo = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          todo.isCompleted = true;
          return todo;
        }
        return todo;
      })
    );
  };
  return (
    <div>
      <ul>
        {todoList.map((todo) => (
          <Todo
            key={todo.id}
            todo={todo}
            onRemove={handleRemoveTodo}
            onChange={handleDoneTodo}
          />
        ))}
      </ul>
      <form onSubmit={handleAddTodo}>
        <input onChange={validateContent} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
};

export default TodoList;
