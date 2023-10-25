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
