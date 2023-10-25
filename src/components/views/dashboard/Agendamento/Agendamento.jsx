import {Trash, Pencil} from "@phosphor-icons/react";
import React from 'react'
import styled, { useTheme } from 'styled-components'

const Agendamentoview = () => {





  return (
    <StylesAgendamento>
      <p>Igor</p>
      <p>40028922</p>
      <p>igor@email.com</p>
      <button><Pencil size={25} color='black'/></button>
      <button><Trash size={25} color='black'/></button>
    </StylesAgendamento>
  )
}

export default Agendamentoview
