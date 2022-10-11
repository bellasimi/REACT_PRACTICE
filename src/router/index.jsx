import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "page/Home";
import TodoList from "page/TodoList";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/todoList" element={<TodoList />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
