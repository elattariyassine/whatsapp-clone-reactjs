import React from "react";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Chat from "./components/chat/Chat";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <SideBar />
        <Chat />
      </div>
    </div>
  );
}

export default App;
