import { Trash, Pencil, Check } from "@phosphor-icons/react";
import React from 'react';
import styled from 'styled-components';

const Agendamentoview = ({ id, cliente, pet, data, duracao }) => {
  return (


    <StylesAgendamento>
      
      {console.log(`ID: ${id}, Cliente: ${cliente}, Pet: ${pet}, Data: ${data}, Duração: ${duracao}`)}

      <button><Check size={22} color='black' /></button>
      <p>Cliente: {cliente}</p>
      <p>Dog: {pet}</p>
      <p>Data: {data}</p>
      <p>Duração: {duracao}</p>
      <button><Pencil size={25} color='black' /></button>
      <button><Trash size={25} color='black' /></button>
    </StylesAgendamento>
  );
};

export default Agendamentoview;

const StylesAgendamento = styled.li`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  > button {
    background-color: transparent;
    border: 2px solid black;
  }

  button:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;
