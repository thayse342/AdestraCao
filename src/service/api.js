import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/',
})

export const getAgendamento = async () => {
    const resposta = await api.get(`/agendamento`)
    return resposta.data
  }

export const getClientes = async () => {
    const resposta = await api.get(`/cliente`)
    return resposta.data
  }

  export const updateAgendamento = async (id, data) => {
    try {
      // Realize uma solicitação PUT para a rota de atualização da API
      const resposta = await api.put(`/agendamento/${id}`, data);
      return resposta.data;
    } catch (error) {
      throw error; // Lidar com erros de solicitação aqui, se necessário
    }
  }
  