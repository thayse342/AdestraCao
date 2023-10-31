import { Trash, Pencil, User } from "@phosphor-icons/react";
import React from 'react';
import styled from 'styled-components';

const Clienteview = ({ id, nome, telefone, email, onEdit, onExcluir }) => {
  return (
    <StylesCliente>
      {console.log(`ID: ${id}, Nome: ${nome}, Telefone: ${telefone}, Email: ${email}`)}

      <button><User size={22} color='black' /></button>
      <p>Nome: {nome}</p>
      <p>Telefone: {telefone}</p>
      <p>Email: {email}</p>
      <button onClick={() => onEdit({ nome, telefone, email})}><Pencil size={25} color='black' /></button>
      <button onClick={onExcluir}><Trash size={25} color='black' /></button>
    </StylesCliente>
  );
};

export default Clienteview;

const StylesCliente = styled.li`
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
    transform: scale(1.25);
  }
`;
