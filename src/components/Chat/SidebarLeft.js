import React from "react";
import { useUser } from "../../context/UserContext";
import { useFilter } from "../../context/FilterSearch";
import Input from "../Input/Input";
import Toggle from "../Toggle/Toggle";
import { IoExitOutline } from "react-icons/io5";
import "../../styles/global.css";

function SidebarLeft() {
  const { logout, theme, userData, friendListUserId } = useUser();
  const { filterSearch, setFilterSearch } = useFilter();
  function handleFriendListUserId(userId) {
    friendListUserId(userId);
  }

  const filterVal = (arr) => {
    return arr.filter((val) => {
      if (filterSearch == "") {
        return val;
      } else if (
        `${val.first_name} ${val.last_name}`
          .toLowerCase()
          .includes(filterSearch.toLowerCase())
      ) {
        return val;
      }
    });
  };

  return (
    <div
      className={`${"friends_container"} ${
        theme === "dark" ? "friends_container_dark" : ""
      }`}
    >
      {/* SidebarSearch */}
      <div className="search">
        <Input
          type="text"
          id="friends_search"
          placeholder="Search"
          className={` friends_top_search  ${
            theme === "dark" ? "friends_top_search_dark" : ""
          }`}
          value={filterSearch}
          onChange={(e) =>
            setFilterSearch(e.target.value.trim().toLocaleLowerCase())
          }
        />
      </div>

      {/* // FriendList */}

      <ul className="friends_list">
        {filterVal(userData).map((val) => {
          return (
            <li
              onClick={() => handleFriendListUserId(val.id)}
              key={val.id}
              className={`  list_item ${
                theme === "dark" ? "list_item_dark" : ""
              }`}
            >
              <div
                className={` friend_avatar  ${
                  theme === "dark" ? "friend_avatar_dark" : ""
                }`}
              ></div>

              <div className={` friend_info `}>
                <div>{`${val.first_name} ${val.last_name}`}</div>
                <div className="last_message">
                  {val.messages[val.messages.length - 1]?.text.slice(0, 30)}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
      {/*  Settings   */}
      <div className={` logout ${theme === "dark" ? "logout_dark" : ""}`}>
        <a
          href="#"
          className={` bottom_toggle_btn  ${
            theme === "dark" ? "bottom_toggle_btn_dark " : ""
          }`}
        >
          <Toggle />
        </a>
        <a
          onClick={() => logout()}
          href="#"
          className={` exit_btn  ${theme === "dark" ? "exit_btn_dark" : ""}`}
        >
          <IoExitOutline />
        </a>
      </div>
    </div>
  );
}

export default SidebarLeft;
