import { useState } from "react";

const useLocalStorage = (key, initialValue) => {
  const { localStorage } = window;
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const value = localStorage.getItem(key);
      return value ? JSON.parse(value) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });

  const setValue = (newValue) => {
    try {
      const valueToStore =
        typeof newValue === "function" ? newValue(storedValue) : newValue;
      localStorage.setItem(key, JSON.stringify(valueToStore));
      setStoredValue(valueToStore);
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
};

export default useLocalStorage;
