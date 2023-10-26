import {MagnifyingGlass} from "@phosphor-icons/react";
import React from 'react'
import styled from 'styled-components'

/* Componente `Search` para realizar pesquisas */
const Search = () => {
  return (
    <StylesSearch>
        <h2><MagnifyingGlass size={20} /> Pesquisar</h2>
        <input type="text" placeholder="Digite para pesquisar"/>
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
`