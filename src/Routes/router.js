
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import CreateImagePage from "../pages/CreateImagePage";


export default function Router({setRightButtonText}) {
  return (
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage setRightButtonText={setRightButtonText} />
        </Route>
        <Route exact path="/cadastro">
          <SignUpPage setRightButtonText={setRightButtonText} />
        </Route>
        <Route exact path="/enviar-imagem">
          <CreateImagePage />
        </Route>
        <Route>
          <HomePage />
        </Route>
      </Switch>
  );
}

