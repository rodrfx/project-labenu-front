
import React from "react";
import { Route, Switch } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignUpPage from "../pages/SignUpPage";
import CreateImagePage from "../pages/CreateImagePage";
import DetailPage from "../pages/DetailPage";

export default function Router({setRightButtonText}) {
  return (
      <Switch>
        <Route exact path={"/"}>
        <LoginPage setRightButtonText={setRightButtonText} />
        </Route>
        <Route exact path="/home">
          
          <HomePage />
        </Route>
        <Route exact path="/cadastro">
          <SignUpPage setRightButtonText={setRightButtonText} />
        </Route>
        <Route exact path="/enviar-imagem">
          <CreateImagePage />
        </Route>
        <Route exact path="/detalhe/:id">
          <DetailPage />
        </Route>
        <Route>
          <h1>Erro 404</h1>
        </Route>
      </Switch>
  );
}

