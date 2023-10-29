import {MagnifyingGlass, Plus} from "@phosphor-icons/react";
import React from 'react'
import styled from 'styled-components'

/* Componente `Search` para realizar pesquisas */
const Search = ({onAdd}) => {
  return (
    <StylesSearch>
        <h2><MagnifyingGlass size={20} /> Pesquisar</h2>
        <input type="text" placeholder="Digite para pesquisar"/>
        <button onClick={onAdd}><Plus size={25} color='black' /></button>
    </StylesSearch>
  )
}

export default Search

const StylesSearch = styled.li`
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

    > h2 {
      margin-right: 16px; /* Define a margem à direita para separar o título do input */
    }

    > input {
      flex: 1; /* Faz com que o input ocupe o espaço restante disponível */
      margin-right: 18px; /* Define a margem à direita para separar o input do botão */
    }
`;
