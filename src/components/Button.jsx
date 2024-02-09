import React from 'react'
import './Button.css'



export default function Button({ mesaj, text, handleClick }) {



  return (
    <button onClick={() => handleClick(mesaj)}>{text}</button>
  )
}
