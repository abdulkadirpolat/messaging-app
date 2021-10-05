import React from "react";
import styles from "./user-details.module.css";
import { IoCallOutline, IoCloseOutline } from "react-icons/io5";
import { FiVideo, FiMessageCircle } from "react-icons/fi";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";

 

function UserDetails() {
  const { selectedUser, theme, setDetailIsVisible } = useUser();
  const iconColor = {
    color:   `${theme === "dark" ? "white" : "black"}` 
  }

  return (
    <div
      className={`${styles.user_detail_container} ${
        theme === "dark" ? styles.user_detail_container_dark : ""
      }`}
    >
      <div
        className={`${styles.user_detail_header} ${
          theme === "dark" ? styles.user_detail_header_dark : ""
        }`}
      >
        <Link to={`/chat`} onClick={() => setDetailIsVisible(false)} style={iconColor}>
          <IoCloseOutline />
        </Link>
      </div>
      <div className={styles.user_details}>
        <div>
          <div className={styles.avatar_img} />
        </div>
        <h3
          className={`${styles.user_name} ${
            theme === "dark" ? styles.user_name_dark : ""
          }`}
        >
          {`${selectedUser.first_name} ${selectedUser.last_name}`}
        </h3>
        <div className={styles.user_time}>Last seen 2 hours ago</div>
      </div>
      <div className={styles.communication_tools}>
        <div
          className={`${styles.contact} ${
            theme === "dark" ? styles.contact_dark : ""
          }`}
        >
          <FiVideo />
          <div>Video</div>
        </div>
        <div
          className={`${styles.contact} ${
            theme === "dark" ? styles.contact_dark : ""
          }`}
        >
          <IoCallOutline />
          <div>Call</div>
        </div>
        <div
          className={`${styles.contact} ${
            theme === "dark" ? styles.contact_dark : ""
          }`}
        >
          <FiMessageCircle />
          <div>Message</div>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
