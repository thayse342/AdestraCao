import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { GlobalStyle } from "./style/GlobalStyles";
import Agendamento from "./pages/Agendamento/agendamento";
import Login from "./pages/Login/Login";
import Landinpage from "./pages/Landingpage/Landinpage";
import Clientes from "./pages/Clientes/Clientes"

const Rotas = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/configAdmin" element={<Login/>} />
        <Route path="/agendamento" element={<Agendamento/>} />
        <Route path="/clientes" element={<Clientes/>} />
        <Route path="/" element={<Landinpage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;