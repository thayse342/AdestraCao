import React from "react";
import { StyleInput } from './input.style'

const Input = ({ width, height, placeholder, type, value, onChange, label }) => {
  return (
    <StyleInput width={width} placeholder={placeholder} height={height} type={type} value={value} onChange={onChange} label={label} />
  )
}

export default Input;