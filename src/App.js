import React from "react";
import "./App.css";
import Movies from "./components/Movies";
import AddMovie from "./components/AddMovie";
function App() {
  return (
    <div className="App">
      <AddMovie />
      <Movies />
    </div>
  );
}

export default App;
