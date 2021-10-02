import React from "react";
import { useTheme } from "../../../../context/ThemeContext";
// import { useMyMessage } from "../../../../context/MyMessageContext";
import styles from "./message-form.module.css";
import { useState } from "react/cjs/react.development";
import Input from "../../../Input/Input";
import { useUser } from "../../../../context/UserContext";
function MessageForm() {
  const { theme } = useTheme();
  const {setMyMessage} = useUser()
  // const { myMessage, setMyMessage } = useMyMessage();
  const [myText, setMyText] = useState("");

  function handleChange(e) {
    setMyText(e.target.value);
  }
  function handleClick() {
    if (!myText == "") setMyMessage((prevState) => [...prevState, { myText }]);
    setMyText("");
  }

  return (
    <div
      className={`${styles.footer_message} ${
        theme === "dark" ? styles.footer_message_dark : ""
      }`}
    > 
      <Input
        id={styles.write_message}
        value={myText}
        placeholder="Message"
        onKeyUp={(e) => (e.key === "Enter" ? handleClick() : false)}
        onChange={handleChange}
      />
      {/* <input
        id={styles.write_message}
        value={myText}
        placeholder="Message"
        onKeyUp={(e) => (e.key === "Enter" ? handleClick() : false)}
        onChange={handleChange}
      /> */}
      <button className={styles.footer_btn} onClick={handleClick}>
        Send
      </button>
    </div>
  );
}

export default MessageForm;
