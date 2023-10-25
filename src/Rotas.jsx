import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { GlobalStyle } from './style/GlobalStyles'
import Agendamento from './pages/Agendamento/agendamento'

const Rotas = () => {
  return (

    <BrowserRouter>
      
        <GlobalStyle />
        <Routes>
          <Route path='/agendamento' element={<Agendamento/>} />
        </Routes>
    </BrowserRouter>

  )
}

export default Rotas

//Criar o arquivo e o componente rotas
//importar o BR -  Pai da aplicação
//importa Routes -  define o que é dinamico e o que é estatico
//Criar as paginas que serão utilizadas
//Importar o Route -  define o path(caminho) de cada pagina
//Importar Themeprovider, tema, e o globalStyle
//Importar o componente rotas na raiz do projeto, main.jsx