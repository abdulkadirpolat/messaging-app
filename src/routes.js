import React from "react";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import { useUser } from "./context/UserContext";
import Login from "./pages/login/Login";
import Chat from "./pages/chat/Chat";
import Error404 from "./pages/error/Error404";

function Routes() {
  const { user, selectedUser } = useUser();

  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        {user ? (
          <Route path="/chat" exact component={Chat} />
        ) : (
          <Redirect to="/login" />
        )}
    {selectedUser &&  <Route path={`/user/:${selectedUser.id}/details`} component={Chat} />  }
        <Route exact path="/" component={Login} />
        <Route path="*" component={Error404} />
      </Switch>
    </HashRouter>
  );
} 

export default Routes;
