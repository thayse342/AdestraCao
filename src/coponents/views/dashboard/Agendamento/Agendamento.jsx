import {Trash, CheckCircle, Pencil} from "@phosphor-icons/react";
import React from 'react'
import styled, { useTheme } from 'styled-components'

const Agendamento = ({ agendamento }) => {

  const theme = useTheme()



  return (
    <StylesAgendamento>
      <div className='todo'>
          <div className="conteudo">

            {/* Exibe o texto da tarefa */}
            <p>{todo.texto}</p>

            {/* Exibe a categoria da tarefa entre parênteses */}
            <p className="categoria">
              ({todo.categoria})
            </p>
          </div>
          <div>

            {/* Botão que irá marcar uma tarefa como concluída */}
            <button className='complete' onClick={() => completeTodo(agendamento.id)}><CheckCircle size={20} /></button>

            {/* Botão que irá deletar uma tarefa */}
            <button className='delete' onClick={() => removeTodo(agendamento.id)}><Trash size={20} /></button>

            {/* Botão para iniciar a edição de uma tarefa */}
            <button className='edit' onClick={() => startEditingTodo(agendamento.id, todo.texto)}><Pencil size={20} /></button>

          </div>
        </div>
    </StylesAgendamento>
  )
}

export default Agendamento