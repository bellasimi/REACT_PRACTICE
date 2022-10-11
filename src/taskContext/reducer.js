const GET_TASKS = "getTasks";

export const reducer = (state, { type, payload }) => {
  switch (type) {
    case GET_TASKS:
      return [...payload];
    default:
      return state;
  }
};
