import { createContext, useContext, useReducer, useCallback } from "react";
import { reducer } from "./reducer";
import { getTask } from "service";

const GET_TASKS = "getTasks";

const taskContext = createContext();
const taskUpdateContext = createContext();
export const useTaskContext = () => useContext(taskContext);
export const useSetTaskContext = () => useContext(taskUpdateContext);

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(reducer, []);

  const onGetTasks = useCallback(async () => {
    const { data } = await getTask();
    dispatch({ type: GET_TASKS, payload: data });
  }, []);

  const setValue = {
    onGetTasks,
  };

  return (
    <taskContext.Provider value={tasks}>
      <taskUpdateContext.Provider value={setValue}>
        {children}
      </taskUpdateContext.Provider>
    </taskContext.Provider>
  );
};

export default TaskProvider;
