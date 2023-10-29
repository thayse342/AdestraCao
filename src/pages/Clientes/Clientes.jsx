import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout'
import Search from '../../components/views/dashboard/Search/Search'
import Clienteview from '../../components/views/dashboard/Cliente/cliente'
import { getClientes, updateCliente, deleteCliente, addCliente } from '../../service/api';
import Modal from '../../components/common/Modal/Modal';

const Clientes = () => {
    const params = useParams();
    const [listaCliente, setListaCliente] = useState([]);
    const [selectedCliente, setSelectedCliente] = useState(null);
    const [isEditing, setIsEditing] = useState(false);
    const [isAdding, setIsAdding] = useState(false);
    const [search, setSearch] = useState("");

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
    }

    const handleOpenAddModal = () => {
        setSelectedCliente({
            nome: '',
            email: '',
            telefone: ''
        });
        setIsAdding(true);
    }

    const handleCloseEditModal = () => {
        setSelectedCliente(null);
        setIsEditing(false);
    }

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
        } catch (error) {
            console.error('Erro ao atualizar o cliente', error);
        }
    }

    const handleExcluirCliente = async (clienteId) => {
        try {
            await deleteCliente(clienteId);
            const updatedList = listaCliente.filter((cliente) => cliente._id !== clienteId);
            setListaCliente(updatedList);
            handleCloseEditModal();
            console.log(`Cliente com ID ${clienteId} excluído com sucesso.`);
        } catch (error) {
            console.error(`Erro ao excluir o cliente com ID ${clienteId}:`, error);
        }
    };

    const handleSaveAdd = async () => {
        try {
            const newCliente = { ...selectedCliente };
            const createdCliente = await addCliente(newCliente);
            setListaCliente([...listaCliente, createdCliente]);
            setIsAdding(false);
        } catch (error) {
            console.error('Erro ao criar o cliente', error);
        }
    };

    useEffect(() => {
        handleBuscarClientes();
    }, [listaCliente]);

return (
    <div>
         <Layout >
            <Search onAdd={handleOpenAddModal} search={search} setSearch={setSearch} />

            {listaCliente.filter((cliente) =>
            cliente.nome.toLowerCase().includes(search.toLowerCase())
            ).map((cliente) => (
                    <Clienteview
                        key={cliente._id} // Certifique-se de usar a propriedade correta para a chave
                        id={cliente._id}
                        nome={cliente.nome}
                        email={cliente.email}
                        telefone={cliente.telefone}
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
                        <label>Nome</label>
                        <input
                            type="text"
                            value={selectedCliente.nome}
                            onChange={(e) => {
                                const addedCliente = { ...selectedCliente };
                                addedCliente.nome = e.target.value;
                                setSelectedCliente(addedCliente);
                            }}
                        />
                        <label>Telefone</label>
                        <input
                            type="text"
                            value={selectedCliente.telefone}
                            onChange={(e) => {
                                const addedCliente = { ...selectedCliente };
                                addedCliente.telefone = e.target.value;
                                setSelectedCliente(addedCliente);
                            }}
                        />
                        <label>Email</label>
                        <input
                            type="text"
                            value={selectedCliente.email}
                            onChange={(e) => {
                                const addedCliente = { ...selectedCliente };
                                addedCliente.email = e.target.value;
                                setSelectedCliente(addedCliente);
                            }}
                        />
                    </Modal>
                )}

         </Layout>
    </div>
)

}

export default Clientes