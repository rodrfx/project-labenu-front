import React, { useState } from "react";
import GlobalStyle from './styles/globalStyles';
import Router from './Routes/router';
import { BrowserRouter } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  const token = localStorage.getItem("token")
  const [rightButtonText, setRightButtonText] = useState (token ? "logout": "Cadastre-se")

  return (
   <>
      <GlobalStyle />
      <BrowserRouter>
      <NavBar rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
      <Router rightButtonText={rightButtonText} setRightButtonText={setRightButtonText} />
      </BrowserRouter>
   </>
  );
}

export default App;
