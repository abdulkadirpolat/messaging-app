import React from "react";
import styles from "./toggle.module.css";
import { IoMoonOutline } from "react-icons/io5";
import { useUser } from "../../context/UserContext";

function Toggle() {
  const { theme, setTheme } = useUser();
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
