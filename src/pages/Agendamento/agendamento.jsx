import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Agendamentoview from '../../components/views/dashboard/Agendamento/Agendamento';
import Layout from '../../components/shared/Layout/Layout';
import Search from '../../components/views/dashboard/Search/Search';
import { getAgendamento, updateAgendamento, deleteAgendamento, addAgendamento } from '../../service/api';
import Modal from '../../components/common/Modal/Modal';

const Agendamento = () => {
    const params = useParams();
    const [listaAgendamento, setListaAgendamento] = useState([]);
    const [selectedAgendamento, setSelectedAgendamento] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding] = useState(false);

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
    }

    const handleOpenAddModal = () => {
        setSelectedAgendamento({
            cliente: '',
            pet: '',
            data: '',
            duracao: '',
        });
        setIsAdding(true);
    }

    const handleCloseEditModal = () => {
        setSelectedAgendamento(null);
        setIsEditing(false);
    }

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
            console.error('Erro ao atualizar o agendamento', error);
        }
    }

    const handleExcluirAgendamento = async (agendamentoId) => {
        try {
            await deleteAgendamento(agendamentoId);
            const updatedList = listaAgendamento.filter((agendamento) => agendamento._id !== agendamentoId);
            setListaAgendamento(updatedList);
            handleCloseEditModal();
            console.log(`Agendamento com ID ${agendamentoId} excluído com sucesso.`);
        } catch (error) {
            console.error(`Erro ao excluir o agendamento com ID ${agendamentoId}:`, error);
        }
    };

    const handleSaveAdd = async () => {
        try {
            const newAgendamento = { ...selectedAgendamento };
            const createdAgendamento = await addAgendamento(newAgendamento);
            setListaAgendamento([...listaAgendamento, createdAgendamento]);
            setIsAdding(false);
        } catch (error) {
            console.error('Erro ao criar o agendamento', error);
        }
    };

    useEffect(() => {
        handleBuscarAgendamento();
    }, [listaAgendamento]);

    return (
        <div>
            <Layout>
                <Search onAdd={handleOpenAddModal} />
                
                {listaAgendamento.map((agendamento) => (
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

                {isAdding && (
                    <Modal
                        isOpen={isAdding}
                        setCloseModal={() => setIsAdding(false)}
                        botaosalvar={() => handleSaveAdd()}
                        titulo="Adicionar Agendamento"
                        mensagemconfirmacao="Confirma as informações"
                    >
                        <label>Cliente</label>
                        <input
                            type="text"
                            value={selectedAgendamento.cliente}
                            onChange={(e) => {
                                const addedAgendamento = { ...selectedAgendamento };
                                addedAgendamento.cliente = e.target.value;
                                setSelectedAgendamento(addedAgendamento);
                            }}
                        />
                        <label>Pet</label>
                        <input
                            type="text"
                            value={selectedAgendamento.pet}
                            onChange={(e) => {
                                const addedAgendamento = { ...selectedAgendamento };
                                addedAgendamento.pet = e.target.value;
                                setSelectedAgendamento(addedAgendamento);
                            }}
                        />
                        <label>Data</label>
                        <input
                            type="text"
                            value={selectedAgendamento.data}
                            onChange={(e) => {
                                const addedAgendamento = { ...selectedAgendamento };
                                addedAgendamento.data = e.target.value;
                                setSelectedAgendamento(addedAgendamento);
                            }}
                        />
                        <label>Duração</label>
                        <input
                            type="text"
                            value={selectedAgendamento.duracao}
                            onChange={(e) => {
                                const addedAgendamento = { ...selectedAgendamento };
                                addedAgendamento.duracao = e.target.value;
                                setSelectedAgendamento(addedAgendamento);
                            }}
                        />
                    </Modal>
                )}
            </Layout>
        </div>
    );
};

export default Agendamento;
