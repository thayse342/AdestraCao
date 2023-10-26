import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:3000/',
})

export const getAgendamento = async () => {
    const resposta = await api.get(`/agendamento`)
    return resposta.data
  }