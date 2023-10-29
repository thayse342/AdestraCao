import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Agendamentoview from "../../components/views/dashboard/Agendamento/Agendamento";
import Layout from "../../components/shared/Layout/Layout";
import Search from "../../components/views/dashboard/Search/Search";
import {
  getAgendamento,
  updateAgendamento,
  deleteAgendamento,
  addAgendamento,
} from "../../service/api";
import Modal from "../../components/common/Modal/Modal";
import { Link } from "react-router-dom";
import AgendamentoStyled from "./agendamento.styles";
import Input from "../../components/common/Input/Input";

const Agendamento = () => {
  const params = useParams();
  const [listaAgendamento, setListaAgendamento] = useState([]);
  const [selectedAgendamento, setSelectedAgendamento] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [search, setSearch] = useState("");

  async function handleBuscarAgendamento() {
    const resposta = await getAgendamento();
    setListaAgendamento(resposta);
  }

  useEffect(() => {
    handleBuscarAgendamento();
  }, []);

  const handleOpenEditModal = (agendamento) => {
    setSelectedAgendamento(agendamento);
    setIsEditing(true);
  };

  const handleOpenAddModal = () => {
    setSelectedAgendamento({
      cliente: "",
      pet: "",
      data: "",
      duracao: "",
    });
    setIsAdding(true);
  };

  const handleCloseEditModal = () => {
    setSelectedAgendamento(null);
    setIsEditing(false);
  };

  const handleSaveEdit = async (editedAgendamento) => {
    try {
      await updateAgendamento(editedAgendamento._id, editedAgendamento);
      const updatedList = listaAgendamento.map((agendamento) => {
        if (agendamento._id === editedAgendamento._id) {
          return editedAgendamento;
        }
        return agendamento;
      });
      setListaAgendamento(updatedList);
      handleCloseEditModal();
    } catch (error) {
      console.error("Erro ao atualizar o agendamento", error);
    }
  };

  const handleExcluirAgendamento = async (agendamentoId) => {
    try {
      await deleteAgendamento(agendamentoId);
      const updatedList = listaAgendamento.filter(
        (agendamento) => agendamento._id !== agendamentoId
      );
      setListaAgendamento(updatedList);
      handleCloseEditModal();
      console.log(`Agendamento com ID ${agendamentoId} excluído com sucesso.`);
    } catch (error) {
      console.error(
        `Erro ao excluir o agendamento com ID ${agendamentoId}:`,
        error
      );
    }
  };

  const handleSaveAdd = async () => {
    try {
      const newAgendamento = { ...selectedAgendamento };
      const createdAgendamento = await addAgendamento(newAgendamento);
      setListaAgendamento([...listaAgendamento, createdAgendamento]);
      setIsAdding(false);
    } catch (error) {
      console.error("Erro ao criar o agendamento", error);
    }
  };

  useEffect(() => {
    handleBuscarAgendamento();
  }, [listaAgendamento]);

  return (
    <Layout>
      <AgendamentoStyled>
        <Search onAdd={handleOpenAddModal} search={search} setSearch={setSearch} />

        {listaAgendamento
          .filter((agendamento) =>
            agendamento.cliente && agendamento.cliente.toLowerCase().includes(search.toLowerCase())
          )
          .map((agendamento) => (
          <Agendamentoview
            key={agendamento._id}
            id={agendamento._id}
            cliente={agendamento.cliente}
            pet={agendamento.pet}
            data={agendamento.data}
            duracao={agendamento.duracao}
            onEdit={() => handleOpenEditModal(agendamento)}
            onExcluir={() => handleExcluirAgendamento(agendamento._id)}
          />
        ))}

        {selectedAgendamento && (
          <Modal
            isOpen={isEditing}
            setCloseModal={handleCloseEditModal}
            botaosalvar={() => handleSaveEdit(selectedAgendamento)}
            titulo="Editar Agendamento"
            mensagemconfirmacao="Confirma as alterações"
          >
            <div className="inputContainer">
              <div className="inputItem">
                <label>Cliente</label>
                <Input
                  width="100%"
                  type="text"
                  value={selectedAgendamento.cliente}
                  onChange={(e) => {
                    const editedAgendamento = { ...selectedAgendamento };
                    editedAgendamento.cliente = e.target.value;
                    setSelectedAgendamento(editedAgendamento);
                  }}
                />
              </div>
              <div className="inputItem">
                <label>Pet</label>
                <Input
                  width="100%"
                  type="text"
                  value={selectedAgendamento.pet}
                  onChange={(e) => {
                    const editedAgendamento = { ...selectedAgendamento };
                    editedAgendamento.pet = e.target.value;
                    setSelectedAgendamento(editedAgendamento);
                  }}
                />
              </div>
              <div className="inputItem">
                <label>Data</label>
                <Input
                  width="100%"
                  type="text"
                  value={selectedAgendamento.data}
                  onChange={(e) => {
                    const editedAgendamento = { ...selectedAgendamento };
                    editedAgendamento.data = e.target.value;
                    setSelectedAgendamento(editedAgendamento);
                  }}
                />
              </div>
              <div className="inputItem">
                <label>Duração</label>
                <Input
                  width="100%"
                  type="text"
                  value={selectedAgendamento.duracao}
                  onChange={(e) => {
                    const editedAgendamento = { ...selectedAgendamento };
                    editedAgendamento.duracao = e.target.value;
                    setSelectedAgendamento(editedAgendamento);
                  }}
                />
              </div>
            </div>
          </Modal>
        )}

        {isAdding && (
          <Modal
            isOpen={isAdding}
            setCloseModal={() => setIsAdding(false)}
            botaosalvar={() => handleSaveAdd()}
            titulo="Adicionar Agendamento"
            mensagemconfirmacao="Confirma as informações"
          >
            <div className="inputContainer">
              <div className="inputItem">
                <label>Cliente</label>
                <Input
                  width="100%"
                  type="text"
                  value={selectedAgendamento.cliente}
                  onChange={(e) => {
                    const addedAgendamento = { ...selectedAgendamento };
                    addedAgendamento.cliente = e.target.value;
                    setSelectedAgendamento(addedAgendamento);
                  }}
                />
              </div>
              <div className="inputItem">
                <label>Pet</label>
                <Input
                  width="100%"
                  type="text"
                  value={selectedAgendamento.pet}
                  onChange={(e) => {
                    const addedAgendamento = { ...selectedAgendamento };
                    addedAgendamento.pet = e.target.value;
                    setSelectedAgendamento(addedAgendamento);
                  }}
                />
              </div>
              <div className="inputItem">
                <label>Data</label>
                <Input
                  width="100%"
                  type="text"
                  value={selectedAgendamento.data}
                  onChange={(e) => {
                    const addedAgendamento = { ...selectedAgendamento };
                    addedAgendamento.data = e.target.value;
                    setSelectedAgendamento(addedAgendamento);
                  }}
                />
              </div>
              <div className="inputItem">
                <label>Duração</label>
                <Input
                  width="100%"
                  type="text"
                  value={selectedAgendamento.duracao}
                  onChange={(e) => {
                    const addedAgendamento = { ...selectedAgendamento };
                    addedAgendamento.duracao = e.target.value;
                    setSelectedAgendamento(addedAgendamento);
                  }}
                />
              </div>
            </div>
          </Modal>
        )}
      </AgendamentoStyled>
    </Layout>
  );
};

export default Agendamento;
