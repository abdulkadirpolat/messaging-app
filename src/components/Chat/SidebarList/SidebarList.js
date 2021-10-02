import styles from "./sidebar-list.module.css";
import { useTheme } from "../../../context/ThemeContext";
import SidebarSearch from "./SidebarSearch/SidebarSearch";
import FriendList from "./FriendList/FriendList";
import ThemeButton from "./Settings/ThemeButton";
import ExitButton from "./Settings/ExitButton";

function SidebarList() {
  const { theme } = useTheme();

  return (
    <div
      className={`${styles.friends_container} ${
        theme === "dark" ? styles.friends_container_dark : ""
      }`}
    >
      <SidebarSearch />
      <FriendList />
      <div
        className={`${styles.logout} ${
          theme === "dark" ? styles.logout_dark : ""
        }`}
      >
        <ThemeButton />
        <ExitButton />
      </div>
    </div>
  );
}

export default SidebarList;
