import React from "react";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Chat from "./components/chat/Chat";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <div className="app__body">
        <Router>
          <SideBar />
          <Switch>
            <Route path="/rooms/:roomId">
              <Chat />
            </Route>
            <Route path="/">
              <h1>Hello</h1>
            </Route>
            <Chat />
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
