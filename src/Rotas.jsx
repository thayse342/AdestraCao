import { BrowserRouter, Routes, Route } from "react-router-dom";
import Agendamento from "./pages/agendamento/agendamento";
import Login from "./pages/Login/Login";
import Landinpage from "./pages/Landingpage/Landinpage";

const Rotas = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login/>} />
        <Route path="/configAdmin" element={<Login/>} />
        <Route path="/agendamento" element={<Agendamento/>} />
        <Route path="/cadastro" element={<Agendamento/>} />
        <Route path="/" element={<Landinpage/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Rotas;