import { useState, useEffect } from "react";

export default function useLocalStorage(key, defaultValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);

    if (typeof defaultValue === "function") {
      return defaultValue();
    } else {
      return defaultValue;
    }
  });

  // when key or values change, update localStorage
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, setValue]);

  return [value, setValue];
}
