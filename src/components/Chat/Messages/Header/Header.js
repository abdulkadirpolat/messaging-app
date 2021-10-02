 
 import React, { useState } from "react";
import { BsThreeDots } from "react-icons/bs";
import { IoArrowBackOutline } from "react-icons/io5";
// import { useDetail } from "../../../../context/DetailContext";
// import { useMyMessage } from "../../../../context/MyMessageContext";
import { useTheme } from "../../../../context/ThemeContext";
import { useUser } from "../../../../context/UserContext";
import styles from "./header.module.css";
function Header() { 
 const [arrowRotate, setArrowRotate] = useState(false);
  const { theme } = useTheme();
  const {setDetail, avatar} = useUser()
  //  const {detail, setDetail} = useDetail()
  //  const {myMessage,avatar} = useMyMessage()
   
  function detailUp( ) {
    setDetail((prev)=> !prev)

  }
  
  return (
    <div
      className={`${styles.chat_header} ${
        theme === "dark" ? styles.chat_header_dark : ""
      }`}
    >
      <div
        className={styles.friend_messages_arrow}
        style={{
          transform: `${arrowRotate ? "rotate(180deg)" : "rotate(360deg)"}`,
        }}
        onClick={(e) => setArrowRotate(!arrowRotate)}
      >
        <IoArrowBackOutline />
      </div>
      <div className={styles.chat_info}> 
        <div className={styles.avatar}>
          
        </div>
        <div className={styles.info}>{avatar}</div>
      </div>
      <div className={styles.header_tool}  onClick= {detailUp} >
        <button
          className={`${styles.detail_btn} ${
            theme === "dark" ? styles.detail_btn_dark : ""
          }`}
        >
          <BsThreeDots />
        </button>
      </div>
    </div>
  );
}

export default Header;
