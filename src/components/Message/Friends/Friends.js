import React, { useState } from "react";
import "./friends.css";
import Toggle from "../../Toggle/Toggle";
import { IoExitOutline } from "react-icons/io5";
function Friends({ usersData }) {
  const [toggle, setToggle] = useState(false);
  const [listBgChange, setListBgChange] = useState(false);
  // function  bgChange (e) {
  //   if(e.target.id == 1 ){
  //     setListBgChange(!listBgChange)
  //  }
  // }

  return (
    <div
      className={`friends-container ${toggle ? "friends-container-dark" : ""}`}
    >
      <div className="search">
        <input
          type="text"
          id="friends-search"
          placeholder="Search"
          className={`friends-top-search ${
            toggle ? "friends-top-search-dark" : ""
          }`}
        />
      </div>
      <ul className="friends-list">
        {usersData.map((e) => (
          <li
            key={e.id}
            className={`list-item ${toggle ? "list-item-dark" : ""}`}
          >
            {`${e.first_name} ${e.last_name}`}
          </li>
        ))}
      </ul>
      <div className={`logout ${toggle ? "logout-dark" : ""}`}>
        <a
          href="#"
          className={`bottom-toggle-btn ${
            toggle ? "bottom-toggle-btn-dark" : ""
          }`}
          onClick={(e) => {
            setToggle(!toggle);
          }}
        >
          <Toggle />
        </a>
        <a href="#" className={`exit-btn ${toggle ? "exit-btn" : ""}`}>
          <IoExitOutline />
        </a>
      </div>
    </div>
  );
}

export default Friends;
