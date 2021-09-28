import React, { useState } from "react";
import "./login.css";
import Toggle from "../components/Toggle/Toggle";

function Login() {
  const [toggle, setToggle] = useState(false);
  return (
    <div className={`login-container ${toggle ? "login-card-dark" : ""}`}>
      <button
        className={`toggle-btn ${toggle ? "login-title-gray" : ""}`}
        onClick={(e) => {
          setToggle(!toggle);
        }}
      >
        <Toggle />
      </button>

      <div className="login-card">
        <h3 className={`login-title ${toggle ? "login-title-dark" : ""}`}>
          Log in to your account
        </h3>
        <input
          className={`input ${toggle ? "login-dark" : ""}`}
          id="user-name"
          type="text"
          placeholder="User Name"
        />
        <input
          className={`input ${toggle ? "login-dark" : ""}`}
          id="first-name"
          type="text"
          placeholder="First Name"
        />
        <input
          className={`input ${toggle ? "login-dark" : ""}`}
          id="last-name"
          type="text"
          placeholder="Last Name"
        />
        <button className="login-btn">LOGIN</button>
      </div>
    </div>
  );
}

export default Login;
