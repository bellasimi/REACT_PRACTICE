import { rest } from "msw";
import { todos } from "mocks/todoData";

let todoResponseData = [...todos];

const taskHandler = [
  rest.get("/api/task", (req, res, ctx) => {
    return res(ctx.status(200), ctx.json(todoResponseData));
  }),
  rest.post("/api/task", (req, res, ctx) => {
    todoResponseData = [...todoResponseData, req.body];
    return res(ctx.status(200), ctx.json(todoResponseData));
  }),
  rest.delete("api/task/:taskId", (req, res, ctx) => {
    todoResponseData = todoResponseData.filter(
      (task) => task.id !== Number(req.params.taskId)
    );
    return res(ctx.status(200), ctx.json(todoResponseData));
  }),
  rest.patch("api/task", (req, res, ctx) => {
    todoResponseData = todoResponseData.map((task) => {
      if (task.id === Number(req.body.taskId)) {
        return { ...task, isCompleted: true };
      }
      return task;
    });
    return res(ctx.status(200), ctx.json(todoResponseData));
  }),
];

export default taskHandler;
