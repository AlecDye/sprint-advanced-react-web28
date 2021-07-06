import React from "react";
import "./App.css";

// Component imports
import Header from "./components/Header";
import PlayerList from "./components/PlayerList";

// Stateless function component (wrapper)
function App() {
  return (
    <div className="App">
      <Header />
      <PlayerList />
    </div>
  );
}

export default App;
