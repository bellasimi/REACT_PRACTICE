import { rest } from "msw";

const accountHandler = [
  rest.post("/api/login", (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");
    if (req.body.id === "test@co.kr") {
      return res(
        ctx.status(200),
        ctx.json({
          accessToken: { token: "bearer token", expires: "2022-10-22" },
          user: {
            nickName: "신영",
            id: "test@co.kr",
          },
        })
      );
    }
    return res(
      ctx.status(400),
      ctx.json({
        errorMessage: "잘못된 id 입력",
      })
    );
  }),
  rest.post("/api/signUp", (req, res, ctx) => {
    sessionStorage.setItem("is-authenticated", "true");
    return res(ctx.status(200));
  }),
  rest.get("/api/user", (req, res, ctx) => {
    const isAuthenticated = sessionStorage.getItem("is-authenticated");
    if (!isAuthenticated) {
      return res(
        ctx.status(403),
        ctx.json({
          errorMessage: "Not authorized",
        })
      );
    }
    return res(
      ctx.status(200),
      ctx.json({
        nickName: "신영",
        id: "test@co.kr",
      })
    );
  }),
];

export default accountHandler;
