
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import CreateImagePage from "../pages/CreateImagePage";

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={["/" , "/explorar"]}>
          <HomePage />
        </Route>
        <Route exact path="/login">
          <LoginPage />
        </Route>
        <Route exact path="/cadastro">
          <SignUpPage />
        </Route>
        <Route exact path="/enviar-imagem">
          <CreateImagePage />
        </Route>
        <Route>
          <HomePage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

