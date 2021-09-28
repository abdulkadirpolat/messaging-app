import React, { useState } from "react";
import "./messages-layout.css";
import { BsThreeDots } from "react-icons/bs";
function MessagesLayout({usersData}) {
  const [toggle, setToggle] = useState(true);
  return (
    toggle ?
    (<div  className={`chat-part ${toggle ? "chat-part-dark" : ""}`}>
      <div className={`chat-header ${toggle ? "chat-header-dark" : ""}`}>
        <div className="chat-info">
          <div className="avatar">
            <img src="https://avatars.githubusercontent.com/u/75859682?s=50&v=5" />
          </div>
          <div className="info">Abdulkadir Polat</div>
        </div>
        <div className="header-tool">
          <button className="btn">
            <BsThreeDots />
          </button>
        </div>
      </div>
      <div
        className={`middle-messages ${toggle ? "middle-messages-dark" : ""}`}
      >
        <ul className="message-list">
          <li className="item item-left">hello man</li>
          <li className="item item-right">hello guys</li>
          <li className="item item-left">hello man</li>
          <li className="item item-right">hello guys</li>
          <li className="item item-left">hello man</li>
          <li className="item item-left">hello man</li>
          <li className="item item-right">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </li>
          <li className="item item-left">  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.</li>
        </ul>
      </div>
      <div className={`footer-message ${toggle ? "footer-message-dark" : ""}`}>
        <input id="write-message" placeholder="Message" />
        <button className="footer-btn">Send</button>
      </div>
    </div>) : null
  );
}

export default MessagesLayout;
