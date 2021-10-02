import React from "react";
import { IoExitOutline } from "react-icons/io5";
import styles from "./settings.module.css";
import { useTheme } from "../../../../context/ThemeContext";
import { useUser } from "../../../../context/UserContext";

function ExitButton() {
  const { theme } = useTheme();
  const { logout } = useUser();
  return (
    <a
      onClick={() => logout()}
      href="#"
      className={`${styles.exit_btn} ${
        theme === "dark" ? styles.exit_btn_dark : ""
      }`}
    >
      <IoExitOutline />
    </a>
  );
}

export default ExitButton;
