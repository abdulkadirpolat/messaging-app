import React from "react";
import "./toggle.css";
// import { IoCallOutline } from "react-icons/io5";
import { WiMoonFull } from "react-icons/wi";
// import { FiSun } from "react-icons/fi";
const toggle = false;

function Toggle() {
  return (
    <div className="toggle-card">  <WiMoonFull style=  {  toggle ? { color: "gray"} :  {color: "white"}   }  /></div>
  );
}

export default Toggle;
