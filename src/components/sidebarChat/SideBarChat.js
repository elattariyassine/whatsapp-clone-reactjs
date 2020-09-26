import { Avatar } from "@material-ui/core";
import React, { useState, useEffect } from "react";
import "./SideBarChat.css";
import db from "../../firebase";
import { Link } from "react-router-dom";

const SideBarChat = ({ addNewChat, id, name }) => {
  const [seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (id) {
      db.collection("rooms")
        .doc(id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [id]);

  useEffect(() => {
    setSeed(Math.floor(Math.random() * 50));
  }, []);

  const createChat = () => {
    const roomName = prompt("Please enter a name for the chat");
    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>
            {messages[0]?.message
              ? messages[0]?.message
              : "No message in this room"}
          </p>
        </div>
      </div>
    </Link>
  ) : (
    <div className="sidebarChat" onClick={createChat}>
      <h2>Add a new Chat</h2>
    </div>
  );
};

export default SideBarChat;
