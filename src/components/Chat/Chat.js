import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import { useUser } from "../../context/UserContext";
import Login from "../../pages/login/Login";
import Profile from "../../pages/profile/Profile";
import Error404 from "../Error/Error404";

function Chat() {
  const { user } = useUser();

  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        {user ? (
          <Route path="/chat" component={Profile} />
        ) : (
          <Redirect to="/login" />
        )}
        <Route exact path="/" component={Login} />
        <Route path="*" component={Error404} />
      </Switch>
    </HashRouter>
  );
}

export default Chat;
