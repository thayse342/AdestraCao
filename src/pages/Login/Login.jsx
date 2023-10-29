import React, { useState, useEffect } from "react";
import { ArrowFatLeft } from "@phosphor-icons/react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LoginStyled from "./login.styles";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";
import Modal from "../../components/common/Modal/Modal";
import LoadingSpinner from "../../components/common/Loading/Loading"; 

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [resetEmail, setResetEmail] = useState("");
  const [messageType, setMessageType] = useState("error");
  const [alertMessage, setAlertMessage] = useState("");
  const [isPasswordResetRequested, setIsPasswordResetRequested] =
    useState(false);
  const [isModalOnLogin, setIsModalOnLogin] = useState(true);
  const [modalConfirmMessage, setModalConfirmMessage] = useState("");
  const [isResettingPassword, setIsResettingPassword] = useState(false); 

  const handlePasswordReset = () => {
    setIsPasswordResetRequested(true);
    setResetEmail("");
    setModalConfirmMessage("");
  };

  const handleCancelReset = () => {
    setIsPasswordResetRequested(false);
    setResetEmail("");
    setModalConfirmMessage("");
  };

  const handleConfirmReset = async () => {
    if (!resetEmail) {
      setModalConfirmMessage("Informe o e-mail cadastrado");
      setTimeout(() => {
        setModalConfirmMessage("");
      }, 3000);
      return;
    }

    try {
      setIsResettingPassword(true); 

      const response = await axios.post("http://localhost:3000/resetPassword", {
        email: resetEmail,
      });

      if (response.data.success) {
        await new Promise((resolve) => setTimeout(resolve, 3000));
        setAlertMessage(
          `Instruções para redefinição de senha enviadas para: ${resetEmail}`
        );
        setMessageType("success");
        setIsPasswordResetRequested(false);
        setTimeout(() => {
          setAlertMessage("");
          setMessageType(null);
        }, 3000);
      }
    } catch (error) {
      setModalConfirmMessage("E-mail não encontrado");
      setTimeout(() => {
        setModalConfirmMessage("");
      }, 3000);
    } finally {
      setIsResettingPassword(false); 
    }
  };

  async function submit(e) {
    e.preventDefault();

    if (!email || !senha) {
      setAlertMessage("Email e senha são obrigatórios");
      setMessageType("error");
      setTimeout(() => {
        setAlertMessage("");
        setMessageType(null);
      }, 3000);
      return;
    }

    try {
      const response = await axios.post("http://localhost:3000/login", {
        email,
        senha,
      });

      if (response.data.success) {
        setEmail("");
        setSenha("");
        navigate("/agendamento");
      }
    } catch (error) {
      setEmail("");
      setSenha("");
      console.error("Erro:", error);
      if (error.response && error.response.status === 401) {
        setAlertMessage("Login falhou. Verifique suas credenciais");
        setMessageType("error");
        setTimeout(() => {
          setAlertMessage("");
          setMessageType(null);
        }, 3000);
      } else if (response.status === 404) {
        setModalConfirmMessage("E-mail não encontrado no banco de dados");
        setTimeout(() => {
          setModalConfirmMessage("");
        }, 3000);
      }
    }
  }

  return (
    <LoginStyled>
      <div className="voltar">
        <ArrowFatLeft size={32} />
        <Link to="/">Voltar</Link>
      </div>
      {messageType === "error" && alertMessage && (
        <div className="error-message">{alertMessage}</div>
      )}
      {messageType === "success" && alertMessage && (
        <div className="success-message">{alertMessage}</div>
      )}
      <main>
        <div className="stylesLeft">
          <img className="logo" src="/logoLogin.svg" alt="Logotipo" />
          <h2>Bem Vindo!</h2>
          <p>
            Este é um ambiente restrito destinado exclusivamente aos membros da
            equipe da empresa. Para continuar, insira suas credenciais de
            administrador.
          </p>
          <img className="patinhas" src="/icon-patinhas.svg" alt="Logotipo" />
        </div>
        <div className="stylesRight">
          <form className="form" action="POST">
            <h3>Entrar com as credenciais de administrador</h3>
            <Input
              type="email"
              placeholder="email@email.com"
              name="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
            <Input
              type="password"
              placeholder="●●●●●●●"
              name="senha"
              value={senha}
              onChange={(e) => {
                setSenha(e.target.value);
              }}
              required
            />
            <Link
              className="password-reset-link"
              to=""
              onClick={handlePasswordReset}
              
            >
              Esqueci minha senha
            </Link>
            <Button
              texto="Entrar"
              width="30%"
              height="auto"
              variant="primary"
              type="submit"
              onClick={submit}
            />
          </form>
          {isPasswordResetRequested && (
            <Modal
              isOpen={isPasswordResetRequested}
              setCloseModal={handleCancelReset}
              titulo={"Redefinir senha"}
              mensagemconfirmacao={modalConfirmMessage}
              botaosalvar={handleConfirmReset}
              isModalOnLogin={isModalOnLogin}
            >
              <p>
                Informe o e-mail cadastrado para receber as orientações de
                redefinição de senha:
              </p>
              {isResettingPassword && <LoadingSpinner />} 
              <Input
                width= "100%"
                type="email"
                placeholder="email@email.com"
                name="resetEmail"
                value={resetEmail}
                onChange={(e) => {
                  setResetEmail(e.target.value);
                }}
                required
              />
            </Modal>
          )}
        </div>
      </main>
    </LoginStyled>
  );
};

export default Login;
