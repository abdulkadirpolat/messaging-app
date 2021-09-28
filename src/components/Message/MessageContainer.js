import React from "react";
import  "./message-container.css";
import Friends from "./Friends/Friends";
import MessagesLayout from "./MessagesLayout/MessagesLayout";

function MessageContainer({usersData}) {
  return (
    <div className="message_container">
      <Friends usersData= {usersData} />
      <MessagesLayout />
    </div>
  );
}

export default MessageContainer;
