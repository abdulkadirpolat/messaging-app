import React   from "react";
import "../../styles/global.css";
import Messages from "./Messages";
import UserDetails from "./UserDetails";
import SidebarLeft from "./SidebarLeft";
import { useUser  } from "../../context/UserContext";

function Chat() {
  const { detailIsVisible } = useUser();
 
  return (
    <div className="message_container">
      <SidebarLeft />
      {!detailIsVisible &&  <Messages />}
      {detailIsVisible &&  <UserDetails /> }
    </div>
  );
}

export default Chat;
