import React from "react";

import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchOutlined from "@material-ui/icons/SearchOutlined";
import SideBarChat from "../sidebarChat/SideBarChat";
import "./SideBar.css";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLargeIcon />
          </IconButton>
          <IconButton>
            <ChatIcon />
          </IconButton>
          <IconButton>
            <MoreVertIcon />
          </IconButton>
        </div>
      </div>
      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input type="text" placeholder="Search or start a new chat..." />
        </div>
      </div>
      <div className="sidebar__chats">
        <SideBarChat addNewChat />
        <SideBarChat />
        <SideBarChat />
        <SideBarChat />
      </div>
    </div>
  );
};

export default SideBar;
