import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/",
});

export const getAdestrador = async () => {
  const resposta = await api.get(`/adestrador`);
  return resposta.data;
};

export const updateAdestrador = async (id, data) => {
  try {
    const resposta = await api.put(`/adestrador/${id}`, data);
    return resposta.data;
  } catch (error) {
    throw error; 
  }
};

export const getAgendamento = async () => {
  const resposta = await api.get(`/agendamento`);
  return resposta.data;
};

export const getClientes = async () => {
  const resposta = await api.get(`/cliente`);
  return resposta.data;
};

export const addAgendamento = async (data) => {
  try {
    // Realize uma solicitação POST para a rota de criação de agendamento da API
    const resposta = await api.post("/agendamento", data);
    return resposta.data;
  } catch (error) {
    throw error; // Lidar com erros de solicitação aqui, se necessário
  }
};

export const addCliente = async (data) => {
  try {
    // Realize uma solicitação POST para a rota de criação de agendamento da API
    const resposta = await api.post("/cliente", data);
    return resposta.data;
  } catch (error) {
    throw error; // Lidar com erros de solicitação aqui, se necessário
  }
};

export const updateAgendamento = async (id, data) => {
  try {
    // Realize uma solicitação PUT para a rota de atualização da API
    const resposta = await api.put(`/agendamento/${id}`, data);
    return resposta.data;
  } catch (error) {
    throw error; // Lidar com erros de solicitação aqui, se necessário
  }
};

export const updateCliente = async (id, data) => {
  try {
    // Realize uma solicitação PUT para a rota de atualização da API
    const resposta = await api.put(`/cliente/${id}`, data);
    return resposta.data;
  } catch (error) {
    throw error; // Lidar com erros de solicitação aqui, se necessário
  }
};

export const deleteAgendamento = async (id, data) => {
  try {
    // Realize uma solicitação PUT para a rota de atualização da API
    const resposta = await api.delete(`/agendamento/${id}`, data);
    return resposta.data;
  } catch (error) {
    throw error; // Lidar com erros de solicitação aqui, se necessário
  }
};

export const deleteCliente = async (id, data) => {
  try {
    // Realize uma solicitação PUT para a rota de atualização da API
    const resposta = await api.delete(`/cliente/${id}`, data);
    return resposta.data;
  } catch (error) {
    throw error; // Lidar com erros de solicitação aqui, se necessário
  }
};

export const login = async (email, senha) => {
  try {
    const response = await api.post("/login", { email, senha });
    return response.data;
  } catch (error) {
    throw error;
  }
};
