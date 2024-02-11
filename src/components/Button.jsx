import React from 'react'
import './Button.css'

export default function Button({ mesaj, text, handleClick, color }) {
  return (
    <button onClick={() => handleClick(mesaj)}
      style={{ border: `1px solid ${color}`, color: `${color}` }}>{text}</button>
  )
}
