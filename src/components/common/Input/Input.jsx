import React from "react";
import { StyleInput } from './input.style'

const Input = ({ width, height, placeholder, type, value, onChange }) => {
  return (
    <StyleInput width={width} placeholder={placeholder} height={height} type={type} value={value} onChange={onChange} />
  )
}

export default Input;