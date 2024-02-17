import React from 'react'
import './Button.css'

export default function Button({ handleClick, text, color }) {
  return (
    <button onClick={handleClick}
      style={{ border: `1px solid ${color}`, color: `${color}` }}>{text}</button>
  )
}
