import React from "react";
import "./profile.css";
import Messages from "../../components/Chat/Messages";
import UserDetails from "../../components/Chat/UserDetails";
import SidebarLeft from "../../components/Chat/SidebarLeft";
import { useUser } from "../../context/UserContext";
function Profile() {
  const { detailIsVisible } = useUser();

  return (
    <div className="message_container">
      <SidebarLeft />
      {!detailIsVisible && <Messages />}
      {detailIsVisible && <UserDetails />}
    </div>
  );
}

export default Profile;
