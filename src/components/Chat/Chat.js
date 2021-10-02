import { useState } from "react";

import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { useFetch } from "../../context/FetchContext";
import { useUser } from "../../context/UserContext";

import Login from "../../pages/login/Login";
import Profile from "../../pages/profile/Profile";
import Error404 from "../Error/Error404";
import Loading from "../loading/Loading";

function Chat() {
  const { isLoading, setIsLoading } = useFetch();
  const { user } = useUser();
 

  return (
    <HashRouter>
      {isLoading ? (
        <Loading />
      ) : (
        <Switch>
          <Route path="/" exact component={Login} />
          <Route path="/login" component={Login} />
          {user ? (
            <Route path="/chat" component={Profile} />
          ) : (
            <Redirect to="/login" />
          )}

          <Route path="*" component={Error404} />
        </Switch>
      )}
    </HashRouter>
  );
}

export default Chat;
