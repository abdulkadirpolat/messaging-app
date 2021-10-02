import styles from "./messages.module.css";
import Header from "../../Chat/Messages/Header/Header";
import MessageList from "../../Chat/Messages/MessageList/MessageList";
import MessageForm from "../../Chat/Messages/MessageForm/MessageForm";
import { useTheme } from "../../../context/ThemeContext";
 
 
function Messages() {
  const { theme } = useTheme();
 
  return (
    <div
      className={`${styles.chat_part} ${
        theme === "dark" ? styles.chat_part_dark : ""
      }`}
    >
      <Header />
      <MessageList />
      <MessageForm />
    </div>
  );
}

export default Messages;
