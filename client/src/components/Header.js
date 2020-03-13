import React from "react";

// Components
import { useDarkMode } from "../hooks/useDarkMode";

function Header() {
  const [theme, setTheme] = useDarkMode("dark-mode", false);
  function toggleTheme(event) {
    event.preventDefault();
    // on toggle: set theme to opposite of current value (true/false)
    setTheme(!theme);
  }
  return (
    <header>
      <h1>Women's WorldCup June 2019 - July 2019</h1>
      <div className="dark-mode___toggle">
        <div
          onClick={toggleTheme}
          className={theme ? "toggle toggled" : "toggle"}
        />
      </div>
    </header>
  );
}

export default Header;
