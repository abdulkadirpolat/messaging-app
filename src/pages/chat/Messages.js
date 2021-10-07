import { BsThreeDots } from "react-icons/bs";
// import { IoArrowBackOutline } from "react-icons/io5";
import React, { useState } from "react";
import { Input, Button } from "../../components";
import { useUser } from "../../context/UserContext";
import { Link } from "react-router-dom";
import ScrollableFeed from "react-scrollable-feed";
import "../../styles/global.css";

function Messages() {
  // const [arrowRotate, setArrowRotate] = useState(false);
  const {
    user,
    theme,
    sendNewMessage,
    selectedUser,
    setDetailIsVisible,
    detailIsVisible,
  } = useUser();
  const [searchMessage, setSearchMessage] = useState("");

  function handleClick() {
    if (!searchMessage) return;
    sendNewMessage(searchMessage);
    setSearchMessage("");
  }

  return (
    <div className={` chat_part  ${theme === "dark" ? "chat_part_dark" : ""}`}>
      {selectedUser && (
        <>
          <div
            className={` chat_header  ${
              theme === "dark" ? "chat_header_dark" : ""
            }`}
          >
            {/* <div
          className="friend_messages_arrow"
          style={{
            transform: `${arrowRotate ? "rotate(180deg)" : "rotate(360deg)"}`,
          }}
          onClick={() => setArrowRotate(!arrowRotate)}
        >
          <IoArrowBackOutline />
        </div> */}
            <div className="chat_info">
              <div className="avatar"></div>
              <div className="info">
                {`${selectedUser?.first_name} ${selectedUser?.last_name}`}
              </div>
            </div>

            <Link
              className="header_tool"
              onClick={() => setDetailIsVisible(!detailIsVisible)}
              to={`user/:${selectedUser.id}/details`}
            >
              <BsThreeDots
                className={`detail_btn  ${
                  theme === "dark" ? "detail_btn_dark" : ""
                }`}
              />
            </Link>
          </div>

          <div
            className={` middle_messages  ${
              theme === "dark" ? "middle_messages_dark" : ""
            }`}
          >
            <ScrollableFeed className="message_list">
              {/* Messages List Item */}
              {selectedUser?.messages.map((item, i) => {
                return (
                  <li
                    className={` item  ${
                      item.sender !== user.id
                        ? "item_left" ||
                          (theme === "dark" ? "item_left_dark" : "")
                        : "item_right" ||
                          (theme === "dark" ? "item_right_dark" : "")
                    }`}
                    key={i}
                  >
                    {item.text}
                  </li>
                );
              })}
            </ScrollableFeed>
          </div>

          <div
            className={`  footer_message   ${
              theme === "dark" ? "footer_message_dark" : ""
            }`}
          >
            <Input
              id="write_message"
              value={searchMessage}
              placeholder="Message"
              onKeyUp={(e) => (e.key === "Enter" ? handleClick() : false)}
              onChange={(e) => setSearchMessage(e.target.value)}
            />

            <Button
              padding="10px 20px "
              margin="0 0 0 20px"
              onClick={() => handleClick()}
            >
              Send
            </Button>
          </div>
        </>
      )}
    </div>
  );
}

export default Messages;
