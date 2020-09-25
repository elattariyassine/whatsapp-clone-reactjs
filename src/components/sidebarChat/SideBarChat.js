import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./SideBarChat.css";

const SideBarChat = ({ addNewChat }) => {
  const [seed, setSeed] = useState("");

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 50));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter a name for the chat");
    if (roomName) {
      //do clever things
    }
  };

  return !addNewChat ? (
    <div className="sidebarChat">
      <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
      <div className="sidebarChat__info">
        <h2>Room Name</h2>
        <p>Last message</p>
      </div>
    </div>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add a new Chat</h2>
    </div>
  );
};

export default SideBarChat;
