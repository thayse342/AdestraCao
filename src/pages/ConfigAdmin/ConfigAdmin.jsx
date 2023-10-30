import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Layout from '../../components/shared/Layout/Layout';
import Modal from '../../components/common/Modal/Modal';
import ConfigAdminStyled from './configAdmin.styles';
import Input from '../../components/common/Input/Input';
import ConfigAdminView from '../../components/views/dashboard/ConfigAdmin/ConfigAdminView'; 

const ConfigAdmin = () => {
  const [adestradores, setAdestradores] = useState([]);
  const [selectedAdestrador, setSelectedAdestrador] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [messageType, setMessageType] = useState('error');
  const [alertMessage, setAlertMessage] = useState('');
  const [messageDuration] = useState(3000);

  async function handleBuscarAdestradores() {
    try {
      const response = await axios.get('http://localhost:3000/adestrador');
      setAdestradores(response.data);
    } catch (error) {
      console.error('Erro ao buscar adestradores:', error);
    }
  }

  const handleOpenEditModal = (adestrador) => {
    setSelectedAdestrador(adestrador);
    setIsEditing(true);
  };

  const handleCloseEditModal = () => {
    setSelectedAdestrador(null);
    setIsEditing(false);
  };

  const handleSaveEdit = async () => {
    try {
      const editedAdestrador = { ...selectedAdestrador };
      const response = await axios.put(`http://localhost:3000/adestrador/${editedAdestrador.id}`, editedAdestrador);

      if (response.status === 200) {
        setAdestradores(adestradores.map((adestrador) => (adestrador.id === editedAdestrador.id ? editedAdestrador : adestrador)));
        handleCloseEditModal();
        setAlertMessage('Adestrador atualizado com sucesso.');
        setMessageType('success');
        setTimeout(() => setAlertMessage(null), messageDuration);
      } else {
        setAlertMessage('Erro ao atualizar adestrador.');
        setMessageType('error');
        setTimeout(() => setAlertMessage(null), messageDuration);
      }
    } catch (error) {
      setAlertMessage('Erro ao atualizar adestrador: ' + error);
      setMessageType('error');
      setTimeout(() => setAlertMessage(null), messageDuration);
    }
  }

  useEffect(() => {
    handleBuscarAdestradores();
  }, []);

  return (
    <div>
      <Layout>
        <ConfigAdminStyled>
          {messageType === 'error' && alertMessage && (
            <div className="error-message">{alertMessage}</div>
          )}
          {messageType === 'success' && alertMessage && (
            <div className="success-message">{alertMessage}</div>
          )}
          {adestradores.map((adestrador) => (
            <ConfigAdminView
              key={adestrador.id}
              nome={adestrador.nome}
              email={adestrador.email}
              senha="●●●●●●●"
              onEdit={() => handleOpenEditModal(adestrador)}
            />
          ))}

          {selectedAdestrador && (
            <Modal
              isOpen={isEditing}
              setCloseModal={handleCloseEditModal}
              botaosalvar={handleSaveEdit}
              titulo="Editar Adestrador"
              mensagemconfirmacao="Confirma as alterações"
            >
              <label>Nome</label>
              <input
                type="text"
                value={selectedAdestrador.nome}
                onChange={(e) => {
                  const editedAdestrador = { ...selectedAdestrador };
                  editedAdestrador.nome = e.target.value;
                  setSelectedAdestrador(editedAdestrador);
                }}
              />
              <label>Email</label>
              <input
                type="text"
                value={selectedAdestrador.email}
                onChange={(e) => {
                  const editedAdestrador = { ...selectedAdestrador };
                  editedAdestrador.email = e.target.value;
                  setSelectedAdestrador(editedAdestrador);
                }}
              />
              <label>Senha</label>
              <input
                type="text"
                value={selectedAdestrador.senha}
                onChange={(e) => {
                  const editedAdestrador = { ...selectedAdestrador };
                  editedAdestrador.senha = e.target.value;
                  setSelectedAdestrador(editedAdestrador);
                }}
              />
            </Modal>
          )}
        </ConfigAdminStyled>
      </Layout>
    </div>
  );
};

export default ConfigAdmin;
