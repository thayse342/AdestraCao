import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../../components/shared/Layout/Layout'
import Search from '../../components/views/dashboard/Search/Search'
import Clienteview from '../../components/views/dashboard/Cliente/cliente'
import { getClientes } from '../../service/api';

const Clientes = () => {
    const params = useParams();
    const [listaClientes, setListaClientes] = useState([]);

    async function handleBuscarClientes() {
        const resposta = await getClientes();
        setListaClientes(resposta);
    }

    useEffect(() => {
        handleBuscarClientes(); 
    }, []); 

return (
    <div>
         <Layout >
            <Search />
            {listaClientes.map((cliente) => (
                    <Clienteview
                        key={cliente._id} // Certifique-se de usar a propriedade correta para a chave
                        id={cliente._id}
                        nome={cliente.nome}
                        email={cliente.email}
                        telefone={cliente.telefone}
                    />
                ))}
         </Layout>
    </div>
)

}

export default Clientes