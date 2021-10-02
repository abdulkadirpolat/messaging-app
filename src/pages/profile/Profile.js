import React from "react";
import "./profile.css";
import SidebarList from "../../components/Chat/SidebarList/SidebarList";

import Messages from "../../components/Chat/Messages/Messages";
import UserDetails from "../../components/Chat/UserDetails/UserDetails";
// import { useMyMessage } from "../../context/MyMessageContext";
import MessagesContainer from "../../components/Chat/Messages/MessagesContainer";
// import { useDetail } from "../../context/DetailContext";
import { useUser } from "../../context/UserContext";
 
 
function Profile() {
  const {myMessage, detail} = useUser()
  // const {detail} = useDetail()
  return (
    <div className="message_container">
      <SidebarList />
    {!myMessage.length == 0 && !detail ?  <Messages /> : !detail && <MessagesContainer />}
      {detail && <UserDetails /> }
       
    </div>
  );
}

export default Profile;
