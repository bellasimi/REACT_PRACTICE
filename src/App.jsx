import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "page/Home";
import TodoList from "page/TodoList";
import "./App.css";
import "normalize.css";
import { ThemeProvider } from "@emotion/react";
import theme from "utils/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/todoList" element={<TodoList />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
