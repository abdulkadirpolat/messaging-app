import React from "react";
// import { useMyMessage } from "../../../../context/MyMessageContext";
import { useTheme } from "../../../../context/ThemeContext";
import { useUser } from "../../../../context/UserContext";
import styles from "./message-list.module.css";
function MessageList() {
  const { theme } = useTheme();
  const {myMessage} = useUser()
  // const { myMessage } = useMyMessage();

  return (
    <div
      className={`${styles.middle_messages} ${
        theme === "dark" ? styles.middle_messages_dark : ""
      }`}
    >
      <ul className={styles.message_list}>
     
        {myMessage.map((data, index) => (
          <>
          
            {data.text ? (
              <li
                key={index}
                className={`${styles.item} ${styles.item_left} ${
                  theme === "dark" ? styles.item_left_dark : ""
                }`}
              >
                {data.text}
              </li>
            ) : (
              ""
            )}

            {data.myText ? (
              <li
                className={`${styles.item} ${styles.item_right} ${
                  theme === "dark" ? styles.item_right_dark : ""
                }`}
              >
                {" "}
                {data.myText}
              </li>
            ) : (
              ""
            )}
          </>
        ))}
      </ul>
    </div>
  );
}

export default MessageList;
