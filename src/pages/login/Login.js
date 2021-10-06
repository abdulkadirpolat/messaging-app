import "./login.css";
import { Input, Toggle,Button } from "../../components";
import { useUser } from "../../context/UserContext";
import { Redirect } from "react-router";

import { useForm } from "react-hook-form";

function Login() {
  const { user, login, theme } = useUser();

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const errorValidating = {
    required: true,
    maxLength: 15,
    minLength: 3,
  };

  const submitForm = (data) => {
    const id = "C" + new Date().getTime();
    login(id, data.userName, data.firstName, data.lastName);
  };

  if (user) return <Redirect to="/chat" />;
  return (
    <div className={`login-container ${theme}`}>
      <button className={`toggle-btn ${theme}`}>
        <Toggle />
      </button>

      <form onSubmit={handleSubmit(submitForm)} className="login-card">
        <h3 className={`login-title ${theme}`}>Log in to your account</h3>
        <Input
          error={errors.userName}
          {...register("userName", errorValidating)}
          className={`input ${theme}`}
          placeholder="User Name"
        />
        <Input
          error={errors.firstName}
          {...register("firstName", errorValidating)}
          className={`input ${theme}`}
          placeholder="First Name"
        />
        <Input
          error={errors.lastName}
          {...register("lastName", errorValidating)}
          className={`input ${theme}`}
          placeholder="Last Name"
        />
        <Button bgColor={theme === "dark" ? "#4d8dc8" : ""}>LOGIN</Button>
      </form>
    </div>
  );
}

export default Login;
