import "./App.css";
import "normalize.css";
import { ThemeProvider } from "@emotion/react";
import theme from "utils/theme";
import Router from "router";
import TaskProvider from "taskContext";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TaskProvider>
        <Router />
      </TaskProvider>
    </ThemeProvider>
  );
}

export default App;
