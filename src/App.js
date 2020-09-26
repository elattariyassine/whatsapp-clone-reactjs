import React from "react";
import "./App.css";
import SideBar from "./components/sidebar/SideBar";
import Chat from "./components/chat/Chat";
import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { useState } from "react";
import Login from "./components/login/Login";

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
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
      )}
    </div>
  );
}

export default App;
