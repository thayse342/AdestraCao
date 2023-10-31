import React, { useState, useEffect } from "react";
import axios from "axios";
import Layout from "../../components/shared/Layout/Layout";
import ConfigAdminStyled from "./configAdmin.styles";
import Input from "../../components/common/Input/Input";
import Button from "../../components/common/Button/Button";

const ConfigAdmin = () => {
  const [adestrador, setAdestrador] = useState({
    nome: "",
    email: "",
  });

  const [tipoMensagem, setTipoMensagem] = useState(null);
  const [mensagemAlerta, setMensagemAlerta] = useState("");
  const [novaSenha, setNovaSenha] = useState("");
  const [confirmarSenha, setConfirmarSenha] = useState("");
  const [senhaAtual, setSenhaAtual] = useState("");

  const duracaoMensagem = 3000;

  useEffect(() => {
    const buscarAdestrador = async () => {
      try {
        const resposta = await axios.get("http://localhost:3000/adestrador");
        setAdestrador(resposta.data[0]);
        console.log("Adestrador carregado:", resposta.data[0]);
      } catch (erro) {
        console.error("Erro ao buscar o adestrador:", erro);
        setMensagemAlerta("Erro ao buscar o adestrador. Tente novamente.");
        setTipoMensagem("error");
      }
    };

    buscarAdestrador();
  }, []);

  const alterarSenha = async () => {
    if (!adestrador) {
      console.error("Nenhum adestrador encontrado.");
      return;
    }

    const url = `http://localhost:3000/adestrador/653f2f5dc7d96051b7b3e8cf`;

    const eSenhaAtualValida = await validarSenhaAtual();

    if (eSenhaAtualValida) {
      try {
        const dadosSenhaAtualizada = {
          id: adestrador.id,
          nome: adestrador.nome,
          email: adestrador.email,
          senha: novaSenha,
        };

        console.log(
          "Dados enviados para atualização de senha:",
          dadosSenhaAtualizada
        );

        const resposta = await axios.patch(url, dadosSenhaAtualizada);

        console.log("Solicitação PATCH enviada:", resposta.config);
        console.log("Resposta da atualização de senha:", resposta.data);

        if (resposta.status === 200) {
          setMensagemAlerta("Cadastro atualizado com sucesso.");
          setTipoMensagem("success");
          setTimeout(() => setMensagemAlerta(""), duracaoMensagem);
        } else {
          setMensagemAlerta("Erro ao atualizar a senha.");
          setTipoMensagem("error");
        }
      } catch (erro) {
        setMensagemAlerta("Erro ao atualizar cadastro " + erro);
        setTipoMensagem("error");
      }
    } else {
      setMensagemAlerta(
        "Senha atual incorreta. Não foi possível alterar o cadastro."
      );
      setTipoMensagem("error");
    }
  };

  const validarSenhaAtual = async () => {
    try {
      const resposta = await axios.post("http://localhost:3000/login", {
        email: adestrador.email,
        senha: senhaAtual,
      });
      console.log("Resposta da validação de senha atual:", resposta);

      return resposta.status === 200;
    } catch (erro) {
      return false;
    }
  };

  const salvarEdicao = async (e) => {
    e.preventDefault(); 

    if (novaSenha !== confirmarSenha) {
      setMensagemAlerta("As senhas não coincidem.");
      setTipoMensagem("error");
      return;
    }

    await alterarSenha();
    setNovaSenha("");
    setConfirmarSenha("");
    setSenhaAtual("");
  };

  return (
    <Layout>
      <ConfigAdminStyled>
        {tipoMensagem === "error" && mensagemAlerta && (
          <div className="error-message">{mensagemAlerta}</div>
        )}
        {tipoMensagem === "success" && mensagemAlerta && (
          <div className="success-message">{mensagemAlerta}</div>
        )}
        <form onSubmit={salvarEdicao}>
          <h3>Editar Cadastro</h3>
          <label>Nome</label>
          <Input
            type="text"
            value={adestrador.nome}
            onChange={(e) => {
              setAdestrador({ ...adestrador, nome: e.target.value });
            }}
          />
          <label>Email</label>
          <Input
            type="text"
            value={adestrador.email}
            onChange={(e) => {
              setAdestrador({ ...adestrador, email: e.target.value });
            }}
          />
          <hr />
          <h3>Alterar Senha</h3>
          <div className="containerItem">
            <div className="item">
              <label>Nova Senha</label>
              <Input
                className="input"
                type="password"
                value={novaSenha}
                onChange={(e) => setNovaSenha(e.target.value)}
              />
            </div>
            <div className="item">
              <label>Confirme a Nova Senha</label>
              <Input
                className="input"
                type="password"
                value={confirmarSenha}
                onChange={(e) => setConfirmarSenha(e.target.value)}
              />
            </div>
          </div>
          <hr />
          <h3>Digite a senha atual para confirmar as alterações</h3>
          <div className="containerItem">
            <div className="item">
              <label>Senha atual</label>
              <Input
                className="input"
                type="password"
                value={senhaAtual}
                onChange={(e) => setSenhaAtual(e.target.value)}
              />
            </div>
            <Button
              texto="Salvar"
              width="30%"
              height="auto"
              variant="primary"
              type="submit"
              onClick={salvarEdicao}
            />
          </div>
        </form>
      </ConfigAdminStyled>
    </Layout>
  );
};

export default ConfigAdmin;
