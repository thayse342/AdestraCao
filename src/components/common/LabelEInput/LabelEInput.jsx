import React from 'react'
import { StyleLabelEInput } from './labelEInput.style'
import Input from '../Input/Input'

const LabelEInput = ({ label, placeholder }) => {
  return (
    <StyleLabelEInput>
      <label htmlFor="">{label}</label>
      <Input width={440} height={60} placeholder={placeholder} />
    </StyleLabelEInput>
  )
}

export default LabelEInput
