import { useState } from "react";
import "./login.css";
import Toggle from "../../components/Toggle/Toggle";
import { useTheme } from "../../context/ThemeContext";
import { useUser } from "../../context/UserContext";
import { Redirect } from "react-router";
import Input from "../../components/Input/Input"
function Login() {
  const { theme, setTheme } = useTheme();
  const {user, login} = useUser();
  const [userName, setUserName] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
 
if(user) return <Redirect to="/chat" />
  return (
    <div className={`login-container ${theme}`}>
      <button className={`toggle-btn ${theme}`}>
        <Toggle />
      </button> 

      <div className="login-card">
        <h3 className={`login-title ${theme}`}>Log in to your account</h3>
        <Input
          className={`input ${theme}`}
          id="user-name"
          type="text"
          placeholder="User Name"
          onChange= {(e)=>setUserName(e.target.value)}
        />
        <Input
          className={`input ${theme}`}
          id="first-name"
          type="text"
          placeholder="First Name"
          onChange= {(e)=>setFirstName(e.target.value)}
        />
        <Input
          className={`input ${theme}`}
          id="last-name"
          type="text"
          placeholder="Last Name"
          onChange= {(e)=>setLastName(e.target.value)}
        />
        <button  className= {`login-btn ${theme}`} onClick={() =>{
          const id = "1577try55rty55rty";
          login(id, userName, firstName, lastName)}}>
          LOGIN
        </button>
      </div>
    </div>
  );
}

export default Login;
