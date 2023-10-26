import React, { useState } from "react";
import { ArrowFatLeft } from "@phosphor-icons/react";
import axios from "axios";
import { Link } from "react-router-dom";
import LoginStyled from "./login.styles";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";

const Login = () => {
  const [data, setData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = ({ currentTarget: input }) => {
    setData({ ...data, [input.name]: input.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const url = "http://localhost:3000/login";
      const { data: res } = await axios.post(url, data);
      localStorage.setItem("token", res.data);
      window.location = "/agendamento";
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <LoginStyled>
      <div className="voltar">
        <ArrowFatLeft size={32} />
        <Link to="/">Voltar</Link>
      </div>
      <main>
        <div className="stylesLeft">
          <img className="logo" src="/logoLogin.svg" alt="Logotipo" />
          <h2>Bem Vindo!</h2>
          <p>
            Este é um ambiente restrito destinado exclusivamente aos membros da
            equipe da empresa.
            Para continuar, insira suas credenciais de administrador.</p>
          <img className="patinhas" src="/icon-patinhas.svg" alt="Logotipo" />
        </div>
        <div className="stylesRight">
          <form className="form" onSubmit={handleSubmit}>
            <h3>Entrar com as credenciais de administrador</h3>
            <Input
              type="email"
              placeholder="email@email.com"
              name="email"
              onChange={handleChange}
              value={data.email}
              required
            />
            <Input
              type="password"
              placeholder="●●●●●●●"
              name="password"
              onChange={handleChange}
              value={data.password}
              required
            />
            {error && <div className={styles.error_msg}>{error}</div>}
            <Button
              texto="Entrar"
              width="164px"
              variant="primary"
              onClick={handleSubmit}
            />
          </form>
        </div>
      </main>
    </LoginStyled>
  );
};

export default Login;
