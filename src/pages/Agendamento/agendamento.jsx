import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Agendamentoview from '../../components/views/dashboard/Agendamento/Agendamento';
import Layout from '../../components/shared/Layout/Layout';
import Search from '../../components/views/dashboard/Search/Search';
import { getAgendamento, updateAgendamento } from '../../service/api';
import Modal from '../../components/common/Modal/Modal';

const Agendamento = () => {
    const params = useParams();
    const [listaAgendamento, setListaAgendamento] = useState([]);
    const [selectedAgendamento, setSelectedAgendamento] = useState(null);
    const [isEditing, setIsEditing] = useState(false);

    async function handleBuscarAgendamento() {
        const resposta = await getAgendamento();
        setListaAgendamento(resposta); // Define a lista de agendamentos com base na resposta da API
    }

    useEffect(() => {
        handleBuscarAgendamento(); // Chama a função de busca ao montar o componente
    }, []); // O segundo argumento vazio faz com que a função seja chamada apenas uma vez no início

    const handleOpenEditModal = (agendamento) => {
        setSelectedAgendamento(agendamento);
        setIsEditing(true);
    }

    const handleCloseEditModal = () => {
        setSelectedAgendamento(null);
        setIsEditing(false);
    }

    const handleSaveEdit = async (editedAgendamento) => {
        try {
            // Chame a função de atualização da API (updateAgendamento) para salvar as alterações
            await updateAgendamento(editedAgendamento._id, editedAgendamento);
            // Atualize o estado da lista de agendamentos após a edição
            const updatedList = listaAgendamento.map((agendamento) => {
                if (agendamento._id === editedAgendamento._id) {
                    return editedAgendamento;
                }
                return agendamento;
            });
            setListaAgendamento(updatedList);
            // Feche o modal de edição
            handleCloseEditModal();
        } catch (error) {
            console.error('Erro ao atualizar o agendamento', error);
        }
    }
    
    return (
        <div>
            <Layout>
                <Search />
                {listaAgendamento.map((agendamento) => (
                    <Agendamentoview
                        key={agendamento._id}
                        id={agendamento._id}
                        cliente={agendamento.cliente}
                        pet={agendamento.pet}
                        data={agendamento.data}
                        duracao={agendamento.duracao}
                        onEdit={() => handleOpenEditModal(agendamento)}
                    />
                ))}

                {/* Modal para edição */}
                {selectedAgendamento && (
                    <Modal
                    isOpen={isEditing}
                    setCloseModal={handleCloseEditModal}
                    botaosalvar={() => handleSaveEdit(selectedAgendamento)}
                    titulo="Editar Agendamento"
                    mensagemconfirmacao="Confirma as alterações"
                >
                    {/* Campo de edição para o cliente */}
                    <label>Cliente</label>
                    <input
                        type="text"
                        value={selectedAgendamento.cliente}
                        onChange={(e) => {
                            const editedAgendamento = { ...selectedAgendamento };
                            editedAgendamento.cliente = e.target.value;
                            setSelectedAgendamento(editedAgendamento);
                        }}
                    />
                
                    {/* Campo de edição para o pet */}
                    <label>Pet</label>
                    <input
                        type="text"
                        value={selectedAgendamento.pet}
                        onChange={(e) => {
                            const editedAgendamento = { ...selectedAgendamento };
                            editedAgendamento.pet = e.target.value;
                            setSelectedAgendamento(editedAgendamento);
                        }}
                    />
                
                    {/* Campo de edição para a data */}
                    <label>Data</label>
                    <input
                        type="text"
                        value={selectedAgendamento.data}
                        onChange={(e) => {
                            const editedAgendamento = { ...selectedAgendamento };
                            editedAgendamento.data = e.target.value;
                            setSelectedAgendamento(editedAgendamento);
                        }}
                    />
                
                    {/* Campo de edição para a duração */}
                    <label>Duração</label>
                    <input
                        type="text"
                        value={selectedAgendamento.duracao}
                        onChange={(e) => {
                            const editedAgendamento = { ...selectedAgendamento };
                            editedAgendamento.duracao = e.target.value;
                            setSelectedAgendamento(editedAgendamento);
                        }}
                    />
                </Modal>
                
                )}
            </Layout>
        </div>
    );
};

export default Agendamento;