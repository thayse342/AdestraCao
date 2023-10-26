import {Trash, Pencil, User} from "@phosphor-icons/react";
import React from 'react'
import styled, { useTheme } from 'styled-components'

const Clienteview = () => {

  return (
    <StylesCliente>
      <button><User size={22} color='black'/></button>
      <p>Igor</p>
      <p>40028922</p>
      <p>igor@email.com</p>
      <button><Pencil size={25} color='black'/></button>
      <button><Trash size={25} color='black'/></button>
    </StylesCliente>
  )
}

export default Clienteview

const StylesCliente = styled.li`
    width: 100%;
    padding: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
    border-radius: 8px;

    > button {
    background-color: transparent; /* Fundo branco */
    border: 2px solid black; /* Borda verde médio */
  }

    button:hover {
    opacity: 1;
    transform: scale(1.05); /* Efeito de escala suave no hover */
}
`