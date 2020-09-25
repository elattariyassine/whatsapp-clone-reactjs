import React from "react";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
      </div>
    </div>
  );
}

export default App;
