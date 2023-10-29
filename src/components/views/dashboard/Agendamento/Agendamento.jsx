import { Trash, Pencil, Check } from "@phosphor-icons/react";
import React, { useState} from 'react';
import styled from 'styled-components';

const Agendamentoview = ({ id, cliente, pet, data, duracao, onEdit, onExcluir }) => {
  const [isStrikethrough, setIsStrikethrough] = useState(false);

  const handleCheckClick = () => {
    setIsStrikethrough(!isStrikethrough);
  }

  return (


    <StylesAgendamento>
      <button onClick={handleCheckClick}>
        <Check size={22} color={isStrikethrough ? 'blue' : 'black'} />
      </button>
      <p style={{ textDecoration: isStrikethrough ? "line-through" : "none" }}>Cliente: {cliente}</p>
      <p style={{ textDecoration: isStrikethrough ? "line-through" : "none" }}>Dog: {pet}</p>
      <p style={{ textDecoration: isStrikethrough ? "line-through" : "none" }}>Data: {data}</p>
      <p style={{ textDecoration: isStrikethrough ? "line-through" : "none" }}>Duração: {duracao}</p>
      <button onClick={() => onEdit({ cliente, pet, data, duracao})}><Pencil size={25} color='black' /></button>
      <button onClick={onExcluir}><Trash size={25} color='black' /></button>
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
    border: none;
  }

  button:hover {
    opacity: 1;
    transform: scale(1.05);
  }
`;