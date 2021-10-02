import { useTheme } from "../../context/ThemeContext";
import styles from "./toggle.module.css";
import { IoMoonOutline } from "react-icons/io5";
 
function Toggle() {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className={styles.toggle_card}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <IoMoonOutline style={{ color: "white" }} />
    </div>
  );
}

export default Toggle;
