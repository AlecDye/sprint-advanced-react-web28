import { useState } from "react";

// Local storage hook to persist data after page visit
export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    const item = window.localStorage.getItem(key);
    // if item exists = parse stringified item from localStorage
    // if no item = create new item in localStorage
    return item ? JSON.parse(item) : initialValue;
  });
  // Converts value into stringified item within localStorage
  function SetValue(value) {
    setStoredValue(value);
    window.localStorage.setItem(key, JSON.stringify(value));
  }
  return [storedValue, SetValue];
}
