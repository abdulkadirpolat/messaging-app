import React from "react";
import styles from "./user-details.module.css";
import { IoCallOutline, IoCloseOutline } from "react-icons/io5";
import { FiVideo, FiMessageCircle } from "react-icons/fi";
import { useTheme } from "../../../context/ThemeContext";
// import { useDetail } from "../../../context/DetailContext";
// import { useMyMessage } from "../../../context/MyMessageContext";
import { useUser } from "../../../context/UserContext";
function UserDetails() {
  const { theme } = useTheme();
  const {setDetail, avatar} = useUser()
  // const {avatar} = useMyMessage()
  return (
    <div
      className={styles.user_detail_container}
      className={`${styles.user_detail_container} ${
        theme === "dark" ? styles.user_detail_container_dark : ""
      }`}
    >
      <div
      onClick= {()=> setDetail((prev)=> !prev)}
        className={`${styles.user_detail_header} ${
          theme === "dark" ? styles.user_detail_header_dark : ""
        }`}
      >
        <IoCloseOutline />
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
         {avatar}
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
