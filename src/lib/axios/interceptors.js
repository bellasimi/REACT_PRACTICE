const token = window.localStorage.getItem("TodoToken");

export const handleRequest = async (config) => {
  config.headers.Authorization = token;
  return config;
};

export const handleRequestError = (error) => {
  console.error(error);
  return Promise.reject(error);
};

export const handleResponse = (response) => {
  return response;
};

export const handleResponseError = (error) => {
  console.error(error);
  return Promise.reject(error);
};
