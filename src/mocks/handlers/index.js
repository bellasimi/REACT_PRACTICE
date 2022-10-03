import accountHandler from "./account";
import taskHandler from "./task";

export const handlers = [...accountHandler, ...taskHandler];
