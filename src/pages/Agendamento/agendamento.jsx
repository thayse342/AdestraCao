import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Agendamentoview from '../../components/views/dashboard/Agendamento/Agendamento';
import Layout from '../../components/shared/Layout/Layout';
import Search from '../../components/views/dashboard/Search/Search';
import { getAgendamento } from '../../service/api';

const Agendamento = () => {
    const params = useParams();
    const [listaAgendamento, setListaAgendamento] = useState([]);

    async function handleBuscarAgendamento() {
        const resposta = await getAgendamento();
        setListaAgendamento(resposta); // Define a lista de agendamentos com base na resposta da API
    }

    useEffect(() => {
        handleBuscarAgendamento(); // Chama a função de busca ao montar o componente
    }, []); // O segundo argumento vazio faz com que a função seja chamada apenas uma vez no início

    return (
        <div>
            <Layout>
                <Search />
                {listaAgendamento.map((agendamento) => (
                    <Agendamentoview
                        key={agendamento._id} // Certifique-se de usar a propriedade correta para a chave
                        id={agendamento._id}
                        cliente={agendamento.cliente}
                        pet={agendamento.pet}
                        data={agendamento.data}
                        duracao={agendamento.duracao}
                    />
                ))}
            </Layout>
        </div>
    );
};

export default Agendamento;
