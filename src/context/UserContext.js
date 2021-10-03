import { useContext, createContext, useState, useEffect } from "react";

import userDataList from "../data.json";
const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");
  const [userData, setUserData] = useState(userDataList.users);
  const [detailIsVisible, setDetailIsVisible] = useState(false);
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  const login = (id, username, firstname, lastname) => {
    if (!username === "" && !firstname === "" && !lastname === "") {
      const user = { id, username, firstname, lastname };

      setUser(user);
      localStorage.setItem("user_information", JSON.stringify(user));
    }
  };

  const logout = () => {
    setUser(null);
    setUserData(userDataList.users);
    setSelectedUser(null);
    localStorage.removeItem("user_information");
  };
  useEffect(() => {
    const userNameStorage = localStorage.getItem("user_information");
    if (userNameStorage) {
      const userObject = JSON.parse(userNameStorage);
      setUser(userObject);
    }
  }, []);

  const friendListUserId = (userId) => {
    const userIdData = userData?.find((use) => use.id === userId);
    if (userIdData) setSelectedUser(userIdData);
  };

  const sendNewMessage = (messageText) => {
    if (!selectedUser) return;
    const newSelectedUser = {
      ...selectedUser,
      messages: [
        ...selectedUser.messages,
        {
          id: "C" + new Date().getTime(),
          text: messageText,
          sender: user.id,
        },
      ],
    };
    setSelectedUser(newSelectedUser);

    const newUserList = userData.map((newUser) => {
      if (newUser.id === selectedUser.id) return newSelectedUser;
      return newUser;
    });

    setUserData(newUserList);
  };

  const values = {
    user,
    setUser,
    login,
    logout,
    theme,
    setTheme,
    sendNewMessage,
    selectedUser,
    setSelectedUser,
    userData,
    setUserData,
    friendListUserId,
    setDetailIsVisible,
    detailIsVisible,
  };

  return (
    <UserContext.Provider value={values}>{children} </UserContext.Provider>
  );
};

const useUser = () => useContext(UserContext);

export { useUser, UserProvider };
