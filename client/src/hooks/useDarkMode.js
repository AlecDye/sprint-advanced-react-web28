import { useEffect } from "react";

// Components
import { useLocalStorage } from "./useLocalStorage";

// Darkmode hook to change CSS theme when prompted by user
export function useDarkMode() {
  // User's choice is saved into local storage and persists on page reload
  const [theme, setTheme] = useLocalStorage("dark-mode", false);
  // theme is on: "dark-mode" class is added to DOM
  // theme is off: "dark-mode" class is removed from DOM
  useEffect(() => {
    if (theme === true) {
      return document.body.classList.add("dark-mode");
    } else {
      return document.body.classList.remove("dark-mode");
    }
  }, [theme]);
  return [theme, setTheme];
}
