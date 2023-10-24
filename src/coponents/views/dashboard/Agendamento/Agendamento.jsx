import {Trash, CheckCircle, Pencil} from "@phosphor-icons/react";
import React from 'react'
import styled, { useTheme } from 'styled-components'

const Agendamento = ({ agendamento }) => {

  const theme = useTheme()



  return (
    <StylesAgendamento>
      <div className='todo' style={{textDecoration: todo.completo ? "line-through" : ""}}>
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
            <button className='complete' onClick={() => completeTodo(todo.id)}><CheckCircle size={20} /></button>

            {/* Botão que irá deletar uma tarefa */}
            <button className='delete' onClick={() => removeTodo(todo.id)}><Trash size={20} /></button>

            {/* Botão para iniciar a edição de uma tarefa */}
            <button className='edit' onClick={() => startEditingTodo(todo.id, todo.texto)}><Pencil size={20} /></button>

          </div>
        </div>
    </StylesAgendamento>
  )
}

export default Agendamento

const StylesAgendamento = styled.li`
  width: 100%;
  padding: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 4px 4px 4px 0px rgba(0, 0, 0, 0.25);
  border-radius: 8px;
  background-color: ${props => props.theme.white50};;

  > .valor{
    font-weight: bold;
  }
`