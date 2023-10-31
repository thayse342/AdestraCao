import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout'
import Search from '../../components/views/dashboard/Search/Search'
import ClienteView from '../../components/views/dashboard/Cliente/Cliente'
import { getClientes, updateCliente, deleteCliente, addCliente } from '../../service/api';
import Modal from '../../components/common/Modal/Modal';
import ClienteStyled from './cliente.styles';
import Input from '../../components/common/Input/Input';

const Clientes = () => {
  const params = useParams();
  const [listaCliente, setListaCliente] = useState([]);
  const [selectedCliente, setSelectedCliente] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);
  const [search, setSearch] = useState("");
  const [messageType, setMessageType] = useState("error");
  const [alertMessage, setAlertMessage] = useState("");
  const [messageDuration, setMessageDuration] = useState(3000);

  async function handleBuscarClientes() {
    const resposta = await getClientes();
    setListaCliente(resposta);
  }

  useEffect(() => {
    handleBuscarClientes();
  }, []);

  const handleOpenEditModal = (cliente) => {
    setSelectedCliente(cliente);
    setIsEditing(true);
  };

  const handleOpenAddModal = () => {
    setSelectedCliente({
      nome: "",
      telefone: "",
      email: "",
    });
    setIsAdding(true);
  };

  const handleCloseEditModal = () => {
    setSelectedCliente(null);
    setIsEditing(false);
  };

  const handleSaveEdit = async (editedCliente) => {
    try {
      await updateCliente(editedCliente._id, editedCliente);
      const updatedList = listaCliente.map((cliente) => {
        if (cliente._id === editedCliente._id) {
          return editedCliente;
        }
        return cliente;
      });
      setListaCliente(updatedList);
      handleCloseEditModal();
      setAlertMessage("Cliente editado com sucesso.");
      setMessageType("success");
      setTimeout(() => setAlertMessage(null), messageDuration);
    } catch (error) {
      setAlertMessage("Erro ao atualizar o cliente: " + error);
      setMessageType("error");
      setTimeout(() => setAlertMessage(null), messageDuration);
    }
  };

  const handleExcluirCliente = async (clienteId) => {
    try {
      await deleteCliente(clienteId);
      const updatedList = listaCliente.filter(
        (cliente) => cliente._id !== clienteId
      );
      setListaCliente(updatedList);
      handleCloseEditModal();
      setAlertMessage("Cliente excluído com sucesso.");
      setMessageType("success");
      setTimeout(() => setAlertMessage(null), messageDuration);
    } catch (error) {
      setAlertMessage("Erro ao excluir o cliente: " + error.message);
      setMessageType("error");
      setTimeout(() => setAlertMessage(null), messageDuration);
    }
  };

  const handleSaveAdd = async () => {
    try {
      const newCliente = { ...selectedCliente };
      const createdCliente = await addCliente(newCliente);
      setListaCliente([...listaCliente, createdCliente]);
      setIsAdding(false);
      setAlertMessage("Cliente criado com sucesso.");
      setMessageType("success");
      setTimeout(() => setAlertMessage(null), messageDuration);
    } catch (error) {
      setAlertMessage("Erro ao criar o cliente: " + error.message);
      setMessageType("error");
      setTimeout(() => setAlertMessage(null), messageDuration);
    }
  };

  useEffect(() => {
    handleBuscarClientes();
  }, [listaCliente]);

  return (
    <div>
      <Layout>
        <ClienteStyled>
          <Search onAdd={handleOpenAddModal} search={search} setSearch={setSearch} />

          {messageType === "error" && alertMessage && (
            <div className="error-message">{alertMessage}</div>
          )}
          {messageType === "success" && alertMessage && (
            <div className="success-message">{alertMessage}</div>
          )}
          {listaCliente
            .filter((cliente) =>
              cliente.nome && cliente.nome.toLowerCase().includes(search.toLowerCase())
            )
            .map((cliente) => (
              <ClienteView
                key={cliente._id}
                id={cliente._id}
                nome={cliente.nome}
                telefone={cliente.telefone}
                email={cliente.email}
                onEdit={() => handleOpenEditModal(cliente)}
                onExcluir={() => handleExcluirCliente(cliente._id)}
              />
            ))}

          {selectedCliente && (
            <Modal
              isOpen={isEditing}
              setCloseModal={handleCloseEditModal}
              botaosalvar={() => handleSaveEdit(selectedCliente)}
              titulo="Editar Cliente"
              mensagemconfirmacao="Confirma as alterações"
            >
              <label>Nome</label>
              <input
                type="text"
                value={selectedCliente.nome}
                onChange={(e) => {
                  const editedCliente = { ...selectedCliente };
                  editedCliente.nome = e.target.value;
                  setSelectedCliente(editedCliente);
                }}
              />
              <label>Telefone</label>
              <input
                type="text"
                value={selectedCliente.telefone}
                onChange={(e) => {
                  const editedCliente = { ...selectedCliente };
                  editedCliente.telefone = e.target.value;
                  setSelectedCliente(editedCliente);
                }}
              />
              <label>Email</label>
              <input
                type="text"
                value={selectedCliente.email}
                onChange={(e) => {
                  const editedCliente = { ...selectedCliente };
                  editedCliente.email = e.target.value;
                  setSelectedCliente(editedCliente);
                }}
              />
            </Modal>
          )}

          {isAdding && (
            <Modal
              isOpen={isAdding}
              setCloseModal={() => setIsAdding(false)}
              botaosalvar={() => handleSaveAdd()}
              titulo="Adicionar Cliente"
              mensagemconfirmacao="Confirma as informações"
            >
              <div className="inputContainer">
                <div className="inputItem">
                  <label>Nome</label>
                  <Input
                    width="100%"
                    type="text"
                    value={selectedCliente.nome}
                    onChange={(e) => {
                      const addedCliente = { ...selectedCliente };
                      addedCliente.nome = e.target.value;
                      setSelectedCliente(addedCliente);
                    }}
                  />
                </div>
                <div className="inputItem">
                  <label>Telefone</label>
                  <Input
                    width="100%"
                    type="text"
                    value={selectedCliente.telefone}
                    onChange={(e) => {
                      const addedCliente = { ...selectedCliente };
                      addedCliente.telefone = e.target.value;
                      setSelectedCliente(addedCliente);
                    }}
                  />
                </div>
                <div className="inputItem">
                  <label>Email</label>
                  <Input
                    width="100%"
                    type="text"
                    value={selectedCliente.email}
                    onChange={(e) => {
                      const addedCliente = { ...selectedCliente };
                      addedCliente.email = e.target.value;
                      setSelectedCliente(addedCliente);
                    }}
                  />
                </div>
              </div>
            </Modal>
          )}
        </ClienteStyled>
      </Layout>
    </div>
  );
};

export default Clientes;
