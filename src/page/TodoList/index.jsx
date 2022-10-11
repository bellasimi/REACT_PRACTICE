import Todo from "./Todo";
import { useEffect, useState } from "react";
import { postTask, delTask, patchTask } from "service";
import useAxios from "hook/useAxios";
import { useTaskContext, useSetTaskContext } from "taskContext";
const MAX_LENGTH = 15;
const MIN_LENGTH = 1;

const TodoList = () => {
  const [todoList, setTodoList] = useState(null);
  const [content, setContent] = useState("");
  const tasks = useTaskContext();
  const { onGetTasks } = useSetTaskContext();

  useEffect(() => {
    onGetTasks();
  }, []);

  const { isLoading: isAddTaskLoading, request: addTaskAxios } = useAxios({
    apiFn: postTask,
    onSuccess: (todoList) => {
      setTodoList(todoList);
    },
  });
  const { isLoading: isDelTaskLoading, request: delTaskAxios } = useAxios({
    apiFn: delTask,
    onSuccess: (todoList) => {
      setTodoList(todoList);
    },
  });
  const { isLoading: isDoneTaskLoading, request: patchTaskAxios } = useAxios({
    apiFn: patchTask,
    onSuccess: (todoList) => {
      setTodoList(todoList);
    },
  });

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
    !isAddTaskLoading && addTaskAxios(newTodo);
  };

  const handleRemoveTodo = (id) => {
    !isDelTaskLoading && delTaskAxios(id);
  };
  const handleDoneTodo = (id) => {
    !isDoneTaskLoading && patchTaskAxios(id);
  };
  return (
    <div>
      <ul>
        {tasks?.map((todo) => (
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
