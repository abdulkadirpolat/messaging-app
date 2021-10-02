import React from "react";
import { useTheme } from "../../../context/ThemeContext";
import styles from "./messages.module.css";
function MessagesContainer() {
  const { theme } = useTheme();
  
  return (
    <div
      className={`${styles.chat_part} ${
        theme === "dark" ? styles.chat_part_dark : ""
      }`}
    ></div>
  );
}

export default MessagesContainer;
