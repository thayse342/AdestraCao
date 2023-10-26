import React from 'react'
import { StyleBannerfooter } from './bannerfooter.style'
import Input from '../Input/Input'
import Button from '../Button/Button'
import { WhatsappLogo } from '@phosphor-icons/react'
import Logo from '../Logo/Logo'

const Bannerfooter = ({ onClick }) => {
  return (
    <StyleBannerfooter>
      <div className="tituloESub">
        <h1>ENTRE EM CONTATO</h1>
        <p className='subtitulo'>E agende uma aula experimental</p>
      </div>

      <form>
        <Input width={"540px"} height={"60px"} placeholder={"email@email.com"} />
        <Button texto={"ENVIAR"} variant={"primary"} width={"100px"} height={"40px"} onClick={() => console.log("ok")} fontSize={"16px"} />
        <button className='whatslogo' onClick={onClick}><WhatsappLogo size={45} /></button>
      </form>
      <Logo className='logo' />
      <p className='direitosresevados'>Todos os direitos reservados©</p>
    </StyleBannerfooter>
  )
}

export default Bannerfooter
