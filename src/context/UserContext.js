import { useContext, createContext, useState } from "react";
import { useEffect } from "react/cjs/react.development";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [chat, setChat] = useState([]);
  const [myMessage, setMyMessage] = useState([]);
  const [avatar, setAvatar] = useState("");
  const [messagesData, setMessagesData] = useState("");
  const [detail, setDetail] = useState(false);

  const login = (id, username, firstname, lastname) => {
    if (!username == "" && !firstname == "" && !lastname == "") {
      const user = { id, username, firstname, lastname };

      setUser(user);
      localStorage.setItem("user_information", JSON.stringify(user));
    }
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user_information");
  };
  useEffect(() => {
    const userNameStorage = localStorage.getItem("user_information");
    if (userNameStorage) {
      const userObject = JSON.parse(userNameStorage);
      setUser(userObject);
    }
  }, []);

  const values = {
    user,
    setUser,
    login,
    logout,
    chat,
    setChat,
    myMessage,
    setMyMessage,
    avatar,
    setAvatar,
    messagesData,
    setMessagesData,
    detail,
    setDetail,
  };

  return (
    <UserContext.Provider value={values}>{children} </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
