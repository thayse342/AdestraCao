import React from 'react'
import { StyleCard } from './card.style'

const Card = ({ icon, palavraChave, descricao }) => {
  return (
    <StyleCard>
      {icon}
      <p>{palavraChave}</p>
      <p>{descricao}</p>
    </StyleCard>
  )
}

export default Card
