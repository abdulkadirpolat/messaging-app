import React, { useEffect, useState } from "react";
import Login from './pages/Login.js'
import MessageContainer from "./components/Message/MessageContainer";
// import usersJson from ' mock_users.json'
import "./App.css";
import axios from "axios";
function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    async function FetchUsersData() {
      await axios
        .get("data.json")
        .then((res) => setUsers(res.data))
        .catch((err) => console.log(err))
        .finally(() => setIsLoading(false));
    }
    FetchUsersData();
  }, []);
  console.log(users);
  return (
    <>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="App">
          {/* <Login /> */}
          {/* <MessageContainer /> */}
         
         <MessageContainer usersData= {users} />
   
        </div>
      )}
    </>
  );
}

export default App;
