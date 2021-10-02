import React from "react";
import Toggle from "../../../Toggle/Toggle";
import styles from "./settings.module.css";
import { useTheme } from "../../../../context/ThemeContext";

function ThemeButton() {
  const { theme } = useTheme();
  return (
    <a
      href="#"
      className={`${styles.bottom_toggle_btn} ${
        theme === "dark" ? styles.bottom_toggle_btn_dark : ""
      }`}
    >
      <Toggle />
    </a>
  );
}

export default ThemeButton;
