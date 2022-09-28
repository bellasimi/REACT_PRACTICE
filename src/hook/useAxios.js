import { useState } from "react";
const useAxios = ({ apiFn, onError, onSuccess }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const request = (args) => {
    if (!isLoading) {
      setIsLoading(true);
    }

    return apiFn(args)
      .then((response) => {
        setData(response.data);
        onSuccess && onSuccess(response.data);
      })
      .catch((error) => {
        setError(error);
        if (error.response) {
          onError && onError(error.response.status, error.message);
        }
        console.error(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return { data, isLoading, error, request };
};

export default useAxios;
