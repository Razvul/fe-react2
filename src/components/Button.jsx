import React from 'react'
import './Button.css'



export default function Button({mesaj, text}) {
  function apasaButon() {
    return alert(mesaj)
  }
  return (
    <button onClick={apasaButon}>{text}</button>
  )
}
